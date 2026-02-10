document.addEventListener("DOMContentLoaded", () => {
  const hostname = "retro_p4".trim();
  const container = document.querySelector(`.orbitcontainer.ns-${hostname}`);
  if (!container) return;

  const hardwareById = {"case_asus_m51ac": {"designation": "Case from Asus M51AC (mATX)", "id": "case_asus_m51ac", "orig_consumer_price": "___$", "photos": {"back": "/mnt/d/VintagePC/BUILDS/Pentium4/Photos/case/m51ac_3_back.jpg", "front": "/mnt/d/VintagePC/BUILDS/Pentium4/Photos/case/m51ac_2_front.jpg", "front_side": "/mnt/d/VintagePC/BUILDS/Pentium4/Photos/case/m51ac_1_front_side.jpg", "inside": "/mnt/d/VintagePC/BUILDS/Pentium4/Photos/case/m51ac_5_inside.jpg", "side": "/mnt/d/VintagePC/BUILDS/Pentium4/Photos/case/m51ac_4_side.jpg"}, "release_year": "2013", "retro_2025_price": "___$", "shortname": "M51AC (mATX)", "type": "Case"}, "cpu_intel_pentium_4_3ghz": {"designation": "Intel Pentium 4 3 GHz", "id": "cpu_intel_pentium_4_3ghz", "orig_consumer_price": "___$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/CPU/Intel Pentium 4 3 GHz/photos/sl7z9_2_bottom.jpg", "top": "/mnt/d/VintagePC/HARDWARE/CPU/Intel Pentium 4 3 GHz/photos/sl7z9_1_top.jpg"}, "release_year": "2005", "retro_2025_price": "___$", "shortname": "P4 3GHz", "type": "CPU"}, "diskette_panasonic_ju-257a604p_144": {"designation": "Panasonic JU-257A604P 1.44MB", "id": "diskette_panasonic_ju-257a604p_144", "orig_consumer_price": "__$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/DISKETTE/Panasonic JU-257A604P/photos/panasonic_ju-257a604p_4_bottom.jpg", "front": "/mnt/d/VintagePC/HARDWARE/DISKETTE/Panasonic JU-257A604P/photos/panasonic_ju-257a604p_1_front.jpg", "front_and_back": "/mnt/d/VintagePC/HARDWARE/DISKETTE/Panasonic JU-257A604P/photos/panasonic_ju-257a604p_2_front_and_back.jpg", "sides": "/mnt/d/VintagePC/HARDWARE/DISKETTE/Panasonic JU-257A604P/photos/panasonic_ju-257a604p_5_sides.jpg", "top": "/mnt/d/VintagePC/HARDWARE/DISKETTE/Panasonic JU-257A604P/photos/panasonic_ju-257a604p_3_top.jpg"}, "release_year": "~1991", "retro_2025_price": "__$", "shortname": "1.44MB FDD", "type": "Diskette drive"}, "gfx_radeon_x800_agp": {"designation": "Sapphire Radeon X800 Pro 256MB GDDR3 RAM", "id": "gfx_radeon_x800_agp", "orig_consumer_price": "__$", "photos": {"back": "/mnt/d/VintagePC/HARDWARE/GFX/Radeon X800 Pro/photos/radeon_x800_4_back.jpg", "bottom": "/mnt/d/VintagePC/HARDWARE/GFX/Radeon X800 Pro/photos/radeon_x800_2_bottom.jpg", "front": "/mnt/d/VintagePC/HARDWARE/GFX/Radeon X800 Pro/photos/radeon_x800_3_front.jpg", "top": "/mnt/d/VintagePC/HARDWARE/GFX/Radeon X800 Pro/photos/radeon_x800_1_top.jpg"}, "release_year": "2004", "retro_2025_price": "__$", "shortname": "X800 256MB", "type": "Graphics"}, "mobo_asus_p5vdc_mx": {"designation": "ASUS P5VDC-MX", "id": "mobo_asus_p5vdc_mx", "orig_consumer_price": "___$", "photos": {"back": "/mnt/d/VintagePC/HARDWARE/MOBO/ASUS P5VDC-MX/photos/asus_p5vdc-mx_4_back.jpg", "bottom": "/mnt/d/VintagePC/HARDWARE/MOBO/ASUS P5VDC-MX/photos/asus_p5vdc-mx_2_bottom.jpg", "front": "/mnt/d/VintagePC/HARDWARE/MOBO/ASUS P5VDC-MX/photos/asus_p5vdc-mx_3_front.jpg", "top": "/mnt/d/VintagePC/HARDWARE/MOBO/ASUS P5VDC-MX/photos/asus_p5vdc-mx_1_top.jpg"}, "release_year": "2005", "retro_2025_price": "___$", "shortname": "ASUS P5VDC-MX", "type": "Motherboard"}, "optical_toshiba_sd-r5272_dvd_rw_x16": {"designation": "Toshiba SR-5272 DVD RW", "id": "optical_toshiba_sd-r5272_dvd_rw_x16", "orig_consumer_price": "__$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/OPTICAL/Toshiba SD-R5272/photos/toshiba_sd-r5272_4_bottom.jpg", "front": "/mnt/d/VintagePC/HARDWARE/OPTICAL/Toshiba SD-R5272/photos/toshiba_sd-r5272_1_front.jpg", "front_and_back": "/mnt/d/VintagePC/HARDWARE/OPTICAL/Toshiba SD-R5272/photos/toshiba_sd-r5272_2_front_and_back.jpg", "sides": "/mnt/d/VintagePC/HARDWARE/OPTICAL/Toshiba SD-R5272/photos/toshiba_sd-r5272_5_sides.jpg", "top": "/mnt/d/VintagePC/HARDWARE/OPTICAL/Toshiba SD-R5272/photos/toshiba_sd-r5272_3_top.jpg"}, "release_year": "2004", "retro_2025_price": "__$", "shortname": "DVD-RW x 16", "type": "Optical drive"}, "ram_1024mb_2x512mb_ddr2": {"designation": "1024MB: 2 x 512MB DDR2 RAM", "id": "ram_1024mb_2x512mb_ddr2", "orig_consumer_price": "___$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/MOBO/ASUS P5VDC-MX/photos/ram/m378t6553ezs-ce6_2_bottom.jpg", "top": "/mnt/d/VintagePC/HARDWARE/MOBO/ASUS P5VDC-MX/photos/ram/m378t6553ezs-ce6_1_top.jpg"}, "release_year": "~2005", "retro_2025_price": "___$", "shortname": "1024MB DDR2", "type": "RAM"}, "snd_soundblaster_audigy_2_zs_sb0350": {"designation": "Soundblaster Audigy 2 ZS (SB0350)", "id": "snd_soundblaster_audigy_2_zs_sb0350", "orig_consumer_price": "___$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/SND/Soundblaster Audigy 2 ZS/photos/sb0350_2_bottom.jpg", "front": "/mnt/d/VintagePC/HARDWARE/SND/Soundblaster Audigy 2 ZS/photos/sb0350_3_front.jpg", "top": "/mnt/d/VintagePC/HARDWARE/SND/Soundblaster Audigy 2 ZS/photos/sb0350_1_top.jpg"}, "release_year": "~2004", "retro_2025_price": "___$", "shortname": "Audigy 2 ZS", "type": "Sound"}, "storage_seagate_barracuda_120gb": {"designation": "Seagate Barracuda ST3120022A IDE 7200RPM 120GB", "id": "storage_seagate_barracuda_120gb", "orig_consumer_price": "___$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/HARDDISK/Seagate Barracuda ST3120022A/photos/st3120022a_2_bottom.jpg", "front_and_back": "/mnt/d/VintagePC/HARDWARE/HARDDISK/Seagate Barracuda ST3120022A/photos/st3120022a_3_front_and_back.jpg", "sides": "/mnt/d/VintagePC/HARDWARE/HARDDISK/Seagate Barracuda ST3120022A/photos/st3120022a_4_sides.jpg", "top": "/mnt/d/VintagePC/HARDWARE/HARDDISK/Seagate Barracuda ST3120022A/photos/st3120022a_1_top.jpg"}, "release_year": "2003", "retro_2025_price": "__$", "shortname": "120GB HDD", "type": "Storage"}, "storage_seagate_barracuda_250gb": {"designation": "Seagate Barracuda ST3250823A IDE 7200RPM 250GB", "id": "storage_seagate_barracuda_250gb", "orig_consumer_price": "___$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/HARDDISK/Seagate Barracuda ST3250823A/photos/st3250823a_2_bottom.jpg", "front_and_back": "/mnt/d/VintagePC/HARDWARE/HARDDISK/Seagate Barracuda ST3250823A/photos/st3250823a_3_front_and_back.jpg", "sides": "/mnt/d/VintagePC/HARDWARE/HARDDISK/Seagate Barracuda ST3250823A/photos/st3250823a_4_sides.jpg", "top": "/mnt/d/VintagePC/HARDWARE/HARDDISK/Seagate Barracuda ST3250823A/photos/st3250823a_1_top.jpg"}, "release_year": "2006", "retro_2025_price": "__$", "shortname": "250GB HDD", "type": "Storage"}};

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