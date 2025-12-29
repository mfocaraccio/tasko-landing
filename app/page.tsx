"use client";

import { useState } from "react";

const translations = {
  en: {
    nav: {
      features: "Features",
      getStarted: "Get Started Free",
    },
    hero: {
      title: "Your tasks.",
      titleHighlight: "Simplified.",
      subtitle: "Stop juggling between apps. Tasko brings all your tasks, projects, and goals into one clean, simple interface.",
      cta: "Get Started Free",
      noCreditCard: "No credit card required",
    },
    stats: {
      tasks: "Tasks completed",
      users: "Happy users",
      rating: "App rating",
    },
    features: {
      title: "Everything in one place",
      subtitle: "Simple tools that work together to keep you organized",
      list: [
        {
          title: "Quick Capture",
          description: "Add tasks in seconds. Just type and go. No complicated forms or endless options.",
          icon: "plus",
        },
        {
          title: "Projects & Lists",
          description: "Group related tasks into projects. Track progress with visual indicators.",
          icon: "folder",
        },
        {
          title: "Plan Your Week",
          description: "See your entire week at a glance. Drag tasks between days to plan ahead.",
          icon: "calendar",
        },
        {
          title: "Labels & Filters",
          description: "Organize with custom labels and colors. Find anything instantly.",
          icon: "tag",
        },
        {
          title: "Recurring Tasks",
          description: "Set it once, forget it. Daily habits, weekly reviews, monthly goals.",
          icon: "repeat",
        },
        {
          title: "Works Everywhere",
          description: "Access from any device. Your tasks sync instantly across all platforms.",
          icon: "devices",
        },
      ],
    },
    benefits: {
      title: "Why Tasko?",
      list: [
        {
          title: "Simple by design",
          description: "No learning curve. Start being productive in minutes, not hours.",
        },
        {
          title: "Fast and focused",
          description: "A clean interface that helps you focus on what matters.",
        },
        {
          title: "Free to start",
          description: "Everything you need to get organized. No hidden costs.",
        },
      ],
    },
    cta: {
      title: "Ready to get organized?",
      subtitle: "Join thousands who simplified their productivity with Tasko.",
      button: "Start Free Today",
      note: "Free forever. No credit card needed.",
    },
    footer: {
      tagline: "Simple task management",
      copyright: "All rights reserved.",
    },
  },
  es: {
    nav: {
      features: "Funciones",
      getStarted: "Comenzar Gratis",
    },
    hero: {
      title: "Tus tareas.",
      titleHighlight: "Simplificadas.",
      subtitle: "Deja de saltar entre apps. Tasko une todas tus tareas, proyectos y metas en una interfaz limpia y simple.",
      cta: "Comenzar Gratis",
      noCreditCard: "Sin tarjeta de credito",
    },
    stats: {
      tasks: "Tareas completadas",
      users: "Usuarios felices",
      rating: "Valoracion",
    },
    features: {
      title: "Todo en un solo lugar",
      subtitle: "Herramientas simples que trabajan juntas para mantenerte organizado",
      list: [
        {
          title: "Captura Rapida",
          description: "Agrega tareas en segundos. Solo escribe y listo. Sin formularios complicados.",
          icon: "plus",
        },
        {
          title: "Proyectos y Listas",
          description: "Agrupa tareas relacionadas en proyectos. Sigue el progreso visualmente.",
          icon: "folder",
        },
        {
          title: "Planifica tu Semana",
          description: "Ve toda tu semana de un vistazo. Arrastra tareas entre dias para planificar.",
          icon: "calendar",
        },
        {
          title: "Etiquetas y Filtros",
          description: "Organiza con etiquetas y colores personalizados. Encuentra todo al instante.",
          icon: "tag",
        },
        {
          title: "Tareas Recurrentes",
          description: "Configuralo una vez y olvidate. Habitos diarios, revisiones semanales, metas mensuales.",
          icon: "repeat",
        },
        {
          title: "Funciona en Todos Lados",
          description: "Accede desde cualquier dispositivo. Tus tareas se sincronizan al instante.",
          icon: "devices",
        },
      ],
    },
    benefits: {
      title: "Por que Tasko?",
      list: [
        {
          title: "Simple por diseno",
          description: "Sin curva de aprendizaje. Se productivo en minutos, no en horas.",
        },
        {
          title: "Rapido y enfocado",
          description: "Una interfaz limpia que te ayuda a enfocarte en lo importante.",
        },
        {
          title: "Gratis para empezar",
          description: "Todo lo que necesitas para organizarte. Sin costos ocultos.",
        },
      ],
    },
    cta: {
      title: "Listo para organizarte?",
      subtitle: "Unite a miles que simplificaron su productividad con Tasko.",
      button: "Empezar Gratis Hoy",
      note: "Gratis para siempre. Sin tarjeta de credito.",
    },
    footer: {
      tagline: "Gestion de tareas simple",
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
    plus: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    ),
    folder: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
      </svg>
    ),
    calendar: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    tag: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
    repeat: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    devices: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    check: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TaskoLogo className="w-7 h-7" />
            <span className="font-medium text-lg">tasko</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="#features" className="text-sm text-gray-400 hover:text-white transition-colors hidden sm:block">
              {t.nav.features}
            </a>

            {/* Language Toggle */}
            <div className="flex items-center bg-white/5 rounded-full p-0.5">
              <button
                onClick={() => setLang("es")}
                className={`px-2.5 py-1 text-xs font-medium rounded-full transition-all ${
                  lang === "es" ? "bg-white text-black" : "text-gray-400 hover:text-white"
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-2.5 py-1 text-xs font-medium rounded-full transition-all ${
                  lang === "en" ? "bg-white text-black" : "text-gray-400 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>

            <a
              href={`${APP_URL}/auth/signup`}
              className="px-4 py-2 bg-white hover:bg-gray-100 text-black text-sm font-medium rounded-lg transition-all"
            >
              {t.nav.getStarted}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight">
            {t.hero.title}
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              {t.hero.titleHighlight}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            {t.hero.subtitle}
          </p>

          {/* CTA */}
          <div className="flex flex-col items-center gap-4">
            <a
              href={`${APP_URL}/auth/signup`}
              className="px-8 py-4 bg-white hover:bg-gray-100 text-black font-semibold rounded-xl transition-all text-lg shadow-lg shadow-white/10"
            >
              {t.hero.cta}
            </a>
            <span className="text-sm text-gray-500">{t.hero.noCreditCard}</span>
          </div>
        </div>

        {/* App Preview */}
        <div className="max-w-5xl mx-auto mt-20">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#111]">
            {/* Browser bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a1a] border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1.5 bg-[#0a0a0a] rounded-lg text-xs text-gray-500 flex items-center gap-2">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  app.tasko.com
                </div>
              </div>
            </div>

            {/* App Content Mockup */}
            <div className="bg-[#0a0a0a] p-6 min-h-[400px]">
              <div className="flex gap-6">
                {/* Sidebar mockup */}
                <div className="w-48 flex-shrink-0 hidden md:block">
                  <div className="flex items-center gap-2 mb-6">
                    <TaskoLogo className="w-6 h-6" />
                    <span className="font-medium">tasko</span>
                  </div>
                  <div className="space-y-1">
                    <div className="px-3 py-2 bg-blue-500/10 text-blue-400 rounded-lg text-sm flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      {lang === "es" ? "Mi Semana" : "My Week"}
                    </div>
                    <div className="px-3 py-2 text-gray-500 rounded-lg text-sm flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {lang === "es" ? "Programadas" : "Scheduled"}
                    </div>
                    <div className="px-3 py-2 text-gray-500 rounded-lg text-sm flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      {lang === "es" ? "Recurrentes" : "Recurring"}
                    </div>
                    <div className="border-t border-white/5 my-3"></div>
                    <div className="px-3 py-2 text-gray-500 rounded-lg text-sm flex items-center gap-2">
                      <span className="w-4 h-4 flex items-center justify-center">📱</span>
                      App Mobile
                    </div>
                    <div className="px-3 py-2 text-gray-500 rounded-lg text-sm flex items-center gap-2">
                      <span className="w-4 h-4 flex items-center justify-center">🏠</span>
                      {lang === "es" ? "Casa" : "Home"}
                    </div>
                    <div className="px-3 py-2 text-gray-500 rounded-lg text-sm flex items-center gap-2">
                      <span className="w-4 h-4 flex items-center justify-center">💼</span>
                      {lang === "es" ? "Trabajo" : "Work"}
                    </div>
                  </div>
                </div>

                {/* Main content mockup */}
                <div className="flex-1">
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-1">{lang === "es" ? "Lunes" : "Monday"}</h2>
                    <p className="text-sm text-gray-500">Dec 30, 2024</p>
                  </div>

                  <div className="space-y-2">
                    {/* Completed task */}
                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                      <div className="w-5 h-5 rounded-full bg-green-500/20 border-2 border-green-500 flex items-center justify-center">
                        <svg className="w-3 h-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-500 line-through">{lang === "es" ? "Revisar emails" : "Check emails"}</span>
                      <span className="ml-auto px-2 py-0.5 bg-blue-500/20 text-blue-400 text-xs rounded">Work</span>
                    </div>

                    {/* Active task */}
                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                      <div className="w-5 h-5 rounded-full border-2 border-gray-500"></div>
                      <span>{lang === "es" ? "Terminar presentacion" : "Finish presentation"}</span>
                      <span className="ml-auto px-2 py-0.5 bg-purple-500/20 text-purple-400 text-xs rounded">{lang === "es" ? "Urgente" : "Urgent"}</span>
                    </div>

                    {/* Another task */}
                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                      <div className="w-5 h-5 rounded-full border-2 border-gray-500"></div>
                      <span>{lang === "es" ? "Llamar al cliente" : "Call client"}</span>
                      <span className="ml-auto text-xs text-gray-500">2:00 PM</span>
                    </div>

                    {/* Add task */}
                    <div className="flex items-center gap-3 p-3 text-gray-500 hover:text-gray-400 cursor-pointer">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                      <span className="text-sm">{lang === "es" ? "Agregar tarea..." : "Add task..."}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Tasko Section */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.benefits.list.map((benefit, index) => (
              <div key={index} className="text-center md:text-left">
                <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-4 mx-auto md:mx-0">
                  <FeatureIcon icon="check" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 bg-[#080808]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.features.title}</h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">{t.features.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.features.list.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-[#111] rounded-2xl border border-white/5 hover:border-white/10 transition-colors"
              >
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white mb-4">
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
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.cta.title}</h2>
          <p className="text-gray-400 text-lg mb-8">{t.cta.subtitle}</p>
          <a
            href={`${APP_URL}/auth/signup`}
            className="inline-block px-8 py-4 bg-white hover:bg-gray-100 text-black font-semibold rounded-xl transition-all text-lg"
          >
            {t.cta.button}
          </a>
          <p className="mt-4 text-sm text-gray-500">{t.cta.note}</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <TaskoLogo className="w-5 h-5" />
              <span className="text-sm text-gray-400">tasko - {t.footer.tagline}</span>
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
