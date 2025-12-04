import React from "react";

const IntroSQL: React.FC = () => {
  return (
   <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">Introduction to SQL</h1>

      {/* Intro */}
      <p className="text-lg">
        SQL is a standard language for accessing and manipulating databases.
      </p>

      {/* What is SQL */}
      <h2 className="text-2xl font-semibold">What is SQL?</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>SQL stands for Structured Query Language</li>
        <li>SQL lets you access and manipulate databases</li>
        <li>
          SQL became a standard of the American National Standards Institute
          (ANSI) in 1986, and of the International Organization for
          Standardization (ISO) in 1987
        </li>
      </ul>

      {/* What can SQL do */}
      <h2 className="text-2xl font-semibold">What Can SQL Do?</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Execute queries against a database</li>
        <li>Retrieve data from a database</li>
        <li>Insert records in a database</li>
        <li>Update records in a database</li>
        <li>Delete records from a database</li>
        <li>Create new databases</li>
        <li>Create new tables in a database</li>
        <li>Create stored procedures in a database</li>
        <li>Create views in a database</li>
        <li>Set permissions on tables, procedures, and views</li>
      </ul>

      {/* SQL is a standard */}
      <h2 className="text-2xl font-semibold">SQL is a Standard - BUT...</h2>
      <p>
        Although SQL is an ANSI/ISO standard, there are different versions of the
        SQL language. However, to be compliant with the ANSI standard, they all
        support at least the major commands such as{" "}
        <code>SELECT</code>, <code>UPDATE</code>, <code>DELETE</code>,{" "}
        <code>INSERT</code>, <code>WHERE</code>.
      </p>
      <p>
        <strong>Note:</strong> Most SQL database programs also have their own
        proprietary extensions in addition to the SQL standard.
      </p>

      {/* Using SQL in your website */}
      <h2 className="text-2xl font-semibold">Using SQL in Your Web Site</h2>
      <p>To build a website that shows data from a database, you will need:</p>
      <ul className="list-disc list-inside space-y-1">
        <li>An RDBMS database program (e.g., MS Access, SQL Server, MySQL)</li>
        <li>A server-side scripting language like PHP or ASP</li>
        <li>SQL to get the data you want</li>
        <li>HTML/CSS to style the page</li>
      </ul>
    </div>
  );
};

export default IntroSQL;
