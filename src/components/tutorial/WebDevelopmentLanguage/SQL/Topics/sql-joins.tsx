import React from "react";

const SqlJoins: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        SQL - Joins
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        A <b>JOIN</b> clause is used to combine rows from two or more tables
        based on a related column between them. Joins are useful when you want
        to retrieve data that exists across multiple tables.
      </p>

      {/* Demo Tables */}
      <h2 className="text-2xl font-bold pt-5">Demo Tables</h2>
      <p className="leading-relaxed font-semibold">Orders Table</p>
      <table className="w-full border text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">OrderID</th>
            <th className="border p-2">CustomerID</th>
            <th className="border p-2">OrderDate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">10308</td>
            <td className="border p-2">2</td>
            <td className="border p-2">1996-09-18</td>
          </tr>
          <tr>
            <td className="border p-2">10309</td>
            <td className="border p-2">37</td>
            <td className="border p-2">1996-09-19</td>
          </tr>
          <tr>
            <td className="border p-2">10310</td>
            <td className="border p-2">77</td>
            <td className="border p-2">1996-09-20</td>
          </tr>
        </tbody>
      </table>

      <p className="leading-relaxed font-semibold pt-5">Customers Table</p>
      <table className="w-full border text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">CustomerID</th>
            <th className="border p-2">CustomerName</th>
            <th className="border p-2">ContactName</th>
            <th className="border p-2">Country</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">1</td>
            <td className="border p-2">Alfreds Futterkiste</td>
            <td className="border p-2">Maria Anders</td>
            <td className="border p-2">Germany</td>
          </tr>
          <tr>
            <td className="border p-2">2</td>
            <td className="border p-2">Ana Trujillo Emparedados y helados</td>
            <td className="border p-2">Ana Trujillo</td>
            <td className="border p-2">Mexico</td>
          </tr>
          <tr>
            <td className="border p-2">3</td>
            <td className="border p-2">Antonio Moreno Taquería</td>
            <td className="border p-2">Antonio Moreno</td>
            <td className="border p-2">Mexico</td>
          </tr>
        </tbody>
      </table>

      {/* Intro to JOIN */}
      <h2 className="text-2xl font-bold pt-5">INNER JOIN Example</h2>
      <p className="leading-relaxed">
        The <b>INNER JOIN</b> selects records that have matching values in both
        tables. In this example, we join the Orders and Customers tables on
        CustomerID:
      </p>

      <div className="bg-gray-100 p-4 rounded-lg shadow">
        <pre className="bg-black text-green-400 p-3 rounded-lg overflow-x-auto">
{`SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
FROM Orders
INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;`}
        </pre>
      </div>

      <p className="leading-relaxed pt-3 font-semibold">Result:</p>
      <table className="w-full border text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">OrderID</th>
            <th className="border p-2">CustomerName</th>
            <th className="border p-2">OrderDate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">10308</td>
            <td className="border p-2">Ana Trujillo Emparedados y helados</td>
            <td className="border p-2">1996-09-18</td>
          </tr>
          <tr>
            <td className="border p-2">10365</td>
            <td className="border p-2">Antonio Moreno Taquería</td>
            <td className="border p-2">1996-11-27</td>
          </tr>
          <tr>
            <td className="border p-2">10383</td>
            <td className="border p-2">Around the Horn</td>
            <td className="border p-2">1996-12-16</td>
          </tr>
          <tr>
            <td className="border p-2">10355</td>
            <td className="border p-2">Around the Horn</td>
            <td className="border p-2">1996-11-15</td>
          </tr>
          <tr>
            <td className="border p-2">10278</td>
            <td className="border p-2">Berglunds snabbköp</td>
            <td className="border p-2">1996-08-12</td>
          </tr>
        </tbody>
      </table>

      <p className="leading-relaxed pt-5">
        In summary, a <b>JOIN</b> lets you combine related data from multiple
        tables into a single result set. Other types of joins include{" "}
        <b>LEFT JOIN</b>, <b>RIGHT JOIN</b>, and <b>FULL OUTER JOIN</b>, which
        will be covered in later chapters.
      </p>
    </div>
  );
};

export default SqlJoins;
