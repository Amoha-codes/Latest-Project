import React from "react";

const SqlSelfJoin: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        SQL Self Join
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        A <b>self join</b> is a regular join, but the table is joined with itself.
        It is useful when you want to compare rows within the same table.
      </p>

      {/* Syntax */}
      <h2 className="text-2xl font-bold pt-5">Self Join Syntax</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT column_name(s)
FROM table1 T1, table1 T2
WHERE condition;`}
      </pre>
      <p className="leading-relaxed">
        <b>T1</b> and <b>T2</b> are different table aliases for the same table.
      </p>

      {/* Demo Table */}
      <h2 className="text-2xl font-bold pt-5">Demo Customers Table</h2>
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

      {/* Example Query */}
      <h2 className="text-2xl font-bold pt-5">SQL Self Join Example</h2>
      <p className="leading-relaxed">
        Match customers that are from the <b>same city</b> using a self join:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT A.CustomerName AS CustomerName1, 
       B.CustomerName AS CustomerName2, 
       A.City
FROM Customers A, Customers B
WHERE A.CustomerID <> B.CustomerID
  AND A.City = B.City
ORDER BY A.City;`}
      </pre>

      <p className="leading-relaxed pt-3">
        <b>Explanation:</b>  
        - We use two aliases (<b>A</b> and <b>B</b>) for the same table.  
        - The condition <b>A.CustomerID &lt;&gt; B.CustomerID</b> ensures we don’t match the same row with itself.  
        - The condition <b>A.City = B.City</b> finds customers in the same city.  
      </p>
    </div>
  );
};

export default SqlSelfJoin;
