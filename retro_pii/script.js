document.addEventListener("DOMContentLoaded", () => {
  const hostname = "retro_pii".trim();
  const container = document.querySelector(`.orbitcontainer.ns-${hostname}`);
  if (!container) return;

  const hardwareById = {"case_gembird_fornax_1000w": {"designation": "Gembird Fornax 1000W (ATX)", "id": "case_gembird_fornax_1000w", "orig_consumer_price": "36$", "photos": {"back": "/mnt/d/VintagePC/BUILDS/Pentium II(I)/Photos/case/gembird_4_back.jpg", "front_off": "/mnt/d/VintagePC/BUILDS/Pentium II(I)/Photos/case/gembird_2_front_off.jpg", "front_on": "/mnt/d/VintagePC/BUILDS/Pentium II(I)/Photos/case/gembird_3_front_on.jpg", "front_side": "/mnt/d/VintagePC/BUILDS/Pentium II(I)/Photos/case/gembird_1_front_side.jpg", "inside_side": "/mnt/d/VintagePC/BUILDS/Pentium II(I)/Photos/case/gembird_6_inside_side.jpg", "inside_top": "/mnt/d/VintagePC/BUILDS/Pentium II(I)/Photos/case/gembird_7_inside_top.jpg", "inside_top_on": "/mnt/d/VintagePC/BUILDS/Pentium II(I)/Photos/case/gembird_8_inside_top_on.jpg"}, "release_year": "2021", "retro_2025_price": "36$", "shortname": "Fornax 1000W (ATX)", "type": "Case"}, "cpu_intel_pentium_iii_500mhz": {"designation": "Intel Pentium III 500 MHz", "id": "cpu_intel_pentium_iii_500mhz", "orig_consumer_price": "___$", "photos": {"back": "/mnt/d/VintagePC/HARDWARE/CPU/Intel Pentium III 500 MHz/photos/sl35e_2_back.jpg", "front": "/mnt/d/VintagePC/HARDWARE/CPU/Intel Pentium III 500 MHz/photos/sl35e_2_front.jpg", "top": "/mnt/d/VintagePC/HARDWARE/CPU/Intel Pentium III 500 MHz/photos/sl35e_1_top.jpg"}, "release_year": "1997", "retro_2025_price": "___$", "shortname": "PIII 500", "type": "CPU"}, "diskette_teac_fd-235_144": {"designation": "TEAC FD-235 1.44MB", "id": "diskette_teac_fd-235_144", "orig_consumer_price": "__$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/DISKETTE/TEAC FD-235/photos/teac-fd-235_4_bottom.jpg", "front": "/mnt/d/VintagePC/HARDWARE/DISKETTE/TEAC FD-235/photos/teac-fd-235_1_front.jpg", "front_and_back": "/mnt/d/VintagePC/HARDWARE/DISKETTE/TEAC FD-235/photos/teac-fd-235_2_front_and_back.jpg", "sides": "/mnt/d/VintagePC/HARDWARE/DISKETTE/TEAC FD-235/photos/teac-fd-235_5_sides.jpg", "top": "/mnt/d/VintagePC/HARDWARE/DISKETTE/TEAC FD-235/photos/teac-fd-235_3_top.jpg"}, "release_year": "~2003", "retro_2025_price": "__$", "shortname": "1.44MB FDD", "type": "Diskette drive"}, "gfx_creative_tnt": {"designation": "Creative Graphics Blaster RIVA TNT AGP 2x 16MB SDRAM (CT6710)", "id": "gfx_creative_tnt", "orig_consumer_price": "__$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/GFX/TNT/photos/ct6710_2_bottom.jpg", "front": "/mnt/d/VintagePC/HARDWARE/GFX/TNT/photos/ct6710_3_front.jpg", "top": "/mnt/d/VintagePC/HARDWARE/GFX/TNT/photos/ct6710_1_top.jpg"}, "release_year": "1998", "retro_2025_price": "__$", "shortname": "TNT 16MB", "type": "Graphics"}, "gfx_diamond_voodoo2_3dfx_8mb": {"designation": "Diamond Monster 3D II Voodoo2 3DFX 8MB EDO DRAM", "id": "gfx_diamond_voodoo2_3dfx_8mb", "orig_consumer_price": "___$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/GFX/Voodoo2/photos/diamond_voodoo2_8mb_2_bottom.jpg", "front": "/mnt/d/VintagePC/HARDWARE/GFX/Voodoo2/photos/diamond_voodoo2_8mb_3_front.jpg", "top": "/mnt/d/VintagePC/HARDWARE/GFX/Voodoo2/photos/diamond_voodoo2_8mb_1_top.jpg"}, "release_year": "1998", "retro_2025_price": "___$", "shortname": "3dfx Voodoo2 8MB", "type": "Graphics_3dfx"}, "mobo_asus_p2b": {"designation": "ASUS P2B", "id": "mobo_asus_p2b", "orig_consumer_price": "___$", "photos": {"back": "/mnt/d/VintagePC/HARDWARE/MOBO/ASUS P2BF/photos/asus_p2b_4_back.jpg", "bottom": "/mnt/d/VintagePC/HARDWARE/MOBO/ASUS P2BF/photos/asus_p2b_2_bottom.jpg", "front": "/mnt/d/VintagePC/HARDWARE/MOBO/ASUS P2BF/photos/asus_p2b_3_front.jpg", "side_1": "/mnt/d/VintagePC/HARDWARE/MOBO/ASUS P2BF/photos/asus_p2b_5_side_1.jpg", "side_2": "/mnt/d/VintagePC/HARDWARE/MOBO/ASUS P2BF/photos/asus_p2b_6_side_2.jpg", "top": "/mnt/d/VintagePC/HARDWARE/MOBO/ASUS P2BF/photos/asus_p2b_1_top.jpg", "top_cpu_ram": "/mnt/d/VintagePC/HARDWARE/MOBO/ASUS P2BF/photos/asus_p2b_7_top_cpu_ram.jpg"}, "release_year": "1998", "retro_2025_price": "___$", "shortname": "ASUS P2B", "type": "Motherboard"}, "net_asus_nx1101": {"designation": "Asus NX1101 (10/100/1000Mbit)", "id": "net_asus_nx1101", "orig_consumer_price": "__$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/LAN/Asus NX1101/photos/asus_nx1101_2_bottom.jpg", "front": "/mnt/d/VintagePC/HARDWARE/LAN/Asus NX1101/photos/asus_nx1101_3_front.jpg", "top": "/mnt/d/VintagePC/HARDWARE/LAN/Asus NX1101/photos/asus_nx1101_1_top.jpg"}, "release_year": "2011", "retro_2025_price": "__$", "shortname": "NX1101", "type": "Networking"}, "optical_sony_ad-5170a_dvd_rw_x16": {"designation": "Sony-NEC-Optiarc AD-5170A DVD RW", "id": "optical_sony_ad-5170a_dvd_rw_x16", "orig_consumer_price": "__$", "photos": {"back": "/mnt/d/VintagePC/HARDWARE/OPTICAL/Sony-NEC-Optiarc AD-5170A/photos/ad-5170a_5_back.jpg", "bottom": "/mnt/d/VintagePC/HARDWARE/OPTICAL/Sony-NEC-Optiarc AD-5170A/photos/ad-5170a_4_bottom.jpg", "front": "/mnt/d/VintagePC/HARDWARE/OPTICAL/Sony-NEC-Optiarc AD-5170A/photos/ad-5170a_1_front.jpg", "front_and_back": "/mnt/d/VintagePC/HARDWARE/OPTICAL/Sony-NEC-Optiarc AD-5170A/photos/ad-5170a_2_front_and_back.jpg", "side": "/mnt/d/VintagePC/HARDWARE/OPTICAL/Sony-NEC-Optiarc AD-5170A/photos/ad-5170a_6_side.jpg", "top": "/mnt/d/VintagePC/HARDWARE/OPTICAL/Sony-NEC-Optiarc AD-5170A/photos/ad-5170a_3_top.jpg"}, "release_year": "2006", "retro_2025_price": "__$", "shortname": "DVD-RW x16", "type": "Optical drive"}, "ram_384mb_256mb+128mb": {"designation": "384mb: 128mb SDRAM + 256mb SDRAM", "id": "ram_384mb_256mb+128mb", "orig_consumer_price": "___$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/MOBO/ASUS P2BF/photos/ram/ram_2_bottom.jpg", "top": "/mnt/d/VintagePC/HARDWARE/MOBO/ASUS P2BF/photos/ram/ram_1_top.jpg"}, "release_year": "~1998", "retro_2025_price": "___$", "shortname": "384MB SDRAM", "type": "RAM"}, "snd_gravis_ultrasound_pnp": {"designation": "Gravis Ultrasound PnP with 8MB (2x4MB) SIMM RAM", "id": "snd_gravis_ultrasound_pnp", "orig_consumer_price": "___$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/SND/GUS/photos/gus_pnp_2_bottom.jpg", "front": "/mnt/d/VintagePC/HARDWARE/SND/GUS/photos/gus_pnp_3_front.jpg", "top": "/mnt/d/VintagePC/HARDWARE/SND/GUS/photos/gus_pnp_1_top.jpg", "top_with_ram": "/mnt/d/VintagePC/HARDWARE/SND/GUS/photos/gus_pnp_4_top_with_ram.jpg"}, "release_year": "1995", "retro_2025_price": "___$", "shortname": "GUS PnP 8M RAM", "type": "Sound"}, "snd_soundblaster_awe32_ct2760": {"designation": "Soundblaster AWE32 CT2760 32MB (2x16MB) SIMM RAM", "id": "snd_soundblaster_awe32_ct2760", "orig_consumer_price": "___$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/SND/Soundblaster AWE32 CT2760/photos/ct2760_2_bottom.jpg", "front": "/mnt/d/VintagePC/HARDWARE/SND/Soundblaster AWE32 CT2760/photos/ct2760_3_front.jpg", "top": "/mnt/d/VintagePC/HARDWARE/SND/Soundblaster AWE32 CT2760/photos/ct2760_1_top.jpg", "top_with_ram": "/mnt/d/VintagePC/HARDWARE/SND/Soundblaster AWE32 CT2760/photos/ct2760_4_top_with_ram.jpg"}, "release_year": "1994", "retro_2025_price": "___$", "shortname": "AWE32 32MB RAM", "type": "Sound"}, "storage_seagate_barracuda_40gb": {"designation": "Seagate Barracuda ST340014A IDE 7200RPM 40GB", "id": "storage_seagate_barracuda_40gb", "orig_consumer_price": "___$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/HARDDISK/Seagate Barracuda ST340014A/photos/st340014a_4_bottom.jpg", "front_and_back": "/mnt/d/VintagePC/HARDWARE/HARDDISK/Seagate Barracuda ST340014A/photos/st340014a_2_front_and_back.jpg", "sides": "/mnt/d/VintagePC/HARDWARE/HARDDISK/Seagate Barracuda ST340014A/photos/st340014a_5_sides.jpg", "top": "/mnt/d/VintagePC/HARDWARE/HARDDISK/Seagate Barracuda ST340014A/photos/st340014a_3_top.jpg", "top_front": "/mnt/d/VintagePC/HARDWARE/HARDDISK/Seagate Barracuda ST340014A/photos/st340014a_1_top_front.jpg"}, "release_year": "2003", "retro_2025_price": "__$", "shortname": "40GB HDD", "type": "Storage"}};

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