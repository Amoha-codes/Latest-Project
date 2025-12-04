import React from "react";

const SqlPrimaryKey: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        SQL PRIMARY KEY Constraint
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <b>PRIMARY KEY</b> constraint uniquely identifies each record in a table. 
        Primary keys must be unique and cannot contain <b>NULL</b> values. 
        Each table can have only one primary key, which can be a single column or multiple columns.
      </p>

      {/* PRIMARY KEY on CREATE TABLE */}
      <h2 className="text-2xl font-bold pt-5">PRIMARY KEY on CREATE TABLE</h2>
      <p className="leading-relaxed font-semibold">MySQL:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    PRIMARY KEY (ID)
);`}
      </pre>

      <p className="leading-relaxed font-semibold">SQL Server / Oracle / MS Access:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`CREATE TABLE Persons (
    ID int NOT NULL PRIMARY KEY,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int
);`}
      </pre>

      <p className="leading-relaxed font-semibold">
        PRIMARY KEY on multiple columns:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    CONSTRAINT PK_Person PRIMARY KEY (ID, LastName)
);`}
      </pre>

      {/* PRIMARY KEY on ALTER TABLE */}
      <h2 className="text-2xl font-bold pt-5">PRIMARY KEY on ALTER TABLE</h2>
      <p className="leading-relaxed">
        To add a PRIMARY KEY to an existing table:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`ALTER TABLE Persons
ADD PRIMARY KEY (ID);`}
      </pre>

      <p className="leading-relaxed">
        To define a PRIMARY KEY on multiple columns:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`ALTER TABLE Persons
ADD CONSTRAINT PK_Person PRIMARY KEY (ID, LastName);`}
      </pre>

      {/* DROP PRIMARY KEY */}
      <h2 className="text-2xl font-bold pt-5">Dropping a PRIMARY KEY Constraint</h2>
      <p className="leading-relaxed font-semibold">MySQL:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`ALTER TABLE Persons
DROP PRIMARY KEY;`}
      </pre>

      <p className="leading-relaxed font-semibold">SQL Server / Oracle / MS Access:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`ALTER TABLE Persons
DROP CONSTRAINT PK_Person;`}
      </pre>
    </div>
  );
};

export default SqlPrimaryKey;
