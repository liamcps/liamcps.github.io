import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// 1. Define translation dictionaries
const resources = {
  en: {
    translation: {
      settings: "Settings",
      toggleTheme: "Toggle theme",
      language: "Language",
      english: "English",
      portugueseBr: "Portuguese (BR)",
      about: "About",
      emailCopied: "Email copied!",
      sendEmail: "Send me an email",
      goToHomePage: "Go to home page",
      checkOutMyCurriculum: "Check out my curriculum",
      goToMyLinkedInProfile: "Go to my LinkedIn profile page",
      openWhatsAppChat: "Open WhatsApp Chat",
      openGitHubProfile: "Open GitHub Profile",
      professionalExperience: "Professional Experience",
      madeBy: "made by @michelbaratella",
    },
  },
  "pt-BR": {
    translation: {
      settings: "Configurações",
      toggleTheme: "Alterar tema",
      language: "Idioma",
      english: "Inglês",
      portugueseBr: "Português (BR)",
      about: "Sobre",
      emailCopied: "Email copiado!",
      sendEmail: "Me envie um email",
      goToHomePage: "Ir para a página inicial",
      checkOutMyCurriculum: "Confira meu currículo",
      goToMyLinkedInProfile: "Ir para meu perfil do LinkedIn",
      openWhatsAppChat: "Abrir chat do WhatsApp",
      openGitHubProfile: "Abrir perfil do GitHub",
      professionalExperience: "Experiência Profissional",
      madeBy: "feito por @michelbaratella",
    },
  },
};

// 2. Initialize i18next with a deterministic fallback language. This runs
// on both server and client and ensures the first render is identical for
// SSR and hydration.
i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  // Keep React suspense off for simpler SSR behavior
  react: { useSuspense: false },
});

// Call this on the client after hydration (e.g. inside a `useEffect`) to
// enable browser language detection and re-initialize i18next so it can
// pick up `localStorage` / `navigator` preferences. This avoids changing
// the locale before hydration and prevents mismatches.
export async function initClientLanguageDetection() {
  if (typeof window === "undefined") return;

  // Dynamically import the browser-only detector so bundlers don't include
  // it in server builds and to avoid running detection during module init.
  const { default: LanguageDetector } =
    await import("i18next-browser-languagedetector");

  // Add detector and re-init with detection options. Re-initializing is
  // safe here and will update the current language based on browser prefs.
  i18n.use(LanguageDetector).init({
    resources,
    fallbackLng: "en",
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });
}

export default i18n;
