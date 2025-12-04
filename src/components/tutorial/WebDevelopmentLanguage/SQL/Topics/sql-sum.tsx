import React from "react";

const SqlSumFunction: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">SQL SUM() Function</h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <strong>SUM()</strong> function returns the <strong>total sum</strong> of a
        numeric column. It is one of the most commonly used aggregate
        functions in SQL, helpful for calculating totals in reports and
        analytics.
      </p>

      {/* Basic Example */}
      <h2 className="text-2xl font-bold">Example</h2>
      <p>Return the sum of all Quantity values in the OrderDetails table:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT SUM(Quantity)
FROM OrderDetails;`}
      </pre>

      {/* Syntax */}
      <h2 className="text-2xl font-bold">Syntax</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT SUM(column_name)
FROM table_name
WHERE condition;`}
      </pre>

      {/* Demo Table */}
      <h2 className="text-2xl font-bold">Demo Database</h2>
      <p>The following examples use the OrderDetails table:</p>

      <table className="table-auto border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border px-3 py-1">OrderDetailID</th>
            <th className="border px-3 py-1">OrderID</th>
            <th className="border px-3 py-1">ProductID</th>
            <th className="border px-3 py-1">Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-3 py-1">1</td>
            <td className="border px-3 py-1">10248</td>
            <td className="border px-3 py-1">11</td>
            <td className="border px-3 py-1">12</td>
          </tr>
          <tr>
            <td className="border px-3 py-1">2</td>
            <td className="border px-3 py-1">10248</td>
            <td className="border px-3 py-1">42</td>
            <td className="border px-3 py-1">10</td>
          </tr>
          <tr>
            <td className="border px-3 py-1">3</td>
            <td className="border px-3 py-1">10248</td>
            <td className="border px-3 py-1">72</td>
            <td className="border px-3 py-1">5</td>
          </tr>
        </tbody>
      </table>

      {/* SUM with WHERE */}
      <h2 className="text-2xl font-bold">Add a WHERE Clause</h2>
      <p>Return the sum of Quantity for ProductID 11:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT SUM(Quantity)
FROM OrderDetails
WHERE ProductID = 11;`}
      </pre>

      {/* Alias */}
      <h2 className="text-2xl font-bold">Use an Alias</h2>
      <p>Give the result a descriptive name using <strong>AS</strong>:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT SUM(Quantity) AS total
FROM OrderDetails;`}
      </pre>

      {/* Group By */}
      <h2 className="text-2xl font-bold">Use SUM() with GROUP BY</h2>
      <p>Return the total Quantity for each order:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT OrderID, SUM(Quantity) AS [Total Quantity]
FROM OrderDetails
GROUP BY OrderID;`}
      </pre>

      {/* SUM with Expression */}
      <h2 className="text-2xl font-bold">SUM() With an Expression</h2>
      <p>
        The parameter inside <strong>SUM()</strong> can also be an expression.
        Example: calculate total earnings assuming each product costs $10:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT SUM(Quantity * 10)
FROM OrderDetails;`}
      </pre>

      {/* Join Example */}
      <p>
        Or calculate the real total amount by joining with the Products table:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT SUM(Price * Quantity)
FROM OrderDetails
LEFT JOIN Products ON OrderDetails.ProductID = Products.ProductID;`}
      </pre>

      {/* Conclusion */}
      <p className="leading-relaxed">
        The <strong>SUM()</strong> function is useful for calculating totals,
        revenue, quantities, and financial summaries. It becomes even more
        powerful when combined with <strong>WHERE</strong>, <strong>GROUP BY</strong>,
        and table joins.
      </p>
    </div>
  );
};

export default SqlSumFunction;
