import React from "react";

const CssBorderShorthand: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Shorthand Border Property
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <code>border</code> property is a shorthand to specify all border properties in one declaration:
      </p>

      <ul className="list-disc list-inside">
        <li><code>border-width</code></li>
        <li><code>border-style</code> (required)</li>
        <li><code>border-color</code></li>
      </ul>

      {/* Example: Full Border */}
      <h2 className="text-2xl font-bold">Example: Full Border</h2>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`p {
  border: 5px solid red;
}`}
      </pre>
      <p className="leading-relaxed">
        Result: a 5px solid red border on all sides of the element.
      </p>

      {/* Example: Individual Side */}
      <h2 className="text-2xl font-bold">Example: Individual Side</h2>
      <p className="leading-relaxed">
        You can also specify the border for just one side using the corresponding property:
      </p>

      <h3 className="text-xl font-semibold">Left Border</h3>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`p {
  border-left: 6px solid red;
}`}
      </pre>
      <p className="leading-relaxed">Result: a 6px solid red border on the left side only.</p>

      <h3 className="text-xl font-semibold">Bottom Border</h3>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`p {
  border-bottom: 6px solid red;
}`}
      </pre>
      <p className="leading-relaxed">Result: a 6px solid red border on the bottom side only.</p>
    </div>
  );
};

export default CssBorderShorthand;
