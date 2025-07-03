import { Card } from "./Card";
import Image from "next/image";

const work = [
  {
    title: "Frontend Dev & UI/UX Designer",
    company: "Perfect Flight",
    initialDate: "Jul 2022",
    finalDate: "Present",
    img: "/img/perfect.jpeg",
  },
  {
    title: "Co-Founder & Frontend Dev",
    company: "Darkside DAO",
    initialDate: "Feb 2022",
    finalDate: "Set 2022",
    img: "/img/darkside.jpeg",
  },
  {
    title: "UI/UX Designer",
    company: "Select Afiliados",
    initialDate: "Oct 2021",
    finalDate: "Feb 2022",
    img: "/img/select.png",
  },
  {
    title: "Fullstack Dev & IT Support",
    company: "Bauer",
    initialDate: "May 2021",
    finalDate: "Oct 2021",
    img: "/img/bauer.jpeg",
  },
];

const workItems = work.map((item, idx) => (
  <div key={idx} className="flex gap-4 items-center">
    <Image
      src={item.img}
      width={50}
      height={50}
      alt={item.company}
      className="rounded-lg border border-zinc-900"
    />
    <div className="text-gray-100 flex flex-col">
      <p className="font-bold text-[0.9rem]">{item.title}</p>
      <p className="text-gray-400 font-semibold text-sm">{item.company}</p>
      <p className="text-gray-500 font-semibold text-xs">
        {item.initialDate} - {item.finalDate}
      </p>
    </div>
  </div>
));

export const Work = () => {
  return (
    <Card className="pt-4">
      <h5 className="mt-0 mb-4 text-white text-lg leading-normal font-semibold">
        Work Experience
      </h5>
      <div className="flex gap-4 flex-col">{workItems}</div>
    </Card>
  );
};
