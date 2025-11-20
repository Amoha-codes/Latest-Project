import React from "react";

const SwiftArraysMultidimensional: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold text-gray-900 border-b-2 pb-2 mt-15">
      Swift Arrays: Multidimensional
    </h1>

    <p className="text-lg text-gray-700 leading-relaxed mt-4">
      Swift allows you to create <b>multidimensional arrays</b> (2D or higher) by nesting arrays. 
      These are useful for representing matrices, grids, or tables.
    </p>

    {/* 2D Arrays */}
    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">2D Arrays</h2>

    <p className="text-gray-700 leading-relaxed mt-3">
      Store each row as an array inside an outer array, then access elements using{" "}
      <code>grid[row][col]</code>.
    </p>

    <h3 className="text-xl font-bold text-gray-800 mt-4">Example</h3>

    <div className="bg-gray-900 text-green-400 font-mono p-4 rounded-lg shadow-md mt-3">
      <pre>
{`var grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

print(grid[0][1]) // 2

for row in grid {
  print(row)
}`}
      </pre>
    </div>

    {/* Update a Cell */}
    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Update a Cell</h2>

    <p className="text-gray-700 leading-relaxed mt-3">
      You can modify a specific cell by indexing into its row and column.
    </p>

    <h3 className="text-xl font-bold text-gray-800 mt-4">Example</h3>

    <div className="bg-gray-900 text-green-400 font-mono p-4 rounded-lg shadow-md mt-3">
      <pre>
{`var grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

grid[1][1] = 99
print(grid[1])      // [4, 99, 6]
print(grid[1][1])   // 99`}
      </pre>
    </div>
  </>
);

export default SwiftArraysMultidimensional;
