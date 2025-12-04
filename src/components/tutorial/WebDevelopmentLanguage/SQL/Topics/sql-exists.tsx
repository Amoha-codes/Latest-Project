import React from "react";

const SqlExists: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        SQL EXISTS Operator
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <b>EXISTS</b> operator is used to test for the existence of any record in a subquery.  
        It returns <b>TRUE</b> if the subquery returns one or more records.
      </p>

      {/* Syntax */}
      <h2 className="text-2xl font-bold pt-5">EXISTS Syntax</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT column_name(s)
FROM table_name
WHERE EXISTS
(SELECT column_name FROM table_name WHERE condition);`}
      </pre>

      {/* Demo Database */}
      <h2 className="text-2xl font-bold pt-5">Demo Tables</h2>

      <p className="leading-relaxed font-semibold">Products Table</p>
      <table className="w-full border text-sm mb-4">
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
        </tbody>
      </table>

      <p className="leading-relaxed font-semibold">Suppliers Table</p>
      <table className="w-full border text-sm mb-4">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">SupplierID</th>
            <th className="border p-2">SupplierName</th>
            <th className="border p-2">ContactName</th>
            <th className="border p-2">City</th>
            <th className="border p-2">Country</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">1</td>
            <td className="border p-2">Exotic Liquid</td>
            <td className="border p-2">Charlotte Cooper</td>
            <td className="border p-2">London</td>
            <td className="border p-2">UK</td>
          </tr>
          <tr>
            <td className="border p-2">2</td>
            <td className="border p-2">New Orleans Cajun Delights</td>
            <td className="border p-2">Shelley Burke</td>
            <td className="border p-2">New Orleans</td>
            <td className="border p-2">USA</td>
          </tr>
        </tbody>
      </table>

      {/* Examples */}
      <h2 className="text-2xl font-bold pt-5">SQL EXISTS Examples</h2>

      <p className="leading-relaxed font-semibold">
        1. List suppliers that have at least one product with price less than 20:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT SupplierName
FROM Suppliers
WHERE EXISTS (
  SELECT ProductName 
  FROM Products 
  WHERE Products.SupplierID = Suppliers.SupplierID 
    AND Price < 20
);`}
      </pre>

      <p className="leading-relaxed font-semibold">
        2. List suppliers that have at least one product with price equal to 22:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT SupplierName
FROM Suppliers
WHERE EXISTS (
  SELECT ProductName 
  FROM Products 
  WHERE Products.SupplierID = Suppliers.SupplierID 
    AND Price = 22
);`}
      </pre>
    </div>
  );
};

export default SqlExists;
