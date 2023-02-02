// viewed
import React from "react";
import { Link as GatsbyLink } from "gatsby";
import cls from "classnames";

type LinkProps = {
  as?: "button";
  variant?: "primary" | "outline";
};

export default function Link({
  children,
  to,
  activeClassName,
  partiallyActive,
  className,
  as,
  variant = "primary",
  ...other
}: React.ComponentPropsWithoutRef<typeof GatsbyLink> & LinkProps) {
  const internal = /^\/(?!\/)/.test(to);
  let linkClassName = as === "button" ? "btn" : "hover:underline cursor-pointer focus-within:underline";
  if (as === "button") {
    if (variant === "primary") {
      linkClassName += " btn-primary";
    } else if (variant === "outline") {
      linkClassName += " btn-outline";
    }
  }

  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    return (
      <GatsbyLink
        to={to}
        className={cls(linkClassName, className)}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...other}
      >
        {children}
      </GatsbyLink>
    );
  }
  return (
    <a href={to} className={cls(linkClassName, className)} target="_blank" {...other}>
      {children}
    </a>
  );
}
