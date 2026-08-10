import Markdown from "react-markdown";
import myMarkdownFile from "../assets/curriculum.md?raw";
import myMarkdownFileBr from "../assets/curriculum-br.md?raw";
import DefaultPageAnimation from "~/components/DefaultPageAnimation";
import { useFormattedMarkdown } from "~/hooks/useFormattedMarkdown";

export default function Profile() {
  const formattedMarkdown = useFormattedMarkdown(
    myMarkdownFile,
    myMarkdownFileBr,
  );
  return (
    <DefaultPageAnimation>
      <Markdown>{formattedMarkdown}</Markdown>
    </DefaultPageAnimation>
  );
}
