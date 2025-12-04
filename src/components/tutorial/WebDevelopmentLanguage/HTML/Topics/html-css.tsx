import React from "react";

const HtmlCssStyles: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        HTML Styles - CSS
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        <strong>CSS</strong> stands for <strong>Cascading Style Sheets</strong> and is used to control the layout and appearance of multiple web pages at once.
        It can style text, colors, boxes, backgrounds, and more.
      </p>

      {/* What is CSS */}
      <h2 className="text-2xl font-bold">What is CSS?</h2>
      <p className="leading-relaxed">
        CSS controls the color, font, size, spacing, positioning, and layout of HTML elements.
        "Cascading" means that styles applied to a parent element are inherited by children unless overridden.
      </p>

      {/* Ways to use CSS */}
      <h2 className="text-2xl font-bold">Using CSS</h2>
      <p className="leading-relaxed">
        CSS can be applied in three ways:
      </p>
      <ul className="list-disc ml-6 space-y-2">
        <li><strong>Inline:</strong> Using the style attribute inside HTML elements</li>
        <li><strong>Internal:</strong> Using a &lt;style&gt; element in the &lt;head&gt;</li>
        <li><strong>External:</strong> Using a &lt;link&gt; element to reference an external CSS file</li>
      </ul>

      {/* Inline CSS Example */}
      <h3 className="text-xl font-semibold">Inline CSS Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<h1 style="color:blue;">A Blue Heading</h1>
<p style="color:red;">A red paragraph.</p>`}
      </pre>

      {/* Internal CSS Example */}
      <h3 className="text-xl font-semibold">Internal CSS Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<html>
<head>
<style>
  body { background-color: powderblue; }
  h1   { color: blue; }
  p    { color: red; }
</style>
</head>
<body>
<h1>This is a heading</h1>
<p>This is a paragraph.</p>
</body>
</html>`}
      </pre>

      {/* External CSS Example */}
      <h3 className="text-xl font-semibold">External CSS Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
<h1>This is a heading</h1>
<p>This is a paragraph.</p>
</body>
</html>`}
      </pre>
      <p className="leading-relaxed">
        <strong>styles.css</strong> file example:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`body { background-color: powderblue; }
h1 { color: blue; }
p { color: red; }`}
      </pre>

      {/* CSS Properties */}
      <h2 className="text-2xl font-bold">CSS Colors, Fonts, and Sizes</h2>
      <p className="leading-relaxed">
        Commonly used CSS properties include <code>color</code>, <code>font-family</code>, <code>font-size</code>, <code>border</code>, <code>padding</code>, and <code>margin</code>.
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`h1 {
  color: blue;
  font-family: verdana;
  font-size: 300%;
}
p {
  color: red;
  font-family: courier;
  font-size: 160%;
}`}
      </pre>

      {/* CSS Border, Padding, Margin */}
      <h3 className="text-xl font-semibold">Border, Padding, and Margin</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`p {
  border: 2px solid powderblue;  /* border */
  padding: 30px;                 /* space inside border */
  margin: 50px;                  /* space outside border */
}`}
      </pre>

      {/* External CSS Link Examples */}
      <h3 className="text-xl font-semibold">Linking to External CSS</h3>
      <p className="leading-relaxed">You can use a full URL or relative path:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<link rel="stylesheet" href="https://www.w3schools.com/html/styles.css">
<link rel="stylesheet" href="/html/styles.css">
<link rel="stylesheet" href="styles.css">`}
      </pre>

      {/* Chapter Summary */}
      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-xl">
        <p className="leading-relaxed">
          ✅ Inline CSS: style attribute <br />
          ✅ Internal CSS: &lt;style&gt; in &lt;head&gt; <br />
          ✅ External CSS: &lt;link&gt; in &lt;head&gt; <br />
          ✅ CSS properties: color, font-family, font-size, border, padding, margin
        </p>
      </div>
    </div>
  );
};

export default HtmlCssStyles;
