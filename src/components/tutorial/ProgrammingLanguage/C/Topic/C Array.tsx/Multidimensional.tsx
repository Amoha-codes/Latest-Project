import React from "react";

const CMultidimensionalArrays: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        C - Multidimensional Arrays
      </h1>

      <p className="leading-relaxed">
        A multidimensional array is an array of arrays. It allows you to store 
        data in a tabular form (rows and columns). The most common is a 
        two-dimensional (2D) array.
      </p>

      {/* 2D Array Example */}
      <h2 className="text-2xl font-bold">Two-Dimensional Array</h2>
      <p className="leading-relaxed">
        A 2D array (matrix) with 2 rows and 3 columns:
      </p>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`int matrix[2][3] = { {1, 4, 2}, {3, 6, 8} };`}</pre>
      </div>

      {/* Access Element */}
      <h2 className="text-2xl font-bold">Access an Element</h2>
      <p className="leading-relaxed">
        Access the element in the first row (0) and third column (2):
      </p>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`printf("%d", matrix[0][2]);  // Outputs 2`}</pre>
      </div>

      {/* Change Element */}
      <h2 className="text-2xl font-bold">Change an Element</h2>
      <p className="leading-relaxed">
        Change the element in the first row and first column:
      </p>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`matrix[0][0] = 9;
printf("%d", matrix[0][0]);  // Outputs 9 instead of 1`}</pre>
      </div>

      {/* Loop Through 2D Array */}
      <h2 className="text-2xl font-bold">Loop Through a 2D Array</h2>
      <p className="leading-relaxed">
        Use nested loops: one for rows, one for columns.
      </p>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`int i, j;
for (i = 0; i < 2; i++) {
  for (j = 0; j < 3; j++) {
    printf("%d\\n", matrix[i][j]);
  }
}`}</pre>
      </div>

      {/* 3D Array */}
      <h2 className="text-2xl font-bold">Three-Dimensional Array</h2>
      <p className="leading-relaxed">
        A 3D array has blocks, rows, and columns. Example:
      </p>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`int example[2][4][3];  // 2 blocks, 4 rows, 3 columns`}</pre>
      </div>

      <p className="leading-relaxed">
        Use multidimensional arrays when your data is structured in rows and columns, 
        like tables, game boards, or matrices. Each extra dimension adds another 
        level of structure.
      </p>
    </div>
  );
};

export default CMultidimensionalArrays;
