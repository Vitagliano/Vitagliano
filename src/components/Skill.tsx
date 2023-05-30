import { Card } from "./Card";
import JavascriptIcon from "@/components/icons/Javascript";
import TypescriptIcon from "@/components/icons/Typescript";
import HTMLIcon from "@/components/icons/HTML";
import CSSIcon from "@/components/icons/CSS";
import ReactIcon from "@/components/icons/React";
import TailwindIcon from "@/components/icons/Tailwind";
import FigmaIcon from "@/components/icons/Figma";
export const Skills = () => {
  return (
    <Card>
      <div>
        <h5 className="mt-0 mb-4 text-white text-xl leading-normal font-light">
          Skills
        </h5>
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="w-full font-medium text-white flex gap-4 rounded-xl bg-gray-800/50 p-4">
            <HTMLIcon />
            HTML 5
          </div>
          <div className="w-full font-medium text-white flex gap-4 rounded-xl bg-gray-800/50 p-4">
            <CSSIcon />
            CSS 3
          </div>
          <div className="w-full font-medium text-white flex gap-4 rounded-xl bg-gray-800/50 p-4">
            <JavascriptIcon />
            Javascript
          </div>
        </div>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 my-4">
          <div className="w-full font-medium text-white flex gap-4 rounded-xl bg-gray-800/50 p-4">
            <TypescriptIcon />
            Typescript
          </div>
          <div className="w-full font-medium text-white flex gap-4 rounded-xl bg-gray-800/50 p-4">
            <ReactIcon /> React
          </div>
        </div>
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="w-full font-medium text-white flex gap-4 rounded-xl bg-gray-800/50 py-4 pl-4 pr-5">
            <TailwindIcon />
            TailwindCSS
          </div>
          <div className="sm:col-span-1 lg:col-span-2 w-full font-medium text-white flex gap-4 rounded-xl bg-gray-800/50 p-4">
            <FigmaIcon />
            Figma (UI/UX)
          </div>
        </div>
      </div>
    </Card>
  );
};
