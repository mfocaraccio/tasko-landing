"use client";

import { useState } from "react";

const translations = {
  en: {
    nav: {
      features: "Features",
      pricing: "Pricing",
      getStarted: "Get Started",
    },
    hero: {
      badge: "Simple & Powerful",
      title: "Organize your week.",
      titleHighlight: "Get things done.",
      subtitle: "The task manager that helps you focus on what matters. Plan your week, track your projects, and achieve your goals with a clean, intuitive interface.",
      cta: "Start for Free",
      ctaSecondary: "See Features",
    },
    features: {
      title: "Everything you need to stay organized",
      subtitle: "Powerful features wrapped in a simple, beautiful interface",
      list: [
        {
          title: "Weekly Planning",
          description: "Organize your tasks by day of the week. See your entire week at a glance and plan ahead.",
          icon: "calendar",
        },
        {
          title: "Projects",
          description: "Group related tasks into projects. Track progress and keep everything organized.",
          icon: "folder",
        },
        {
          title: "Recurring Tasks",
          description: "Set up tasks that repeat daily, weekly, or monthly. Never forget routine activities.",
          icon: "repeat",
        },
        {
          title: "Labels & Colors",
          description: "Categorize tasks with custom labels and colors. Find what you need instantly.",
          icon: "tag",
        },
        {
          title: "Scheduled Tasks",
          description: "Plan tasks for future dates. They'll appear automatically when the time comes.",
          icon: "clock",
        },
        {
          title: "Dark Mode",
          description: "Easy on your eyes, day or night. A beautiful dark interface that just works.",
          icon: "moon",
        },
      ],
    },
    cta: {
      title: "Ready to get organized?",
      subtitle: "Start using Tasko today. It's free to get started.",
      button: "Create Free Account",
    },
    footer: {
      tagline: "Simple and powerful task management",
      copyright: "All rights reserved.",
    },
  },
  es: {
    nav: {
      features: "Funciones",
      pricing: "Precios",
      getStarted: "Comenzar",
    },
    hero: {
      badge: "Simple y Poderoso",
      title: "Organiza tu semana.",
      titleHighlight: "Logra tus metas.",
      subtitle: "El gestor de tareas que te ayuda a enfocarte en lo importante. Planifica tu semana, sigue tus proyectos y alcanza tus objetivos con una interfaz limpia e intuitiva.",
      cta: "Comenzar Gratis",
      ctaSecondary: "Ver Funciones",
    },
    features: {
      title: "Todo lo que necesitas para estar organizado",
      subtitle: "Funciones poderosas en una interfaz simple y hermosa",
      list: [
        {
          title: "Planificacion Semanal",
          description: "Organiza tus tareas por dia de la semana. Ve toda tu semana de un vistazo y planifica con anticipacion.",
          icon: "calendar",
        },
        {
          title: "Proyectos",
          description: "Agrupa tareas relacionadas en proyectos. Sigue el progreso y manten todo organizado.",
          icon: "folder",
        },
        {
          title: "Tareas Recurrentes",
          description: "Configura tareas que se repiten diaria, semanal o mensualmente. Nunca olvides actividades rutinarias.",
          icon: "repeat",
        },
        {
          title: "Etiquetas y Colores",
          description: "Categoriza tareas con etiquetas y colores personalizados. Encuentra lo que necesitas al instante.",
          icon: "tag",
        },
        {
          title: "Tareas Programadas",
          description: "Planifica tareas para fechas futuras. Apareceran automaticamente cuando llegue el momento.",
          icon: "clock",
        },
        {
          title: "Modo Oscuro",
          description: "Facil para tus ojos, de dia o de noche. Una hermosa interfaz oscura que simplemente funciona.",
          icon: "moon",
        },
      ],
    },
    cta: {
      title: "Listo para organizarte?",
      subtitle: "Comienza a usar Tasko hoy. Es gratis para empezar.",
      button: "Crear Cuenta Gratis",
    },
    footer: {
      tagline: "Gestion de tareas simple y poderosa",
      copyright: "Todos los derechos reservados.",
    },
  },
};

const APP_URL = "https://simpletodo-six-sigma.vercel.app";

function TaskoLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 60" fill="none">
      <path
        d="M12 8 L6 8 L6 52 L12 52"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 33 L30 41 L54 15"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FeatureIcon({ icon }: { icon: string }) {
  const icons: Record<string, React.ReactNode> = {
    calendar: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    folder: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
      </svg>
    ),
    repeat: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    tag: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
    clock: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    moon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    ),
  };
  return icons[icon] || null;
}

export default function Home() {
  const [lang, setLang] = useState<"en" | "es">("es");
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TaskoLogo className="w-7 h-7" />
            <span className="font-medium text-lg">tasko</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#features" className="text-sm text-gray-400 hover:text-white transition-colors hidden sm:block">
              {t.nav.features}
            </a>

            {/* Language Toggle */}
            <div className="flex items-center gap-1 bg-white/5 rounded-full p-1">
              <button
                onClick={() => setLang("es")}
                className={`px-2.5 py-1 text-xs font-medium rounded-full transition-all ${
                  lang === "es" ? "bg-blue-500 text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-2.5 py-1 text-xs font-medium rounded-full transition-all ${
                  lang === "en" ? "bg-blue-500 text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>

            <a
              href={`${APP_URL}/auth/signup`}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors btn-glow"
            >
              {t.nav.getStarted}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 gradient-bg">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-8 animate-fade-in-up">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {t.hero.badge}
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 animate-fade-in-up animation-delay-200">
            {t.hero.title}
            <br />
            <span className="text-blue-500">{t.hero.titleHighlight}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-400">
            {t.hero.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-600">
            <a
              href={`${APP_URL}/auth/signup`}
              className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition-all btn-glow text-lg"
            >
              {t.hero.cta}
            </a>
            <a
              href="#features"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl transition-colors border border-white/10 text-lg"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        {/* App Preview */}
        <div className="max-w-5xl mx-auto mt-20 px-4">
          <div className="rounded-2xl overflow-hidden border border-white/10 mockup-shadow glow">
            <div className="bg-[#141414] p-1">
              {/* Browser bar mockup */}
              <div className="flex items-center gap-2 px-3 py-2 bg-[#0a0a0a] rounded-t-xl">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1 bg-white/5 rounded-md text-xs text-gray-500">
                    tasko.app
                  </div>
                </div>
              </div>
              {/* App screenshot placeholder */}
              <div className="bg-[#0a0a0a] aspect-[16/10] flex items-center justify-center">
                <div className="text-center">
                  <TaskoLogo className="w-16 h-16 mx-auto mb-4 text-blue-500" />
                  <p className="text-gray-500 text-sm">App Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.features.title}</h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">{t.features.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.features.list.map((feature, index) => (
              <div
                key={index}
                className="feature-card p-6 bg-[#141414] rounded-2xl border border-white/5"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 mb-4">
                  <FeatureIcon icon={feature.icon} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#0f0f1a]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.cta.title}</h2>
          <p className="text-gray-400 text-lg mb-8">{t.cta.subtitle}</p>
          <a
            href={`${APP_URL}/auth/signup`}
            className="inline-block px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition-all btn-glow text-lg"
          >
            {t.cta.button}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <TaskoLogo className="w-6 h-6" />
              <span className="font-medium">tasko</span>
              <span className="text-gray-500 text-sm">- {t.footer.tagline}</span>
            </div>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Tasko. {t.footer.copyright}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
