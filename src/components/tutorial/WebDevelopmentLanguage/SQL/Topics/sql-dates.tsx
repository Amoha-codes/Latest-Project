import React from "react";

const SqlWorkingWithDates: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        SQL Working With Dates
      </h1>

      <p className="leading-relaxed">
        The most difficult part when working with dates is ensuring that the format of the date you insert matches the format of the date column in the database.
        When time components are included, queries need extra care.
      </p>

      <h2 className="text-2xl font-bold pt-5">SQL Date Data Types</h2>

      <p className="leading-relaxed font-bold">MySQL:</p>
      <ul className="list-disc pl-6">
        <li><b>DATE</b> - format: YYYY-MM-DD</li>
        <li><b>DATETIME</b> - format: YYYY-MM-DD HH:MI:SS</li>
        <li><b>TIMESTAMP</b> - format: YYYY-MM-DD HH:MI:SS</li>
        <li><b>YEAR</b> - format: YYYY or YY</li>
      </ul>

      <p className="leading-relaxed font-bold">SQL Server:</p>
      <ul className="list-disc pl-6">
        <li><b>DATE</b> - format: YYYY-MM-DD</li>
        <li><b>DATETIME</b> - format: YYYY-MM-DD HH:MI:SS</li>
        <li><b>SMALLDATETIME</b> - format: YYYY-MM-DD HH:MI:SS</li>
        <li><b>TIMESTAMP</b> - format: a unique number</li>
      </ul>

      <h2 className="text-2xl font-bold pt-5">Example: Selecting Records by Date</h2>
      <p className="leading-relaxed">
        Look at the <b>Orders</b> table:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`OrderId | ProductName             | OrderDate
1       | Geitost                 | 2008-11-11
2       | Camembert Pierrot       | 2008-11-09
3       | Mozzarella di Giovanni  | 2008-11-11
4       | Mascarpone Fabioli      | 2008-10-29`}
      </pre>
      <p className="leading-relaxed">
        Select records with OrderDate '2008-11-11':
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT * FROM Orders 
WHERE OrderDate='2008-11-11';`}
      </pre>
      <p className="leading-relaxed">
        Result:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`OrderId | ProductName            | OrderDate
1       | Geitost                | 2008-11-11
3       | Mozzarella di Giovanni | 2008-11-11`}
      </pre>

      <h2 className="text-2xl font-bold pt-5">Handling Dates with Time Component</h2>
      <p className="leading-relaxed">
        If OrderDate contains time:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`OrderId | ProductName             | OrderDate
1       | Geitost                 | 2008-11-11 13:23:44
2       | Camembert Pierrot       | 2008-11-09 15:45:21
3       | Mozzarella di Giovanni  | 2008-11-11 11:12:01
4       | Mascarpone Fabioli      | 2008-10-29 14:56:59`}
      </pre>
      <p className="leading-relaxed">
        The same query <code>WHERE OrderDate='2008-11-11'</code> will return no results because it does not match the time portion.
      </p>
      <p className="leading-relaxed font-bold">
        Tip: To simplify queries, avoid including time components if you only need to filter by date.
      </p>
    </div>
  );
};

export default SqlWorkingWithDates;
