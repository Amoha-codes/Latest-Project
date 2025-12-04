import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Introduction to Matrices ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Matrices
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 19 Nov, 2025</p>

    <p className="text-lg leading-relaxed">
      Matrices are rectangular arrays of numbers, symbols, or characters arranged in rows and columns.
      A matrix is identified by its order, written as rows × columns. Each element's position is given by its row and column.
      A matrix is represented as <strong>[P]m×n</strong>, where P is the matrix, m is the number of rows, and n is the number of columns.
    </p>

    <h2 className="text-3xl font-bold mt-8">Order of a Matrix</h2>
    <p className="leading-relaxed">
      The order of a matrix tells the number of rows and columns. For example, a matrix with 4 rows and 5 columns has order 4×5.
      The first number represents rows, the second represents columns.
    </p>

    <h2 className="text-3xl font-bold mt-8">Operations on Matrices</h2>
    <p className="leading-relaxed">
      Matrices support operations such as addition, subtraction, scalar multiplication, and multiplication.
      These operations are applied element-wise or through specific row-column calculations.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Addition</h3>
    <p className="leading-relaxed">
      Matrix addition is performed element-wise on two matrices of the same order:
    </p>
    <pre className="bg-gray-400 p-4 rounded-lg shadow-inner">
A = [1 4; 2 5], B = [2 6; 3 7]  
A + B = [3 10; 5 12]
    </pre>

    <h3 className="text-2xl font-semibold mt-4">Subtraction</h3>
    <p className="leading-relaxed">
      Subtraction is element-wise, equivalent to adding a negative:
    </p>
    <pre className="bg-gray-400 p-4 rounded-lg shadow-inner">
A = [2 6; 3 7], B = [1 4; 2 5]  
A - B = [1 2; 1 2]
    </pre>

    <h3 className="text-2xl font-semibold mt-4">Scalar Multiplication</h3>
    <p className="leading-relaxed">
      Multiply each element by a scalar k:
    </p>
    <pre className="bg-gray-400 p-4 rounded-lg shadow-inner">
3 * [1 4; 2 5] = [3 12; 6 15]
    </pre>

    <h3 className="text-2xl font-semibold mt-4">Matrix Multiplication</h3>
    <p className="leading-relaxed">
      Multiply row elements of the first matrix by column elements of the second. Only possible if columns of A = rows of B:
    </p>
    <pre className="bg-gray-400 p-4 rounded-lg shadow-inner">
A = [1 4; 2 5], B = [2 6; 3 7]  
AB = [14 17; 38 47]
    </pre>

    <h3 className="text-2xl font-semibold mt-4">Transpose</h3>
    <p className="leading-relaxed">
      Rearranges rows as columns: if A = [aij]m×n, then A<sup>T</sup> = [aji]n×m.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Trace</h3>
    <p className="leading-relaxed">
      Sum of the principal diagonal of a square matrix. Only applicable to square matrices.
    </p>
    <pre className="bg-gray-400 p-4 rounded-lg shadow-inner">
A = [1 2 3; 4 5 6; 7 8 9]  
Trace(A) = 1 + 5 + 9 = 15
    </pre>

    <h2 className="text-3xl font-bold mt-8">Types of Matrices</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Row Matrix: 1 row, multiple columns</li>
      <li>Column Matrix: 1 column, multiple rows</li>
      <li>Square Matrix: rows = columns</li>
      <li>Diagonal Matrix: non-diagonal elements = 0</li>
      <li>Identity/Unit Matrix: diagonal elements = 1, denoted I</li>
      <li>Zero Matrix: all elements 0</li>
      <li>Symmetric Matrix: A = A<sup>T</sup></li>
      <li>Skew-Symmetric Matrix: A = -A<sup>T</sup></li>
      <li>Orthogonal Matrix: A × A<sup>T</sup> = I</li>
      <li>Upper/Lower Triangular: elements below/above diagonal = 0</li>
      <li>Singular/Non-Singular: |A| = 0 / |A| ≠ 0</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Determinant</h2>
    <p className="leading-relaxed">
      Determinant |A| is a number associated with a square matrix. Example:
    </p>
    <pre className="bg-gray-400 p-4 rounded-lg shadow-inner">
A = [a b; c d]  
|A| = ad - bc
    </pre>

    <h2 className="text-3xl font-bold mt-8">Minor and Cofactor</h2>
    <p className="leading-relaxed">
      Minor M<sub>ij</sub> = determinant after deleting row i and column j.  
      Cofactor C<sub>ij</sub> = (-1)<sup>i+j</sup> M<sub>ij</sub>
    </p>

    <h2 className="text-3xl font-bold mt-8">Adjoint and Inverse</h2>
    <p className="leading-relaxed">
      Adjoint adj(A) = transpose of cofactor matrix. Inverse of a non-singular square matrix:  
      A<sup>-1</sup> = adj(A)/|A|
    </p>

    <h2 className="text-3xl font-bold mt-8">Elementary Operations</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Swap two rows/columns</li>
      <li>Multiply a row/column by a non-zero scalar</li>
      <li>Add one row/column to another</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Rank of a Matrix</h2>
    <p className="leading-relaxed">
      Maximum number of linearly independent rows or columns, denoted ρ(A). Rank ≤ number of rows or columns.
    </p>

    <h2 className="text-3xl font-bold mt-8">Practice Problems</h2>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>Find A + B for A = [3 4; 7 8], B = [1 2; 5 6]</li>
      <li>Find determinant of A = [4 3; 2 1]</li>
      <li>Find trace of A = [2 4 6; 1 3 5; 7 8 9]</li>
      <li>Find product of A = [1 2; 4 5] and B = [2 3; 6 7]</li>
      <li>Find inverse of A = [1 2; 3 4] (if possible)</li>
    </ol>

  </div>
);

export default Home;
