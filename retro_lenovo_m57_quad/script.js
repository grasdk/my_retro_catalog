document.addEventListener("DOMContentLoaded", () => {
  const hostname = "retro_lenovo_m57_quad".trim();
  const container = document.querySelector(`.orbitcontainer.ns-${hostname}`);
  if (!container) return;

  // 1. Load the pristine base dictionary supplied by your Ansible filter engine
  const hardwareById = {"case_lenovo_m57_sff": {"designation": "Lenovo M57 Small Form Factor", "id": "case_lenovo_m57_sff", "orig_consumer_price": "50$", "photos": {"back": "/mnt/d/VintagePC/BUILDS/Core2Quad/Photos/case/lenovo-m57_3_back.jpg", "front": "/mnt/d/VintagePC/BUILDS/Core2Quad/Photos/case/lenovo-m57_2_front.jpg", "front_right": "/mnt/d/VintagePC/BUILDS/Core2Quad/Photos/case/lenovo-m57_1_front_right.jpg", "top": "/mnt/d/VintagePC/BUILDS/Core2Quad/Photos/case/lenovo-m57_4_top.jpg", "top_open": "/mnt/d/VintagePC/BUILDS/Core2Quad/Photos/case/lenovo-m57_5_top_open.jpg", "top_open_expanded": "/mnt/d/VintagePC/BUILDS/Core2Quad/Photos/case/lenovo-m57_6_top_open_expanded.jpg"}, "release_price": "80$", "release_year": "2007", "retro_2025_price": "20$", "shortname": "Lenovo M57 SFF", "type": "Case"}, "cpu_intel_core_2_quad_q6600_24ghz_slacr": {"designation": "Intel Core 2 Quad Q6600 2.4 GHz SLACR Kentsfield", "id": "cpu_intel_core_2_quad_q6600_24ghz_slacr", "orig_consumer_price": "266$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/CPU/LGA775 - Intel Core 2 Quad Q6600 2.4 GHz - SLACR/photos/slacr_2_bottom.jpg", "top": "/mnt/d/VintagePC/HARDWARE/CPU/LGA775 - Intel Core 2 Quad Q6600 2.4 GHz - SLACR/photos/slacr_1_top.jpg"}, "release_price": "851$", "release_year": "2007", "retro_2025_price": "15$", "shortname": "Q6600", "type": "CPU"}, "gfx_nvidia_quadro_k620_pcie": {"designation": "NVIDIA Quadro K620 2GB DDR3 PCIe", "drivers": [{"os": ["winxp"], "path": "HARDWARE/GFX/Nvidia_Generic/WinXP/355.98-desktop-winxp-32bit-international/"}], "id": "gfx_nvidia_quadro_k620_pcie", "orig_consumer_price": "160$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/GFX/NVidia Quadro K620 PCIe/photos/k620_2_bottom.jpg", "bottom_full_bracket": "/mnt/d/VintagePC/HARDWARE/GFX/NVidia Quadro K620 PCIe/photos/k620_5_bottom_full_bracket.jpg", "front": "/mnt/d/VintagePC/HARDWARE/GFX/NVidia Quadro K620 PCIe/photos/k620_3_front.jpg", "front_full_bracket": "/mnt/d/VintagePC/HARDWARE/GFX/NVidia Quadro K620 PCIe/photos/k620_6_front_full_bracket.jpg", "top": "/mnt/d/VintagePC/HARDWARE/GFX/NVidia Quadro K620 PCIe/photos/k620_1_top.jpg", "top_full_bracket": "/mnt/d/VintagePC/HARDWARE/GFX/NVidia Quadro K620 PCIe/photos/k620_4_top_full_bracket.jpg"}, "release_price": "230$", "release_year": "2014", "retro_2025_price": "20$", "short_dir": "NV-K620", "shortname": "Quadro K620", "type": "Graphics"}, "mobo_lenovo_thinkcentre_m57p": {"designation": "Lenovo ThinkCentre M57p LGA775 Motherboard FRU 87H5144HP", "drivers": [{"os": ["winxp"], "path": "HARDWARE/MOBO/Lenovo ThinkCentre M57p/drivers/"}], "id": "mobo_lenovo_thinkcentre_m57p", "orig_consumer_price": "60$", "photos": {"back": "/mnt/d/VintagePC/HARDWARE/MOBO/Lenovo ThinkCentre M57p/photos/m57p_4_back.jpg", "bottom": "/mnt/d/VintagePC/HARDWARE/MOBO/Lenovo ThinkCentre M57p/photos/m57p_2_bottom.jpg", "front": "/mnt/d/VintagePC/HARDWARE/MOBO/Lenovo ThinkCentre M57p/photos/m57p_3_front.jpg", "top": "/mnt/d/VintagePC/HARDWARE/MOBO/Lenovo ThinkCentre M57p/photos/m57p_1_top.jpg"}, "release_price": "25$", "release_year": "2007", "retro_2025_price": "15$", "short_dir": "M57P", "shortname": "ThinkCentre M57p MB", "type": "Motherboard"}, "optical_sony_ddu1671s_dvdrom_x16": {"designation": "Sony-NEC-Optiarc DDU1671S DVD ROM", "id": "optical_sony_ddu1671s_dvdrom_x16", "orig_consumer_price": "55$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/OPTICAL/Sony-NEC-Optiarc DDU1671S/photos/ddu1671s_4_bottom.jpg", "front": "/mnt/d/VintagePC/HARDWARE/OPTICAL/Sony-NEC-Optiarc DDU1671S/photos/ddu1671s_1_front.jpg", "front_and_back": "/mnt/d/VintagePC/HARDWARE/OPTICAL/Sony-NEC-Optiarc DDU1671S/photos/ddu1671s_2_front_and_back.jpg", "sides": "/mnt/d/VintagePC/HARDWARE/OPTICAL/Sony-NEC-Optiarc DDU1671S/photos/ddu1671s_5_sides.jpg", "top": "/mnt/d/VintagePC/HARDWARE/OPTICAL/Sony-NEC-Optiarc DDU1671S/photos/ddu1671s_3_top.jpg"}, "release_price": "90$", "release_year": "2007", "retro_2025_price": "12$", "shortname": "DVD-ROM x16", "type": "Optical drive"}, "ram_240pin_4gb_2x2gb_ddr2": {"designation": "4GB: 2 x 2GB DDR2 RAM", "id": "ram_240pin_4gb_2x2gb_ddr2", "orig_consumer_price": "45$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/MOBO/Lenovo ThinkCentre M57p/photos/ram/2x2gb-ddr2-ktm4982_2_bottom.jpg", "top": "/mnt/d/VintagePC/HARDWARE/MOBO/Lenovo ThinkCentre M57p/photos/ram/2x2gb-ddr2-ktm4982_1_top.jpg"}, "release_price": "75$", "release_year": "~2005", "retro_2025_price": "20$", "shortname": "4GB DDR2", "type": "RAM"}, "storage_seagate_barracuda_250gb_st3250620as": {"designation": "Seagate Barracuda ST3250620AS SATA 7200RPM 250GB", "id": "storage_seagate_barracuda_250gb_st3250620as", "orig_consumer_price": "95$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/HARDDISK/Seagate Barracuda ST3250620AS 250GB/photos/st3250620as_2_bottom.jpg", "front_and_back": "/mnt/d/VintagePC/HARDWARE/HARDDISK/Seagate Barracuda ST3250620AS 250GB/photos/st3250620as_3_front_and_back.jpg", "sides": "/mnt/d/VintagePC/HARDWARE/HARDDISK/Seagate Barracuda ST3250620AS 250GB/photos/st3250620as_4_sides.jpg", "top": "/mnt/d/VintagePC/HARDWARE/HARDDISK/Seagate Barracuda ST3250620AS 250GB/photos/st3250620as_1_top.jpg"}, "release_price": "160$", "release_year": "2006", "retro_2025_price": "18$", "shortname": "250GB HDD", "type": "Storage"}};

  // 2. SAFE JAVASCRIPT PATCH: Dynamic Component Registration
  // Scans hidden structural components and registers fallback profiles for configs
  document.querySelectorAll('#hidden-config-orbit .component, #hidden-config-specs tr').forEach(el => {
    const id = el.dataset.compId;
    if (id && !hardwareById[id]) {
      hardwareById[id] = {
        id: id,
        type: el.dataset.compType,
        shortname: el.querySelector('figcaption')?.textContent?.split('—')?.[0]?.trim() || el.dataset.compType,
        designation: el.getAttribute('title') || el.dataset.compType,
        photos: {}
      };
    }
  });

  // 3. SAFE JAVASCRIPT PATCH: Dynamic Deep Photo Discovery
  // Deep-harvests EVERY available photo angle from the hidden gallery layout for alternate items
  document.querySelectorAll('#hidden-config-gallery .photo-card').forEach((card) => {
    const id = card.dataset.compId;
    if (id && hardwareById[id]) {
      const img = card.querySelector('img');
      if (img && img.getAttribute('src')) {
        const fullSrc = img.getAttribute('src');
        const filename = fullSrc.split('/').pop();
        
        // Ensure we build out an index array (angle_0, angle_1, etc.) for all matching photos
        const currentPhotoCount = Object.keys(hardwareById[id].photos).length;
        const photoKey = `angle_${currentPhotoCount}`;
        
        // Prevent duplicate images from cluttering the same profile entry
        if (!Object.values(hardwareById[id].photos).includes(filename)) {
          hardwareById[id].photos[photoKey] = filename;
        }
      }
    }
  });

  const panel = document.getElementById("hover-panel");
  const panelContent = document.getElementById("panel-content");
  if (!panel || !panelContent) return;

  function showComponent(comp) {
    if (!comp) return;

    // Single title computation - designation has highest priority
    const title = comp?.designation 
      || comp?.shortname 
      || comp?.type 
      || 'Unknown Component';

    const titleHtml = `<h2 class="popup-title">${title}</h2>`;

    let content = '<p style="opacity:0.7; margin-top:1rem;">No photos available yet</p>';

    if (comp?.photos && Object.keys(comp.photos).length > 0) {
      const imagesHtml = Object.entries(comp.photos)
        .sort(([, a], [, b]) => a.localeCompare(b, undefined, { numeric: true }))
        .map(([, path]) => {
          const filename = path.split('/').pop();
          const isSinglePage = window.location.pathname.includes(`/${hostname}/`);
          const src = isSinglePage ? `photos/${filename}` : `${hostname}/photos/${filename}`;
          return `<img src="${src}" loading="lazy" alt="${title}">`;
        })
        .join('');

      content = `<div class="popup-scroll">${imagesHtml}</div>`;
    }

    panelContent.innerHTML = titleHtml + content;
    panel.classList.add("active");
  }

  // Unified click handler — works for both .component and .case-center
  container.addEventListener("click", (e) => {
    const clickable = e.target.closest(".component, .case-center");
    if (!clickable) return;

    const compId = clickable.dataset.compId;
    if (!compId) return;

    const comp = hardwareById[compId];
    if (comp) {
      showComponent(comp);
    }
  });

  // Set cursor pointer on hoverable elements
  container.querySelectorAll(".component, .case-center").forEach(el => {
    el.style.cursor = "pointer";
  });

  // Close handlers
  if (!panel.dataset.ready) {
    document.getElementById("close-panel")?.addEventListener("click", () => {
      panel.classList.remove("active");
    });
    panel.addEventListener("click", e => {
      if (e.target === panel) panel.classList.remove("active");
    });
    panel.dataset.ready = "true";
  }
});