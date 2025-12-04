import React from "react";

const CssRoundedBorders: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Rounded Borders
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <code>border-radius</code> property is used to create rounded corners on an element.
      </p>

      {/* Examples */}
      <h2 className="text-2xl font-bold">Examples</h2>
      <p className="leading-relaxed">You can adjust the roundness by changing the <code>border-radius</code> value:</p>

      <div className="space-y-4">
        <div className="p-4 border-2 border-red-500" style={{ borderRadius: "0px" }}>
          Normal border (0px)
        </div>
        <div className="p-4 border-2 border-red-500" style={{ borderRadius: "5px" }}>
          Round border (5px)
        </div>
        <div className="p-4 border-2 border-red-500" style={{ borderRadius: "15px" }}>
          Rounder border (15px)
        </div>
        <div className="p-4 border-2 border-red-500" style={{ borderRadius: "30px" }}>
          Roundest border (30px)
        </div>
      </div>

      {/* Code Example */}
      <h2 className="text-2xl font-bold">CSS Code Example</h2>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`p {
  border: 2px solid red;
  border-radius: 5px;
}`}
      </pre>
    </div>
  );
};

export default CssRoundedBorders;
