/**
 * ==============================================================================
 * PORTFOLIO DATA - SALAH ATMANE
 * ==============================================================================
 * Ce fichier contient TOUTES les données de votre portfolio dans les 3 langues.
 * Vous pouvez facilement modifier, ajouter ou supprimer du contenu ici sans
 * toucher au code HTML ou CSS.
 * 
 * Langues supportées :
 * - fr : Français
 * - en : English
 * - ar : العربية (Prend en charge automatiquement le mode RTL)
 * ==============================================================================
 */

const portfolioData = {
  // Configuration générale & Contact
  profile: {
    name: {
      fr: "Salah ATMANE",
      en: "Salah Atmane",
      ar: "صالح عثمان"
    },
    title: {
      fr: "Élève Ingénieur d'État en Transformation Digitale Industrielle",
      en: "Industrial Digital Transformation Engineering Student",
      ar: "طالب مهندس دولة في التحول الرقمي الصناعي"
    },
    subtitle: {
      fr: "Industrie 4.0 • IIoT • Systèmes Intelligents",
      en: "Industry 4.0 • IIoT • Smart Systems",
      ar: "الصناعة 4.0 • إنترنت الأشياء الصناعي • الأنظمة الذكية"
    },
    school: {
      fr: "École Nationale des Sciences Appliquées de Béni Mellal (ENSABM) - USMS",
      en: "National School of Applied Sciences of Beni Mellal (ENSABM) - USMS",
      ar: "المدرسة الوطنية للعلوم التطبيقية بني ملال (ENSABM) - جامعة السلطان مولاي سليمان"
    },
    schoolUrl: "https://ensabm.usms.ac.ma/tdi/",
    statusObjective: {
      fr: "À la recherche d'un Stage de Fin d'Études (PFE) de 4 mois à partir de Février 2027",
      en: "Seeking a 4-Month Final Year Graduation Internship (PFE) starting February 2027",
      ar: "باحث عن تدريب مشروع نهاية الدراسة (PFE) لمدة 4 أشهر ابتداءً من فبراير 2027"
    },
    bio: {
      fr: "Élève ingénieur en 5ème année à l'ENSA de Béni Mellal, spécialisé en Transformation Digitale Industrielle (TDI). Passionné par l'Industrie 4.0 et les systèmes intelligents pour concevoir des solutions concrètes et optimisées à fort impact.",
      en: "Final-year engineering student at ENSA Beni Mellal, specializing in Industrial Digital Transformation (TDI). Passionate about Industry 4.0 and smart systems to design tangible, optimized, high-impact solutions.",
      ar: "طالب مهندس في السنة الختامية بالمدرسة الوطنية للعلوم التطبيقية ببني ملال، تخصص التحول الرقمي الصناعي (TDI). شغوف بالصناعة 4.0 والأنظمة الذكية لتصميم حلول عملية ومحسّنة ذات أثر ملموس."
    },
    location: {
      fr: "Béni Mellal, Maroc (Mobile géographiquement)",
      en: "Beni Mellal, Morocco (Open to Relocation)",
      ar: "بني ملال، المغرب (مستعد للتنقل)"
    },
    email: "attmane.salah@gmail.com",
    phone: "+212 643 781 084",
    phoneFormatted: "+212643781084",
    linkedin: "https://www.linkedin.com/in/salah-atmane/",
    github: "https://github.com/SalahAT-CREAT",
    avatar: "assets/img/profile/salah_phot0.jpg", // Photo de profil haute résolution
    schoolLogo: "assets/img/profile/LOGO ENSA BM FR-AR verti.fw.png",
    cvPath: "assets/docs/cv-salah-atmane.pdf"  // Glissez votre CV ici
  },

  // Statistiques clés pour le bandeau d'accueil
  stats: [
    {
      value: "5ème",
      valueEn: "5th",
      valueAr: "السنة 5",
      label: { fr: "Année d'ingénierie", en: "Year Engineering", ar: "سنة هندسة الدولة" }
    },
    {
      value: "1er Prix",
      valueEn: "1st Place",
      valueAr: "الجائزة 1",
      label: { fr: "MTSPC 2026 (Session Orale)", en: "MTSPC 2026 (Oral Session)", ar: "مسابقة MTSPC 2026 (شفوي)" }
    },
    {
      value: "3",
      valueEn: "3",
      valueAr: "3",
      label: { fr: "Langues maîtrisées", en: "Fluent Languages", ar: "لغات متقنة" }
    },
    {
      value: "2",
      valueEn: "2",
      valueAr: "2",
      label: { fr: "Stages & Immersion", en: "Internships Completed", ar: "تدريبات ميدانية" }
    }
  ],

  // Stages en entreprise
  internships: [
    {
      id: "zenithsoft",
      company: "Zenithsoft",
      logo: "assets/img/internships/logo_zenithsoft.png",
      location: "", // Resté confidentiel selon votre souhait
      period: { fr: "Juil. – Août 2026 (2 mois)", en: "Jul – Aug 2026 (2 months)", ar: "يوليو – أغسطس 2026 (شهران)" },
      role: {
        fr: "Stagiaire Développeur Logiciel & Systèmes SIG",
        en: "Software & GIS Systems Developer Intern",
        ar: "متدرب في تطوير البرمجيات ونظم المعلومات الجغرافية"
      },
      description: {
        fr: "Conception et développement d'une plateforme SIG centralisée intelligente basée sur QGIS pour l'aide à la décision territoriale (cas de la région Béni Mellal-Khénifra). Collecte de données géographiques (OSM) et démographiques (HCP), nettoyage et analyse exploratoire (EDA), et création d'un tableau de bord cartographique interactif visualisant la répartition de la population, le découpage administratif, le réseau routier, les ressources en eau, l'occupation des sols, etc.",
        en: "Engineered a centralized Smart GIS Decision-Support Platform based on QGIS for regional territorial planning (Béni Mellal-Khénifra region). Conducted geospatial (OSM) and demographic (HCP) data pipelines, exploratory data analysis (EDA), and built an interactive mapping dashboard visualizing population distribution, administrative boundaries, road network, water resources, land use, etc.",
        ar: "تصميم وتطوير منصة نظم معلومات جغرافية (SIG) ذكية ومركزية مبنية على QGIS للمساعدة في اتخاذ القرارات الترابية بجهة بني ملال خنيفرة. تجميع ومعالجة البيانات الجغرافية (OSM) والديموغرافية (HCP)، التحليل الاستكشافي للبيانات (EDA)، وتطوير لوحة تحكم تفاعلية توضح التوزيع السكاني، التقسيم الإداري، الشبكة الطرقية، الموارد المائية، استخدامات الأراضي، إلخ."
      },
      tags: ["React 19", "FastAPI", "PostgreSQL / PostGIS", "Leaflet", "Docker", "Nginx", "SQLAlchemy", "Argon2id / JWT"],
      github: "https://github.com/SalahAT-CREAT/plateforme-sig-bmk",
      images: [
        "assets/img/internships/plateforme_sig1.png",
        "assets/img/internships/plateforme_sig2.png",
        "assets/img/internships/ZenithsoftPiplinedata.png"
      ],
      videos: [
        {
          title: { fr: "Démo Plateforme SIG", en: "GIS Platform Demo", ar: "عرض المنصة" },
          url: "https://youtu.be/fOk30NgHBos"
        }
      ]
    },
    {
      id: "cosumar",
      company: "COSUMAR (SUTA)",
      logo: "assets/img/internships/Logo_nouveau_cosumar.png",
      location: "Ouled Ayad, Maroc",
      period: { fr: "Juin – Juil. 2025 (1 mois)", en: "Jun – Jul 2025 (1 month)", ar: "يونيو – يوليو 2025 (شهر واحد)" },
      role: {
        fr: "Stage d'Initiation — Atelier de Régulation Industrielle",
        en: "Industrial Automation & Regulation Intern",
        ar: "تدريب استكشافي — ورشة الضبط والأجهزة الصناعية"
      },
      description: {
        fr: "Immersion au cœur de l'atelier de régulation et d'instrumentation pendant la campagne betteravière. Accompagnement des équipes techniques lors des interventions de maintenance préventive et corrective. Compréhension de l'importance critique de la redondance des systèmes automatisés pour garantir la continuité de production 24/7, des protocoles d'intervention rapide et du strict respect des normes de sécurité industrielle (HSE).",
        en: "Industrial observation internship in the instrumentation and regulation workshop during the high-demand sugar beet harvesting campaign. Shadowed maintenance teams in preventive and corrective operations. Observed the vital importance of automated system redundancy for 24/7 continuous manufacturing, emergency intervention protocols, and rigorous industrial health & safety standards (HSE).",
        ar: "تدريب ميداني في ورشة الضبط والأجهزة الصناعية التابعة لمجموعة كوسومار خلال ذروة موسم الشمندر السكري. مرافقة فرق الصيانة في التدخلات الوقائية والطارئة، وفهم الدور الجوهري لمضاعفة النظم (Redundancy) لضمان استمرارية الإنتاج على مدار الساعة، والالتزام الصارم بمعايير السلامة الصناعية (HSE)."
      },
      tags: [
        { fr: "Instrumentation Industrielle", en: "Industrial Instrumentation" },
        { fr: "Régulation & Capteurs", en: "Process Control & Sensors" },
        { fr: "Maintenance Industrielle", en: "Industrial Maintenance" },
        { fr: "Sécurité HSE", en: "Industrial Safety (HSE)" },
        { fr: "Continuité de Service", en: "Operational Continuity & Redundancy" }
      ],
      github: "",
      images: [
        "assets/img/internships/cousmar2.jpg",
        "assets/img/internships/cosumar1.jpg"
      ],
      videos: []
    }
  ],

  // Visites techniques & Immersion industrielle
  visits: [
    {
      id: "ocp",
      title: {
        fr: "Groupe OCP — Site Minier de Béni Amir (Khouribga)",
        en: "OCP Group — Béni Amir Mining & Beneficiation Site (Khouribga)",
        ar: "مجموعة المكتب الشريف للفوسفاط (OCP) — موقع بني عمير (خريبكة)"
      },
      date: { fr: "30 Avril 2025", en: "April 30, 2025", ar: "30 أبريل 2025" },
      badge: { fr: "Immersion Industrielle", en: "Industrial Field Exposure", ar: "زيارة ميدانية صناعية" },
      description: {
        fr: "Visite technique approfondie sur le site minier de Béni Amir pour appréhender la chaîne complète d'extraction, de criblage, de lavage et d'enrichissement du phosphate, ainsi que la logistique lourde de transport vers les unités de transformation.",
        en: "In-depth industrial site visit at the Béni Amir mining site to explore the complete phosphate extraction, screening, washing, and beneficiation pipeline, alongside heavy transport logistics to processing units.",
        ar: "زيارة تقنية واستكشافية لموقع بني عمير المنجمي للتعرف على السلسلة المتكاملة لاستخراج الفوسفاط، المعالجة، الغسيل والفرز، إضافة إلى النظم اللوجستية لنقله إلى وحدات المعالجة."
      },
      images: []
    },
    {
      id: "gitex",
      title: {
        fr: "GITEX Africa — Marrakech",
        en: "GITEX Africa — Marrakech",
        ar: "معرض جيتكس إفريقيا (GITEX Africa) — مراكش"
      },
      date: { fr: "8 Avril 2026", en: "April 8, 2026", ar: "8 أبريل 2026" },
      badge: { fr: "Salon International Tech", en: "Global Tech Summit", ar: "المؤتمر التكنولوجي الدولي" },
      description: {
        fr: "Participation au plus grand salon technologique du continent : découverte des dernières innovations en Industrie 4.0, Cloud, Cybersécurité, solutions IoT industrielles et mise en réseau avec les acteurs de la transformation digitale.",
        en: "Attendance at Africa's largest tech expo: exploring breakthroughs in Industry 4.0, Cloud architectures, Cybersecurity, industrial IoT solutions, and networking with key digital transformation leaders.",
        ar: "المشاركة في أكبر ملتقى تكنولوجي في إفريقيا: استكشاف أحدث ابتكارات الصناعة 4.0، الحوسبة السحابية، الأمن السيبراني، إنترنت الأشياء الصناعي والتواصل مع رواد التحول الرقمي."
      },
      images: [
        "assets/img/visits/gitex1.jpg",
        "assets/img/visits/gitex2.jpg",
        "assets/img/visits/gitex3.jpg",
        "assets/img/visits/gitex4.webp"
      ]
    }
  ],

  // Projets majeurs
  projects: [
    {
      id: "tsp-flood-simulation",
      title: {
        fr: "Modélisation & Simulation des Inondations à l'Aval des Barrages Bin El Ouidane et Ahmed El Hansali",
        en: "Flood Hydrodynamic Modeling & Simulation Downstream of Bin El Ouidane & Ahmed El Hansali Dams",
        ar: "نمذجة ومحاكاة مخاطر فيضانات سافلة سدي بين الويدان وأحمد الحنصالي"
      },
      award: {
        fr: "🏆 1er Prix — Session Orale · MTSPC 2026",
        en: "🏆 1st Place — Oral Session · MTSPC 2026",
        ar: "🏆 الجائزة الأولى — الجلسة الشفوية · MTSPC 2026"
      },
      context: {
        fr: "The Moroccan TSP Competition 2026",
        en: "The Moroccan TSP Competition 2026",
        ar: "مسابقة The Moroccan TSP Competition 2026"
      },
      period: { fr: "Avril 2026", en: "April 2026", ar: "أبريل 2026" },
      description: {
        fr: "Étude et simulation hydrodynamique avancée des risques d'inondations et de rupture potentielle à l'aval des grands barrages de Bin El Ouidane et Ahmed El Hansali. Élaboration de cartographies de zonage des aléas et vulnérabilités à l'aide de QGIS et HEC-RAS, et conception de scénarios d'évacuation d'urgence pour appuyer la prise de décision de la protection civile et réduire les pertes humaines et matérielles.",
        en: "Hydrodynamic simulation and hazard modeling downstream of the major Bin El Ouidane and Ahmed El Hansali dams. Constructed multi-tier hazard and vulnerability spatial maps using QGIS and HEC-RAS, developing emergency evacuation blueprints to assist authorities and civil protection in disaster mitigation.",
        ar: "دراسة ومحاكاة هيدروديناميكية متقدمة لمخاطر الفيضانات والانهيار المحتمل في سافلة سدي بين الويدان وأحمد الحنصالي. إعداد خرائط رقمية لتصنيف درجات الخطورة والهشاشة عبر برمجيات QGIS و HEC-RAS، وتطوير سيناريوهات الإخلاء والإنقاذ لمساندة السلطات وفرق الحماية المدنية في إنقاذ الأرواح والحد من الخسائر."
      },
      tags: [
        "QGIS",
        "HEC-RAS",
        { fr: "Cartographie des Risques", en: "Flood Hazard Mapping" },
        { fr: "Modélisation Hydrodynamique", en: "Hydrodynamic Modeling" },
        { fr: "Aide à la Décision", en: "Emergency Decision Support" }
      ],
      github: "",
      images: [
        "assets/img/projects/Diapositive113_MTSPC.JPG",
        "assets/img/projects/Diapositive116_MTSPC.JPG",
        "assets/img/projects/Diapositive133_MTSPC.JPG",
        "assets/img/projects/Diapositive340_MTSPC.JPG",
        "assets/img/projects/Diapositive365_MTSPC.JPG"
      ],
      videos: [
        {
          title: { fr: "Présentation Orale & Simulation", en: "Oral Presentation & Simulation", ar: "العرض الشفوي والمحاكاة" },
          url: "https://youtu.be/ffHhXcwICUA"
        }
      ]
    },
    {
      id: "optistock",
      title: {
        fr: "OptiStock Solutions — Système Intelligent d'Aide à la Décision Logistique",
        en: "OptiStock Solutions — Smart Logistics & Decision-Support System",
        ar: "منصة OptiStock Solutions — النظام الذكي لدعم القرارات اللوجستية"
      },
      award: "",
      context: {
        fr: "Module Apprentissage Par Projet (APP) — 4ème Année ENSABM",
        en: "Project-Based Learning Module (APP) — 4th Year ENSABM",
        ar: "وحدة التعلم بالمشروع (APP) — السنة الرابعة ENSABM"
      },
      period: { fr: "Mai 2026", en: "May 2026", ar: "مايو 2026" },
      description: {
        fr: "Solution logistique globale optimisant la mise en relation entre offreurs et demandeurs d'espaces de stockage. Intègre l'optimisation mathématique pour l'implantation géographique des entrepôts (problème de Weber/Weiszfeld et scoring SAW), la planification optimisée des tournées de livraison (VRP via Google OR-Tools), la télémétrie IoT en temps réel pour le contrôle des conditions d'entrepôt, et un chatbot assistant décisionnel (OptiBot via Google Gemini Flash).",
        en: "Comprehensive logistics platform bridging warehouse providers and businesses seeking storage. Features mathematical facility location optimization (Weber/Weiszfeld & SAW scoring), vehicle delivery route optimization (VRP via Google OR-Tools), real-time IoT monitoring for storage environmental parameters, and an adaptive conversational decision-support chatbot (OptiBot powered by Gemini Flash).",
        ar: "حل لوجستي متكامل يربط بين مزودي المستودعات والشركات الباحثة عن مساحات تخزين. يتضمن تحسيناً رياضياً لتحديد المواقع الجغرافية المثلى للمستودعات (خوارزميات Weber/Weiszfeld وتصنيف SAW)، وتحسين مسارات التوزيع (VRP عبر Google OR-Tools)، والتتبع اللحظي لظروف التخزين عبر مستشعرات IoT، مع روبوت محادثة تفاعلي للمساعدة في اتخاذ القرارات (OptiBot عبر Gemini Flash)."
      },
      tags: ["Next.js 14", "FastAPI (Python 3.12)", "Google OR-Tools (MIP/VRP)", "Leaflet", "NumPy / SciPy", "Tailwind CSS", "IoT", "Google Gemini Flash"],
      github: "https://github.com/SalahAT-CREAT/OptiStock-Solution",
      images: [
        "assets/img/projects/optistock_platforme.jpg",
        "assets/img/projects/data_pipline_optistock.png",
        "assets/img/projects/implimentation_optistock.jpg",
        "assets/img/projects/iot_optistock.jpg",
        "assets/img/projects/image_PFA.jpeg"
      ],
      videos: []
    }
  ],

  // Activités de clubs & Responsabilités
  activities: [
    {
      id: "club-industrie-4",
      title: {
        fr: "Club Industrie 4.0 — ENSA Béni Mellal",
        en: "Industry 4.0 Club — ENSA Beni Mellal",
        ar: "نادي الصناعة 4.0 — المدرسة الوطنية للعلوم التطبيقية بني ملال"
      },
      role: {
        fr: "Responsable Logistique & Coordination Événementielle",
        en: "Head of Logistics & Event Operations",
        ar: "مسؤول اللوجستيك والتنسيق الميداني"
      },
      period: { fr: "Sept. 2024 – Juin 2026", en: "Sep 2024 – Jun 2026", ar: "سبتمبر 2024 – يونيو 2026" },
      description: {
        fr: "Gestion logistique intégrale pour assurer le bon déroulement des formations et compétitions du club (réservation et aménagement des salles, approvisionnement en équipements et matériels techniques). Coordination logistique de la Journée d'Intégration et du workshop/compétition 'Build AI Agent without coding', etc.",
        en: "End-to-end logistics coordination to guarantee smooth execution of club workshops and technical challenges (venue preparation, technical equipment sourcing, scheduling). Coordinated logistics for the Engineering Integration Day and the 'Build AI Agent without coding' workshop & competition, etc.",
        ar: "الإشراف الكامل على العمليات اللوجستية لضمان نجاح الورشات التكوينية والمسابقات (تجهيز القاعات، توفير المعدات والأجهزة التقنية). التنسيق الميداني لليوم الإدماجي للطلبة وورشة ومسابقة 'بناء وكلاء الذكاء الاصطناعي بدون برمجة'."
      },
      logo: "assets/img/activities/logo_clubindus.jpg",
      images: [
        "assets/img/activities/clubindus4.jpg",
        "assets/img/activities/clubindus1.jpg",
        "assets/img/activities/clubindus2.jpg",
        "assets/img/activities/clubindus3.jpg",
        "assets/img/activities/clubindus5.jpg"
      ]
    },
    {
      id: "comite-mtspc",
      title: {
        fr: "Comité d'Organisation — The Moroccan TSP Competition (MTSPC)",
        en: "Organizing Committee — The Moroccan TSP Competition (MTSPC)",
        ar: "اللجنة التنظيمية لمسابقة The Moroccan TSP Competition (MTSPC)"
      },
      logo: "assets/img/activities/MTSPC LOGO Removed Background(3).png",
      role: {
        fr: "Design Graphique, Montage Vidéo & Organisation Jour J",
        en: "Graphic Design, Video Production & On-Site Operations",
        ar: "التصميم الجرافيكي، مونتاج الفيديو والتنظيم الميداني"
      },
      period: { fr: "Fév. 2025 – Juin 2026", en: "Feb 2025 – Jun 2026", ar: "فبراير 2025 – يونيو 2026" },
      description: {
        fr: "Création des supports graphiques promotionnels et montage des capsules vidéo de la compétition. Participation active aux opérations sur le terrain durant le Jour J.",
        en: "Creation of promotional graphic assets and video editing for the competition. Active participation in on-site operations during event day.",
        ar: "إعداد التصاميم الجرافيكية الترويجية ومونتاج مقاطع الفيديو الخاصة بالمسابقة، مع المشاركة الفعالة في العمليات الميدانية خلال يوم المسابقة."
      },
      images: [
        "assets/img/activities/Diapositive285_MTSPC.JPG",
        "assets/img/activities/mtspc1.jpg"
      ]
    }
  ],

  // Matrice des compétences rigoureusement nettoyée
  skills: {
    categories: [
      {
        id: "industrial",
        title: {
          fr: "Génie Industriel, Automatisme & IIoT",
          en: "Industrial Automation & Smart Systems",
          ar: "الهندسة الصناعية، الآلية والأنظمة الذكية"
        },
        icon: "cogs",
        subgroups: [
          {
            name: { fr: "Automatisme & Simulation", en: "Automation & Simulation", ar: "التحكم الآلي والمحاكاة" },
            items: [
              { fr: "Programmation Ladder", en: "Ladder Logic" },
              "Factory I/O",
              "Automation Studio"
            ]
          },
          {
            name: { fr: "Systèmes Embarqués & IoT", en: "Embedded & IoT Systems", ar: "الأنظمة المدمجة وإنترنت الأشياء" },
            items: [
              "ESP32",
              "Arduino Uno",
              { fr: "Protocole MQTT", en: "MQTT Protocol" }
            ]
          },
          {
            name: { fr: "Management Industriel & Qualité", en: "Industrial Management & Quality", ar: "الإدارة الصناعية والجودة" },
            items: [
              { fr: "Amélioration continue (ISO 9001)", en: "Continuous Improvement (ISO 9001)" },
              { fr: "AMDEC", en: "FMEA (AMDEC)" },
              { fr: "GPAO / GMAO", en: "CAPM / CMMS" },
              { fr: "Suivi des KPIs (TRS)", en: "KPI Tracking (OEE)" },
              { fr: "Maintenance préventive", en: "Preventive Maintenance" }
            ]
          }
        ]
      },
      {
        id: "supply-chain",
        title: {
          fr: "Supply Chain & Recherche Opérationnelle",
          en: "Supply Chain & Operations Research",
          ar: "سلسلة الإمداد وبحوث العمليات"
        },
        icon: "truck-fast",
        subgroups: [
          {
            name: { fr: "Recherche Opérationnelle", en: "Operations Research", ar: "بحوث العمليات والتحسين الرياضي" },
            items: [
              { fr: "Modélisation mathématique", en: "Mathematical Modeling" },
              "Google OR-Tools",
              { fr: "Solveur LKH", en: "LKH Solver" },
              "pymoo",
              { fr: "Heuristiques", en: "Heuristics & Metaheuristics" }
            ]
          },
          {
            name: { fr: "Planification & Logistique", en: "Planning & Logistics", ar: "التخطيط واللوجستيك" },
            items: [
              { fr: "Optimisation des transports (VRP / TSP)", en: "Transport Optimization (VRP / TSP)" },
              { fr: "Gestion des stocks", en: "Inventory Management" },
              "MRP 2",
              "PIC / PDP",
              { fr: "Ordonnancement", en: "Scheduling & Dispatching" }
            ]
          },
          {
            name: { fr: "Systèmes ERP", en: "ERP Systems", ar: "أنظمة تخطيط الموارد" },
            items: ["Odoo"]
          }
        ]
      },
      {
        id: "data-gis",
        title: {
          fr: "Data Science, SIG & Big Data",
          en: "Data Science, GIS & Big Data",
          ar: "علوم البيانات، نظم المعلومات الجغرافية والبيانات الضخمة"
        },
        icon: "database",
        subgroups: [
          {
            name: { fr: "Data Analytics & BI", en: "Data Analytics & BI", ar: "تحليل البيانات وذكاء الأعمال" },
            items: [
              "Python (Pandas, NumPy)",
              { fr: "Analyse Exploratoire (EDA)", en: "Exploratory Data Analysis (EDA)" },
              "Power BI",
              { fr: "Excel Avancé & VBA", en: "Advanced Excel & VBA" }
            ]
          },
          {
            name: { fr: "Données Spatiales", en: "Spatial Engineering", ar: "البيانات المكانية والجغرافية" },
            items: ["QGIS", "PostGIS", "GeoPandas", "HEC-RAS"]
          },
          {
            name: { fr: "Bases de Données & Big Data", en: "Databases & Big Data", ar: "قواعد البيانات والبيانات الضخمة" },
            items: ["PostgreSQL", "MongoDB", "SQLite", "PySpark", "Hive"]
          }
        ]
      },
      {
        id: "software",
        title: {
          fr: "Développement Logiciel, Réseaux & DevOps",
          en: "Software Engineering, Networks & DevOps",
          ar: "تطوير البرمجيات، الشبكات والـ DevOps"
        },
        icon: "code",
        subgroups: [
          {
            name: { fr: "Langages & Conception", en: "Languages & Architecture", ar: "لغات البرمجة والتصميم البرمجي" },
            items: [
              "Python",
              "Java",
              "C",
              "SQL",
              { fr: "POO Avancée", en: "Advanced OOP" },
              "Design Patterns"
            ]
          },
          {
            name: { fr: "Vision par Ordinateur", en: "Computer Vision", ar: "الرؤية الحاسوبية" },
            items: ["OpenCV"]
          },
          {
            name: { fr: "Infrastructure & Réseaux", en: "Infrastructure, Cloud & Security", ar: "البنية التحتية، السحابة والشبكات" },
            items: ["Docker", "Linux", "OpenStack", "Wireshark", "Nmap", "Git / GitHub"]
          }
        ]
      },
      {
        id: "languages-soft",
        title: {
          fr: "Langues & Compétences Transversales",
          en: "Languages & Core Strengths",
          ar: "اللغات والمهارات الشخصية"
        },
        icon: "globe",
        subgroups: [
          {
            name: { fr: "Langues Maîtrisées", en: "Spoken Languages", ar: "اللغات المتقنة" },
            items: [
              { fr: "Arabe : Langue maternelle", en: "Arabic: Native" },
              { fr: "Français : Courant", en: "French: Fluent" },
              { fr: "Anglais : Courant", en: "English: Fluent" }
            ]
          },
          {
            name: { fr: "Compétences Transversales", en: "Transversal Skills", ar: "مهارات إضافية" },
            items: [
              { fr: "Montage Vidéo", en: "Video Editing" },
              { fr: "Design Graphique", en: "Graphic Design" },
              { fr: "Coordination Logistique Événementielle", en: "Event Logistics Coordination" }
            ]
          }
        ]
      }
    ]
  },

  // Traductions de l'interface (Labels, Boutons, Titres de sections)
  ui: {
    nav: {
      about: { fr: "À Propos", en: "About", ar: "نبذة عني" },
      internships: { fr: "Stages", en: "Internships", ar: "التدريبات" },
      visits: { fr: "Visites", en: "Field Visits", ar: "الزيارات الميدانية" },
      projects: { fr: "Projets", en: "Projects", ar: "المشاريع" },
      activities: { fr: "Clubs & Activités", en: "Leadership & Clubs", ar: "الأنشطة والنوادي" },
      skills: { fr: "Compétences", en: "Skills", ar: "المهارات" },
      contact: { fr: "Contact", en: "Contact", ar: "تواصل معي" }
    },
    hero: {
      badge: {
        fr: "Disponible pour Stage PFE (Février 2027 • 4 Mois)",
        en: "Available for Final Year Internship (Feb 2027 • 4 Months)",
        ar: "متاح لتدريب مشروع نهاية الدراسة (فبراير 2027 • 4 أشهر)"
      },
      ctaContact: { fr: "Me contacter", en: "Get in Touch", ar: "تواصل معي" },
      ctaCv: { fr: "Télécharger mon CV", en: "Download Resume", ar: "تحميل السيرة الذاتية" },
      ctaProjects: { fr: "Découvrir mes projets", en: "View Projects", ar: "استكشف المشاريع" }
    },
    sections: {
      aboutTitle: { fr: "À Propos", en: "About Me", ar: "نبذة عني" },
      aboutSubtitle: { fr: "Formation en ingénierie industrielle et technologies numériques", en: "Industrial engineering and digital technologies background", ar: "تكوين يجمع بين الهندسة الصناعية والحلول الرقمية" },
      
      internshipsTitle: { fr: "Stages en Entreprise", en: "Internships", ar: "التدريبات المهنية" },
      internshipsSubtitle: { fr: "Expériences pratiques en industrie et en développement logiciel", en: "Practical experience in industry and software development", ar: "خبرات عملية في المجال الصناعي وتطوير البرمجيات" },
      
      visitsTitle: { fr: "Visites Techniques", en: "Industrial Visits", ar: "الزيارات الميدانية" },
      visitsSubtitle: { fr: "Découverte des sites industriels et des innovations technologiques", en: "Discovering industrial sites and technological innovations", ar: "الاطلاع الميداني على المنشآت الصناعية والابتكارات" },
      
      projectsTitle: { fr: "Projets Réalisés", en: "Key Projects", ar: "المشاريع المنجزة" },
      projectsSubtitle: { fr: "Applications concrètes en optimisation, IoT et modélisation", en: "Practical applications in optimization, IoT, and simulation", ar: "تطبيقات عملية في التحسين الرياضي، إنترنت الأشياء والنمذجة" },
      
      activitiesTitle: { fr: "Activités & Clubs", en: "Clubs & Activities", ar: "الأنشطة والنوادي" },
      activitiesSubtitle: { fr: "Organisation d'événements, logistique et travail en équipe", en: "Event organization, logistics, and teamwork", ar: "تنظيم الفعاليات، التنسيق اللوجستي والعمل الجماعي" },
      
      skillsTitle: { fr: "Compétences Techniques", en: "Technical Skills", ar: "المهارات التقنية" },
      skillsSubtitle: { fr: "Outils, langages et méthodes maîtrisés", en: "Mastered tools, languages, and methodologies", ar: "الأدوات واللغات والمنهجيات المعتمدة" },
      
      contactTitle: { fr: "Me Contacter", en: "Get in Touch", ar: "تواصل معي" },
      contactSubtitle: { fr: "Disponible pour un stage de fin d'études (PFE) de 4 mois dès février 2027", en: "Available for a 4-month final year internship (PFE) starting February 2027", ar: "متاح لتدريب مشروع نهاية الدراسة (PFE) لمدة 4 أشهر ابتداءً من فبراير 2027" }
    },
    buttons: {
      viewCode: { fr: "Code Source", en: "Source Code", ar: "الكود المصدري" },
      viewDemo: { fr: "Démo Vidéo", en: "Watch Video", ar: "مشاهدة الفيديو" },
      closeModal: { fr: "Fermer", en: "Close", ar: "إغلاق" },
      copyEmail: { fr: "Copier l'adresse email", en: "Copy Email Address", ar: "نسخ عنوان البريد" },
      emailCopied: { fr: "Email copié !", en: "Email copied!", ar: "تم نسخ البريد!" },
      downloadCv: { fr: "Télécharger le CV (PDF)", en: "Download Resume (PDF)", ar: "تحميل السيرة الذاتية (PDF)" },
      watchOnYoutube: { fr: "Regarder sur YouTube", en: "Watch on YouTube", ar: "المشاهدة على يوتيوب" },
      videoNotice: {
        fr: "En local ou si le lecteur est restreint (Erreur 153), ouvrez directement la vidéo :",
        en: "If playback is restricted locally (YouTube Error 153), open directly:",
        ar: "إذا تعذر تشغيل الفيديو محلياً (الخطأ 153)، افتحه مباشرة:"
      }
    },
    footer: {
      rights: { fr: "Tous droits réservés.", en: "All rights reserved.", ar: "جميع الحقوق محفوظة." },
      tagline: {
        fr: "Conçu avec passion • Génie Transformation Digitale Industrielle • ENSA Béni Mellal",
        en: "Built with passion • Industrial Digital Transformation Engineering • ENSA Beni Mellal",
        ar: "صُمم بشغف • هندسة التحول الرقمي الصناعي • المدرسة الوطنية للعلوم التطبيقية بني ملال"
      }
    }
  }
};

// Export pour le navigateur
if (typeof window !== "undefined") {
  window.portfolioData = portfolioData;
}
