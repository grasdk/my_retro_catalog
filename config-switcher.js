/**
 * Main Orchestration Engine to swap hardware configurations
 */
function switchToConfig(x) {
  const config = String(x);
  let swappedTypes = new Set();

  // 1. Swap Orbit Components (1-to-1 sequential layout pairing)
  const orbitTypes = swapContainers({
    config: config,
    hiddenSelector: '#hidden-config-orbit',
    visibleSelector: '.orbit',
    itemSelector: '.component'
  });
  if (orbitTypes) orbitTypes.forEach(t => swappedTypes.add(t));

  // 2. Swap Specs Table Rows (1-to-1 sequential row pairing)
  const specsTypes = swapContainers({
    config: config,
    hiddenSelector: '#hidden-config-specs',
    visibleSelector: '.specs-table tbody', // Directly targets body rows to bypass header
    itemSelector: 'tr'
  });
  if (specsTypes) specsTypes.forEach(t => swappedTypes.add(t));

  // 3. Swap Gallery Component Photo Batches (Grouped together by Type + ID)
  const galleryTypes = swapGalleryContainers({
    config: config,
    hiddenSelector: '#hidden-config-gallery',
    visibleSelector: '.gallery',
    itemSelector: '.photo-card'
  });
  if (galleryTypes) galleryTypes.forEach(t => swappedTypes.add(t));

  if (swappedTypes.size > 0) {
    console.info(`switchToConfig: Successfully swapped config ${config} for types: [${Array.from(swappedTypes).join(', ')}]`);
    return Array.from(swappedTypes);
  }
}

/**
 * Helper to swap 1-to-1 sequential components (Orbit & Specs rows)
 * Gracefully handles identical duplicates sequentially using index bounds.
 */
function swapContainers({ config, hiddenSelector, visibleSelector, itemSelector }) {
  const hiddenContainer = document.querySelector(hiddenSelector);
  const visibleContainer = document.querySelector(visibleSelector);
  if (!hiddenContainer || !visibleContainer) return null;

  const hiddenElements = Array.from(hiddenContainer.querySelectorAll(`${itemSelector}[data-comp-config="${CSS.escape(config)}"]`));
  if (!hiddenElements.length) return null;

  // Group hidden elements by type into item lists
  const hiddenByType = new Map();
  hiddenElements.forEach((el) => {
    const type = el.dataset.compType;
    if (type) {
      if (!hiddenByType.has(type)) hiddenByType.set(type, []);
      hiddenByType.get(type).push(el);
    }
  });

  // Group active visible elements by type into item lists
  const visibleElements = Array.from(visibleContainer.querySelectorAll(itemSelector));
  const visibleByType = new Map();
  visibleElements.forEach((el) => {
    const type = el.dataset.compType;
    if (type) {
      if (!visibleByType.has(type)) visibleByType.set(type, []);
      visibleByType.get(type).push(el);
    }
  });

  // Sequentially pair matching types up safely
  const swaps = [];
  for (const [type, visibleList] of visibleByType.entries()) {
    const hiddenList = hiddenByType.get(type) || [];
    const matchCount = Math.min(visibleList.length, hiddenList.length);
    for (let i = 0; i < matchCount; i++) {
      swaps.push({ visible: visibleList[i], hidden: hiddenList[i] });
    }
  }

  if (!swaps.length) return null;

  // Safety break: check if targets are already visibly operational
  if (swaps.every(({ visible, hidden }) => visible.dataset.compConfig === hidden.dataset.compConfig)) {
    return null;
  }

  // Swap HTML contents and target datasets
  swaps.forEach(({ visible, hidden }) => {
    const visibleHtml = visible.innerHTML;
    const hiddenHtml = hidden.innerHTML;
    const visibleData = { ...visible.dataset };
    const hiddenData = { ...hidden.dataset };

    visible.innerHTML = hiddenHtml;
    Object.assign(visible.dataset, hiddenData);
    hidden.innerHTML = visibleHtml;
    Object.assign(hidden.dataset, visibleData);
  });

  return swaps.map(({ visible }) => visible.dataset.compType);
}

/**
 * Specialized helper to swap full element groups matching Type + ID (Gallery)
 * Extracts entire subsets of elements together avoiding broken innerHTML mappings.
 */
