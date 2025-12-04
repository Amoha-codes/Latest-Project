import React from "react";

const CssBorderColor: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Border Colors
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <code>border-color</code> property specifies the color of an element's borders.
        You can define one color for all sides or different colors for each side.
      </p>

      {/* Specific Side Colors */}
      <h2 className="text-2xl font-bold">Specific Side Colors</h2>
      <p className="leading-relaxed">
        You can specify colors for top, right, bottom, and left borders using 1 to 4 values.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`p.one {
  border-style: solid;
  border-color: red green blue yellow; /* top, right, bottom, left */
}`}
      </pre>

      {/* HEX Value */}
      <h2 className="text-2xl font-bold">HEX Values</h2>
      <p className="leading-relaxed">
        You can specify the border color using a hexadecimal value:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`p.one {
  border-style: solid;
  border-color: #ff0000; /* red */
}`}
      </pre>

      {/* RGB Value */}
      <h2 className="text-2xl font-bold">RGB Values</h2>
      <p className="leading-relaxed">
        You can also use <code>rgb()</code> values for the border color:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`p.one {
  border-style: solid;
  border-color: rgb(255, 0, 0); /* red */
}`}
      </pre>

      {/* HSL Value */}
      <h2 className="text-2xl font-bold">HSL Values</h2>
      <p className="leading-relaxed">
        HSL values can also be used to define border colors:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`p.one {
  border-style: solid;
  border-color: hsl(0, 100%, 50%); /* red */
}`}
      </pre>
    </div>
  );
};

export default CssBorderColor;
