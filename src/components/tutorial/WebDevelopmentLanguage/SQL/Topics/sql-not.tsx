import React from "react";

const SQLNotOperator: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">

      {/* Heading */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">SQL - NOT Operator</h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <strong>NOT</strong> operator is used to return records that do{" "}
        <strong>not satisfy</strong> a given condition. It reverses the result of the condition.
      </p>

      {/* Example 1 */}
      <h2 className="text-2xl font-bold">Example — Customers NOT from Spain</h2>
      <p className="leading-relaxed">
        Select all customers that are <strong>not</strong> located in Spain:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT *
FROM Customers
WHERE NOT Country = 'Spain';`}
      </pre>

      {/* Syntax */}
      <h2 className="text-2xl font-bold">Syntax</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT column1, column2, ...
FROM table_name
WHERE NOT condition;`}
      </pre>

      {/* Example 2 */}
      <h2 className="text-2xl font-bold">NOT LIKE</h2>
      <p className="leading-relaxed">
        Select customers whose names <strong>do not start</strong> with "A":
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT *
FROM Customers
WHERE CustomerName NOT LIKE 'A%';`}
      </pre>

      {/* Example 3 */}
      <h2 className="text-2xl font-bold">NOT BETWEEN</h2>
      <p className="leading-relaxed">
        Select customers with CustomerID <strong>outside</strong> the range 10 to 60:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT *
FROM Customers
WHERE CustomerID NOT BETWEEN 10 AND 60;`}
      </pre>

      {/* Example 4 */}
      <h2 className="text-2xl font-bold">NOT IN</h2>
      <p className="leading-relaxed">
        Select customers <strong>not</strong> from Paris or London:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT *
FROM Customers
WHERE City NOT IN ('Paris', 'London');`}
      </pre>

      {/* Example 5 */}
      <h2 className="text-2xl font-bold">NOT Greater Than</h2>
      <p className="leading-relaxed">
        Select customers with CustomerID <strong>not greater than</strong> 50:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT *
FROM Customers
WHERE NOT CustomerID > 50;`}
      </pre>

      {/* Example 6 */}
      <h2 className="text-2xl font-bold">NOT Less Than</h2>
      <p className="leading-relaxed">
        Select customers with CustomerID <strong>not less than</strong> 50:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT *
FROM Customers
WHERE NOT CustomerID < 50;`}
      </pre>

    </div>
  );
};

export default SQLNotOperator;
