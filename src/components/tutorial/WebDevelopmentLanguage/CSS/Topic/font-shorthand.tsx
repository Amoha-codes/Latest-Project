import React from "react";

const CssFontProperty: React.FC = () => {
  return (
    <div className="mt-20 space-y-10">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Font Property (Shorthand)
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The CSS <code>font</code> property is a shorthand property that lets you 
        set multiple font-related properties in a single declaration.
      </p>

      <p className="leading-relaxed">
        It combines several individual font properties into one line, making your 
        CSS shorter and cleaner.
      </p>

      {/* Properties List */}
      <h2 className="text-2xl font-bold">The CSS Font Shorthand Includes:</h2>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`font-style
font-variant
font-weight
font-stretch
font-size
line-height
font-family`}
      </pre>

      {/* Rules */}
      <h2 className="text-2xl font-bold">Rules for the CSS Font Shorthand</h2>
      <ul className="list-disc pl-6 leading-relaxed">
        <li>The <b>font-size</b> and <b>font-family</b> values are required.</li>
        <li>If used, <code>font-style</code>, <code>font-variant</code>, and 
            <code>font-weight</code> must appear <b>before</b> font-size.</li>
        <li>If included, <b>line-height</b> must follow font-size and use a
            <code>/</code> separator — like <code>15px/30px</code>.</li>
        <li><code>font-family</code> must be the <b>last</b> value.</li>
      </ul>

      {/* Examples */}
      <h2 className="text-2xl font-bold">Examples</h2>
      <p className="leading-relaxed">Using shorthand to set multiple font properties:</p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`p.a {
  font: 20px Arial, sans-serif;
}

p.b {
  font: italic bold 16px Arial, sans-serif;
}

p.c {
  font: italic small-caps bold 15px/30px Georgia, serif;
}`}
      </pre>

    </div>
  );
};

export default CssFontProperty;
