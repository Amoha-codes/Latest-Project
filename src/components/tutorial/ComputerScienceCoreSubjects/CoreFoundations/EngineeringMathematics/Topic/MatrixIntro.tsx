import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Introduction to Matrices ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Matrices
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 19 Nov, 2025</p>

    <p className="text-lg leading-relaxed">
      Matrices are rectangular arrays of numbers, symbols, or characters arranged in rows and
      columns. A matrix is represented as [P]ₘ×ₙ, where m is the number of rows and n is the
      number of columns.
    </p>

    <p className="leading-relaxed">
      Example matrices:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      A = [[1 2], [3 4]] (2×2) <br />
      B = [[1 -1 2], [3 2 6], [4 -2 5]] (3×3)
    </p>

    <h2 className="text-3xl font-bold mt-8">Order of a Matrix</h2>
    <p className="leading-relaxed">
      The order of a matrix is represented as rows × columns. For example: if a matrix has 4 rows and 5 columns,
      then its order is 4×5.
    </p>

    <h2 className="text-3xl font-bold mt-8">Operations on Matrices</h2>
    <p>Addition, Subtraction, Scalar Multiplication, and Multiplication can be performed on matrices.</p>

    {/* Addition */}
    <h3 className="text-2xl font-semibold mt-6">Addition of Matrices</h3>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      Example: <br />
      A = [[1 2], [4 5]] and B = [[2 3], [6 7]] <br />
      A + B = [[3 5], [10 12]]
    </p>

    {/* Subtraction */}
    <h3 className="text-2xl font-semibold mt-6">Subtraction of Matrices</h3>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      A - B = [[1 1], [2 2]]
    </p>

    {/* Scalar */}
    <h3 className="text-2xl font-semibold mt-6">Scalar Multiplication</h3>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      3 × A = [[3 6], [12 15]]
    </p>

    {/* Multiplication */}
    <h3 className="text-2xl font-semibold mt-6">Multiplication of Matrices</h3>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      AB = [[14 17], [38 47]]
    </p>

    {/* Transpose */}
    <h2 className="text-3xl font-bold mt-8">Transpose of a Matrix</h2>
    <p>The transpose of a matrix A is represented as Aᵀ.</p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      Example: A = [[18 17], [38 47]] <br />
      Aᵀ = [[18 38], [17 47]]
    </p>

    {/* Trace */}
    <h2 className="text-3xl font-bold mt-8">Trace of a Matrix</h2>
    <p>Trace is the sum of diagonal elements of a square matrix.</p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      Example: Trace([[1 2 3], [4 5 6], [7 8 9]]) = 1 + 5 + 9 = 15
    </p>

    {/* Determinant */}
    <h2 className="text-3xl font-bold mt-8">Determinant of a Matrix</h2>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      For A = [[a b], [c d]], |A| = ad − bc
    </p>

    {/* Inverse */}
    <h2 className="text-3xl font-bold mt-8">Inverse of a Matrix</h2>
    <p>A⁻¹ = adj(A) / |A|</p>

    {/* Rank */}
    <h2 className="text-3xl font-bold mt-8">Rank of a Matrix</h2>
    <p>The rank of a matrix is the number of linearly independent rows or columns.</p>

    {/* Types */}
    <h2 className="text-3xl font-bold mt-8">Types of Matrices</h2>
    <ul className="list-disc ml-6 space-y-1">
      <li>Row Matrix</li>
      <li>Column Matrix</li>
      <li>Square Matrix</li>
      <li>Zero Matrix</li>
      <li>Diagonal Matrix</li>
      <li>Identity Matrix</li>
      <li>Symmetric & Skew-Symmetric Matrix</li>
      <li>Triangular Matrix</li>
    </ul>

    {/* Practice Problems */}
    <h2 className="text-3xl font-bold mt-8">Practice Problems</h2>
    <p>1. Find A+B, where A = [[3 4], [7 8]] and B = [[1 2], [5 6]].</p>
    <p>2. Find det([[4 3], [2 1]]).</p>
    <p>3. Find Trace([[2 4 6], [1 3 5], [7 8 9]]).</p>
    <p>4. Multiply [[1 2], [4 5]] and [[2 3], [6 7]].</p>
    <p>5. Find inverse of [[1 2], [3 4]] if possible.</p>

  </div>
);

export default Home;
