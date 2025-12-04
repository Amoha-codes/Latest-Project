import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Gaussian Elimination ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Gaussian Elimination to Solve Linear Equations
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 23 Jul, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      The Gaussian Elimination Method is a widely used technique for solving systems of linear equations, where multiple equations with unknown variables are solved simultaneously. This method has practical applications in real life, such as traffic flow analysis, structural engineering, and control systems.
    </p>

    <p className="leading-relaxed">
      In LU decomposition, Gaussian elimination is used to convert the matrix A into an upper triangular matrix (U). 
    </p>

    {/* Categories */}
    <h2 className="text-3xl font-bold mt-8">Categories of Linear Equation Systems</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Consistent Independent System: Exactly one solution</li>
      <li>Consistent Dependent System: Infinite solutions</li>
      <li>Inconsistent System: No solution</li>
    </ul>

    {/* Gaussian Elimination Method */}
    <h2 className="text-3xl font-bold mt-8">Gaussian Elimination Method</h2>
    <p className="leading-relaxed">
      Gaussian elimination is a row reduction algorithm for solving linear systems. It involves performing a series of operations on the augmented matrix to simplify it into row echelon form or reduced row echelon form. This method can also help determine the rank, determinant, and inverse of matrices.
    </p>

    <p className="leading-relaxed">
      Consider the system of equations:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      a₁x + b₁y + c₁z = d₁<br/>
      a₂x + b₂y + c₂z = d₂<br/>
      a₃x + b₃y + c₃z = d₃
    </p>

    <p className="leading-relaxed">
      Matrix form of this system:
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      [ a₁ b₁ c₁ | d₁ ]<br/>
      [ a₂ b₂ c₂ | d₂ ]<br/>
      [ a₃ b₃ c₃ | d₃ ]
    </p>

    <p className="leading-relaxed">
      The goal is to transform the matrix into row-echelon form, e.g.:
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      [1 * * | * ]<br/>
      [0 1 * | * ]<br/>
      [0 0 1 | * ]
    </p>

    {/* Elementary Row Operations */}
    <h2 className="text-3xl font-bold mt-8">Elementary Row Operations</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Interchanging Rows: Swap two rows</li>
      <li>Multiplying a Row by a Scalar: Multiply all elements of a row by a non-zero number</li>
      <li>Adding a Scalar Multiple of One Row to Another: Add/subtract a multiple of one row to/from another</li>
    </ul>

    <p className="leading-relaxed">
      Steps to reach row-echelon form:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Get a 1 in the first column, first row</li>
      <li>Use that 1 to get 0's in the rest of the first column</li>
      <li>Get a 1 in the second column, second row, then zeroes below it</li>
      <li>Repeat for subsequent rows/columns</li>
    </ul>

    {/* Example */}
    <h2 className="text-3xl font-bold mt-8">Example</h2>
    <p className="leading-relaxed">
      Solve the system:
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      x + y = 3<br/>
      3x - 2y = 4
    </p>

    <p className="leading-relaxed">
      Augmented matrix:
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      [1 1 | 3]<br/>
      [3 -2 | 4]
    </p>

    <p className="leading-relaxed">
      Row operation: r2 → r2 - 3*r1 → [1 1 | 3], [0 -5 | -5]<br/>
      Divide second row by -5 → [0 1 | 1]<br/>
      Back-substitute into first row → x + 1 = 3 → x = 2
    </p>

    <p className="leading-relaxed font-semibold">Solution: (x, y) = (2, 1)</p>

    {/* Partial Pivoting */}
    <h2 className="text-3xl font-bold mt-8">Partial Pivoting</h2>
    <p className="leading-relaxed">
      Partial Pivoting improves numerical stability by selecting the pivot element with the largest absolute value in the column and swapping rows. Then elimination is performed below the pivot.
    </p>

    {/* Implementation in C++ */}
    <h2 className="text-3xl font-bold mt-8">C++ Implementation</h2>
    <p className="leading-relaxed">
      The Gaussian elimination algorithm can be implemented using forward elimination and back-substitution.
    </p>
    <pre className="bg-gray-400 p-4 rounded-lg overflow-x-auto text-sm">
{`#include <bits/stdc++.h>
using namespace std;

#define N 3

int forwardElim(double mat[N][N+1]);
void backSub(double mat[N][N+1]);
void gaussianElimination(double mat[N][N+1]) { ... }

int main() {
    double mat[N][N+1] = {{3.0, 2.0, -4.0, 3.0},
                          {2.0, 3.0, 3.0, 15.0},
                          {5.0, -3.0, 1.0, 14.0}};
    gaussianElimination(mat);
    return 0;
}`}
    </pre>

    <p className="leading-relaxed font-semibold">
      Output: 3.000000, 1.000000, 2.000000
    </p>

    {/* Applications */}
    <h2 className="text-3xl font-bold mt-8">Applications</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Computing Determinants</li>
      <li>Finding the Inverse of a Matrix</li>
      <li>Computing Ranks and Bases of Matrices</li>
    </ul>

    {/* Practice Problems */}
    <h2 className="text-3xl font-bold mt-8">Practice Problems</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>x + y + z = 6, 3x + y + 6z = 10, 2x + 4y - z = 1</li>
      <li>x - y = -6, 6x - 2y = 0</li>
      <li>x - 9y + 3z = 1, x + y + z = 4, 2x - y + z = 2</li>
    </ul>

  </div>
);

export default Home;
