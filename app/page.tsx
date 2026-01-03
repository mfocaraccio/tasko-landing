"use client";

import { useState, useEffect } from "react";

const translations = {
  en: {
    nav: {
      features: "Features",
      howItWorks: "How it works",
      getStarted: "Get Started Free",
      signIn: "Sign in",
    },
    hero: {
      title: "Your tasks,",
      titleHighlight: "simplified.",
      subtitle: "The task manager that helps you focus on what matters. Organize projects, plan your week, and get things done.",
      cta: "Get Started Free",
      noCreditCard: "No credit card required",
      signIn: "Already have an account?",
    },
    features: {
      title: "Everything you need",
      subtitle: "Simple but powerful tools to keep you organized",
      list: [
        {
          title: "Weekly View",
          description: "See your entire week at a glance. Drag tasks between days easily.",
          icon: "calendar",
        },
        {
          title: "Projects",
          description: "Group related tasks into projects with deadlines, labels, and visual progress.",
          icon: "folder",
        },
        {
          title: "Scheduled Tasks",
          description: "Schedule tasks for future dates. They appear automatically in your week.",
          icon: "clock",
        },
        {
          title: "Recurring Tasks",
          description: "Create monthly tasks using natural language. 'Pay rent on the 5th with 3 days notice'.",
          icon: "repeat",
        },
        {
          title: "History",
          description: "Complete log of finished tasks. Search, filter, and restore when needed.",
          icon: "history",
        },
        {
          title: "Favorites",
          description: "Mark projects as favorites for quick access from the sidebar.",
          icon: "star",
        },
      ],
    },
    moreFeatures: {
      title: "And much more...",
      list: [
        { title: "Labels", description: "Custom color tags", icon: "tag" },
        { title: "Sections", description: "Organize by sections", icon: "sections" },
        { title: "PWA", description: "Install on your phone", icon: "phone" },
        { title: "Multilingual", description: "Spanish & English", icon: "language" },
        { title: "Urgent", description: "Special urgent section", icon: "urgent" },
        { title: "Drag & Drop", description: "Reorganize by dragging", icon: "drag" },
        { title: "Duplicate", description: "Clone projects & tasks", icon: "duplicate" },
        { title: "Archive", description: "Archive finished projects", icon: "archive" },
      ],
    },
    howItWorks: {
      title: "Simple to use",
      subtitle: "Start in seconds. No complicated setup.",
      steps: [
        {
          number: "1",
          title: "Create your account",
          description: "Sign up free with email or Google. No credit card needed.",
        },
        {
          number: "2",
          title: "Add your tasks",
          description: "Write your tasks and assign them to days. Drag to reorganize.",
        },
        {
          number: "3",
          title: "Complete and progress",
          description: "Mark tasks as done and watch your progress. Productivity made easy.",
        },
      ],
    },
    cta: {
      title: "Start organizing your life today",
      subtitle: "Join thousands already using Tasko to be more productive. Free forever.",
      button: "Create Free Account",
    },
    footer: {
      copyright: "All rights reserved.",
      madeWith: "Made with love",
    },
  },
  es: {
    nav: {
      features: "Funciones",
      howItWorks: "Como funciona",
      getStarted: "Comenzar Gratis",
      signIn: "Iniciar sesion",
    },
    hero: {
      title: "Tus tareas,",
      titleHighlight: "simplificadas.",
      subtitle: "El gestor de tareas que te ayuda a enfocarte en lo importante. Organiza proyectos, planifica tu semana y logra tus metas.",
      cta: "Comenzar Gratis",
      noCreditCard: "Sin tarjeta de credito",
      signIn: "¿Ya tenes cuenta?",
    },
    features: {
      title: "Todo lo que necesitas",
      subtitle: "Herramientas simples pero poderosas para mantenerte organizado",
      list: [
        {
          title: "Vista Semanal",
          description: "Ve toda tu semana de un vistazo. Arrastra tareas entre dias facilmente.",
          icon: "calendar",
        },
        {
          title: "Proyectos",
          description: "Agrupa tareas en proyectos con deadlines, labels y progreso visual.",
          icon: "folder",
        },
        {
          title: "Tareas Programadas",
          description: "Programa tareas para fechas futuras. Aparecen automaticamente en tu semana.",
          icon: "clock",
        },
        {
          title: "Tareas Recurrentes",
          description: "Crea tareas mensuales con lenguaje natural. 'Pagar alquiler el 5 con 3 dias de anticipacion'.",
          icon: "repeat",
        },
        {
          title: "Historial",
          description: "Registro completo de tareas completadas. Busca, filtra y restaura cuando necesites.",
          icon: "history",
        },
        {
          title: "Favoritos",
          description: "Marca proyectos como favoritos para acceso rapido desde la barra lateral.",
          icon: "star",
        },
      ],
    },
    moreFeatures: {
      title: "Y mucho mas...",
      list: [
        { title: "Labels", description: "Etiquetas con colores", icon: "tag" },
        { title: "Secciones", description: "Organiza por secciones", icon: "sections" },
        { title: "PWA", description: "Instala en tu celular", icon: "phone" },
        { title: "Multiidioma", description: "Espanol e Ingles", icon: "language" },
        { title: "Urgentes", description: "Seccion especial urgencias", icon: "urgent" },
        { title: "Drag & Drop", description: "Reorganiza arrastrando", icon: "drag" },
        { title: "Duplicar", description: "Clona proyectos y tareas", icon: "duplicate" },
        { title: "Archivar", description: "Archiva proyectos terminados", icon: "archive" },
      ],
    },
    howItWorks: {
      title: "Simple de usar",
      subtitle: "Empieza en segundos. Sin configuracion complicada.",
      steps: [
        {
          number: "1",
          title: "Crea tu cuenta",
          description: "Registrate gratis con email o Google. Sin tarjeta de credito.",
        },
        {
          number: "2",
          title: "Agrega tus tareas",
          description: "Escribe tus tareas y asignalas a los dias. Arrastra para reorganizar.",
        },
        {
          number: "3",
          title: "Completa y avanza",
          description: "Marca tareas completadas y observa tu progreso. Productividad sin esfuerzo.",
        },
      ],
    },
    cta: {
      title: "Empieza a organizar tu vida hoy",
      subtitle: "Unite a miles que ya usan Tasko para ser mas productivos. Gratis para siempre.",
      button: "Crear Cuenta Gratis",
    },
    footer: {
      copyright: "Todos los derechos reservados.",
      madeWith: "Hecho con amor",
    },
  },
};

