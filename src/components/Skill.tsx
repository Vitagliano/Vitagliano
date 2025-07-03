import { Card } from "./Card";
import JavascriptIcon from "@/components/icons/Javascript";
import TypescriptIcon from "@/components/icons/Typescript";
import HTMLIcon from "@/components/icons/HTML";
import CSSIcon from "@/components/icons/CSS";
import ReactIcon from "@/components/icons/React";
import TailwindIcon from "@/components/icons/Tailwind";
import FigmaIcon from "@/components/icons/Figma";
import { AWSIcon } from "./icons/AWSIcon";
import { Next } from "./icons/Next";
import { Prisma } from "./icons/Prisma";

export const Skills = () => {
  return (
    <Card className="pt-4">
      <div>
      <h5 className="mt-0 mb-4 text-white text-lg leading-normal font-semibold">
        Skills
      </h5>
        <div className="flex flex-wrap gap-3">
          <a 
            href="https://developer.mozilla.org/en-US/docs/Web/HTML" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-auto font-medium text-sm text-white flex gap-2 rounded-full bg-zinc-800/50 px-4 py-2 items-center border border-zinc-800 hover:bg-zinc-700/50 transition-colors duration-200"
          >
            <HTMLIcon />
            HTML 5
          </a>
          <a 
            href="https://developer.mozilla.org/en-US/docs/Web/CSS" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-auto font-medium text-sm text-white flex gap-2 rounded-full bg-zinc-800/50 px-4 py-2 items-center border border-zinc-800 hover:bg-zinc-700/50 transition-colors duration-200"
          >
            <CSSIcon />
            CSS 3
          </a>
          <a 
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-auto font-medium text-sm text-white flex gap-2 rounded-full bg-zinc-800/50 px-4 py-2 items-center border border-zinc-800 hover:bg-zinc-700/50 transition-colors duration-200"
          >
            <JavascriptIcon />
            Javascript
          </a>
          <a 
            href="https://www.typescriptlang.org/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-auto font-medium text-sm text-white flex gap-2 rounded-full bg-zinc-800/50 px-4 py-2 items-center border border-zinc-800 hover:bg-zinc-700/50 transition-colors duration-200"
          >
            <TypescriptIcon />
            Typescript
          </a>
          <a 
            href="https://react.dev/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-auto font-medium text-sm text-white flex gap-2 rounded-full bg-zinc-800/50 px-4 py-2 items-center border border-zinc-800 hover:bg-zinc-700/50 transition-colors duration-200"
          >
            <ReactIcon /> React
          </a>
          <a 
            href="https://nextjs.org/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-auto font-medium text-sm text-white flex gap-2 rounded-full bg-zinc-800/50 px-4 py-2 items-center border border-zinc-800 hover:bg-zinc-700/50 transition-colors duration-200"
          >
            <Next /> Next.js
          </a>
          <a 
            href="https://tailwindcss.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-auto font-medium text-sm text-white flex gap-2 rounded-full bg-zinc-800/50 px-4 py-2 items-center border border-zinc-800 hover:bg-zinc-700/50 transition-colors duration-200"
          >
            <TailwindIcon />
            TailwindCSS
          </a>
          <a 
            href="https://www.prisma.io/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-auto font-medium text-sm text-white flex gap-2 rounded-full bg-zinc-800/50 px-4 py-2 items-center border border-zinc-800 hover:bg-zinc-700/50 transition-colors duration-200"
          >
            <Prisma />
            Prisma
          </a>
          <a 
            href="https://www.figma.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-auto font-medium text-sm text-white flex gap-2 rounded-full bg-zinc-800/50 px-4 py-2 items-center border border-zinc-800 hover:bg-zinc-700/50 transition-colors duration-200"
          >
            <FigmaIcon />
            Figma (UI/UX)
          </a>
          <a 
            href="https://aws.amazon.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-auto font-medium text-sm text-white flex gap-2 rounded-full bg-zinc-800/50 px-4 py-2 items-center border border-zinc-800 hover:bg-zinc-700/50 transition-colors duration-200"
          >
            <AWSIcon />
            Amazon Web Services (AWS)
          </a>
        </div>
      </div>
    </Card>
  );
};
