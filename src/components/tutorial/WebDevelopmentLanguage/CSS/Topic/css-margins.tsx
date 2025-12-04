import React from "react";

const CssMargins: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Margins
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        CSS margins create space around elements, outside of any defined borders.
        You can control the margin for each side individually, or use the shorthand property to set all sides at once.
      </p>

      {/* Individual Sides */}
      <h2 className="text-2xl font-bold">Margin - Individual Sides</h2>
      <p className="leading-relaxed">
        CSS provides properties for setting the margin of each side:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li><code>margin-top</code> - top margin</li>
        <li><code>margin-right</code> - right margin</li>
        <li><code>margin-bottom</code> - bottom margin</li>
        <li><code>margin-left</code> - left margin</li>
      </ul>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`p {
  margin-top: 100px;
  margin-bottom: 100px;
  margin-right: 150px;
  margin-left: 80px;
}`}
      </pre>

      {/* Shorthand Property */}
      <h2 className="text-2xl font-bold">Margin - Shorthand Property</h2>
      <p className="leading-relaxed">
        You can shorten the code by using the <code>margin</code> shorthand property:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`/* Four values */
p { margin: 25px 50px 75px 100px; }

/* Three values */
p { margin: 25px 50px 75px; }

/* Two values */
p { margin: 25px 50px; }

/* One value */
p { margin: 25px; }`}
      </pre>

      {/* Auto Value */}
      <h2 className="text-2xl font-bold">The auto Value</h2>
      <p className="leading-relaxed">
        Use <code>margin: auto</code> to horizontally center an element:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`div {
  width: 300px;
  margin: auto;
  border: 1px solid red;
}`}
      </pre>

      {/* Inherit Value */}
      <h2 className="text-2xl font-bold">The inherit Value</h2>
      <p className="leading-relaxed">
        Use <code>margin: inherit</code> to inherit the margin from the parent element:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`div {
  border: 1px solid red;
  margin-left: 100px;
}

p.ex1 {
  margin-left: inherit;
}`}
      </pre>
    </div>
  );
};

export default CssMargins;
