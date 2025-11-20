import React from "react";

const SwiftForLoop: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-15">
      Swift For Loop
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      Use <b>for-in</b> to iterate over ranges, arrays, dictionaries, and other sequences.
    </p>

    <h2 className="text-2xl font-bold  mt-6">
      Iterate a Range
    </h2>

    <p className="text-lg  leading-relaxed mt-2">
      Use a range to loop a fixed number of times.
    </p>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`for i in 1...3 {
    print(i)
}`}
      </pre>
    </div>
  </>
);

export default SwiftForLoop;
