import React from "react";

const SqlCheckConstraint: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        SQL CHECK Constraint
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <b>CHECK</b> constraint is used to limit the range of values that can be inserted into a column. 
        You can also define table-level CHECK constraints that involve multiple columns.
      </p>

      {/* CHECK on CREATE TABLE */}
      <h2 className="text-2xl font-bold pt-5">CHECK on CREATE TABLE</h2>

      <p className="leading-relaxed font-semibold">MySQL:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    CHECK (Age>=18)
);`}
      </pre>

      <p className="leading-relaxed font-semibold">SQL Server / Oracle / MS Access:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int CHECK (Age>=18)
);`}
      </pre>

      <p className="leading-relaxed font-semibold">With named constraint and multi-column check:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    City varchar(255),
    CONSTRAINT CHK_Person CHECK (Age>=18 AND City='Sandnes')
);`}
      </pre>

      {/* CHECK on ALTER TABLE */}
      <h2 className="text-2xl font-bold pt-5">CHECK on ALTER TABLE</h2>

      <p className="leading-relaxed font-semibold">Simple CHECK on a column:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`ALTER TABLE Persons
ADD CHECK (Age>=18);`}
      </pre>

      <p className="leading-relaxed font-semibold">Named constraint / multi-column:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`ALTER TABLE Persons
ADD CONSTRAINT CHK_PersonAge CHECK (Age>=18 AND City='Sandnes');`}
      </pre>

      {/* DROP CHECK */}
      <h2 className="text-2xl font-bold pt-5">Dropping a CHECK Constraint</h2>

      <p className="leading-relaxed font-semibold">SQL Server / Oracle / MS Access:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`ALTER TABLE Persons
DROP CONSTRAINT CHK_PersonAge;`}
      </pre>

      <p className="leading-relaxed font-semibold">MySQL:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`ALTER TABLE Persons
DROP CHECK CHK_PersonAge;`}
      </pre>
    </div>
  );
};

export default SqlCheckConstraint;
