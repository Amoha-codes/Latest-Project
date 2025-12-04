import React from "react";

const SqlConstraints: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        SQL Constraints
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        SQL constraints are used to specify rules for the data in a table. 
        Constraints help ensure the accuracy and reliability of your data.
      </p>

      {/* How to Create Constraints */}
      <h2 className="text-2xl font-bold pt-5">Creating Constraints</h2>
      <p className="leading-relaxed">
        Constraints can be specified when a table is created using <b>CREATE TABLE</b>, 
        or added later using <b>ALTER TABLE</b>.
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`CREATE TABLE table_name (
    column1 datatype constraint,
    column2 datatype constraint,
    column3 datatype constraint,
    ...
);`}
      </pre>

      {/* Common SQL Constraints */}
      <h2 className="text-2xl font-bold pt-5">Common SQL Constraints</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <b>NOT NULL</b> - Ensures that a column cannot have a NULL value.
        </li>
        <li>
          <b>UNIQUE</b> - Ensures that all values in a column are different.
        </li>
        <li>
          <b>PRIMARY KEY</b> - Combines <b>NOT NULL</b> and <b>UNIQUE</b>; uniquely identifies each row.
        </li>
        <li>
          <b>FOREIGN KEY</b> - Maintains referential integrity between tables.
        </li>
        <li>
          <b>CHECK</b> - Ensures that the values in a column satisfy a specific condition.
        </li>
        <li>
          <b>DEFAULT</b> - Sets a default value for a column if no value is provided.
        </li>
        <li>
          <b>CREATE INDEX</b> - Speeds up retrieval of data from the database.
        </li>
      </ul>

      {/* Example */}
      <h2 className="text-2xl font-bold pt-5">Example: Table with Constraints</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`CREATE TABLE Persons (
    PersonID int NOT NULL PRIMARY KEY,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int CHECK (Age>=18),
    City varchar(255) DEFAULT 'Unknown'
);`}
      </pre>
      <p className="leading-relaxed">
        In this example:
        <ul className="list-disc list-inside pl-5">
          <li><b>PersonID</b> cannot be NULL and must be unique (PRIMARY KEY).</li>
          <li><b>LastName</b> cannot be NULL.</li>
          <li><b>Age</b> must be 18 or older.</li>
          <li><b>City</b> will default to 'Unknown' if no value is specified.</li>
        </ul>
      </p>
    </div>
  );
};

export default SqlConstraints;
