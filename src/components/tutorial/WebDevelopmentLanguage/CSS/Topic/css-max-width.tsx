import React from "react";

const CssMaxWidth: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS The max-width Property
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <code>max-width</code> property defines the maximum width of an
        element. It prevents the element from becoming wider than the specified
        value. The element can still be smaller, but never larger.
      </p>

      <p className="leading-relaxed">
        This property is especially useful in responsive web design, ensuring
        content stays readable on different screen sizes.
      </p>

      {/* Problem with width */}
      <h2 className="text-2xl font-bold">Problem with width</h2>
      <p className="leading-relaxed">
        Below is a horizontally centered <code>&lt;div&gt;</code> element with
        a fixed width of <b>600px</b>.
      </p>

      <p className="leading-relaxed">
        If the browser window becomes smaller than the element, the content may
        overflow, and a horizontal scrollbar may appear.
      </p>

      {/* Using max-width */}
      <h2 className="text-2xl font-bold">Using max-width instead</h2>
      <p className="leading-relaxed">
        Using <code>max-width</code> allows the element to shrink if needed.
        This makes layouts more flexible and prevents overflow issues.
      </p>

      <p className="leading-relaxed">
        <b>Tip:</b> Resize the browser window to less than 600px to see the
        difference between <code>width</code> and <code>max-width</code>.
      </p>

      {/* Code Example */}
      <h2 className="text-2xl font-bold">Example CSS</h2>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`div.ex1 {
  width: 500px;
  margin: auto;
  border: 3px solid #73AD21;
}

div.ex2 {
  max-width: 500px;
  margin: auto;
  border: 3px solid #73AD21;
}`}
      </pre>

    </div>
  );
};

export default CssMaxWidth;
