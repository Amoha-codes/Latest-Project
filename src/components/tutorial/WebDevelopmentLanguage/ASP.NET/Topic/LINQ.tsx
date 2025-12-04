import React from "react";

const AspNetLINQ: React.FC = () => {
  const linqConcepts = [
    "LINQ (Language-Integrated Query) allows querying of different types of data sources using a common syntax.",
    "It works with any class implementing IEnumerable<T>, such as Lists, Arrays, XML, and databases.",
    "Supports common query operations like Select, Where, Join, Group, OrderBy, and custom projections.",
    "Simplifies data access, filtering, sorting, and aggregation in a concise, readable way."
  ];

  const linqOperators = [
    "Select: projects each element of a collection into a new form.",
    "Where: filters a collection based on a condition.",
    "Join: combines data from two collections based on matching keys.",
    "OrderBy / OrderByDescending: sorts the collection based on a key.",
    "Let: defines a new variable for use within the query for calculations or transformations."
  ];

  const linqExamples = [
    "Basic query: `var bookTitles = from b in books select b.Title;`",
    "Join query: `var bookDetails = from b in books join s in sales on b.ID equals s.ID select new { b.Title, s.Pages };`",
    "Where clause: `var filteredBooks = from b in books join s in sales on b.ID equals s.ID where s.Pages > 500 select new { b.Title, s.Pages };`",
    "OrderBy: `var sortedBooks = from b in books join s in sales on b.ID equals s.ID orderby b.Price select new { b.Title, s.Pages, b.Price };`",
    "Let clause: `var totalSales = from b in books join s in sales on b.ID equals s.ID let total = b.Price * s.sales select new { b.Title, TotalSale = total };`"
  ];

  return (
    <div className="mt-20 space-y-8">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        ASP.NET - LINQ
      </h1>

      {/* Introduction */}
      <p className="leading-relaxed">
        LINQ (Language-Integrated Query) is a powerful feature in ASP.NET that
        allows developers to query various data sources in a consistent and
        readable manner. It integrates query capabilities directly into C# or
        VB.NET, allowing concise and expressive code.
      </p>

      {/* Key Concepts */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Key Concepts</h2>
        <ul className="list-disc ml-6 space-y-1">
          {linqConcepts.map((concept, index) => (
            <li key={index}>{concept}</li>
          ))}
        </ul>
      </div>

      {/* LINQ Operators */}
      <div>
        <h2 className="text-2xl font-bold mb-2">LINQ Operators</h2>
        <ul className="list-disc ml-6 space-y-1">
          {linqOperators.map((operator, index) => (
            <li key={index}>{operator}</li>
          ))}
        </ul>
      </div>

      {/* LINQ Examples */}
      <div>
        <h2 className="text-2xl font-bold mb-2">LINQ Examples</h2>
        <p className="leading-relaxed mb-2">
          Here are some practical LINQ queries using a <code>Books</code> and
          <code>Salesdetails</code> class:
        </p>
        <ul className="list-disc ml-6 space-y-1">
          {linqExamples.map((example, index) => (
            <li key={index} className="font-mono">
              {example}
            </li>
          ))}
        </ul>
      </div>

      {/* Summary */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Summary</h2>
        <p className="leading-relaxed">
          LINQ simplifies working with collections and data sources by providing
          a unified query syntax. It reduces boilerplate code, enhances
          readability, and integrates seamlessly into ASP.NET applications.
        </p>
      </div>
    </div>
  );
};

export default AspNetLINQ;
