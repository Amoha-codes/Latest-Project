import React from "react";

const SqlAnyAll: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        SQL ANY and ALL Operators
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <b>ANY</b> and <b>ALL</b> operators allow you to perform a comparison between a single column value and a range of other values.
      </p>

      {/* ANY Operator */}
      <h2 className="text-2xl font-bold pt-5">SQL ANY Operator</h2>
      <p className="leading-relaxed">
        The <b>ANY</b> operator returns <b>TRUE</b> if any of the subquery values meet the condition. The comparison operator must be a standard one (<code>=, &lt;&gt;, !=, &gt;, &gt;=, &lt;, &lt;=</code>).
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT column_name(s)
FROM table_name
WHERE column_name operator ANY
  (SELECT column_name
   FROM table_name
   WHERE condition);`}
      </pre>

      {/* ALL Operator */}
      <h2 className="text-2xl font-bold pt-5">SQL ALL Operator</h2>
      <p className="leading-relaxed">
        The <b>ALL</b> operator returns <b>TRUE</b> only if all of the subquery values meet the condition.
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT column_name(s)
FROM table_name
WHERE column_name operator ALL
  (SELECT column_name
   FROM table_name
   WHERE condition);`}
      </pre>

      {/* Demo Tables */}
      <h2 className="text-2xl font-bold pt-5">Demo Tables</h2>
      <p className="leading-relaxed font-semibold">Products Table</p>
      <table className="w-full border text-sm mb-4 border-collapse">
        <thead className="bg-gray-200">
          <tr>
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
            <td className="border p-2">3</td>
            <td className="border p-2">Aniseed Syrup</td>
            <td className="border p-2">1</td>
            <td className="border p-2">2</td>
            <td className="border p-2">12 - 550 ml bottles</td>
            <td className="border p-2">10</td>
          </tr>
        </tbody>
      </table>

      <p className="leading-relaxed font-semibold">OrderDetails Table</p>
      <table className="w-full border text-sm mb-4 border-collapse">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">OrderDetailID</th>
            <th className="border p-2">OrderID</th>
            <th className="border p-2">ProductID</th>
            <th className="border p-2">Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">1</td>
            <td className="border p-2">10248</td>
            <td className="border p-2">11</td>
            <td className="border p-2">12</td>
          </tr>
          <tr>
            <td className="border p-2">6</td>
            <td className="border p-2">10250</td>
            <td className="border p-2">41</td>
            <td className="border p-2">10</td>
          </tr>
        </tbody>
      </table>

      {/* ANY Examples */}
      <h2 className="text-2xl font-bold pt-5">SQL ANY Examples</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`-- Products with any OrderDetails having Quantity = 10
SELECT ProductName
FROM Products
WHERE ProductID = ANY
  (SELECT ProductID
   FROM OrderDetails
   WHERE Quantity = 10);`}
      </pre>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`-- Products with any OrderDetails having Quantity > 1000
SELECT ProductName
FROM Products
WHERE ProductID = ANY
  (SELECT ProductID
   FROM OrderDetails
   WHERE Quantity > 1000);`}
      </pre>

      {/* ALL Examples */}
      <h2 className="text-2xl font-bold pt-5">SQL ALL Examples</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`-- List all product names
SELECT ALL ProductName
FROM Products
WHERE TRUE;`}
      </pre>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`-- Products if ALL OrderDetails Quantity = 10 (will return FALSE)
SELECT ProductName
FROM Products
WHERE ProductID = ALL
  (SELECT ProductID
   FROM OrderDetails
   WHERE Quantity = 10);`}
      </pre>
    </div>
  );
};

export default SqlAnyAll;
