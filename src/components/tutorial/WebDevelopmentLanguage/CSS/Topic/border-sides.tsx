import React from "react";

const CssBorderSides: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Border Sides
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        CSS allows you to specify styles for individual sides of an element's border using the following properties:
      </p>

      <ul className="list-disc list-inside">
        <li><code>border-top-style</code></li>
        <li><code>border-right-style</code></li>
        <li><code>border-bottom-style</code></li>
        <li><code>border-left-style</code></li>
      </ul>

      {/* Example: Individual Side Styles */}
      <h2 className="text-2xl font-bold">Example: Individual Side Styles</h2>
      <p className="leading-relaxed">
        Using the four individual properties, you can set different styles for each side:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`p {
  border-top-style: dotted;
  border-right-style: solid;
  border-bottom-style: dotted;
  border-left-style: solid;
}`}
      </pre>

      {/* Shorthand Example */}
      <h2 className="text-2xl font-bold">Shorthand border-style</h2>
      <p className="leading-relaxed">
        You can achieve the same result using the <code>border-style</code> shorthand property.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`/* Four values */
p {
  border-style: dotted solid double dashed;
}

/* Three values */
p {
  border-style: dotted solid double;
}

/* Two values */
p {
  border-style: dotted solid;
}

/* One value */
p {
  border-style: dotted;
}`}
      </pre>

      <p className="leading-relaxed">
        <b>How it works:</b>
      </p>
      <ul className="list-disc list-inside">
        <li>4 values: top, right, bottom, left</li>
        <li>3 values: top, right/left, bottom</li>
        <li>2 values: top/bottom, right/left</li>
        <li>1 value: all four sides</li>
      </ul>
    </div>
  );
};

export default CssBorderSides;
