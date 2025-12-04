import React from "react";

const CssBorderWidth: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Border Width
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <code>border-width</code> property specifies the width of an element's borders.
        You can use a specific size (px, pt, cm, em, etc.) or one of the predefined values: <b>thin, medium, thick</b>.
      </p>

      {/* Examples */}
      <h2 className="text-2xl font-bold">Border Width Examples</h2>
      <div className="space-y-4">
        <div className="border border-solid border-5 p-4">5px border-width</div>
        <div className="border border-solid border-4 p-4">medium border-width</div>
        <div className="border border-dotted border-2 p-4">2px border-width</div>
        <div className="border border-dotted border-8 p-4">thick border-width</div>
      </div>

      {/* Specific Side Widths */}
      <h2 className="text-2xl font-bold">Specific Side Widths</h2>
      <p className="leading-relaxed">
        You can define border width for specific sides (top, right, bottom, left) using 1 to 4 values.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`p.one {
  border-style: solid;
  border-width: 5px 20px; /* 5px top & bottom, 20px left & right */
}

p.two {
  border-style: solid;
  border-width: 20px 5px; /* 20px top & bottom, 5px left & right */
}

p.three {
  border-style: solid;
  border-width: 25px 10px 4px 35px; /* top, right, bottom, left */
}`}
      </pre>

      <p className="leading-relaxed">
        Using multiple values allows precise control over each side's border width.
      </p>
    </div>
  );
};

export default CssBorderWidth;
