import React from "react";

const SqlOperators: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">SQL Operators</h1>

      <p className="leading-relaxed">
        SQL operators are used to perform operations on values, compare data,
        filter results, and build complex conditions in SQL queries.
      </p>

      {/* Arithmetic Operators */}
      <h2 className="text-2xl font-bold pt-5">SQL Arithmetic Operators</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Operator</th>
            <th className="p-2 border">Description</th>
            <th className="p-2 border">Example</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="p-2 border">+</td><td className="p-2 border">Add</td><td className="p-2 border">a + b</td></tr>
          <tr><td className="p-2 border">-</td><td className="p-2 border">Subtract</td><td className="p-2 border">a - b</td></tr>
          <tr><td className="p-2 border">*</td><td className="p-2 border">Multiply</td><td className="p-2 border">a * b</td></tr>
          <tr><td className="p-2 border">/</td><td className="p-2 border">Divide</td><td className="p-2 border">a / b</td></tr>
          <tr><td className="p-2 border">%</td><td className="p-2 border">Modulo</td><td className="p-2 border">a % b</td></tr>
        </tbody>
      </table>

      {/* Bitwise Operators */}
      <h2 className="text-2xl font-bold pt-5">SQL Bitwise Operators</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Operator</th>
            <th className="p-2 border">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="p-2 border">&amp;</td><td className="p-2 border">Bitwise AND</td></tr>
          <tr><td className="p-2 border">|</td><td className="p-2 border">Bitwise OR</td></tr>
          <tr><td className="p-2 border">^</td><td className="p-2 border">Bitwise Exclusive OR</td></tr>
        </tbody>
      </table>

      {/* Comparison Operators */}
      <h2 className="text-2xl font-bold pt-5">SQL Comparison Operators</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Operator</th>
            <th className="p-2 border">Description</th>
            <th className="p-2 border">Example</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="p-2 border">=</td><td className="p-2 border">Equal to</td><td className="p-2 border">a = b</td></tr>
          <tr><td className="p-2 border">&gt;</td><td className="p-2 border">Greater than</td><td className="p-2 border">a &gt; b</td></tr>
          <tr><td className="p-2 border">&lt;</td><td className="p-2 border">Less than</td><td className="p-2 border">a &lt; b</td></tr>
          <tr><td className="p-2 border">&gt;=</td><td className="p-2 border">Greater than or equal to</td><td className="p-2 border">a &gt;= b</td></tr>
          <tr><td className="p-2 border">&lt;=</td><td className="p-2 border">Less than or equal to</td><td className="p-2 border">a &lt;= b</td></tr>
          <tr><td className="p-2 border">&lt;&gt;</td><td className="p-2 border">Not equal to</td><td className="p-2 border">a &lt;&gt; b</td></tr>
        </tbody>
      </table>

      {/* Compound Operators */}
      <h2 className="text-2xl font-bold pt-5">SQL Compound Operators</h2>
      <ul className="list-disc list-inside">
        <li>+= — Add equals</li>
        <li>-= — Subtract equals</li>
        <li>*= — Multiply equals</li>
        <li>/= — Divide equals</li>
        <li>%= — Modulo equals</li>
        <li>&amp;= — Bitwise AND equals</li>
        <li>^= — Bitwise XOR equals</li>
        <li>|*= — Bitwise OR equals</li>
      </ul>

      {/* Logical Operators */}
      <h2 className="text-2xl font-bold pt-5">SQL Logical Operators</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Operator</th>
            <th className="p-2 border">Description</th>
            <th className="p-2 border">Example</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="p-2 border">ALL</td><td className="p-2 border">TRUE if all subquery values match condition</td><td className="p-2 border">ALL</td></tr>
          <tr><td className="p-2 border">AND</td><td className="p-2 border">TRUE if all conditions are TRUE</td><td className="p-2 border">a AND b</td></tr>
          <tr><td className="p-2 border">ANY</td><td className="p-2 border">TRUE if any subquery value matches condition</td><td className="p-2 border">ANY</td></tr>
          <tr><td className="p-2 border">BETWEEN</td><td className="p-2 border">TRUE if value is in a range</td><td className="p-2 border">a BETWEEN 10 AND 20</td></tr>
          <tr><td className="p-2 border">EXISTS</td><td className="p-2 border">TRUE if subquery returns records</td><td className="p-2 border">EXISTS</td></tr>
          <tr><td className="p-2 border">IN</td><td className="p-2 border">TRUE if value matches list items</td><td className="p-2 border">a IN (1,2,3)</td></tr>
          <tr><td className="p-2 border">LIKE</td><td className="p-2 border">TRUE if value matches pattern</td><td className="p-2 border">name LIKE 'A%'</td></tr>
          <tr><td className="p-2 border">NOT</td><td className="p-2 border">TRUE if condition is NOT TRUE</td><td className="p-2 border">NOT a</td></tr>
          <tr><td className="p-2 border">OR</td><td className="p-2 border">TRUE if any condition is TRUE</td><td className="p-2 border">a OR b</td></tr>
          <tr><td className="p-2 border">SOME</td><td className="p-2 border">TRUE if any subquery value meets condition (same as ANY)</td><td className="p-2 border">SOME</td></tr>
        </tbody>
      </table>
    </div>
  );
};

export default SqlOperators;
