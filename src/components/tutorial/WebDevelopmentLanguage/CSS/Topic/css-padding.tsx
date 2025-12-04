import React from "react";

const CssPadding: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Padding
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The CSS <code>padding</code> properties create space around an element's 
        content, inside of any defined borders. You can control padding for each 
        side individually or use shorthand to set all sides at once.
      </p>

      {/* Individual Sides */}
      <h2 className="text-2xl font-bold">Padding - Individual Sides</h2>
      <p className="leading-relaxed">
        CSS provides properties for each side of an element:
      </p>
      <ul className="list-disc ml-5 leading-relaxed">
        <li><code>padding-top</code> - top padding</li>
        <li><code>padding-right</code> - right padding</li>
        <li><code>padding-bottom</code> - bottom padding</li>
        <li><code>padding-left</code> - left padding</li>
      </ul>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`div {
  padding-top: 50px;
  padding-right: 30px;
  padding-bottom: 50px;
  padding-left: 80px;
}`}
      </pre>

      {/* Shorthand */}
      <h2 className="text-2xl font-bold">Padding - Shorthand Property</h2>
      <p className="leading-relaxed">
        You can shorten the code by using the <code>padding</code> shorthand:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`/* Four values: top, right, bottom, left */
div {
  padding: 25px 50px 75px 100px;
}

/* Three values: top, horizontal, bottom */
div {
  padding: 25px 50px 75px;
}

/* Two values: vertical, horizontal */
div {
  padding: 25px 50px;
}

/* One value: all sides */
div {
  padding: 25px;
}`}
      </pre>

      {/* Padding and Element Width */}
      <h2 className="text-2xl font-bold">Padding and Element Width</h2>
      <p className="leading-relaxed">
        Padding adds space inside the element's content box. By default, it increases 
        the total element width:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`div {
  width: 300px;
  padding: 25px; /* total width = 350px */
}`}
      </pre>

      {/* Box-sizing */}
      <h2 className="text-2xl font-bold">Padding with Box-Sizing</h2>
      <p className="leading-relaxed">
        Use <code>box-sizing: border-box;</code> to include padding and border in the 
        width calculation. This keeps the element at the specified width:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`div {
  width: 300px;
  padding: 25px;
  box-sizing: border-box; /* width stays 300px */
}`}
      </pre>
    </div>
  );
};

export default CssPadding;
