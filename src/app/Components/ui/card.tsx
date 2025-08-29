import * as React from "react";

export const Card = ({ className = "", ...props }) => (
  <div
    className={`rounded-2xl border bg-white shadow-sm ${className}`}
    {...props}
  />
);

export const CardContent = ({ className = "", ...props }) => (
  <div className={`p-4 ${className}`} {...props} />
);
