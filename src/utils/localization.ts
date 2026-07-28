import { getDisplayPhone } from "./security";

export const LOCALIZATION = {
  english: {
    header: {
      phoneText: `Phone: ${getDisplayPhone()}`,
      services: "Services",
      qa: "Q&A Community",
      contact: "Contact",
      learnMore: "Get Quote",
      rights: "© " + new Date().getFullYear() + " G & Bros Services Inc. All rights reserved."
    },
    hero: {
      badgeText: "Verified Cleaning Professionals",
      headline: "Spotless Cleanliness with G & Bros Services, Zero Compromise.",
      viewServices: "Explore Services",
      askQuestion: "Ask Q&A",
      premiumPlanTitle: "Standard Deep Cleaning Package",
      premiumBadge: "Most Requested",
      premiumTasks: [
        "Dusting and wiping all reachable surfaces & baseboards",
        "Deep sanitation of kitchen counters, sink & appliance exteriors",
        "Disinfection and scrub of full bathroom fixtures",
        "Vacuuming carpets & mopping hard surface floors throughout",
        "Trash removal & replacing fresh bin liners"
      ],
      trustMetric1: "Satisfaction Guarantee",
      trustMetric2: "Cleaning Jobs Completed",
      trustMetric3: "Vetted & Insured Staff"
    },
    badges: {
      subHeader: "Why Choose G & Bros",
      title: "Our Trust & Quality Standards",
      items: [
        "100% Vetted Staff",
        "Eco-Friendly Products",
        "Satisfaction Guaranteed",
        "Pet Safe Cleaners",
        "Family Owned and Operated",
        "Fully Insured Service"
      ],
      verifiedTitle: "100% Vetted Cleaners",
      verifiedDesc: "Background checked and rigorously trained staff.",
      ecoTitle: "Pet & Eco Friendly",
      ecoDesc: "Non-toxic, safe cleaning agents for your entire family.",
      satisfactionTitle: "Satisfaction Guarantee",
      satisfactionDesc: "If you're not delighted, we re-clean for free within 24 hours."
    },
    services: {
      subHeader: "Tailored Solutions",
      title: "Our Services",
      cards: [
        {
          id: "standard",
          title: "Residential Cleaning",
          description: "Enjoy a clean, fresh, and comfortable home without the stress. We provide reliable residential cleaning services tailored to your needs, including routine cleaning, deep cleaning, move-in and move-out cleaning, and customized cleaning plans.",
          bullets: [],
          bottomAccent: "Ideal for weekly or bi-weekly maintenance",
          btn: "Select Residential Clean"
        },
        {
          id: "deep",
          title: "Commercial Cleaning",
          description: "Keep your business clean, professional, and welcoming. We provide dependable commercial cleaning services for offices, condominiums, community areas, clubhouses, medical offices, and other commercial properties.",
          bullets: [],
          bottomAccent: "Flexible scheduling for daily, weekly, or after-hours cleaning",
          btn: "Select Commercial Clean"
        },
        {
          id: "move",
          title: "Vacation Rental Cleaning",
          description: "We help vacation rental owners provide an excellent experience for every guest. Our turnover cleaning services include thorough cleaning, sanitizing, linen preparation, restocking checks, and reporting any visible damage or maintenance concerns.",
          bullets: [],
          bottomAccent: "Perfect for Airbnb, Vrbo & property managers",
          btn: "Select Vacation Rental Clean"
        },
        {
          id: "property_watch",
          title: "Property Watch Services",
          description: "Protect your property while you are away. Our property watch service includes scheduled visual inspections, checking doors and windows, looking for leaks or visible damage, monitoring air conditioning, and reporting any concerns promptly.",
          bullets: [],
          bottomAccent: "Peace of mind for absentee homeowners",
          btn: "Select Property Watch"
        }
      ]
    },
    addons: {
      subHeader: "Custom Upgrades",
      title: "Specialized Add-On Services",
      priceLabel: "Starts at $",
      items: [
        { id: "fridge", title: "Interior Fridge Deep Cleaning", price: "35" },
        { id: "oven", title: "Interior Oven & Degreasing", price: "35" },
        { id: "windows", title: "Window Glass & Frame Detail", price: "45" },
        { id: "mattress", title: "Inside Kitchen Cabinets", price: "30" },
        { id: "balcony", title: "Balcony & Patio Sweep", price: "25" },
        { id: "ironing", title: "Laundry Wash & Fold", price: "20" }
      ]
    },
    forum: {
      subHeader: "Community Support",
      title: "Frequently Asked Questions",
      all: "All Questions",
      pets: "Pets & Safety",
      safety: "Trust & Access",
      pricing: "Pricing & Plans",
      general: "General Q&A",
      helpfulText: "Helpful",
      responseBadge: "Official G & Bros Response",
      askTitle: "Ask a Question",
      nameLabel: "Your Name (Optional)",
      phName: "e.g. Alex M.",
      catLabel: "Category",
      queryLabel: "Your Question",
      phQuery: "Ask about our services, products, or scheduling...",
      submitBtn: "Post Question",
      errQuery: "Please enter a question with at least 5 characters."
    },
    contact: {
      subHeader: "Get In Touch",
      title: "Request a Callback or Quote",
      address: "Calle Velázquez 45, 28001 Madrid, Spain",
      hoursLabel: "Business Hours",
      weekdays: "Monday to Friday: 7:00 A.M. – 4:00 P.M.",
      sunday: "Sunday: Closed",
      formTitle: "Schedule Your Free Consultation",
      nameField: "Full Name",
      phName: "e.g. John Doe",
      phoneField: "Phone Number",
      emailField: "Email Address",
      phMsg: "Tell us about your home or specific cleaning requests...",
      submitBtn: "Request Callback",
      submittingBtn: "Sending Request...",
      successTitle: "Inquiry Received!",
      successDesc: "Thank you for reaching out to G & Bros. A member of our team will contact you shortly.",
      confidentiality: "Your data is strictly protected and never shared."
    }
  },
  spanish: {
    header: {
      phoneText: `Teléfono: ${getDisplayPhone()}`,
      services: "Servicios",
      qa: "Comunidad Q&A",
      contact: "Contacto",
      learnMore: "Cotizar",
      rights: "© " + new Date().getFullYear() + " G & Bros Services Inc. Todos los derechos reservados."
    },
    hero: {
      badgeText: "Profesionales de Limpieza Verificados",
      headline: "Limpieza Impecable con G & Bros Services, Sin Compromisos.",
      viewServices: "Explorar Servicios",
      askQuestion: "Hacer Pregunta",
      premiumPlanTitle: "Paquete Estándar de Limpieza Profunda",
      premiumBadge: "Más Solicitado",
      premiumTasks: [
        "Polvo y limpieza de todas las superficies accesibles y rodapiés",
        "Desinfección profunda de mostradores, fregadero y exterior de electrodomésticos",
        "Desinfección y frotado de sanitarios y baño completo",
        "Aspirado de alfombras y fregado de suelos en todas las áreas",
        "Retiro de basura y reemplazo de bolsas"
      ],
      trustMetric1: "Garantía de Satisfacción",
      trustMetric2: "Trabajos de Limpieza Realizados",
      trustMetric3: "Personal Verificado y Asegurado"
    },
    badges: {
      subHeader: "Por Qué Elegir G & Bros",
      title: "Nuestros Estándares de Confianza y Calidad",
      items: [
        "Personal 100% Verificado",
        "Productos Ecológicos",
        "Garantía de Satisfacción",
        "Seguro para Mascotas",
        "Propiedad y Operación Familiar",
        "Servicio Totalmente Asegurado"
      ],
      verifiedTitle: "Limpiadores 100% Verificados",
      verifiedDesc: "Personal capacitado rigurosamente y con antecedentes comprobados.",
      ecoTitle: "Seguro para Mascotas y Ecológico",
      ecoDesc: "Productos de limpieza no tóxicos y seguros para toda la familia.",
      satisfactionTitle: "Garantía de Satisfacción",
      satisfactionDesc: "Si no queda satisfecho, volvemos a limpiar gratis en 24 horas."
    },
    services: {
      subHeader: "Soluciones a la Medida",
      title: "Nuestros Servicios",
      cards: [
        {
          id: "standard",
          title: "Limpieza Residencial",
          description: "Disfrute de un hogar limpio, fresco y cómodo sin estrés. Ofrecemos servicios confiables de limpieza residencial adaptados a sus necesidades, incluyendo limpieza de rutina, limpieza profunda, limpieza de entrada y salida, y planes de limpieza personalizados.",
          bullets: [],
          bottomAccent: "Ideal para mantenimiento semanal o quincenal",
          btn: "Seleccionar Residencial"
        },
        {
          id: "deep",
          title: "Limpieza Comercial",
          description: "Mantenga su negocio limpio, profesional y acogedor. Ofrecemos servicios confiables de limpieza comercial para oficinas, condominios, áreas comunitarias, casas club, consultorios médicos y otras propiedades comerciales.",
          bullets: [],
          bottomAccent: "Horarios flexibles para limpieza diaria, semanal o fuera de horario",
          btn: "Seleccionar Comercial"
        },
        {
          id: "move",
          title: "Limpieza de Alquiler Vacacional",
          description: "Ayudamos a los propietarios de alquileres vacacionales a brindar una experiencia excelente a cada huésped. Nuestros servicios de limpieza de rotación incluyen limpieza profunda, desinfección, preparación de ropa de cama, verificación de insumos e informe de daños o mantenimiento visibles.",
          bullets: [],
          bottomAccent: "Ideal para Airbnb, Vrbo y gestores de propiedades",
          btn: "Seleccionar Alquiler Vacacional"
        },
        {
          id: "property_watch",
          title: "Servicios de Inspección de Propiedades",
          description: "Proteja su propiedad mientras está fuera. Nuestro servicio de inspección de propiedades incluye inspecciones visuales programadas, verificación de puertas y ventanas, búsqueda de fugas o daños visibles, monitoreo del aire acondicionado y reporte oportuno de cualquier inquietud.",
          bullets: [],
          bottomAccent: "Tranquilidad total para propietarios ausentes",
          btn: "Seleccionar Inspección"
        }
      ]
    },
    addons: {
      subHeader: "Mejoras Personalizadas",
      title: "Servicios Adicionales Especializados",
      priceLabel: "Desde $",
      items: [
        { id: "fridge", title: "Limpieza Profunda de Nevera Interior", price: "35" },
        { id: "oven", title: "Limpieza de Horno Interior y Desengrase", price: "35" },
        { id: "windows", title: "Limpieza Detallada de Cristales y Marcos", price: "45" },
        { id: "mattress", title: "Limpieza Interior de Muebles de Cocina", price: "30" },
        { id: "balcony", title: "Barrido y Limpieza de Balcón o Terraza", price: "25" },
        { id: "ironing", title: "Lavado y Doblado de Ropa", price: "20" }
      ]
    },
    forum: {
      subHeader: "Soporte Comunitario",
      title: "Preguntas Frecuentes",
      all: "Todas las Preguntas",
      pets: "Mascotas y Seguridad",
      safety: "Confianza y Acceso",
      pricing: "Precios y Planes",
      general: "Preguntas Generales",
      helpfulText: "Útil",
      responseBadge: "Respuesta Oficial G & Bros",
      askTitle: "Hacer una Pregunta",
      nameLabel: "Su Nombre (Opcional)",
      phName: "ej. Alejandro M.",
      catLabel: "Categoría",
      queryLabel: "Su Pregunta",
      phQuery: "Pregunte sobre nuestros servicios, productos u horarios...",
      submitBtn: "Publicar Pregunta",
      errQuery: "Por favor ingrese una pregunta de al menos 5 caracteres."
    },
    contact: {
      subHeader: "Póngase en Contacto",
      title: "Solicite una Llamada o Cotización",
      address: "Calle Velázquez 45, 28001 Madrid, España",
      hoursLabel: "Horario de Atención",
      weekdays: "Lunes a Viernes: 7:00 A.M. – 4:00 P.M.",
      sunday: "Domingo: Cerrado",
      formTitle: "Programe su Consulta Gratuita",
      nameField: "Nombre Completo",
      phName: "ej. Juan Pérez",
      phoneField: "Número de Teléfono",
      emailField: "Correo Electrónico",
      phMsg: "Describa el tamaño de su vivienda o peticiones específicas...",
      submitBtn: "Solicitar Llamada",
      submittingBtn: "Enviando Solicitud...",
      successTitle: "¡Solicitud Recibida!",
      successDesc: "Gracias por contactar a G & Bros. Un miembro de nuestro equipo le contactará en breve.",
      confidentiality: "Sus datos están estrictamente protegidos y nunca serán compartidos."
    }
  }
};