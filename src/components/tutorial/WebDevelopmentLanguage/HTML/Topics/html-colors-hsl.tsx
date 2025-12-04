import React from "react";

const HtmlHslHslaColors: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        HTML HSL and HSLA Colors
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        <strong>HSL</strong> stands for <strong>Hue</strong>, <strong>Saturation</strong>, and <strong>Lightness</strong>.
        <strong>HSLA</strong> adds an <strong>Alpha channel</strong> for opacity control.
      </p>

      {/* HSL Values Explanation */}
      <h2 className="text-2xl font-bold">HSL Color Values</h2>
      <p className="leading-relaxed">
        In HTML, colors can be defined using the <code>hsl()</code> function:
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-xl overflow-x-auto">
        hsl(hue, saturation, lightness)
      </pre>
      <p className="leading-relaxed">
        <strong>Hue:</strong> 0-360 (0=red, 120=green, 240=blue) <br />
        <strong>Saturation:</strong> 0%-100% (0% = gray, 100% = full color) <br />
        <strong>Lightness:</strong> 0%-100% (0% = black, 100% = white)
      </p>

      {/* HSL Examples */}
      <h3 className="text-xl font-semibold">Examples</h3>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="p-4 text-white rounded-xl" style={{ backgroundColor: "hsl(0, 100%, 50%)" }}>
          hsl(0, 100%, 50%)
        </div>
        <div className="p-4 text-white rounded-xl" style={{ backgroundColor: "hsl(240, 100%, 50%)" }}>
          hsl(240, 100%, 50%)
        </div>
        <div className="p-4 text-white rounded-xl" style={{ backgroundColor: "hsl(147, 50%, 47%)" }}>
          hsl(147, 50%, 47%)
        </div>
        <div className="p-4 text-white rounded-xl" style={{ backgroundColor: "hsl(300, 76%, 72%)" }}>
          hsl(300, 76%, 72%)
        </div>
        <div className="p-4 text-white rounded-xl" style={{ backgroundColor: "hsl(39, 100%, 50%)" }}>
          hsl(39, 100%, 50%)
        </div>
        <div className="p-4 text-white rounded-xl" style={{ backgroundColor: "hsl(248, 53%, 58%)" }}>
          hsl(248, 53%, 58%)
        </div>
      </div>

      {/* Saturation Explanation */}
      <h2 className="text-2xl font-bold">Saturation Levels</h2>
      <p className="leading-relaxed">
        Saturation determines color intensity: <br />
        100% = full color, 50% = 50% gray, 0% = completely gray
      </p>

      {/* Saturation Examples */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="p-4 text-white rounded-xl" style={{ backgroundColor: "hsl(0, 100%, 50%)" }}>
          hsl(0, 100%, 50%)
        </div>
        <div className="p-4 text-white rounded-xl" style={{ backgroundColor: "hsl(0, 80%, 50%)" }}>
          hsl(0, 80%, 50%)
        </div>
        <div className="p-4 text-white rounded-xl" style={{ backgroundColor: "hsl(0, 60%, 50%)" }}>
          hsl(0, 60%, 50%)
        </div>
        <div className="p-4 text-white rounded-xl" style={{ backgroundColor: "hsl(0, 40%, 50%)" }}>
          hsl(0, 40%, 50%)
        </div>
        <div className="p-4 text-white rounded-xl" style={{ backgroundColor: "hsl(0, 20%, 50%)" }}>
          hsl(0, 20%, 50%)
        </div>
        <div className="p-4 text-white rounded-xl" style={{ backgroundColor: "hsl(0, 0%, 50%)" }}>
          hsl(0, 0%, 50%)
        </div>
      </div>

      {/* Note */}
      <div className="bg-purple-100 border-l-4 border-purple-500 p-4 rounded-xl">
        <p className="leading-relaxed">
          ✅ Use HSL for intuitive color adjustments — hue, saturation, and lightness are easy to tweak dynamically.
        </p>
      </div>
    </div>
  );
};

export default HtmlHslHslaColors;
