import React from "react";

const SwiftNestedLoops: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold border-b-2 pb-2 mt-15">
      Swift Nested Loops
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      Place a loop inside another loop to generate combinations or matrices.
    </p>

    <h2 className="text-2xl font-bold  mt-6">
      Generate combinations with nested loops
    </h2>

    <p className="text-lg leading-relaxed mt-2">
      Use inner and outer loops to produce pairs or grids from ranges and collections.
    </p>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`for i in 1...2 {
  for j in 1...3 {
    print(i, j)
  }
}`}
      </pre>
    </div>
  </>
);

export default SwiftNestedLoops;
