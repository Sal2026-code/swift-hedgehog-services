export interface TranslationSchema {
  header: {
    services: string;
    estimator: string;
    qa: string;
    contact: string;
    learnMore: string;
    email: string;
    phone: string;
    badgeText: string;
  };
  hero: {
    headline: string;
    viewServices: string;
    askQuestion: string;
    values: Array<{ title: string; desc: string }>;
    premiumPlanTitle: string;
    premiumBadge: string;
    premiumTasks: string[];
    trustMetric1: string;
    trustMetric2: string;
    trustMetric3: string;
  };
  services: {
    tag: string;
    title: string;
    subtitle: string;
    btn: string;
    cards: Array<{
      id: "standard" | "deep" | "move";
      badge: string | null;
      title: string;
      desc: string;
      bullets: string[];
      bottomAccent: string;
    }>;
  };
  addons: {
    tag: string;
    title: string;
    subtitle: string;
    priceText: string;
    items: Array<{
      id: string;
      title: string;
      desc: string;
      price: number;
    }>;
  };
  estimator: {
    tag: string;
    title: string;
    subtitle: string;
    tierLabel: string;
    standard: string;
    deep: string;
    move: string;
    bedsLabel: string;
    bathsLabel: string;
    extrasLabel: string;
    receiptHeader: string;
    estimateText: string;
    btnLabel: string;
    addonsLabels: Record<string, string>;
    basePriceText: string;
    extraRoomsText: string;
    extraBathsText: string;
    premiumAddonsText: string;
    disclaimer: string;
  };
  forum: {
    tag: string;
    title: string;
    subtitle: string;
    all: string;
    pets: string;
    safety: string;
    pricing: string;
    general: string;
    responseBadge: string;
    helpfulText: string;
    askTitle: string;
    nameLabel: string;
    catLabel: string;
    queryLabel: string;
    submitBtn: string;
    phName: string;
    phQuery: string;
    errQuery: string;
  };
  contact: {
    tag: string;
    title: string;
    subtitle: string;
    officeTitle: string;
    emailLabel: string;
    phoneLabel: string;
    addrLabel: string;
    address: string;
    hoursLabel: string;
    weekdays: string;
    sunday: string;
    formTitle: string;
    nameField: string;
    phoneField: string;
    emailField: string;
    msgField: string;
    phName: string;
    phMsg: string;
    submitBtn: string;
    submittingBtn: string;
    confidentiality: string;
    successTitle: string;
    successDesc: string;
    validationErr: string;
  };
  footer: {
    insurance: string;
    scrollUp: string;
    desc: string;
    rights: string;
  };
}

