import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Symbol Table in Compiler ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Symbol Table in Compiler
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 27 Aug, 2025</p>

    <p className="text-lg leading-relaxed">
      A symbol table is a vital data structure used by compilers to store details
      about identifiers such as variables, constants, functions, and parameters.
      It holds information like the identifier’s name, type, scope, memory
      location, and value. Created early during compilation, the symbol table
      helps in semantic checking, memory allocation, and code optimization.
    </p>

    {/* ================= Role of Symbol Table ================= */}
    <h2 className="text-3xl font-bold mt-8">Role of Symbol Table in Compiler Phases</h2>

    <ol className="list-decimal ml-6 leading-relaxed">
      <li>
        <strong>Lexical Analysis:</strong> Creates new entries for identifiers when tokens are detected.
      </li>
      <li>
        <strong>Syntax Analysis:</strong> Adds information such as type, scope, dimension,
        and usage.
      </li>
      <li>
        <strong>Semantic Analysis:</strong> Performs type checking and semantic validation
        using stored attributes.
      </li>
      <li>
        <strong>Intermediate Code Generation:</strong> Uses symbol details for memory
        allocation and temporary variables.
      </li>
      <li>
        <strong>Code Optimization:</strong> Uses symbol table data for machine-dependent
        optimizations.
      </li>
      <li>
        <strong>Target Code Generation:</strong> Uses identifier addresses for generating
        machine code.
      </li>
    </ol>

    {/* ================= Symbol Table Entries ================= */}
    <h2 className="text-3xl font-bold mt-8">Symbol Table Entries</h2>

    <p className="leading-relaxed">
      Each entry in the symbol table contains essential attributes that support
      different compiler functions. These commonly include:
    </p>

    <ol className="list-decimal ml-6 leading-relaxed">
      <li>Name of identifier</li>
      <li>Data type</li>
      <li>Scope (local or global)</li>
      <li>Memory address</li>
      <li>Value (for constants)</li>
      <li>Additional information (dimensions, reference count, etc.)</li>
    </ol>

    {/* ================= Example Program ================= */}
    <h2 className="text-3xl font-bold mt-8">Example of Using Symbol Table</h2>

    <p className="leading-relaxed">
      Consider the following C program. The compiler extracts identifiers such as
      <strong> distance</strong>, <strong> pi</strong>, <strong> radius</strong>, and
      <strong> calculateArea</strong>, and stores corresponding attributes.
    </p>

    <pre className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm whitespace-pre-wrap">
{`#include <stdio.h>

const float pi = 3.14159f;

float calculateArea(float radius, float pi) {
    return pi * radius * radius;
}

int main() {
    float distance;

    printf("Enter the distance (radius): ");
    if (scanf("%f", &distance) != 1) {
        printf("Invalid input!\\n");
        return 1;
    }

    float area = calculateArea(distance, pi);
    printf("Area of circle with radius %.2f = %.5f\\n", distance, area);

    return 0;
}`}
    </pre>

    <p className="leading-relaxed font-semibold mt-4">
      Key identifiers involved:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>distance — variable in main</li>
      <li>pi — constant</li>
      <li>radius — parameter in calculateArea</li>
      <li>calculateArea — function</li>
    </ul>

    {/* ================= Symbol Table Example Table ================= */}
<h2 className="text-3xl font-bold mt-8">Symbol Table for the Program</h2>

<div className="overflow-x-auto mt-4">
  <table className="min-w-full border border-gray-300 rounded-lg">
    <thead className="bg-gray-400">
      <tr>
        <th className="border px-4 py-2 text-left">Name</th>
        <th className="border px-4 py-2 text-left">Type</th>
        <th className="border px-4 py-2 text-left">Scope</th>
        <th className="border px-4 py-2 text-left">Memory Address</th>
        <th className="border px-4 py-2 text-left">Value</th>
        <th className="border px-4 py-2 text-left">Additional Info</th>
      </tr>
    </thead>

    <tbody>
      <tr className="bg-white">
        <td className="border px-4 py-2">distance</td>
        <td className="border px-4 py-2">variable</td>
        <td className="border px-4 py-2">Global</td>
        <td className="border px-4 py-2">0x1000</td>
        <td className="border px-4 py-2">Uninitialized</td>
        <td className="border px-4 py-2">Data type: float</td>
      </tr>

      <tr className="bg-gray-50">
        <td className="border px-4 py-2">pi</td>
        <td className="border px-4 py-2">constant</td>
        <td className="border px-4 py-2">Global</td>
        <td className="border px-4 py-2">0x1004</td>
        <td className="border px-4 py-2">3.14159</td>
        <td className="border px-4 py-2">Data type: float, read-only</td>
      </tr>

      <tr className="bg-white">
        <td className="border px-4 py-2">calculateArea</td>
        <td className="border px-4 py-2">function</td>
        <td className="border px-4 py-2">Global</td>
        <td className="border px-4 py-2">0x1008</td>
        <td className="border px-4 py-2">N/A</td>
        <td className="border px-4 py-2">Return type: float</td>
      </tr>

      <tr className="bg-gray-50">
        <td className="border px-4 py-2">radius</td>
        <td className="border px-4 py-2">parameter</td>
        <td className="border px-4 py-2">Local</td>
        <td className="border px-4 py-2">0x2000</td>
        <td className="border px-4 py-2">0x1000</td>
        <td className="border px-4 py-2">Data type: float</td>
      </tr>
    </tbody>
  </table>
</div>

    {/* ================= Implementation ================= */}
    <h2 className="text-3xl font-bold mt-8">Implementation of Symbol Table</h2>

    <p className="leading-relaxed">
      Symbol tables can be implemented using various data structures with
      different advantages:
    </p>

    <ol className="list-decimal ml-6 leading-relaxed">
      <li>
        <strong>Hash Tables:</strong> Fast lookup; best for large programs.
      </li>
      <li>
        <strong>Binary Search Trees:</strong> Keep identifiers sorted and allow faster searching.
      </li>
      <li>
        <strong>Linear Lists:</strong> Simple but inefficient for a large number of identifiers.
      </li>
    </ol>

    {/* ================= Applications ================= */}
    <h2 className="text-3xl font-bold mt-8">Applications of Symbol Table</h2>

    <ol className="list-decimal ml-6 leading-relaxed">
      <li>Resolves variables and function names with correct type and memory info.</li>
      <li>Manages scopes and prevents naming conflicts.</li>
      <li>Supports code optimization using runtime and memory details.</li>
      <li>Assists in generating machine code by providing address and type info.</li>
      <li>Helps in error detection and debugging.</li>
      <li>Makes code organization and documentation easier.</li>
    </ol>

  </div>
);

export default Home;
