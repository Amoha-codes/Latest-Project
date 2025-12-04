import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Runtime Environments ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Runtime Environments in Compiler Design
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 28 Dec, 2024</p>

    {/* Intro */}
    <p className="text-lg leading-relaxed">
      A translation needs to relate the static source text of a program to the
      dynamic actions that must occur at runtime to implement the program. The
      program consists of names for procedures, identifiers, etc., that require
      mapping with the actual memory location at runtime. A runtime environment
      is a state of the target machine, which may include software libraries,
      environment variables, and memory arrangements required to execute a
      program.
    </p>

    {/* ================= SOURCE LANGUAGE ISSUES ================= */}
    <h2 className="text-3xl font-bold mt-8">SOURCE LANGUAGE ISSUES</h2>

    <h3 className="text-2xl font-bold mt-6">Activation Tree</h3>

    <p className="leading-relaxed">
      A program consists of procedures, each defined by associating an identifier
      (procedure name) with a body (statements). Each execution of a procedure is
      called an activation. Activations may be:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Non-overlapping</strong> – One call after another</li>
      <li><strong>Nested</strong> – One call inside another</li>
      <li><strong>Recursive</strong> – A new activation begins before the previous one finishes</li>
    </ul>

    <p className="leading-relaxed">
      An activation tree shows how control enters and leaves activations.
    </p>

    <p className="leading-relaxed font-semibold">Properties:</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Each node = one procedure activation</li>
      <li>The root = activation of the main function</li>
      <li>Node X is parent of node Y if control flows from X to Y</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">Example – Quicksort</h3>

    <pre className="bg-gray-400 p-4 rounded text-sm shadow-inner">
{`main() {
    int n;
    readarray();
    quicksort(1,n);
}

quicksort(int m, int n) {
    int i = partition(m,n);
    quicksort(m, i-1);
    quicksort(i+1, n);
}`}
    </pre>

    <p>
      The activation tree begins with <strong>main()</strong> → calls <strong>readarray()</strong> and
      <strong> quicksort()</strong>. Quicksort calls <strong>partition()</strong> and recursively calls
      itself. Flow of control corresponds to a preorder DFS of this tree.
    </p>

    {/* ================= CONTROL STACK ================= */}
    <h2 className="text-3xl font-bold mt-8">
      CONTROL STACK AND ACTIVATION RECORDS
    </h2>

    <p className="leading-relaxed">
      The control stack (runtime stack) stores all live activations. When a procedure is
      called, an activation record is pushed. When it returns, the record is popped.
    </p>

    <p className="font-semibold mt-4">A general activation record contains:</p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Local variables</li>
      <li>Temporary values</li>
      <li>Machine status</li>
      <li>Access link (optional)</li>
      <li>Control link (optional)</li>
      <li>Return value</li>
      <li>Actual parameters</li>
    </ul>

    {/* ================= MEMORY ================= */}
    <h2 className="text-3xl font-bold mt-8">SUBDIVISION OF RUNTIME MEMORY</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Target code</strong> – generated program instructions</li>
      <li><strong>Static data</strong> – global variables</li>
      <li><strong>Heap</strong> – dynamic data</li>
      <li><strong>Stack</strong> – activation records</li>
    </ul>

    {/* ================= STORAGE ALLOCATION ================= */}
    <h2 className="text-3xl font-bold mt-8">STORAGE ALLOCATION TECHNIQUES</h2>

    <h3 className="text-xl font-bold mt-4">1. Static Storage Allocation</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Memory is bound at compile time</li>
      <li>No recursion supported</li>
      <li>Size must be known at compile time</li>
      <li>Memory created only once</li>
      <li>Used in FORTRAN</li>
    </ul>

    <h3 className="text-xl font-bold mt-4">2. Stack Storage Allocation</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Activation records pushed/popped</li>
      <li>Supports recursion</li>
      <li>Locals get fresh memory each call</li>
    </ul>

    <h3 className="text-xl font-bold mt-4">3. Heap Storage Allocation</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Memory allocated anytime</li>
      <li>Used for dynamic data structures</li>
      <li>Supports recursion</li>
    </ul>

    {/* ================= PARAMETER PASSING ================= */}
    <h2 className="text-3xl font-bold mt-8">PARAMETER PASSING</h2>

    <p className="leading-relaxed">
      Parameter passing is the method of communicating values between calling and called procedures.
    </p>

    <h3 className="text-xl font-bold mt-4">Basic Terms</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>R-value</strong>: value of an expression</li>
      <li><strong>L-value</strong>: memory address of an expression</li>
      <li><strong>Formal parameters</strong>: variables in called procedure</li>
      <li><strong>Actual parameters</strong>: arguments passed during call</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">Call by Value</h3>
    <p>R-value copied; changes not reflected in actual parameters.</p>

    <h3 className="text-xl font-semibold mt-4">Call by Reference</h3>
    <p>L-value (address) copied; changes affect actual parameters.</p>

    <h3 className="text-xl font-semibold mt-4">Call by Copy-Restore</h3>

    <pre className="bg-gray-400 p-4 rounded text-sm shadow-inner">
{`void swap(int& a, int& b) {
    int copy_a = a; // copy in
    int copy_b = b;

    int temp = copy_a; // swap
    copy_a = copy_b;
    copy_b = temp;

    a = copy_a; // copy out
    b = copy_b;
}`}
    </pre>

    <h3 className="text-xl font-semibold mt-4">Call by Name</h3>
    <p>
      Actual parameters are substituted directly at runtime; evaluated only when needed (lazy evaluation).
    </p>

    {/* ================= ADVANTAGES ================= */}
    <h2 className="text-3xl font-bold mt-8">Advantages of Runtime Environment</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Portability</li>
      <li>Resource management</li>
      <li>Dynamic memory allocation</li>
      <li>Garbage collection</li>
      <li>Exception handling</li>
    </ul>

    {/* ================= DISADVANTAGES ================= */}
    <h2 className="text-3xl font-bold mt-8">Disadvantages</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Performance overhead</li>
      <li>Platform dependency</li>
      <li>Debugging difficulty</li>
      <li>Compatibility issues</li>
      <li>Version conflicts</li>
    </ul>

  </div>
);

export default Home;
