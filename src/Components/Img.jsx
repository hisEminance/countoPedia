import React from "react";

export default function Img({borderColor, ...rest}) {
  return (
    <img
      style={{
        width: "100%",
        cursor: "pointer",
        border: `1px solid ${borderColor}`,
      }}
      className="p-4 rounded"
      {...rest}
    />
  );
}
