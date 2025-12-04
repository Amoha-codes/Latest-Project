import React from "react";

const CssBoxModel: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Box Model
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        In CSS, the term <b>box model</b> is used when talking about web design and layout.
        Every HTML element is considered as a box that consists of <b>content, padding, borders, and margins</b>.
      </p>

      {/* Box Model Explanation */}
      <h2 className="text-2xl font-bold">Parts of the Box Model</h2>
      <ul className="list-disc ml-5 leading-relaxed">
        <li><b>Content</b> - The inner part where text and images appear</li>
        <li><b>Padding</b> - Clears space around the content (transparent)</li>
        <li><b>Border</b> - Surrounds the padding and content</li>
        <li><b>Margin</b> - Clears space outside the border (transparent)</li>
      </ul>

      <p className="leading-relaxed">
        The box model allows you to add borders around elements and define space between elements.
      </p>

      {/* Box Model Example */}
      <h2 className="text-2xl font-bold">Example</h2>
      <p className="leading-relaxed">
        The following CSS demonstrates a div element with padding, border, and margin:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`div {
  width: 300px;
  border: 15px solid green;
  padding: 50px;
  margin: 20px;
}`}
      </pre>

      {/* Width and Height */}
      <h2 className="text-2xl font-bold">Width and Height of an Element</h2>
      <p className="leading-relaxed">
        When setting <code>width</code> and <code>height</code>, only the content area is affected.
        The total size of the element includes padding and borders.
      </p>

      <p className="leading-relaxed">
        Example: This div has a total width of 350px and total height of 80px:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`div {
  width: 320px;
  height: 50px;
  padding: 10px;
  border: 5px solid gray;
  margin: 0;
}`}
      </pre>
    </div>
  );
};

export default CssBoxModel;
