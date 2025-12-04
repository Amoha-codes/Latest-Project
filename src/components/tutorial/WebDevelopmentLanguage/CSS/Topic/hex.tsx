import React from "react";

const CssHexColors: React.FC = () => {
  const hexExamples = [
    "#ff0000",
    "#0000ff",
    "#3cb371",
    "#ee82ee",
    "#ffa500",
    "#6a5acd",
  ];

  const grayShades = [
    "#3c3c3c",
    "#616161",
    "#787878",
    "#b4b4b4",
    "#f0f0f0",
    "#f9f9f9",
  ];

  const threeDigitExamples = [
    "#fc9", // #ffcc99
    "#f0f", // #ff00ff
    "#b58", // #bb5588
  ];

  return (

        <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">CSS  HEX Colors</h1>


      <p className="text-base">
        HEX colors use <b>hexadecimal values</b> to define red, green, and blue
        color components.
      </p>

      <h2 className="text-2xl font-semibold">HEX Value</h2>
      <p className="text-base">
        A HEX color is written in the form:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`#rrggbb`}
      </pre>

      <p className="text-base">
        Each pair (rr, gg, bb) is a value from <b>00 to ff</b>  
        (0–255 in decimal).
        <br /><br />
        Example:  
        <code>#ff0000</code> = red  
        <br />
        <code>#000000</code> = black  
        <br />
        <code>#ffffff</code> = white
      </p>

      <h3 className="text-xl font-semibold">HEX Examples</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {hexExamples.map((color) => (
          <div
            key={color}
            className="p-4 rounded text-center text-sm font-medium"
            style={{ backgroundColor: color }}
          >
            {color}
          </div>
        ))}
      </div>

      {/* Shades of Gray */}
      <h2 className="text-2xl font-semibold">Shades of Gray</h2>
      <p className="text-base">
        Gray colors use equal values for red, green, and blue.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {grayShades.map((color) => (
          <div
            key={color}
            className="p-4 rounded text-center text-sm font-medium"
            style={{ backgroundColor: color }}
          >
            {color}
          </div>
        ))}
      </div>

      {/* 3-Digit HEX */}
      <h2 className="text-2xl font-semibold">3-Digit HEX Value</h2>

      <p className="text-base">
        The 3-digit HEX format is a shorthand for the 6-digit version.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`#rgb`}
      </pre>

      <p className="text-base">
        Example:  
        <br />
        <code>#ff00cc → #f0c</code> (because RR = ff → f, GG = 00 → 0, BB = cc → c)
      </p>

      <h3 className="text-xl font-semibold">3-Digit HEX Examples</h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {threeDigitExamples.map((color) => (
          <div
            key={color}
            className="p-4 rounded text-center text-sm font-medium"
            style={{ backgroundColor: color }}
          >
            {color}
          </div>
        ))}
      </div>

      {/* Code Example */}
      <h3 className="text-xl font-semibold">Example Code</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`body {
  background-color: #fc9; /* same as #ffcc99 */
}

h1 {
  color: #f0f; /* same as #ff00ff */
}

p {
  color: #b58; /* same as #bb5588 */
}`}
      </pre>
    </div>
  );
};

export default CssHexColors;
