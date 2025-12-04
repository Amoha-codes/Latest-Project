import React from "react";

const HtmlRgbRgbaColors: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        HTML RGB and RGBA Colors
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        RGB represents colors using the amount of <strong>Red</strong>, <strong>Green</strong>,
        and <strong>Blue</strong> light. RGBA is an extension of RGB that includes an
        <strong> Alpha channel</strong> to control transparency.
      </p>

      {/* RGB Values Explanation */}
      <h2 className="text-2xl font-bold">RGB Color Values</h2>
      <p className="leading-relaxed">
        In HTML, colors can be defined using the <code>rgb()</code> function:
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-xl overflow-x-auto">
        rgb(red, green, blue)
      </pre>
      <p className="leading-relaxed">
        Each value ranges from <strong>0 to 255</strong>, meaning there are
        <strong> 16,777,216</strong> possible color combinations!
      </p>

      {/* RGB Examples */}
      <h3 className="text-xl font-semibold">Examples</h3>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="p-4 text-white rounded-xl" style={{ backgroundColor: "rgb(255, 0, 0)" }}>
          rgb(255, 0, 0)
        </div>
        <div className="p-4 text-white rounded-xl" style={{ backgroundColor: "rgb(0, 0, 255)" }}>
          rgb(0, 0, 255)
        </div>
        <div className="p-4 text-white rounded-xl" style={{ backgroundColor: "rgb(60, 179, 113)" }}>
          rgb(60, 179, 113)
        </div>
        <div className="p-4 text-white rounded-xl" style={{ backgroundColor: "rgb(238, 130, 238)" }}>
          rgb(238, 130, 238)
        </div>
        <div className="p-4 text-white rounded-xl" style={{ backgroundColor: "rgb(255, 165, 0)" }}>
          rgb(255, 165, 0)
        </div>
        <div className="p-4 text-white rounded-xl" style={{ backgroundColor: "rgb(106, 90, 205)" }}>
          rgb(106, 90, 205)
        </div>
      </div>

      {/* RGBA Explanation */}
      <h2 className="text-2xl font-bold">RGBA Color Values</h2>
      <p className="leading-relaxed">
        RGBA is similar to RGB, but includes an <strong>alpha</strong> parameter for
        transparency:
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-xl overflow-x-auto">
        rgba(red, green, blue, alpha)
      </pre>
      <p className="leading-relaxed">
        The alpha value ranges from <strong>0.0</strong> (fully transparent) to
        <strong> 1.0</strong> (fully opaque).
      </p>

      {/* RGBA Examples */}
      <h3 className="text-xl font-semibold">Examples</h3>
      <div className="grid md:grid-cols-2 gap-4">
        <div
          className="p-4 text-white rounded-xl"
          style={{ backgroundColor: "rgba(255, 99, 71, 1)" }}
        >
          rgba(255, 99, 71, 1)
        </div>
        <div
          className="p-4 text-white rounded-xl"
          style={{ backgroundColor: "rgba(255, 99, 71, 0.5)" }}
        >
          rgba(255, 99, 71, 0.5)
        </div>
      </div>

      {/* Note */}
      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-xl">
        <p className="leading-relaxed">
          ✅ Higher RGB values produce brighter colors — lower values make them darker.
        </p>
      </div>
    </div>
  );
};

export default HtmlRgbRgbaColors;