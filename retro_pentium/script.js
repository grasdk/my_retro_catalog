document.addEventListener("DOMContentLoaded", () => {
  const hostname = "retro_pentium".trim();
  const container = document.querySelector(`.orbitcontainer.ns-${hostname}`);
  if (!container) return;

  const hardwareById = {"case_noname_midi_tower_atx": {"designation": "Noname Midi Tower ATX Case", "id": "case_noname_midi_tower_atx", "orig_consumer_price": "__$", "photos": {"back": "/mnt/d/VintagePC/BUILDS/Pentium/Photos/case/midi_atx_4_back.jpg", "back_side": "/mnt/d/VintagePC/BUILDS/Pentium/Photos/case/midi_atx_2_back_side.jpg", "front": "/mnt/d/VintagePC/BUILDS/Pentium/Photos/case/midi_atx_3_front.jpg", "front_side_on": "/mnt/d/VintagePC/BUILDS/Pentium/Photos/case/midi_atx_1_front_side_on.jpg", "inside": "/mnt/d/VintagePC/BUILDS/Pentium/Photos/case/midi_atx_5_inside.jpg"}, "release_year": "~1997", "retro_2025_price": "__$", "shortname": "Midi ATX", "type": "Case"}, "cpu_intel_pentium_mmx_SL27S_233MHz": {"designation": "Intel Pentium MMX 233MHz (SL27S)", "id": "cpu_intel_pentium_mmx_SL27S_233MHz", "orig_consumer_price": "___$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/CPU/Intel Pentium MMX SL27S 233MHz/photos/intel-pentium-mmx-233_1_bottom.jpg"}, "release_year": "1997", "retro_2025_price": "___$", "shortname": "P233 MMX", "type": "CPU"}, "diskette_mitsumi_d359m3d_144": {"designation": "Mitsumi D359M3D 1.44MB", "id": "diskette_mitsumi_d359m3d_144", "orig_consumer_price": "__$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/DISKETTE/Mitsumi D359M3D/photos/mitsumi-d369m3d_4_bottom.jpg", "front": "/mnt/d/VintagePC/HARDWARE/DISKETTE/Mitsumi D359M3D/photos/mitsumi-d369m3d_1_front.jpg", "front_and_back": "/mnt/d/VintagePC/HARDWARE/DISKETTE/Mitsumi D359M3D/photos/mitsumi-d369m3d_2_front_and_back.jpg", "sides": "/mnt/d/VintagePC/HARDWARE/DISKETTE/Mitsumi D359M3D/photos/mitsumi-d369m3d_5_sides.jpg", "top": "/mnt/d/VintagePC/HARDWARE/DISKETTE/Mitsumi D359M3D/photos/mitsumi-d369m3d_3_top.jpg"}, "release_year": "~2003", "retro_2025_price": "__$", "shortname": "1.44MB FDD", "type": "Diskette drive"}, "gfx_ati_3d-rage_iic": {"designation": "ATI 3D-Rage IIC AGP 1x 8MB SDRAM", "id": "gfx_ati_3d-rage_iic", "orig_consumer_price": "___$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/GFX/Rage_IIc/photos/rage-iic-8mb_2_bottom.jpg", "front": "/mnt/d/VintagePC/HARDWARE/GFX/Rage_IIc/photos/rage-iic-8mb_3_front.jpg", "top": "/mnt/d/VintagePC/HARDWARE/GFX/Rage_IIc/photos/rage-iic-8mb_1_top.jpg"}, "release_year": "1997", "retro_2025_price": "___$", "shortname": "3D-Rage 8MB", "type": "Graphics"}, "gfx_orchid_righteous_voodoo_3dfx_4mb": {"designation": "Orchid Righteous Voodoo 3DFX 4MB EDO DRAM", "id": "gfx_orchid_righteous_voodoo_3dfx_4mb", "orig_consumer_price": "___$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/GFX/Voodoo1/photos/orchid-3dfx-4mb_2_bottom.jpg", "front": "/mnt/d/VintagePC/HARDWARE/GFX/Voodoo1/photos/orchid-3dfx-4mb_3_front.jpg", "top": "/mnt/d/VintagePC/HARDWARE/GFX/Voodoo1/photos/orchid-3dfx-4mb_1_top.jpg"}, "release_year": "1996", "retro_2025_price": "___$", "shortname": "3dfx Voodoo 4MB", "type": "Graphics_3dfx"}, "mobo_fic_va503+": {"designation": "FIC VA503+", "id": "mobo_fic_va503+", "orig_consumer_price": "___$", "photos": {"back": "/mnt/d/VintagePC/HARDWARE/MOBO/FICVA503+/photos/fic-va503+_4_back.jpg", "bottom": "/mnt/d/VintagePC/HARDWARE/MOBO/FICVA503+/photos/fic-va503+_2_bottom.jpg", "front": "/mnt/d/VintagePC/HARDWARE/MOBO/FICVA503+/photos/fic-va503+_3_front.jpg", "side_1": "/mnt/d/VintagePC/HARDWARE/MOBO/FICVA503+/photos/fic-va503+_5_side_1.jpg", "top": "/mnt/d/VintagePC/HARDWARE/MOBO/FICVA503+/photos/fic-va503+_1_top.jpg", "top_with_cpu_ram": "/mnt/d/VintagePC/HARDWARE/MOBO/FICVA503+/photos/fic-va503+_6_top_with_cpu_ram.jpg"}, "release_year": "1998", "retro_2025_price": "___$", "shortname": "FIC VA503+", "type": "Motherboard"}, "net_rtl_8139d": {"designation": "RealTek RTL8139D", "id": "net_rtl_8139d", "orig_consumer_price": "__$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/LAN/RTL8139D/photos/rtl8139d_2_bottom.jpg", "front": "/mnt/d/VintagePC/HARDWARE/LAN/RTL8139D/photos/rtl8139d_3_front.jpg", "top": "/mnt/d/VintagePC/HARDWARE/LAN/RTL8139D/photos/rtl8139d_1_top.jpg"}, "release_year": "1996", "retro_2025_price": "__$", "shortname": "RTL8139D", "type": "Networking"}, "optical_lg_gdr-8163B_dvd_rom_x16": {"designation": "LG GDR-8163B DVD-ROM x16", "id": "optical_lg_gdr-8163B_dvd_rom_x16", "orig_consumer_price": "__$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/OPTICAL/LG GDR-8163B/photos/lg_gdr_8163b_4_bottom.jpg", "front": "/mnt/d/VintagePC/HARDWARE/OPTICAL/LG GDR-8163B/photos/lg_gdr_8163b_1_front.jpg", "front_and_back": "/mnt/d/VintagePC/HARDWARE/OPTICAL/LG GDR-8163B/photos/lg_gdr_8163b_2_front_and_back.jpg", "sides": "/mnt/d/VintagePC/HARDWARE/OPTICAL/LG GDR-8163B/photos/lg_gdr_8163b_6_sides.jpg", "top": "/mnt/d/VintagePC/HARDWARE/OPTICAL/LG GDR-8163B/photos/lg_gdr_8163b_3_top.jpg", "topback": "/mnt/d/VintagePC/HARDWARE/OPTICAL/LG GDR-8163B/photos/lg_gdr_8163b_5_topback.jpg"}, "release_year": "2004", "retro_2025_price": "__$", "shortname": "DVD-ROM x16", "type": "Optical drive"}, "ps2_usb_bracket": {"designation": "PS/2 USB bracket", "id": "ps2_usb_bracket", "orig_consumer_price": "N/A", "photos": {"front": "/mnt/d/VintagePC/HARDWARE/PS2 USB bracket/photos/ps2_usb_2_front.jpg", "top": "/mnt/d/VintagePC/HARDWARE/PS2 USB bracket/photos/ps2_usb_1_top.jpg"}, "release_year": "N/A", "retro_2025_price": "N/A", "shortname": "PS/2+USB", "type": "Adapter"}, "ram_256mb_2x128mb": {"designation": "256MB: 2x128MB SDRAM", "id": "ram_256mb_2x128mb", "orig_consumer_price": "___$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/MOBO/FICVA503+/photos/ram/2x128mb_sdram_2_bottom.jpg", "top": "/mnt/d/VintagePC/HARDWARE/MOBO/FICVA503+/photos/ram/2x128mb_sdram_1_top.jpg"}, "release_year": "~1998", "retro_2025_price": "___$", "shortname": "256MB SDRAM", "type": "RAM"}, "snd_soundblaster_sb32_ct3670": {"designation": "Soundblaster SB32 CT3670 8MB (2x4MB) SIMM RAM (AWE 64 Compatible)", "id": "snd_soundblaster_sb32_ct3670", "orig_consumer_price": "___$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/SND/Soundblaster SB32 CT3670/photos/snd_2_bottom.jpg", "front": "/mnt/d/VintagePC/HARDWARE/SND/Soundblaster SB32 CT3670/photos/snd_3_front.jpg", "top": "/mnt/d/VintagePC/HARDWARE/SND/Soundblaster SB32 CT3670/photos/snd_1_top.jpg"}, "release_year": "1996", "retro_2025_price": "___$", "shortname": "SB32 8MB RAM", "type": "Sound"}, "storage_ibm_deskstar_30gb": {"designation": "IBM Deskstar DTLA-307030 IDE 7200RPM 30.7GB", "id": "storage_ibm_deskstar_30gb", "orig_consumer_price": "___$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/HARDDISK/IBM Deskstar DTLA-307030 30.7GB/photos/deskstar-30gb_4_bottom.jpg", "front_and_back": "/mnt/d/VintagePC/HARDWARE/HARDDISK/IBM Deskstar DTLA-307030 30.7GB/photos/deskstar-30gb_2_front_and_back.jpg", "front_top": "/mnt/d/VintagePC/HARDWARE/HARDDISK/IBM Deskstar DTLA-307030 30.7GB/photos/deskstar-30gb_1_front_top.jpg", "sides": "/mnt/d/VintagePC/HARDWARE/HARDDISK/IBM Deskstar DTLA-307030 30.7GB/photos/deskstar-30gb_5_sides.jpg", "top": "/mnt/d/VintagePC/HARDWARE/HARDDISK/IBM Deskstar DTLA-307030 30.7GB/photos/deskstar-30gb_3_top.jpg"}, "release_year": "2000", "retro_2025_price": "__$", "shortname": "30GB HDD", "type": "Storage"}};

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