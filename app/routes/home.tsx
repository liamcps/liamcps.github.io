import myMarkdownFile from "../assets/curriculum.md?raw";
import myMarkdownFilePtbr from "../assets/curriculum-br.md?raw";
import Card from "~/components/Card";
import DefaultPageAnimation from "~/components/DefaultPageAnimation";
import GreetingSection from "~/components/GreetingSection/GreetingSection";
import ProfessionalTimeline from "~/components/ProfessionalTimeline/ProfessionalTimeline";

import { formatFileForRendering, getSectionKey } from "~/utils/helpers";
import { useFormattedMarkdown } from "~/hooks/useFormattedMarkdown";

export default function Home() {
  const formattedFileToUse = useFormattedMarkdown(
    myMarkdownFile,
    myMarkdownFilePtbr,
  );

  const formattedFile = formatFileForRendering(formattedFileToUse);

  const renderSection = formattedFile.map((section, index) => {
    const sectionKey = getSectionKey(section.body, index);
    if (index === 0) {
      return <GreetingSection section={section} key={sectionKey} />;
    }
    if (index === 3) {
      return (
        <div className="my-[25vh]" key={sectionKey}>
          <ProfessionalTimeline section={section} key={sectionKey} />
        </div>
      );
    }
    return <Card section={section} index={index} key={sectionKey} />;
  });

  return (
    <DefaultPageAnimation>
      <div className="flex flex-col">{renderSection}</div>
    </DefaultPageAnimation>
  );
}
