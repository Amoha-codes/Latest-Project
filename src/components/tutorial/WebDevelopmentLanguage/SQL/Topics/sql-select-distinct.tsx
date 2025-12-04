import React from "react";

const SQLSelectDistinct: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold">SQL SELECT DISTINCT Statement</h1>

      {/* Intro */}
      <p className="text-lg">
        The <code>SELECT DISTINCT</code> statement is used to return only
        distinct (different) values from a database table.
      </p>

      {/* Example Description */}
      <h2 className="text-2xl font-semibold">Example</h2>
      <p>Select all the different countries from the "Customers" table:</p>

      <div className="bg-gray-100 p-4 rounded-md">
        <code className="block text-blue-600 mt-2">
          SELECT DISTINCT Country FROM Customers;
        </code>
      </div>

      <p>
        Inside a table, a column often contains many duplicate values, and
        sometimes you only want to list the different (distinct) values.
      </p>

      {/* Syntax */}
      <h2 className="text-2xl font-semibold">Syntax</h2>
      <div className="bg-gray-100 p-4 rounded-md">
        <code className="block text-blue-600 mt-2">
{`SELECT DISTINCT column1, column2, ...
FROM table_name;`}
        </code>
      </div>

      {/* Demo Database */}
      <h2 className="text-2xl font-semibold">Demo Database</h2>
      <p>
        Below is a selection from the <strong>Customers</strong> table used in
        the examples:
      </p>

      <div className="overflow-auto">
        <table className="min-w-full border border-gray-300 text-sm">
          <thead>
            <tr className="bg-gray-200">
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
          </tbody>
        </table>
      </div>

      {/* Without DISTINCT */}
      <h2 className="text-2xl font-semibold">SELECT Example Without DISTINCT</h2>
      <p>
        If you omit the <code>DISTINCT</code> keyword, SQL returns all country
        values, including duplicates:
      </p>

      <div className="bg-gray-100 p-4 rounded-md">
        <code className="block text-blue-600 mt-2">
          SELECT Country FROM Customers;
        </code>
      </div>

      {/* COUNT DISTINCT */}
      <h2 className="text-2xl font-semibold">Count Distinct</h2>
      <p>
        By using the <code>DISTINCT</code> keyword in the{" "}
        <code>COUNT()</code> function, we can return the number of different
        countries:
      </p>

      <div className="bg-gray-100 p-4 rounded-md">
        <code className="block text-blue-600 mt-2">
          SELECT COUNT(DISTINCT Country) FROM Customers;
        </code>
      </div>

      <p className="text-yellow-700 font-semibold">
        Note: COUNT(DISTINCT column_name) is not supported in Microsoft Access
        databases.
      </p>

      <p>Here is a workaround for MS Access:</p>

      <div className="bg-gray-100 p-4 rounded-md">
        <code className="block text-blue-600 mt-2">
{`SELECT Count(*) AS DistinctCountries
FROM (SELECT DISTINCT Country FROM Customers);`}
        </code>
      </div>
    </div>
  );
};

export default SQLSelectDistinct;
