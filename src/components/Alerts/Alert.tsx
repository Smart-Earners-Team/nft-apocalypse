// viewed
import React from "react";
import clx from "classnames";
import { alertVariants } from "./";

export interface AlertProps extends React.ComponentPropsWithRef<"div"> {
  title: string;
  type?: typeof alertVariants[keyof typeof alertVariants];
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ type = "info", title, children, onClick, ...props }, ref) => {
    const info = type === "info",
      success = type === "success",
      error = type === "error",
      warn = type === "warning";

    return (
      <div
        className={clx(
          "fixed right-1/2 md:right-4 translate-x-1/2 md:translate-x-0 transition-all duration-300 flex items-center",
          "max-w-xs md:max-w-sm mb-4 px-2 shadow-md rounded-md w-full border-l-8 bg-white",
          {
            "text-teal-400 border-teal-400": info,
            "text-red-400 border-red-400": error,
            "text-green-400 border-green-400": success,
            "text-yellow-400 border-yellow-400": warn,
          }
        )}
        ref={ref}
        onClick={onClick}
        {...props}
      >
        <div className="w-auto items-center py-2">
          <div className="text-sm font-medium">{title}</div>
          <p className="leading-tight text-xs font-light">{children}</p>
        </div>
      </div>
    );
  }
);

export default Alert;
