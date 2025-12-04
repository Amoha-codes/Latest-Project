import React from "react";

const SQLNullValues: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">

      {/* Heading */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        SQL - NULL Values
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        A field with a <strong>NULL</strong> value is a field with <strong>no value</strong>. 
        NULL represents missing, unknown, or undefined data.
      </p>

      <p className="leading-relaxed">
        If a table column is optional, a new record may be inserted without providing a value for it, resulting in a <strong>NULL</strong> value.
      </p>

      <p className="leading-relaxed font-semibold">
        ✅ NULL is not the same as 0, empty string, or a space — it simply means "no value".
      </p>

      {/* Testing for NULL */}
      <h2 className="text-2xl font-bold">How to Test for NULL Values?</h2>
      <p className="leading-relaxed">
        You <strong>cannot</strong> use comparison operators like =, &lt;, or &lt;&gt; to check for NULL values.
        Instead, SQL provides:
      </p>

      {/* IS NULL Syntax */}
      <h3 className="text-xl font-semibold">IS NULL Syntax</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT column_names
FROM table_name
WHERE column_name IS NULL;`}
      </pre>

      {/* IS NOT NULL Syntax */}
      <h3 className="text-xl font-semibold">IS NOT NULL Syntax</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT column_names
FROM table_name
WHERE column_name IS NOT NULL;`}
      </pre>

      {/* IS NULL Example */}
      <h2 className="text-2xl font-bold">Example — Find NULL Addresses</h2>
      <p className="leading-relaxed">
        List all customers where the <strong>Address</strong> field is NULL:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT CustomerName, ContactName, Address
FROM Customers
WHERE Address IS NULL;`}
      </pre>

      <p className="leading-relaxed font-semibold">
        ✅ Always use <code>IS NULL</code> when checking for missing values.
      </p>

      {/* IS NOT NULL Example */}
      <h2 className="text-2xl font-bold">Example — Find Non-NULL Addresses</h2>
      <p className="leading-relaxed">
        List all customers where the <strong>Address</strong> field contains a value:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT CustomerName, ContactName, Address
FROM Customers
WHERE Address IS NOT NULL;`}
      </pre>

      <p className="leading-relaxed font-semibold">
        ✅ Use <code>IS NOT NULL</code> to filter out empty or missing data.
      </p>

    </div>
  );
};

export default SQLNullValues;
