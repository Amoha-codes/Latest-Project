import React from "react";

const SqlAliases: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        SQL - Aliases
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        SQL <b>aliases</b> are temporary names given to a table or column for
        the duration of a query. Aliases are often used to make column or table
        names more readable. Aliases are created using the <b>AS</b> keyword,
        though it is optional in many SQL dialects.
      </p>

      {/* Column Alias Example */}
      <h2 className="text-2xl font-bold pt-5">Alias for Columns</h2>
      <div className="bg-gray-100 p-4 rounded-lg shadow">
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT CustomerID AS ID, CustomerName AS Customer
FROM Customers;`}
        </pre>
      </div>

      <p className="leading-relaxed">
        You can skip <b>AS</b> and achieve the same result:
      </p>
      <div className="bg-gray-100 p-4 rounded-lg shadow">
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT CustomerID ID, CustomerName Customer
FROM Customers;`}
        </pre>
      </div>

      {/* Column Alias with Spaces */}
      <h2 className="text-2xl font-bold pt-5">
        Using Aliases With Space Characters
      </h2>
      <p className="leading-relaxed">
        If you want your alias to include spaces, enclose it in square
        brackets or double quotes.
      </p>

      <div className="bg-gray-100 p-4 rounded-lg shadow space-y-2">
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT ProductName AS [My Great Products]
FROM Products;`}
        </pre>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT ProductName AS "My Great Products"
FROM Products;`}
        </pre>
      </div>

      {/* Concatenate Columns */}
      <h2 className="text-2xl font-bold pt-5">Concatenate Columns</h2>
      <p className="leading-relaxed">
        You can create an alias for a column that combines multiple columns:
      </p>

      <div className="bg-gray-100 p-4 rounded-lg shadow space-y-2">
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`-- SQL Server
SELECT CustomerName, Address + ', ' + PostalCode + ' ' + City + ', ' + Country AS Address
FROM Customers;`}
        </pre>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`-- MySQL
SELECT CustomerName, CONCAT(Address, ', ', PostalCode, ', ', City, ', ', Country) AS Address
FROM Customers;`}
        </pre>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`-- Oracle
SELECT CustomerName, (Address || ', ' || PostalCode || ' ' || City || ', ' || Country) AS Address
FROM Customers;`}
        </pre>
      </div>

      {/* Table Alias */}
      <h2 className="text-2xl font-bold pt-5">Alias for Tables</h2>
      <p className="leading-relaxed">
        Table aliases are useful for making queries shorter, especially when
        joining multiple tables.
      </p>

      <div className="bg-gray-100 p-4 rounded-lg shadow space-y-2">
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`-- Using table alias
SELECT * FROM Customers AS Persons;`}
        </pre>

        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`-- Joining tables with aliases
SELECT o.OrderID, o.OrderDate, c.CustomerName
FROM Customers AS c, Orders AS o
WHERE c.CustomerName='Around the Horn' AND c.CustomerID=o.CustomerID;`}
        </pre>

        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`-- Same query without aliases
SELECT Orders.OrderID, Orders.OrderDate, Customers.CustomerName
FROM Customers, Orders
WHERE Customers.CustomerName='Around the Horn' AND Customers.CustomerID=Orders.CustomerID;`}
        </pre>
      </div>

      {/* Demo Tables */}
      <h2 className="text-2xl font-bold pt-5">Demo Database</h2>

      <p className="font-semibold">Customers Table</p>
      <table className="w-full border text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">CustomerID</th>
            <th className="border p-2">CustomerName</th>
            <th className="border p-2">ContactName</th>
            <th className="border p-2">Address</th>
            <th className="border p-2">City</th>
            <th className="border p-2">PostalCode</th>
            <th className="border p-2">Country</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">1</td>
            <td className="border p-2">Alfreds Futterkiste</td>
            <td className="border p-2">Maria Anders</td>
            <td className="border p-2">Obere Str. 57</td>
            <td className="border p-2">Berlin</td>
            <td className="border p-2">12209</td>
            <td className="border p-2">Germany</td>
          </tr>
          <tr>
            <td className="border p-2">2</td>
            <td className="border p-2">Ana Trujillo Emparedados y helados</td>
            <td className="border p-2">Ana Trujillo</td>
            <td className="border p-2">Avda. de la Constitución 2222</td>
            <td className="border p-2">México D.F.</td>
            <td className="border p-2">05021</td>
            <td className="border p-2">Mexico</td>
          </tr>
        </tbody>
      </table>

      <p className="font-semibold pt-5">Orders Table</p>
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
        </tbody>
      </table>
    </div>
  );
};

export default SqlAliases;
