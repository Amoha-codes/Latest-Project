import React from "react";

const DataFlowAnalysis: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Data Flow Analysis in Compiler
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 11 Jul, 2025</p>

    <p className="leading-relaxed">
      Data flow analysis determines information regarding the definition and use of data in a program. This analysis is essential for compiler optimization, as it computes values and identifies opportunities to improve performance or detect potential errors.
    </p>

    <h2 className="text-3xl font-bold mt-8">What is Data Flow Analysis?</h2>
    <p className="leading-relaxed">
      Data flow analysis is a technique in compiler design to track how data moves through a program. It monitors variables and expressions to identify optimization opportunities and potential errors. Programs are modeled as graphs: nodes represent statements and edges represent data dependencies. The analysis propagates data flow information along these edges using rules and equations.
    </p>

    <h2 className="text-3xl font-bold mt-8">Types of Data Flow Analysis</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Reaching Definitions Analysis:</strong> Tracks where variable definitions reach their uses, aiding in optimization and dead code elimination.</li>
      <li><strong>Live Variable Analysis:</strong> Determines where variables are "live" (used later) or "dead" (not used), helping in register allocation and code elimination.</li>
      <li><strong>Available Expressions Analysis:</strong> Identifies expressions that have already been computed and can be reused, enabling common subexpression elimination.</li>
      <li><strong>Constant Propagation Analysis:</strong> Tracks constant values to perform optimizations like constant folding.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Advantages of Data Flow Analysis</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Improves code quality by identifying optimizations and removing unnecessary computations.</li>
      <li>Enhances error detection by tracking variable usage and uninitialized values.</li>
      <li>Provides a deeper understanding of program behavior and dependencies.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Basic Terminologies</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Definition Point:</strong> Program point where a value is defined.</li>
      <li><strong>Reference Point:</strong> Program point where a data item is referenced.</li>
      <li><strong>Evaluation Point:</strong> Program point where an expression is evaluated.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Data Flow Properties</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Available Expression:</strong> An expression is available at a point if its operands are not modified along any path reaching that point. Used for eliminating common subexpressions.</li>
      <li><strong>Reaching Definition:</strong> A definition reaches a point if there exists a path from the definition to that point without being redefined. Useful for constant and variable propagation.</li>
      <li><strong>Live Variable:</strong> A variable is live at a point if it is used later before redefinition; otherwise, it is dead. Useful for register allocation and dead code elimination.</li>
      <li><strong>Busy Expression:</strong> An expression is busy along a path if it will be evaluated before any of its operands are redefined. Used in code motion optimization.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Features</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Identifies dependencies between program statements.</li>
      <li>Detects dead code and unused variables.</li>
      <li>Optimizes code via common subexpression elimination, constant folding, and other techniques.</li>
      <li>Detects errors like uninitialized variables.</li>
      <li>Handles complex control flow: loops, conditionals, and jumps.</li>
      <li>Supports interprocedural analysis across multiple functions.</li>
      <li>Scalable for large programs with thousands or millions of lines of code.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      Data flow analysis is crucial for compiler optimization. By tracking the definitions, uses, and evaluations of data, it enables improved performance, better resource utilization, and error detection. The properties derived from this analysis guide optimization strategies such as code elimination, register allocation, and expression reuse.
    </p>

  </div>
);

export default DataFlowAnalysis;
