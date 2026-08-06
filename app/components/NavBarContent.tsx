import {
  EnvelopeIcon,
  FileTextIcon,
  GithubLogoIcon,
  HouseIcon,
  LinkedinLogoIcon,
  WhatsappLogoIcon,
  GearIcon,
} from "@phosphor-icons/react";
import NavIconButton from "./NavIconButton";
import { useNavigate } from "react-router";
import type { UseClipboardReturnValue } from "@mantine/hooks";
import { useTranslation } from "react-i18next";

export default function NavBarContent({
  toggle,
  clipboard,
  toggleDialog,
}: {
  readonly toggle: () => void;
  readonly clipboard: UseClipboardReturnValue;
  readonly toggleDialog: () => void;
}) {
  const { t } = useTranslation();

  const emailButtonText = clipboard.copied ? t("emailCopied") : t("sendEmail");

  const navigate = useNavigate();

  const handleEmailClick = () => {
    toggle();
    clipboard.copy(import.meta.env.VITE_EMAIL_ADDRESS as string);
  };

  const handleLinkedInClick = () => {
    const linkedInUrl = import.meta.env.VITE_LINKEDIN_URL;
    window.open(linkedInUrl, "_blank");
    toggle();
  };

  const handleGithubClick = () => {
    const githubUrl = import.meta.env.VITE_GITHUB_URL;
    window.open(githubUrl, "_blank");
    toggle();
  };

  const handleHomeClick = () => {
    navigate("/");
    toggle();
  };

  const handleCurriculumClick = () => {
    navigate("/profile");
    toggle();
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = import.meta.env.VITE_PHONE_NUMBER;
    const message = import.meta.env.VITE_WHATSAPP_MESSAGE;
    const encodedMessage = encodeURIComponent(message as string);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleSettingsClick = () => {
    toggleDialog();
  };

  return (
    <>
      <NavIconButton
        alt={t("goToHomePage")}
        icon={HouseIcon}
        onClick={handleHomeClick}
      />
      <NavIconButton
        alt={t("checkOutMyCurriculum")}
        icon={FileTextIcon}
        onClick={handleCurriculumClick}
      />
      <NavIconButton
        alt={emailButtonText}
        icon={EnvelopeIcon}
        onClick={handleEmailClick}
      />
      <NavIconButton
        alt={t("goToMyLinkedInProfile")}
        icon={LinkedinLogoIcon}
        onClick={handleLinkedInClick}
      />
      <NavIconButton
        alt={t("openWhatsAppChat")}
        icon={WhatsappLogoIcon}
        onClick={handleWhatsAppClick}
      />
      <NavIconButton
        alt={t("openGitHubProfile")}
        icon={GithubLogoIcon}
        onClick={handleGithubClick}
      />
      <NavIconButton
        alt={t("settings")}
        icon={GearIcon}
        onClick={handleSettingsClick}
      />
    </>
  );
}
