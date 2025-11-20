import React from "react";

const SwiftElseIf: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold text-gray-900 border-b-2 pb-2 mt-15">
      Swift Else If
    </h1>

    <p className="text-lg text-gray-700 leading-relaxed mt-4">
      Chain multiple conditions with <b>else if</b> for more than two branches.
    </p>

    <h2 className="text-2xl font-bold text-gray-800 mt-6">
      Branch with else if conditions
    </h2>

    <p className="text-lg text-gray-700 leading-relaxed mt-2">
      Use <b>else if</b> for additional conditions when the first <b>if</b> is false.
    </p>

    <div className="bg-gray-900 text-green-400 p-4 rounded-lg mt-4 font-mono text-base">
      <pre>
{`let score = 72
if score >= 90 {
    print("A")
} else if score >= 80 {
    print("B")
} else if score >= 70 {
    print("C")
} else {
    print("Below C")
}`}
      </pre>
    </div>
  </>
);

export default SwiftElseIf;
