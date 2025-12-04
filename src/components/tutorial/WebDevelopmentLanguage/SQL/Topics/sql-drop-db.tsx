import React from "react";

const SqlDropDatabase: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        SQL DROP DATABASE Statement
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <b>DROP DATABASE</b> statement is used to delete an existing SQL database.
      </p>

      <p className="leading-relaxed text-red-600 font-semibold">
        Note: Be careful! Deleting a database will result in loss of all information stored in it.
      </p>

      {/* Syntax */}
      <h2 className="text-2xl font-bold pt-5">Syntax</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`DROP DATABASE databasename;`}
      </pre>

      {/* Example */}
      <h2 className="text-2xl font-bold pt-5">Example</h2>
      <p className="leading-relaxed">
        The following SQL statement drops the existing database <b>testDB</b>:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`DROP DATABASE testDB;`}
      </pre>
    </div>
  );
};

export default SqlDropDatabase;
