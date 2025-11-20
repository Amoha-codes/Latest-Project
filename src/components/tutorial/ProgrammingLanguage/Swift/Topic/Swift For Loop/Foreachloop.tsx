import React from "react";

const SwiftForEachLoop: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-15">
      Swift For-Each Loop
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      Use <code>forEach</code> to iterate sequences with a closure.
    </p>

    <h2 className="text-2xl font-bold  mt-6">
      Iterate with forEach closures
    </h2>

    <p className="text-lg  leading-relaxed mt-2">
      Pass a closure to <code>forEach</code> to process each element of a sequence.
    </p>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`["A", "B", "C"].forEach { print($0) }`}
      </pre>
    </div>
  </>
);

export default SwiftForEachLoop;
