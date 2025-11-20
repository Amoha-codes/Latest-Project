import React from "react";

const SwiftArraysSlices: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold text-gray-900 border-b-2 pb-2 mt-15">
      Swift Arrays: Slices
    </h1>

    <p className="text-lg text-gray-700 leading-relaxed mt-4">
      In Swift, you can create <b>slices</b> of arrays using ranges. A slice is a view 
      of the array that shares storage with the original array. Modifying a slice also 
      modifies the base array.
    </p>

    {/* ArraySlice */}
    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">ArraySlice</h2>

    <p className="text-gray-700 leading-relaxed mt-3">
      Use a range on an array to create an <code>ArraySlice</code>. If you need a 
      separate array with its own storage, convert it using <code>Array()</code>.
    </p>

    <h3 className="text-xl font-bold text-gray-800 mt-4">Example</h3>

    <div className="bg-gray-900 text-green-400 font-mono p-4 rounded-lg shadow-md mt-3">
      <pre>
{`let nums = [10, 20, 30, 40, 50]
let middle = nums[1...3]        // ArraySlice<Int>
print(middle)                    // [20, 30, 40]

let copy = Array(middle)         // Array<Int>
print(copy)`}
      </pre>
    </div>

    <p className="text-gray-700 leading-relaxed mt-4">
      You can also use a <b>half-open range</b> to exclude the upper bound.
    </p>

    <h3 className="text-xl font-bold text-gray-800 mt-4">Half-Open Range Example</h3>

    <div className="bg-gray-900 text-green-400 font-mono p-4 rounded-lg shadow-md mt-3">
      <pre>
{`let nums = [10, 20, 30, 40, 50]
let slice = nums[1..<3]   // indices 1 and 2
print(slice)              // [20, 30]`}
      </pre>
    </div>

    <p className="text-gray-700 leading-relaxed mt-4">
      Slices share storage with the base array until you explicitly copy them.
    </p>
  </>
);

export default SwiftArraysSlices;
