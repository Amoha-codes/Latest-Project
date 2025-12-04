import React from "react";

const SqlInnerJoin: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        SQL INNER JOIN
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <b>INNER JOIN</b> keyword selects records that have matching values in both tables. 
        If there is no match, the row is not returned.
      </p>

      {/* Demo Tables */}
      <h2 className="text-2xl font-bold pt-5">Demo Tables</h2>

      <p className="leading-relaxed font-semibold">Products Table</p>
      <table className="w-full border text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">ProductID</th>
            <th className="border p-2">ProductName</th>
            <th className="border p-2">CategoryID</th>
            <th className="border p-2">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">1</td>
            <td className="border p-2">Chais</td>
            <td className="border p-2">1</td>
            <td className="border p-2">18</td>
          </tr>
          <tr>
            <td className="border p-2">2</td>
            <td className="border p-2">Chang</td>
            <td className="border p-2">1</td>
            <td className="border p-2">19</td>
          </tr>
          <tr>
            <td className="border p-2">3</td>
            <td className="border p-2">Aniseed Syrup</td>
            <td className="border p-2">2</td>
            <td className="border p-2">10</td>
          </tr>
        </tbody>
      </table>

      <p className="leading-relaxed font-semibold pt-5">Categories Table</p>
      <table className="w-full border text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">CategoryID</th>
            <th className="border p-2">CategoryName</th>
            <th className="border p-2">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">1</td>
            <td className="border p-2">Beverages</td>
            <td className="border p-2">Soft drinks, coffees, teas, beers, and ales</td>
          </tr>
          <tr>
            <td className="border p-2">2</td>
            <td className="border p-2">Condiments</td>
            <td className="border p-2">Sweet and savory sauces, relishes, spreads, and seasonings</td>
          </tr>
          <tr>
            <td className="border p-2">3</td>
            <td className="border p-2">Confections</td>
            <td className="border p-2">Desserts, candies, and sweet breads</td>
          </tr>
        </tbody>
      </table>

      {/* INNER JOIN Example */}
      <h2 className="text-2xl font-bold pt-5">INNER JOIN Example</h2>
      <p className="leading-relaxed">
        Join the <b>Products</b> table with the <b>Categories</b> table using <b>CategoryID</b>:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT ProductID, ProductName, CategoryName
FROM Products
INNER JOIN Categories 
ON Products.CategoryID = Categories.CategoryID;`}
      </pre>

      <p className="leading-relaxed pt-3 font-semibold">Result:</p>
      <table className="w-full border text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">ProductID</th>
            <th className="border p-2">ProductName</th>
            <th className="border p-2">CategoryName</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">1</td>
            <td className="border p-2">Chais</td>
            <td className="border p-2">Beverages</td>
          </tr>
          <tr>
            <td className="border p-2">2</td>
            <td className="border p-2">Chang</td>
            <td className="border p-2">Beverages</td>
          </tr>
          <tr>
            <td className="border p-2">3</td>
            <td className="border p-2">Aniseed Syrup</td>
            <td className="border p-2">Condiments</td>
          </tr>
        </tbody>
      </table>

      {/* Notes */}
      <p className="leading-relaxed pt-5">
        <b>Notes:</b> <br/>
        1. Only rows with matching values in both tables are returned. <br/>
        2. You can specify table names in the SELECT statement to avoid ambiguity. <br/>
        3. <b>JOIN</b> and <b>INNER JOIN</b> are equivalent; INNER is the default join type.
      </p>

      {/* JOIN Three Tables Example */}
      <h2 className="text-2xl font-bold pt-5">JOIN Three Tables Example</h2>
      <p className="leading-relaxed">
        You can also join more than two tables. For example, joining Orders, Customers, and Shippers:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT Orders.OrderID, Customers.CustomerName, Shippers.ShipperName
FROM ((Orders
INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID)
INNER JOIN Shippers ON Orders.ShipperID = Shippers.ShipperID);`}
      </pre>
    </div>
  );
};

export default SqlInnerJoin;
