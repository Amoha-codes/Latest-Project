import React from "react";

const SqlAlterTable: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        SQL ALTER TABLE Statement
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <b>ALTER TABLE</b> statement is used to add, delete, or modify columns in an existing table. 
        It is also used to add or drop constraints on a table.
      </p>

      {/* ADD Column */}
      <h2 className="text-2xl font-bold pt-5">ALTER TABLE - ADD Column</h2>
      <p className="leading-relaxed">
        To add a column in a table, use the following syntax:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`ALTER TABLE table_name
ADD column_name datatype;`}
      </pre>
      <p className="leading-relaxed font-semibold">Example: Add "Email" column to "Customers"</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`ALTER TABLE Customers
ADD Email varchar(255);`}
      </pre>

      {/* DROP Column */}
      <h2 className="text-2xl font-bold pt-5">ALTER TABLE - DROP Column</h2>
      <p className="leading-relaxed">
        To delete a column in a table:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`ALTER TABLE table_name
DROP COLUMN column_name;`}
      </pre>
      <p className="leading-relaxed font-semibold">Example: Delete "Email" column from "Customers"</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`ALTER TABLE Customers
DROP COLUMN Email;`}
      </pre>

      {/* RENAME Column */}
      <h2 className="text-2xl font-bold pt-5">ALTER TABLE - RENAME Column</h2>
      <p className="leading-relaxed">
        To rename a column:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`-- Standard SQL (some databases)
ALTER TABLE table_name
RENAME COLUMN old_name TO new_name;

-- SQL Server
EXEC sp_rename 'table_name.old_name', 'new_name', 'COLUMN';`}
      </pre>

      {/* ALTER/MODIFY Data Type */}
      <h2 className="text-2xl font-bold pt-5">ALTER TABLE - MODIFY/ALTER Column Data Type</h2>
      <p className="leading-relaxed">
        Change the data type of a column:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`-- SQL Server / MS Access
ALTER TABLE table_name
ALTER COLUMN column_name datatype;

-- MySQL / Oracle (prior to 10G)
ALTER TABLE table_name
MODIFY COLUMN column_name datatype;

-- Oracle 10G and later
ALTER TABLE table_name
MODIFY column_name datatype;`}
      </pre>

      {/* Demo Table */}
      <h2 className="text-2xl font-bold pt-5">Demo Table: Persons</h2>
      <table className="w-full border text-sm mb-4">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">LastName</th>
            <th className="border p-2">FirstName</th>
            <th className="border p-2">Address</th>
            <th className="border p-2">City</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">1</td>
            <td className="border p-2">Hansen</td>
            <td className="border p-2">Ola</td>
            <td className="border p-2">Timoteivn 10</td>
            <td className="border p-2">Sandnes</td>
          </tr>
          <tr>
            <td className="border p-2">2</td>
            <td className="border p-2">Svendson</td>
            <td className="border p-2">Tove</td>
            <td className="border p-2">Borgvn 23</td>
            <td className="border p-2">Sandnes</td>
          </tr>
          <tr>
            <td className="border p-2">3</td>
            <td className="border p-2">Pettersen</td>
            <td className="border p-2">Kari</td>
            <td className="border p-2">Storgt 20</td>
            <td className="border p-2">Stavanger</td>
          </tr>
        </tbody>
      </table>

      {/* ALTER Examples */}
      <h2 className="text-2xl font-bold pt-5">ALTER TABLE Examples</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`-- Add "DateOfBirth" column
ALTER TABLE Persons
ADD DateOfBirth date;

-- Change data type of "DateOfBirth" column
ALTER TABLE Persons
ALTER COLUMN DateOfBirth year;

-- Drop "DateOfBirth" column
ALTER TABLE Persons
DROP COLUMN DateOfBirth;`}
      </pre>
    </div>
  );
};

export default SqlAlterTable;
