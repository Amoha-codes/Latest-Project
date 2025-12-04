import React from "react";

const SqlViews: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        SQL Views
      </h1>

      <p className="leading-relaxed">
        A view is a virtual table based on the result-set of an SQL statement.
        It behaves like a real table with rows and columns, but it does not store data itself.
        Views always show up-to-date data because the database engine recreates the view every time it is queried.
      </p>

      <h2 className="text-2xl font-bold pt-5">SQL CREATE VIEW Syntax</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`CREATE VIEW view_name AS
SELECT column1, column2, ...
FROM table_name
WHERE condition;`}
      </pre>

      <h2 className="text-2xl font-bold pt-5">Examples</h2>

      <p className="leading-relaxed font-bold">View for all customers from Brazil:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`CREATE VIEW [Brazil Customers] AS
SELECT CustomerName, ContactName
FROM Customers
WHERE Country = 'Brazil';`}
      </pre>
      <p className="leading-relaxed">
        Query the view:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT * FROM [Brazil Customers];`}
      </pre>

      <p className="leading-relaxed font-bold">
        View for products with price above average:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`CREATE VIEW [Products Above Average Price] AS
SELECT ProductName, Price
FROM Products
WHERE Price > (SELECT AVG(Price) FROM Products);`}
      </pre>
      <p className="leading-relaxed">
        Query the view:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT * FROM [Products Above Average Price];`}
      </pre>

      <h2 className="text-2xl font-bold pt-5">Updating a View</h2>
      <p className="leading-relaxed">
        Use <code>CREATE OR REPLACE VIEW</code> to update an existing view.
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`CREATE OR REPLACE VIEW [Brazil Customers] AS
SELECT CustomerName, ContactName, City
FROM Customers
WHERE Country = 'Brazil';`}
      </pre>

      <h2 className="text-2xl font-bold pt-5">Dropping a View</h2>
      <p className="leading-relaxed">
        Use <code>DROP VIEW</code> to delete a view:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`DROP VIEW [Brazil Customers];`}
      </pre>
    </div>
  );
};

export default SqlViews;
