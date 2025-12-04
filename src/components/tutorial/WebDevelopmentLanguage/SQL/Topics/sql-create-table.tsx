import React from "react";

const SqlCreateTable: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        SQL CREATE TABLE Statement
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <b>CREATE TABLE</b> statement is used to create a new table in a database.
      </p>

      {/* Syntax */}
      <h2 className="text-2xl font-bold pt-5">Syntax</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`CREATE TABLE table_name (
    column1 datatype,
    column2 datatype,
    column3 datatype,
    ...
);`}
      </pre>
      <p className="leading-relaxed">
        <b>column</b> specifies the name of the column, and <b>datatype</b> specifies the type of data the column can hold (e.g., <code>varchar</code>, <code>int</code>, <code>date</code>, etc.).
      </p>

      {/* Example */}
      <h2 className="text-2xl font-bold pt-5">CREATE TABLE Example</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`CREATE TABLE Persons (
    PersonID int,
    LastName varchar(255),
    FirstName varchar(255),
    Address varchar(255),
    City varchar(255)
);`}
      </pre>
      <p className="leading-relaxed">
        The empty "Persons" table will now look like this:
      </p>
      <table className="w-full border text-sm mb-4">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">PersonID</th>
            <th className="border p-2">LastName</th>
            <th className="border p-2">FirstName</th>
            <th className="border p-2">Address</th>
            <th className="border p-2">City</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">&nbsp;</td>
            <td className="border p-2">&nbsp;</td>
            <td className="border p-2">&nbsp;</td>
            <td className="border p-2">&nbsp;</td>
            <td className="border p-2">&nbsp;</td>
          </tr>
        </tbody>
      </table>
      <p className="leading-relaxed text-blue-600 font-semibold">
        Tip: You can now fill this table with data using the SQL <b>INSERT INTO</b> statement.
      </p>

      {/* Create Table Using Another Table */}
      <h2 className="text-2xl font-bold pt-5">Create Table Using Another Table</h2>
      <p className="leading-relaxed">
        You can create a new table by copying the structure and/or data from an existing table.
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`CREATE TABLE new_table_name AS
SELECT column1, column2, ...
FROM existing_table_name
WHERE ...;`}
      </pre>
      <p className="leading-relaxed">
        Example: Creating a new table <b>TestTable</b> from the "Customers" table:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`CREATE TABLE TestTable AS
SELECT customername, contactname
FROM customers;`}
      </pre>
    </div>
  );
};

export default SqlCreateTable;
