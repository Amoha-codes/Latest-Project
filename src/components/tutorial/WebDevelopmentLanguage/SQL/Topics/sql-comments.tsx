import React from "react";

const SqlComments: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        SQL Comments
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        Comments are used to explain sections of SQL statements or to prevent execution of SQL statements. 
        <b>Note:</b> Comments are not supported in Microsoft Access databases.
      </p>

      {/* Single-line Comments */}
      <h2 className="text-2xl font-bold pt-5">Single-line Comments</h2>
      <p className="leading-relaxed">
        Single-line comments start with <code>--</code>. Any text after <code>--</code> on the same line will be ignored.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`-- Select all:
SELECT * FROM Customers;

-- Ignore part of a statement:
SELECT * FROM Customers -- WHERE City='Berlin';

-- Ignore a full statement:
-- SELECT * FROM Customers;
SELECT * FROM Products;`}
      </pre>

      {/* Multi-line Comments */}
      <h2 className="text-2xl font-bold pt-5">Multi-line Comments</h2>
      <p className="leading-relaxed">
        Multi-line comments start with <code>/*</code> and end with <code>*/</code>. Anything between them is ignored.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`/* Select all the columns
   of all the records
   in the Customers table: */
SELECT * FROM Customers;

/* Ignore multiple statements:
SELECT * FROM Customers;
SELECT * FROM Products;
SELECT * FROM Orders;
SELECT * FROM Categories; */
SELECT * FROM Suppliers;

/* Ignore part of a line */
SELECT CustomerName, /*City,*/ Country FROM Customers;

/* Ignore part of a condition in WHERE clause */
SELECT *
FROM Customers
WHERE (CustomerName LIKE 'L%'
       OR CustomerName LIKE 'R%' /* OR CustomerName LIKE 'S%'
       OR CustomerName LIKE 'T%' */
       OR CustomerName LIKE 'W%')
AND Country='USA'
ORDER BY CustomerName;`}
      </pre>
    </div>
  );
};

export default SqlComments;
