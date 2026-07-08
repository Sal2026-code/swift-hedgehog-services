export interface TranslationSchema {
  header: {
    services: string;
    estimator: string;
    qa: string;
    contact: string;
    learnMore: string;
    phoneText: string;
    emailText: string;
    brandName: string;
  };
  hero: {
    badgeText: string;
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
  badges: {
    subHeader: string;
    title: string;
    items: string[];
  };
  services: {
    subHeader: string;
    title: string;
    btn: string;
    cards: Array<{
      id: "standard" | "deep" | "move";
      badge: string | null;
      title: string;
      bullets: string[];
      bottomAccent: string;
    }>;
  };
  addons: {
    subHeader: string;
    title: string;
    priceLabel: string;
    items: Array<{
      id: string;
      title: string;
      price: number;
    }>;
  };
  estimator: {
    subHeader: string;
    title: string;
    tierLabel: string;
    standard: string;
    deep: string;
    move: string;
    bedsLabel: string;
    bathsLabel: string;
    extrasLabel: string;
    receiptHeader: string;
    baseCleanLabel: string;
    extraRoomsLabel: string;
    extraBathsLabel: string;
    estimateText: string;
    btnLabel: string;
    addonsLabels: Record<string, string>;
    disclaimer: string;
  };
  forum: {
    subHeader: string;
    title: string;
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
    subHeader: string;
    title: string;
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
      phoneText: "Phone: +34 600 123 456",
      emailText: "Email: contacto@gbrosservices.com",
      brandName: "G & Bros Premium Services"
    },
    hero: {
      badgeText: "Trusted Apartment Cleaning",
      headline: "Flawless homes by G & Bros Services Inc.",
      viewServices: "View Services",
      askQuestion: "Ask a Question",
      values: [
        { title: "Insured & vetted staff", desc: "Full comprehensive liability background safety checks." },
        { title: "Eco-friendly products included", desc: "Zero toxic ingredients, green clean seal certified." },
        { title: "Strict quality oversight", desc: "Every clean supervisor checked for immaculate ratings." },
        { title: "We speak your language! (English & Spanish)", desc: "Flawless bilingual English & Spanish client care." }
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
    badges: {
      subHeader: "ACCREDITED EXCELLENCE",
      title: "Trusted Certifications & Quality Compliance",
      items: [
        "Approved Vendor",
        "Compliance Depot Approved",
        "Green Seal Certified",
        "U.S. EPA - Design for the Environment",
        "GreenGlo Brand Partner",
        "G & Bros Services Inc. - Strategic Partnership"
      ]
    },
    services: {
      subHeader: "PROFESSIONAL CLEANING TIERS",
      title: "Our Professional Services",
      btn: "Select & Estimate Price",
      cards: [
        {
          id: "standard",
          badge: null,
          title: "Standard Maintenance Cleaning",
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
      subHeader: "TAILORED PREMIUM UPGRADES",
      title: "Custom Add-ons & Extra Services",
      priceLabel: "Add-on Price: +€",
      items: [
        { id: "oven", title: "Oven Interior Cleaning", price: 25 },
        { id: "fridge", title: "Fridge Interior Cleaning", price: 20 },
        { id: "windows", title: "Full Exterior Window & Track Clean", price: 35 },
        { id: "balcony", title: "Balcony & Terrace Deep Wash", price: 30 },
        { id: "ironing", title: "Express Bedding & Ironing Service", price: 15 },
        { id: "mattress", title: "Anti-Allergen Mattress Treatment", price: 25 }
      ]
    },
    estimator: {
      subHeader: "INTERACTIVE QUOTE TOOL",
      title: "G & Bros Price Estimator",
      tierLabel: "Select Cleaning Type:",
      standard: "Standard",
      deep: "Deep Clean",
      move: "Move-In/Out",
      bedsLabel: "Bedrooms / Living Rooms",
      bathsLabel: "Bathrooms",
      extrasLabel: "Check Extra Add-on Services",
      receiptHeader: "Sparkle Summary",
      baseCleanLabel: "Base Clean Cost",
      extraRoomsLabel: "Extra Rooms Added Cost",
      extraBathsLabel: "Extra Baths Added Cost",
      estimateText: "Ballpark Reference Price",
      btnLabel: "Request Firm Estimate",
      addonsLabels: {
        oven: "Oven Interior (+€25)",
        fridge: "Fridge Interior (+€20)",
        windows: "Exterior Windows (+€35)",
        balcony: "Terrace/Balcony wash (+€30)",
        ironing: "Express Bedding (+€15)",
        mattress: "Mattress sanitization (+€25)"
      },
      disclaimer: "* Custom spaces are subject to firm quotes"
    },
    forum: {
      subHeader: "COMMUNITY INTERACTIVE CORNER",
      title: "Community Q&A Forum",
      all: "All",
      pets: "Products & Pets",
      safety: "Trust & Safety",
      pricing: "Pricing & Plans",
      general: "General Questions",
      responseBadge: "Official Response from G & Bros",
      helpfulText: "Helpful",
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
      subHeader: "GET IN TOUCH",
      title: "Contact G & Bros Services Inc.",
      emailLabel: "Email Address",
      phoneLabel: "Phone Number",
      addrLabel: "Corporate Headquarters",
      address: "Gran Via de las Comunidades, 45, Floor 2, Madrid",
      hoursLabel: "Working Hours",
      weekdays: "Monday to Saturday: 8:00 AM – 8:00 PM",
      sunday: "Sundays: Closed",
      formTitle: "Send Inquiry Form",
      nameField: "Full Name",
      phoneField: "Phone Number",
      emailField: "Email Address",
      msgField: "Describe apartment size, specific cleaning conditions, or your preferred callback times...",
      phName: "Alexis Martinez",
      phMsg: "Detail bedrooms, bathrooms, layout, preferred schedule...",
      submitBtn: "Send Inquiry Form",
      submittingBtn: "Sending Message...",
      confidentiality: "ALL DETAILS REMAIN PROTECTED AND SECURED",
      successTitle: "Inquiry Submitted!",
      successDesc: "Thank you! G & Bros Services Inc. has received your query. Our apartment estimation supervisors will email or call you shortly.",
      validationErr: "Please fill in all required fields with valid details."
    },
    footer: {
      rights: "© 2026 G & Bros Services Inc. All rights reserved."
    }
  },
  spanish: {
    header: {
      services: "Servicios",
      estimator: "Estimador",
      qa: "Foro de Q&A",
      contact: "Contacto",
      learnMore: "Saber Más",
      phoneText: "Teléfono: +34 600 123 456",
      emailText: "Correo: contacto@gbrosservices.com",
      brandName: "G & Bros Servicios Premium"
    },
    hero: {
      badgeText: "Limpieza de Apartamento de Confianza",
      headline: "Tu apartamento impecable por G & Bros Services Inc.",
      viewServices: "Ver Servicios",
      askQuestion: "Hacer Pregunta",
      values: [
        { title: "Personal asegurado y evaluado", desc: "Verificación de antecedentes y póliza de cobertura total." },
        { title: "Productos ecológicos incluidos", desc: "Sin químicos agresivos, certificado Green Seal." },
        { title: "Estricta supervisión de calidad", desc: "Cada trabajo es verificado por un supervisor experto." },
        { title: "¡Hablamos tu idioma! (Inglés y Español)", desc: "Atención al cliente en inglés y español con fluidez." }
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
    badges: {
      subHeader: "EXCELENCIA ACREDITADA",
      title: "Certificaciones de Confianza y Cumplimiento de Calidad",
      items: [
        "Proveedor Aprobado",
        "Aprobado Compliance Depot",
        "Certificado Green Seal",
        "U.S. EPA - Design for the Environment",
        "Socio de Marca GreenGlo",
        "G & Bros Services Inc. - Alianza Estratégica"
      ]
    },
    services: {
      subHeader: "NIVELES DE LIMPIEZA PROFESIONAL",
      title: "Nuestros Servicios Profesionales",
      btn: "Seleccionar y Estimar",
      cards: [
        {
          id: "standard",
          badge: null,
          title: "Limpieza de Mantenimiento Estándar",
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
          badge: "Popular",
          title: "Limpieza Profunda y Detallada",
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
      subHeader: "MEJORAS PREMIUM A MEDIDA",
      title: "Extras y Servicios Adicionales",
      priceLabel: "Precio Extra: +€",
      items: [
        { id: "oven", title: "Limpieza de Interior de Horno", price: 25 },
        { id: "fridge", title: "Limpieza de Interior de Nevera", price: 20 },
        { id: "windows", title: "Ventanas Exteriores y Rieles", price: 35 },
        { id: "balcony", title: "Lavado Profundo de Terraza/Balcón", price: 30 },
        { id: "ironing", title: "Ropa de Cama y Planchado Express", price: 15 },
        { id: "mattress", title: "Tratamiento de Colchón Anti-Alergias", price: 25 }
      ]
    },
    estimator: {
      subHeader: "HERRAMIENTA DE COTIZACIÓN INTERACTIVA",
      title: "Estimador de Precios G & Bros",
      tierLabel: "Seleccione el Tipo de Limpieza:",
      standard: "Estándar",
      deep: "Limpieza Profunda",
      move: "Entrada/Salida",
      bedsLabel: "Habitaciones y Salones",
      bathsLabel: "Baños",
      extrasLabel: "Seleccione Servicios Adicionales",
      receiptHeader: "Resumen de Brillo",
      baseCleanLabel: "Precio Base de Nivel",
      extraRoomsLabel: "Costo por Hab(s) Adicionales",
      extraBathsLabel: "Costo por Baño(s) Adicionales",
      estimateText: "Precio de Referencia Estimado",
      btnLabel: "Solicitar Presupuesto Firme",
      addonsLabels: {
        oven: "Interior del Horno (+25€)",
        fridge: "Interior de Nevera (+20€)",
        windows: "Ventanas Exteriores (+35€)",
        balcony: "Lavado de Terraza/Balcón (+30€)",
        ironing: "Ropa de Cama Express (+15€)",
        mattress: "Tratamiento de Colchón (+25€)"
      },
      disclaimer: "* Sujeto a cotizaciones firmes para espacios especiales"
    },
    forum: {
      subHeader: "RINCÓN COMUNITARIO INTERACTIVO",
      title: "Foro de Q&A Comunitario",
      all: "Todos",
      pets: "Productos y Mascotas",
      safety: "Confianza y Seguridad",
      pricing: "Precios y Planes",
      general: "Preguntas Generales",
      responseBadge: "Respuesta Oficial de G & Bros",
      helpfulText: "Útil",
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
      subHeader: "PONTE EN CONTACTO",
      title: "Contacto con G & Bros Services Inc.",
      emailLabel: "Dirección de Correo",
      phoneLabel: "Número de Teléfono",
      addrLabel: "Sede Corporativa",
      address: "Gran Via de las Comunidades, 45, Planta 2, Madrid",
      hoursLabel: "Horario Comercial",
      weekdays: "Lunes a Sábado: 8:00 AM – 8:00 PM",
      sunday: "Domingos: Cerrado",
      formTitle: "Formulario de Consulta",
      nameField: "Nombre Completo",
      phoneField: "Número de Teléfono",
      emailField: "Dirección de Correo",
      msgField: "Describa el tamaño de su apartamento, condiciones específicas de limpieza, o sus horarios preferidos para la llamada...",
      phName: "Alexis Martinez",
      phMsg: "Detalle habitaciones, baños, distribución, horario preferido...",
      submitBtn: "Enviar Formulario de Consulta",
      submittingBtn: "Enviando Mensaje...",
      confidentiality: "TODOS LOS DETALLES ESTÁN PROTEGIDOS Y ASEGURADOS",
      successTitle: "¡Consulta Enviada!",
      successDesc: "¡Gracias! G & Bros Services Inc. ha recibido su consulta. Nuestros supervisores de estimaciones se comunicarán con usted en breve.",
      validationErr: "Por favor, rellene todos los campos requeridos con información válida."
    },
    footer: {
      rights: "© 2026 G & Bros Services Inc. Todos los derechos reservados."
    }
  }
};