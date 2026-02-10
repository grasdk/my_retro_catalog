document.addEventListener("DOMContentLoaded", () => {
  const hostname = "retro_athlon_5350".trim();
  const container = document.querySelector(`.orbitcontainer.ns-${hostname}`);
  if (!container) return;

  const hardwareById = {"case_chieftec_bt-02b-u3-250vs": {"designation": "Chieftec Mini-ITX Case BT-02B-U3-250VS", "id": "case_chieftec_bt-02b-u3-250vs", "orig_consumer_price": "___$", "photos": {"back": "/mnt/d/VintagePC/BUILDS/Athlon 5350/Photos/case/mini-itx_4_back.jpg", "front": "/mnt/d/VintagePC/BUILDS/Athlon 5350/Photos/case/mini-itx_2_front.jpg", "front_on": "/mnt/d/VintagePC/BUILDS/Athlon 5350/Photos/case/mini-itx_3_front_on.jpg", "inside": "/mnt/d/VintagePC/BUILDS/Athlon 5350/Photos/case/mini-itx_5_inside.jpg", "inside_expanded": "/mnt/d/VintagePC/BUILDS/Athlon 5350/Photos/case/mini-itx_5_inside_expanded.jpg", "inside_front": "/mnt/d/VintagePC/BUILDS/Athlon 5350/Photos/case/mini-itx_7_inside_front.jpg", "perspective": "/mnt/d/VintagePC/BUILDS/Athlon 5350/Photos/case/mini-itx_1_perspective.jpg"}, "release_year": "2016", "retro_2025_price": "___$", "shortname": "Chieftec SFF (mITX)", "type": "Case"}, "cpu_amd_athlon_5350": {"designation": "AMD Athlon 5350 Boxed", "id": "cpu_amd_athlon_5350", "orig_consumer_price": "___$", "photos": {"label": "/mnt/d/VintagePC/HARDWARE/CPU/AMD Athlon 5350/photos/athlon-5350_0_label.jpg"}, "release_year": "2014", "retro_2025_price": "___$", "shortname": "Athlon 5350", "type": "CPU"}, "gfx_nvidia_quadro_k2000_pcie": {"designation": "NVidia Quadro K2000 2GB GDDR5", "id": "gfx_nvidia_quadro_k2000_pcie", "orig_consumer_price": "__$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/GFX/NVidia Quadro K2000/photos/quadro_k2000_2_bottom.jpg", "front": "/mnt/d/VintagePC/HARDWARE/GFX/NVidia Quadro K2000/photos/quadro_k2000_3_front.jpg", "top": "/mnt/d/VintagePC/HARDWARE/GFX/NVidia Quadro K2000/photos/quadro_k2000_1_top.jpg"}, "release_year": "2013", "retro_2025_price": "__$", "shortname": "Quadro K2000", "type": "Graphics"}, "mobo_asrock_am1h-itx": {"designation": "ASRock AM1H-ITX with onboard Realtek Network and Sound", "id": "mobo_asrock_am1h-itx", "orig_consumer_price": "___$", "photos": {"back": "/mnt/d/VintagePC/HARDWARE/MOBO/ASRock AM1H-ITX/photos/am1h-itx_4_back.jpg", "bottom": "/mnt/d/VintagePC/HARDWARE/MOBO/ASRock AM1H-ITX/photos/am1h-itx_2_bottom.jpg", "front": "/mnt/d/VintagePC/HARDWARE/MOBO/ASRock AM1H-ITX/photos/am1h-itx_3_front.jpg", "side": "/mnt/d/VintagePC/HARDWARE/MOBO/ASRock AM1H-ITX/photos/am1h-itx_6_side.jpg", "top": "/mnt/d/VintagePC/HARDWARE/MOBO/ASRock AM1H-ITX/photos/am1h-itx_1_top.jpg"}, "release_year": "2014", "retro_2025_price": "___$", "shortname": "ASRock AM1H-ITX", "type": "Motherboard"}, "optical_hitachi-lg_gh41n_dvd_rw_x16": {"designation": "Hitachi-LG GH41N DVD RW", "id": "optical_hitachi-lg_gh41n_dvd_rw_x16", "orig_consumer_price": "__$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/OPTICAL/Hitachi-LG GH41N/photos/gh41n_4_bottom.jpg", "front": "/mnt/d/VintagePC/HARDWARE/OPTICAL/Hitachi-LG GH41N/photos/gh41n_1_front.jpg", "front_and_back": "/mnt/d/VintagePC/HARDWARE/OPTICAL/Hitachi-LG GH41N/photos/gh41n_2_front_and_back.jpg", "sides": "/mnt/d/VintagePC/HARDWARE/OPTICAL/Hitachi-LG GH41N/photos/gh41n_4_sides.jpg", "top": "/mnt/d/VintagePC/HARDWARE/OPTICAL/Hitachi-LG GH41N/photos/gh41n_3_top.jpg"}, "release_year": "2010", "retro_2025_price": "__$", "shortname": "DVD-RW x 16", "type": "Optical drive"}, "ram_8gbmb_2x4gb_ddr3": {"designation": "8GB: 2 x 4GB Corsair CMX8GX3M2A1600C9 DDR3 RAM", "id": "ram_8gbmb_2x4gb_ddr3", "orig_consumer_price": "___$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/MOBO/ASRock AM1H-ITX/photos/ram/cmx8gx3m2a1600c9_2_bottom.jpg", "top": "/mnt/d/VintagePC/HARDWARE/MOBO/ASRock AM1H-ITX/photos/ram/cmx8gx3m2a1600c9_1_top.jpg"}, "release_year": "~2010", "retro_2025_price": "___$", "shortname": "8GB DDR3", "type": "RAM"}, "storage_western_digital_caviar_blue_250gb": {"designation": "Western Digital Caviar Blue WD2500AAJS SATA 7200RPM 250GB", "id": "storage_western_digital_caviar_blue_250gb", "orig_consumer_price": "___$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/HARDDISK/Western Digital Caviar Blue WD2500AAJS/photos/wd2500aajs_2_bottom.jpg", "front": "/mnt/d/VintagePC/HARDWARE/HARDDISK/Western Digital Caviar Blue WD2500AAJS/photos/wd2500aajs_3_front.jpg", "front_and_back": "/mnt/d/VintagePC/HARDWARE/HARDDISK/Western Digital Caviar Blue WD2500AAJS/photos/wd2500aajs_4_front_and_back.jpg", "sides": "/mnt/d/VintagePC/HARDWARE/HARDDISK/Western Digital Caviar Blue WD2500AAJS/photos/wd2500aajs_5_sides.jpg", "top": "/mnt/d/VintagePC/HARDWARE/HARDDISK/Western Digital Caviar Blue WD2500AAJS/photos/wd2500aajs_1_top.jpg"}, "release_year": "2006", "retro_2025_price": "__$", "shortname": "250GB HDD", "type": "Storage"}};

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

  // Close handlers (unchanged, but included for completeness)
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