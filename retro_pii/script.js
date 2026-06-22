document.addEventListener("DOMContentLoaded", () => {
  const hostname = "retro_pii".trim();
  const container = document.querySelector(`.orbitcontainer.ns-${hostname}`);
  if (!container) return;

  // 1. Load the pristine base dictionary supplied by your Ansible filter engine
  const hardwareById = {"case_gembird_fornax_1000w": {"designation": "Gembird Fornax 1000W (ATX)", "id": "case_gembird_fornax_1000w", "orig_consumer_price": "36$", "photos": {"back": "/mnt/d/VintagePC/BUILDS/Pentium II(I)/Photos/case/gembird_4_back.jpg", "front_off": "/mnt/d/VintagePC/BUILDS/Pentium II(I)/Photos/case/gembird_2_front_off.jpg", "front_on": "/mnt/d/VintagePC/BUILDS/Pentium II(I)/Photos/case/gembird_3_front_on.jpg", "front_side": "/mnt/d/VintagePC/BUILDS/Pentium II(I)/Photos/case/gembird_1_front_side.jpg", "inside_side": "/mnt/d/VintagePC/BUILDS/Pentium II(I)/Photos/case/gembird_6_inside_side.jpg", "inside_top": "/mnt/d/VintagePC/BUILDS/Pentium II(I)/Photos/case/gembird_7_inside_top.jpg", "inside_top_on": "/mnt/d/VintagePC/BUILDS/Pentium II(I)/Photos/case/gembird_8_inside_top_on.jpg"}, "release_price": "60$", "release_year": "2021", "retro_2025_price": "36$", "shortname": "Fornax 1000W (ATX)", "type": "Case"}, "cpu_intel_pentium_iii_500mhz": {"designation": "Intel Pentium III 500 MHz SL35E Katmai", "id": "cpu_intel_pentium_iii_500mhz", "orig_consumer_price": "350$", "photos": {"back": "/mnt/d/VintagePC/HARDWARE/CPU/SLOT 1 - Intel Pentium III 500 MHz - SL35E/photos/sl35e_2_back.jpg", "front": "/mnt/d/VintagePC/HARDWARE/CPU/SLOT 1 - Intel Pentium III 500 MHz - SL35E/photos/sl35e_2_front.jpg", "top": "/mnt/d/VintagePC/HARDWARE/CPU/SLOT 1 - Intel Pentium III 500 MHz - SL35E/photos/sl35e_1_top.jpg"}, "release_price": "696$", "release_year": "1999", "retro_2025_price": "20$", "shortname": "PIII 500", "type": "CPU"}, "diskette_teac_fd-235hf-c282-u5_144": {"designation": "TEAC FD-235 1.44MB", "id": "diskette_teac_fd-235hf-c282-u5_144", "manual": [{"path": "HARDWARE/DISKETTE/TEAC FD-235HF C282-U5 Black/manual/"}], "orig_consumer_price": "35$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/DISKETTE/TEAC FD-235HF C282-U5 Black/photos/teac-fd-235_4_bottom.jpg", "front": "/mnt/d/VintagePC/HARDWARE/DISKETTE/TEAC FD-235HF C282-U5 Black/photos/teac-fd-235_1_front.jpg", "front_and_back": "/mnt/d/VintagePC/HARDWARE/DISKETTE/TEAC FD-235HF C282-U5 Black/photos/teac-fd-235_2_front_and_back.jpg", "sides": "/mnt/d/VintagePC/HARDWARE/DISKETTE/TEAC FD-235HF C282-U5 Black/photos/teac-fd-235_5_sides.jpg", "top": "/mnt/d/VintagePC/HARDWARE/DISKETTE/TEAC FD-235HF C282-U5 Black/photos/teac-fd-235_3_top.jpg"}, "release_price": "90$", "release_year": "~2003", "retro_2025_price": "25$", "short_dir": "TEAC-144", "shortname": "1.44MB FDD", "type": "Diskette drive"}, "gfx_asus_v7100pro_gf2_mx400": {"designation": "Asus V7100 PRO GeForce2 MX400 AGP", "drivers": [{"os": ["win9x"], "path": "HARDWARE/GFX/AsusV7100PRO GF2 MX400/drivers/nv5655_98SEME/"}, {"os": ["winxp"], "path": "HARDWARE/GFX/AsusV7100PRO GF2 MX400/drivers/nv5655_2kXP/"}], "id": "gfx_asus_v7100pro_gf2_mx400", "orig_consumer_price": "90$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/GFX/AsusV7100PRO GF2 MX400/photos/v7100pro_2_bottom.jpg", "front": "/mnt/d/VintagePC/HARDWARE/GFX/AsusV7100PRO GF2 MX400/photos/v7100pro_3_front.jpg", "top": "/mnt/d/VintagePC/HARDWARE/GFX/AsusV7100PRO GF2 MX400/photos/v7100pro_1_top.jpg"}, "release_price": "150$", "release_year": "2001", "retro_2025_price": "25$", "short_dir": "V7100PRO", "shortname": "Asus V7100PRO", "type": "Graphics"}, "gfx_diamond_voodoo2_3dfx_8mb": {"designation": "Diamond Monster 3D II Voodoo2 3DFX 8MB EDO DRAM PCI", "drivers": [{"os": ["dos"], "path": "HARDWARE/GFX/Voodoo2/drivers/DOS"}, {"os": ["win9x"], "path": "HARDWARE/GFX/Voodoo2/drivers/Win9x"}], "id": "gfx_diamond_voodoo2_3dfx_8mb", "orig_consumer_price": "250$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/GFX/Voodoo2/photos/diamond_voodoo2_8mb_2_bottom.jpg", "front": "/mnt/d/VintagePC/HARDWARE/GFX/Voodoo2/photos/diamond_voodoo2_8mb_3_front.jpg", "top": "/mnt/d/VintagePC/HARDWARE/GFX/Voodoo2/photos/diamond_voodoo2_8mb_1_top.jpg"}, "release_price": "350$", "release_year": "1998", "retro_2025_price": "85$", "shortname": "3dfx Voodoo2 8MB", "type": "Graphics_3dfx"}, "mobo_asus_p2b": {"designation": "ASUS P2B", "id": "mobo_asus_p2b", "manual": [{"path": "HARDWARE/MOBO/ASUS P2BF/manual/"}], "orig_consumer_price": "120$", "photos": {"back": "/mnt/d/VintagePC/HARDWARE/MOBO/ASUS P2BF/photos/asus_p2b_4_back.jpg", "bottom": "/mnt/d/VintagePC/HARDWARE/MOBO/ASUS P2BF/photos/asus_p2b_2_bottom.jpg", "front": "/mnt/d/VintagePC/HARDWARE/MOBO/ASUS P2BF/photos/asus_p2b_3_front.jpg", "side_1": "/mnt/d/VintagePC/HARDWARE/MOBO/ASUS P2BF/photos/asus_p2b_5_side_1.jpg", "side_2": "/mnt/d/VintagePC/HARDWARE/MOBO/ASUS P2BF/photos/asus_p2b_6_side_2.jpg", "top": "/mnt/d/VintagePC/HARDWARE/MOBO/ASUS P2BF/photos/asus_p2b_1_top.jpg", "top_cpu_ram": "/mnt/d/VintagePC/HARDWARE/MOBO/ASUS P2BF/photos/asus_p2b_7_top_cpu_ram.jpg"}, "release_price": "170$", "release_year": "1998", "retro_2025_price": "40$", "short_dir": "ASUS-P2B", "shortname": "ASUS P2B", "type": "Motherboard"}, "net_asus_nx1101": {"designation": "Asus NX1101 (10/100/1000Mbit)", "drivers": [{"os": ["dos", "win3x", "win9x", "winxp"], "path": "HARDWARE/LAN/Asus NX1101/drivers/"}], "id": "net_asus_nx1101", "orig_consumer_price": "60$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/LAN/Asus NX1101/photos/asus_nx1101_2_bottom.jpg", "front": "/mnt/d/VintagePC/HARDWARE/LAN/Asus NX1101/photos/asus_nx1101_3_front.jpg", "top": "/mnt/d/VintagePC/HARDWARE/LAN/Asus NX1101/photos/asus_nx1101_1_top.jpg"}, "release_price": "89$", "release_year": "2011", "retro_2025_price": "15$", "shortname": "NX1101", "type": "Networking"}, "optical_sony_ad-5170a_dvd_rw_x16": {"designation": "Sony-NEC-Optiarc AD-5170A DVD RW", "id": "optical_sony_ad-5170a_dvd_rw_x16", "orig_consumer_price": "60$", "photos": {"back": "/mnt/d/VintagePC/HARDWARE/OPTICAL/Sony-NEC-Optiarc AD-5170A/photos/ad-5170a_5_back.jpg", "bottom": "/mnt/d/VintagePC/HARDWARE/OPTICAL/Sony-NEC-Optiarc AD-5170A/photos/ad-5170a_4_bottom.jpg", "front": "/mnt/d/VintagePC/HARDWARE/OPTICAL/Sony-NEC-Optiarc AD-5170A/photos/ad-5170a_1_front.jpg", "front_and_back": "/mnt/d/VintagePC/HARDWARE/OPTICAL/Sony-NEC-Optiarc AD-5170A/photos/ad-5170a_2_front_and_back.jpg", "side": "/mnt/d/VintagePC/HARDWARE/OPTICAL/Sony-NEC-Optiarc AD-5170A/photos/ad-5170a_6_side.jpg", "top": "/mnt/d/VintagePC/HARDWARE/OPTICAL/Sony-NEC-Optiarc AD-5170A/photos/ad-5170a_3_top.jpg"}, "release_price": "110$", "release_year": "2006", "retro_2025_price": "25$", "shortname": "DVD-RW x16", "type": "Optical drive"}, "ram_384mb_256mb+128mb": {"designation": "384mb: 128mb SDRAM + 256mb SDRAM", "id": "ram_384mb_256mb+128mb", "orig_consumer_price": "90$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/MOBO/ASUS P2BF/photos/ram/256+128mb-sdram_2_bottom.jpg", "top": "/mnt/d/VintagePC/HARDWARE/MOBO/ASUS P2BF/photos/ram/256+128mb-sdram_1_top.jpg"}, "release_price": "180$", "release_year": "~1998", "retro_2025_price": "35$", "shortname": "384MB SDRAM", "type": "RAM"}, "snd_gravis_ultrasound_pnp": {"designation": "Gravis Ultrasound PnP with 8MB (2x4MB) SIMM RAM", "drivers": [{"os": ["dos"], "path": "HARDWARE/SND/GUS/drivers/PNPv2_2/DOSWin3"}, {"os": ["win9x"], "path": "HARDWARE/SND/GUS/drivers/PNPv2_2/WIN95"}], "id": "snd_gravis_ultrasound_pnp", "manual": [{"path": "HARDWARE/SND/GUS/manual/"}], "orig_consumer_price": "150$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/SND/GUS/photos/gus_pnp_2_bottom.jpg", "front": "/mnt/d/VintagePC/HARDWARE/SND/GUS/photos/gus_pnp_3_front.jpg", "top": "/mnt/d/VintagePC/HARDWARE/SND/GUS/photos/gus_pnp_1_top.jpg", "top_with_ram": "/mnt/d/VintagePC/HARDWARE/SND/GUS/photos/gus_pnp_4_top_with_ram.jpg"}, "release_price": "250$", "release_year": "1995", "retro_2025_price": "250$", "short_dir": "GUS-PNP", "shortname": "GUS PnP 8M RAM", "type": "Sound"}, "snd_soundblaster_awe32_ct2760": {"designation": "Soundblaster AWE32 CT2760 32MB (2x16MB) SIMM RAM", "drivers": [{"os": ["dos"], "path": "HARDWARE/SND/Soundblaster AWE32 AWE64 SB32/DOS/"}, {"os": ["win3x"], "path": "HARDWARE/SND/Soundblaster AWE32 AWE64 SB32/WIN31/"}, {"os": ["win9x"], "path": "HARDWARE/SND/Soundblaster AWE32 AWE64 SB32/WIN95/"}], "id": "snd_soundblaster_awe32_ct2760", "manual": [{"path": "HARDWARE/SND/Soundblaster AWE32 CT2760/manual/"}], "orig_consumer_price": "180$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/SND/Soundblaster AWE32 CT2760/photos/ct2760_2_bottom.jpg", "front": "/mnt/d/VintagePC/HARDWARE/SND/Soundblaster AWE32 CT2760/photos/ct2760_3_front.jpg", "top": "/mnt/d/VintagePC/HARDWARE/SND/Soundblaster AWE32 CT2760/photos/ct2760_1_top.jpg", "top_with_ram": "/mnt/d/VintagePC/HARDWARE/SND/Soundblaster AWE32 CT2760/photos/ct2760_4_top_with_ram.jpg"}, "release_price": "270$", "release_year": "1994", "retro_2025_price": "150$", "short_dir": "SBCT2760", "shortname": "AWE32 32MB RAM", "type": "Sound"}, "storage_seagate_barracuda_40gb": {"designation": "Seagate Barracuda ST340014A IDE 7200RPM 40GB", "id": "storage_seagate_barracuda_40gb", "orig_consumer_price": "120$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/HARDDISK/Seagate Barracuda ST340014A/photos/st340014a_4_bottom.jpg", "front_and_back": "/mnt/d/VintagePC/HARDWARE/HARDDISK/Seagate Barracuda ST340014A/photos/st340014a_2_front_and_back.jpg", "sides": "/mnt/d/VintagePC/HARDWARE/HARDDISK/Seagate Barracuda ST340014A/photos/st340014a_5_sides.jpg", "top": "/mnt/d/VintagePC/HARDWARE/HARDDISK/Seagate Barracuda ST340014A/photos/st340014a_3_top.jpg", "top_front": "/mnt/d/VintagePC/HARDWARE/HARDDISK/Seagate Barracuda ST340014A/photos/st340014a_1_top_front.jpg"}, "release_price": "180$", "release_year": "2003", "retro_2025_price": "20$", "shortname": "40GB HDD", "type": "Storage"}};

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