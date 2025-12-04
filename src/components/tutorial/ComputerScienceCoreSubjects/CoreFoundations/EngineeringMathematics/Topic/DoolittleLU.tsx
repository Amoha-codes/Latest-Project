import React from 'react';

const Home: React.FC = () => (
    <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

        {/* ================= Doolittle Algorithm | LU Decomposition ================= */}
        <h1 className="text-4xl font-extrabold border-b-2 pb-2">
            Doolittle Algorithm | LU Decomposition
        </h1>
        <p className="text-sm text-gray-500">Last Updated : 25 Jun, 2024</p>

        {/* Intro Paragraph */}
        <p className="text-lg leading-relaxed">
            The <strong>Doolittle Algorithm</strong> is a numerical method used to perform
            <strong> LU Decomposition</strong>, where a given square matrix <strong>A</strong>
            is factorized into the product of a <strong>Lower triangular matrix (L)</strong>
            and an <strong>Upper triangular matrix (U)</strong>.
            This technique is widely applied in solving systems of linear equations, matrix inversion,
            and determinant computation.
        </p>

        {/* LU Definition */}
        <h2 className="text-3xl font-bold mt-8">LU Decomposition</h2>
        <p className="leading-relaxed">
            Let A be a square matrix. The LU factorization refers to decomposing A into:
        </p>

        <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm text-center font-semibold">
            A = L × U
        </p>

        <p className="leading-relaxed">
            where L is a lower triangular matrix (diagonal entries = 1), and U is an upper triangular matrix.
        </p>

        {/* Doolittle Algorithm Section */}
        <h2 className="text-3xl font-bold mt-8">Doolittle Algorithm</h2>
        <p className="leading-relaxed">
            The Doolittle method provides an alternative approach to Gaussian elimination to find matrices L and U.
            We compute elements of U row-wise and elements of L column-wise.
        </p>

        <p className="font-semibold mt-4">Terms of U matrix:</p>
        <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
            ∀ j, i = 0 → Uᵢⱼ = Aᵢⱼ <br />
            i &gt; 0 → Uᵢⱼ = Aᵢⱼ − Σ (Lᵢₖ × Uₖⱼ), k = 0 → i−1
        </p>

        <p className="font-semibold mt-4">Terms of L matrix:</p>
        <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
            ∀ i, j = 0 → Lᵢⱼ = Aᵢⱼ / Uⱼⱼ <br />
            j &gt; 0 → Lᵢⱼ = (Aᵢⱼ − Σ(Lᵢₖ × Uₖⱼ)) / Uⱼⱼ, k = 0 → j−1
        </p>

        {/* Implementation */}
        <h2 className="text-3xl font-bold mt-8">Implementation (C++)</h2>

        <pre className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm overflow-x-auto">
            {`// C++ Program to decompose a matrix into lower and upper triangular matrix
#include <bits/stdc++.h>
using namespace std;

const int MAX = 100;

void luDecomposition(int mat[][MAX], int n)
{
    int lower[n][n], upper[n][n];
    memset(lower, 0, sizeof(lower));
    memset(upper, 0, sizeof(upper));

    for (int i = 0; i < n; i++) {

        // Upper Triangular
        for (int k = i; k < n; k++) {
            int sum = 0;
            for (int j = 0; j < i; j++)
                sum += (lower[i][j] * upper[j][k]);

            upper[i][k] = mat[i][k] - sum;
        }

        // Lower Triangular
        for (int k = i; k < n; k++) {
            if (i == k)
                lower[i][i] = 1; // Diagonal as 1
            else {
                int sum = 0;
                for (int j = 0; j < i; j++)
                    sum += (lower[k][j] * upper[j][i]);

                lower[k][i] = (mat[k][i] - sum) / upper[i][i];
            }
        }
    }

    cout << "Lower Triangular" << "           " << "Upper Triangular" << endl;

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++)
            cout << lower[i][j] << " ";
        cout << "      ";
        for (int j = 0; j < n; j++)
            cout << upper[i][j] << " ";
        cout << endl;
    }
}

int main()
{
    int mat[][MAX] = { { 2, -1, -2 }, { -4, 6, 3 }, { -4, -2, 8 } };
    luDecomposition(mat, 3);
    return 0;
}`}
        </pre>

        {/* Output */}
        <h2 className="text-3xl font-bold mt-8">Output</h2>
        <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
        Lower Triangular   Upper Triangular<br />
            1  0  0  2          −1  −2<br />
            −2 1  0              0  4  −1<br />
            −2 −1 1              0  0  3
        </p>

        {/* Applications */}
        <h2 className="text-3xl font-bold mt-8">Applications</h2>
        <ul className="list-disc ml-6 leading-relaxed">
            <li>Solving Linear Equations (AX = B)</li>
            <li>Matrix Inversion using LU</li>
            <li>Determinant calculation (product of diagonal elements of U)</li>
            <li>Used in engineering, simulations, and numerical analysis</li>
        </ul>

        {/* Conclusion */}
        <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
        <p className="leading-relaxed">
            The Doolittle Algorithm is an efficient approach for performing LU Decomposition, enabling
            simplified matrix operations and advanced problem solving in linear algebra.
        </p>

    </div>
);

export default Home;
