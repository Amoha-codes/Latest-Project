import React from "react";

const SqlAvgFunction: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        SQL AVG() Function
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <strong>AVG()</strong> function returns the{" "}
        <strong>average value</strong> of a numeric column.
      </p>

      <p className="leading-relaxed font-semibold">
        Note: <strong>NULL values</strong> are ignored by AVG().
      </p>

      {/* Basic Example */}
      <h2 className="text-2xl font-bold">Example</h2>
      <p>Find the average price of all products:</p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono overflow-x-auto">
{`SELECT AVG(Price)
FROM Products;`}
      </pre>

      {/* Syntax */}
      <h2 className="text-2xl font-bold">Syntax</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono overflow-x-auto">
{`SELECT AVG(column_name)
FROM table_name
WHERE condition;`}
      </pre>

      {/* Demo Table */}
      <h2 className="text-2xl font-bold">Demo Database</h2>
      <p>Below is a selection from the Products table:</p>

      <table className="table-auto border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border px-3 py-1">ProductID</th>
            <th className="border px-3 py-1">ProductName</th>
            <th className="border px-3 py-1">SupplierID</th>
            <th className="border px-3 py-1">CategoryID</th>
            <th className="border px-3 py-1">Unit</th>
            <th className="border px-3 py-1">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-3 py-1">1</td>
            <td className="border px-3 py-1">Chais</td>
            <td className="border px-3 py-1">1</td>
            <td className="border px-3 py-1">1</td>
            <td className="border px-3 py-1">10 boxes x 20 bags</td>
            <td className="border px-3 py-1">18</td>
          </tr>
          <tr>
            <td className="border px-3 py-1">2</td>
            <td className="border px-3 py-1">Chang</td>
            <td className="border px-3 py-1">1</td>
            <td className="border px-3 py-1">1</td>
            <td className="border px-3 py-1">24 - 12 oz bottles</td>
            <td className="border px-3 py-1">19</td>
          </tr>
          <tr>
            <td className="border px-3 py-1">3</td>
            <td className="border px-3 py-1">Aniseed Syrup</td>
            <td className="border px-3 py-1">1</td>
            <td className="border px-3 py-1">2</td>
            <td className="border px-3 py-1">12 - 550 ml bottles</td>
            <td className="border px-3 py-1">10</td>
          </tr>
        </tbody>
      </table>

      {/* WHERE Clause Example */}
      <h2 className="text-2xl font-bold">Add a WHERE Clause</h2>
      <p>Return the average price of products in category 1:</p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono overflow-x-auto">
{`SELECT AVG(Price)
FROM Products
WHERE CategoryID = 1;`}
      </pre>

      {/* Alias Example */}
      <h2 className="text-2xl font-bold">Use an Alias</h2>
      <p>Give the result a descriptive name:</p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono overflow-x-auto">
{`SELECT AVG(Price) AS [average price]
FROM Products;`}
      </pre>

      {/* Higher Than Average Example */}
      <h2 className="text-2xl font-bold">Higher Than Average</h2>
      <p>Return all products with a price higher than the average:</p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono overflow-x-auto">
{`SELECT *
FROM Products
WHERE Price > (SELECT AVG(Price) FROM Products);`}
      </pre>

      {/* GROUP BY Example */}
      <h2 className="text-2xl font-bold">Use AVG() with GROUP BY</h2>
      <p>Return the average price for each category:</p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono overflow-x-auto">
{`SELECT AVG(Price) AS AveragePrice, CategoryID
FROM Products
GROUP BY CategoryID;`}
      </pre>
    </div>
  );
};

export default SqlAvgFunction;
