import {
  Timeline,
  Text,
  Stack,
  Title,
  List,
  Center,
  useMantineColorScheme,
} from "@mantine/core";
import { CheckIcon } from "@phosphor-icons/react";
import {
  formatProfessionalTimeline,
  normalizeAndCreateKey,
} from "~/utils/helpers";
import {
  containerVariants,
  itemVariants,
  MotionSettings,
} from "./MotionSettings";
import type { DefaultSectionProps } from "~/types/DefaultSectionProps";
import { useTranslation } from "react-i18next";

export default function ProfessionalTimeline({ section }: DefaultSectionProps) {
  const flatEvents = formatProfessionalTimeline(section);

  const { colorScheme } = useMantineColorScheme();
  const textColor = colorScheme === "dark" ? "text-gray-200" : "text-gray-800";

  const { t } = useTranslation();

  return (
    <Center>
      <Stack gap="xl">
        <Title order={2} className="[font-family:var(--app-font-family)]">
          {t("professionalExperience")}
        </Title>

        <MotionSettings variants={containerVariants}>
          <Timeline bulletSize={24} lineWidth={2}>
            {flatEvents.map((event, index) => {
              const isPreviousJob = index > 0;

              return (
                <Timeline.Item
                  key={`${event.company}-${event.title}-${index}`}
                  bullet={isPreviousJob ? <CheckIcon size={14} /> : undefined}
                >
                  <MotionSettings variants={itemVariants}>
                    <Text fw={700} size="md">
                      {event.title}{" "}
                      <Text span fw={400} c="dimmed">
                        at {event.company}
                      </Text>
                    </Text>

                    {/* Date / Subtitle */}
                    {event.subtitle && (
                      <Text size="xs" mt={4} c="blue" fw={500}>
                        {event.subtitle}
                      </Text>
                    )}

                    {/* Bullet Points */}
                    <List size="sm" mt="sm" spacing="xs" withPadding>
                      {event.bullets.map((bullet, bIndex) => (
                        <List.Item
                          key={`${normalizeAndCreateKey(bullet)}-${bIndex}`}
                        >
                          <Text size="sm" className={textColor}>
                            {bullet}
                          </Text>
                        </List.Item>
                      ))}
                    </List>
                  </MotionSettings>
                </Timeline.Item>
              );
            })}
          </Timeline>
        </MotionSettings>
      </Stack>
    </Center>
  );
}
