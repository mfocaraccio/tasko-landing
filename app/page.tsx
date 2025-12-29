"use client";

import { useState } from "react";

const translations = {
  en: {
    nav: {
      features: "Features",
      getStarted: "Get Started Free",
    },
    hero: {
      title: "Your tasks,",
      titleHighlight: "simplified.",
      subtitle: "The task manager that helps you focus on what matters. Organize projects, plan your week, and get things done.",
      cta: "Get Started Free",
      noCreditCard: "No credit card required",
    },
    features: {
      title: "Everything you need",
      subtitle: "Simple tools to keep you organized",
      list: [
        {
          title: "Quick Capture",
          description: "Add tasks in seconds. Just type and go.",
          icon: "plus",
        },
        {
          title: "Projects",
          description: "Group tasks into projects. Track progress easily.",
          icon: "folder",
        },
        {
          title: "Weekly View",
          description: "See your entire week at a glance.",
          icon: "calendar",
        },
        {
          title: "Labels",
          description: "Organize with colors and categories.",
          icon: "tag",
        },
        {
          title: "Recurring",
          description: "Set tasks that repeat automatically.",
          icon: "repeat",
        },
        {
          title: "Sync",
          description: "Access from any device, anywhere.",
          icon: "sync",
        },
      ],
    },
    cta: {
      title: "Start organizing today",
      subtitle: "Free forever. No credit card needed.",
      button: "Create Free Account",
    },
    footer: {
      copyright: "All rights reserved.",
    },
  },
  es: {
    nav: {
      features: "Funciones",
      getStarted: "Comenzar Gratis",
    },
    hero: {
      title: "Tus tareas,",
      titleHighlight: "simplificadas.",
      subtitle: "El gestor de tareas que te ayuda a enfocarte en lo importante. Organiza proyectos, planifica tu semana y logra tus metas.",
      cta: "Comenzar Gratis",
      noCreditCard: "Sin tarjeta de credito",
    },
    features: {
      title: "Todo lo que necesitas",
      subtitle: "Herramientas simples para mantenerte organizado",
      list: [
        {
          title: "Captura Rapida",
          description: "Agrega tareas en segundos. Escribe y listo.",
          icon: "plus",
        },
        {
          title: "Proyectos",
          description: "Agrupa tareas en proyectos. Sigue el progreso.",
          icon: "folder",
        },
        {
          title: "Vista Semanal",
          description: "Ve toda tu semana de un vistazo.",
          icon: "calendar",
        },
        {
          title: "Etiquetas",
          description: "Organiza con colores y categorias.",
          icon: "tag",
        },
        {
          title: "Recurrentes",
          description: "Tareas que se repiten automaticamente.",
          icon: "repeat",
        },
        {
          title: "Sincronizacion",
          description: "Accede desde cualquier dispositivo.",
          icon: "sync",
        },
      ],
    },
    cta: {
      title: "Empieza a organizarte hoy",
      subtitle: "Gratis para siempre. Sin tarjeta de credito.",
      button: "Crear Cuenta Gratis",
    },
    footer: {
      copyright: "Todos los derechos reservados.",
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

function Icon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    plus: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
      </svg>
    ),
    folder: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
      </svg>
    ),
    calendar: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
      </svg>
    ),
    tag: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
        <line x1="7" y1="7" x2="7.01" y2="7"></line>
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
    sync: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.66 0 3-4.03 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4.03-3-9s1.34-9 3-9m-9 9a9 9 0 0 1 9-9"></path>
      </svg>
    ),
  };
  return <>{icons[name]}</>;
}

