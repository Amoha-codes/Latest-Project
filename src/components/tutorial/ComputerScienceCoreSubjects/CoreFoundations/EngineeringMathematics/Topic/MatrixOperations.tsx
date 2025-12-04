import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Different Operations on Matrices ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Different Operations on Matrices
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 11 Jul, 2025</p>

    <p className="text-lg leading-relaxed">
      The following are some primary operations performed on matrices along with their properties
      and computational complexity.
    </p>

    {/* ================= Matrix Addition ================= */}
    <h2 className="text-3xl font-bold mt-8">Matrix Addition</h2>

    <p className="leading-relaxed">
      The addition of two matrices <strong>Aₘₓₙ</strong> and <strong>Bₘₓₙ</strong> gives a matrix
      <strong> Cₘₓₙ </strong> where each element is the sum of corresponding elements:
    </p>

    <p className="leading-relaxed font-semibold bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      C[i][j] = A[i][j] + B[i][j]
    </p>

    <h3 className="text-xl font-bold mt-4">Key Points</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>A + B = B + A (Commutative)</li>
      <li>A + (B + C) = (A + B) + C (Associative)</li>
      <li>Orders of A, B & A+B must be the same</li>
      <li>If dimensions differ, addition is not possible</li>
      <li>Time Complexity: O(M × N)</li>
    </ul>

    <h3 className="text-xl font-bold mt-4">Example (C++ Implementation)</h3>
    <pre className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm overflow-x-auto whitespace-pre-wrap">
{`#include <iostream>
using namespace std;

int main() {
    int n = 2, m = 2;
    int a[n][m] = {{2, 5}, {1, 7}};
    int b[n][m] = {{3, 7}, {2, 9}};
    int c[n][m];

    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++)
            c[i][j] = a[i][j] + b[i][j];

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++)
            cout << c[i][j] << " ";
        cout << endl;
    }
}`}
    </pre>

    <p className="leading-relaxed font-semibold">Output: 5 12&nbsp;&nbsp; 3 16</p>

    {/* ================= Matrix Subtraction ================= */}
    <h2 className="text-3xl font-bold mt-8">Matrix Subtraction</h2>
    <p className="leading-relaxed">
      The subtraction of two matrices <strong>Aₘₓₙ</strong> and <strong>Bₘₓₙ</strong> produces a matrix
      <strong> Cₘₓₙ</strong> where each element is the difference of corresponding elements:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm font-semibold">
      C[i][j] = A[i][j] - B[i][j]
    </p>

    <h3 className="text-xl font-bold mt-4">Key Points</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>A − B ≠ B − A (Non-commutative)</li>
      <li>A − (B − C) ≠ (A − B) − C (Non-associative)</li>
      <li>Time Complexity: O(M × N)</li>
    </ul>

    <h3 className="text-xl font-bold mt-4">Example (C++ Implementation)</h3>
    <pre className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm whitespace-pre-wrap overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    int n = 2, m = 2;
    int a[n][m] = {{2, 5}, {1, 7}};
    int b[n][m] = {{3, 7}, {2, 9}};
    int c[n][m];

    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++)
            c[i][j] = a[i][j] - b[i][j];

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++)
            cout << c[i][j] << " ";
        cout << endl;
    }
}`}
    </pre>

    <p className="leading-relaxed font-semibold">Output: -1 -2&nbsp;&nbsp;-1 -2</p>

    {/* ================= Matrix Multiplication ================= */}
    <h2 className="text-3xl font-bold mt-8">Matrix Multiplication</h2>

    <p className="leading-relaxed">
      The multiplication of matrices <strong>Aₘₓₙ</strong> and <strong>Bₙₓₚ</strong> yields
      <strong> Cₘₓₚ</strong>. The number of columns in A must match the number of rows in B.
    </p>

    <h3 className="text-xl font-bold mt-4">Key Points</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>A × B ≠ B × A (Non-commutative)</li>
      <li>A × (B × C) = (A × B) × C (Associative)</li>
      <li>Time Complexity: O(m × n × p)</li>
      <li>Resultant matrix order: m × p</li>
    </ul>

    <h3 className="text-xl font-bold mt-4">Example (C++ Implementation)</h3>
    <pre className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm whitespace-pre-wrap overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    int n = 2, m = 2;
    int a[n][m] = {{2, 5}, {1, 7}};
    int b[n][m] = {{3, 7}, {2, 9}};
    int c[n][m];

    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++) {
            c[i][j] = 0;
            for (int k = 0; k < n; k++)
                c[i][j] += a[i][k] * b[k][j];
        }

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++)
            cout << c[i][j] << " ";
        cout << endl;
    }
}`}
    </pre>

    <p className="leading-relaxed font-semibold">
      Output: 16 59&nbsp;&nbsp; 17 70
    </p>

  </div>
);

export default Home;
