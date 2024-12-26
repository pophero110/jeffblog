import { promises as fs } from "fs";
import path from "path";
import Link from "next/link";
import StyledMarkdown from "@/components/StyledMarkdown";

async function getMarkdownContent() {
  const filePath = path.join(
    process.cwd(),
    "src/app/content/functional-programming.md"
  );
  const source = await fs.readFile(filePath, "utf8");
  return source;
}

const Page = async () => {
  const markdownContent = await getMarkdownContent();

  return <StyledMarkdown content={markdownContent} />;
};

export default Page;
