import React from "react";

const SqlCreateDatabase: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        SQL CREATE DATABASE Statement
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <b>CREATE DATABASE</b> statement is used to create a new SQL database.
      </p>

      {/* Syntax */}
      <h2 className="text-2xl font-bold pt-5">Syntax</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`CREATE DATABASE databasename;`}
      </pre>

      {/* Example */}
      <h2 className="text-2xl font-bold pt-5">Example</h2>
      <p className="leading-relaxed">
        The following SQL statement creates a database called <b>testDB</b>:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`CREATE DATABASE testDB;`}
      </pre>
    </div>
  );
};

export default SqlCreateDatabase;
