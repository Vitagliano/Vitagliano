import { Card } from "./Card";
import BrazilFlag from "./icons/BrazilFlag";
import USAFlag from "./icons/USAFlag";

export const Language = () => {
  return (
    <Card className="!py-4">
      <h5 className="mt-0 mb-4 text-white text-lg leading-normal font-semibold">
        Languages
      </h5>
      <div className="grid gap-6 grid-cols-2">
        <div className="flex gap-4 items-center">
          <BrazilFlag />
          <div className="text-gray-100 flex flex-col">
            <p className="font-bold text-sm">Portuguese</p>
            <p className="text-gray-500 font-semibold text-xs">Native</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <USAFlag />
          <div className="text-gray-100 flex flex-col">
            <p className="font-bold text-sm">English</p>
            <p className="text-gray-500 font-semibold text-xs">Fluent</p>
          </div>
        </div>
      </div>
    </Card>
  );
};
