import React from "react";

const SqlCaseExpression: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        SQL CASE Expression
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <b>CASE</b> expression goes through conditions and returns a value when the first condition is met, similar to an <i>if-then-else</i> statement. If no conditions are true and there is no <b>ELSE</b> part, it returns <b>NULL</b>.
      </p>

      {/* Syntax */}
      <h2 className="text-2xl font-bold pt-5">CASE Syntax</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`CASE
    WHEN condition1 THEN result1
    WHEN condition2 THEN result2
    ...
    WHEN conditionN THEN resultN
    ELSE result
END;`}
      </pre>

      {/* Demo Table */}
      <h2 className="text-2xl font-bold pt-5">Demo Table</h2>
      <p className="leading-relaxed font-semibold">OrderDetails Table</p>
      <table className="w-full border text-sm mb-4">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">OrderDetailID</th>
            <th className="border p-2">OrderID</th>
            <th className="border p-2">ProductID</th>
            <th className="border p-2">Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">1</td>
            <td className="border p-2">10248</td>
            <td className="border p-2">11</td>
            <td className="border p-2">12</td>
          </tr>
          <tr>
            <td className="border p-2">2</td>
            <td className="border p-2">10248</td>
            <td className="border p-2">42</td>
            <td className="border p-2">10</td>
          </tr>
          <tr>
            <td className="border p-2">3</td>
            <td className="border p-2">10248</td>
            <td className="border p-2">72</td>
            <td className="border p-2">5</td>
          </tr>
        </tbody>
      </table>

      {/* CASE Examples */}
      <h2 className="text-2xl font-bold pt-5">SQL CASE Examples</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`-- Return a descriptive text based on Quantity
SELECT OrderID, Quantity,
CASE
    WHEN Quantity > 30 THEN 'The quantity is greater than 30'
    WHEN Quantity = 30 THEN 'The quantity is 30'
    ELSE 'The quantity is under 30'
END AS QuantityText
FROM OrderDetails;`}
      </pre>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`-- Order customers by City, or by Country if City is NULL
SELECT CustomerName, City, Country
FROM Customers
ORDER BY
CASE
    WHEN City IS NULL THEN Country
    ELSE City
END;`}
      </pre>
    </div>
  );
};

export default SqlCaseExpression;
