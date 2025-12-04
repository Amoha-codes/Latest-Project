import React from "react";

const SQLWhereClause: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        SQL - WHERE Clause
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <strong>WHERE</strong> clause in SQL is used to filter records and
        extract only those rows that meet a specified condition.
      </p>

      {/* Example */}
      <h2 className="text-2xl font-bold">Example</h2>
      <p>Select all customers from Mexico:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT * FROM Customers
WHERE Country = 'Mexico';`}
      </pre>

      {/* Syntax */}
      <h2 className="text-2xl font-bold">Syntax</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT column1, column2, ...
FROM table_name
WHERE condition;`}
      </pre>

      <p className="leading-relaxed">
        <strong>Note:</strong> The WHERE clause can be used with{" "}
        <strong>SELECT, UPDATE, DELETE</strong>, and more.
      </p>

      {/* Table Info */}
      <h2 className="text-2xl font-bold">Demo Customers Table</h2>
      <p>Sample records from the Customers table:</p>

      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-gray-400 w-full text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-3 py-2">CustomerID</th>
              <th className="border px-3 py-2">CustomerName</th>
              <th className="border px-3 py-2">Country</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-3 py-2">1</td>
              <td className="border px-3 py-2">Alfreds Futterkiste</td>
              <td className="border px-3 py-2">Germany</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">2</td>
              <td className="border px-3 py-2">
                Ana Trujillo Emparedados y helados
              </td>
              <td className="border px-3 py-2">Mexico</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">3</td>
              <td className="border px-3 py-2">Antonio Moreno Taquería</td>
              <td className="border px-3 py-2">Mexico</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Text vs Numeric */}
      <h2 className="text-2xl font-bold">Text Fields vs Numeric Fields</h2>
      <p>
        SQL requires <strong>single quotes</strong> around text values. Numeric
        values should NOT be enclosed in quotes.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT * FROM Customers
WHERE CustomerID = 1;`}
      </pre>

      {/* Operators */}
      <h2 className="text-2xl font-bold">Operators in WHERE Clause</h2>
      <p>You can use different operators to filter data:</p>

      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-gray-400 w-full text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-3 py-2">Operator</th>
              <th className="border px-3 py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-3 py-2">=</td>
              <td className="border px-3 py-2">Equal</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">&gt;</td>
              <td className="border px-3 py-2">Greater than</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">&lt;</td>
              <td className="border px-3 py-2">Less than</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">&gt;=</td>
              <td className="border px-3 py-2">Greater than or equal</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">&lt;=</td>
              <td className="border px-3 py-2">Less than or equal</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">&lt;&gt;</td>
              <td className="border px-3 py-2">
                Not equal (or <code>!=</code> in some SQL versions)
              </td>
            </tr>
            <tr>
              <td className="border px-3 py-2">BETWEEN</td>
              <td className="border px-3 py-2">Between a range</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">LIKE</td>
              <td className="border px-3 py-2">Search pattern</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">IN</td>
              <td className="border px-3 py-2">Multiple possible values</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SQLWhereClause;
