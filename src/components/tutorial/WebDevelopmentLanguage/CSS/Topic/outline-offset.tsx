import React from "react";

const CssOutlineOffset: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Outline Offset
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <code>outline-offset</code> property adds space between an outline and the element's border.
        The space is transparent and separates the outline from the element's edge.
      </p>

      {/* Example 1 */}
      <h2 className="text-2xl font-bold">Outline Outside the Border</h2>
      <p className="leading-relaxed">
        This example specifies an outline 15px outside the border edge:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`p {
  margin: 30px;
  padding: 5px;
  border: 1px solid black;
  outline: 3px solid red;
  outline-offset: 15px;
}`}
      </pre>

      <p className="leading-relaxed">
        Notice how the outline appears outside the border, creating a gap between the element and its outline.
      </p>

      {/* Example 2 */}
      <h2 className="text-2xl font-bold">Outline with Background</h2>
      <p className="leading-relaxed">
        The space between an element's border and its outline is transparent:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`p {
  margin: 30px;
  padding: 5px;
  background: yellow;
  border: 1px solid black;
  outline: 3px solid red;
  outline-offset: 15px;
}`}
      </pre>

      <p className="leading-relaxed">
        Using <code>outline-offset</code> can make outlines more visually appealing and easier to distinguish from the element's border.
      </p>
    </div>
  );
};

export default CssOutlineOffset;