const APP_URL = "https://simpletodo-six-sigma.vercel.app";

function TaskoLogo({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
      <path
        d="M12 8 L6 8 L6 52 L12 52"
        stroke="white"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 33 L30 41 L54 15"
        stroke="white"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeroVisual({ lang }: { lang: "en" | "es" }) {
  const [completedTasks, setCompletedTasks] = useState<number[]>([]);

  const days = lang === "es"
    ? [
        { short: "LUN", num: "23" },
        { short: "MAR", num: "24" },
        { short: "MIE", num: "25" },
        { short: "JUE", num: "26" },
        { short: "VIE", num: "27" },
      ]
    : [
        { short: "MON", num: "23" },
        { short: "TUE", num: "24" },
        { short: "WED", num: "25" },
        { short: "THU", num: "26" },
        { short: "FRI", num: "27" },
      ];

  const tasks = [
    { id: 1, text: lang === "es" ? "Revisar emails" : "Review emails", completed: true },
    { id: 2, text: lang === "es" ? "Diseno review" : "Design review", completed: false },
    { id: 3, text: lang === "es" ? "Llamada equipo" : "Team call", completed: false },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCompletedTasks(prev => {
        if (prev.length >= 2) return [];
        return [...prev, prev.length + 2];
      });
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-visual-container">
      {/* Glow effect */}
      <div className="hero-glow" />

      {/* Main weekly view card */}
      <div className="hero-card">
        {/* Days list - vertical */}
        <div className="hero-days-list">
          {/* Monday - completed task */}
          <div className="hero-day-row">
            <div className="hero-day-label">
              <div className="hero-day-short">{days[0].short}</div>
              <div className="hero-day-num">{days[0].num}</div>
            </div>
            <div className="hero-task completed">
              <div className="hero-task-checkbox checked">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="hero-task-text line-through">{tasks[0].text}</span>
            </div>
          </div>

          {/* Tuesday - active day with tasks */}
          <div className="hero-day-row active">
            <div className="hero-day-label active">
              <div className="hero-day-short active">{days[1].short}</div>
              <div className="hero-day-num active">{days[1].num}</div>
            </div>
            <div className="hero-tasks-column">
              <div className={`hero-task blue ${completedTasks.includes(2) ? 'completing' : ''}`}>
                <div className={`hero-task-checkbox ${completedTasks.includes(2) ? 'checked' : ''}`}>
                  {completedTasks.includes(2) && (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
                <span className={`hero-task-text ${completedTasks.includes(2) ? 'line-through' : ''}`}>{tasks[1].text}</span>
              </div>
              <div className={`hero-task purple ${completedTasks.includes(3) ? 'completing' : ''}`}>
                <div className={`hero-task-checkbox ${completedTasks.includes(3) ? 'checked' : ''}`}>
                  {completedTasks.includes(3) && (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
                <span className={`hero-task-text ${completedTasks.includes(3) ? 'line-through' : ''}`}>{tasks[2].text}</span>
              </div>
            </div>
          </div>

          {/* Wednesday */}
          <div className="hero-day-row">
            <div className="hero-day-label">
              <div className="hero-day-short">{days[2].short}</div>
              <div className="hero-day-num">{days[2].num}</div>
            </div>
            <div className="hero-task amber">
              <div className="hero-task-checkbox"></div>
              <span className="hero-task-text">{lang === "es" ? "Enviar reporte" : "Send report"}</span>
            </div>
          </div>

          {/* Thursday - empty drop zone */}
          <div className="hero-day-row">
            <div className="hero-day-label">
              <div className="hero-day-short">{days[3].short}</div>
              <div className="hero-day-num">{days[3].num}</div>
            </div>
            <div className="hero-drop-zone" />
          </div>

          {/* Friday */}
          <div className="hero-day-row">
            <div className="hero-day-label">
              <div className="hero-day-short">{days[4].short}</div>
              <div className="hero-day-num">{days[4].num}</div>
            </div>
            <div className="hero-task pink">
              <div className="hero-task-checkbox"></div>
              <span className="hero-task-text">{lang === "es" ? "Lanzamiento" : "Launch"}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating drag indicator - hidden on mobile, shown on desktop */}
      <div className="hero-drag-indicator">
        <div className="hero-drag-card">
          {lang === "es" ? "Presentacion" : "Presentation"}
        </div>
        <svg width="24" height="50" viewBox="0 0 24 50" fill="none">
          <path d="M12 0 L12 40" stroke="rgba(59,130,246,0.5)" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round"/>
          <path d="M6 35 L12 45 L18 35" stroke="rgba(59,130,246,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Drag hint badge */}
      <div className="hero-hint-badge">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span>{lang === "es" ? "Arrastra tareas entre dias" : "Drag tasks between days"}</span>
      </div>
    </div>
  );
}

function FeatureIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    calendar: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
      </svg>
    ),
    folder: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
      </svg>
    ),
    clock: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    ),
    repeat: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="17 1 21 5 17 9"></polyline>
        <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
        <polyline points="7 23 3 19 7 15"></polyline>
        <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
      </svg>
    ),
    history: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v5h5"></path>
        <path d="M3.05 13A9 9 0 1 0 6 5.3L3 8"></path>
        <path d="M12 7v5l4 2"></path>
      </svg>
    ),
    star: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    ),
  };

  return (
    <div style={{
      width: "48px",
      height: "48px",
      background: "rgba(59,130,246,0.15)",
      borderRadius: "12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#3b82f6",
      flexShrink: 0,
    }}>
      {icons[name]}
    </div>
  );
}

function SmallIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    tag: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
        <line x1="7" y1="7" x2="7.01" y2="7"></line>
      </svg>
    ),
    sections: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7"></rect>
        <rect x="14" y="3" width="7" height="7"></rect>
        <rect x="14" y="14" width="7" height="7"></rect>
        <rect x="3" y="14" width="7" height="7"></rect>
      </svg>
    ),
    phone: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    ),
    language: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
    ),
    urgent: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
        <line x1="12" y1="9" x2="12" y2="13"></line>
        <line x1="12" y1="17" x2="12.01" y2="17"></line>
      </svg>
    ),
    drag: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="5 9 2 12 5 15"></polyline>
        <polyline points="9 5 12 2 15 5"></polyline>
        <polyline points="15 19 12 22 9 19"></polyline>
        <polyline points="19 9 22 12 19 15"></polyline>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <line x1="12" y1="2" x2="12" y2="22"></line>
      </svg>
    ),
    duplicate: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
      </svg>
    ),
    archive: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="21 8 21 21 3 21 3 8"></polyline>
        <rect x="1" y="3" width="22" height="5"></rect>
        <line x1="10" y1="12" x2="14" y2="12"></line>
      </svg>
    ),
  };

  return <>{icons[name]}</>;
}

export default function Home() {
  const [lang, setLang] = useState<"en" | "es">("es");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang];

  return (
    <div className="landing-container">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-inner">
          <div className="nav-logo">
            <TaskoLogo size={28} />
            <span>tasko</span>
          </div>

          {/* Desktop Nav */}
          <div className="nav-links desktop-only">
            <a href="#features">{t.nav.features}</a>
            <a href="#how-it-works">{t.nav.howItWorks}</a>
          </div>

          <div className="nav-actions">
            {/* Language Toggle */}
            <div className="lang-toggle">
              <button
                onClick={() => setLang("es")}
                className={lang === "es" ? "active" : ""}
              >
                ES
              </button>
              <button
                onClick={() => setLang("en")}
                className={lang === "en" ? "active" : ""}
              >
                EN
              </button>
            </div>

            <a href={`${APP_URL}/auth/signin`} className="nav-signin desktop-only">
              {t.nav.signIn}
            </a>

            <a href={`${APP_URL}/auth/signup`} className="nav-cta">
              {t.nav.getStarted}
            </a>

            {/* Mobile menu button */}
            <button
              className="mobile-menu-btn mobile-only"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileMenuOpen ? (
                  <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round"/>
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round"/>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <a href="#features" onClick={() => setMobileMenuOpen(false)}>{t.nav.features}</a>
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>{t.nav.howItWorks}</a>
            <a href={`${APP_URL}/auth/signin`}>{t.nav.signIn}</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg-gradient" />

        <div className="hero-content">
          {/* Left: Text */}
          <div className="hero-text">
            <h1>
              {t.hero.title}
              <br />
              <span className="hero-highlight">{t.hero.titleHighlight}</span>
            </h1>

            <p className="hero-subtitle">{t.hero.subtitle}</p>

            <div className="hero-cta-group">
              <a href={`${APP_URL}/auth/signup`} className="hero-cta-button">
                {t.hero.cta}
              </a>
              <span className="hero-cta-note">{t.hero.noCreditCard}</span>
            </div>

            {/* Trust indicators */}
            <div className="hero-trust">
              <div className="trust-item">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="#22c55e">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>100% {lang === "es" ? "gratis" : "free"}</span>
              </div>
              <div className="trust-item">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="#22c55e">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>{lang === "es" ? "Sin tarjeta" : "No card"}</span>
              </div>
              <div className="trust-item">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="#22c55e">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>PWA ready</span>
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="hero-visual">
            <HeroVisual lang={lang} />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="section-container">
          <div className="section-header">
            <h2>{t.features.title}</h2>
            <p>{t.features.subtitle}</p>
          </div>

          <div className="features-grid">
            {t.features.list.map((feature, index) => (
              <div key={index} className="feature-card">
                <FeatureIcon name={feature.icon} />
                <div className="feature-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section id="how-it-works" className="how-section">
        <div className="section-container">
          <div className="section-header">
            <h2>{t.howItWorks.title}</h2>
            <p>{t.howItWorks.subtitle}</p>
          </div>

          <div className="steps-grid">
            {t.howItWorks.steps.map((step, index) => (
              <div key={index} className="step-card">
                <div className="step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Features Section */}
      <section className="more-features-section">
        <div className="section-container">
          <div className="section-header">
            <h2>{t.moreFeatures.title}</h2>
          </div>

          <div className="more-features-grid">
            {t.moreFeatures.list.map((feature, index) => (
              <div key={index} className="small-feature-card">
                <div className="small-feature-icon">
                  <SmallIcon name={feature.icon} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-card">
            <h2>{t.cta.title}</h2>
            <p>{t.cta.subtitle}</p>
            <a href={`${APP_URL}/auth/signup`} className="cta-button">
              {t.cta.button}
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-logo">
            <TaskoLogo size={20} />
            <span>tasko</span>
          </div>
          <p>© {new Date().getFullYear()} {t.footer.copyright}</p>
        </div>
      </footer>

      {/* Styles */}
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .landing-container {
          min-height: 100vh;
          background: #0a0a0a;
          color: white;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        /* Navigation */
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          background: rgba(10,10,10,0.9);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .nav-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 500;
          font-size: 18px;
        }

        .nav-links {
          display: flex;
          gap: 32px;
        }

        .nav-links a {
          color: #888;
          text-decoration: none;
          font-size: 14px;
          transition: color 0.2s;
        }

        .nav-links a:hover {
          color: white;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .lang-toggle {
          display: flex;
          background: rgba(255,255,255,0.05);
          border-radius: 20px;
          padding: 2px;
        }

        .lang-toggle button {
          padding: 6px 12px;
          font-size: 12px;
          font-weight: 500;
          border-radius: 18px;
          border: none;
          cursor: pointer;
          background: transparent;
          color: #888;
          transition: all 0.2s;
        }

        .lang-toggle button.active {
          background: white;
          color: black;
        }

        .nav-signin {
          color: #888;
          text-decoration: none;
          font-size: 14px;
          transition: color 0.2s;
        }

        .nav-signin:hover {
          color: white;
        }

        .nav-cta {
          padding: 8px 16px;
          background: white;
          color: black;
          font-size: 14px;
          font-weight: 500;
          border-radius: 8px;
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .nav-cta:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(255,255,255,0.15);
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          padding: 4px;
        }

        .mobile-menu {
          display: none;
          flex-direction: column;
          padding: 16px 20px;
          gap: 16px;
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        .mobile-menu a {
          color: #888;
          text-decoration: none;
          font-size: 16px;
        }

        /* Hero Section */
        .hero {
          padding-top: 100px;
          padding-bottom: 60px;
          position: relative;
          overflow: hidden;
        }

        .hero-bg-gradient {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          max-width: 1000px;
          height: 600px;
          background: radial-gradient(ellipse at center top, rgba(59,130,246,0.08) 0%, transparent 60%);
          pointer-events: none;
        }

        .hero-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
        }

        .hero-text h1 {
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 20px;
          letter-spacing: -0.02em;
        }

        .hero-highlight {
          background: linear-gradient(135deg, #60a5fa, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 17px;
          color: #888;
          margin-bottom: 28px;
          line-height: 1.6;
          max-width: 420px;
        }

        .hero-cta-group {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
        }

        .hero-cta-button {
          display: inline-block;
          padding: 14px 28px;
          background: white;
          color: black;
          font-size: 16px;
          font-weight: 600;
          border-radius: 10px;
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .hero-cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(255,255,255,0.15);
        }

        .hero-cta-note {
          font-size: 13px;
          color: #666;
        }

        .hero-trust {
          display: flex;
          gap: 20px;
          margin-top: 28px;
          padding-top: 28px;
          border-top: 1px solid rgba(255,255,255,0.1);
          flex-wrap: wrap;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: #888;
        }

        .hero-visual {
          display: flex;
          justify-content: center;
        }

        /* Hero Visual Component */
        .hero-visual-container {
          position: relative;
          width: 100%;
          max-width: 360px;
          margin: 0 auto;
        }

        .hero-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 280px;
          height: 280px;
          background: radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(40px);
        }

        .hero-card {
          position: relative;
          background: linear-gradient(135deg, #111 0%, #1a1a1a 100%);
          border-radius: 16px;
          padding: 14px;
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
        }

        .hero-days-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .hero-day-row {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 10px;
          border-radius: 8px;
          background: rgba(255,255,255,0.02);
        }

        .hero-day-row.active {
          background: rgba(59,130,246,0.08);
          border: 1px solid rgba(59,130,246,0.2);
          align-items: flex-start;
        }

        .hero-day-label {
          min-width: 40px;
          text-align: center;
        }

        .hero-day-short {
          font-size: 9px;
          color: #666;
          font-weight: 600;
        }

        .hero-day-short.active {
          color: #60a5fa;
        }

        .hero-day-num {
          font-size: 14px;
          color: #888;
          font-weight: 600;
        }

        .hero-day-num.active {
          color: #fff;
        }

        .hero-tasks-column {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .hero-task {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 7px 10px;
          background: rgba(34,197,94,0.08);
          border-radius: 6px;
          border-left: 3px solid #22c55e;
          transition: all 0.3s ease;
        }

        .hero-task.blue {
          background: rgba(59,130,246,0.15);
          border-left-color: #3b82f6;
        }

        .hero-task.purple {
          background: rgba(168,85,247,0.1);
          border-left-color: #a855f7;
        }

        .hero-task.amber {
          background: rgba(251,191,36,0.08);
          border-left-color: #fbbf24;
        }

        .hero-task.pink {
          background: rgba(236,72,153,0.08);
          border-left-color: #ec4899;
        }

        .hero-task.completed {
          opacity: 0.6;
        }

        .hero-task.completing {
          opacity: 0.6;
          transform: scale(0.98);
        }

        .hero-task-checkbox {
          width: 14px;
          height: 14px;
          border: 2px solid #666;
          border-radius: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.2s ease;
        }

        .hero-task-checkbox.checked {
          background: #22c55e;
          border-color: #22c55e;
        }

        .hero-task-text {
          font-size: 12px;
          color: #fff;
        }

        .hero-task-text.line-through {
          text-decoration: line-through;
          color: #666;
        }

        .hero-drop-zone {
          flex: 1;
          padding: 10px;
          background: rgba(59,130,246,0.05);
          border-radius: 6px;
          border: 2px dashed rgba(59,130,246,0.3);
          min-height: 36px;
        }

        .hero-drag-indicator {
          position: absolute;
          top: 32%;
          right: -45px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .hero-drag-card {
          padding: 6px 10px;
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          border-radius: 6px;
          box-shadow: 0 10px 30px rgba(59,130,246,0.4);
          transform: rotate(2deg);
          font-size: 10px;
          color: #fff;
          font-weight: 500;
          white-space: nowrap;
        }

        .hero-hint-badge {
          position: absolute;
          bottom: -16px;
          left: 50%;
          transform: translateX(-50%);
          padding: 6px 14px;
          background: #1a1a1a;
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          display: flex;
          align-items: center;
          gap: 6px;
          white-space: nowrap;
        }

        .hero-hint-badge span {
          font-size: 11px;
          color: #888;
        }

        /* Sections */
        .section-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .section-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .section-header h2 {
          font-size: clamp(28px, 4vw, 36px);
          font-weight: 700;
          margin-bottom: 12px;
        }

        .section-header p {
          font-size: 17px;
          color: #888;
        }

        /* Features Section */
        .features-section {
          padding: 80px 0;
          background: #080808;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }

        .feature-card {
          display: flex;
          gap: 16px;
          padding: 24px;
          background: linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%);
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.06);
          transition: border-color 0.2s, transform 0.2s;
        }

        .feature-card:hover {
          border-color: rgba(59,130,246,0.3);
          transform: translateY(-2px);
        }

        .feature-content h3 {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .feature-content p {
          font-size: 14px;
          color: #777;
          line-height: 1.5;
        }

        /* How it works */
        .how-section {
          padding: 80px 0;
        }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }

        .step-card {
          text-align: center;
        }

        .step-number {
          width: 56px;
          height: 56px;
          background: rgba(59,130,246,0.1);
          border: 1px solid rgba(59,130,246,0.2);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
          font-size: 22px;
          font-weight: 700;
          color: #3b82f6;
        }

        .step-card h3 {
          font-size: 17px;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .step-card p {
          font-size: 14px;
          color: #777;
          line-height: 1.5;
        }

        /* More Features */
        .more-features-section {
          padding: 80px 0;
          background: #080808;
        }

        .more-features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .small-feature-card {
          text-align: center;
          padding: 20px 16px;
          background: linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%);
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.06);
          transition: border-color 0.2s;
        }

        .small-feature-card:hover {
          border-color: rgba(59,130,246,0.3);
        }

        .small-feature-icon {
          width: 40px;
          height: 40px;
          background: rgba(59,130,246,0.1);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 12px;
          color: #60a5fa;
        }

        .small-feature-card h3 {
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .small-feature-card p {
          font-size: 12px;
          color: #666;
        }

        /* CTA Section */
        .cta-section {
          padding: 80px 20px;
        }

        .cta-container {
          max-width: 700px;
          margin: 0 auto;
        }

        .cta-card {
          text-align: center;
          padding: 48px 32px;
          background: linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(168,85,247,0.08) 100%);
          border: 1px solid rgba(59,130,246,0.2);
          border-radius: 20px;
        }

        .cta-card h2 {
          font-size: clamp(24px, 4vw, 32px);
          font-weight: 700;
          margin-bottom: 12px;
        }

        .cta-card p {
          font-size: 16px;
          color: #888;
          margin-bottom: 28px;
          max-width: 480px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 16px 32px;
          background: white;
          color: black;
          font-size: 17px;
          font-weight: 600;
          border-radius: 12px;
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(255,255,255,0.15);
        }

        /* Footer */
        .footer {
          padding: 28px 20px;
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        .footer-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 500;
        }

        .footer p {
          font-size: 13px;
          color: #666;
        }

        /* Utility classes */
        .desktop-only {
          display: flex;
        }

        .mobile-only {
          display: none;
        }

        /* Mobile Responsive */
        @media (max-width: 900px) {
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .hero-text {
            order: 1;
          }

          .hero-visual {
            order: 2;
            margin-top: 20px;
          }

          .hero-subtitle {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-cta-group {
            align-items: center;
          }

          .hero-trust {
            justify-content: center;
          }

          .steps-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .more-features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .desktop-only {
            display: none !important;
          }

          .mobile-only {
            display: block;
          }

          .mobile-menu {
            display: flex;
          }

          .mobile-menu-btn {
            display: block;
          }

          .nav-cta {
            padding: 6px 12px;
            font-size: 13px;
          }

          .hero {
            padding-top: 90px;
            padding-bottom: 40px;
          }

          .hero-visual-container {
            max-width: 320px;
          }

          .hero-drag-indicator {
            display: none;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }

          .feature-card {
            flex-direction: column;
            text-align: center;
            align-items: center;
          }

          .more-features-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }

          .small-feature-card {
            padding: 16px 12px;
          }

          .cta-card {
            padding: 32px 20px;
          }

          .footer-inner {
            flex-direction: column;
            text-align: center;
          }
        }

        @media (max-width: 400px) {
          .hero-trust {
            flex-direction: column;
            gap: 10px;
          }

          .lang-toggle {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
