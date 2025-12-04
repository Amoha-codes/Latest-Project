import React from "react";

const CssColors: React.FC = () => {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-3xl font-bold">CSS Colors</h1>

      <p className="text-base">
        In CSS, colors can be defined using predefined color names, RGB, HEX,
        HSL, RGBA, or HSLA values.
      </p>

      <h2 className="text-2xl font-semibold">CSS Color Names</h2>
      <p className="text-base">
        CSS provides 140 standard color names. Some examples include:
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          "Tomato",
          "Orange",
          "DodgerBlue",
          "MediumSeaGreen",
          "Gray",
          "SlateBlue",
          "Violet",
          "LightGray",
        ].map((color) => (
          <div
            key={color}
            className="p-3 text-center rounded"
            style={{ backgroundColor: color }}
          >
            {color}
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold">CSS Background Color</h2>
      <p className="text-base">You can set the background color of elements:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<h1 style="background-color:DodgerBlue;">Hello World</h1>
<p style="background-color:Tomato;">Lorem ipsum...</p>`}
      </pre>

      <h2 className="text-2xl font-semibold">CSS Text Color</h2>
      <p className="text-base">You can set text color using color names:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<h1 style="color:Tomato;">Hello World</h1>
<p style="color:DodgerBlue;">Lorem ipsum...</p>
<p style="color:MediumSeaGreen;">Ut wisi enim...</p>`}
      </pre>

      <h2 className="text-2xl font-semibold">CSS Border Color</h2>
      <p className="text-base">You can also change the border color:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<h1 style="border:2px solid Tomato;">Hello World</h1>
<h1 style="border:2px solid DodgerBlue;">Hello World</h1>
<h1 style="border:2px solid Violet;">Hello World</h1>`}
      </pre>

      <h2 className="text-2xl font-semibold">CSS Color Values</h2>
      <p className="text-base">
        Colors can be defined using RGB, HEX, HSL, RGBA, or HSLA values.
      </p>

      <div className="space-y-2">
        <p>Same as color name <b>"Tomato"</b>:</p>
        <ul className="list-disc ml-6 space-y-1">
          <li>rgb(255, 99, 71)</li>
          <li>#ff6347</li>
          <li>hsl(9, 100%, 64%)</li>
        </ul>

        <p>Same color but 50% transparent:</p>
        <ul className="list-disc ml-6 space-y-1">
          <li>rgba(255, 99, 71, 0.5)</li>
          <li>hsla(9, 100%, 64%, 0.5)</li>
        </ul>
      </div>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<h1 style="background-color:rgb(255, 99, 71);">...</h1>
<h1 style="background-color:#ff6347;">...</h1>
<h1 style="background-color:hsl(9, 100%, 64%);">...</h1>

<h1 style="background-color:rgba(255, 99, 71, 0.5);">...</h1>
<h1 style="background-color:hsla(9, 100%, 64%, 0.5);">...</h1>`}
      </pre>
    </div>
  );
};

export default CssColors;
