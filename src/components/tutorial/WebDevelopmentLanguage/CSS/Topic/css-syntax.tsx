import React from "react";

const CssSyntax: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">CSS Syntax</h1>

      {/* Intro */}
      <p className="leading-relaxed">
        A CSS rule consists of a <strong>selector</strong> and a{" "}
        <strong>declaration block</strong>. The selector targets the HTML
        element you want to style, while the declaration block contains one or
        more property-value pairs that define how the element should look.
      </p>

      {/* CSS Syntax Breakdown */}
      <h2 className="text-2xl font-bold">CSS Selector</h2>
      <p className="leading-relaxed">
        The selector specifies which HTML element the CSS rule applies to.
      </p>

      <h2 className="text-2xl font-bold">Declaration Block</h2>
      <ul className="list-disc list-inside space-y-1 leading-relaxed">
        <li>
          Contains one or more declarations, each ending with a semicolon
        </li>
        <li>
          Each declaration includes a <strong>property</strong> and a{" "}
          <strong>value</strong> separated by a colon
        </li>
        <li>
          The entire declaration block is wrapped inside{" "}
          <strong>curly braces {`{ }`}</strong>
        </li>
      </ul>

      {/* Example Section */}
      <h2 className="text-2xl font-bold">Example</h2>
      <p className="leading-relaxed">
        In this example, all <code>&lt;p&gt;</code> elements will be
        center-aligned with a red text color:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`p {
  color: red;
  text-align: center;
}`}</pre>
    </div>
  );
};

export default CssSyntax;
