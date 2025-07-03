import React from 'react';
import { Card } from './Card';
import { Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <div>
    <Card className="my-4 w-full">
        <div className="flex md:flex-row flex-col gap-4 md:items-center justify-between">
        <div className="flex flex-col w-fit">
          <h3 className="text-xl font-bold text-white ">
            Have project in mind?
          </h3>
          <p className="text-gray-300 font-light text-md max-w-sm">
            Let&apos;s grab a coffee or connect online to discuss your vision and work on making it a reality.
          </p>
       
          </div>
                     <a
           className="w-fit flex items-center text-white duration-150 bg-blue-600 hover:bg-blue-500 rounded-xl active:shadow-lg font-semibold text-sm gap-2 py-3 px-6"
            href="mailto:gabrielrvita@gmail.com"
         >
           <Mail className="w-4 h-4" />
           Let&apos;s talk
         </a></div>
    </Card>
  
    </div>
  );
}; 