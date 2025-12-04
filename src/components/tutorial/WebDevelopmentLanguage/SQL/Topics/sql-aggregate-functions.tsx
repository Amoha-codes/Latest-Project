import React from "react";

const SqlAggregateFunctions: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">

      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        SQL Aggregate Functions
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        An <strong>aggregate function</strong> performs a calculation on a set
        of values and returns a <strong>single value</strong>. Aggregate
        functions are commonly used with the <strong>GROUP BY</strong> clause to
        group rows and return summary values for each group.
      </p>

      <p className="leading-relaxed">
        Aggregate functions are extremely useful when analyzing data, generating
        reports, finding totals, averages, minimums, maximums, and counts.
      </p>

      {/* Common Functions List */}
      <h2 className="text-2xl font-bold">Common SQL Aggregate Functions</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>MIN()</strong> – returns the smallest value within the selected column
        </li>
        <li>
          <strong>MAX()</strong> – returns the largest value within the selected column
        </li>
        <li>
          <strong>COUNT()</strong> – returns the number of rows in a set
        </li>
        <li>
          <strong>SUM()</strong> – returns the total sum of a numerical column
        </li>
        <li>
          <strong>AVG()</strong> – returns the average value of a numerical column
        </li>
      </ul>

      <p className="leading-relaxed font-semibold">
        Note: Aggregate functions ignore NULL values (except <strong>COUNT(*)</strong>).
      </p>

      {/* Basic Syntax */}
      <h2 className="text-2xl font-bold">Syntax</h2>
      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
{`SELECT AGGREGATE_FUNCTION(column_name)
FROM table_name
WHERE condition;`}
      </pre>

      {/* Demo Table */}
      <h2 className="text-2xl font-bold">Demo Database</h2>
      <p>The following examples use the "Orders" table:</p>

      <table className="table-auto border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border px-3 py-1">OrderID</th>
            <th className="border px-3 py-1">CustomerID</th>
            <th className="border px-3 py-1">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-3 py-1">101</td>
            <td className="border px-3 py-1">1</td>
            <td className="border px-3 py-1">250</td>
          </tr>
          <tr>
            <td className="border px-3 py-1">102</td>
            <td className="border px-3 py-1">3</td>
            <td className="border px-3 py-1">450</td>
          </tr>
          <tr>
            <td className="border px-3 py-1">103</td>
            <td className="border px-3 py-1">2</td>
            <td className="border px-3 py-1">NULL</td>
          </tr>
        </tbody>
      </table>

      {/* Group By Note */}
      <h2 className="text-2xl font-bold">Using Aggregate Functions with GROUP BY</h2>
      <p className="leading-relaxed">
        Aggregate functions are often used with{" "}
        <strong>GROUP BY</strong> to return results per group rather than for
        the entire dataset.
      </p>

      {/* Group By Example */}
      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
{`SELECT CustomerID, SUM(Amount)
FROM Orders
GROUP BY CustomerID;`}
      </pre>

      {/* Conclusion */}
      <p className="leading-relaxed">
        We will explore each aggregate function—<strong>MIN</strong>,{" "}
        <strong>MAX</strong>, <strong>COUNT</strong>, <strong>SUM</strong>, and{" "}
        <strong>AVG</strong>—in the upcoming chapters.
      </p>
    </div>
  );
};

export default SqlAggregateFunctions;
