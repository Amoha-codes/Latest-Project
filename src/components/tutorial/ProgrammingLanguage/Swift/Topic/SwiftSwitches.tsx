import React from "react";

const SwiftSwitch: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold text-gray-900 border-b-2 pb-2 mt-15">
      Swift Switch
    </h1>

    <p className="text-lg text-gray-700 leading-relaxed mt-4">
      Use <b>switch</b> to match a value against patterns. In Swift, a switch must be 
      <b>exhaustive</b>, meaning all possible values must be handled. After the first 
      match, the switch stops checking further cases.
    </p>

    {/* Basic Switch */}
    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Basic Switch</h2>

    <p className="text-gray-700 leading-relaxed mt-3">
      You can match exact values or ranges. Always include a <code>default</code> case 
      to handle any values not explicitly matched.
    </p>

    <h3 className="text-xl font-bold text-gray-800 mt-4">Example</h3>

    <div className="bg-gray-900 text-green-400 font-mono p-4 rounded-lg shadow-md mt-3">
      <pre>
{`let grade = 82

switch grade {
case 90...100:
    print("A")
case 80..<90:
    print("B")
case 70..<80:
    print("C")
default:
    print("Below C")
}`}
      </pre>
    </div>

    <p className="text-gray-700 leading-relaxed mt-4">
      ✅ This example categorizes a score using ranges in a switch statement. Remember, 
      Swift switches must be exhaustive, so include a <code>default</code> case for safety.
    </p>
  </>
);

export default SwiftSwitch;
