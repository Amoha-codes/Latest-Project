import React from "react";

const SqlDelete: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        SQL DELETE Statement
      </h1>

      <p className="leading-relaxed">
        The <strong>DELETE statement</strong> is used to delete existing records
        from a table.
      </p>

      {/* Syntax */}
      <h2 className="text-2xl font-bold">DELETE Syntax</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono overflow-x-auto">
{`DELETE FROM table_name
WHERE condition;`}
      </pre>

      <p className="leading-relaxed text-red-600 font-semibold">
        ⚠️ Be careful! If you omit the <strong>WHERE</strong> clause, all
        records in the table will be deleted.
      </p>

      {/* Demo Table */}
      <h2 className="text-2xl font-bold">Demo Database</h2>
      <p>The following example uses a selection from the Customers table:</p>

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
        </tbody>
      </table>

      {/* Example */}
      <h2 className="text-2xl font-bold">SQL DELETE Example</h2>
      <p>
        Delete the customer <strong>"Alfreds Futterkiste"</strong> from the
        Customers table:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono overflow-x-auto">
{`DELETE FROM Customers
WHERE CustomerName = 'Alfreds Futterkiste';`}
      </pre>

      {/* Delete All Records */}
      <h2 className="text-2xl font-bold">Delete All Records</h2>
      <p>
        Deletes all rows but keeps the table structure, indexes, and columns:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono overflow-x-auto">
{`DELETE FROM Customers;`}
      </pre>

      {/* Drop Table */}
      <h2 className="text-2xl font-bold">Delete a Table</h2>
      <p>To completely remove a table from the database:</p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono overflow-x-auto">
{`DROP TABLE Customers;`}
      </pre>
    </div>
  );
};

export default SqlDelete;
