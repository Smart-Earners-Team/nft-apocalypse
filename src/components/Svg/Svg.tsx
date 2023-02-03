// viewed
import React from "react";
import { SvgProps } from "./types";

export default function Svg({children, ...props}: SvgProps): JSX.Element {
    return <svg {...props}>{children}</svg>
}