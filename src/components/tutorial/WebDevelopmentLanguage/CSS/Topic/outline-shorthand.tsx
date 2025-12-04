import React from "react";

const CssOutlineShorthand: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Outline Shorthand
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <code>outline</code> property is a shorthand for setting 
        <b>outline-width</b>, <b>outline-style</b> (required), and <b>outline-color</b>.
        You can specify one, two, or three values. The order of the values does not matter.
      </p>

      {/* Examples */}
      <h2 className="text-2xl font-bold">Outline Shorthand Examples</h2>
      <p className="leading-relaxed">
        Demonstration of different outlines using the shorthand property:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`p.ex1 { outline: dashed; }
p.ex2 { outline: dotted red; }
p.ex3 { outline: 7px solid yellow; }
p.ex4 { outline: thick ridge pink; }`}
      </pre>

      {/* Rounded Corners */}
      <h2 className="text-2xl font-bold">Outline With Rounded Corners</h2>
      <p className="leading-relaxed">
        You can also combine the <code>outline</code> property with 
        <code>border-radius</code> to add rounded corners:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`p.ex1 {
  outline: dashed;
  border-radius: 8px;
}

p.ex2 {
  outline: dotted red;
  border-radius: 5px;
}

p.ex3 {
  outline: 7px solid yellow;
  border-radius: 5px;
}

p.ex4 {
  outline: thick ridge pink;
  border-radius: 8px;
}

p.ex5 {
  outline: thick solid green;
  border-radius: 10px;}`}
      </pre>

      <p className="leading-relaxed">
        Using the shorthand property makes your CSS cleaner and allows you to define width, style, and color in a single line. Combining it with <code>border-radius</code> lets you create visually appealing outlines with rounded corners.
      </p>
    </div>
  );
};

export default CssOutlineShorthand;
