import React from "react";

const CssRgbColors: React.FC = () => {
  const rgbExamples = [
    "rgb(255, 0, 0)",
    "rgb(0, 0, 255)",
    "rgb(60, 179, 113)",
    "rgb(238, 130, 238)",
    "rgb(255, 165, 0)",
    "rgb(106, 90, 205)",
  ];

  const grayShades = [
    "rgb(60, 60, 60)",
    "rgb(90, 90, 90)",
    "rgb(120, 120, 120)",
    "rgb(180, 180, 180)",
    "rgb(210, 210, 210)",
    "rgb(240, 240, 240)",
  ];

  const rgbaExamples = [
    "rgba(255, 99, 71, 0)",
    "rgba(255, 99, 71, 0.2)",
    "rgba(255, 99, 71, 0.4)",
    "rgba(255, 99, 71, 0.6)",
    "rgba(255, 99, 71, 0.8)",
    "rgba(255, 99, 71, 1)",
  ];

  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">CSS RGB Colors</h1>


      <p className="text-base">
        RGB color values represent red, green, and blue light sources. Each value
        ranges from <b>0 to 255</b>.
      </p>

      <h2 className="text-2xl font-semibold">RGB Value</h2>
      <p className="text-base">
        An RGB color is specified using the formula:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`rgb(red, green, blue)`}
      </pre>

      <p className="text-base">
        Example: <code>rgb(255, 0, 0)</code> is pure red.  
        <br />  
        <code>rgb(0, 0, 0)</code> is black,  
        <br />  
        <code>rgb(255, 255, 255)</code> is white.
      </p>

      <h3 className="text-xl font-semibold">RGB Examples</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {rgbExamples.map((color) => (
          <div
            key={color}
            className="p-4 rounded text-center text-sm font-medium"
            style={{ backgroundColor: color }}
          >
            {color}
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold">Shades of Gray</h2>
      <p className="text-base">
        Gray colors are formed by using equal values for red, green, and blue.
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

      <h2 className="text-2xl font-semibold">RGBA Value</h2>
      <p className="text-base">
        RGBA adds an <b>alpha</b> parameter that defines transparency.  
        <br />
        Alpha ranges from <b>0.0</b> (fully transparent) to <b>1.0</b> (fully opaque).
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`rgba(red, green, blue, alpha)`}
      </pre>

      <h3 className="text-xl font-semibold">RGBA Examples</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {rgbaExamples.map((color) => (
          <div
            key={color}
            className="p-4 rounded text-center text-sm font-medium"
            style={{ backgroundColor: color }}
          >
            {color}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CssRgbColors;
