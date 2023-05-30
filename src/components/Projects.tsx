import Link from "next/link";
import { Card } from "./Card";
import { projects } from "@/utils/projects";

export const Projects = () => {
  return (
    <Card>
      <h5 className="mt-0 mb-4 text-white text-xl leading-normal font-light">
        Projects
      </h5>
      <div className="grid grid-cols-3 grid-rows-2 gap-4">
        {projects.map((item, index) => (
          <div className="w-full">
            <a href={"/projects/" + item.id}>
              <div className="relative">
                <div className="overflow-hidden h-80 rounded-xl border border-slate-50/20 w-full">
                  <img
                    src={item.img}
                    alt="portfolio"
                    className="object-cover h-full"
                  />

                  <div className="absolute w-full top-0 bottom-0 z-10 rounded-lg py-6 px-4 text-center flex justify-end flex-col items-start custom-gradient">
                    <div className="w-full font-medium text-white flex-col flex rounded-xl justify-center items-start bg-gray-800 p-4">
                      <span className="text-gray-300 text-md font-medium leading-tight tracking-tight m-0">
                        {item.type}
                      </span>
                      <h3 className="text-gray-100 text-2xl leading-tight font-semibold tracking-tight m-0 p-0">
                        {item.name}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </Card>
  );
};
