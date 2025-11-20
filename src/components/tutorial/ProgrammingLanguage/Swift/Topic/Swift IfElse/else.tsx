import React from "react";

const SwiftElse: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-15">
      Swift Else
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      Use <b>else</b> to handle the false branch of a condition.
    </p>

    <h2 className="text-2xl font-bold  mt-6">
      Handle the false branch with else
    </h2>

    <p className="text-lg  leading-relaxed mt-2">
      Use <b>else</b> to run an alternate block when the condition is false.
    </p>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`let hasAccess = false
if hasAccess {
    print("Welcome")
} else {
    print("Denied")
}`}
      </pre>
    </div>
  </>
);

export default SwiftElse;
