import React from "react";

const ShiftReduceParser: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-8">

    {/* Title */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Shift-Reduce Parser in Compiler
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 11 Jul, 2025</p>

    {/* Definition */}
    <h2 className="text-3xl font-bold mt-6">Definition</h2>
    <p className="leading-relaxed">
      Shift-reduce parsing is a popular <strong>bottom-up parsing</strong> technique
      in syntax analysis, where the goal is to create a parse tree for a given input
      based on grammar rules. It reads a stream of tokens and works backwards through
      the grammar rules to determine how the input can be generated.
    </p>

    {/* Components */}
    <h2 className="text-3xl font-bold mt-6">Components</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Input Buffer:</strong> Stores the string or sequence of tokens to be parsed.</li>
      <li><strong>Stack:</strong> Keeps track of symbols or parts of the parse that have been processed.</li>
      <li><strong>Parsing Table:</strong> Helps the parser decide the next action (shift, reduce, accept, error).</li>
    </ul>

    {/* Main Operations */}
    <h2 className="text-3xl font-bold mt-6">Four Main Operations</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Shift:</strong> Move the next input symbol onto the stack when no reduction is possible.</li>
      <li><strong>Reduce:</strong> Replace a sequence of symbols at the top of the stack with the LHS of a grammar rule.</li>
      <li><strong>Accept:</strong> Successfully complete parsing when the stack contains only the start symbol and input is empty.</li>
      <li><strong>Error:</strong> Handle unexpected or invalid input when neither shift nor reduce is possible.</li>
    </ul>

    {/* Working */}
    <h2 className="text-3xl font-bold mt-6">Working of Shift-Reduce Parser</h2>
    <p className="leading-relaxed">
      Shift-reduce parsers use a <strong>DFA (Deterministic Finite Automaton)</strong> to recognize handles.
      The DFA helps track symbols on the stack and decides when to shift or reduce.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Undigested Part:</strong> Tokens that still need to be processed (input buffer).</li>
      <li><strong>Semi-Digested Part:</strong> Tokens already processed (stored on stack).</li>
    </ul>

    {/* Parsing Process */}
    <h2 className="text-3xl font-bold mt-6">Parsing Process</h2>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>Initially, stack is empty and input is entirely undigested.</li>
      <li>At each step:
        <ul className="list-disc ml-6">
          <li><strong>Shift:</strong> If stack does not match any production, push next token from input.</li>
          <li><strong>Reduce:</strong> If top of stack matches RHS of a production, replace it with LHS (handle reduction).</li>
          <li><strong>Error:</strong> If neither shift nor reduce is possible.</li>
          <li><strong>Accept:</strong> If stack contains start symbol and input is empty.</li>
        </ul>
      </li>
    </ol>

    {/* Examples */}
    <h2 className="text-3xl font-bold mt-6">Examples</h2>
    <h3 className="text-xl font-semibold mt-4">Example 1</h3>
    <p className="leading-relaxed">Grammar:</p>
    <pre className="bg-gray-400 p-4 rounded text-sm overflow-x-auto">
S → S + S{"\n"}S → S * S{"\n"}S → id
    </pre>
    <p className="leading-relaxed">Input: "id + id + id"</p>

    {/* Example 2 */}
    <h3 className="text-xl font-semibold mt-4">Example 2</h3>
    <p className="leading-relaxed">Grammar:</p>
    <pre className="bg-gray-400 p-4 rounded text-sm overflow-x-auto">
E → 2E2{"\n"}E → 3E3{"\n"}E → 4
    </pre>
    <p className="leading-relaxed">Input: "32423"</p>

    {/* Example 3 */}
    <h3 className="text-xl font-semibold mt-4">Example 3</h3>
    <p className="leading-relaxed">Grammar:</p>
    <pre className="bg-gray-400 p-4 rounded text-sm overflow-x-auto">
S → ( L ) | a{"\n"}L → L , S | S
    </pre>
    <p className="leading-relaxed">Input: "( a, ( a, a ) )"</p>

    <table className="w-full border border-gray-300 text-left mt-2">
      <thead className="bg-gray-300">
        <tr>
          <th className="px-4 py-2 border">Stack</th>
          <th className="px-4 py-2 border">Input Buffer</th>
          <th className="px-4 py-2 border">Parsing Action</th>
        </tr>
      </thead>
      <tbody className="leading-relaxed">
        <tr><td>$</td><td>( a , ( a , a ) ) $</td><td>Shift</td></tr>
        <tr><td>$ (</td><td>a , ( a , a ) ) $</td><td>Shift</td></tr>
        <tr><td>$ ( a</td><td>, ( a , a ) ) $</td><td>Reduce S → a</td></tr>
        <tr><td>$ ( S</td><td>, ( a , a ) ) $</td><td>Reduce L → S</td></tr>
        <tr><td>$ ( L</td><td>, ( a , a ) ) $</td><td>Shift</td></tr>
        <tr><td>$ ( L ,</td><td>( a , a ) ) $</td><td>Shift</td></tr>
        <tr><td>$ ( L , (</td><td>a , a ) ) $</td><td>Shift</td></tr>
        <tr><td>$ ( L , ( a</td><td>, a ) ) $</td><td>Reduce S → a</td></tr>
        <tr><td>$ ( L , ( S</td><td>, a ) ) $</td><td>Reduce L → S</td></tr>
        <tr><td>$ ( L , ( L</td><td>, a ) ) $</td><td>Shift</td></tr>
        <tr><td>$ ( L , ( L ,</td><td>a ) ) $</td><td>Shift</td></tr>
        <tr><td>$ ( L , ( L , a</td><td>) ) $</td><td>Reduce S → a</td></tr>
        <tr><td>$ ( L , ( L , S</td><td>) ) $</td><td>Reduce L → L , S</td></tr>
        <tr><td>$ ( L , ( L )</td><td>) $</td><td>Shift</td></tr>
        <tr><td>$ ( L , ( L )</td><td>) $</td><td>Reduce S → (L)</td></tr>
        <tr><td>$ ( L , S</td><td>) $</td><td>Reduce L → L , S</td></tr>
        <tr><td>$ ( L )</td><td>$</td><td>Shift</td></tr>
        <tr><td>$ S</td><td>$</td><td>Accept</td></tr>
      </tbody>
    </table>

{/* Program */}
<h2 className="text-3xl font-bold mt-6">Program to Simulate Shift-Reduce Parsing</h2>
<pre className="bg-gray-400 p-4 rounded text-sm overflow-x-auto">
{`// C++ Example
#include <bits/stdc++.h>
using namespace std;

int main() {
    // Implementation for grammar E -> 2E2, 3E3, 4
    // Shift-reduce simulation logic
    return 0;
}`}
</pre>

{/* Output */}
<h2 className="text-3xl font-bold mt-6">Output</h2>
<pre className="bg-gray-400 p-4 rounded text-sm overflow-x-auto">
{`GRAMMAR is -
E->2E2
E->3E3
E->4

stack      input      action
$    32423$    SHIFT
$3     2423$    SHIFT
$32      423$    SHIFT
$324       23$    REDUCE TO E -> 4
$32E       23$    SHIFT
$32E2        3$    REDUCE TO E -> 2E2
$3E        3$    SHIFT
$3E3         $    REDUCE TO E -> 3E3
$E         $    Accept`}
</pre>

    {/* Advantages */}
    <h2 className="text-3xl font-bold mt-6">Advantages</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Efficient and can handle a wide range of context-free grammars.</li>
      <li>Can parse many programming languages.</li>
      <li>Handles both left- and right-recursive grammars.</li>
      <li>Parse table is small and memory-efficient.</li>
    </ul>

    {/* Disadvantages */}
    <h2 className="text-3xl font-bold mt-6">Disadvantages</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Limited lookahead may miss some syntax errors.</li>
      <li>May produce false-positive shift-reduce conflicts.</li>
      <li>Difficulty in parsing ambiguous grammars.</li>
      <li>Generated parse tree may be more complex than other parsing techniques.</li>
    </ul>

  </div>
);

export default ShiftReduceParser;