function swapGalleryContainers({ config, hiddenSelector, visibleSelector, itemSelector }) {
  const hiddenContainer = document.querySelector(hiddenSelector);
  const visibleContainer = document.querySelector(visibleSelector);
  if (!hiddenContainer || !visibleContainer) return null;

  // Gather hidden layout photo cards
  const hiddenElements = Array.from(hiddenContainer.querySelectorAll(`${itemSelector}[data-comp-config="${CSS.escape(config)}"]`));
  if (!hiddenElements.length) return null;

  // Group hidden gallery items into composite arrays using custom key (Type_ID)
  const hiddenByGroup = new Map();
  hiddenElements.forEach((el) => {
    const type = el.dataset.compType;
    const id = el.dataset.compId;
    if (type && id) {
      const key = `${type}_${id}`;
      if (!hiddenByGroup.has(key)) hiddenByGroup.set(key, []);
      hiddenByGroup.get(key).push(el);
    }
  });

  // Gather active gallery layout cards
  const visibleElements = Array.from(visibleContainer.querySelectorAll(itemSelector));
  const visibleByGroup = new Map();
  visibleElements.forEach((el) => {
    const type = el.dataset.compType;
    const id = el.dataset.compId;
    if (type && id) {
      const key = `${type}_${id}`;
      if (!visibleByGroup.has(key)) visibleByGroup.set(key, []);
      visibleByGroup.get(key).push(el);
    }
  });

  const swappedTypes = new Set();

  // Match photo blocks up via base hardware component Type signature
  for (const hiddenKey of hiddenByGroup.keys()) {
    const [hiddenType] = hiddenKey.split('_');

    // Look for currently rendering visible matching components
    const visibleKey = Array.from(visibleByGroup.keys()).find(k => k.startsWith(`${hiddenType}_`));
    
    if (visibleKey) {
      const hiddenBatch = hiddenByGroup.get(hiddenKey);
      const visibleBatch = visibleByGroup.get(visibleKey);

      // Halt if target configuration matches are already loaded
      if (visibleBatch[0].dataset.compConfig === hiddenBatch[0].dataset.compConfig) {
        continue; 
      }

      // Generate visual placeholder point marker tracking active placement locations
      const placeholder = document.createTextNode('');
      visibleBatch[0].parentNode.insertBefore(placeholder, visibleBatch[0]);

      // Move existing layout nodes directly into storage
      visibleBatch.forEach(el => hiddenContainer.appendChild(el));

      // Append incoming layout targets directly at our generated tracking anchor point
      hiddenBatch.forEach(el => placeholder.parentNode.insertBefore(el, placeholder));

      // Clean up placeholder from active tree structures
      placeholder.parentNode.removeChild(placeholder);

      swappedTypes.add(hiddenType);
      visibleByGroup.delete(visibleKey);
    }
  }

  return swappedTypes.size > 0 ? Array.from(swappedTypes) : null;
}

/**
 * =============================================================
 * DROP-DOWN SELECTOR ACTIONS
 * =============================================================
 */

/**
 * Toggles visibility of the cyberpunk configuration dropdown menu
 */
function toggleConfigMenu(event) {
  event.stopPropagation();
  const menu = document.getElementById('config-dropdown-menu');
  if (!menu) return;

  const wrapper = menu.parentElement;
  menu.classList.toggle('show');
  wrapper.classList.toggle('open');
}

/**
 * Executes state configurations from selected links
 */
function selectConfig(event, configId) {
  event.preventDefault();
  
  // Trigger main swap mechanism
  switchToConfig(configId);

  // Automatically shut dropdown menu drawer
  const menu = document.getElementById('config-dropdown-menu');
  if (menu) {
    menu.classList.remove('show');
    menu.parentElement.classList.remove('open');
  }
}

// Close dropdown automatically if clicking empty spaces on viewport surface layout
if (typeof window !== 'undefined') {
  window.addEventListener('click', function() {
    const menu = document.getElementById('config-dropdown-menu');
    if (menu && menu.classList.contains('show')) {
      menu.classList.remove('show');
      menu.parentElement.classList.remove('open');
    }
  });
  
  // Expose methods to window context explicitly
  window.switchToConfig = switchToConfig;
  window.toggleConfigMenu = toggleConfigMenu;
  window.selectConfig = selectConfig;
}