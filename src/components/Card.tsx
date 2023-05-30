import { ReactNode } from "react";
import { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  className?: string;
};

export const Card = ({ children, className = "", ...props }: CardProps) => {
  return (
    <div
      className={`w-full shadow-2xl shadow-blue-500/20 relative bg-slate-50 border border-slate-50/20 rounded-xl overflow-hidden dark:bg-slate-800/25 p-8 backdrop-blur-sm ${className}`}
    >
      <div className="z-1 absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
      <div className="z-2 relative">{children}</div>
    </div>
  );
};
