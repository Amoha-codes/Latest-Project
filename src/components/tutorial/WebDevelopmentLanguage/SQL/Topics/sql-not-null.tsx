import React from "react";

const SqlNotNull: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        SQL NOT NULL Constraint
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        By default, a column can hold <b>NULL</b> values. The <b>NOT NULL</b> 
        constraint enforces that a column cannot accept NULL values. 
        This ensures that a field always contains a value when inserting or updating records.
      </p>

      {/* NOT NULL on CREATE TABLE */}
      <h2 className="text-2xl font-bold pt-5">NOT NULL on CREATE TABLE</h2>
      <p className="leading-relaxed">
        The following SQL ensures that the <b>ID</b>, <b>LastName</b>, and <b>FirstName</b> 
        columns cannot have NULL values:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255) NOT NULL,
    Age int
);`}
      </pre>

      {/* NOT NULL on ALTER TABLE */}
      <h2 className="text-2xl font-bold pt-5">NOT NULL on ALTER TABLE</h2>
      <p className="leading-relaxed">
        If the table already exists, you can add a NOT NULL constraint to an existing column.
      </p>
      
      <p className="font-semibold">SQL Server / MS Access:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`ALTER TABLE Persons
ALTER COLUMN Age int NOT NULL;`}
      </pre>

      <p className="font-semibold">MySQL / Oracle (prior 10G):</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`ALTER TABLE Persons
MODIFY COLUMN Age int NOT NULL;`}
      </pre>

      <p className="font-semibold">Oracle 10G and later:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`ALTER TABLE Persons
MODIFY Age int NOT NULL;`}
      </pre>
    </div>
  );
};

export default SqlNotNull;
