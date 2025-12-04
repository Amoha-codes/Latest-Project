import React from "react";

const SqlHome: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">SQL Tutorial</h1>

      {/* Intro */}
      <p className="leading-relaxed">
        Learn SQL — the standard language for storing, manipulating, and retrieving data in databases.
        SQL allows you to manage data in MySQL, SQL Server, MS Access, Oracle, Sybase, Informix, Postgres, 
        and many other database systems.
      </p>

      <p className="leading-relaxed">
        SQL is beginner-friendly and essential for anyone working with databases. Understanding SQL will help 
        you query and manipulate data efficiently.
      </p>

      {/* Free Tutorial Info */}
      <h2 className="text-2xl font-bold">Start Learning SQL</h2>
      <p className="leading-relaxed">
        Study our SQL Tutorial for free — no registration required.
      </p>

      <h3 className="text-xl font-semibold">SQL Course + Certificate</h3>
      <p className="leading-relaxed">
        Upgrade your learning experience with our interactive SQL Course and earn a Certificate.
      </p>

      <p className="leading-relaxed">🏁 Tip: Sign in to track your progress — it's free.</p>

      {/* Learning by Examples */}
      <h2 className="text-2xl font-bold">Learning by Examples</h2>
      <p className="leading-relaxed">
        With our online SQL editor, you can edit SQL statements and instantly view the results:
      </p>

      {/* Example Code */}
      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`SELECT * FROM Customers;`}
      </pre>

      {/* Conclusion */}
      <p className="leading-relaxed">
        Practice with examples regularly to gain confidence in SQL and database management.
      </p>
    </div>
  );
};

export default SqlHome;
