import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Newton's Divided Difference ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Newton's Divided Difference Interpolation Formula
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 14 Nov, 2022</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Interpolation is used to estimate values between known points. Newton's divided difference 
      formula is used when the interval differences are not uniform. Suppose we have 
      function values f(x₀), f(x₁), …, f(xₙ) corresponding to x₀, x₁, …, xₙ.
    </p>

    {/* Divided Differences */}
    <p className="leading-relaxed font-semibold">First Divided Difference:</p>
    <p className="font-mono bg-gray-400 p-2 rounded-lg">
      f[x₀, x₁] = (f(x₁) - f(x₀)) / (x₁ - x₀)
    </p>

    <p className="leading-relaxed font-semibold">Second Divided Difference:</p>
    <p className="font-mono bg-gray-400 p-2 rounded-lg">
      f[x₀, x₁, x₂] = (f[x₁, x₂] - f[x₀, x₁]) / (x₂ - x₀)
    </p>

    <p className="leading-relaxed">
      Divided differences are symmetric; they are independent of the order of arguments. Using these, a 
      <strong>divided difference table</strong> is constructed.
    </p>

    {/* Formula */}
    <p className="leading-relaxed font-semibold">Newton's Divided Difference Interpolation Formula:</p>
    <p className="font-mono bg-gray-400 p-2 rounded-lg">
      f(x) = f(x₀) + (x - x₀)f[x₀, x₁] + (x - x₀)(x - x₁)f[x₀, x₁, x₂] + … + (x - x₀)…(x - xₖ₋₁)f[x₀, x₁,…,xₖ]
    </p>

    {/* Advantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Useful for interpolation between non-uniform points.</li>
      <li>Higher-order differences can be calculated using the difference table.</li>
      <li>Differences are computed successively until the ultimate difference vanishes or becomes constant.</li>
    </ul>

    {/* Example Section */}
    <h2 className="text-3xl font-bold mt-8">Example</h2>
    <p className="leading-relaxed">
      Input: Value at 7<br/>
      Output: Value at 7 is 13.47
    </p>

    {/* C++ Implementation */}
    <h2 className="text-3xl font-bold mt-8">C++ Implementation</h2>
    <pre className="font-mono bg-gray-400 p-4 rounded-lg overflow-x-auto">
{`#include <bits/stdc++.h>
using namespace std;

// Function to find product term
float proterm(int i, float value, float x[]) {
    float pro = 1;
    for (int j = 0; j < i; j++) pro *= (value - x[j]);
    return pro;
}

// Function for calculating divided difference table
void dividedDiffTable(float x[], float y[][10], int n) {
    for (int i = 1; i < n; i++)
        for (int j = 0; j < n - i; j++)
            y[j][i] = (y[j][i-1] - y[j+1][i-1]) / (x[j] - x[i+j]);
}

// Apply Newton's formula
float applyFormula(float value, float x[], float y[][10], int n) {
    float sum = y[0][0];
    for (int i = 1; i < n; i++)
        sum += proterm(i, value, x) * y[0][i];
    return sum;
}

// Display divided difference table
void printDiffTable(float y[][10], int n) {
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n - i; j++) cout << setprecision(4) << y[i][j] << "\\t ";
        cout << "\\n";
    }
}

// Driver Function
int main() {
    int n = 4;
    float value, y[10][10], x[] = {5,6,9,11};
    y[0][0]=12; y[1][0]=13; y[2][0]=14; y[3][0]=16;

    dividedDiffTable(x, y, n);
    printDiffTable(y, n);

    value = 7;
    cout << "\\nValue at " << value << " is " << applyFormula(value, x, y, n) << endl;
    return 0;
}`}
    </pre>

    {/* Output Section */}
    <h2 className="text-3xl font-bold mt-8">Output</h2>
    <p className="font-mono bg-gray-400 p-2 rounded-lg">
      12     1     -0.1667     0.05<br/>
      13     0.3333 0.1333<br/>
      14     1<br/>
      16<br/>
      Value at 7 is 13.47
    </p>

    <p className="leading-relaxed">
      Time Complexity: O(n²)<br/>
      Auxiliary Space: O(1)
    </p>

  </div>
);

export default Home;
