import {
  Anchor,
  Dialog,
  Group,
  NativeSelect,
  Switch,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import { SunIcon, MoonStarsIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Settings({
  opened,
  closeDialog,
}: {
  readonly opened: boolean;
  readonly closeDialog: () => void;
}) {
  const { t, i18n } = useTranslation();
  const [checked, setChecked] = useState(false);
  const { toggleColorScheme } = useMantineColorScheme();
  const toggleLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const handleThemeToggle = (isChecked: boolean) => {
    setChecked(isChecked);
    toggleColorScheme();
  };

  return (
    <Dialog
      opened={opened}
      withCloseButton
      onClose={closeDialog}
      size="lg"
      position={{ bottom: 20, left: 20 }}
    >
      <Text size="md" mb="xs" fw={600}>
        {t("settings")}
      </Text>

      <Group align="flex-end" mb="sm">
        <Switch
          checked={checked}
          onChange={(e) => handleThemeToggle(e.currentTarget.checked)}
          size="md"
          color="dark.4"
          label={t("toggleTheme")}
          onLabel={<SunIcon size={18} color="var(--mantine-color-yellow-4)" />}
          offLabel={
            <MoonStarsIcon size={18} color="var(--mantine-color-blue-6)" />
          }
        />
      </Group>

      <Group align="flex-end" mb="sm">
        <NativeSelect
          label={t("language")}
          data={[
            { value: "en", label: t("english") },
            { value: "pt-BR", label: t("portugueseBr") },
          ]}
          value={i18n.language}
          onChange={(e) => toggleLanguage(e.target.value)}
        />
      </Group>

      <Group align="flex-end" mb="sm">
        <Anchor
          href={
            "https://github.com/michelbaratella/michelbaratella.github.io/blob/main/README.md"
          }
          target="_blank"
          size="md"
        >
          {t("about")}
        </Anchor>
      </Group>
    </Dialog>
  );
}
