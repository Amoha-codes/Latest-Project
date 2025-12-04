import React from "react";

const SqlTopLimit: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        SQL TOP, LIMIT, FETCH FIRST, or ROWNUM Clause
      </h1>

      <p className="leading-relaxed">
        The <strong>SELECT TOP</strong>, <strong>LIMIT</strong>,{" "}
        <strong>FETCH FIRST</strong>, and <strong>ROWNUM</strong> clauses are
        used to specify the number of records to return from a query. They are
        especially useful when working with large tables to improve performance.
      </p>

      {/* SQL Server TOP Example */}
      <h2 className="text-2xl font-bold">Example — SQL Server</h2>
      <p>Select the first 3 records from the Customers table:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono overflow-x-auto">
{`SELECT TOP 3 * FROM Customers;`}
      </pre>

      <p className="leading-relaxed">
        Note: Not all database systems support <strong>SELECT TOP</strong>. For
        example, MySQL uses <strong>LIMIT</strong>, while Oracle uses{" "}
        <strong>FETCH FIRST</strong> or <strong>ROWNUM</strong>.
      </p>

      {/* Syntax */}
      <h2 className="text-2xl font-bold">Syntax by Database System</h2>

      <h3 className="text-xl font-semibold">SQL Server / MS Access:</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono overflow-x-auto">
{`SELECT TOP number|percent column_name(s)
FROM table_name
WHERE condition;`}
      </pre>

      <h3 className="text-xl font-semibold">MySQL:</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono overflow-x-auto">
{`SELECT column_name(s)
FROM table_name
WHERE condition
LIMIT number;`}
      </pre>

      <h3 className="text-xl font-semibold">Oracle 12 and later:</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono overflow-x-auto">
{`SELECT column_name(s)
FROM table_name
ORDER BY column_name(s)
FETCH FIRST number ROWS ONLY;`}
      </pre>

      <h3 className="text-xl font-semibold">Older Oracle (ROWNUM):</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono overflow-x-auto">
{`SELECT column_name(s)
FROM table_name
WHERE ROWNUM <= number;`}
      </pre>

      {/* Demo Table */}
      <h2 className="text-2xl font-bold">Demo Database</h2>
      <p>Sample records from the Customers table:</p>

      <table className="table-auto border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border px-3 py-1">CustomerID</th>
            <th className="border px-3 py-1">CustomerName</th>
            <th className="border px-3 py-1">ContactName</th>
            <th className="border px-3 py-1">Country</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-3 py-1">1</td>
            <td className="border px-3 py-1">Alfreds Futterkiste</td>
            <td className="border px-3 py-1">Maria Anders</td>
            <td className="border px-3 py-1">Germany</td>
          </tr>
          <tr>
            <td className="border px-3 py-1">2</td>
            <td className="border px-3 py-1">Ana Trujillo Emparedados</td>
            <td className="border px-3 py-1">Ana Trujillo</td>
            <td className="border px-3 py-1">Mexico</td>
          </tr>
          <tr>
            <td className="border px-3 py-1">3</td>
            <td className="border px-3 py-1">Antonio Moreno Taquería</td>
            <td className="border px-3 py-1">Antonio Moreno</td>
            <td className="border px-3 py-1">Mexico</td>
          </tr>
        </tbody>
      </table>

      {/* LIMIT Example */}
      <h2 className="text-2xl font-bold">LIMIT — MySQL Example</h2>
      <p>Select the first 3 records:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono overflow-x-auto">
{`SELECT * FROM Customers
LIMIT 3;`}
      </pre>

      {/* FETCH FIRST Example */}
      <h2 className="text-2xl font-bold">FETCH FIRST — Oracle Example</h2>
      <p>Select the first 3 records:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono overflow-x-auto">
{`SELECT * FROM Customers
FETCH FIRST 3 ROWS ONLY;`}
      </pre>

      {/* TOP PERCENT */}
      <h2 className="text-2xl font-bold">SQL TOP PERCENT Example</h2>
      <p>Select the first 50% of records (SQL Server/MS Access):</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono overflow-x-auto">
{`SELECT TOP 50 PERCENT * FROM Customers;`}
      </pre>

      <p>Oracle equivalent:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono overflow-x-auto">
{`SELECT * FROM Customers
FETCH FIRST 50 PERCENT ROWS ONLY;`}
      </pre>

      {/* WHERE Clause */}
      <h2 className="text-2xl font-bold">Add a WHERE Clause</h2>
      <p>Select the first 3 customers from Germany (SQL Server):</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono overflow-x-auto">
{`SELECT TOP 3 * FROM Customers
WHERE Country='Germany';`}
      </pre>

      <p>MySQL:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono overflow-x-auto">
{`SELECT * FROM Customers
WHERE Country='Germany'
LIMIT 3;`}
      </pre>

      <p>Oracle:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono overflow-x-auto">
{`SELECT * FROM Customers
WHERE Country='Germany'
FETCH FIRST 3 ROWS ONLY;`}
      </pre>

      {/* ORDER BY */}
      <h2 className="text-2xl font-bold">Add ORDER BY</h2>
      <p>
        Return the first 3 customers sorted in reverse alphabetical order
        (SQL Server/MS Access):
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono overflow-x-auto">
{`SELECT TOP 3 * FROM Customers
ORDER BY CustomerName DESC;`}
      </pre>

      <p>MySQL:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono overflow-x-auto">
{`SELECT * FROM Customers
ORDER BY CustomerName DESC
LIMIT 3;`}
      </pre>

      <p>Oracle:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono overflow-x-auto">
{`SELECT * FROM Customers
ORDER BY CustomerName DESC
FETCH FIRST 3 ROWS ONLY;`}
      </pre>
    </div>
  );
};

export default SqlTopLimit;
