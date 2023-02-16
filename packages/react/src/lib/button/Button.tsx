import React from "react";
import { cva, VariantProps } from "cva";

const button = cva(
  "button rounded-sm flex gap-2 hover:scale-110 transition-transform ease-out duration-200",
  {
    variants: {
      intent: {
        primary: ["bg-indigo-800", "text-slate-200", "border-transparent"],
        secondary: ["bg-gray-200", "text-indigo-700", "border-slate-400"],
      },
      size: {
        small: ["text-sm", "py-1", "px-2"],
        medium: ["text-base", "py-2", "px-4"],
      },
    },
    compoundVariants: [{ intent: "primary", size: "medium" }],
    defaultVariants: {
      intent: "primary",
      size: "medium",
    },
  }
);

export interface IButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  icon?: string;
  text: string;
}

export const Button: React.FC<IButton> = ({
  className,
  intent,
  size,
  ...props
}) => {
  return (
    <button className={button({ intent, size, className })}>
      <>
        {props.icon ? (
          <img
            src={props.icon}
            className={"inline-block"}
            height="24"
            width={"24"}
            alt="text"
          ></img>
        ) : null}
        {props.text}
      </>
    </button>
  );
};
