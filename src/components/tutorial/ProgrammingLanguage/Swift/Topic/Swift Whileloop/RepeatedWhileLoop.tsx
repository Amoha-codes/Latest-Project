import React from "react";

const SwiftRepeatWhileLoop: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-15">
      Swift Repeat/While Loop
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      Use <code>repeat while</code> to run the loop body at least once.
    </p>

    {/* Repeat/while Loop Example */}
    <h2 className="text-2xl font-bold  mt-6">Repeat/While Loop Example</h2>
    <p className=" leading-relaxed mt-3">
      This example uses a <code>repeat/while</code> loop to print "Attempt #1" and "Attempt #2".
    </p>

    <h3 className="text-xl font-bold  mt-4">Example</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`var attempts = 0
repeat {
  attempts += 1
  print("Attempt #\(attempts)")
} while attempts < 3`}</pre>
    </div>
    <p className=" leading-relaxed mt-4">
      ✅ This example demonstrates a repeat loop (do-while style). <br />
      💡 Tip: Avoid infinite loops. Ensure the loop condition will eventually become false.
    </p>
  </>
);

export default SwiftRepeatWhileLoop;
