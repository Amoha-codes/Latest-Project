import React from "react";

const SQLOrderBy: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        SQL - ORDER BY Keyword
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <strong>ORDER BY</strong> keyword in SQL is used to sort the result-set
        in <strong>ascending</strong> or <strong>descending</strong> order.
      </p>

      {/* Example */}
      <h2 className="text-2xl font-bold">Example</h2>
      <p>Sort the products by price:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT * FROM Products
ORDER BY Price;`}
      </pre>

      {/* Syntax */}
      <h2 className="text-2xl font-bold">Syntax</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT column1, column2, ...
FROM table_name
ORDER BY column1, column2, ... ASC|DESC;`}
      </pre>

      {/* Demo Table */}
      <h2 className="text-2xl font-bold">Demo Products Table</h2>
      <p>Sample rows from the Products table:</p>

      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-gray-400 w-full text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-3 py-2">ProductID</th>
              <th className="border px-3 py-2">ProductName</th>
              <th className="border px-3 py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-3 py-2">1</td>
              <td className="border px-3 py-2">Chais</td>
              <td className="border px-3 py-2">18</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">2</td>
              <td className="border px-3 py-2">Chang</td>
              <td className="border px-3 py-2">19</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">3</td>
              <td className="border px-3 py-2">Aniseed Syrup</td>
              <td className="border px-3 py-2">10</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* DESC */}
      <h2 className="text-2xl font-bold">DESC</h2>
      <p>
        By default, the <strong>ORDER BY</strong> keyword sorts in{" "}
        <strong>ascending</strong> order. To sort in{" "}
        <strong>descending</strong> order, use the <strong>DESC</strong> keyword.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT * FROM Products
ORDER BY Price DESC;`}
      </pre>

      {/* Alphabetical Sorting */}
      <h2 className="text-2xl font-bold">Order Alphabetically</h2>
      <p>
        For text values, <strong>ORDER BY</strong> sorts alphabetically.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT * FROM Products
ORDER BY ProductName;`}
      </pre>

      {/* Alphabetically DESC */}
      <h2 className="text-2xl font-bold">Alphabetically DESC</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT * FROM Products
ORDER BY ProductName DESC;`}
      </pre>

      {/* ORDER BY Multiple Columns */}
      <h2 className="text-2xl font-bold">ORDER BY Several Columns</h2>
      <p>
        First sorts by <strong>Country</strong>, then by{" "}
        <strong>CustomerName</strong> when Countries are the same.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT * FROM Customers
ORDER BY Country, CustomerName;`}
      </pre>

      {/* ASC + DESC Combination */}
      <h2 className="text-2xl font-bold">Using Both ASC and DESC</h2>
      <p>
        Sorts ascending by Country and descending by CustomerName:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT * FROM Customers
ORDER BY Country ASC, CustomerName DESC;`}
      </pre>
    </div>
  );
};

export default SQLOrderBy;
