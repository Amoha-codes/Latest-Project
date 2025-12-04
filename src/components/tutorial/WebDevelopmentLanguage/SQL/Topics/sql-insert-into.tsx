import React from "react";

const SQLInsertInto: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">

      {/* Heading */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        SQL - INSERT INTO Statement
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <strong>INSERT INTO</strong> statement is used to insert new data records into a database table.
      </p>

      {/* Syntax */}
      <h2 className="text-2xl font-bold">INSERT INTO Syntax</h2>
      <p className="leading-relaxed">There are two ways to write the INSERT INTO statement:</p>

      {/* Syntax 1 */}
      <h3 className="text-xl font-semibold">1. Insert into specific columns</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);`}
      </pre>

      {/* Syntax 2 */}
      <h3 className="text-xl font-semibold">2. Insert into all columns</h3>
      <p className="leading-relaxed">
        Column names can be omitted if values are inserted for <strong>every column</strong> in the correct order:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`INSERT INTO table_name
VALUES (value1, value2, value3, ...);`}
      </pre>

      {/* Example 1 */}
      <h2 className="text-2xl font-bold">Example — Insert a New Customer</h2>
      <p className="leading-relaxed">
        Insert a new record into the <strong>Customers</strong> table:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');`}
      </pre>

      <p className="leading-relaxed">
        The <strong>CustomerID</strong> value is automatically generated because it's an auto-increment field.
      </p>

      {/* Insert only specific columns */}
      <h2 className="text-2xl font-bold">Insert Data Only in Selected Columns</h2>
      <p className="leading-relaxed">
        You can insert values into only some columns. Missing columns will get default or <strong>NULL</strong> values:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`INSERT INTO Customers (CustomerName, City, Country)
VALUES ('Cardinal', 'Stavanger', 'Norway');`}
      </pre>

      {/* Insert multiple rows */}
      <h2 className="text-2xl font-bold">Insert Multiple Rows</h2>
      <p className="leading-relaxed">
        You can insert more than one record using a single INSERT statement:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES
('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway'),
('Greasy Burger', 'Per Olsen', 'Gateveien 15', 'Sandnes', '4306', 'Norway'),
('Tasty Tee', 'Finn Egan', 'Streetroad 19B', 'Liverpool', 'L1 0AA', 'UK');`}
      </pre>

      <p className="leading-relaxed">
        ✅ Separate each record with a comma.
      </p>

    </div>
  );
};

export default SQLInsertInto;
