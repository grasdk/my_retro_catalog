document.addEventListener("DOMContentLoaded", () => {
  const hostname = "retro_pentium".trim();
  const container = document.querySelector(`.orbitcontainer.ns-${hostname}`);
  if (!container) return;

  // 1. Load the pristine base dictionary supplied by your Ansible filter engine
  const hardwareById = {"case_noname_midi_tower_atx": {"designation": "Noname Midi Tower ATX Case", "id": "case_noname_midi_tower_atx", "orig_consumer_price": "70$", "photos": {"back": "/mnt/d/VintagePC/BUILDS/Pentium/Photos/case/midi_atx_4_back.jpg", "back_side": "/mnt/d/VintagePC/BUILDS/Pentium/Photos/case/midi_atx_2_back_side.jpg", "front": "/mnt/d/VintagePC/BUILDS/Pentium/Photos/case/midi_atx_3_front.jpg", "front_side_on": "/mnt/d/VintagePC/BUILDS/Pentium/Photos/case/midi_atx_1_front_side_on.jpg", "inside": "/mnt/d/VintagePC/BUILDS/Pentium/Photos/case/midi_atx_5_inside.jpg"}, "release_price": "110$", "release_year": "~1997", "retro_2025_price": "50$", "shortname": "Midi ATX", "type": "Case"}, "cpu_intel_pentium_mmx_SL27S_233MHz": {"designation": "Intel Pentium MMX 233 MHz SL27S", "id": "cpu_intel_pentium_mmx_SL27S_233MHz", "orig_consumer_price": "300$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/CPU/Socket 7 - Intel Pentium MMX 233MHz - SL27S/photos/intel-pentium-mmx-233_1_bottom.jpg"}, "release_price": "594$", "release_year": "1997", "retro_2025_price": "35$", "shortname": "P233 MMX", "type": "CPU"}, "diskette_mitsumi_d359m3d_144": {"designation": "Mitsumi D359M3D 1.44MB", "id": "diskette_mitsumi_d359m3d_144", "orig_consumer_price": "35$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/DISKETTE/Mitsumi D359M3D/photos/mitsumi-d369m3d_4_bottom.jpg", "front": "/mnt/d/VintagePC/HARDWARE/DISKETTE/Mitsumi D359M3D/photos/mitsumi-d369m3d_1_front.jpg", "front_and_back": "/mnt/d/VintagePC/HARDWARE/DISKETTE/Mitsumi D359M3D/photos/mitsumi-d369m3d_2_front_and_back.jpg", "sides": "/mnt/d/VintagePC/HARDWARE/DISKETTE/Mitsumi D359M3D/photos/mitsumi-d369m3d_5_sides.jpg", "top": "/mnt/d/VintagePC/HARDWARE/DISKETTE/Mitsumi D359M3D/photos/mitsumi-d369m3d_3_top.jpg"}, "release_price": "90$", "release_year": "~2003", "retro_2025_price": "20$", "shortname": "1.44MB FDD", "type": "Diskette drive"}, "gfx_ati_3d-rage_iic": {"designation": "ATI 3D-Rage IIC AGP 1x 8MB SDRAM", "drivers": [{"os": ["win3x"], "path": "HARDWARE/GFX/Rage_IIc/drivers/win3/"}, {"os": ["win9x"], "path": "HARDWARE/GFX/Rage_IIc/drivers/win9x/"}], "id": "gfx_ati_3d-rage_iic", "orig_consumer_price": "60$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/GFX/Rage_IIc/photos/rage-iic-8mb_2_bottom.jpg", "front": "/mnt/d/VintagePC/HARDWARE/GFX/Rage_IIc/photos/rage-iic-8mb_3_front.jpg", "top": "/mnt/d/VintagePC/HARDWARE/GFX/Rage_IIc/photos/rage-iic-8mb_1_top.jpg"}, "release_price": "130$", "release_year": "1997", "retro_2025_price": "15$", "shortname": "3D-Rage 8MB", "type": "Graphics"}, "gfx_orchid_righteous_voodoo_3dfx_4mb": {"designation": "Orchid Righteous Voodoo 3DFX 4MB EDO DRAM PCI", "drivers": [{"os": ["dos", "win9x"], "path": "HARDWARE/GFX/Voodoo1_Orchid/drivers/"}], "id": "gfx_orchid_righteous_voodoo_3dfx_4mb", "orig_consumer_price": "180$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/GFX/Voodoo1_Orchid/photos/orchid-3dfx-4mb_2_bottom.jpg", "front": "/mnt/d/VintagePC/HARDWARE/GFX/Voodoo1_Orchid/photos/orchid-3dfx-4mb_3_front.jpg", "top": "/mnt/d/VintagePC/HARDWARE/GFX/Voodoo1_Orchid/photos/orchid-3dfx-4mb_1_top.jpg"}, "release_price": "250$", "release_year": "1996", "retro_2025_price": "100$", "short_dir": "VOODOO1", "shortname": "3dfx Voodoo 4MB", "type": "Graphics_3dfx"}, "mobo_fic_va503+": {"designation": "FIC VA503+", "drivers": [{"os": ["win9x"], "path": "HARDWARE/MOBO/FICVA503+/drivers/"}], "id": "mobo_fic_va503+", "manual": [{"path": "HARDWARE/MOBO/FICVA503+/manual/"}], "orig_consumer_price": "95$", "photos": {"back": "/mnt/d/VintagePC/HARDWARE/MOBO/FICVA503+/photos/fic-va503+_4_back.jpg", "bottom": "/mnt/d/VintagePC/HARDWARE/MOBO/FICVA503+/photos/fic-va503+_2_bottom.jpg", "front": "/mnt/d/VintagePC/HARDWARE/MOBO/FICVA503+/photos/fic-va503+_3_front.jpg", "side_1": "/mnt/d/VintagePC/HARDWARE/MOBO/FICVA503+/photos/fic-va503+_5_side_1.jpg", "top": "/mnt/d/VintagePC/HARDWARE/MOBO/FICVA503+/photos/fic-va503+_1_top.jpg", "top_with_cpu_ram": "/mnt/d/VintagePC/HARDWARE/MOBO/FICVA503+/photos/fic-va503+_6_top_with_cpu_ram.jpg"}, "release_price": "140$", "release_year": "1998", "retro_2025_price": "40$", "short_dir": "FICVA503", "shortname": "FIC VA503+", "type": "Motherboard"}, "net_rtl_8139d": {"designation": "RealTek RTL8139D", "drivers": [{"os": ["dos", "win3x", "win9x"], "path": "HARDWARE/LAN/RTL8139/drivers/"}], "id": "net_rtl_8139d", "orig_consumer_price": "25$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/LAN/RTL8139D/photos/rtl8139d_2_bottom.jpg", "front": "/mnt/d/VintagePC/HARDWARE/LAN/RTL8139D/photos/rtl8139d_3_front.jpg", "top": "/mnt/d/VintagePC/HARDWARE/LAN/RTL8139D/photos/rtl8139d_1_top.jpg"}, "release_price": "45$", "release_year": "1996", "retro_2025_price": "15$", "short_dir": "RTL8139D", "shortname": "RTL8139D", "type": "Networking"}, "optical_lg_gdr-8163B_dvd_rom_x16": {"designation": "LG GDR-8163B DVD-ROM x16", "id": "optical_lg_gdr-8163B_dvd_rom_x16", "orig_consumer_price": "60$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/OPTICAL/LG GDR-8163B/photos/lg_gdr_8163b_4_bottom.jpg", "front": "/mnt/d/VintagePC/HARDWARE/OPTICAL/LG GDR-8163B/photos/lg_gdr_8163b_1_front.jpg", "front_and_back": "/mnt/d/VintagePC/HARDWARE/OPTICAL/LG GDR-8163B/photos/lg_gdr_8163b_2_front_and_back.jpg", "sides": "/mnt/d/VintagePC/HARDWARE/OPTICAL/LG GDR-8163B/photos/lg_gdr_8163b_6_sides.jpg", "top": "/mnt/d/VintagePC/HARDWARE/OPTICAL/LG GDR-8163B/photos/lg_gdr_8163b_3_top.jpg", "topback": "/mnt/d/VintagePC/HARDWARE/OPTICAL/LG GDR-8163B/photos/lg_gdr_8163b_5_topback.jpg"}, "release_price": "120$", "release_year": "2004", "retro_2025_price": "20$", "shortname": "DVD-ROM x16", "type": "Optical drive"}, "ps2_usb_bracket": {"designation": "PS/2 USB bracket", "id": "ps2_usb_bracket", "orig_consumer_price": "12$", "photos": {"front": "/mnt/d/VintagePC/HARDWARE/PS2 USB bracket/photos/ps2_usb_2_front.jpg", "top": "/mnt/d/VintagePC/HARDWARE/PS2 USB bracket/photos/ps2_usb_1_top.jpg"}, "release_price": "15$", "release_year": "N/A", "retro_2025_price": "8$", "shortname": "PS/2+USB", "type": "Adapter"}, "ram_256mb_2x128mb": {"designation": "256MB: 2x128MB SDRAM", "id": "ram_256mb_2x128mb", "orig_consumer_price": "80$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/MOBO/FICVA503+/photos/ram/2x128mb_sdram_2_bottom.jpg", "top": "/mnt/d/VintagePC/HARDWARE/MOBO/FICVA503+/photos/ram/2x128mb_sdram_1_top.jpg"}, "release_price": "200$", "release_year": "~1998", "retro_2025_price": "35$", "shortname": "256MB SDRAM", "type": "RAM"}, "snd_soundblaster_sb32_ct3670": {"designation": "Soundblaster SB32 CT3670 8MB (2x4MB) SIMM RAM (AWE 64 Compatible)", "drivers": [{"os": ["dos"], "path": "HARDWARE/SND/Soundblaster AWE32 AWE64 SB32/DOS/"}, {"os": ["win3x"], "path": "HARDWARE/SND/Soundblaster AWE32 AWE64 SB32/WIN31/"}, {"os": ["win9x"], "path": "HARDWARE/SND/Soundblaster AWE32 AWE64 SB32/WIN95/"}, {"os": ["win3x"], "path": "HARDWARE/SND/Soundblaster SB32 CT3670/drivers/WIN31/ENGLISH/"}], "id": "snd_soundblaster_sb32_ct3670", "orig_consumer_price": "200$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/SND/Soundblaster SB32 CT3670/photos/snd_2_bottom.jpg", "front": "/mnt/d/VintagePC/HARDWARE/SND/Soundblaster SB32 CT3670/photos/snd_3_front.jpg", "top": "/mnt/d/VintagePC/HARDWARE/SND/Soundblaster SB32 CT3670/photos/snd_1_top.jpg"}, "release_price": "275$", "release_year": "1996", "retro_2025_price": "100$", "short_dir": "SBCT3670", "shortname": "SB32 8MB RAM", "type": "Sound"}, "storage_ibm_deskstar_30gb": {"designation": "IBM Deskstar DTLA-307030 IDE 7200RPM 30.7GB", "id": "storage_ibm_deskstar_30gb", "orig_consumer_price": "120$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/HARDDISK/IBM Deskstar DTLA-307030 30.7GB/photos/deskstar-30gb_4_bottom.jpg", "front_and_back": "/mnt/d/VintagePC/HARDWARE/HARDDISK/IBM Deskstar DTLA-307030 30.7GB/photos/deskstar-30gb_2_front_and_back.jpg", "front_top": "/mnt/d/VintagePC/HARDWARE/HARDDISK/IBM Deskstar DTLA-307030 30.7GB/photos/deskstar-30gb_1_front_top.jpg", "sides": "/mnt/d/VintagePC/HARDWARE/HARDDISK/IBM Deskstar DTLA-307030 30.7GB/photos/deskstar-30gb_5_sides.jpg", "top": "/mnt/d/VintagePC/HARDWARE/HARDDISK/IBM Deskstar DTLA-307030 30.7GB/photos/deskstar-30gb_3_top.jpg"}, "release_price": "180$", "release_year": "2000", "retro_2025_price": "30$", "shortname": "30GB HDD", "type": "Storage"}};

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