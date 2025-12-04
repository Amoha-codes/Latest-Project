import React from "react";

const SqlNullFunctions: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        SQL NULL Functions
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        SQL provides several functions to handle <b>NULL</b> values, including <b>IFNULL()</b>, <b>ISNULL()</b>, <b>COALESCE()</b>, and <b>NVL()</b>. These functions allow you to substitute NULL values with a default value.
      </p>

      {/* Demo Table */}
      <h2 className="text-2xl font-bold pt-5">Products Table</h2>
      <table className="w-full border text-sm mb-4">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">P_Id</th>
            <th className="border p-2">ProductName</th>
            <th className="border p-2">UnitPrice</th>
            <th className="border p-2">UnitsInStock</th>
            <th className="border p-2">UnitsOnOrder</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">1</td>
            <td className="border p-2">Jarlsberg</td>
            <td className="border p-2">10.45</td>
            <td className="border p-2">16</td>
            <td className="border p-2">15</td>
          </tr>
          <tr>
            <td className="border p-2">2</td>
            <td className="border p-2">Mascarpone</td>
            <td className="border p-2">32.56</td>
            <td className="border p-2">23</td>
            <td className="border p-2">NULL</td>
          </tr>
          <tr>
            <td className="border p-2">3</td>
            <td className="border p-2">Gorgonzola</td>
            <td className="border p-2">15.67</td>
            <td className="border p-2">9</td>
            <td className="border p-2">20</td>
          </tr>
        </tbody>
      </table>

      {/* Problem Example */}
      <h2 className="text-2xl font-bold pt-5">Problem</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT ProductName, UnitPrice * (UnitsInStock + UnitsOnOrder)
FROM Products; -- NULL in UnitsOnOrder causes result to be NULL`}
      </pre>

      {/* Solutions */}
      <h2 className="text-2xl font-bold pt-5">Solutions by Database</h2>

      <h3 className="text-xl font-semibold pt-3">MySQL</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`-- Using IFNULL
SELECT ProductName, UnitPrice * (UnitsInStock + IFNULL(UnitsOnOrder, 0))
FROM Products;

-- Using COALESCE
SELECT ProductName, UnitPrice * (UnitsInStock + COALESCE(UnitsOnOrder, 0))
FROM Products;`}
      </pre>

      <h3 className="text-xl font-semibold pt-3">SQL Server</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`-- Using ISNULL
SELECT ProductName, UnitPrice * (UnitsInStock + ISNULL(UnitsOnOrder, 0))
FROM Products;

-- Using COALESCE
SELECT ProductName, UnitPrice * (UnitsInStock + COALESCE(UnitsOnOrder, 0))
FROM Products;`}
      </pre>

      <h3 className="text-xl font-semibold pt-3">MS Access</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT ProductName, UnitPrice * (UnitsInStock + IIF(IsNull(UnitsOnOrder), 0, UnitsOnOrder))
FROM Products;`}
      </pre>

      <h3 className="text-xl font-semibold pt-3">Oracle</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`-- Using NVL
SELECT ProductName, UnitPrice * (UnitsInStock + NVL(UnitsOnOrder, 0))
FROM Products;

-- Using COALESCE
SELECT ProductName, UnitPrice * (UnitsInStock + COALESCE(UnitsOnOrder, 0))
FROM Products;`}
      </pre>
    </div>
  );
};

export default SqlNullFunctions;
