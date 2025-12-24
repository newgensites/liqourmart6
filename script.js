(function () {
  const $ = (sel) => document.querySelector(sel);

  const translations = {
    en: {
      topbarPayments: "Accepts <strong>Cash, Card & Contactless Payments</strong>",
      topbarCall: "Call: (954) 598-9292",
      homeLink: "Home",
      navOrder: "Order Pickup",
      navShop: "Shop",
      navHours: "Hours",
      navLocation: "Location",
      navContact: "Contact",
      callNow: "Call Now",
      callStoreNumber: "Call (954) 598-9292",
      callStoreGeneric: "Call the Store",
      getDirections: "Get Directions",
      kickerLocation: "Fort Lauderdale • 33331",
      heroTitle: "Premium spirits.<br /><span class=\"accent\">Luxury selection</span>, fast pickup.",
      heroSub:
        "Liquor Mart 6 / Flo Liquors — curated bottles, classics, and favorites.<strong>Cash, card, and contactless payments accepted.</strong>",
      callToCheck: "Call to Check Availability",
      browseCategories: "Browse Categories",
      badgePremium: "Premium + Everyday Options",
      badgePickup: "Quick In & Out Pickup",
      badgePayments: "Cash, Card & Contactless Payments",
      todaysHours: "Today’s Hours",
      shortWeekdayRange: "Sun – Thu",
      shortWeekendRange: "Fri – Sat",
      addressLabel: "Address",
      contactQuestion: "Contact / Ask a Question",
      drinkResponsibly: "Please drink responsibly. Must be 21+.",
      orderTitle: "Order online for pickup",
      orderSubtitle:
        "Send your request and we’ll confirm availability fast. Please include what you need, bottle size, and quantity.",
      pickupFast: "Pickup ready fast",
      tellUs: "Tell us what you need",
      orderCopy:
        "We’ll pull your bottles and have them waiting. If something’s out of stock, we’ll call with quick alternatives.",
      sizes: "Typical sizes: minis to 1.75L",
      contactless: "Contactless payments accepted",
      idRequired: "21+ only; ID required at pickup",
      liquorNeeded: "Liquor needed",
      orderItemPlaceholder: "E.g., Don Julio Blanco or Hennessy VS",
      bottleSizeLabel: "Bottle size (fl oz)",
      selectSize: "Select a size",
      sizeMini: "50 mL — 1.7 fl oz (mini)",
      sizePint: "375 mL — 12.7 fl oz (pint)",
      sizeStandard: "750 mL — 25.4 fl oz (standard)",
      sizeLiter: "1 L — 33.8 fl oz",
      sizeHandle: "1.75 L — 59.2 fl oz",
      quantityLabel: "Quantity",
      quantityPlaceholder: "How many bottles?",
      pickupNotesLabel: "Pickup name / notes (optional)",
      pickupNotesPlaceholder: "Name for pickup, preferred brands, etc.",
      sendRequest: "Send pickup request",
      callInstead: "Call instead",
      confirmPhone: "We’ll confirm by phone. Must be 21+ to pick up.",
      shopByCategory: "Shop by Category",
      shopSubtitle: "Tap a category to call and check availability (fastest).",
      whiskey: "Whiskey",
      whiskeyCopy: "Bourbon, rye, scotch, and top-shelf picks.",
      tequila: "Tequila",
      tequilaCopy: "Blanco, reposado, añejo, and premium bottles.",
      vodka: "Vodka",
      vodkaCopy: "Clean classics to flavored favorites.",
      wine: "Wine",
      wineCopy: "Reds, whites, rosé, sparkling, and more.",
      beer: "Beer",
      beerCopy: "Local & popular packs for any night.",
      champagne: "Champagne",
      champagneCopy: "Celebrate with sparkling picks.",
      callToCheckShort: "Call to check →",
      storeHours: "Store Hours",
      storeHoursCopy: "Open late. Easy pickup. Cash, card, and contactless payments accepted.",
      sunday: "Sunday",
      monday: "Monday",
      tuesday: "Tuesday",
      wednesday: "Wednesday",
      thursday: "Thursday",
      friday: "Friday",
      saturday: "Saturday",
      sendMessage: "Send a Message",
      phoneLabel: "Phone",
      paymentsLabel: "Payments",
      paymentsValue: "Cash, cards, and contactless accepted",
      stockHelp: "Looking for something specific? Call us — we’ll tell you what’s in stock and what’s similar.",
      findUs: "Find Us",
      addressLine: "15825 Sheridan St, Suite 135, Fort Lauderdale, FL 33331",
      openInMaps: "Open in Maps",
      backToTop: "Back to top",
      footerSub: "Flo Liquors • Fort Lauderdale, FL",
      footerNotice: "© <span id=\"year\"></span> Liquor Mart 6 / Flo Liquors. Please drink responsibly. 21+ only.",
      contactPage: "Contact",
      contactIntro:
        "Call the store for quickest answers. Or send a message below and we’ll follow up.<strong>Cash, card, and contactless payments accepted.</strong>",
      sendMessageHeading: "Send a Message",
      sendMessageCopy: "This opens your email app to send the message (no backend needed yet).",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      phonePlaceholder: "(###) ###-####",
      emailLabel: "Email",
      emailPlaceholder: "you@email.com",
      topicLabel: "Topic",
      topicPlaceholder: "Availability / Hours / Other",
      messageLabel: "Message",
      messagePlaceholder: "What can we help you with?",
      openEmail: "Open Email Draft",
      backHome: "Back to Home",
      storeInfo: "Store Info",
      storeName: "Liquor Mart 6 / Flo Liquors",
      hoursLabel: "Hours",
      miniHours: "Sun – Thu: 10:00 AM – 12:00 AM<br />Fri – Sat: 10:00 AM – 1:00 AM",
      openMap: "Open Map",
      openChipOpen: "Open now",
      openChipClosed: "Closed",
    },
    es: {
      topbarPayments: "Acepta <strong>Efectivo, Tarjeta y Pagos sin Contacto</strong>",
      topbarCall: "Llamar: (954) 598-9292",
      homeLink: "Inicio",
      navOrder: "Ordenar para recoger",
      navShop: "Comprar",
      navHours: "Horario",
      navLocation: "Ubicación",
      navContact: "Contacto",
      callNow: "Llama ahora",
      callStoreNumber: "Llamar al (954) 598-9292",
      callStoreGeneric: "Llamar a la tienda",
      getDirections: "Obtener direcciones",
      kickerLocation: "Fort Lauderdale • 33331",
      heroTitle: "Licores premium.<br /><span class=\"accent\">Selección de lujo</span>, recogida rápida.",
      heroSub:
        "Liquor Mart 6 / Flo Liquors — botellas seleccionadas, clásicos y favoritos.<strong>Se aceptan pagos en efectivo, tarjeta y sin contacto.</strong>",
      callToCheck: "Llama para confirmar disponibilidad",
      browseCategories: "Ver categorías",
      badgePremium: "Opciones premium y diarias",
      badgePickup: "Recogida rápida",
      badgePayments: "Pagos en efectivo, tarjeta y sin contacto",
      todaysHours: "Horario de hoy",
      shortWeekdayRange: "Dom – Jue",
      shortWeekendRange: "Vie – Sáb",
      addressLabel: "Dirección",
      contactQuestion: "Contacto / Haz una pregunta",
      drinkResponsibly: "Bebe responsablemente. Debes ser mayor de 21 años.",
      orderTitle: "Ordena en línea para recoger",
      orderSubtitle:
        "Envía tu solicitud y confirmaremos la disponibilidad rápido. Incluye lo que necesitas, tamaño de botella y cantidad.",
      pickupFast: "Recogida lista rápido",
      tellUs: "Cuéntanos lo que necesitas",
      orderCopy:
        "Prepararemos tus botellas y las dejaremos listas. Si algo falta, llamaremos con alternativas rápidas.",
      sizes: "Tamaños típicos: minis a 1.75L",
      contactless: "Pagos sin contacto aceptados",
      idRequired: "Solo 21+; identificación requerida al recoger",
      liquorNeeded: "Licor solicitado",
      orderItemPlaceholder: "Ej: Don Julio Blanco o Hennessy VS",
      bottleSizeLabel: "Tamaño de botella (fl oz)",
      selectSize: "Elige un tamaño",
      sizeMini: "50 mL — 1.7 fl oz (mini)",
      sizePint: "375 mL — 12.7 fl oz (pinta)",
      sizeStandard: "750 mL — 25.4 fl oz (estándar)",
      sizeLiter: "1 L — 33.8 fl oz",
      sizeHandle: "1.75 L — 59.2 fl oz",
      quantityLabel: "Cantidad",
      quantityPlaceholder: "¿Cuántas botellas?",
      pickupNotesLabel: "Nombre / notas para la recogida (opcional)",
      pickupNotesPlaceholder: "Nombre para recoger, marcas preferidas, etc.",
      sendRequest: "Enviar solicitud de recogida",
      callInstead: "Mejor llamar",
      confirmPhone: "Confirmaremos por teléfono. Debes ser mayor de 21 años para recoger.",
      shopByCategory: "Compra por categoría",
      shopSubtitle: "Toca una categoría para llamar y confirmar disponibilidad (lo más rápido).",
      whiskey: "Whisky",
      whiskeyCopy: "Bourbon, centeno, scotch y selecciones premium.",
      tequila: "Tequila",
      tequilaCopy: "Blanco, reposado, añejo y botellas premium.",
      vodka: "Vodka",
      vodkaCopy: "Clásicos suaves y favoritos con sabor.",
      wine: "Vino",
      wineCopy: "Tintos, blancos, rosé, espumosos y más.",
      beer: "Cerveza",
      beerCopy: "Paquetes locales y populares para cualquier noche.",
      champagne: "Champaña",
      champagneCopy: "Celebra con opciones espumosas.",
      callToCheckShort: "Llamar para consultar →",
      storeHours: "Horario de la tienda",
      storeHoursCopy: "Abierto hasta tarde. Recogida sencilla. Se aceptan pagos en efectivo, tarjeta y sin contacto.",
      sunday: "Domingo",
      monday: "Lunes",
      tuesday: "Martes",
      wednesday: "Miércoles",
      thursday: "Jueves",
      friday: "Viernes",
      saturday: "Sábado",
      sendMessage: "Enviar mensaje",
      phoneLabel: "Teléfono",
      paymentsLabel: "Pagos",
      paymentsValue: "Efectivo, tarjetas y sin contacto aceptados",
      stockHelp: "¿Buscas algo específico? Llámanos: diremos qué hay en existencia y alternativas.",
      findUs: "Encuéntranos",
      addressLine: "15825 Sheridan St, Suite 135, Fort Lauderdale, FL 33331",
      openInMaps: "Abrir en Maps",
      backToTop: "Volver arriba",
      footerSub: "Flo Liquors • Fort Lauderdale, FL",
      footerNotice: "© <span id=\"year\"></span> Liquor Mart 6 / Flo Liquors. Bebe responsablemente. Solo 21+.",
      contactPage: "Contacto",
      contactIntro:
        "Llama a la tienda para respuestas rápidas. O envía un mensaje abajo y te responderemos.<strong>Se aceptan pagos en efectivo, tarjeta y sin contacto.</strong>",
      sendMessageHeading: "Enviar un mensaje",
      sendMessageCopy: "Esto abre tu app de correo para enviar el mensaje (aún sin backend).",
      nameLabel: "Nombre",
      namePlaceholder: "Tu nombre",
      phonePlaceholder: "(###) ###-####",
      emailLabel: "Correo electrónico",
      emailPlaceholder: "tu@email.com",
      topicLabel: "Tema",
      topicPlaceholder: "Disponibilidad / Horario / Otro",
      messageLabel: "Mensaje",
      messagePlaceholder: "¿En qué podemos ayudarte?",
      openEmail: "Abrir borrador de correo",
      backHome: "Volver al inicio",
      storeInfo: "Información de la tienda",
      storeName: "Liquor Mart 6 / Flo Liquors",
      hoursLabel: "Horario",
      miniHours: "Dom – Jue: 10:00 AM – 12:00 AM<br />Vie – Sáb: 10:00 AM – 1:00 AM",
      openMap: "Abrir mapa",
      openChipOpen: "Abierto ahora",
      openChipClosed: "Cerrado",
    },
  };

  // Footer year
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const languageToggle = $("#languageToggle");
  const LANGUAGE_KEY = "lm6_language_v1";
  const openChip = $("#openChip");

  const computeOpenStatus = () => {
    const now = new Date();
    const day = now.getDay();
    const minutes = now.getHours() * 60 + now.getMinutes();

    const openMin = 10 * 60;
    const isFri = day === 5;
    const isSat = day === 6;

    if (isFri || isSat) {
      return (minutes >= openMin && minutes < 24 * 60) || (minutes >= 0 && minutes < 60);
    }

    return minutes >= openMin && minutes < 24 * 60;
  };

  const updateOpenChip = (lang, strings) => {
    if (!openChip) return;

    const isOpen = computeOpenStatus();
    const openLabel = isOpen
      ? (strings?.openChipOpen || translations.en.openChipOpen)
      : (strings?.openChipClosed || translations.en.openChipClosed);

    openChip.textContent = openLabel;
    openChip.classList.toggle("open", isOpen);
    openChip.classList.toggle("closed", !isOpen);
  };

  const updateLanguageButton = (lang) => {
    if (!languageToggle) return;
    const isSpanish = lang === "es";
    languageToggle.textContent = isSpanish ? "English" : "Español";
    languageToggle.setAttribute("aria-pressed", String(isSpanish));
    languageToggle.setAttribute("aria-label", isSpanish ? "Switch to English" : "Switch to Spanish");
  };

  const applyTranslations = (lang) => {
    const strings = translations[lang] || translations.en;
    document.documentElement.setAttribute("lang", lang === "es" ? "es" : "en");

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      const value = strings[key];
      if (value === undefined) return;

      if (el.dataset.i18nAttr) {
        el.setAttribute(el.dataset.i18nAttr, value);
      } else if (el.dataset.i18nHtml === "true") {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    });

    updateOpenChip(lang, strings);
    updateLanguageButton(lang);
  };

  const setLanguage = (lang) => {
    const next = lang === "es" ? "es" : "en";
    try {
      localStorage.setItem(LANGUAGE_KEY, next);
    } catch {}
    applyTranslations(next);
  };

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

  // Language toggle
  const storedLanguage = (() => {
    try {
      return localStorage.getItem(LANGUAGE_KEY);
    } catch {
      return null;
    }
  })();

  setLanguage(storedLanguage || "en");

  if (languageToggle) {
    languageToggle.addEventListener("click", () => {
      const currentLang = document.documentElement.getAttribute("lang") === "es" ? "es" : "en";
      const nextLang = currentLang === "en" ? "es" : "en";
      setLanguage(nextLang);
    });
  }

  // Order pickup form (mailto draft)
  const orderForm = $("#orderForm");
  if (orderForm) {
    orderForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const item = $("#orderItem")?.value?.trim() || "";
      const sizeOption = $("#bottleSize");
      const sizeLabel = sizeOption ? sizeOption.options[sizeOption.selectedIndex]?.text || "" : "";
      const qtyOption = $("#quantity");
      const qtyLabel = qtyOption ? qtyOption.options[qtyOption.selectedIndex]?.text || "" : "";
      const notes = $("#orderNotes")?.value?.trim() || "";

      const subject = encodeURIComponent("Liquor Mart 6 / Flo Liquors — Pickup order request");
      const bodyLines = [
        `Liquor needed: ${item}`,
        `Bottle size: ${sizeLabel}`,
        `Quantity: ${qtyLabel}`,
        notes ? `Pickup name / notes: ${notes}` : null,
        "",
        "— Sent from website",
      ].filter(Boolean);

      const body = encodeURIComponent(bodyLines.join("\n"));
      const to = "flo-liquors@example.com";
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    });
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
