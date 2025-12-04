import React from "react";

const CssTextShadow: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Text Shadow
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <code>text-shadow</code> property adds shadow effects to text. 
        You can specify horizontal and vertical offsets, color, and blur radius.
      </p>

      {/* Basic Shadow */}
      <h2 className="text-2xl font-bold">Basic Text Shadow</h2>
      <p className="leading-relaxed">
        Horizontal and vertical shadow without color:
      </p>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`h1 {
  text-shadow: 2px 2px;
}`}
      </pre>

      {/* Shadow with Color */}
      <h2 className="text-2xl font-bold">Shadow with Color</h2>
      <p className="leading-relaxed">
        Adding color to the shadow:
      </p>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`h1 {
  text-shadow: 2px 2px red;
}`}
      </pre>

      {/* Shadow with Blur */}
      <h2 className="text-2xl font-bold">Shadow with Blur</h2>
      <p className="leading-relaxed">
        Adding a blur radius to the shadow:
      </p>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`h1 {
  text-shadow: 2px 2px 5px red;
}`}
      </pre>

      {/* Multiple Shadows */}
      <h2 className="text-2xl font-bold">Multiple Shadows</h2>
      <p className="leading-relaxed">
        You can add multiple shadows separated by commas:
      </p>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`/* Red and Blue neon glow */
h1 {
  text-shadow: 0 0 3px #ff0000, 0 0 5px #0000ff;
}

/* White text with black, blue, and red neon glow */
h1 {
  color: white;
  text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px red;
}`}
      </pre>
    </div>
  );
};

export default CssTextShadow;
