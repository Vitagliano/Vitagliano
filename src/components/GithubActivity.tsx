"use client";
import { Card } from "./Card";
import GitHubCalendar from "react-github-calendar";

export const GithubActivity = () => {
  return (
    <Card>
      <h5 className="mt-0 mb-4 text-white text-xl leading-normal font-light">
        Github Activity
      </h5>
      <GitHubCalendar username="Vitagliano" />
    </Card>
  );
};
