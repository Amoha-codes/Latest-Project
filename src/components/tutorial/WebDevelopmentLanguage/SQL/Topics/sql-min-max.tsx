import React from "react";

const SqlMinMaxFunctions: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        SQL MIN() and MAX() Functions
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <strong>MIN()</strong> function returns the <strong>smallest value</strong> in a
        selected column, while the <strong>MAX()</strong> function returns the
        <strong> largest value</strong> in a column.
      </p>

      {/* MIN Example */}
      <h2 className="text-2xl font-bold">MIN() Example</h2>
      <p>Find the lowest price in the Products table:</p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono overflow-x-auto">
{`SELECT MIN(Price)
FROM Products;`}
      </pre>

      {/* MAX Example */}
      <h2 className="text-2xl font-bold">MAX() Example</h2>
      <p>Find the highest price in the Products table:</p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono overflow-x-auto">
{`SELECT MAX(Price)
FROM Products;`}
      </pre>

      {/* Syntax */}
      <h2 className="text-2xl font-bold">Syntax</h2>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono overflow-x-auto mb-2">
{`SELECT MIN(column_name)
FROM table_name
WHERE condition;`}
      </pre>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono overflow-x-auto">
{`SELECT MAX(column_name)
FROM table_name
WHERE condition;`}
      </pre>

      {/* Demo Table */}
      <h2 className="text-2xl font-bold">Demo Database</h2>
      <p>The following examples use the "Products" table:</p>

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

      {/* Alias */}
      <h2 className="text-2xl font-bold">Set Column Name (Alias)</h2>
      <p>Use the <strong>AS</strong> keyword to give a custom column name:</p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono overflow-x-auto">
{`SELECT MIN(Price) AS SmallestPrice
FROM Products;`}
      </pre>

      {/* GROUP BY */}
      <h2 className="text-2xl font-bold">Use MIN() or MAX() with GROUP BY</h2>
      <p>
        Use <strong>GROUP BY</strong> when you want the smallest or largest value
        from each group:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono overflow-x-auto">
{`SELECT MIN(Price) AS SmallestPrice, CategoryID
FROM Products
GROUP BY CategoryID;`}
      </pre>

      {/* Conclusion */}
      <p className="leading-relaxed">
        The <strong>MIN()</strong> and <strong>MAX()</strong> functions are helpful
        when identifying value ranges in your dataset — such as lowest price,
        highest salary, smallest order quantity, and more.
      </p>
    </div>
  );
};

export default SqlMinMaxFunctions;
