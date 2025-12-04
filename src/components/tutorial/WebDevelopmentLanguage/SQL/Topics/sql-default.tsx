import React from "react";

const SqlDefaultConstraint: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        SQL DEFAULT Constraint
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <b>DEFAULT</b> constraint is used to set a default value for a column. 
        If no value is specified when inserting a new record, the default value will be used.
      </p>

      {/* DEFAULT on CREATE TABLE */}
      <h2 className="text-2xl font-bold pt-5">DEFAULT on CREATE TABLE</h2>

      <p className="leading-relaxed font-semibold">Set default value for a column:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    City varchar(255) DEFAULT 'Sandnes'
);`}
      </pre>

      <p className="leading-relaxed font-semibold">Insert system-generated values (e.g., current date):</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`CREATE TABLE Orders (
    ID int NOT NULL,
    OrderNumber int NOT NULL,
    OrderDate date DEFAULT GETDATE()
);`}
      </pre>

      {/* DEFAULT on ALTER TABLE */}
      <h2 className="text-2xl font-bold pt-5">DEFAULT on ALTER TABLE</h2>

      <p className="leading-relaxed font-semibold">MySQL:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`ALTER TABLE Persons
ALTER City SET DEFAULT 'Sandnes';`}
      </pre>

      <p className="leading-relaxed font-semibold">SQL Server:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`ALTER TABLE Persons
ADD CONSTRAINT df_City
DEFAULT 'Sandnes' FOR City;`}
      </pre>

      <p className="leading-relaxed font-semibold">MS Access:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`ALTER TABLE Persons
ALTER COLUMN City SET DEFAULT 'Sandnes';`}
      </pre>

      <p className="leading-relaxed font-semibold">Oracle:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`ALTER TABLE Persons
MODIFY City DEFAULT 'Sandnes';`}
      </pre>

      {/* DROP DEFAULT */}
      <h2 className="text-2xl font-bold pt-5">Dropping a DEFAULT Constraint</h2>

      <p className="leading-relaxed font-semibold">MySQL:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`ALTER TABLE Persons
ALTER City DROP DEFAULT;`}
      </pre>

      <p className="leading-relaxed font-semibold">SQL Server / Oracle / MS Access:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`ALTER TABLE Persons
ALTER COLUMN City DROP DEFAULT;`}
      </pre>
    </div>
  );
};

export default SqlDefaultConstraint;
