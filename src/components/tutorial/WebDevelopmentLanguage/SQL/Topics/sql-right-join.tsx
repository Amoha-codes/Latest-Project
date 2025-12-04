import React from "react";

const SqlRightJoin: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        SQL RIGHT JOIN
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <b>RIGHT JOIN</b> keyword returns all records from the <b>right table</b> (table2), 
        and the matching records from the <b>left table</b> (table1). 
        If there is no match, the result from the left table will be <b>NULL</b>.
      </p>
      <p className="leading-relaxed">
        Note: In some databases, <b>RIGHT JOIN</b> is also called <b>RIGHT OUTER JOIN</b>.
      </p>

      {/* Syntax */}
      <h2 className="text-2xl font-bold pt-5">Syntax</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT column_name(s)
FROM table1
RIGHT JOIN table2
ON table1.column_name = table2.column_name;`}
      </pre>

      {/* Demo Tables */}
      <h2 className="text-2xl font-bold pt-5">Demo Tables</h2>

      <p className="leading-relaxed font-semibold">Orders Table</p>
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

      <p className="leading-relaxed font-semibold pt-5">Employees Table</p>
      <table className="w-full border text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">EmployeeID</th>
            <th className="border p-2">LastName</th>
            <th className="border p-2">FirstName</th>
            <th className="border p-2">BirthDate</th>
            <th className="border p-2">Photo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">1</td>
            <td className="border p-2">Davolio</td>
            <td className="border p-2">Nancy</td>
            <td className="border p-2">1968-12-08</td>
            <td className="border p-2">EmpID1.pic</td>
          </tr>
          <tr>
            <td className="border p-2">2</td>
            <td className="border p-2">Fuller</td>
            <td className="border p-2">Andrew</td>
            <td className="border p-2">1952-02-19</td>
            <td className="border p-2">EmpID2.pic</td>
          </tr>
          <tr>
            <td className="border p-2">3</td>
            <td className="border p-2">Leverling</td>
            <td className="border p-2">Janet</td>
            <td className="border p-2">1963-08-30</td>
            <td className="border p-2">EmpID3.pic</td>
          </tr>
        </tbody>
      </table>

      {/* RIGHT JOIN Example */}
      <h2 className="text-2xl font-bold pt-5">RIGHT JOIN Example</h2>
      <p className="leading-relaxed">
        Select all employees, along with any orders they might have placed:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT Orders.OrderID, Employees.LastName, Employees.FirstName
FROM Orders
RIGHT JOIN Employees ON Orders.EmployeeID = Employees.EmployeeID
ORDER BY Orders.OrderID;`}
      </pre>

      <p className="leading-relaxed pt-3 font-semibold">Result:</p>
      <p className="leading-relaxed">
        This query returns all employees, even if they haven't placed any orders. 
        Unmatched rows from the Orders table will display <b>NULL</b>.
      </p>
    </div>
  );
};

export default SqlRightJoin;
