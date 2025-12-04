import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import GithubIcon from "@/components/icons/Github";
import LinkedInIcon from "@/components/icons/LinkedIn";
import TwitterIcon from "@/components/icons/Twitter";
import Link from "next/link";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { DownloadIcon } from "lucide-react";

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
        <p>I&apos;m 28 years old and based in São Paulo, Brazil.</p>
        <p>
          I&apos;m a front-end designer with 10 years of experience developing
          and designing websites and web applications. I love creating clean,
          user-friendly pages and making sure every project is visually
          appealing and easy to use.
        </p>
        <p>
          Lately, I&apos;ve been passionate about web3, building seamless
          experiences that connect traditional and decentralized platforms.
        </p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-5 items-center">
          <Link
            className="text-gray-400 hover:text-blue-500 transition-all"
            href="https://github.com/Vitagliano">
            <GithubIcon />
          </Link>

          <Link
            className="text-gray-400 hover:text-blue-500 transition-all mt-0.5"
            href="https://twitter.com/gabrielrvita">
            <TwitterIcon />
          </Link>

          <Link
            className="text-gray-400 hover:text-blue-500 transition-all -mt-0.5"
            href="https://www.linkedin.com/in/gabrielrvita/">
            <LinkedInIcon />
          </Link>
        </div>
        <Link
          className="flex items-center text-white duration-150 bg-blue-600 hover:bg-blue-500 rounded-xl active:shadow-lg font-semibold text-sm flex gap-2 py-3 px-6"
          href="/cv.pdf">
          <DownloadIcon className="w-4 h-4" />
          My curriculum
        </Link>
      </div>
    </Card>
  );
};
