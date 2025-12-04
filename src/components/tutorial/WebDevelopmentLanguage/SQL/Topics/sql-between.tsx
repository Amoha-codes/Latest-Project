import React from "react";

const SqlBetweenOperator: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        SQL - BETWEEN Operator
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <b>BETWEEN</b> operator selects values within a given range. The
        values can be <b>numbers</b>, <b>text</b>, or <b>dates</b>. It is{" "}
        <b>inclusive</b>, meaning the boundary values are included in the
        result.
      </p>

      {/* Example */}
      <div className="bg-gray-100 p-4 rounded-lg shadow">
        <p className="font-semibold mb-2">
          Select all products with a price between 10 and 20:
        </p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT * FROM Products
WHERE Price BETWEEN 10 AND 20;`}
        </pre>
      </div>

      {/* Syntax */}
      <h2 className="text-2xl font-bold pt-5">Syntax</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT column_name(s)
FROM table_name
WHERE column_name BETWEEN value1 AND value2;`}
      </pre>

      {/* Demo Database */}
      <h2 className="text-2xl font-bold pt-5">Demo Database</h2>
      <p className="leading-relaxed">
        Below is a selection from the <b>Products</b> table used in the
        examples:
      </p>

      <table className="w-full border text-sm">
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

      {/* NOT BETWEEN */}
      <h2 className="text-2xl font-bold pt-5">NOT BETWEEN</h2>
      <p className="leading-relaxed">
        Use <b>NOT BETWEEN</b> to return values <b>outside</b> the specified
        range.
      </p>

      <div className="bg-gray-100 p-4 rounded-lg shadow">
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT * FROM Products
WHERE Price NOT BETWEEN 10 AND 20;`}
        </pre>
      </div>

      {/* BETWEEN with IN */}
      <h2 className="text-2xl font-bold pt-5">BETWEEN with IN</h2>
      <p className="leading-relaxed">
        You can combine <b>BETWEEN</b> with <b>IN</b> to filter additional
        conditions.
      </p>

      <div className="bg-gray-100 p-4 rounded-lg shadow">
        <p className="font-semibold mb-2">
          Select products priced between 10 and 20 in categories 1, 2, or 3:
        </p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT * FROM Products
WHERE Price BETWEEN 10 AND 20
AND CategoryID IN (1, 2, 3);`}
        </pre>
      </div>

      {/* BETWEEN Text */}
      <h2 className="text-2xl font-bold pt-5">BETWEEN Text Values</h2>
      <p className="leading-relaxed">
        The <b>BETWEEN</b> operator can also compare <b>alphabetical</b>
        ordering of text values.
      </p>

      <div className="bg-gray-100 p-4 rounded-lg shadow">
        <p className="font-semibold mb-2">
          Select products alphabetically between "Carnarvon Tigers" and
          "Mozzarella di Giovanni":
        </p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT * FROM Products
WHERE ProductName BETWEEN 'Carnarvon Tigers' AND 'Mozzarella di Giovanni'
ORDER BY ProductName;`}
        </pre>
      </div>

      {/* NOT BETWEEN Text */}
      <h2 className="text-2xl font-bold pt-5">NOT BETWEEN Text Values</h2>
      <div className="bg-gray-100 p-4 rounded-lg shadow">
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT * FROM Products
WHERE ProductName NOT BETWEEN 'Carnarvon Tigers' AND 'Mozzarella di Giovanni'
ORDER BY ProductName;`}
        </pre>
      </div>

      {/* BETWEEN Dates */}
      <h2 className="text-2xl font-bold pt-5">BETWEEN Dates</h2>
      <p className="leading-relaxed">
        <b>BETWEEN</b> can also be used to filter rows within a date range.
      </p>

      <div className="bg-gray-100 p-4 rounded-lg shadow">
        <p className="font-semibold mb-2">
          Select orders placed in July 1996:
        </p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT * FROM Orders
WHERE OrderDate BETWEEN '1996-07-01' AND '1996-07-31';`}
        </pre>
      </div>

      {/* Orders Table */}
      <h2 className="text-2xl font-bold pt-5">Sample Orders Table</h2>

      <table className="w-full border text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">OrderID</th>
            <th className="border p-2">CustomerID</th>
            <th className="border p-2">EmployeeID</th>
            <th className="border p-2">OrderDate</th>
            <th className="border p-2">ShipperID</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">10248</td>
            <td className="border p-2">90</td>
            <td className="border p-2">5</td>
            <td className="border p-2">7/4/1996</td>
            <td className="border p-2">3</td>
          </tr>
          <tr>
            <td className="border p-2">10249</td>
            <td className="border p-2">81</td>
            <td className="border p-2">6</td>
            <td className="border p-2">7/5/1996</td>
            <td className="border p-2">1</td>
          </tr>
          <tr>
            <td className="border p-2">10250</td>
            <td className="border p-2">34</td>
            <td className="border p-2">4</td>
            <td className="border p-2">7/8/1996</td>
            <td className="border p-2">2</td>
          </tr>
          <tr>
            <td className="border p-2">10251</td>
            <td className="border p-2">84</td>
            <td className="border p-2">3</td>
            <td className="border p-2">7/9/1996</td>
            <td className="border p-2">1</td>
          </tr>
          <tr>
            <td className="border p-2">10252</td>
            <td className="border p-2">76</td>
            <td className="border p-2">4</td>
            <td className="border p-2">7/10/1996</td>
            <td className="border p-2">2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SqlBetweenOperator;
