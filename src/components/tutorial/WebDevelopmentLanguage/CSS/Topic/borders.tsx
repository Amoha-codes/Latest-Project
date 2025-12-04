import React from "react";

const CssBorders: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Borders
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The CSS <code>border</code> properties allow you to specify the{" "}
        <b>style, width, and color</b> of an element's border.
      </p>

      {/* Examples Section */}
      <h2 className="text-2xl font-bold">Border Examples</h2>
      <div className="space-y-4">
        <div className="border p-4">I have borders on all sides.</div>
        <div className="border-b-4 border-red-500 p-4">
          I have a red, bottom border.
        </div>
        <div className="border rounded-lg p-4">I have rounded borders.</div>
        <div className="border-l-4 border-blue-500 p-4">I have a blue, left border.</div>
      </div>

      {/* Border Styles */}
      <h2 className="text-2xl font-bold">Border Styles</h2>
      <p className="leading-relaxed">
        The <code>border-style</code> property specifies what kind of border to display.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`p.dotted { border-style: dotted; }
p.dashed { border-style: dashed; }
p.solid { border-style: solid; }
p.double { border-style: double; }
p.groove { border-style: groove; }
p.ridge { border-style: ridge; }
p.inset { border-style: inset; }
p.outset { border-style: outset; }
p.none { border-style: none; }
p.hidden { border-style: hidden; }
p.mix { border-style: dotted dashed solid double; }`}
      </pre>

      <p className="leading-relaxed">
        The above demonstrates <b>dotted, dashed, solid, double, groove, ridge, inset, outset, none, hidden,</b> and <b>mixed</b> border styles.
      </p>
    </div>
  );
};

export default CssBorders;
