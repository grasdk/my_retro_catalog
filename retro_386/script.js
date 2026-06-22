document.addEventListener("DOMContentLoaded", () => {
  const hostname = "retro_386".trim();
  const container = document.querySelector(`.orbitcontainer.ns-${hostname}`);
  if (!container) return;

  // 1. Load the pristine base dictionary supplied by your Ansible filter engine
  const hardwareById = {"adapter_com_to_ps2_emilum": {"designation": "Emilum PS2 to COM adapter", "id": "adapter_com_to_ps2_emilum", "orig_consumer_price": "40$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/MOUSE/Emilum Retro PC PS2 to COM/photos/com_ps2_adapter_2_bottom.jpg", "front": "/mnt/d/VintagePC/HARDWARE/MOUSE/Emilum Retro PC PS2 to COM/photos/com_ps2_adapter_3_front.jpg", "top": "/mnt/d/VintagePC/HARDWARE/MOUSE/Emilum Retro PC PS2 to COM/photos/com_ps2_adapter_1_top.jpg"}, "release_price": "45$", "release_year": "2025", "retro_2025_price": "40$", "shortname": "COM-to-PS/2", "type": "COM to PS/2 Adapter"}, "case_noname_baby_tower_at": {"designation": "Noname Baby Tower AT Case", "id": "case_noname_baby_tower_at", "orig_consumer_price": "125$", "photos": {"back": "/mnt/d/VintagePC/BUILDS/386/Photos/case/case_4_back.jpg", "front": "/mnt/d/VintagePC/BUILDS/386/Photos/case/case_3_front.jpg", "front_right_off": "/mnt/d/VintagePC/BUILDS/386/Photos/case/case_2_front_right_off.jpg", "front_right_on": "/mnt/d/VintagePC/BUILDS/386/Photos/case/case_1_front_right_on.jpg", "inside": "/mnt/d/VintagePC/BUILDS/386/Photos/case/case_5_inside.jpg"}, "release_price": "140$", "release_year": "\u003c1993", "retro_2025_price": "50$", "shortname": "Baby AT", "type": "Case"}, "cpu_amd_80386_40mhz": {"designation": "AMD 386DX-40", "id": "cpu_amd_80386_40mhz", "orig_consumer_price": "90$", "photos": {"top": "/mnt/d/VintagePC/HARDWARE/CPU/PGA132 - AMD 386 DX-40 A80386DXL-40/photos/amd-80386-dx-40-pga132-cut_1_top.jpg"}, "release_price": "240$", "release_year": "1991", "retro_2025_price": "55$", "shortname": "386 DX 40", "type": "CPU"}, "ctrl_ca8962": {"designation": "CA8962", "id": "ctrl_ca8962", "manual": [{"path": "HARDWARE/CTRL/CA8962/manual/"}], "orig_consumer_price": "40$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/CTRL/CA8962/photos/ca8962_2_bottom.jpg", "front": "/mnt/d/VintagePC/HARDWARE/CTRL/CA8962/photos/ca8962_3_front.jpg", "top": "/mnt/d/VintagePC/HARDWARE/CTRL/CA8962/photos/ca8962_1_top.jpg"}, "release_price": "75$", "release_year": "\u003c1992", "retro_2025_price": "30$", "short_dir": "CA8962", "shortname": "CA8962", "type": "Controller"}, "diskette_compaq_144": {"designation": "Compaq 23-10261U01 1.44MB", "id": "diskette_compaq_144", "orig_consumer_price": "40$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/DISKETTE/COMPAQ 23-10261U01/photos/compaq-23-10262u01_4_bottom.jpg", "front": "/mnt/d/VintagePC/HARDWARE/DISKETTE/COMPAQ 23-10261U01/photos/compaq-23-10262u01_1_front.jpg", "front2": "/mnt/d/VintagePC/HARDWARE/DISKETTE/COMPAQ 23-10261U01/photos/compaq-23-10262u01_1_front2.jpg", "top": "/mnt/d/VintagePC/HARDWARE/DISKETTE/COMPAQ 23-10261U01/photos/compaq-23-10262u01_3_top.jpg"}, "release_price": "45$", "release_year": "\u003c1992", "retro_2025_price": "20$", "shortname": "1.44MB FDD", "type": "Diskette drive"}, "gfx_diamond_stealth24_et4000_vlb": {"designation": "Diamond Stealth 24 ET4000 VLB 1MB DRAM", "drivers": [{"os": ["win3x"], "path": "HARDWARE/GFX/Diamond Stealth 24 ET4000 VLB/drivers/win3x/"}], "id": "gfx_diamond_stealth24_et4000_vlb", "orig_consumer_price": "210$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/GFX/Diamond Stealth 24 ET4000 VLB/photos/et4000vlb_2_bottom.jpg", "front": "/mnt/d/VintagePC/HARDWARE/GFX/Diamond Stealth 24 ET4000 VLB/photos/et4000vlb_3_front.jpg", "top": "/mnt/d/VintagePC/HARDWARE/GFX/Diamond Stealth 24 ET4000 VLB/photos/et4000vlb_1_top.jpg"}, "release_price": "240$", "release_year": "1993", "retro_2025_price": "175$", "short_dir": "ET4000", "shortname": "ET4000 VLB", "type": "Graphics"}, "mobo_edom_wintech_mv008_revf": {"designation": "Edom Wintech MV008 REV F", "id": "mobo_edom_wintech_mv008_revf", "manual": [{"path": "HARDWARE/MOBO/Edom Wintech MV008 REV F/manual/"}], "orig_consumer_price": "125$", "photos": {"back": "/mnt/d/VintagePC/HARDWARE/MOBO/Edom Wintech MV008 REV F/photos/wintech-mv008_4_back.jpg", "bottom": "/mnt/d/VintagePC/HARDWARE/MOBO/Edom Wintech MV008 REV F/photos/wintech-mv008_2_bottom.jpg", "front": "/mnt/d/VintagePC/HARDWARE/MOBO/Edom Wintech MV008 REV F/photos/wintech-mv008_3_front.jpg", "side1": "/mnt/d/VintagePC/HARDWARE/MOBO/Edom Wintech MV008 REV F/photos/wintech-mv008_5_side1.jpg", "side2": "/mnt/d/VintagePC/HARDWARE/MOBO/Edom Wintech MV008 REV F/photos/wintech-mv008_6_side2.jpg", "top": "/mnt/d/VintagePC/HARDWARE/MOBO/Edom Wintech MV008 REV F/photos/wintech-mv008_1_top.jpg"}, "release_price": "175$", "release_year": "\u003c1992", "retro_2025_price": "40$", "short_dir": "WT-MV008", "shortname": "Wintech MV008", "type": "Motherboard"}, "net_realtek_rtl8019": {"designation": "Realtek RTL8019", "drivers": [{"os": ["dos", "win3x", "win9x"], "path": "HARDWARE/LAN/RTL8019/drivers/"}], "id": "net_realtek_rtl8019", "orig_consumer_price": "30$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/LAN/RTL8019/photos/rtl8019as_2_bottom.jpg", "front": "/mnt/d/VintagePC/HARDWARE/LAN/RTL8019/photos/rtl8019as_3_front.jpg", "top": "/mnt/d/VintagePC/HARDWARE/LAN/RTL8019/photos/rtl8019as_1_top.jpg"}, "release_price": "50$", "release_year": "1996", "retro_2025_price": "20$", "short_dir": "RTL8019", "shortname": "RTL8019", "type": "Networking"}, "npu_cyrix_fasmath_40mhz": {"designation": "Cyrix FasMath 387DX 40 MHz", "id": "npu_cyrix_fasmath_40mhz", "orig_consumer_price": "120$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/CPU/PGA68 - Cyrix 387 FasMath/photos/cyrix_fasmath_2_bottom.jpg", "top": "/mnt/d/VintagePC/HARDWARE/CPU/PGA68 - Cyrix 387 FasMath/photos/cyrix-fasmath_1_top.jpg"}, "release_price": "195$", "release_year": "1991", "retro_2025_price": "35$", "shortname": "Cyrix FasMath", "type": "387 Coprocessor"}, "optical_msi_d16_ms8216_dvd_rom": {"designation": "MSI D16 MS-8216 DVD ROM", "id": "optical_msi_d16_ms8216_dvd_rom", "orig_consumer_price": "40$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/OPTICAL/MSI D16 MS-8216/photos/msi_d16_ms-8216_3_bottom.jpg", "front_and_back": "/mnt/d/VintagePC/HARDWARE/OPTICAL/MSI D16 MS-8216/photos/msi_d16_ms-8216_1_front_and_back.jpg", "top": "/mnt/d/VintagePC/HARDWARE/OPTICAL/MSI D16 MS-8216/photos/msi_d16_ms-8216_2_top.jpg"}, "release_price": "100$", "release_year": "2002", "retro_2025_price": "10$", "shortname": "DVD ROM x16", "type": "Optical drive"}, "ram_8x1mb": {"designation": "8x 1MB SIMM RAM", "id": "ram_8x1mb", "orig_consumer_price": "8 x 60$ = 480$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/MOBO/Edom Wintech MV008 REV F/photos/ram/8x1mb-simm-ram_2_bottom.jpg", "top": "/mnt/d/VintagePC/HARDWARE/MOBO/Edom Wintech MV008 REV F/photos/ram/8x1mb-simm-ram_1_top.jpg"}, "release_price": "480$", "release_year": "\u003c1990", "retro_2025_price": "50$", "shortname": "8 MB SIMM", "type": "RAM"}, "snd_soundblaster_pro2_ct1600": {"designation": "Soundblaster Pro 2 CT1600", "drivers": [{"os": ["dos", "win3x"], "path": "HARDWARE/SND/Soundblaster Pro 2/drivers/"}], "id": "snd_soundblaster_pro2_ct1600", "manual": [{"path": "HARDWARE/SND/Soundblaster Pro 2/manual/"}], "orig_consumer_price": "130$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/SND/Soundblaster Pro 2/photos/snd_2_bottom.jpg", "front": "/mnt/d/VintagePC/HARDWARE/SND/Soundblaster Pro 2/photos/snd_3_front.jpg", "top": "/mnt/d/VintagePC/HARDWARE/SND/Soundblaster Pro 2/photos/snd_1_top.jpg"}, "release_price": "150$", "release_year": "1991", "retro_2025_price": "130$", "short_dir": "SBPRO2", "shortname": "SB Pro 2", "type": "Sound"}, "storage_adapter_cf_ide_noname": {"designation": "Noname CF Card to IDE adapter", "id": "storage_adapter_cf_ide_noname", "orig_consumer_price": "5$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/HARDDISK/CF_IDE/photos/ide_cf_2_bottom.jpg", "front": "/mnt/d/VintagePC/HARDWARE/HARDDISK/CF_IDE/photos/ide_cf_3_front.jpg", "top": "/mnt/d/VintagePC/HARDWARE/HARDDISK/CF_IDE/photos/ide_cf_1_top.jpg"}, "release_price": "10$", "release_year": "2024", "retro_2025_price": "5$", "shortname": "CF Adapter", "type": "Storage adapter"}, "storage_cf_512mb": {"designation": "Noname CF Cards 512MB", "id": "storage_cf_512mb", "orig_consumer_price": "10$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/HARDDISK/CF_Card_512MB/photos/cfcard-512mb_4_bottom.jpg", "top": "/mnt/d/VintagePC/HARDWARE/HARDDISK/CF_Card_512MB/photos/cfcard-512mb_3_top.jpg"}, "release_price": "30$", "release_year": "2003", "retro_2025_price": "10$", "shortname": "CF Card", "type": "Storage"}};

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