(function () {
  const $ = (sel) => document.querySelector(sel);

  // Footer year
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile menu toggle
  const hamburger = $("#hamburger");
  const mobileNav = $("#mobileNav");

  const closeMobile = () => {
    if (!hamburger || !mobileNav) return;
    hamburger.setAttribute("aria-expanded", "false");
    mobileNav.style.display = "none";
    mobileNav.setAttribute("aria-hidden", "true");
  };

  const openMobile = () => {
    if (!hamburger || !mobileNav) return;
    hamburger.setAttribute("aria-expanded", "true");
    mobileNav.style.display = "block";
    mobileNav.setAttribute("aria-hidden", "false");
  };

  if (hamburger && mobileNav) {
    hamburger.addEventListener("click", () => {
      const expanded = hamburger.getAttribute("aria-expanded") === "true";
      if (expanded) closeMobile();
      else openMobile();
    });

    // Close on link click
    mobileNav.addEventListener("click", (e) => {
      const t = e.target;
      if (t && t.classList && t.classList.contains("mobile-link")) closeMobile();
    });

    // Close on resize
    window.addEventListener("resize", () => {
      if (window.innerWidth > 920) closeMobile();
    });
  }

  // Premium Mode glow toggle (just a nice UX flair)
  const themePulse = $("#themePulse");
  if (themePulse) {
    themePulse.addEventListener("click", () => {
      document.body.classList.toggle("pulse-off");
    });
  }

  // Age Gate (localStorage)
  const ageGate = $("#ageGate");
  const ageYes = $("#ageYes");

  const AGE_KEY = "lm6_age_verified_v1";

  const showAgeGate = () => {
    if (!ageGate) return;
    ageGate.classList.add("show");
    ageGate.setAttribute("aria-hidden", "false");
  };

  const hideAgeGate = () => {
    if (!ageGate) return;
    ageGate.classList.remove("show");
    ageGate.setAttribute("aria-hidden", "true");
  };

  try {
    const verified = localStorage.getItem(AGE_KEY);
    if (!verified) showAgeGate();
  } catch {
    // If storage is blocked, still show (safer)
    showAgeGate();
  }

  if (ageYes) {
    ageYes.addEventListener("click", () => {
      try {
        localStorage.setItem(AGE_KEY, "yes");
      } catch {}
      hideAgeGate();
    });
  }

  // Open/Closed chip (simple, based on browser time)
  const openChip = $("#openChip");
  if (openChip) {
    const now = new Date();
    const day = now.getDay(); // 0 Sun ... 6 Sat
    const minutes = now.getHours() * 60 + now.getMinutes();

    // Hours:
    // Sun-Thu: 10:00 -> 24:00 (midnight)
    // Fri-Sat: 10:00 -> 01:00 (next day)
    const openMin = 10 * 60; // 10:00 AM

    const isFri = day === 5;
    const isSat = day === 6;

    // Determine closing minute window:
    // If Fri/Sat: close at 1:00 AM (60 minutes) of next day
    // For logic: store two ranges: [10:00, 24:00) OR [0:00, 1:00)
    let openNow = false;

    if (isFri || isSat) {
      // open from 10:00 to midnight, and from midnight to 1:00
      openNow = (minutes >= openMin && minutes < 24 * 60) || (minutes >= 0 && minutes < 60);
    } else {
      // Sun-Thu: open from 10:00 to midnight
      openNow = (minutes >= openMin && minutes < 24 * 60);
    }

    if (openNow) {
      openChip.textContent = "Open now";
      openChip.classList.add("open");
    } else {
      openChip.textContent = "Closed";
      openChip.classList.add("closed");
    }
  }

  // Contact form (mailto fallback) - no backend needed
  const contactForm = $("#contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = $("#name")?.value?.trim() || "";
      const phone = $("#phone")?.value?.trim() || "";
      const email = $("#email")?.value?.trim() || "";
      const message = $("#message")?.value?.trim() || "";

      const subject = encodeURIComponent("Liquor Mart 6 / Flo Liquors — Website Inquiry");
      const body = encodeURIComponent(
        `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}\n\n— Sent from website`
      );

      // NOTE: Replace the email below with the store email when you have it.
      // For now, we open a mail draft; user can send from their device.
      const to = "flo-liquors@example.com";
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    });
  }
})();
