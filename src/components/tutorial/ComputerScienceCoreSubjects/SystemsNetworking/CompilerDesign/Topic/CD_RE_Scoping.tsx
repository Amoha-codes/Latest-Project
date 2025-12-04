import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Static and Dynamic Scoping ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Static and Dynamic Scoping
    </h1>

    <p className="text-sm text-gray-500">Last Updated : 14 Sep, 2024</p>

    <p className="text-lg leading-relaxed">
      The scope of a variable refers to the region of a program in which its name is
      associated with its corresponding declaration. Scoping helps prevent conflicts when
      the same variable name appears in different parts of a program. Scoping is classified
      into two types:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Static Scoping</li>
      <li>Dynamic Scoping</li>
    </ul>

    {/* ================= Static Scoping ================= */}
    <h2 className="text-3xl font-bold mt-8">Static Scoping (Lexical Scoping)</h2>

    <p className="leading-relaxed">
      Static scoping determines the scope of variables based on the structure of the program
      text. The binding of a variable is resolved at compile-time and does not depend on the
      run-time call chain. This makes code easier to understand and reason about.
    </p>

    <p className="leading-relaxed">
      Programming languages such as <strong>C, C++, and Java</strong> use static scoping.
      Under static scoping, a variable reference is resolved by searching the current block,
      then outer blocks, and finally global scope.
    </p>

    <p className="font-semibold mt-4">Example (Static Scoping in C):</p>

    <pre className="bg-gray-400 p-4 rounded-lg text-sm overflow-x-auto">
{`#include <stdio.h>

int x = 10;

int f() {
    return x;
}

int g() {
    int x = 20;
    return f();
}

int main() {
    printf("%d", g());
    return 0;
}`}
    </pre>

    <p className="font-semibold">Output:</p>
    <pre className="bg-gray-400 p-4 rounded-lg text-sm">10</pre>

    <p className="leading-relaxed">
      Here, function <strong>f()</strong> always returns the global variable <strong>x = 10</strong>,
      regardless of which function called it, because static scoping uses program structure,
      not the call stack.
    </p>

    {/* ================= Dynamic Scoping ================= */}
    <h2 className="text-3xl font-bold mt-8">Dynamic Scoping</h2>

    <p className="leading-relaxed">
      Dynamic scoping resolves variable references based on the run-time call stack. A
      variable refers to the most recent binding encountered during execution.
    </p>

    <p className="leading-relaxed">
      Under dynamic scoping, when a variable is accessed, the language searches the current
      block first, then continues searching backwards through all calling functions.
    </p>

    <p className="font-semibold mt-4">Example (Dynamic Scoping Pseudo Code):</p>

    <pre className="bg-gray-400 p-4 rounded-lg text-sm overflow-x-auto">
{`int x = 10;

int f() {
    return x;
}

int g() {
    int x = 20;
    return f();
}

main() {
    print(g());
}`}
    </pre>

    <p className="font-semibold">Output in a dynamically scoped language:</p>
    <pre className="bg-gray-400 p-4 rounded-lg text-sm">20</pre>

    <p className="leading-relaxed">
      Here, <strong>f()</strong> returns <strong>20</strong> because under dynamic scoping,
      <strong>g()</strong>’s local <strong>x</strong> is the most recent binding in the call chain.
    </p>

    {/* ================= Perl Example ================= */}
    <h2 className="text-3xl font-bold mt-8">Example in Perl (Dynamic Scoping)</h2>

    <pre className="bg-gray-400 p-4 rounded-lg text-sm overflow-x-auto">
{`$x = 10;

sub f {
    return $x;
}

sub g {
    local $x = 20;  # dynamic scoping
    return f();
}

print g();`}
    </pre>

    <p className="font-semibold">Output:</p>
    <pre className="bg-gray-400 p-4 rounded-lg text-sm">20</pre>

    {/* ================= Static Scoping Advantages & Disadvantages ================= */}
    <h2 className="text-3xl font-bold mt-8">Static Scoping: Advantages</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Easy to reason about because scope is fixed at compile-time.</li>
      <li>Faster execution – no need for runtime variable lookups.</li>
      <li>Reduced errors since variables cannot be accessed outside their scope.</li>
      <li>Supports compiler optimizations.</li>
      <li>Simplifies debugging and maintenance.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Static Scoping: Disadvantages</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Less flexible because scopes are fixed by program structure.</li>
      <li>Harder to write reusable code when strict scope boundaries exist.</li>
      <li>Not suitable for dynamic features such as closures in some languages.</li>
      <li>Can cause namespace collisions.</li>
      <li>Limits encapsulation in large programs.</li>
    </ul>

    {/* ================= Dynamic Scoping Advantages & Disadvantages ================= */}
    <h2 className="text-3xl font-bold mt-8">Dynamic Scoping: Advantages</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>More flexible due to run-time variable binding.</li>
      <li>Variables can be accessed from anywhere in the call chain.</li>
      <li>Useful for debugging recursive or complex control flow code.</li>
      <li>Adapts well to changing run-time requirements.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Dynamic Scoping: Disadvantages</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Harder to reason about because scope depends on execution flow.</li>
      <li>Slower execution due to runtime lookup.</li>
      <li>More error-prone—variables may be modified unexpectedly.</li>
    </ul>

  </div>
);

export default Home;
