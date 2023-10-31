import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import GithubIcon from "@/components/icons/Github";
import LinkedInIcon from "@/components/icons/LinkedIn";
import TwitterIcon from "@/components/icons/Twitter";
import Link from "next/link";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

export const About = () => {
  return (
    <Card>
      <h1 className="text-gray-200 text-2xl leading-tight tracking-tight ">
        Hey, I&apos;m Gabriel Russo Vitagliano{" "}
        <span className="text-gray-400 font-light">
          - a Front-end Developer & UI/UX Designer
        </span>
      </h1>
      <div className="mt-4 text-gray-400 mb-8 flex gap-4 flex-col">
        <p>I&apos;m 26 years old and based in São Paulo, Brazil.</p>
        <p>
          I&apos;ve been building websites, studying design, landing pages and
          search engine optimization for almost a decade. I can quickly create
          high quality landing pages, blogs, directories and more using web
          technologies.
        </p>
        <p>
          I&apos;m currently delving into Web3, developing dApps and designing
          usability flows for this new ecosystem.
        </p>
      </div>
      <div className="flex justify-between items-center">
        <Link
          className="text-white duration-150 bg-blue-600 hover:bg-blue-500 rounded-xl active:shadow-lg font-medium flex gap-2 py-3 px-4"
          href="/cv.pdf"
        >
          My curriculum
        </Link>
        <div className="flex gap-5">
          <Link
            className="text-gray-400 hover:text-blue-500 transition-all"
            href="https://github.com/Vitagliano"
          >
            <GithubIcon />
          </Link>

          <Link
            className="text-gray-400 hover:text-blue-500 transition-all"
            href="https://www.linkedin.com/in/gabrielrvita/"
          >
            <LinkedInIcon />
          </Link>
          <Link
            className="text-gray-400 hover:text-blue-500 transition-all"
            href="https://twitter.com/0xRusso"
          >
            <TwitterIcon />
          </Link>
        </div>
      </div>
    </Card>
  );
};
