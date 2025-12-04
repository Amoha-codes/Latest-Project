import React from "react";

const SqlInsertIntoSelect: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        SQL INSERT INTO SELECT Statement
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <b>INSERT INTO SELECT</b> statement copies data from one table and inserts it into another table. The data types in source and target tables must match. Existing records in the target table are unaffected.
      </p>

      {/* Syntax */}
      <h2 className="text-2xl font-bold pt-5">INSERT INTO SELECT Syntax</h2>
      <p className="leading-relaxed">
        Copy all columns from one table to another:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`INSERT INTO table2
SELECT * FROM table1
WHERE condition;`}
      </pre>

      <p className="leading-relaxed">
        Copy only some columns from one table into another:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`INSERT INTO table2 (column1, column2, column3, ...)
SELECT column1, column2, column3, ...
FROM table1
WHERE condition;`}
      </pre>

      {/* Demo Tables */}
      <h2 className="text-2xl font-bold pt-5">Demo Tables</h2>
      <p className="leading-relaxed font-semibold">Customers Table</p>
      <table className="w-full border text-sm mb-4">
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

      <p className="leading-relaxed font-semibold">Suppliers Table</p>
      <table className="w-full border text-sm mb-4">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">SupplierID</th>
            <th className="border p-2">SupplierName</th>
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
            <td className="border p-2">Exotic Liquid</td>
            <td className="border p-2">Charlotte Cooper</td>
            <td className="border p-2">49 Gilbert St.</td>
            <td className="border p-2">London</td>
            <td className="border p-2">EC1 4SD</td>
            <td className="border p-2">UK</td>
          </tr>
          <tr>
            <td className="border p-2">2</td>
            <td className="border p-2">New Orleans Cajun Delights</td>
            <td className="border p-2">Shelley Burke</td>
            <td className="border p-2">P.O. Box 78934</td>
            <td className="border p-2">New Orleans</td>
            <td className="border p-2">70117</td>
            <td className="border p-2">USA</td>
          </tr>
        </tbody>
      </table>

      {/* Examples */}
      <h2 className="text-2xl font-bold pt-5">SQL INSERT INTO SELECT Examples</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`-- Copy Suppliers into Customers (some columns will be NULL)
INSERT INTO Customers (CustomerName, City, Country)
SELECT SupplierName, City, Country FROM Suppliers;`}
      </pre>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`-- Copy Suppliers into Customers (fill all columns)
INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
SELECT SupplierName, ContactName, Address, City, PostalCode, Country FROM Suppliers;`}
      </pre>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`-- Copy only German suppliers into Customers
INSERT INTO Customers (CustomerName, City, Country)
SELECT SupplierName, City, Country FROM Suppliers
WHERE Country='Germany';`}
      </pre>
    </div>
  );
};

export default SqlInsertIntoSelect;
