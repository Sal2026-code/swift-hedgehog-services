export const LOCALIZATION = {
  english: {
    header: {
      phoneText: "+1 727-608-9599",
      services: "Services",
      estimator: "Cost Calculator",
      qa: "Q&A Forum",
      contact: "Contact Us",
      learnMore: "Get Free Quote",
      rights: "© 2025 G & Bros Services Inc. All rights reserved. Premium Professional Cleaning.",
    },
    hero: {
      badgeText: "Rated #1 Commercial & Residential Cleaning",
      headline: "Spotless Cleanliness with G & Bros, Zero Compromise.",
      values: [
        { title: "Vetted Professionals", desc: "Background-checked & trained cleaning specialists." },
        { title: "Eco-Friendly Products", desc: "Non-toxic, child & pet-safe solutions." },
        { title: "100% Guaranteed", desc: "Not satisfied? We re-clean free of charge." },
        { title: "Bilingual Service", desc: "Seamless communication in English & Spanish." }
      ],
      viewServices: "View Our Services",
      askQuestion: "Ask a Question",
      premiumPlanTitle: "Standard Deep Cleaning",
      premiumBadge: "Most Popular",
      premiumTasks: [
        "Dusting & sanitizing all surfaces & baseboards",
        "Deep scrubbing kitchen & bathroom tiles",
        "Vacuuming, floor wash & spot removal",
        "Trash removal & fresh linen setup"
      ],
      trustMetric1: "Satisfaction Guaranteed",
      trustMetric2: "Homes & Offices Cleaned",
      trustMetric3: "Insured & Vetted Staff"
    },
    badges: {
      subHeader: "WHY CHOOSE US",
      title: "Trusted & Accredited Care",
      items: [
        "Certified Cleaners",
        "Fully Insured",
        "Top Rated",
        "Eco Friendly",
        "Customer Support",
        "Key Holder Safe"
      ]
    },
    services: {
      subHeader: "OUR OFFERINGS",
      title: "Tailored Cleaning Packages",
      cards: [
        {
          id: "standard" as const,
          title: "Standard Care",
          bullets: [
            "Dusting accessible surfaces & furniture",
            "Vacuuming carpets & washing floors",
            "Sanitizing bathrooms & kitchen sinks",
            "Trash emptying & liner replacement"
          ],
          bottomAccent: "Ideal for weekly or bi-weekly maintenance",
          btn: "Select Standard"
        },
        {
          id: "deep" as const,
          title: "Deep Restoration",
          bullets: [
            "Includes all Standard Care services",
            "Detailed cleaning of baseboards & doors",
            "Deep grout scrub & fixture polishing",
            "Behind appliance & heavy dust removal"
          ],
          bottomAccent: "Recommended for first-time or monthly cleanings",
          btn: "Select Deep Clean"
        },
        {
          id: "move" as const,
          title: "Move In / Move Out",
          bullets: [
            "Complete empty-home deep cleaning",
            "Inside kitchen cabinets & drawers",
            "Inside oven & refrigerator sanitizing",
            "Window sills, frames & door tracks"
          ],
          bottomAccent: "Perfect for tenants, landlords & realtors",
          btn: "Select Move In/Out"
        }
      ]
    },
    addons: {
      subHeader: "CUSTOM EXTRAS",
      title: "Enhance Your Clean",
      priceLabel: "Price: $",
      items: [
        { id: "oven", title: "Inside Oven Deep Scrub", price: 25 },
        { id: "fridge", title: "Inside Refrigerator", price: 20 },
        { id: "windows", title: "Interior Windows & Tracks", price: 35 },
        { id: "balcony", title: "Balcony / Terrace Sweep", price: 30 },
        { id: "ironing", title: "Ironing & Laundry Care", price: 15 },
        { id: "mattress", title: "Mattress Deep Sanitization", price: 25 }
      ]
    },
    estimator: {
      subHeader: "INSTANT ESTIMATE",
      title: "Calculate Your Ballpark Price",
      tierLabel: "1. Select Cleaning Service Level",
      standard: "Standard Care",
      deep: "Deep Clean",
      move: "Move In/Out",
      bedsLabel: "Bedrooms / Living Spaces",
      bathsLabel: "Bathrooms",
      extrasLabel: "3. Choose Additional Extras",
      receiptHeader: "Quote Summary",
      baseCleanLabel: "Base Service Rate",
      extraRoomsLabel: "Additional Bedrooms",
      extraBathsLabel: "Additional Bathrooms",
      currencyCode: "USD",
      estimateText: "Estimated Price",
      disclaimer: "*Final quote confirmed upon inspection if needed.",
      btnLabel: "Apply Quote to Booking Form",
      addonsLabels: {
        oven: "Inside Oven ($25)",
        fridge: "Inside Refrigerator ($20)",
        windows: "Interior Windows ($35)",
        balcony: "Balcony Sweep ($30)",
        ironing: "Ironing Care ($15)",
        mattress: "Mattress Sanitizing ($25)"
      } as Record<string, string>
    },
    forum: {
      subHeader: "HELP & COMMUNITY",
      title: "Client Q&A Forum",
      all: "All Topics",
      pets: "Pet Safety",
      safety: "Home Access",
      pricing: "Pricing",
      general: "General",
      helpfulText: "Helpful",
      responseBadge: "G & Bros Response",
      askTitle: "Ask a Question",
      nameLabel: "Your Name",
      phName: "e.g. Sarah M.",
      catLabel: "Category",
      queryLabel: "Question Details",
      phQuery: "Ask about supplies, scheduling, or special instructions...",
      submitBtn: "Post Question",
      errQuery: "Please enter at least 5 characters for your question."
    },
    contact: {
      subHeader: "CONTACT US",
      title: "Book Your Cleaning Today",
      address: "Serving Tampa Bay, St. Petersburg & Surrounding Areas",
      hoursLabel: "Operating Hours",
      weekdays: "Mon - Sat: 7:00 AM - 7:00 PM",
      sunday: "Sunday: Closed",
      successTitle: "Quote Request Received!",
      successDesc: "Thank you for reaching out. A G & Bros representative will call or email you shortly to confirm your booking.",
      formTitle: "Request a Call Back or Free Quote",
      nameField: "Full Name",
      phName: "John Doe",
      phoneField: "Phone Number",
      emailField: "Email Address",
      phMsg: "Provide details on square footage, special requests or preferred appointment dates...",
      submitBtn: "Submit Quote Request",
      submittingBtn: "Submitting...",
      confidentiality: "Your contact details are 100% safe & confidential."
    }
  },
  spanish: {
    header: {
      phoneText: "+1 727-608-9599",
      services: "Servicios",
      estimator: "Calculadora de Costos",
      qa: "Foro Preguntas",
      contact: "Contáctenos",
      learnMore: "Cotización Gratis",
      rights: "© 2025 G & Bros Services Inc. Todos los derechos reservados. Limpieza Profesional Premium.",
    },
    hero: {
      badgeText: "Limpieza Comercial y Residencial #1",
      headline: "Limpieza Impecable con G & Bros, Cero Complicaciones.",
      values: [
        { title: "Profesionales Verificados", desc: "Especialistas en limpieza evaluados y capacitados." },
        { title: "Productos Ecológicos", desc: "Soluciones no tóxicas, seguras para niños y mascotas." },
        { title: "Garantía 100%", desc: "¿No quedó satisfecho? Re-limpiamos sin costo adicional." },
        { title: "Atención Bilingüe", desc: "Comunicación fluida en español e inglés." }
      ],
      viewServices: "Ver Nuestros Servicios",
      askQuestion: "Hacer una Pregunta",
      premiumPlanTitle: "Limpieza Profunda Estándar",
      premiumBadge: "Más Popular",
      premiumTasks: [
        "Sacudido y desinfección de superficies y zócalos",
        "Limpieza profunda de azulejos de cocina y baños",
        "Aspirado, trapeado y eliminación de manchas",
        "Retiro de basura y cambio de ropa de cama"
      ],
      trustMetric1: "Satisfacción Garantizada",
      trustMetric2: "Casas y Oficinas Limpiadas",
      trustMetric3: "Personal Asegurado"
    },
    badges: {
      subHeader: "POR QUÉ ELEGIRNOS",
      title: "Confianza y Acreditación",
      items: [
        "Personal Certificado",
        "Asegurados",
        "Mejor Valorados",
        "Ecológico",
        "Soporte Continuo",
        "Guarda Llaves Seguro"
      ]
    },
    services: {
      subHeader: "NUESTROS SERVICIOS",
      title: "Paquetes de Limpieza a la Medida",
      cards: [
        {
          id: "standard" as const,
          title: "Mantenimiento Estándar",
          bullets: [
            "Sacudido de muebles y superficies accesibles",
            "Aspirado de alfombras y trapeado de pisos",
            "Desinfección de baños y lavamanos de cocina",
            "Vaciado de papeleras y cambio de bolsas"
          ],
          bottomAccent: "Ideal para mantenimiento semanal o quincenal",
          btn: "Seleccionar Estándar"
        },
        {
          id: "deep" as const,
          title: "Limpieza Profunda",
          bullets: [
            "Incluye todo el servicio de Mantenimiento Estándar",
            "Limpieza detallada de zócalos y puertas",
            "Fregado de azulejos y pulido de grifería",
            "Limpieza detrás de electrodomésticos y polvo pesado"
          ],
          bottomAccent: "Recomendado para la primera sesión o mensual",
          btn: "Seleccionar Profunda"
        },
        {
          id: "move" as const,
          title: "Mudanza (Entrada / Salida)",
          bullets: [
            "Limpieza profunda completa de inmuebles vacíos",
            "Interior de gabinetes y cajones de cocina",
            "Desinfección interior de horno y refrigerador",
            "Limpieza de marfiles, marcos de ventanas y rieles"
          ],
          bottomAccent: "Perfecto para inquilinos, dueños y agentes inmobiliarios",
          btn: "Seleccionar Mudanza"
        }
      ]
    },
    addons: {
      subHeader: "SERVICIOS ADICIONALES",
      title: "Complemente su Limpieza",
      priceLabel: "Precio: $",
      items: [
        { id: "oven", title: "Limpieza Interna de Horno", price: 25 },
        { id: "fridge", title: "Limpieza Interna de Refrigerador", price: 20 },
        { id: "windows", title: "Ventanas Interiores y Rieles", price: 35 },
        { id: "balcony", title: "Barrido de Balcón / Terraza", price: 30 },
        { id: "ironing", title: "Planchado y Cuidado de Ropa", price: 15 },
        { id: "mattress", title: "Desinfección de Colchón", price: 25 }
      ]
    },
    estimator: {
      subHeader: "PRECIOS AL INSTANTE",
      title: "Calculadora Estimada de Costos",
      tierLabel: "1. Seleccione el Nivel de Servicio",
      standard: "Estándar",
      deep: "Profunda",
      move: "Mudanza",
      bedsLabel: "Habitaciones / Salones",
      bathsLabel: "Baños",
      extrasLabel: "3. Seleccione Extras Adicionales",
      receiptHeader: "Resumen de Cotización",
      baseCleanLabel: "Tarifa Base del Servicio",
      extraRoomsLabel: "Habitaciones Adicionales",
      extraBathsLabel: "Baños Adicionales",
      currencyCode: "USD",
      estimateText: "Precio Estimado",
      disclaimer: "*Cotización final confirmada al inspeccionar si es necesario.",
      btnLabel: "Aplicar Cotización al Formulario",
      addonsLabels: {
        oven: "Interior Horno ($25)",
        fridge: "Interior Refrigerador ($20)",
        windows: "Ventanas Interiores ($35)",
        balcony: "Barrido Balcón ($30)",
        ironing: "Planchado de Ropa ($15)",
        mattress: "Desinfección Colchón ($25)"
      } as Record<string, string>
    },
    forum: {
      subHeader: "AYUDA Y COMUNIDAD",
      title: "Foro de Preguntas de Clientes",
      all: "Todos los Temas",
      pets: "Seguridad Mascotas",
      safety: "Acceso al Hogar",
      pricing: "Precios",
      general: "General",
      helpfulText: "Útil",
      responseBadge: "Respuesta de G & Bros",
      askTitle: "Hacer una Pregunta",
      nameLabel: "Su Nombre",
      phName: "ej. María S.",
      catLabel: "Categoría",
      queryLabel: "Detalle de la Pregunta",
      phQuery: "Pregunte sobre insumos, horarios o instrucciones especiales...",
      submitBtn: "Publicar Pregunta",
      errQuery: "Por favor ingrese al menos 5 caracteres para su pregunta."
    },
    contact: {
      subHeader: "CONTÁCTENOS",
      title: "Reserve su Servicio Hoy",
      address: "Atendiendo Tampa Bay, St. Petersburg y áreas cercanas",
      hoursLabel: "Horario de Atención",
      weekdays: "Lun - Sáb: 7:00 AM - 7:00 PM",
      sunday: "Domingo: Cerrado",
      successTitle: "¡Solicitud de Cotización Recibida!",
      successDesc: "Gracias por contactarnos. Un representante de G & Bros le llamará o enviará un correo a la brevedad.",
      formTitle: "Solicite una Llamada o Cotización Gratis",
      nameField: "Nombre Completo",
      phName: "Juan Pérez",
      phoneField: "Número de Teléfono",
      emailField: "Correo Electrónico",
      phMsg: "Proporcione detalles sobre metros cuadrados, solicitudes especiales o fechas preferidas...",
      submitBtn: "Enviar Solicitud",
      submittingBtn: "Enviando...",
      confidentiality: "Sus datos de contacto son 100% confidenciales y seguros."
    }
  }
};