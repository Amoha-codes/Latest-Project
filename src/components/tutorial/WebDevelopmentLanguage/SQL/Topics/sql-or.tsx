import React from "react";

const SQLOROperator: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        SQL - OR Operator
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <strong>OR</strong> operator is used in the{" "}
        <strong>WHERE</strong> clause to filter records based on{" "}
        <strong>multiple conditions</strong>. It returns a record if{" "}
        <strong>any</strong> of the conditions are TRUE.
      </p>

      {/* Example */}
      <h2 className="text-2xl font-bold">Example</h2>
      <p>Select all customers from Germany or Spain:</p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT *
FROM Customers
WHERE Country = 'Germany' OR Country = 'Spain';`}
      </pre>

      {/* Syntax */}
      <h2 className="text-2xl font-bold">Syntax</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT column1, column2, ...
FROM table_name
WHERE condition1 OR condition2 OR condition3 ...;`}
      </pre>

      {/* OR vs AND */}
      <h2 className="text-2xl font-bold">OR vs AND</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>
          <strong>OR</strong> returns a record if{" "}
          <strong>any</strong> condition is TRUE.
        </li>
        <li>
          <strong>AND</strong> returns a record only if{" "}
          <strong>all</strong> conditions are TRUE.
        </li>
      </ul>

      {/* Demo Table */}
      <h2 className="text-2xl font-bold">Demo Customers Table</h2>
      <p>Example data used in queries:</p>

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

      {/* At Least One Condition Must Be True */}
      <h2 className="text-2xl font-bold">At Least One Condition Must Be True</h2>
      <p>
        Example: return customers where City is Berlin, or CustomerName starts
        with "G", or Country is Norway:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT * FROM Customers
WHERE City = 'Berlin' OR CustomerName LIKE 'G%' OR Country = 'Norway';`}
      </pre>

      {/* Combining AND and OR */}
      <h2 className="text-2xl font-bold">Combining AND and OR</h2>
      <p>
        Use parentheses to ensure correct logical result. Example: Spanish
        customers whose name starts with "G" or "R":
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT * FROM Customers
WHERE Country = 'Spain' AND (CustomerName LIKE 'G%' OR CustomerName LIKE 'R%');`}
      </pre>

      {/* Without parentheses */}
      <h2 className="text-2xl font-bold">Without Parentheses</h2>
      <p>
        This returns Spanish customers starting with "G",{" "}
        <strong>plus</strong> all customers starting with "R", regardless of
        country:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT * FROM Customers
WHERE Country = 'Spain' AND CustomerName LIKE 'G%' OR CustomerName LIKE 'R%';`}
      </pre>
    </div>
  );
};

export default SQLOROperator;
