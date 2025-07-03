import { Work } from "@/components/Work";
import { GithubActivity } from "@/components/GithubActivity";
import { Skills } from "@/components/Skill";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Language } from "@/components/Language";
import { Photo } from "@/components/Photo";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-[#080808]">
      <section className="relative">
      <div className="absolute inset-0 z-1 h-full w-full bg-[radial-gradient(#151515_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="px-4 lg:px-4 max-w-screen-lg mx-auto w-full py-12">
          <main className="flex flex-col lg:grid lg:grid-cols-3 gap-4 ">
            <div className="flex flex-col  col-span-2 gap-4 sm:mb-4 lg:mb-0">
              <About />
              <div className="md:flex flex-col gap-4 hidden">
              <Skills />
              <GithubActivity />
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:mb-4 lg:mb-0 col-span-1">
            <Photo />
              <Language />
                
              <Work />
              <div className="flex flex-col gap-4 md:hidden md:flex-row">
              <Skills />
              <GithubActivity />
              </div>
            </div>
            <div className="col-span-3">
              <Projects />
            </div>
          </main>
      <Footer />

        </div>

      </section>
    </div>
  );
}
