import React from "react";

const CssOutlineColor: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Outline Color
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <code>outline-color</code> property sets the color of an element's outline. 
        You can specify the color using a <b>name</b>, <b>HEX</b>, <b>RGB</b>, <b>HSL</b>, or <b>invert</b>.
      </p>

      {/* Color Options */}
      <ul className="list-disc ml-5 leading-relaxed">
        <li>Name: e.g., <code>red</code></li>
        <li>HEX: e.g., <code>#ff0000</code></li>
        <li>RGB: e.g., <code>rgb(255,0,0)</code></li>
        <li>HSL: e.g., <code>hsl(0, 100%, 50%)</code></li>
        <li>invert: automatically inverts the color to make it visible</li>
      </ul>

      {/* Example */}
      <h2 className="text-2xl font-bold">Example</h2>
      <p className="leading-relaxed">
        Demonstration of different outline colors:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`p {
  border: 1px solid black;
  padding: 5px;
}

p.ex1 {
  outline-style: solid;
  outline-color: red;
}

p.ex2 {
  outline-style: dotted;
  outline-color: blue;
}

p.ex3 {
  outline-style: outset;
  outline-color: green;
}

p.ex4 {
  outline-style: solid;
  outline-color: invert;`}
      </pre>

      {/* HEX, RGB, HSL Examples */}
      <h2 className="text-2xl font-bold">Using HEX, RGB, or HSL</h2>
      <p className="leading-relaxed">
        You can also define outline colors using <b>HEX</b>, <b>RGB</b>, or <b>HSL</b>:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`/* HEX */
p.ex1 {
  outline-style: solid;
  outline-color: #ff0000;
}

/* RGB */
p.ex2 {
  outline-style: solid;
  outline-color: rgb(255, 0, 0);
}

/* HSL */
p.ex3 {
  outline-style: solid;
  outline-color: hsl(0, 100%, 50%);
}`}
      </pre>

      <p className="leading-relaxed">
        Using different color formats allows you to have more control over the outline's appearance.
      </p>
    </div>
  );
};

export default CssOutlineColor;
