import React from "react";

const SqlCreateIndex: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        SQL CREATE INDEX Statement
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <b>CREATE INDEX</b> statement is used to create indexes in tables. Indexes help retrieve data more quickly. Users cannot see indexes—they only improve search/query performance.
      </p>

      <p className="leading-relaxed font-semibold">
        Note: Updating a table with indexes takes more time than updating a table without, since indexes need to be updated too.
      </p>

      {/* CREATE INDEX Syntax */}
      <h2 className="text-2xl font-bold pt-5">CREATE INDEX Syntax</h2>

      <p className="leading-relaxed font-semibold">Regular Index (duplicates allowed):</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`CREATE INDEX index_name
ON table_name (column1, column2, ...);`}
      </pre>

      <p className="leading-relaxed font-semibold">Unique Index (duplicates not allowed):</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`CREATE UNIQUE INDEX index_name
ON table_name (column1, column2, ...);`}
      </pre>

      {/* CREATE INDEX Example */}
      <h2 className="text-2xl font-bold pt-5">CREATE INDEX Examples</h2>

      <p className="leading-relaxed font-semibold">Create index on a single column:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`CREATE INDEX idx_lastname
ON Persons (LastName);`}
      </pre>

      <p className="leading-relaxed font-semibold">Create index on multiple columns:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`CREATE INDEX idx_pname
ON Persons (LastName, FirstName);`}
      </pre>

      {/* DROP INDEX */}
      <h2 className="text-2xl font-bold pt-5">DROP INDEX Statement</h2>

      <p className="leading-relaxed font-semibold">MS Access:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`DROP INDEX index_name ON table_name;`}
      </pre>

      <p className="leading-relaxed font-semibold">SQL Server:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`DROP INDEX table_name.index_name;`}
      </pre>

      <p className="leading-relaxed font-semibold">DB2 / Oracle:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`DROP INDEX index_name;`}
      </pre>

      <p className="leading-relaxed font-semibold">MySQL:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`ALTER TABLE table_name
DROP INDEX index_name;`}
      </pre>
    </div>
  );
};

export default SqlCreateIndex;
