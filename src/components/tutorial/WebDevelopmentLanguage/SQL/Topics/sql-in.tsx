import React from "react";

const SqlInOperator: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        SQL - IN Operator
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <b>IN</b> operator allows you to specify multiple values in a{" "}
        <b>WHERE</b> clause. It is a shorter and cleaner alternative to using
        multiple <b>OR</b> conditions.
      </p>

      {/* Example */}
      <div className="bg-gray-100 p-4 rounded-lg shadow">
        <p className="font-semibold mb-2">
          Return all customers from Germany, France, or the UK:
        </p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT * FROM Customers
WHERE Country IN ('Germany', 'France', 'UK');`}
        </pre>
      </div>

      {/* Syntax */}
      <h2 className="text-2xl font-bold pt-5">Syntax</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT column_name(s)
FROM table_name
WHERE column_name IN (value1, value2, ...);`}
      </pre>

      {/* Definition Table */}
      <h2 className="text-2xl font-bold pt-5">Demo Database</h2>
      <p className="leading-relaxed">
        Below is a selection from the <b>Customers</b> table used in the examples:
      </p>

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
          <tr>
            <td className="border p-2">4</td>
            <td className="border p-2">Around the Horn</td>
            <td className="border p-2">Thomas Hardy</td>
            <td className="border p-2">120 Hanover Sq.</td>
            <td className="border p-2">London</td>
            <td className="border p-2">WA1 1DP</td>
            <td className="border p-2">UK</td>
          </tr>
          <tr>
            <td className="border p-2">5</td>
            <td className="border p-2">Berglunds snabbköp</td>
            <td className="border p-2">Christina Berglund</td>
            <td className="border p-2">Berguvsvägen 8</td>
            <td className="border p-2">Luleå</td>
            <td className="border p-2">S-958 22</td>
            <td className="border p-2">Sweden</td>
          </tr>
        </tbody>
      </table>

      {/* NOT IN */}
      <h2 className="text-2xl font-bold pt-5">NOT IN</h2>
      <p className="leading-relaxed">
        Using the <b>NOT</b> keyword with <b>IN</b> returns records that do{" "}
        <b>not</b> match any value in the list.
      </p>

      <div className="bg-gray-100 p-4 rounded-lg shadow">
        <p className="font-semibold mb-2">
          Return all customers NOT from Germany, France, or the UK:
        </p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT * FROM Customers
WHERE Country NOT IN ('Germany', 'France', 'UK');`}
        </pre>
      </div>

      {/* IN with Subquery */}
      <h2 className="text-2xl font-bold pt-5">IN with Subquery</h2>
      <p className="leading-relaxed">
        The <b>IN</b> operator can also be used with a subquery to select values
        from another table.
      </p>

      <div className="bg-gray-100 p-4 rounded-lg shadow">
        <p className="font-semibold mb-2">
          Return all customers that have placed an order:
        </p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT * FROM Customers
WHERE CustomerID IN (SELECT CustomerID FROM Orders);`}
        </pre>
      </div>

      {/* NOT IN with Subquery */}
      <h2 className="text-2xl font-bold pt-5">NOT IN with Subquery</h2>
      <p className="leading-relaxed">
        Use <b>NOT IN</b> with a subquery to return values missing from the
        subquery result.
      </p>

      <div className="bg-gray-100 p-4 rounded-lg shadow">
        <p className="font-semibold mb-2">
          Return customers that have NOT placed any orders:
        </p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT * FROM Customers
WHERE CustomerID NOT IN (SELECT CustomerID FROM Orders);`}
        </pre>
      </div>
    </div>
  );
};

export default SqlInOperator;
