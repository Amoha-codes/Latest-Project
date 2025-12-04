import React from "react";

const CssTextAlignment: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Text Alignment
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        CSS provides properties for aligning and controlling the direction of text.
        In this chapter, you will learn about <code>text-align</code>, <code>text-align-last</code>, 
        <code>vertical-align</code>, <code>direction</code>, and <code>unicode-bidi</code>.
      </p>

      {/* Text Alignment */}
      <h2 className="text-2xl font-bold">Text Alignment</h2>
      <p className="leading-relaxed">
        The <code>text-align</code> property sets the horizontal alignment of text. Possible values:
        <b> left</b>, <b>right</b>, <b>center</b>, <b>justify</b>.
      </p>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`h1 { text-align: center; }
h2 { text-align: left; }
h3 { text-align: right; }
div { text-align: justify; }`}
      </pre>

      {/* Text Align Last */}
      <h2 className="text-2xl font-bold">Text Align Last</h2>
      <p className="leading-relaxed">
        The <code>text-align-last</code> property specifies how the last line of a text block is aligned.
      </p>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`p.a { text-align-last: right; }
p.b { text-align-last: center; }
p.c { text-align-last: justify; }`}
      </pre>

      {/* Vertical Alignment */}
      <h2 className="text-2xl font-bold">Vertical Alignment</h2>
      <p className="leading-relaxed">
        The <code>vertical-align</code> property sets the vertical alignment of inline elements like images or text:
        baseline, top, bottom, middle, sub, super, text-top, text-bottom, or a specific length/percentage.
      </p>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`img.a { vertical-align: baseline; }
img.b { vertical-align: text-top; }
img.c { vertical-align: text-bottom; }
img.d { vertical-align: sub; }
img.e { vertical-align: super; }`}
      </pre>

      {/* Text Direction */}
      <h2 className="text-2xl font-bold">Text Direction</h2>
      <p className="leading-relaxed">
        The <code>direction</code> property specifies text direction: <code>ltr</code> (left-to-right) or <code>rtl</code> (right-to-left). 
        Use <code>unicode-bidi</code> to control how the text is overridden for multiple languages.
      </p>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`p {
  direction: rtl;
  unicode-bidi: bidi-override;
}`}
      </pre>
    </div>
  );
};

export default CssTextAlignment;
