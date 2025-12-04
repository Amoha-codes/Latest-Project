import React from "react";

const CssTextTransform: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Text Transformation
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <code>text-transform</code> property is used to control the capitalization of text in an element. 
        You can change text to <b>uppercase</b>, <b>lowercase</b>, or <b>capitalize</b> the first letter of each word, 
        without modifying the HTML content itself.
      </p>

      {/* Text Transform Examples */}
      <h2 className="text-2xl font-bold">Examples</h2>
      <p className="leading-relaxed">
        Demonstration of the <code>text-transform</code> property:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`p.uppercase { text-transform: uppercase; }
p.lowercase { text-transform: lowercase; }
p.capitalize { text-transform: capitalize; }`}
      </pre>

      {/* Result Description */}
      <p className="leading-relaxed">
        <span className="uppercase">This text will appear in UPPERCASE.</span><br />
        <span className="lowercase">THIS TEXT WILL APPEAR IN lowercase.</span><br />
        <span className="capitalize">this text will Capitalize Each Word.</span>
      </p>
    </div>
  );
};

export default CssTextTransform;
