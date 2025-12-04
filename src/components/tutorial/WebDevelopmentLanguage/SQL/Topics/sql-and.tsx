import React from "react";

const SQLANDOperator: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        SQL - AND Operator
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <strong>AND</strong> operator is used inside the{" "}
        <strong>WHERE</strong> clause to filter records based on{" "}
        <strong>multiple conditions</strong>. All listed conditions must be TRUE
        for a record to be returned.
      </p>

      {/* Example */}
      <h2 className="text-2xl font-bold">Example</h2>
      <p>Select all customers from Spain whose names start with "G":</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT *
FROM Customers
WHERE Country = 'Spain' AND CustomerName LIKE 'G%';`}
      </pre>

      {/* Syntax */}
      <h2 className="text-2xl font-bold">Syntax</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT column1, column2, ...
FROM table_name
WHERE condition1 AND condition2 AND condition3 ...;`}
      </pre>

      {/* AND vs OR */}
      <h2 className="text-2xl font-bold">AND vs OR</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>
          <strong>AND</strong> returns a record only if{" "}
          <strong>all conditions are TRUE</strong>.
        </li>
        <li>
          <strong>OR</strong> returns a record if{" "}
          <strong>any condition is TRUE</strong>.
        </li>
      </ul>

      {/* Demo Table */}
      <h2 className="text-2xl font-bold">Demo Customers Table</h2>
      <p>Example rows:</p>

      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-gray-400 w-full text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-3 py-2">CustomerID</th>
              <th className="border px-3 py-2">CustomerName</th>
              <th className="border px-3 py-2">City</th>
              <th className="border px-3 py-2">Country</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-3 py-2">1</td>
              <td className="border px-3 py-2">Alfreds Futterkiste</td>
              <td className="border px-3 py-2">Berlin</td>
              <td className="border px-3 py-2">Germany</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">2</td>
              <td className="border px-3 py-2">
                Ana Trujillo Emparedados y helados
              </td>
              <td className="border px-3 py-2">México D.F.</td>
              <td className="border px-3 py-2">Mexico</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">4</td>
              <td className="border px-3 py-2">Around the Horn</td>
              <td className="border px-3 py-2">London</td>
              <td className="border px-3 py-2">UK</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* All Conditions Must Be True */}
      <h2 className="text-2xl font-bold">All Conditions Must Be True</h2>
      <p>
        Example: Return customers from Brazil, living in Rio de Janeiro, with an
        ID greater than 50:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT * FROM Customers
WHERE Country = 'Brazil'
AND City = 'Rio de Janeiro'
AND CustomerID > 50;`}
      </pre>

      {/* Combining AND and OR */}
      <h2 className="text-2xl font-bold">Combining AND and OR</h2>
      <p>
        This statement returns Spanish customers whose names start with "G" or
        "R". Parentheses ensure correct logical grouping:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT * FROM Customers
WHERE Country = 'Spain' AND (CustomerName LIKE 'G%' OR CustomerName LIKE 'R%');`}
      </pre>

      {/* Without parentheses */}
      <h2 className="text-2xl font-bold">Without Parentheses</h2>
      <p>
        This query returns Spanish customers whose names start with "G",{" "}
        <strong>plus</strong> all customers whose names start with "R"—
        regardless of country:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT * FROM Customers
WHERE Country = 'Spain' AND CustomerName LIKE 'G%' OR CustomerName LIKE 'R%';`}
      </pre>
    </div>
  );
};

export default SQLANDOperator;
