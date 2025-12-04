import React from "react";

const HtmlHexColors: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        HTML HEX Colors
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        A <strong>hexadecimal (HEX)</strong> color in HTML is written as:
        <code> #RRGGBB</code> — where
        <strong> RR</strong>, <strong>GG</strong>, and <strong>BB</strong> represent
        the intensity of <strong>Red</strong>, <strong>Green</strong>, and{" "}
        <strong>Blue</strong> in hexadecimal values.
      </p>

      {/* HEX Format */}
      <h2 className="text-2xl font-bold">HEX Color Values</h2>
      <p className="leading-relaxed">
        HEX colors are specified using the format:
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-xl overflow-x-auto">
        #rrggbb
      </pre>
      <p className="leading-relaxed">
        Each pair ranges from <strong>00</strong> to <strong>ff</strong>,
        which equals <strong>0 to 255</strong> in decimal.
      </p>

      {/* Explanation Examples */}
      <ul className="list-disc ml-6 leading-relaxed">
        <li>
          <code>#ff0000</code> → Highest red, no green/blue → <strong>Red</strong>
        </li>
        <li>
          <code>#00ff00</code> → Highest green → <strong>Green</strong>
        </li>
        <li>
          <code>#000000</code> → All zeros → <strong>Black</strong>
        </li>
        <li>
          <code>#ffffff</code> → All max values → <strong>White</strong>
        </li>
      </ul>

      {/* Color Examples Grid */}
      <h3 className="text-xl font-semibold">Examples</h3>
      <div className="grid md:grid-cols-3 gap-4">
        <div
          className="p-4 text-white rounded-xl"
          style={{ backgroundColor: "#ff0000" }}
        >
          #ff0000
        </div>
        <div
          className="p-4 text-white rounded-xl"
          style={{ backgroundColor: "#0000ff" }}
        >
          #0000ff
        </div>
        <div
          className="p-4 text-white rounded-xl"
          style={{ backgroundColor: "#3cb371" }}
        >
          #3cb371
        </div>
        <div
          className="p-4 text-white rounded-xl"
          style={{ backgroundColor: "#ee82ee" }}
        >
          #ee82ee
        </div>
        <div
          className="p-4 text-white rounded-xl"
          style={{ backgroundColor: "#ffa500" }}
        >
          #ffa500
        </div>
        <div
          className="p-4 text-white rounded-xl"
          style={{ backgroundColor: "#6a5acd" }}
        >
          #6a5acd
        </div>
      </div>

      {/* HEX Color Breakdown */}
      <h2 className="text-2xl font-bold">HEX Breakdown Example</h2>
      <p className="leading-relaxed">
        Example: <strong>#ff6347</strong>
      </p>

      <div className="grid md:grid-cols-3 gap-4 text-center">
        <div className="p-4 border rounded-xl">
          <h4 className="font-semibold text-red-600">RED</h4>
          <p className="text-lg font-bold">ff</p>
        </div>
        <div className="p-4 border rounded-xl">
          <h4 className="font-semibold text-green-600">GREEN</h4>
          <p className="text-lg font-bold">63</p>
        </div>
        <div className="p-4 border rounded-xl">
          <h4 className="font-semibold text-blue-600">BLUE</h4>
          <p className="text-lg font-bold">47</p>
        </div>
      </div>

      {/* Note */}
      <div className="bg-blue-100 border-l-4 border-blue-500 p-4 rounded-xl">
        <p className="leading-relaxed">
          ✅ HEX colors are widely used in web design because they are short,
          clean, and universally supported in HTML and CSS.
        </p>
      </div>
    </div>
  );
};

export default HtmlHexColors;
