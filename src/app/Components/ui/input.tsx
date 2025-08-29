import * as React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`w-full rounded-2xl border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-black ${className}`}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
