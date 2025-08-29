import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
};

export const Button: React.FC<ButtonProps> = ({
  className = "",
  variant = "default",
  ...props
}) => {
  const base = "rounded-2xl px-4 py-2 font-medium transition-all";
  const styles =
    variant === "outline"
      ? "border border-gray-300 bg-white text-black hover:bg-gray-100"
      : "bg-black text-white hover:bg-gray-800";

  return <button className={`${base} ${styles} ${className}`} {...props} />;
};
