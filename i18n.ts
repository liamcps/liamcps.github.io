import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

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

// 2. Initialize i18next
i18n
  .use(LanguageDetector) // Detects browser language
  .use(initReactI18next) // Binds i18next to React
  .init({
    resources,
    fallbackLng: "en", // Default language if detection fails
    interpolation: {
      escapeValue: false, // React already handles XSS protection
    },
  });

export default i18n;
