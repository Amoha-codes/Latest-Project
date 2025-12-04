import React from "react";

const CssHslColors: React.FC = () => {
  const hslExamples = [
    "hsl(0, 100%, 50%)",
    "hsl(240, 100%, 50%)",
    "hsl(147, 50%, 47%)",
    "hsl(300, 76%, 72%)",
    "hsl(39, 100%, 50%)",
    "hsl(248, 53%, 58%)",
  ];

  const saturationExamples = [
    "hsl(0, 100%, 50%)",
    "hsl(0, 80%, 50%)",
    "hsl(0, 60%, 50%)",
    "hsl(0, 40%, 50%)",
    "hsl(0, 20%, 50%)",
    "hsl(0, 0%, 50%)",
  ];

  const lightnessExamples = [
    "hsl(0, 100%, 0%)",
    "hsl(0, 100%, 25%)",
    "hsl(0, 100%, 50%)",
    "hsl(0, 100%, 75%)",
    "hsl(0, 100%, 90%)",
    "hsl(0, 100%, 100%)",
  ];

  const grayShades = [
    "hsl(0, 0%, 0%)",
    "hsl(0, 0%, 24%)",
    "hsl(0, 0%, 47%)",
    "hsl(0, 0%, 71%)",
    "hsl(0, 0%, 94%)",
    "hsl(0, 0%, 100%)",
  ];

  const hslaExamples = [
    "hsla(9, 100%, 64%, 0)",
    "hsla(9, 100%, 64%, 0.2)",
    "hsla(9, 100%, 64%, 0.4)",
    "hsla(9, 100%, 64%, 0.6)",
    "hsla(9, 100%, 64%, 0.8)",
    "hsla(9, 100%, 64%, 1)",
  ];

  return (

           <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">CSS HSL Colors</h1>


      <p className="text-base">
        HSL stands for <b>Hue</b>, <b>Saturation</b>, and <b>Lightness</b>.  
        It is a more human-friendly way to represent colors.
      </p>

      <h2 className="text-2xl font-semibold">HSL Value</h2>
      <p className="text-base">Colors in HSL use the format:</p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`hsl(hue, saturation, lightness)`}
      </pre>

      <p className="text-base">
        <b>Hue</b>: 0–360 (0 = red, 120 = green, 240 = blue) <br />
        <b>Saturation</b>: 0% (gray) → 100% (full color) <br />
        <b>Lightness</b>: 0% (black) → 50% (normal) → 100% (white)
      </p>

      <h3 className="text-xl font-semibold">HSL Examples</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {hslExamples.map((color) => (
          <div
            key={color}
            className="p-4 rounded text-center text-sm font-medium"
            style={{ backgroundColor: color }}
          >
            {color}
          </div>
        ))}
      </div>

      {/* Saturation */}
      <h2 className="text-2xl font-semibold">Saturation</h2>
      <p className="text-base">
        Saturation describes the intensity of a color.  
        <br />
        100% = pure color, 0% = gray.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {saturationExamples.map((color) => (
          <div
            key={color}
            className="p-4 rounded text-center text-sm font-medium"
            style={{ backgroundColor: color }}
          >
            {color}
          </div>
        ))}
      </div>

      {/* Lightness */}
      <h2 className="text-2xl font-semibold">Lightness</h2>
      <p className="text-base">
        Lightness represents how much light is in the color.  
        <br />
        0% = black, 50% = normal, 100% = white.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {lightnessExamples.map((color) => (
          <div
            key={color}
            className="p-4 rounded text-center text-sm font-medium"
            style={{ backgroundColor: color }}
          >
            {color}
          </div>
        ))}
      </div>

      {/* Gray Shades */}
      <h2 className="text-2xl font-semibold">Shades of Gray</h2>
      <p className="text-base">
        Gray shades are formed when <b>hue = 0</b> and <b>saturation = 0%</b>.
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

      {/* HSLA */}
      <h2 className="text-2xl font-semibold">HSLA Value</h2>
      <p className="text-base">
        HSLA adds an <b>alpha</b> value (0.0 to 1.0) for transparency.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`hsla(hue, saturation, lightness, alpha)`}
      </pre>

      <h3 className="text-xl font-semibold">HSLA Examples</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {hslaExamples.map((color) => (
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

export default CssHslColors;
