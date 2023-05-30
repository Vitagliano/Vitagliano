import { Card } from "./Card";
import Image from "next/image";

const work = [
  {
    title: "UI/UX Designer",
    company: "Perfect Flight",
    initialDate: "Jul 2022",
    finalDate: "Present",
    img: "/img/perfect.jpeg",
  },
  {
    title: "Co-Founder & Front-end Dev",
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
    title: "Full-stack Dev & IT Support",
    company: "Bauer",
    initialDate: "May 2021",
    finalDate: "Oct 2021",
    img: "/img/bauer.jpeg",
  },
];

const workItems = work.map((item, idx) => (
  <li
    key={idx}
    className="w-full font-medium grid gap-4 rounded-xl bg-gray-800/50 p-4 grid-cols-3"
  >
    <div className="grid col-span-2">
      <div className="flex items-center gap-4 text-white">
        <Image
          src={item.img}
          width={50}
          height={50}
          alt={item.company}
          className="rounded-lg"
        />
        <p className="font-bold">{item.title}</p>
      </div>
    </div>
    <div className="flex justify-start items-center">
      <div className="text-gray-400 flex flex-col text-sm">
        <p className="font-bold">{item.company}</p>
        <p className="text-gray-500 font-semibold">
          {item.initialDate} - {item.finalDate}
        </p>
      </div>
    </div>
  </li>
));

export const Work = () => {
  return (
    <Card>
      <h5 className="mt-0 mb-4 text-white text-xl leading-normal font-light">
        Work Experience
      </h5>
      <ul className="flex gap-4 flex-col">{workItems}</ul>
    </Card>
  );
};
