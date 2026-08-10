import { useTranslation } from "react-i18next";

export function useFormattedMarkdown(
  defaultMarkdownRaw: string,
  ptBrMarkdownRaw: string,
): string {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return currentLanguage === "pt-BR" ? ptBrMarkdownRaw : defaultMarkdownRaw;
}
