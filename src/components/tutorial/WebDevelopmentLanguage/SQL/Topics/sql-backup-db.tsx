import React from "react";

const SqlBackupDatabase: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        SQL BACKUP DATABASE Statement
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <b>BACKUP DATABASE</b> statement in SQL Server is used to create a full backup of an existing SQL database.
      </p>

      {/* Full Backup Syntax */}
      <h2 className="text-2xl font-bold pt-5">Full Backup Syntax</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`BACKUP DATABASE databasename
TO DISK = 'filepath';`}
      </pre>

      {/* Differential Backup Syntax */}
      <h2 className="text-2xl font-bold pt-5">Differential Backup Syntax</h2>
      <p className="leading-relaxed">
        A differential backup only backs up the parts of the database that have changed since the last full database backup.
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`BACKUP DATABASE databasename
TO DISK = 'filepath'
WITH DIFFERENTIAL;`}
      </pre>

      {/* Example Full Backup */}
      <h2 className="text-2xl font-bold pt-5">Full Backup Example</h2>
      <p className="leading-relaxed">
        The following SQL statement creates a full backup of the existing database <b>testDB</b> to the D drive:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`BACKUP DATABASE testDB
TO DISK = 'D:\\backups\\testDB.bak';`}
      </pre>
      <p className="leading-relaxed text-blue-600 font-semibold">
        Tip: Always back up the database to a different drive than the actual database. This prevents loss if the primary drive crashes.
      </p>

      {/* Example Differential Backup */}
      <h2 className="text-2xl font-bold pt-5">Differential Backup Example</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`BACKUP DATABASE testDB
TO DISK = 'D:\\backups\\testDB.bak'
WITH DIFFERENTIAL;`}
      </pre>
    </div>
  );
};

export default SqlBackupDatabase;
