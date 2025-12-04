import React from "react";

const SqlSyntax: React.FC = () => {
  return (
       <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">SQL Syntax</h1>


      <h2 className="text-2xl font-semibold mt-6 mb-2">SQL Statements</h2>
      <p className="mb-4">
        Most of the actions you need to perform on a database are done with SQL
        statements. SQL statements consist of keywords that are easy to
        understand.
      </p>

      <p className="mb-2">
        The following SQL statement returns all records from a table named
        <b> "Customers"</b>:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
        SELECT * FROM Customers;
      </pre>

      <p className="mb-6">
        In this tutorial we will teach you all about the different SQL
        statements.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Database Tables</h2>
      <p className="mb-4">
        A database most often contains one or more tables. Each table is
        identified by a name (e.g. "Customers" or "Orders"), and contains
        records (rows) with data.
      </p>

      <p className="mb-4">
        In this tutorial we will use the well-known Northwind sample database
        (included in MS Access and MS SQL Server).
      </p>

      <p className="mb-4">Below is a selection from the Customers table:</p>

      <table className="w-full border border-gray-400 mb-6 text-sm">
        <thead>
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
            <td className="border p-2">3</td>
            <td className="border p-2">Antonio Moreno Taquería</td>
            <td className="border p-2">Antonio Moreno</td>
            <td className="border p-2">Mataderos 2312</td>
            <td className="border p-2">México D.F.</td>
            <td className="border p-2">05023</td>
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
          <tr>
            <td className="border p-2">5</td>
            <td className="border p-2">Berglunds snabbköp</td>
            <td className="border p-2">Christina Berglund</td>
            <td className="border p-2">Berguvsvägen 8</td>
            <td className="border p-2">Luleå</td>
            <td className="border p-2">S-958 22</td>
            <td className="border p-2">Sweden</td>
          </tr>
        </tbody>
      </table>

      <h3 className="text-xl font-semibold mt-6 mb-2">Keep in Mind That...</h3>
      <ul className="list-disc ml-6 mb-4">
        <li>SQL keywords are NOT case sensitive.</li>
        <li>
          In this tutorial, we will write all SQL keywords in upper-case for
          clarity.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        Semicolon after SQL Statements?
      </h3>
      <p className="mb-4">
        Some database systems require a semicolon at the end of each SQL
        statement. Semicolon is the standard way to separate each SQL statement
        in database systems that allow more than one SQL statement to be
        executed in the same call to the server.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        Some of The Most Important SQL Commands
      </h3>
      <ul className="list-disc ml-6 mb-10">
        <li>SELECT - extracts data from a database</li>
        <li>UPDATE - updates data in a database</li>
        <li>DELETE - deletes data from a database</li>
        <li>INSERT INTO - inserts new data into a database</li>
        <li>CREATE DATABASE - creates a new database</li>
        <li>ALTER DATABASE - modifies a database</li>
        <li>CREATE TABLE - creates a new table</li>
        <li>ALTER TABLE - modifies a table</li>
        <li>DROP TABLE - deletes a table</li>
        <li>CREATE INDEX - creates an index (search key)</li>
        <li>DROP INDEX - deletes an index</li>
      </ul>
    </div>
  );
};

export default SqlSyntax;
