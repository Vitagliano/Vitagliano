"use client";
import { projects } from "@/utils/projects";
import { Card } from "@/components/Card";
import Image from "next/image";
import { ArrowLeftOnRectangleIcon, HomeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

interface ProjectPageProps {
  params: {
    id: string;
  };
}

const ProjectPage: React.FC<ProjectPageProps> = ({ params }) => {
  const { id } = params;

  const project = projects.find((project) => project.id === id);

  if (!project) {
    return (
      <div>
        <section className="section-bg">
          <div className="px-4 lg:px-8 max-w-screen-xl mx-auto w-full py-12">
            <Card>
              <div className="!flex gap-2 items-center">
                <Link
                  href="/"
                  className="hover:bg-slate-500/10 p-2 rounded-lg text-gray-200 hover:text-blue-500 transition-all"
                >
                  <ArrowLeftOnRectangleIcon className="h-6 w-6" />
                </Link>
                <h1 className="text-gray-200 text-2xl leading-tight tracking-tight ">
                  Project not found!
                </h1>
              </div>
            </Card>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <section className="section-bg">
        <div className="px-4 lg:px-8 max-w-screen-xl mx-auto w-full py-12 flex flex-col gap-4">
          <Card className="flex items-center !w-full">
            <div className="flex items-center gap-6 w-full h-auto flex-row">
              <Link
                href="/"
                className="hover:bg-slate-500/10 p-2 rounded-lg text-gray-200 hover:text-blue-500 transition-all self-center"
              >
                <ArrowLeftOnRectangleIcon className="h-6 w-6" />
              </Link>
              <div className="mx-auto">
                <h1 className="text-gray-200 text-2xl leading-tight tracking-tight mb-2">
                  {project.name}
                </h1>
                <span className="bg-blue-500 text-blue-100 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-xl ">
                  {project.type}
                </span>
              </div>
            </div>
          </Card>
          <Card className="h-full w-full min-h-12 max-h-screen rounded-xl overflow-y-scroll pl-0 !bg-transparent !shadow-none py-0 pr-6 project !border-0 !backdrop-blur-none">
            <div className="rounded-xl">
              <div className="w-full rounded-xl relative">
                <Image
                  fill={true}
                  className=" !h-auto w-full  border border-slate-50/20 rounded-xl"
                  sizes="(max-width: 768px) 100vw"
                  src={project.projectImg}
                  alt={project.name}
                />
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ProjectPage;
