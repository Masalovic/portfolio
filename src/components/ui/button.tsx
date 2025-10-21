import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md";
  asChild?: boolean; // for compatibility only
};

export function Button({
  className = "",
  variant = "default",
  size = "md",
  ...props
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl border transition px-4 py-2 text-sm";
  const variants = {
    default: "bg-black text-white border-black hover:opacity-90",
    outline: "bg-transparent text-black border-black hover:bg-black/5",
    ghost: "bg-transparent text-black border-transparent hover:bg-black/5",
  } as const;
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
  } as const;

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  );
}

export default Button;
