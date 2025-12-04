import React from "react";

const CssMathFunctions: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Math Functions
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        CSS math functions allow developers to perform mathematical calculations{" "}
        directly inside CSS. These functions help create flexible, responsive,{" "}
        and dynamic layouts without needing JavaScript.
      </p>

      <h2 className="text-2xl font-bold">Available Math Functions</h2>
      <ul className="list-disc ml-6 space-y-1 leading-relaxed">
        <li><code>calc()</code> — perform calculations (add, subtract, multiply, divide)</li>
        <li><code>max()</code> — picks the largest value</li>
        <li><code>min()</code> — picks the smallest value</li>
        <li><code>clamp()</code> — sets a responsive value between min and max</li>
      </ul>

      {/* calc() */}
      <h2 className="text-2xl font-bold">1. The calc() Function</h2>
      <p className="leading-relaxed">
        The <code>calc()</code> function allows mathematical expressions as CSS values.  
        It supports <b>+ − × ÷</b> and enables mixing units like <code>%</code>, <code>px</code>, 
        <code>vh</code>, etc.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`#div1 {
  margin: auto;
  width: calc(100% - 100px);
  height: calc(30vh + 50px);
  border: 1px solid black;
  padding: 10px;
}`}
      </pre>

      {/* max() */}
      <h2 className="text-2xl font-bold">2. The max() Function</h2>
      <p className="leading-relaxed">
        <code>max()</code> selects the <b>largest</b> value from a comma-separated list.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`#div1 {
  height: 100px;
  width: max(50%, 300px);
  border: 1px solid black;
  padding: 10px;
}`}
      </pre>

      {/* min() */}
      <h2 className="text-2xl font-bold">3. The min() Function</h2>
      <p className="leading-relaxed">
        <code>min()</code> selects the <b>smallest</b> value from a list.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`#div1 {
  height: 100px;
  width: min(50%, 300px);
  border: 1px solid black;
  padding: 10px;
}`}
      </pre>

      {/* clamp() */}
      <h2 className="text-2xl font-bold">4. The clamp() Function</h2>
      <p className="leading-relaxed">
        The <code>clamp()</code> function sets a value that scales responsively{" "}
        while staying between a specified minimum and maximum.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`h2 {
  font-size: clamp(2rem, 2.5vw, 3.5rem);
}

p {
  font-size: clamp(1rem, 2.5vw, 2.5rem);
}`}
      </pre>

      {/* Conclusion */}
      <h2 className="text-2xl font-bold">Conclusion</h2>
      <p className="leading-relaxed">
        CSS math functions are extremely helpful for building responsive layouts,{" "}
        dynamic spacing, and fluid typography. They remove the need for JavaScript{" "}
        in many situations and make CSS much more powerful and flexible.
      </p>

    </div>
  );
};

export default CssMathFunctions;
