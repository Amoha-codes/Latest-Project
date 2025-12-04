import React from "react";

const HtmlStyles: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">HTML - Styles</h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The HTML <span className="bg-gray-100 text-black p-1 rounded-sd font-mono">style</span> attribute is used to
        add styles to an element, such as colors, fonts, sizes, and more.
      </p>

      {/* Example Preview */}
      <div className="space-y-1 p-4 bg-gray-100 rounded">
        <p style={{ color: "red" }}>I am Red</p>
        <p style={{ color: "blue" }}>I am Blue</p>
        <p style={{ fontSize: "30px" }}>I am Big</p>
      </div>

      {/* Style Attribute Syntax */}
      <h2 className="text-2xl font-bold">The HTML Style Attribute</h2>
      <p className="leading-relaxed">
        You can set the style of an HTML element using the
        <span className="bg-gray-100 text-black p-3 rounded-md font-mono"> style </span> attribute:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<tagname style="property:value;">`}
      </pre>

      <p className="leading-relaxed">
        The <strong>property</strong> is a CSS property and the <strong>value</strong> is a CSS value.
        You will learn more about CSS later in this tutorial.
      </p>

      {/* Background Color */}
      <h2 className="text-2xl font-bold">Background Color</h2>
      <p className="leading-relaxed">
        The CSS <span className="bg-gray-100 text-black p-3 rounded-md font-mono">background-color</span> property
        sets the background color of an HTML element.
      </p>

      <h3 className="text-xl font-semibold">Example: Page Background Color</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<body style="background-color:powderblue;">

  <h1>This is a heading</h1>
  <p>This is a paragraph.</p>

</body>`}
      </pre>

      <h3 className="text-xl font-semibold">Example: Element Background Color</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<body>

  <h1 style="background-color:powderblue;">This is a heading</h1>
  <p style="background-color:tomato;">This is a paragraph.</p>

</body>`}
      </pre>

      {/* Text Color */}
      <h2 className="text-2xl font-bold">Text Color</h2>
      <p className="leading-relaxed">
        Use the CSS <span className="bg-gray-100 text-black p-3 rounded-md font-mono">color</span> property to set
        text color:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<h1 style="color:blue;">This is a heading</h1>
<p style="color:red;">This is a paragraph.</p>`}
      </pre>

      {/* Fonts */}
      <h2 className="text-2xl font-bold">Fonts</h2>
      <p className="leading-relaxed">
        The CSS <span className="bg-gray-100 text-black p-3 rounded-md font-mono">font-family</span> property
        defines the font used in an element:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<h1 style="font-family:verdana;">This is a heading</h1>
<p style="font-family:courier;">This is a paragraph.</p>`}
      </pre>

      {/* Font Size */}
      <h2 className="text-2xl font-bold">Text Size</h2>
      <p className="leading-relaxed">
        Use the CSS <span className="bg-gray-100 text-black p-3 rounded-md font-mono">font-size</span> property to
        set text size:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<h1 style="font-size:300%;">This is a heading</h1>
<p style="font-size:160%;">This is a paragraph.</p>`}
      </pre>

      {/* Text Alignment */}
      <h2 className="text-2xl font-bold">Text Alignment</h2>
      <p className="leading-relaxed">
        The CSS <span className="bg-gray-100 text-black p-3 rounded-md font-mono">text-align</span> property aligns
        text horizontally:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<h1 style="text-align:center;">Centered Heading</h1>
<p style="text-align:center;">Centered paragraph.</p>`}
      </pre>

      {/* Summary */}
      <h2 className="text-2xl font-bold">Chapter Summary</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>Use the <span className="bg-gray-100 text-black p-3 rounded-md font-mono">style</span> attribute for styling</li>
        <li><span className="bg-gray-100 text-black p-3 rounded-md font-mono">background-color</span> sets background color</li>
        <li><span className="font-mono bg-gray-2 00 px-1 rounded">color</span> sets text color</li>
        <li><span className="bg-gray-100 text-black p-3 rounded-md font-mono">font-family</span> sets font style</li>
        <li><span className="bg-gray-100 text-black p-3 rounded-md font-mono">font-size</span> sets text size</li>
        <li><span className="bg-gray-100 text-black p-3 rounded-md font-mono">text-align</span> sets text alignment</li>
      </ul>
    </div>
  );
};

export default HtmlStyles;
