import React from "react";

const SwiftBoolean: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold text-gray-900 border-b-2 pb-2 mt-15">
      Comparison Results
    </h1>

    <p className="text-lg text-gray-700 leading-relaxed mt-4">
      Swift provides relational operators such as <code>&gt;</code>,{" "}
      <code>==</code>, and <code>!=</code> to compare values. These comparisons
      always return a <b>Bool</b>, making them useful in conditions and logic.
    </p>

    {/* Example */}
    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Example</h2>

    <p className="text-gray-700 leading-relaxed mt-3">
      Relational expressions return <code>true</code> or <code>false</code> and can be
      combined with logical operators like <code>&amp;&amp;</code> and <code>||</code>.
    </p>

    <div className="bg-gray-900 text-green-400 font-mono p-4 rounded-lg shadow-md mt-3">
      <pre>
{`let a = 5, b = 3

print(a > b)    // true
print(a == b)   // false
print(a != b)   // true`}
      </pre>
    </div>
  </>
);

export default SwiftBoolean;
