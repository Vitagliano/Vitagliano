import { Card } from "./Card";
import BrazilFlag from "./icons/BrazilFlag";
import USAFlag from "./icons/USAFlag";

export const Language = () => {
  return (
    <Card className="!py-6">
      <h5 className="mt-0 mb-4 text-white text-xl leading-normal font-light">
        Languages
      </h5>
      <div className="grid gap-4 grid-cols-2">
        <div className="flex gap-4 items-center">
          <BrazilFlag />
          <div className="text-gray-100 flex flex-col text-sm">
            <p className="font-bold">Portuguese</p>
            <p className="text-gray-500 font-semibold">Native</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <USAFlag />
          <div className="text-gray-100 flex flex-col text-sm">
            <p className="font-bold">English</p>
            <p className="text-gray-500 font-semibold">Intermediate</p>
          </div>
        </div>
      </div>
    </Card>
  );
};
