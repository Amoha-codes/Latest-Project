import React from "react";

const CssTextColor: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Text Color
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <code>color</code> property is used to set the color of text in HTML elements.
        You can specify colors using color names, HEX codes, or RGB values.
      </p>

      <p className="leading-relaxed">
        By default, the text color for a page is defined in the <code>body</code> selector.
      </p>

      {/* Examples Section */}
      <h2 className="text-2xl font-bold">Examples</h2>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`body {
  color: blue; /* sets default text color for the page */
}

h1 {
  color: green; /* sets heading color */
}

h2 {
  color: red; /* sets sub-heading color */
}`}
      </pre>

      <p className="leading-relaxed">
        You can use any valid color name like <code>red</code>, <code>green</code>, <code>blue</code>, or specify a color using HEX values like <code>#ff0000</code> or RGB values like <code>rgb(255,0,0)</code>.
      </p>
    </div>
  );
};

export default CssTextColor;