export const LOCALIZATION: Record<"english" | "spanish", TranslationSchema> = {
  english: {
    header: {
      services: "Services",
      estimator: "Estimator",
      qa: "Q&A Forum",
      contact: "Contact",
      learnMore: "Learn More",
      email: "contacto@gbrosservices.com",
      phone: "+34 600 123 456",
      badgeText: "✨ G & Bros Premium Standard ✨"
    },
    hero: {
      headline: "Flawless homes by G & Bros Services Inc.",
      viewServices: "View Services",
      askQuestion: "Ask a Question",
      values: [
        { title: "Insured & vetted staff", desc: "Full comprehensive liability background safety checks." },
        { title: "Eco-friendly products included", desc: "Zero toxic ingredients, green clean seal certified." },
        { title: "Strict quality oversight", desc: "Every clean supervisor checked for immaculate ratings." },
        { title: "We speak your language!", desc: "Flawless bilingual English & Spanish client care." }
      ],
      premiumPlanTitle: "Perfect Apartment Package",
      premiumBadge: "G & Bros Guaranteed!",
      premiumTasks: [
        "Dusting and polishing of high-reach areas",
        "Deep carpet wash & hardwood mop treatment",
        "Sanitized light switches, door handles, & baseboards",
        "Polishing of chrome fixtures and kitchen surfaces"
      ],
      trustMetric1: "100% Satisfaction",
      trustMetric2: "4,800+ Apartments Cleaned",
      trustMetric3: "100% Sparkle Guarantee"
    },
    services: {
      tag: "Professional Cleaning Tiers",
      title: "Our Professional Services",
      subtitle: "Tailored options representing modern, immaculate apartment interiors.",
      btn: "Select & Estimate Price",
      cards: [
        {
          id: "standard",
          badge: null,
          title: "Standard Maintenance Cleaning",
          desc: "Regular upkeep to maintain an immaculate standard of comfort.",
          bullets: [
            "Basic furniture dusting & wiping",
            "Full vacuuming and mopping throughout",
            "Exterior cabinet cleaning and polish",
            "Quick kitchen & bathroom sanitizing"
          ],
          bottomAccent: "Ideal for weekly or bi-weekly scheduling"
        },
        {
          id: "deep",
          badge: "Popular Choice",
          title: "Deep & Detailed Cleaning",
          desc: "Intensive scrub targeting hidden mold, dust build-up, and grease.",
          bullets: [
            "Hand dusting of all baseboards",
            "Deep scrubbing of grout & tiles",
            "Interior cleaning of microwave & stove",
            "Limescale removal from glass fixtures"
          ],
          bottomAccent: "Perfect for seasonal turnarounds"
        },
        {
          id: "move",
          badge: "End of Lease",
          title: "Move-In / Move-Out Cleans",
          desc: "Comprehensive sanitization guaranteed to secure security deposit refunds.",
          bullets: [
            "Deep sanitization of cabinet interiors",
            "Heavy degreasing of ovens and vents",
            "Absolute disinfection of restrooms",
            "Spot treatment of wall scuffs"
          ],
          bottomAccent: "Guarantees a flawless handoff"
        }
      ]
    },
    addons: {
      tag: "Tailored Premium Upgrades",
      title: "Custom Add-ons & Extra Services",
      subtitle: "Enhance your appointment space by checking custom high-fidelity extras tailored just for you.",
      priceText: "Add-on Price: +€",
      items: [
        { id: "oven", title: "Oven Interior Cleaning", desc: "Deep degreasing and carbon build-up scraping.", price: 25 },
        { id: "fridge", title: "Fridge Interior Cleaning", desc: "Full disinfection, stain scraping & polishing.", price: 25 },
        { id: "windows", title: "Full Exterior Window & Track", desc: "Complete track cleanup, glass shine & polishing.", price: 35 },
        { id: "balcony", title: "Balcony & Terrace Deep Wash", desc: "High-pressure dirt removal, grout restoration.", price: 30 },
        { id: "ironing", title: "Express Bedding & Ironing", desc: "Perfect bedding alignment, fabric steam styling.", price: 20 },
        { id: "mattress", title: "Anti-Allergen Mattress Treatment", desc: "UV sanitization and heavy dust mite vacuuming.", price: 25 }
      ]
    },
    estimator: {
      tag: "Interactive Quote Tool",
      title: "G & Bros Price Estimator",
      subtitle: "Configure your preferences below to receive an instant dynamic ballpark reference estimate.",
      tierLabel: "1. Select Cleaning Tier",
      standard: "Standard",
      deep: "Deep Clean",
      move: "Move-In / Move-Out",
      bedsLabel: "Bedrooms & Living Rooms",
      bathsLabel: "Bathrooms",
      extrasLabel: "Check Extra Add-on Services",
      receiptHeader: "Sparkle Summary",
      estimateText: "Ballpark Reference Price",
      btnLabel: "Request Firm Estimate",
      addonsLabels: {
        oven: "Oven Interior (+€25)",
        fridge: "Fridge Interior (+€25)",
        windows: "Exterior Windows (+€35)",
        balcony: "Terrace/Balcony wash (+€30)",
        ironing: "Express Bedding (+€20)",
        mattress: "Mattress sanitization (+€25)"
      },
      basePriceText: "Tier base price",
      extraRoomsText: "Extra Room(s) cost",
      extraBathsText: "Extra Bathroom(s) cost",
      premiumAddonsText: "Premium Add-ons breakdown",
      disclaimer: "* Custom spaces are subject to firm quotes"
    },
    forum: {
      tag: "Community Interactive Corner",
      title: "Community Q&A Forum",
      subtitle: "See questions posted by local community residents or query your custom concerns below.",
      all: "All",
      pets: "Products & Pets",
      safety: "Trust & Safety",
      pricing: "Pricing & Plans",
      general: "General Questions",
      responseBadge: "Official Response from G & Bros",
      helpfulText: "Helpful?",
      askTitle: "Ask a new question",
      nameLabel: "Your Name",
      catLabel: "Category Selection",
      queryLabel: "Your Query Detail",
      submitBtn: "Submit Question",
      phName: "e.g. Alexis M.",
      phQuery: "Is there anything G & Bros doesn't clean?...",
      errQuery: "Please enter a valid question query."
    },
    contact: {
      tag: "Get in Touch",
      title: "Contact G & Bros Services Inc.",
      subtitle: "Connect with our expert supervisors to schedule premium apartment deep cleans in Madrid.",
      officeTitle: "Office details",
      emailLabel: "Email Address",
      phoneLabel: "Phone Number",
      addrLabel: "Corporate Headquarters",
      address: "Gran Via de las Comunidades, 45, Floor 2, Madrid.",
      hoursLabel: "Working Hours",
      weekdays: "Monday to Saturday: 8:00 AM – 8:00 PM",
      sunday: "Sundays: Closed",
      formTitle: "Send Inquiry Form",
      nameField: "Full Name",
      phoneField: "Phone Number",
      emailField: "Email Address",
      msgField: "Describe your Apartment or Needs",
      phName: "Alexis Martinez",
      phMsg: "Detail bedrooms, bathrooms, layout, preferred schedule...",
      submitBtn: "Send Inquiry Form",
      submittingBtn: "Sending Message...",
      confidentiality: "All details remain protected and secured",
      successTitle: "Inquiry Submitted!",
      successDesc: "Thank you! G & Bros Services Inc. has received your query. Our apartment estimation supervisors will email or call you shortly.",
      validationErr: "Please fill in all required fields with valid details."
    },
    footer: {
      insurance: "Vetted & Fully Insured Standard Liability Protection",
      scrollUp: "Scroll Up",
      desc: "Providing spotless apartment maintenance services for local residents in Madrid.",
      rights: "© 2026 G & Bros Premium Services Inc. All Rights Reserved."
    }
  },
  spanish: {
    header: {
      services: "Servicios",
      estimator: "Estimador",
      qa: "Foro de Q&A",
      contact: "Contacto",
      learnMore: "Saber Más",
      email: "contacto@gbrosservices.com",
      phone: "+34 600 123 456",
      badgeText: "✨ Estándar Premium G & Bros ✨"
    },
    hero: {
      headline: "Tu apartamento impecable por G & Bros Services Inc.",
      viewServices: "Ver Servicios",
      askQuestion: "Hacer Pregunta",
      values: [
        { title: "Personal asegurado y evaluado", desc: "Verificación de antecedentes y póliza de cobertura total." },
        { title: "Productos ecológicos incluidos", desc: "Sin químicos agresivos, certificado Green Seal." },
        { title: "Estricta supervisión de calidad", desc: "Cada trabajo es verificado por un supervisor experto." },
        { title: "¡Hablamos tu idioma!", desc: "Atención al cliente en inglés y español con fluidez." }
      ],
      premiumPlanTitle: "Paquete Apartamento Perfecto",
      premiumBadge: "¡Garantía G & Bros!",
      premiumTasks: [
        "Desempolvado y pulido de áreas de difícil alcance",
        "Lavado de alfombras y tratamiento de pisos de madera",
        "Desinfección de interruptores, manijas de puertas y zócalos",
        "Pulido de accesorios cromados y encimeras de cocina"
      ],
      trustMetric1: "100% Satisfacción",
      trustMetric2: "4.800+ Apartamentos Limpios",
      trustMetric3: "100% Brillo Garantizado"
    },
    services: {
      tag: "Niveles de Limpieza Profesional",
      title: "Nuestros Servicios Profesionales",
      subtitle: "Opciones personalizadas para interiores de apartamentos modernos e impecables.",
      btn: "Seleccionar y Calcular",
      cards: [
        {
          id: "standard",
          badge: null,
          title: "Limpieza de Mantenimiento Estándar",
          desc: "Mantenimiento regular para un estándar de confort impecable en el hogar.",
          bullets: [
            "Desempolvado y limpieza básica de muebles",
            "Aspirado completo y trapeado de pisos",
            "Limpieza exterior de armarios",
            "Desinfección rápida de cocina y baños"
          ],
          bottomAccent: "Ideal para programación semanal o quincenal"
        },
        {
          id: "deep",
          badge: "Opción Popular",
          title: "Limpieza Profunda y Detallada",
          desc: "Restregado intensivo enfocado en moho, polvo acumulado y grasa.",
          bullets: [
            "Sacudido a mano de todos los zócalos",
            "Limpieza profunda de azulejos y juntas",
            "Limpieza interior de horno y microondas",
            "Eliminación de cal en grifería y vidrios"
          ],
          bottomAccent: "Perfecto para cambios estacionales"
        },
        {
          id: "move",
          badge: "Fin de Contrato",
          title: "Limpieza de Entrada / Salida",
          desc: "Desinfección profunda garantizada para asegurar reembolsos de depósito.",
          bullets: [
            "Desinfección profunda del interior de armarios",
            "Desengrase pesado de campanas y hornos",
            "Desinfección absoluta de baños y duchas",
            "Limpieza de marcas en las paredes"
          ],
          bottomAccent: "Garantiza una entrega impecable"
        }
      ]
    },
    addons: {
      tag: "Mejoras Premium a Medida",
      title: "Extras y Servicios Adicionales",
      subtitle: "Mejore su servicio seleccionando los extras de alta calidad adaptados a sus necesidades.",
      priceText: "Precio Extra: +€",
      items: [
        { id: "oven", title: "Limpieza de Interior de Horno", desc: "Desengrase profundo y raspado de carbón.", price: 25 },
        { id: "fridge", title: "Limpieza de Interior de Nevera", desc: "Desinfección total, remoción de manchas y pulido.", price: 25 },
        { id: "windows", title: "Ventanas Exteriores y Rieles", desc: "Limpieza de rieles, brillo de vidrios y pulido.", price: 35 },
        { id: "balcony", title: "Lavado Profundo de Terraza/Balcón", desc: "Remoción de suciedad a presión y baldosas.", price: 30 },
        { id: "ironing", title: "Ropa de Cama y Planchado Express", desc: "Alineación de sábanas y alisado de prendas a vapor.", price: 20 },
        { id: "mattress", title: "Tratamiento de Colchón Anti-Alergias", desc: "Sanitización UV y aspirado profundo de ácaros.", price: 25 }
      ]
    },
    estimator: {
      tag: "Herramienta de Cotización",
      title: "Estimador de Precios G & Bros",
      subtitle: "Configure sus preferencias para recibir una estimación dinámica y aproximada al instante.",
      tierLabel: "1. Seleccione el Tipo de Limpieza",
      standard: "Estándar",
      deep: "Limpieza Profunda",
      move: "Entrada / Salida",
      bedsLabel: "Habitaciones y Salones",
      bathsLabel: "Baños",
      extrasLabel: "Seleccione Servicios Adicionales",
      receiptHeader: "Resumen de Brillo",
      estimateText: "Precio de Referencia Estimado",
      btnLabel: "Solicitar Presupuesto Firme",
      addonsLabels: {
        oven: "Interior del Horno (+25€)",
        fridge: "Interior de Nevera (+25€)",
        windows: "Ventanas Exteriores (+35€)",
        balcony: "Lavado de Terraza/Balcón (+30€)",
        ironing: "Ropa de Cama Express (+20€)",
        mattress: "Tratamiento de Colchón (+25€)"
      },
      basePriceText: "Precio base de nivel",
      extraRoomsText: "Costo por hab(s) adicionales",
      extraBathsText: "Costo por baño(s) adicionales",
      premiumAddonsText: "Desglose de Extras Premium",
      disclaimer: "* Sujeto a cotizaciones firmes para espacios especiales"
    },
    forum: {
      tag: "Rincón Comunitario Interactivo",
      title: "Foro de Q&A Comunitario",
      subtitle: "Vea preguntas publicadas por residentes locales o formule su consulta personalizada abajo.",
      all: "Todos",
      pets: "Productos y Mascotas",
      safety: "Confianza y Seguridad",
      pricing: "Precios y Planes",
      general: "Preguntas Generales",
      responseBadge: "Respuesta Oficial de G & Bros",
      helpfulText: "¿Útil?",
      askTitle: "Hacer una nueva pregunta",
      nameLabel: "Su Nombre",
      catLabel: "Selección de Categoría",
      queryLabel: "Detalle de su Consulta",
      submitBtn: "Enviar Pregunta",
      phName: "ej. Alexis M.",
      phQuery: "¿Hay algo que G & Bros no limpie?...",
      errQuery: "Por favor, introduzca una pregunta válida."
    },
    contact: {
      tag: "Ponte en Contacto",
      title: "Contacto con G & Bros Services Inc.",
      subtitle: "Conéctese con nuestros supervisores expertos para programar limpiezas profundas premium en Madrid.",
      officeTitle: "Detalles de Oficina",
      emailLabel: "Dirección de Correo",
      phoneLabel: "Número de Teléfono",
      addrLabel: "Sede Corporativa",
      address: "Gran Via de las Comunidades, 45, Planta 2, Madrid.",
      hoursLabel: "Horario Comercial",
      weekdays: "Lunes a Sábado: 8:00 AM – 8:00 PM",
      sunday: "Domingos: Cerrado",
      formTitle: "Formulario de Consulta",
      nameField: "Nombre Completo",
      phoneField: "Número de Teléfono",
      emailField: "Dirección de Correo",
      msgField: "Describa su Apartamento o Necesidad",
      phName: "Alexis Martinez",
      phMsg: "Detalle habitaciones, baños, distribución, horario preferido...",
      submitBtn: "Enviar Formulario de Consulta",
      submittingBtn: "Enviando Mensaje...",
      confidentiality: "Todos los detalles están protegidos y asegurados",
      successTitle: "¡Consulta Enviada!",
      successDesc: "¡Gracias! G & Bros Services Inc. ha recibido su consulta. Nuestros supervisores de estimaciones se comunicarán con usted en breve.",
      validationErr: "Por favor, rellene todos los campos requeridos con información válida."
    },
    footer: {
      insurance: "Personal de Limpieza Evaluado y Totalmente Asegurado",
      scrollUp: "Volver Arriba",
      desc: "Brindando servicios de mantenimiento y limpieza impecable para residentes locales en Madrid.",
      rights: "© 2026 G & Bros Premium Services Inc. Todos los Derechos Reservados."
    }
  }
};