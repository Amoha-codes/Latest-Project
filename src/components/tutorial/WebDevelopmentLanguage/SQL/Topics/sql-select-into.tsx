import React from "react";

const SqlSelectInto: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        SQL SELECT INTO Statement
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <b>SELECT INTO</b> statement copies data from one table into a new table.
      </p>

      {/* Syntax */}
      <h2 className="text-2xl font-bold pt-5">SELECT INTO Syntax</h2>
      <p className="leading-relaxed">
        Copy all columns into a new table:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT *
INTO newtable [IN externaldb]
FROM oldtable
WHERE condition;`}
      </pre>

      <p className="leading-relaxed">
        Copy only some columns into a new table:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT column1, column2, column3, ...
INTO newtable [IN externaldb]
FROM oldtable
WHERE condition;`}
      </pre>

      <p className="leading-relaxed">
        The new table will be created with the column-names and types as defined in the old table. You can create new column names using the <b>AS</b> clause.
      </p>

      {/* Examples */}
      <h2 className="text-2xl font-bold pt-5">SQL SELECT INTO Examples</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`-- Create a backup copy of Customers
SELECT * INTO CustomersBackup2017
FROM Customers;`}
      </pre>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`-- Copy table into a new table in another database
SELECT * INTO CustomersBackup2017 IN 'Backup.mdb'
FROM Customers;`}
      </pre>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`-- Copy only a few columns into a new table
SELECT CustomerName, ContactName INTO CustomersBackup2017
FROM Customers;`}
      </pre>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`-- Copy only German customers into a new table
SELECT * INTO CustomersGermany
FROM Customers
WHERE Country = 'Germany';`}
      </pre>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`-- Copy data from more than one table into a new table
SELECT Customers.CustomerName, Orders.OrderID
INTO CustomersOrderBackup2017
FROM Customers
LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID;`}
      </pre>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`-- Create an empty table using the schema of another
SELECT * INTO newtable
FROM oldtable
WHERE 1 = 0;`}
      </pre>
    </div>
  );
};

export default SqlSelectInto;
