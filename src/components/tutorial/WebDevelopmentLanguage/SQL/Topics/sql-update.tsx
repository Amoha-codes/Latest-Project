import React from "react";

const SQLUpdateStatement: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">

      {/* Heading */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        SQL - UPDATE Statement
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <strong>UPDATE</strong> statement is used to modify existing records in a table.
      </p>

      {/* Syntax */}
      <h2 className="text-2xl font-bold">UPDATE Syntax</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;`}
      </pre>

      <p className="leading-relaxed font-semibold text-red-600">
        ⚠️ Always use a <strong>WHERE</strong> clause when updating — otherwise, all rows will be updated!
      </p>

      {/* Demo Table */}
      <h2 className="text-2xl font-bold">Demo Database</h2>
      <p className="leading-relaxed">
        Below is a selection from the <strong>Customers</strong> table used in the examples:
      </p>

      {/* Update One Record */}
      <h2 className="text-2xl font-bold">UPDATE Single Record</h2>
      <p className="leading-relaxed">
        Update the first customer (<strong>CustomerID = 1</strong>) with a new contact person and city:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`UPDATE Customers
SET ContactName = 'Alfred Schmidt', City = 'Frankfurt'
WHERE CustomerID = 1;`}
      </pre>

      {/* Multiple Records Update */}
      <h2 className="text-2xl font-bold">UPDATE Multiple Records</h2>
      <p className="leading-relaxed">
        Update all customers from <strong>Mexico</strong>:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`UPDATE Customers
SET ContactName = 'Juan'
WHERE Country = 'Mexico';`}
      </pre>

      {/* Update Warning */}
      <h2 className="text-2xl font-bold">Update Warning!</h2>
      <p className="leading-relaxed">
        If you omit the <strong>WHERE</strong> clause, <strong>ALL</strong> records in the table will be updated:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`UPDATE Customers
SET ContactName = 'Juan';`}
      </pre>

      <p className="leading-relaxed font-semibold text-red-600">
        ❌ Avoid running UPDATE without WHERE — it may cause data loss!
      </p>

    </div>
  );
};

export default SQLUpdateStatement;
