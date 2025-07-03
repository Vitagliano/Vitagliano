/* eslint-disable @next/next/no-img-element */
import { Card } from "./Card";
import { projects } from "@/utils/projects";

export const Projects = () => {
  return (
    <Card className="p-4">
      <h5 className="mt-0 mb-4 text-white text-lg leading-normal font-semibold">
        Recent Work
      </h5>
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 grid-rows-2 gap-4">
        {projects.map((item, index) => (
          <div className="w-full" key={item.id}>
              <div className="relative bg-[#151515] border border-zinc-800 rounded-xl h-full">
                  <img
                    src={item.img}
                    alt="portfolio"
                    className="object-cover w-full rounded-lg border-inherit border-2 border-[#151515]"
                  />

                  
                <div className="w-full text-center flex justify-end flex-col items-start">
                    <div className="w-full font-medium text-white flex-col flex rounded-xl justify-center items-start p-4">
            <a href={item.link} className="hover:underline" target="_blank">
            <h3 className="text-gray-100 text-lg leading-tight font-semibold tracking-tight m-0 p-0">
                        {item.name} 
                      </h3>
                      </a>
            <span className="text-gray-300 text-sm font-medium leading-tight tracking-tight mt-0.5 mb-0">
                        {item.type}
                      </span>
                </div>
                  </div>
              </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
