import React from "react";

const SqlUnique: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        SQL UNIQUE Constraint
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <b>UNIQUE</b> constraint ensures that all values in a column are different. 
        Both <b>UNIQUE</b> and <b>PRIMARY KEY</b> constraints guarantee uniqueness, 
        but a table can have multiple UNIQUE constraints while only one PRIMARY KEY.
      </p>

      {/* UNIQUE on CREATE TABLE */}
      <h2 className="text-2xl font-bold pt-5">UNIQUE Constraint on CREATE TABLE</h2>
      <p className="leading-relaxed font-semibold">SQL Server / Oracle / MS Access:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`CREATE TABLE Persons (
    ID int NOT NULL UNIQUE,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int
);`}
      </pre>

      <p className="leading-relaxed font-semibold">MySQL:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    UNIQUE (ID)
);`}
      </pre>

      <p className="leading-relaxed font-semibold">
        Naming a UNIQUE constraint or applying it on multiple columns:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    CONSTRAINT UC_Person UNIQUE (ID, LastName)
);`}
      </pre>

      {/* UNIQUE on ALTER TABLE */}
      <h2 className="text-2xl font-bold pt-5">UNIQUE Constraint on ALTER TABLE</h2>
      <p className="leading-relaxed">
        To create a UNIQUE constraint on an existing table:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`ALTER TABLE Persons
ADD UNIQUE (ID);`}
      </pre>

      <p className="leading-relaxed">
        To name the UNIQUE constraint or apply it to multiple columns:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`ALTER TABLE Persons
ADD CONSTRAINT UC_Person UNIQUE (ID, LastName);`}
      </pre>

      {/* DROP UNIQUE Constraint */}
      <h2 className="text-2xl font-bold pt-5">Dropping a UNIQUE Constraint</h2>
      <p className="leading-relaxed font-semibold">MySQL:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`ALTER TABLE Persons
DROP INDEX UC_Person;`}
      </pre>

      <p className="leading-relaxed font-semibold">SQL Server / Oracle / MS Access:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`ALTER TABLE Persons
DROP CONSTRAINT UC_Person;`}
      </pre>
    </div>
  );
};

export default SqlUnique;
