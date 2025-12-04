import React from "react";

const CssOutline: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Outline
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        An <b>outline</b> is a line drawn around an element, <b>outside its border</b>.
        Unlike borders, outlines do not affect the element's dimensions and may overlap other content.
      </p>

      <p className="leading-relaxed">
        CSS has the following outline properties:
      </p>
      <ul className="list-disc ml-5 leading-relaxed">
        <li><code>outline-style</code> - Specifies the style of the outline</li>
        <li><code>outline-color</code> - Specifies the color of the outline</li>
        <li><code>outline-width</code> - Specifies the width of the outline</li>
        <li><code>outline-offset</code> - Adds space between the outline and the element's border</li>
        <li><code>outline</code> - Shorthand property for all outline properties</li>
      </ul>

      {/* Outline Style */}
      <h2 className="text-2xl font-bold">CSS <code>outline-style</code> Property</h2>
      <p className="leading-relaxed">
        The <code>outline-style</code> property specifies the style of the outline. Possible values:
      </p>
      <ul className="list-disc ml-5 leading-relaxed">
        <li>dotted</li>
        <li>dashed</li>
        <li>solid</li>
        <li>double</li>
        <li>groove</li>
        <li>ridge</li>
        <li>inset</li>
        <li>outset</li>
        <li>none</li>
        <li>hidden</li>
      </ul>

      {/* Example */}
      <h2 className="text-2xl font-bold">Example</h2>
      <p className="leading-relaxed">
        Demonstration of different outline styles:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`p.dotted   { outline-style: dotted; }
p.dashed   { outline-style: dashed; }
p.solid    { outline-style: solid; }
p.double   { outline-style: double; }
p.groove   { outline-style: groove; }
p.ridge    { outline-style: ridge; }
p.inset    { outline-style: inset; }
p.outset   { outline-style: outset; }`}
      </pre>

      <p className="leading-relaxed">
        Each value produces a different outline effect. Note that some styles (like groove, ridge, inset, outset) depend on the outline color to show the 3D effect.
      </p>
    </div>
  );
};

export default CssOutline;
