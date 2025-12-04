import React from "react";

const SqlFullOuterJoin: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        SQL FULL OUTER JOIN
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <b>FULL OUTER JOIN</b> keyword returns <b>all records</b> when there is a match in 
        either the left table (table1) or the right table (table2). 
        If there is no match, the missing side will return <b>NULL</b>.
      </p>
      <p className="leading-relaxed">
        Tip: <b>FULL OUTER JOIN</b> and <b>FULL JOIN</b> are the same.
      </p>
      <p className="leading-relaxed font-semibold">
        Note: FULL OUTER JOIN can potentially return very large result sets!
      </p>

      {/* Syntax */}
      <h2 className="text-2xl font-bold pt-5">Syntax</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT column_name(s)
FROM table1
FULL OUTER JOIN table2
ON table1.column_name = table2.column_name
WHERE condition;`}
      </pre>

      {/* Demo Tables */}
      <h2 className="text-2xl font-bold pt-5">Demo Tables</h2>

      <p className="leading-relaxed font-semibold">Customers Table</p>
      <table className="w-full border text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">CustomerID</th>
            <th className="border p-2">CustomerName</th>
            <th className="border p-2">ContactName</th>
            <th className="border p-2">Address</th>
            <th className="border p-2">City</th>
            <th className="border p-2">PostalCode</th>
            <th className="border p-2">Country</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">1</td>
            <td className="border p-2">Alfreds Futterkiste</td>
            <td className="border p-2">Maria Anders</td>
            <td className="border p-2">Obere Str. 57</td>
            <td className="border p-2">Berlin</td>
            <td className="border p-2">12209</td>
            <td className="border p-2">Germany</td>
          </tr>
          <tr>
            <td className="border p-2">2</td>
            <td className="border p-2">Ana Trujillo Emparedados y helados</td>
            <td className="border p-2">Ana Trujillo</td>
            <td className="border p-2">Avda. de la Constitución 2222</td>
            <td className="border p-2">México D.F.</td>
            <td className="border p-2">05021</td>
            <td className="border p-2">Mexico</td>
          </tr>
          <tr>
            <td className="border p-2">3</td>
            <td className="border p-2">Antonio Moreno Taquería</td>
            <td className="border p-2">Antonio Moreno</td>
            <td className="border p-2">Mataderos 2312</td>
            <td className="border p-2">México D.F.</td>
            <td className="border p-2">05023</td>
            <td className="border p-2">Mexico</td>
          </tr>
        </tbody>
      </table>

      <p className="leading-relaxed font-semibold pt-5">Orders Table</p>
      <table className="w-full border text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">OrderID</th>
            <th className="border p-2">CustomerID</th>
            <th className="border p-2">EmployeeID</th>
            <th className="border p-2">OrderDate</th>
            <th className="border p-2">ShipperID</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">10308</td>
            <td className="border p-2">2</td>
            <td className="border p-2">7</td>
            <td className="border p-2">1996-09-18</td>
            <td className="border p-2">3</td>
          </tr>
          <tr>
            <td className="border p-2">10309</td>
            <td className="border p-2">37</td>
            <td className="border p-2">3</td>
            <td className="border p-2">1996-09-19</td>
            <td className="border p-2">1</td>
          </tr>
          <tr>
            <td className="border p-2">10310</td>
            <td className="border p-2">77</td>
            <td className="border p-2">8</td>
            <td className="border p-2">1996-09-20</td>
            <td className="border p-2">2</td>
          </tr>
        </tbody>
      </table>

      {/* FULL OUTER JOIN Example */}
      <h2 className="text-2xl font-bold pt-5">FULL OUTER JOIN Example</h2>
      <p className="leading-relaxed">
        Select all customers and all orders, whether they have a matching record or not:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT Customers.CustomerName, Orders.OrderID
FROM Customers
FULL OUTER JOIN Orders ON Customers.CustomerID = Orders.CustomerID
ORDER BY Customers.CustomerName;`}
      </pre>

      <p className="leading-relaxed pt-3 font-semibold">Result:</p>
      <table className="w-full border text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">CustomerName</th>
            <th className="border p-2">OrderID</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">NULL</td>
            <td className="border p-2">10309</td>
          </tr>
          <tr>
            <td className="border p-2">NULL</td>
            <td className="border p-2">10310</td>
          </tr>
          <tr>
            <td className="border p-2">Alfreds Futterkiste</td>
            <td className="border p-2">NULL</td>
          </tr>
          <tr>
            <td className="border p-2">Ana Trujillo Emparedados y helados</td>
            <td className="border p-2">10308</td>
          </tr>
          <tr>
            <td className="border p-2">Antonio Moreno Taquería</td>
            <td className="border p-2">NULL</td>
          </tr>
        </tbody>
      </table>

      <p className="leading-relaxed pt-3">
        <b>Note:</b> FULL OUTER JOIN returns all matching records from both tables. 
        If there is no match on one side, the result will show <b>NULL</b> for that table.
      </p>
    </div>
  );
};

export default SqlFullOuterJoin;
