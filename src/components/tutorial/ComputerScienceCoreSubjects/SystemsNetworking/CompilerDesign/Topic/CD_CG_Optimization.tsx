import React from "react";

const CodeOptimization: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Code Optimization in Compiler Design
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 04 Sep, 2024</p>

    <p className="text-lg leading-relaxed">
      Code optimization is a crucial phase in compiler design aimed at enhancing the performance and efficiency 
      of the executable code. By improving the quality of the generated machine code, optimizations can reduce execution time, 
      minimize resource usage, and improve overall system performance. This process involves various techniques applied 
      during compilation to produce more efficient code without altering the program's functionality.
    </p>

    <h2 className="text-3xl font-bold mt-8">Objectives of Code Optimization</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>The optimization must be correct, it must not change the meaning of the program.</li>
      <li>Optimization should increase the speed and performance of the program.</li>
      <li>The compilation time must be kept reasonable.</li>
      <li>The optimization process should not delay the overall compiling process.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">When to Optimize?</h2>
    <p className="leading-relaxed">
      Optimization of the code is often performed at the end of the development stage since it reduces readability 
      and adds code that is used to increase performance.
    </p>

    <h2 className="text-3xl font-bold mt-8">Why Optimize?</h2>
    <p className="leading-relaxed">
      Optimizing an algorithm is beyond the scope of the code optimization phase. Optimization helps to:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Reduce the space consumed and increase the speed of compilation.</li>
      <li>Automate tedious tasks that are better handled by software than manually.</li>
      <li>Promote code reusability.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Types of Code Optimization</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Machine Independent Optimization:</strong> Improves intermediate code without involving CPU registers 
        or absolute memory locations.
      </li>
      <li>
        <strong>Machine Dependent Optimization:</strong> Done after target code generation, using CPU registers and absolute memory references.
      </li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Ways to Optimize Code</h2>

    <h3 className="text-2xl font-semibold mt-4">1. Compile Time Evaluation</h3>
    <p className="leading-relaxed">
      Evaluate expressions at compile time instead of runtime.
    </p>
    <ul className="list-disc ml-6">
      <li><code>A = 2*(22.0/7.0)*r</code> → computed at compile time.</li>
      <li>
        <code>x = 12.4; y = x/2.3</code> → evaluated as <code>12.4/2.3</code> at compile time.
      </li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">2. Variable Propagation</h3>
    <p className="leading-relaxed">Replace variables with the values they hold to simplify expressions.</p>
    <pre className="bg-gray-400 p-4 rounded">
      {`// Before Optimization
c = a * b
x = a
d = x * b + 4

// After Optimization
d = a * b + 4`}
    </pre>

    <h3 className="text-2xl font-semibold mt-4">3. Constant Propagation</h3>
    <p className="leading-relaxed">
      If a variable holds a constant value, replace the variable with the constant.
    </p>
    <pre className="bg-gray-400 p-4 rounded">
      {`A = 2*(22.0/7.0)*r
x = 12.4
y = x/2.3
int k = 2;
if(k) goto L3; // always true, replaced by: goto L3;`}
    </pre>

    <h3 className="text-2xl font-semibold mt-4">4. Constant Folding</h3>
    <p className="leading-relaxed">
      Evaluate constant expressions at compile time.
    </p>
    <pre className="bg-gray-400 p-4 rounded">
      {`#define k 5
x = 2 * k  // x = 10
y = k + 5  // y = 10`}
    </pre>

    <h3 className="text-2xl font-semibold mt-4">5. Copy Propagation</h3>
    <p className="leading-relaxed">
      Replace variables with the values assigned to them, reducing redundant copies.
    </p>
    <pre className="bg-gray-400 p-4 rounded">
      {`// Before Optimization
c = a * b
x = a
d = x * b + 4

// After Optimization
d = a * b + 4`}
    </pre>

    <h3 className="text-2xl font-semibold mt-4">6. Common Subexpression Elimination</h3>
    <p className="leading-relaxed">
      Remove repeated computations of the same expression.
    </p>

    <h3 className="text-2xl font-semibold mt-4">7. Dead Code Elimination</h3>
    <p className="leading-relaxed">
      Remove assignments or code never used after its last definition. Data flow analysis helps find dead variables.
    </p>

    <h3 className="text-2xl font-semibold mt-4">8. Unreachable Code Elimination</h3>
    <p className="leading-relaxed">
      Identify blocks with no incoming edges using a Control Flow Graph and remove them.
    </p>
    <pre className="bg-gray-400 p-4 rounded">
      {`#include <iostream>
using namespace std;

int main() {
  int num;
  num = 10;
  cout << "GFG!";
  return 0;
  cout << num; // unreachable code
}

// After elimination
int main() {
  int num;
  num = 10;
  cout << "GFG!";
  return 0;
}`}
    </pre>

    <h3 className="text-2xl font-semibold mt-4">9. Function Inlining</h3>
    <p className="leading-relaxed">
      Replace function calls with the function body itself to save call overhead.
    </p>

    <h3 className="text-2xl font-semibold mt-4">10. Function Cloning</h3>
    <p className="leading-relaxed">
      Create specialized versions of functions for different calling parameters (example: function overloading).
    </p>

    <h3 className="text-2xl font-semibold mt-4">11. Induction Variable and Strength Reduction</h3>
    <p className="leading-relaxed">
      Replace high-cost operations with lower-cost equivalents.
    </p>
    <pre className="bg-gray-400 p-4 rounded">
      {`// Example 1: Multiplication by power of 2
a = a*16  // Can be replaced with a = a << 4

// Example 2: Loop strength reduction
i = 1;
while(i<10) {
  y = i*4;
}

// After optimization
i = 1
t = 4
while(t<40) {
  y = t;
  t = t + 4;
}`}
    </pre>

    <h2 className="text-3xl font-bold mt-8">Loop Optimization Techniques</h2>
    <ul className="list-decimal ml-6 leading-relaxed">
      <li>
        <strong>Code Motion / Frequency Reduction:</strong> Move invariant computations outside loops.
      </li>
      <li>
        <strong>Loop Jamming:</strong> Combine multiple loops into one to reduce overhead.
      </li>
      <li>
        <strong>Loop Unrolling:</strong> Reduce iteration overhead by expanding loop bodies.
      </li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Where to Apply Optimization</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Source Program:</strong> Modify algorithm or loop structures (user-level).</li>
      <li><strong>Intermediate Code:</strong> Transform procedure calls or address calculations (compiler-level).</li>
      <li><strong>Target Code:</strong> Optimize instruction selection, register usage, memory access (compiler-level).</li>
      <li><strong>Local Optimization:</strong> Small basic blocks (Local Value Numbering, Tree Height Balancing).</li>
      <li><strong>Regional Optimization:</strong> Extended basic blocks (Super Local Value Numbering, Loop Unrolling).</li>
      <li><strong>Global Optimization:</strong> Large program segments (Live Variable Analysis, Global Code Replacement).</li>
      <li><strong>Interprocedural Optimization:</strong> Across functions/procedures (Inline Substitution, Procedure Placement).</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Advantages of Code Optimization</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Improved performance: faster execution and fewer resources.</li>
      <li>Reduced code size for easier distribution.</li>
      <li>Increased portability across platforms.</li>
      <li>Reduced power consumption.</li>
      <li>Improved maintainability.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Disadvantages of Code Optimization</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Increased compilation time.</li>
      <li>Higher code complexity.</li>
      <li>Potential for introducing bugs.</li>
      <li>Difficulty in assessing optimization effectiveness.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      Code optimization is a vital component of compiler design that enhances performance and efficiency. 
      Techniques like loop optimization, dead code elimination, and constant folding enable compilers to generate 
      faster, smaller, and more resource-efficient code, improving overall software performance.
    </p>

  </div>
);

export default CodeOptimization;
