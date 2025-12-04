import React from "react";

const SqlCountFunction: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">SQL - COUNT() Function</h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <span className="font-semibold">COUNT()</span> function returns the total number of rows that
        match a specified condition. It is one of the most commonly used SQL
        aggregate functions.
      </p>

      {/* Basic Example */}
      <h2 className="text-2xl font-bold">Example</h2>
      <p>Find the total number of rows in the <span className="font-semibold">Products</span> table:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono text-sm overflow-x-auto">
SELECT COUNT(*)
FROM Products;
      </pre>

      {/* Syntax */}
      <h2 className="text-2xl font-bold">Syntax</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono text-sm overflow-x-auto">
SELECT COUNT(column_name)
FROM table_name
WHERE condition;
      </pre>

      {/* Demo Table */}
      <h2 className="text-2xl font-bold">Demo Database</h2>
      <p>Below is a selection from the <span className="font-semibold">Products</span> table:</p>
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-gray-400 w-full text-left text-sm">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">ProductID</th>
              <th className="border p-2">ProductName</th>
              <th className="border p-2">SupplierID</th>
              <th className="border p-2">CategoryID</th>
              <th className="border p-2">Unit</th>
              <th className="border p-2">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">1</td>
              <td className="border p-2">Chais</td>
              <td className="border p-2">1</td>
              <td className="border p-2">1</td>
              <td className="border p-2">10 boxes x 20 bags</td>
              <td className="border p-2">18</td>
            </tr>
            <tr>
              <td className="border p-2">2</td>
              <td className="border p-2">Chang</td>
              <td className="border p-2">1</td>
              <td className="border p-2">1</td>
              <td className="border p-2">24 - 12 oz bottles</td>
              <td className="border p-2">19</td>
            </tr>
            <tr>
              <td className="border p-2">3</td>
              <td className="border p-2">Aniseed Syrup</td>
              <td className="border p-2">1</td>
              <td className="border p-2">2</td>
              <td className="border p-2">12 - 550 ml bottles</td>
              <td className="border p-2">10</td>
            </tr>
            <tr>
              <td className="border p-2">4</td>
              <td className="border p-2">Chef Anton's Cajun Seasoning</td>
              <td className="border p-2">2</td>
              <td className="border p-2">2</td>
              <td className="border p-2">48 - 6 oz jars</td>
              <td className="border p-2">22</td>
            </tr>
            <tr>
              <td className="border p-2">5</td>
              <td className="border p-2">Chef Anton's Gumbo Mix</td>
              <td className="border p-2">2</td>
              <td className="border p-2">2</td>
              <td className="border p-2">36 boxes</td>
              <td className="border p-2">21.35</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* COUNT(column_name) */}
      <h2 className="text-2xl font-bold">Specify Column</h2>
      <p>
        If you specify a column name instead of <span className="font-semibold">*</span>, NULL values will not be counted.
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono text-sm overflow-x-auto">
SELECT COUNT(ProductName)
FROM Products;
      </pre>

      {/* WHERE Clause */}
      <h2 className="text-2xl font-bold">Add a WHERE Clause</h2>
      <p>Count products where the price is higher than 20:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono text-sm overflow-x-auto">
SELECT COUNT(ProductID)
FROM Products
WHERE Price &gt; 20;
      </pre>

      {/* DISTINCT */}
      <h2 className="text-2xl font-bold">Ignore Duplicates</h2>
      <p>Use DISTINCT to count only unique values:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono text-sm overflow-x-auto">
SELECT COUNT(DISTINCT Price)
FROM Products;
      </pre>

      {/* Alias */}
      <h2 className="text-2xl font-bold">Use an Alias</h2>
      <p>Name the counted column:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono text-sm overflow-x-auto">
SELECT COUNT(*) AS [Number of records]
FROM Products;
      </pre>

      {/* GROUP BY */}
      <h2 className="text-2xl font-bold">Use COUNT() with GROUP BY</h2>
      <p>Return total records for each category:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono text-sm overflow-x-auto">
SELECT COUNT(*) AS [Number of records], CategoryID
FROM Products
GROUP BY CategoryID;
      </pre>
    </div>
  );
};

export default SqlCountFunction;