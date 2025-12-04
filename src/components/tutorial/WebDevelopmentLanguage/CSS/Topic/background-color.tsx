import React from "react";

const CssBackgrounds: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Backgrounds
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The CSS background properties are used to add background effects to HTML
        elements. In this chapter, you will learn about:
      </p>

      <ul className="list-disc ml-6 leading-relaxed">
        <li>background-color</li>
        <li>background-image</li>
        <li>background-repeat</li>
        <li>background-attachment</li>
        <li>background-position</li>
        <li>background (shorthand)</li>
      </ul>

      {/* Background Color Section */}
      <h2 className="text-2xl font-bold">CSS background-color</h2>

      <p className="leading-relaxed">
        The <code>background-color</code> property specifies the background color
        of an element.
      </p>

      <h3 className="text-xl font-semibold">Example</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`body {
  background-color: lightblue;
}`}
      </pre>

      <p className="leading-relaxed">
        Colors can be specified using:
      </p>

      <ul className="list-disc ml-6 leading-relaxed">
        <li>Color name — <code>"red"</code></li>
        <li>HEX value — <code>"#ff0000"</code></li>
        <li>RGB value — <code>"rgb(255, 0, 0)"</code></li>
      </ul>

      {/* Other Elements */}
      <h2 className="text-2xl font-bold">Other Elements</h2>
      <p className="leading-relaxed">
        You can set the background color for any HTML element:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`h1 {
  background-color: green;
}

div {
  background-color: lightblue;
}

p {
  background-color: yellow;
}`}
      </pre>

      {/* Opacity Section */}
      <h2 className="text-2xl font-bold">Opacity / Transparency</h2>

      <p className="leading-relaxed">
        The <code>opacity</code> property sets the transparency level of an
        element. Values range from <strong>0.0 (transparent)</strong> to{" "}
        <strong>1.0 (opaque)</strong>.
      </p>

      <h3 className="text-xl font-semibold">Example</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`div {
  background-color: green;
  opacity: 0.3;
}`}
      </pre>

      <p className="leading-relaxed text-red-600 font-semibold">
        Note: opacity also affects child elements (text becomes transparent).
      </p>

      {/* RGBA Transparency */}
      <h2 className="text-2xl font-bold">Transparency using RGBA</h2>

      <p className="leading-relaxed">
        To add transparency only to the <strong>background</strong> and not the
        text, use <code>RGBA</code> color values.
      </p>

      <p className="leading-relaxed">
        RGBA stands for <strong>red, green, blue, alpha</strong> where the alpha
        value defines opacity (0.0 to 1.0).
      </p>

      <h3 className="text-xl font-semibold">Example</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`div {
  background: rgba(0, 128, 0, 0.3); /* Green background with 30% opacity */
}`}
      </pre>
    </div>
  );
};

export default CssBackgrounds;
