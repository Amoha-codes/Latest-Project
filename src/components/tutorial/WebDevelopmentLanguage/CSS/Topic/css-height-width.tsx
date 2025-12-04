import React from "react";

const CssHeightWidth: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Height, Width and Max-width
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The CSS <code>height</code> and <code>width</code> properties are used to set
        the height and width of an element. <code>max-width</code> sets the maximum
        width an element can have.
      </p>

      {/* Height and Width */}
      <h2 className="text-2xl font-bold">CSS Set Height and Width</h2>
      <p className="leading-relaxed">
        Height and width define the area inside the padding, border, and margin of an element.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`div {
  height: 200px;
  width: 50%;
  background-color: powderblue;
}`}
      </pre>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`div {
  height: 100px;
  width: 500px;
  background-color: powderblue;
}`}
      </pre>

      <p className="leading-relaxed font-semibold">
        Note: Height and width do not include padding, borders, or margins.
      </p>

      {/* Height and Width Values */}
      <h2 className="text-2xl font-bold">Height and Width Values</h2>
      <ul className="list-disc ml-5 leading-relaxed">
        <li><code>auto</code> - browser calculates height/width</li>
        <li><code>length</code> - px, cm, em, etc.</li>
        <li><code>%</code> - percentage of containing block</li>
        <li><code>initial</code> - sets default value</li>
        <li><code>inherit</code> - inherits from parent element</li>
      </ul>

      {/* Max-width */}
      <h2 className="text-2xl font-bold">Using max-width</h2>
      <p className="leading-relaxed">
        The <code>max-width</code> property prevents an element from exceeding a maximum width.
        It is useful for making layouts responsive and avoiding horizontal scrollbars.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`.div1 {
  max-width: 500px;
  background-color: powderblue;
}

.div2 {
  width: 500px;
  background-color: powderblue;
}`}
      </pre>

      <p className="leading-relaxed">
        If both <code>width</code> and <code>max-width</code> are set, the element will never exceed <code>max-width</code>:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`.div1 {
  width: 100%;
  max-width: 900px;
  background-color: powderblue;
}`}
      </pre>
    </div>
  );
};

export default CssHeightWidth;
