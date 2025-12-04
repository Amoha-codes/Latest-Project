import React from "react";

const SqlUnionAll: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        SQL UNION ALL Operator
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <b>UNION ALL</b> operator is used to combine the result set of two or more SELECT statements.  
        Unlike <b>UNION</b>, it includes all rows, including duplicates.
      </p>

      {/* Requirements */}
      <h2 className="text-2xl font-bold pt-5">Requirements for UNION ALL</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Every SELECT statement must have the same number of columns</li>
        <li>The columns must have similar data types</li>
        <li>The columns must be in the same order in every SELECT statement</li>
      </ul>

      {/* Syntax */}
      <h2 className="text-2xl font-bold pt-5">UNION ALL Syntax</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT column_name(s) FROM table1
UNION ALL
SELECT column_name(s) FROM table2;`}
      </pre>
      <p className="leading-relaxed">
        Note: The column names in the result set are usually taken from the first SELECT statement.
      </p>

      {/* Demo Tables */}
      <h2 className="text-2xl font-bold pt-5">Demo Tables</h2>
      <p className="leading-relaxed font-semibold">Customers Table</p>
      <table className="w-full border text-sm mb-4">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">CustomerID</th>
            <th className="border p-2">CustomerName</th>
            <th className="border p-2">ContactName</th>
            <th className="border p-2">City</th>
            <th className="border p-2">Country</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">1</td>
            <td className="border p-2">Alfreds Futterkiste</td>
            <td className="border p-2">Maria Anders</td>
            <td className="border p-2">Berlin</td>
            <td className="border p-2">Germany</td>
          </tr>
          <tr>
            <td className="border p-2">2</td>
            <td className="border p-2">Ana Trujillo Emparedados y helados</td>
            <td className="border p-2">Ana Trujillo</td>
            <td className="border p-2">México D.F.</td>
            <td className="border p-2">Mexico</td>
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

      {/* UNION ALL Example */}
      <h2 className="text-2xl font-bold pt-5">SQL UNION ALL Example</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT City FROM Customers
UNION ALL
SELECT City FROM Suppliers
ORDER BY City;`}
      </pre>
      <p className="leading-relaxed">
        Note: Duplicate values are included in the result set.
      </p>

      {/* UNION ALL with WHERE */}
      <h2 className="text-2xl font-bold pt-5">UNION ALL with WHERE Clause</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT City, Country FROM Customers
WHERE Country='Germany'
UNION ALL
SELECT City, Country FROM Suppliers
WHERE Country='Germany'
ORDER BY City;`}
      </pre>
    </div>
  );
};

export default SqlUnionAll;
