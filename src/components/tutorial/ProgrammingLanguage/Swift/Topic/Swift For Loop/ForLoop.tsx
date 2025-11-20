import React from "react";

const SwiftForLoop: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold text-gray-900 border-b-2 pb-2 mt-15">
      Swift For Loop
    </h1>

    <p className="text-lg text-gray-700 leading-relaxed mt-4">
      Use <b>for-in</b> to iterate over ranges, arrays, dictionaries, and other sequences.
    </p>

    <h2 className="text-2xl font-bold text-gray-800 mt-6">
      Iterate a Range
    </h2>

    <p className="text-lg text-gray-700 leading-relaxed mt-2">
      Use a range to loop a fixed number of times.
    </p>

    <div className="bg-gray-900 text-green-400 p-4 rounded-lg mt-4 font-mono text-base">
      <pre>
{`for i in 1...3 {
    print(i)
}`}
      </pre>
    </div>
  </>
);

export default SwiftForLoop;
