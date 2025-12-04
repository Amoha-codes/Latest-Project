import React from "react";

const CssHome: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">CSS Tutorial</h1>

      {/* Intro */}
      <p className="leading-relaxed">
        CSS is the language we use to style an HTML document. It describes how
        HTML elements should be displayed on the screen, paper, or in other
        media. This tutorial will teach you CSS from basic to advanced concepts.
      </p>

      <p className="leading-relaxed font-semibold">
        🏁 Tip: Sign in to track your progress — it's free!
      </p>

      {/* Examples Section */}
      <h2 className="text-2xl font-bold">Examples in Each Chapter</h2>
      <p className="leading-relaxed">
        This CSS tutorial contains over 700 examples. With our online editor,
        you can edit the CSS code and click a button to see the result.
      </p>

      {/* CSS Example */}
      <h2 className="text-2xl font-bold">CSS Example</h2>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`body {
  background-color: lightblue;
}

h1 {
  color: white;
  text-align: center;
}

p {
  font-family: verdana;
  font-size: 20px;
}`}
      </pre>

      <p className="leading-relaxed">
        The example above shows how CSS can style a webpage by changing the
        background color, text color, alignment, and font properties.
      </p>
    </div>
  );
};

export default CssHome;
