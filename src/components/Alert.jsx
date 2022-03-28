import React from "react";

export default function Alert({ text = "Loading...", color = "primary" }) {
  return (
    <div className={`alert alert-${color}`} role="alert">
      {text}
    </div>
  );
}
