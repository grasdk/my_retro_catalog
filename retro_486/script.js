document.addEventListener("DOMContentLoaded", () => {
  const hostname = "retro_486".trim();
  const container = document.querySelector(`.orbitcontainer.ns-${hostname}`);
  if (!container) return;

  const hardwareById = {"case_fujitsu_siemens_desktop_at": {"designation": "Siemens Nixdorf PCD-4H Case (AT)", "id": "case_fujitsu_siemens_desktop_at", "orig_consumer_price": "100$", "photos": {"back": "/mnt/d/VintagePC/BUILDS/486/Photos/case/case_4_back.jpg", "front_closed": "/mnt/d/VintagePC/BUILDS/486/Photos/case/case_2_front_closed.jpg", "front_open": "/mnt/d/VintagePC/BUILDS/486/Photos/case/case_2_front_open.jpg", "front_top": "/mnt/d/VintagePC/BUILDS/486/Photos/case/case_1_front_top.jpg", "inside": "/mnt/d/VintagePC/BUILDS/486/Photos/case/case_5_inside.jpg", "inside_only_mobo": "/mnt/d/VintagePC/BUILDS/486/Photos/case/case_6_inside_only_mobo.jpg"}, "release_year": "\u003c1993", "retro_2025_price": "150$", "shortname": "PCD-4H (AT)", "type": "Case"}, "cpu_intel_486_dx2_66": {"designation": "Intel 80486 DX2 66MHz", "id": "cpu_intel_486_dx2_66", "photos": {"top": "/mnt/d/VintagePC/HARDWARE/CPU/Intel 486 DX2-66 A80486DX2-66/photos/intel-80486-dx2-66_1_top.jpg"}, "release_year": "1992", "retro_2025_price": "60$", "shortname": "486 DX2 66", "type": "CPU"}, "diskette_samsung_sfd321b_144": {"designation": "Samsung SFD-321B 1.44MB", "id": "diskette_samsung_sfd321b_144", "orig_consumer_price": "40$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/DISKETTE/Samsung SFD-321B/photos/samsung-sfd-321b_4_bottom.jpg", "front": "/mnt/d/VintagePC/HARDWARE/DISKETTE/Samsung SFD-321B/photos/samsung-sfd-321b_1_front.jpg", "front_and_back": "/mnt/d/VintagePC/HARDWARE/DISKETTE/Samsung SFD-321B/photos/samsung-sfd-321b_2_front_and_back.jpg", "sides": "/mnt/d/VintagePC/HARDWARE/DISKETTE/Samsung SFD-321B/photos/samsung-sfd-321b_5_sides.jpg", "top": "/mnt/d/VintagePC/HARDWARE/DISKETTE/Samsung SFD-321B/photos/samsung-sfd-321b_3_top.jpg"}, "release_year": "~2001", "retro_2025_price": "20$", "shortname": "1.44MB Floppy", "type": "Diskette drive"}, "gfx_cirrus_logic_gd5428": {"designation": "Cirrus Logic CL-GD5428", "id": "gfx_cirrus_logic_gd5428", "orig_consumer_price": "N/A", "photos": {"top": "/mnt/d/VintagePC/HARDWARE/MOBO/Siemens-Nixdorf S26361-D756-A131/photos/gfx/cs-gs5428_1_top.jpg"}, "release_year": "1993", "retro_2025_price": "N/A", "shortname": "CL-GD5428", "type": "Graphics"}, "mobo_siemens-nixdorf_s26361_d756_a131": {"designation": "Siemens-Nixdorf S26361-D756-A131", "id": "mobo_siemens-nixdorf_s26361_d756_a131", "orig_consumer_price": "150$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/MOBO/Siemens-Nixdorf S26361-D756-A131/photos/s26361-d756-a131_2_bottom.jpg", "front": "/mnt/d/VintagePC/HARDWARE/MOBO/Siemens-Nixdorf S26361-D756-A131/photos/s26361-d756-a131_3_front.jpg", "riser_bottom": "/mnt/d/VintagePC/HARDWARE/MOBO/Siemens-Nixdorf S26361-D756-A131/photos/s26361-d756-a131_5_riser_bottom.jpg", "riser_top": "/mnt/d/VintagePC/HARDWARE/MOBO/Siemens-Nixdorf S26361-D756-A131/photos/s26361-d756-a131_4_riser_top.jpg", "top": "/mnt/d/VintagePC/HARDWARE/MOBO/Siemens-Nixdorf S26361-D756-A131/photos/s26361-d756-a131_1_top.jpg"}, "release_year": "1993", "retro_2025_price": "150$", "shortname": "Siemens MB", "type": "Motherboard"}, "net_yes_netware": {"designation": "Yes Netware RTL8019", "id": "net_yes_netware", "orig_consumer_price": "75$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/LAN/YesNetWare/photos/yesnetware-rtl8019_2_bottom.jpg", "front": "/mnt/d/VintagePC/HARDWARE/LAN/YesNetWare/photos/yesnetware-rtl8019_3_front.jpg", "top": "/mnt/d/VintagePC/HARDWARE/LAN/YesNetWare/photos/yesnetware-rtl8019_1_top.jpg"}, "release_year": "1996", "retro_2025_price": "20$", "shortname": "RTL8019", "type": "Networking"}, "optical_delta_oip_cd4800a_cd_rom_x48": {"designation": "Delta OIP-CD4800A CD-ROM x48", "id": "optical_delta_oip_cd4800a_cd_rom_x48", "orig_consumer_price": "70$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/OPTICAL/Delta OIP-CD4800A/photos/delta_oip_cd4800a_4_bottom.jpg", "front": "/mnt/d/VintagePC/HARDWARE/OPTICAL/Delta OIP-CD4800A/photos/delta_oip_cd4800a_1_front.jpg", "front_and_back": "/mnt/d/VintagePC/HARDWARE/OPTICAL/Delta OIP-CD4800A/photos/delta_oip_cd4800a_2_front_and_back.jpg", "sides": "/mnt/d/VintagePC/HARDWARE/OPTICAL/Delta OIP-CD4800A/photos/delta_oip_cd4800a_4_sides.jpg", "top": "/mnt/d/VintagePC/HARDWARE/OPTICAL/Delta OIP-CD4800A/photos/delta_oip_cd4800a_3_top.jpg"}, "release_year": "1999", "retro_2025_price": "10$", "shortname": "CD-ROM x48", "type": "Optical drive"}, "ram_20mb_4x4mb_4x1mb": {"designation": "20MB: 4x4MB + 4x1MB SIMM RAM", "id": "ram_20mb_4x4mb_4x1mb", "orig_consumer_price": "1000$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/MOBO/Siemens-Nixdorf S26361-D756-A131/photos/ram/4x4mb+4x1mb-ram_2_bottom.jpg", "top": "/mnt/d/VintagePC/HARDWARE/MOBO/Siemens-Nixdorf S26361-D756-A131/photos/ram/4x4mb+4x1mb-ram_1_top.jpg"}, "release_year": "\u003c1990", "retro_2025_price": "125$", "shortname": "20MB SIMM", "type": "RAM"}, "snd_soundblaster_sb32_ct3930": {"designation": "Soundblaster SB32 CT3930 8MB (2x4MB) SIMM RAM", "id": "snd_soundblaster_sb32_ct3930", "orig_consumer_price": "225$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/SND/Soundblaster SB32 CT3930/photos/snd_2_bottom.jpg", "front": "/mnt/d/VintagePC/HARDWARE/SND/Soundblaster SB32 CT3930/photos/snd_3_front.jpg", "top": "/mnt/d/VintagePC/HARDWARE/SND/Soundblaster SB32 CT3930/photos/snd_1_top.jpg"}, "release_year": "1995", "retro_2025_price": "150$", "shortname": "SB32 8MB RAM", "type": "Sound"}, "storage_msystems_4gb_flash": {"designation": "M-Systems IDE-4K-25-4096-X-P 4GB", "id": "storage_msystems_4gb_flash", "orig_consumer_price": "1000$", "photos": {"bottom": "/mnt/d/VintagePC/HARDWARE/HARDDISK/M-Systems IDE-4K-25-4096-X-P/photos/msystems-4gb_2_bottom.jpg", "front": "/mnt/d/VintagePC/HARDWARE/HARDDISK/M-Systems IDE-4K-25-4096-X-P/photos/msystems-4gb_4_front.jpg", "side": "/mnt/d/VintagePC/HARDWARE/HARDDISK/M-Systems IDE-4K-25-4096-X-P/photos/msystems-4gb_3_side.jpg", "top": "/mnt/d/VintagePC/HARDWARE/HARDDISK/M-Systems IDE-4K-25-4096-X-P/photos/msystems-4gb_1_top.jpg"}, "release_year": "\u003c1999", "shortname": "4GB SSD", "type": "Storage"}};

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