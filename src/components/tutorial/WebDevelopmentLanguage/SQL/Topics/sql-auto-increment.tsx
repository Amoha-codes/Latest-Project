import React from "react";

const SqlAutoIncrement: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        SQL AUTO INCREMENT Field
      </h1>

      <p className="leading-relaxed">
        Auto-increment allows a unique number to be generated automatically when a new record is inserted into a table.
        Usually used for primary key fields.
      </p>

      {/* MySQL */}
      <h2 className="text-2xl font-bold pt-5">MySQL</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`CREATE TABLE Persons (
    Personid int NOT NULL AUTO_INCREMENT,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    PRIMARY KEY (Personid)
);`}
      </pre>
      <p className="leading-relaxed">
        Set a custom starting value for AUTO_INCREMENT:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`ALTER TABLE Persons AUTO_INCREMENT = 100;`}
      </pre>
      <p className="leading-relaxed">
        Insert a new record (Personid is auto-generated):
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`INSERT INTO Persons (FirstName, LastName)
VALUES ('Lars','Monsen');`}
      </pre>

      {/* SQL Server */}
      <h2 className="text-2xl font-bold pt-5">SQL Server</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`CREATE TABLE Persons (
    Personid int IDENTITY(1,1) PRIMARY KEY,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int
);`}
      </pre>
      <p className="leading-relaxed">
        Insert a new record (Personid is auto-generated):
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`INSERT INTO Persons (FirstName, LastName)
VALUES ('Lars','Monsen');`}
      </pre>

      {/* MS Access */}
      <h2 className="text-2xl font-bold pt-5">MS Access</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`CREATE TABLE Persons (
    Personid AUTOINCREMENT PRIMARY KEY,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int
);`}
      </pre>

      {/* Oracle */}
      <h2 className="text-2xl font-bold pt-5">Oracle</h2>
      <p className="leading-relaxed">
        Oracle uses a SEQUENCE object to generate auto-increment values.
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`CREATE SEQUENCE seq_person
MINVALUE 1
START WITH 1
INCREMENT BY 1
CACHE 10;`}
      </pre>
      <p className="leading-relaxed">
        Insert a new record using the sequence:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`INSERT INTO Persons (Personid, FirstName, LastName)
VALUES (seq_person.nextval, 'Lars','Monsen');`}
      </pre>
    </div>
  );
};

export default SqlAutoIncrement;
