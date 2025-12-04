import React from "react";

const SqlDropTable: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        SQL DROP TABLE & TRUNCATE TABLE
      </h1>

      {/* DROP TABLE Intro */}
      <h2 className="text-2xl font-bold pt-5">SQL DROP TABLE Statement</h2>
      <p className="leading-relaxed">
        The <b>DROP TABLE</b> statement is used to delete an existing table in a database.
      </p>

      {/* DROP TABLE Syntax */}
      <h3 className="text-xl font-semibold pt-3">Syntax</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`DROP TABLE table_name;`}
      </pre>
      <p className="leading-relaxed text-red-600 font-semibold">
        Warning: Deleting a table will result in the loss of all data stored in it!
      </p>

      {/* DROP TABLE Example */}
      <h3 className="text-xl font-semibold pt-3">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`-- Drop the existing table "Shippers"
DROP TABLE Shippers;`}
      </pre>

      {/* TRUNCATE TABLE Intro */}
      <h2 className="text-2xl font-bold pt-5">SQL TRUNCATE TABLE Statement</h2>
      <p className="leading-relaxed">
        The <b>TRUNCATE TABLE</b> statement deletes all the data inside a table, but keeps the table structure intact.
      </p>

      {/* TRUNCATE TABLE Syntax */}
      <h3 className="text-xl font-semibold pt-3">Syntax</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`TRUNCATE TABLE table_name;`}
      </pre>
      <p className="leading-relaxed text-blue-600 font-semibold">
        Tip: Use TRUNCATE TABLE when you want to quickly delete all rows without removing the table itself.
      </p>
    </div>
  );
};

export default SqlDropTable;
