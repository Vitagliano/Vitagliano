import { Work } from "@/components/Work";
import { GithubActivity } from "@/components/GithubActivity";
import { Skills } from "@/components/Skill";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Language } from "@/components/Language";

export default function Home() {
  return (
    <div>
      <section className="section-bg">
        <div className="px-4 lg:px-8 max-w-screen-xl mx-auto w-full py-12">
          <main className="flex flex-col lg:grid lg:grid-cols-2 gap-4">
            <div className="flex flex-col gap-4 sm:mb-4 lg:mb-0 col-span-1">
              <About />
              <Language />
              <GithubActivity />
            </div>
            <div className="flex flex-col gap-4 sm:mb-4 lg:mb-0 col-span-1">
              <Skills />
              <Work />
            </div>
            <div className="col-span-2">
              <Projects />
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}
