import React from "react";

const SqlGroupBy: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        SQL GROUP BY Statement
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <b>GROUP BY</b> statement groups rows that have the same values into summary rows,  
        like "find the number of customers in each country".  
        It is often used with aggregate functions like <b>COUNT()</b>, <b>MAX()</b>, <b>MIN()</b>, <b>SUM()</b>, and <b>AVG()</b>.
      </p>

      {/* Syntax */}
      <h2 className="text-2xl font-bold pt-5">GROUP BY Syntax</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT column_name(s)
FROM table_name
WHERE condition
GROUP BY column_name(s)
ORDER BY column_name(s);`}
      </pre>

      {/* Demo Database */}
      <h2 className="text-2xl font-bold pt-5">Demo Tables</h2>
      <p className="leading-relaxed font-semibold">Customers Table</p>
      <table className="w-full border text-sm mb-4">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">CustomerID</th>
            <th className="border p-2">CustomerName</th>
            <th className="border p-2">ContactName</th>
            <th className="border p-2">City</th>
            <th className="border p-2">Country</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">1</td>
            <td className="border p-2">Alfreds Futterkiste</td>
            <td className="border p-2">Maria Anders</td>
            <td className="border p-2">Berlin</td>
            <td className="border p-2">Germany</td>
          </tr>
          <tr>
            <td className="border p-2">2</td>
            <td className="border p-2">Ana Trujillo Emparedados y helados</td>
            <td className="border p-2">Ana Trujillo</td>
            <td className="border p-2">México D.F.</td>
            <td className="border p-2">Mexico</td>
          </tr>
        </tbody>
      </table>

      {/* Examples */}
      <h2 className="text-2xl font-bold pt-5">SQL GROUP BY Examples</h2>

      <p className="leading-relaxed font-semibold">1. Count customers in each country:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country;`}
      </pre>

      <p className="leading-relaxed font-semibold">2. Count customers in each country sorted descending:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country
ORDER BY COUNT(CustomerID) DESC;`}
      </pre>

      {/* Orders and Shippers */}
      <p className="leading-relaxed font-semibold">GROUP BY with JOIN Example:</p>
      <p className="leading-relaxed">
        List the number of orders sent by each shipper:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT Shippers.ShipperName, COUNT(Orders.OrderID) AS NumberOfOrders
FROM Orders
LEFT JOIN Shippers ON Orders.ShipperID = Shippers.ShipperID
GROUP BY ShipperName;`}
      </pre>
    </div>
  );
};

export default SqlGroupBy;
