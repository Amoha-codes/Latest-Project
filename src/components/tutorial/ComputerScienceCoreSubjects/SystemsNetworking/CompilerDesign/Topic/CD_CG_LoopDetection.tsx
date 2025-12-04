import React from "react";

const LoopDetectionTAC: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Compiler Design | Detection of a Loop in Three Address Code
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 11 Jul, 2025</p>

    <p className="leading-relaxed">
      <strong>Prerequisite:</strong> Three Address Code in Compiler
    </p>

    <p className="leading-relaxed">
      Loop optimization is performed after Intermediate Code Generation. Its primary goal is to reduce the number of instructions in a program. In iterative programs, most execution time is spent inside loops, and in recursive programs, the majority of time is spent inside recursive blocks.
    </p>

    <h2 className="text-3xl font-bold mt-8">Loop Optimization</h2>
    <p className="leading-relaxed">
      To apply loop optimization, we first need to detect loops using <strong>Control Flow Analysis (CFA)</strong> via a <strong>Program Flow Graph (PFG)</strong>. Constructing a PFG requires identifying <strong>Basic Blocks</strong>.
    </p>

    <h3 className="text-2xl font-bold mt-4">Basic Block</h3>
    <p className="leading-relaxed">
      A basic block is a sequence of three-address statements where control enters at the beginning and leaves only at the end, without jumps or halts.
    </p>

    <h3 className="text-2xl font-bold mt-4">Finding Basic Blocks</h3>
    <p className="leading-relaxed">
      To find basic blocks, we first identify <strong>leaders</strong>. A basic block starts at one leader and ends just before the next leader.
    </p>

    <h4 className="text-xl font-bold mt-2">Identifying Leaders</h4>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>The first statement of the program is always a leader.</li>
      <li>Statements that are targets of conditional or unconditional jumps are leaders.</li>
      <li>Statements that immediately follow a conditional or unconditional jump are leaders.</li>
    </ul>

    <h3 className="text-2xl font-bold mt-4">Example C Code</h3>
    <pre className="bg-gray-400 p-4 rounded">
{`fact(x) {
    int f = 1;
    for (i = 2; i <= x; i++)
        f = f * i;
    return f;
}`}
    </pre>

    <h3 className="text-2xl font-bold mt-4">Three Address Code</h3>
    <pre className="bg-gray-400 p-4 rounded">
{`f = 1;
i = 2;
if (i > x) goto 9
t1 = f * i;
f = t1;
t2 = i + 1;
i = t2;
goto 3
goto calling program`}
    </pre>

    <h3 className="text-2xl font-bold mt-4">Leader and Basic Block</h3>
    <p className="leading-relaxed">
      Basic blocks are identified based on leaders:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>B1: f = 1; i = 2;</li>
      <li>B2: if ({"i > x"}) goto 9</li>
      <li>B3: t1 = f * i; f = t1; t2 = i + 1; i = t2; goto 3</li>
      <li>B4: goto calling program</li>
    </ul>

    <h3 className="text-3xl font-bold mt-8">Control Flow Analysis</h3>
    <p className="leading-relaxed">
      If control enters B1, it must proceed to B2. At B2, depending on the condition, control goes either to B4 (if true) or B3 (if false). After B3, control loops back to B2, forming a cycle. This cycle between B2 and B3 represents the loop in the program.
    </p>

    <h3 className="text-3xl font-bold mt-8">Disadvantages of Loop Detection</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Increased Complexity:</strong> Adds complexity to compiler implementation, making maintenance and debugging harder.</li>
      <li><strong>Performance Overhead:</strong> Requires additional computation, potentially slowing compilation.</li>
      <li><strong>Limited Benefit:</strong> In some applications, loop detection may not significantly improve performance.</li>
      <li><strong>False Positives:</strong> Algorithms may incorrectly detect loops that do not exist, leading to unnecessary optimization.</li>
      <li><strong>False Negatives:</strong> Algorithms may miss existing loops, causing missed optimization opportunities.</li>
    </ul>

  </div>
);

export default LoopDetectionTAC;
