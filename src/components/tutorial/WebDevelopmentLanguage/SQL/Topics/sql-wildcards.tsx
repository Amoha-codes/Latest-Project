import React from "react";

const SqlWildcards: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        SQL - Wildcards
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        Wildcard characters are used with the <b>LIKE</b> operator to search for
        a specified pattern in a column. They help match partial values instead
        of exact ones.
      </p>

      {/* Example */}
      <div className="bg-gray-100 p-4 rounded-lg shadow">
        <p className="font-semibold mb-2">
          Return all customers that start with the letter 'a':
        </p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT * FROM Customers
WHERE CustomerName LIKE 'a%';`}
        </pre>
      </div>

      {/* Wildcard Table */}
      <h2 className="text-2xl font-bold pt-5">Wildcard Characters</h2>
      <table className="w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Symbol</th>
            <th className="border p-2">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">%</td>
            <td className="border p-2">Represents zero or more characters</td>
          </tr>
          <tr>
            <td className="border p-2">_</td>
            <td className="border p-2">Represents a single character</td>
          </tr>
          <tr>
            <td className="border p-2">[]</td>
            <td className="border p-2">
              Represents any single character within the brackets*
            </td>
          </tr>
          <tr>
            <td className="border p-2">^</td>
            <td className="border p-2">
              Represents any character NOT in the brackets*
            </td>
          </tr>
          <tr>
            <td className="border p-2">-</td>
            <td className="border p-2">
              Represents any character within a range*
            </td>
          </tr>
          <tr>
            <td className="border p-2">{`{}`}</td>
            <td className="border p-2">Represents escaped characters**</td>
          </tr>
        </tbody>
      </table>

      <p className="text-sm text-gray-600 italic">
        * Not supported in PostgreSQL and MySQL databases. <br />
        ** Supported only in Oracle databases.
      </p>

      {/* % Wildcard examples */}
      <h2 className="text-2xl font-bold pt-5">Using the % Wildcard</h2>

      <div className="bg-gray-100 p-4 rounded-lg shadow">
        <p className="font-semibold mb-2">
          Return all customers that end with "es":
        </p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT * FROM Customers
WHERE CustomerName LIKE '%es';`}
        </pre>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow">
        <p className="font-semibold mb-2">
          Return all customers containing "mer":
        </p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT * FROM Customers
WHERE CustomerName LIKE '%mer%';`}
        </pre>
      </div>

      {/* _ Wildcard examples */}
      <h2 className="text-2xl font-bold pt-5">Using the _ Wildcard</h2>

      <div className="bg-gray-100 p-4 rounded-lg shadow">
        <p className="font-semibold mb-2">
          Return customers from a city ending in "ondon":
        </p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT * FROM Customers
WHERE City LIKE '_ondon';`}
        </pre>
      </div>

      {/* [] Wildcard */}
      <h2 className="text-2xl font-bold pt-5">Using the [] Wildcard</h2>

      <div className="bg-gray-100 p-4 rounded-lg shadow">
        <p className="font-semibold mb-2">
          Return customers starting with "b", "s", or "p":
        </p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT * FROM Customers
WHERE CustomerName LIKE '[bsp]%';`}
        </pre>
      </div>

      {/* - Range Wildcard */}
      <h2 className="text-2xl font-bold pt-5">Using the - Wildcard</h2>

      <div className="bg-gray-100 p-4 rounded-lg shadow">
        <p className="font-semibold mb-2">
          Return customers starting with letters a–f:
        </p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT * FROM Customers
WHERE CustomerName LIKE '[a-f]%';`}
        </pre>
      </div>

      {/* Combine */}
      <h2 className="text-2xl font-bold pt-5">Combine Wildcards</h2>

      <div className="bg-gray-100 p-4 rounded-lg shadow">
        <p className="font-semibold mb-2">
          Return customers starting with "a" and at least 3 characters long:
        </p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT * FROM Customers
WHERE CustomerName LIKE 'a__%';`}
        </pre>
      </div>

      {/* Without wildcard */}
      <h2 className="text-2xl font-bold pt-5">Without Wildcard</h2>

      <div className="bg-gray-100 p-4 rounded-lg shadow">
        <p className="font-semibold mb-2">Exact match example:</p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT * FROM Customers
WHERE Country = 'Spain';`}
        </pre>
      </div>
    </div>
  );
};

export default SqlWildcards;
