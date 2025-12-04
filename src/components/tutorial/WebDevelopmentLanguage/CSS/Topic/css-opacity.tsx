import React from "react";

const CssOpacity: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Opacity
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <code>opacity</code> property controls the transparency of an HTML 
        element. It accepts values from <b>0.0</b> (fully transparent) to{" "}
        <b>1.0</b> (fully opaque).
      </p>

      {/* Basic Values */}
      <h2 className="text-2xl font-bold">Opacity Values</h2>

      <ul className="list-disc ml-6 space-y-1 leading-relaxed">
        <li><b>0.0</b> → completely transparent</li>
        <li><b>0.5</b> → 50% transparent</li>
        <li><b>1.0</b> → default, fully opaque</li>
      </ul>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`img {
  opacity: 0.5;
}`}
      </pre>

      {/* Hover Example */}
      <h2 className="text-2xl font-bold">Opacity on Hover</h2>

      <p className="leading-relaxed">
        A very common use case is changing opacity when hovering over an image.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`img {
  opacity: 0.5;
}

img:hover {
  opacity: 1.0;
}`}
      </pre>

      <h3 className="text-xl font-semibold">Reversed Hover Effect</h3>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`img:hover {
  opacity: 0.5;
}`}
      </pre>

      {/* Transparent Boxes */}
      <h2 className="text-2xl font-bold">Transparent Boxes</h2>

      <p className="leading-relaxed">
        When using opacity on a container, <b>all child elements inherit the opacity</b>.
        This may make text inside hard to read.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`div {
  opacity: 0.3;
}`}
      </pre>

      {/* RGBA */}
      <h2 className="text-2xl font-bold">Using RGBA for Background Transparency</h2>

      <p className="leading-relaxed">
        To apply transparency only to the background (not text), use{" "}
        <code>rgba()</code> instead of <code>opacity</code>.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`div {
  background: rgba(4, 170, 109, 0.3); /* Green background, 30% opacity */
}`}
      </pre>

      {/* Transparent Box with Text */}
      <h2 className="text-2xl font-bold">Example — Text in Transparent Box</h2>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm overflow-x-auto">
{`<div class="background">
  <div class="transbox">
    <p>This is some text that is placed in the transparent box.</p>
  </div>
</div>`}
      </pre>

      <p className="leading-relaxed font-semibold">CSS:</p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`div.background {
  background: url(klematis.jpg) repeat;
  border: 2px solid black;
}

div.transbox {
  margin: 30px;
  background-color: rgba(255, 255, 255, 0.6);
  border: 1px solid black;
}

div.transbox p {
  margin: 5%;
  font-weight: bold;
  color: #000;
}`}
      </pre>

      <h3 className="text-xl font-semibold">Explanation</h3>
      <ul className="list-disc ml-6 space-y-2 leading-relaxed">
        <li><b>background</b> div contains an image.</li>
        <li><b>transbox</b> uses RGBA for semi-transparent background.</li>
        <li>Text inside remains fully opaque.</li>
      </ul>

    </div>
  );
};

export default CssOpacity;
