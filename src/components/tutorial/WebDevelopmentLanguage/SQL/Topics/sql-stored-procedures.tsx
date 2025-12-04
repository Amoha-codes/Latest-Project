import React from "react";

const SqlStoredProcedures: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        SQL Stored Procedures for SQL Server
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        A <b>stored procedure</b> is a prepared SQL code that you can save and reuse. Instead of writing the same query repeatedly, you can call the stored procedure. You can also pass <b>parameters</b> to make the procedure dynamic.
      </p>

      {/* Syntax */}
      <h2 className="text-2xl font-bold pt-5">Stored Procedure Syntax</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`CREATE PROCEDURE procedure_name
AS
sql_statement
GO;

-- Execute the procedure
EXEC procedure_name;`}
      </pre>

      {/* Demo Table */}
      <h2 className="text-2xl font-bold pt-5">Customers Table</h2>
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
          <tr>
            <td className="border p-2">4</td>
            <td className="border p-2">Around the Horn</td>
            <td className="border p-2">Thomas Hardy</td>
            <td className="border p-2">120 Hanover Sq.</td>
            <td className="border p-2">London</td>
            <td className="border p-2">WA1 1DP</td>
            <td className="border p-2">UK</td>
          </tr>
        </tbody>
      </table>

      {/* Stored Procedure Examples */}
      <h2 className="text-2xl font-bold pt-5">Stored Procedure Examples</h2>

      <h3 className="text-xl font-semibold pt-3">1. Simple Stored Procedure</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`CREATE PROCEDURE SelectAllCustomers
AS
SELECT * FROM Customers
GO;

-- Execute
EXEC SelectAllCustomers;`}
      </pre>

      <h3 className="text-xl font-semibold pt-3">2. Stored Procedure with One Parameter</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`CREATE PROCEDURE SelectAllCustomers @City nvarchar(30)
AS
SELECT * FROM Customers WHERE City = @City
GO;

-- Execute
EXEC SelectAllCustomers @City = 'London';`}
      </pre>

      <h3 className="text-xl font-semibold pt-3">3. Stored Procedure with Multiple Parameters</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`CREATE PROCEDURE SelectAllCustomers @City nvarchar(30), @PostalCode nvarchar(10)
AS
SELECT * FROM Customers WHERE City = @City AND PostalCode = @PostalCode
GO;

-- Execute
EXEC SelectAllCustomers @City = 'London', @PostalCode = 'WA1 1DP';`}
      </pre>
    </div>
  );
};

export default SqlStoredProcedures;
