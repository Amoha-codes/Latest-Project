import React from "react";

const CssTextSpacing: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Text Spacing
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        CSS provides several properties to control spacing within text blocks. 
        These include <code>text-indent</code>, <code>letter-spacing</code>, 
        <code>line-height</code>, <code>word-spacing</code>, and <code>white-space</code>.
      </p>

      {/* Text Indentation */}
      <h2 className="text-2xl font-bold">Text Indentation</h2>
      <p className="leading-relaxed">
        The <code>text-indent</code> property sets the indentation of the first line in a text block. Negative values move the text to the left.
      </p>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`p {
  text-indent: 50px;
}`}
      </pre>

      {/* Letter Spacing */}
      <h2 className="text-2xl font-bold">Letter Spacing</h2>
      <p className="leading-relaxed">
        The <code>letter-spacing</code> property controls the space between characters.
      </p>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`h1 {
  letter-spacing: 5px;
}

h2 {
  letter-spacing: -2px;
}`}
      </pre>

      {/* Line Height */}
      <h2 className="text-2xl font-bold">Line Height</h2>
      <p className="leading-relaxed">
        The <code>line-height</code> property specifies the vertical spacing between lines. Negative values are not allowed.
      </p>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`p.small {
  line-height: 0.8;
}

p.big {
  line-height: 1.8;
}`}
      </pre>

      {/* Word Spacing */}
      <h2 className="text-2xl font-bold">Word Spacing</h2>
      <p className="leading-relaxed">
        The <code>word-spacing</code> property controls the space between words. Negative values are allowed.
      </p>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`p.one {
  word-spacing: 10px;
}

p.two {
  word-spacing: -2px;
}`}
      </pre>

      {/* White Space */}
      <h2 className="text-2xl font-bold">White Space</h2>
      <p className="leading-relaxed">
        The <code>white-space</code> property controls how whitespace inside an element is handled.
      </p>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`p {
  white-space: nowrap;
}`}
      </pre>
    </div>
  );
};

export default CssTextSpacing;
