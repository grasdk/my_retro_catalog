document.addEventListener("DOMContentLoaded", () => {
  const hostname = "retro_386_2".trim();
  const container = document.querySelector(`.orbitcontainer.ns-${hostname}`);
  if (!container) return;

  // 1. Load the pristine base dictionary supplied by your Ansible filter engine
  const hardwareById = {"case_noname_baby_tower_at_2": {"designation": "Noname Baby Tower AT Case", "id": "case_noname_baby_tower_at_2", "orig_consumer_price": "125$", "photos": {"front_right": "/mnt/d/VintagePC/BUILDS/386_2/Photos/Case/case_1_front_right.jpg"}, "release_price": "140$", "release_year": "\u003c1993", "retro_2025_price": "50$", "shortname": "Baby AT", "type": "Case"}, "cpu_amd_80386_40mhz_2": {"designation": "AMD 386DX-40", "id": "cpu_amd_80386_40mhz_2", "orig_consumer_price": "90$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/CPU/PGA132 - AMD 386 DX-40 A80386DXL-40/photos2/amd-80386-dx-40-pga132_2_bottom.jpg", "top": "/mnt/d/VintagePC/HARDWARE/CPU/PGA132 - AMD 386 DX-40 A80386DXL-40/photos2/amd-80386-dx-40-pga132_1_top.jpg"}, "release_price": "240$", "release_year": "1991", "retro_2025_price": "40$", "shortname": "386 DX 40", "type": "CPU"}, "ctrl_dlw_200": {"designation": "DLW200 Super IDE Controller Card (Winbond W83757F)", "id": "ctrl_dlw_200", "manual": [{"path": "HARDWARE/CTRL/DLW-200/manual/"}], "orig_consumer_price": "25$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/CTRL/DLW-200/photos/dlw200_2_bottom.jpg", "front": "/mnt/d/VintagePC/HARDWARE/CTRL/DLW-200/photos/dlw200_3_front.jpg", "top": "/mnt/d/VintagePC/HARDWARE/CTRL/DLW-200/photos/dlw200_1_top.jpg"}, "release_price": "35$", "release_year": "~1993", "retro_2025_price": "20$", "short_dir": "DLW200", "shortname": "DLW200 ISA IO", "type": "Controller"}, "diskette_teac_fd-235hf-3291-u_144": {"designation": "TEAC FD-235HF 3291-U 1.44MB", "id": "diskette_teac_fd-235hf-3291-u_144", "manual": [{"path": "HARDWARE/DISKETTE/TEAC FD-235HF C282-U5 Black/manual/"}], "orig_consumer_price": "20$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/DISKETTE/TEAC FD-235HF 3291-U Beige/photos/teac-fd-235hf-3291-u_3_bottom.jpg", "front_back": "/mnt/d/VintagePC/HARDWARE/DISKETTE/TEAC FD-235HF 3291-U Beige/photos/teac-fd-235hf-3291-u_1_front_back.jpg", "sides": "/mnt/d/VintagePC/HARDWARE/DISKETTE/TEAC FD-235HF 3291-U Beige/photos/teac-fd-235hf-3291-u_4_sides.jpg", "top": "/mnt/d/VintagePC/HARDWARE/DISKETTE/TEAC FD-235HF 3291-U Beige/photos/teac-fd-235hf-3291-u_2_top.jpg"}, "release_price": "35$", "release_year": "1998", "retro_2025_price": "12$", "short_dir": "TEAC-144M", "shortname": "1.44MB FDD", "type": "Diskette drive"}, "diskette_teac_fd-55gfr-193-u_120": {"designation": "TEAC FD-55GFR-193-U 1.2MB 5.25-inch", "id": "diskette_teac_fd-55gfr-193-u_120", "manual": [{"path": "HARDWARE/DISKETTE/TEAC FD-55GFR 193-U/manual/"}], "orig_consumer_price": "80$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/DISKETTE/TEAC FD-55GFR 193-U/photos/teac-fd-55gfr_3_bottom.jpg", "front_back": "/mnt/d/VintagePC/HARDWARE/DISKETTE/TEAC FD-55GFR 193-U/photos/teac-fd-55gfr_1_front_back.jpg", "sides": "/mnt/d/VintagePC/HARDWARE/DISKETTE/TEAC FD-55GFR 193-U/photos/teac-fd-55gfr_4_sides.jpg", "top": "/mnt/d/VintagePC/HARDWARE/DISKETTE/TEAC FD-55GFR 193-U/photos/teac-fd-55gfr_2_top.jpg"}, "release_price": "120$", "release_year": "1989", "retro_2025_price": "35$", "short_dir": "TEAC-12M", "shortname": "1.2MB FDD", "type": "Diskette drive"}, "gfx_diamond_speedstar_pro_gd5426": {"designation": "Diamond SpeedStar Pro (Cirrus Logic CL-GD5426-80QC-A) ISA", "id": "gfx_diamond_speedstar_pro_gd5426", "orig_consumer_price": "139$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/GFX/Diamond SpeedstarPro CL-GD5426-80QC-A/photos/gd5426_2_bottom.jpg", "front": "/mnt/d/VintagePC/HARDWARE/GFX/Diamond SpeedstarPro CL-GD5426-80QC-A/photos/gd5426_3_front.jpg", "top": "/mnt/d/VintagePC/HARDWARE/GFX/Diamond SpeedstarPro CL-GD5426-80QC-A/photos/gd5426_1_top.jpg"}, "release_price": "189$", "release_year": "1993", "retro_2025_price": "85$", "shortname": "SpeedStar Pro ISA", "type": "Graphics"}, "mobo_jetway_386wb": {"designation": "Jetway J-386WB AMD/Intel 386 Motherboard", "id": "mobo_jetway_386wb", "orig_consumer_price": "110$", "photos": {"back": "/mnt/d/VintagePC/HARDWARE/MOBO/Jetway 386WB/photos/386wb_4_back.jpg", "bottom": "/mnt/d/VintagePC/HARDWARE/MOBO/Jetway 386WB/photos/386wb_2_bottom.jpg", "front": "/mnt/d/VintagePC/HARDWARE/MOBO/Jetway 386WB/photos/386wb_3_front.jpg", "side1": "/mnt/d/VintagePC/HARDWARE/MOBO/Jetway 386WB/photos/386wb_5_side1.jpg", "side2": "/mnt/d/VintagePC/HARDWARE/MOBO/Jetway 386WB/photos/386wb_6_side2.jpg", "top": "/mnt/d/VintagePC/HARDWARE/MOBO/Jetway 386WB/photos/386wb_1_top.jpg"}, "release_price": "150$", "release_year": "~1992", "retro_2025_price": "90$", "shortname": "Jetway 386WB", "type": "Motherboard"}, "ram_8x1mb_2": {"designation": "8x 1MB SIMM RAM", "id": "ram_8x1mb_2", "orig_consumer_price": "8 x 60$ = 480$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/MOBO/Edom Wintech MV008 REV F/photos/ram/8x1mb-simm-ram_2_bottom.jpg", "top": "/mnt/d/VintagePC/HARDWARE/MOBO/Edom Wintech MV008 REV F/photos/ram/8x1mb-simm-ram_1_top.jpg"}, "release_price": "480$", "release_year": "\u003c1990", "retro_2025_price": "50$", "shortname": "8 MB SIMM", "type": "RAM"}, "snd_soundblaster_awe32_ct2760_2": {"designation": "Creative Sound Blaster AWE32 (CT2760) ISA", "drivers": [{"os": ["dos"], "path": "HARDWARE/SND/Soundblaster AWE32 AWE64 SB32/DOS/"}, {"os": ["win3x"], "path": "HARDWARE/SND/Soundblaster AWE32 AWE64 SB32/WIN31/"}, {"os": ["win9x"], "path": "HARDWARE/SND/Soundblaster AWE32 AWE64 SB32/WIN95/"}], "id": "snd_soundblaster_awe32_ct2760_2", "manual": [{"path": "HARDWARE/SND/Soundblaster AWE32 CT2760/manual/"}], "orig_consumer_price": "199$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/SND/Soundblaster AWE32 CT2760/photos2/ct2760-2_2_bottom.jpg", "front": "/mnt/d/VintagePC/HARDWARE/SND/Soundblaster AWE32 CT2760/photos2/ct2760-2_3_front.jpg", "top": "/mnt/d/VintagePC/HARDWARE/SND/Soundblaster AWE32 CT2760/photos2/ct2760-2_1_top.jpg"}, "release_price": "249$", "release_year": "1994", "retro_2025_price": "150$", "short_dir": "SBCT2760", "shortname": "SB AWE32 CT2760", "type": "Sound"}, "storage_seagate_st3144a_131mb": {"designation": "Seagate ST3144A 131MB IDE", "id": "storage_seagate_st3144a_131mb", "orig_consumer_price": "300$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/HARDDISK/Seagate ST3144A 131MB IDE/photos/st3144a_2_bottom.jpg", "front_back": "/mnt/d/VintagePC/HARDWARE/HARDDISK/Seagate ST3144A 131MB IDE/photos/st3144a_3_front_back.jpg", "sides": "/mnt/d/VintagePC/HARDWARE/HARDDISK/Seagate ST3144A 131MB IDE/photos/st3144a_4_sides.jpg", "top": "/mnt/d/VintagePC/HARDWARE/HARDDISK/Seagate ST3144A 131MB IDE/photos/st3144a_1_top.jpg"}, "release_price": "450$", "release_year": "1991", "retro_2025_price": "25$", "shortname": "ST3144A", "type": "Harddisk"}, "storage_wdc_caviar_2420_425mb": {"designation": "Western Digital Caviar 2420 425MB IDE", "id": "storage_wdc_caviar_2420_425mb", "orig_consumer_price": "350$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/HARDDISK/Western Digital Caviar 2420 425MB IDE/photos/wd2420_2_bottom.jpg", "front_back": "/mnt/d/VintagePC/HARDWARE/HARDDISK/Western Digital Caviar 2420 425MB IDE/photos/wd2420_3_front_back.jpg", "sides": "/mnt/d/VintagePC/HARDWARE/HARDDISK/Western Digital Caviar 2420 425MB IDE/photos/wd2420_4_sides.jpg", "top": "/mnt/d/VintagePC/HARDWARE/HARDDISK/Western Digital Caviar 2420 425MB IDE/photos/wd2420_1_top.jpg"}, "release_price": "520$", "release_year": "1993", "retro_2025_price": "30$", "shortname": "Caviar 2420", "type": "Harddisk"}};

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