import React from "react";

const SqlLikeOperator: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        SQL LIKE Operator
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <strong>LIKE</strong> operator is used in a{" "}
        <strong>WHERE</strong> clause to search for a specified{" "}
        <strong>pattern</strong> in a column.
      </p>

      <p className="leading-relaxed">
        LIKE is often used with <strong>wildcards</strong> to filter text-based
        values.
      </p>

      {/* Wildcards */}
      <h2 className="text-2xl font-bold">Wildcards Used with LIKE</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>%</strong> — Represents zero, one, or multiple characters
        </li>
        <li>
          <strong>_</strong> — Represents exactly one character
        </li>
      </ul>

      {/* Basic Example */}
      <h2 className="text-2xl font-bold">Example</h2>
      <p>Select all customers whose names start with "a":</p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono overflow-x-auto">
{`SELECT * FROM Customers
WHERE CustomerName LIKE 'a%';`}
      </pre>

      {/* Syntax */}
      <h2 className="text-2xl font-bold">Syntax</h2>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono overflow-x-auto">
{`SELECT column1, column2, ...
FROM table_name
WHERE columnN LIKE pattern;`}
      </pre>

      {/* Demo Table */}
      <h2 className="text-2xl font-bold">Demo Database</h2>
      <p>Example data from the Customers table:</p>

      <table className="table-auto border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border px-3 py-1">CustomerID</th>
            <th className="border px-3 py-1">CustomerName</th>
            <th className="border px-3 py-1">City</th>
            <th className="border px-3 py-1">Country</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-3 py-1">1</td>
            <td className="border px-3 py-1">Alfreds Futterkiste</td>
            <td className="border px-3 py-1">Berlin</td>
            <td className="border px-3 py-1">Germany</td>
          </tr>
          <tr>
            <td className="border px-3 py-1">2</td>
            <td className="border px-3 py-1">
              Ana Trujillo Emparedados y helados
            </td>
            <td className="border px-3 py-1">México D.F.</td>
            <td className="border px-3 py-1">Mexico</td>
          </tr>
          <tr>
            <td className="border px-3 py-1">3</td>
            <td className="border px-3 py-1">Around the Horn</td>
            <td className="border px-3 py-1">London</td>
            <td className="border px-3 py-1">UK</td>
          </tr>
        </tbody>
      </table>

      {/* _ wildcard */}
      <h2 className="text-2xl font-bold">The _ Wildcard</h2>
      <p>The <strong>_</strong> wildcard represents a single character.</p>
      <p>
        Return all customers from a city starting with <strong>L</strong>,
        followed by one character, then <strong>nd</strong>, and two more
        characters:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono overflow-x-auto">
{`SELECT * FROM Customers
WHERE City LIKE 'L_nd__';`}
      </pre>

      {/* % wildcard */}
      <h2 className="text-2xl font-bold">The % Wildcard</h2>
      <p>Return all customers from cities containing the letter "L":</p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono overflow-x-auto">
{`SELECT * FROM Customers
WHERE City LIKE '%L%';`}
      </pre>

      {/* Starts With */}
      <h2 className="text-2xl font-bold">Starts With</h2>
      <p>Return customers whose names start with "La":</p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono overflow-x-auto">
{`SELECT * FROM Customers
WHERE CustomerName LIKE 'La%';`}
      </pre>

      {/* AND/OR */}
      <p>Return customers starting with "a" or "b":</p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono overflow-x-auto">
{`SELECT * FROM Customers
WHERE CustomerName LIKE 'a%' OR CustomerName LIKE 'b%';`}
      </pre>

      {/* Ends With */}
      <h2 className="text-2xl font-bold">Ends With</h2>
      <p>Return customers whose names end with "a":</p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono overflow-x-auto">
{`SELECT * FROM Customers
WHERE CustomerName LIKE '%a';`}
      </pre>

      {/* Contains */}
      <h2 className="text-2xl font-bold">Contains</h2>
      <p>Return customers whose names contain "or":</p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono overflow-x-auto">
{`SELECT * FROM Customers
WHERE CustomerName LIKE '%or%';`}
      </pre>

      {/* Combine Wildcards */}
      <h2 className="text-2xl font-bold">Combine Wildcards</h2>
      <p>Return customers starting with "a" and at least 3 characters long:</p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono overflow-x-auto">
{`SELECT * FROM Customers
WHERE CustomerName LIKE 'a__%';`}
      </pre>

      <p>Return customers with "r" as the second character:</p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono overflow-x-auto">
{`SELECT * FROM Customers
WHERE CustomerName LIKE '_r%';`}
      </pre>

      {/* Without Wildcards */}
      <h2 className="text-2xl font-bold">Without Wildcard</h2>
      <p>
        If no wildcard is used, LIKE behaves like an exact match comparison.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono overflow-x-auto">
{`SELECT * FROM Customers
WHERE Country LIKE 'Spain';`}
      </pre>
    </div>
  );
};

export default SqlLikeOperator;
