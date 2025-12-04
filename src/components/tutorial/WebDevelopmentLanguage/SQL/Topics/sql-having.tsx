import React from "react";

const SqlHaving: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        SQL HAVING Clause
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <b>HAVING</b> clause was added to SQL because the <b>WHERE</b> keyword cannot be used with aggregate functions.  
        It is used to filter groups created by <b>GROUP BY</b>.
      </p>

      {/* Syntax */}
      <h2 className="text-2xl font-bold pt-5">HAVING Syntax</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT column_name(s)
FROM table_name
WHERE condition
GROUP BY column_name(s)
HAVING condition
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
      <h2 className="text-2xl font-bold pt-5">SQL HAVING Examples</h2>

      <p className="leading-relaxed font-semibold">
        1. Count customers in each country with more than 5 customers:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country
HAVING COUNT(CustomerID) > 5;`}
      </pre>

      <p className="leading-relaxed font-semibold">
        2. Count customers in each country sorted high to low, only countries with more than 5 customers:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country
HAVING COUNT(CustomerID) > 5
ORDER BY COUNT(CustomerID) DESC;`}
      </pre>

      <p className="leading-relaxed font-semibold">
        3. List employees that have registered more than 10 orders:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT Employees.LastName, COUNT(Orders.OrderID) AS NumberOfOrders
FROM Orders
INNER JOIN Employees ON Orders.EmployeeID = Employees.EmployeeID
GROUP BY LastName
HAVING COUNT(Orders.OrderID) > 10;`}
      </pre>

      <p className="leading-relaxed font-semibold">
        4. Check if employees "Davolio" or "Fuller" have registered more than 25 orders:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT Employees.LastName, COUNT(Orders.OrderID) AS NumberOfOrders
FROM Orders
INNER JOIN Employees ON Orders.EmployeeID = Employees.EmployeeID
WHERE LastName = 'Davolio' OR LastName = 'Fuller'
GROUP BY LastName
HAVING COUNT(Orders.OrderID) > 25;`}
      </pre>
    </div>
  );
};

export default SqlHaving;
