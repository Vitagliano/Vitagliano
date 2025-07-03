import { ReactNode } from "react";
import { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  className?: string;
};

export const Card = ({ children, className = "", ...props }: CardProps) => {
  return (
    <div
      className={`w-full relative bg-[#0d0d0d] border border-zinc-900 rounded-xl overflow-hidden p-6 backdrop-blur-sm ${className}`}
    >
      <div className="z-1 absolute inset-0 bg-grid-zinc-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-zinc-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
      <div className="z-2 relative w-full">{children}</div>
    </div>
  );
};
