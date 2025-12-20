import { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const classes = cva(
  "inline-flex items-center justify-center rounded-full px-6 py-2 text-sm font-medium transition",
  {
    variants: {
      variant: {
        primary: "bg-lime-400 text-neutral-950 border border-lime-400",
        secondary: "border border-white text-white bg-transparent",
      },
      size: {
        sm: "px-4 py-1.5 text-sm",
      },
    },
    defaultVariants: {
      size: undefined,
    },
  }
);

export default function Button(
  props: {
    variant: "primary" | "secondary";
    size?: "sm";
  } & ButtonHTMLAttributes<HTMLButtonElement>
) {
  const { variant, className, size, ...otherProps } = props;

  return (
    <button
      className={classes({
        variant,
        size,
        className,
      })}
      {...otherProps}
    />
  );
}