export default function Home() {
  const [lang, setLang] = useState<"en" | "es">("es");
  const t = translations[lang];

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a", color: "white" }}>
      {/* Navigation */}
      <nav style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: "rgba(10,10,10,0.9)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.05)"
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <TaskoLogo size={28} />
            <span style={{ fontWeight: 500, fontSize: "18px" }}>tasko</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <a href="#features" style={{ fontSize: "14px", color: "#888", textDecoration: "none" }}>
              {t.nav.features}
            </a>

            {/* Language Toggle */}
            <div style={{ display: "flex", background: "rgba(255,255,255,0.05)", borderRadius: "20px", padding: "2px" }}>
              <button
                onClick={() => setLang("es")}
                style={{
                  padding: "6px 12px",
                  fontSize: "12px",
                  fontWeight: 500,
                  borderRadius: "18px",
                  border: "none",
                  cursor: "pointer",
                  background: lang === "es" ? "white" : "transparent",
                  color: lang === "es" ? "black" : "#888",
                }}
              >
                ES
              </button>
              <button
                onClick={() => setLang("en")}
                style={{
                  padding: "6px 12px",
                  fontSize: "12px",
                  fontWeight: 500,
                  borderRadius: "18px",
                  border: "none",
                  cursor: "pointer",
                  background: lang === "en" ? "white" : "transparent",
                  color: lang === "en" ? "black" : "#888",
                }}
              >
                EN
              </button>
            </div>

            <a
              href={`${APP_URL}/auth/signup`}
              style={{
                padding: "8px 16px",
                background: "white",
                color: "black",
                fontSize: "14px",
                fontWeight: 500,
                borderRadius: "8px",
                textDecoration: "none",
              }}
            >
              {t.nav.getStarted}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ paddingTop: "160px", paddingBottom: "120px", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px" }}>
          <h1 style={{
            fontSize: "clamp(48px, 10vw, 80px)",
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: "24px",
            letterSpacing: "-0.02em"
          }}>
            {t.hero.title}
            <br />
            <span style={{
              background: "linear-gradient(135deg, #60a5fa, #3b82f6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>
              {t.hero.titleHighlight}
            </span>
          </h1>

          <p style={{
            fontSize: "20px",
            color: "#888",
            maxWidth: "600px",
            margin: "0 auto 40px",
            lineHeight: 1.6
          }}>
            {t.hero.subtitle}
          </p>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
            <a
              href={`${APP_URL}/auth/signup`}
              style={{
                display: "inline-block",
                padding: "16px 32px",
                background: "white",
                color: "black",
                fontSize: "18px",
                fontWeight: 600,
                borderRadius: "12px",
                textDecoration: "none",
              }}
            >
              {t.hero.cta}
            </a>
            <span style={{ fontSize: "14px", color: "#666" }}>{t.hero.noCreditCard}</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={{ padding: "80px 24px", background: "#080808" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <h2 style={{ fontSize: "36px", fontWeight: 700, marginBottom: "16px" }}>
              {t.features.title}
            </h2>
            <p style={{ fontSize: "18px", color: "#888" }}>{t.features.subtitle}</p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px"
          }}>
            {t.features.list.map((feature, index) => (
              <div
                key={index}
                style={{
                  padding: "32px",
                  background: "#111",
                  borderRadius: "16px",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <div style={{
                  width: "48px",
                  height: "48px",
                  background: "rgba(59,130,246,0.1)",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#3b82f6",
                  marginBottom: "20px",
                }}>
                  <Icon name={feature.icon} />
                </div>
                <h3 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "8px" }}>
                  {feature.title}
                </h3>
                <p style={{ fontSize: "14px", color: "#888", lineHeight: 1.6 }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: "100px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "36px", fontWeight: 700, marginBottom: "16px" }}>
            {t.cta.title}
          </h2>
          <p style={{ fontSize: "18px", color: "#888", marginBottom: "32px" }}>
            {t.cta.subtitle}
          </p>
          <a
            href={`${APP_URL}/auth/signup`}
            style={{
              display: "inline-block",
              padding: "16px 32px",
              background: "white",
              color: "black",
              fontSize: "18px",
              fontWeight: 600,
              borderRadius: "12px",
              textDecoration: "none",
            }}
          >
            {t.cta.button}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: "32px 24px",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        textAlign: "center"
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          color: "#666",
          fontSize: "14px"
        }}>
          <TaskoLogo size={20} />
          <span>tasko</span>
          <span>·</span>
          <span>© {new Date().getFullYear()} {t.footer.copyright}</span>
        </div>
      </footer>
    </div>
  );
}
