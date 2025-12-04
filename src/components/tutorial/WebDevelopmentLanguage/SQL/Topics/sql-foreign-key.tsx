import React from "react";

const SqlForeignKey: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        SQL FOREIGN KEY Constraint
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <b>FOREIGN KEY</b> constraint is used to maintain links between tables. 
        A FOREIGN KEY in a child table refers to the PRIMARY KEY in a parent table. 
        It prevents invalid data from being inserted into the foreign key column.
      </p>

      {/* Demo Tables */}
      <h2 className="text-2xl font-bold pt-5">Demo Tables</h2>
      <p className="leading-relaxed font-semibold">Persons Table</p>
      <table className="w-full border text-sm mb-4">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">PersonID</th>
            <th className="border p-2">LastName</th>
            <th className="border p-2">FirstName</th>
            <th className="border p-2">Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">1</td>
            <td className="border p-2">Hansen</td>
            <td className="border p-2">Ola</td>
            <td className="border p-2">30</td>
          </tr>
          <tr>
            <td className="border p-2">2</td>
            <td className="border p-2">Svendson</td>
            <td className="border p-2">Tove</td>
            <td className="border p-2">23</td>
          </tr>
          <tr>
            <td className="border p-2">3</td>
            <td className="border p-2">Pettersen</td>
            <td className="border p-2">Kari</td>
            <td className="border p-2">20</td>
          </tr>
        </tbody>
      </table>

      <p className="leading-relaxed font-semibold">Orders Table</p>
      <table className="w-full border text-sm mb-4">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">OrderID</th>
            <th className="border p-2">OrderNumber</th>
            <th className="border p-2">PersonID</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">1</td>
            <td className="border p-2">77895</td>
            <td className="border p-2">3</td>
          </tr>
          <tr>
            <td className="border p-2">2</td>
            <td className="border p-2">44678</td>
            <td className="border p-2">3</td>
          </tr>
          <tr>
            <td className="border p-2">3</td>
            <td className="border p-2">22456</td>
            <td className="border p-2">2</td>
          </tr>
        </tbody>
      </table>

      {/* FOREIGN KEY on CREATE TABLE */}
      <h2 className="text-2xl font-bold pt-5">FOREIGN KEY on CREATE TABLE</h2>
      <p className="leading-relaxed font-semibold">MySQL:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`CREATE TABLE Orders (
    OrderID int NOT NULL,
    OrderNumber int NOT NULL,
    PersonID int,
    PRIMARY KEY (OrderID),
    FOREIGN KEY (PersonID) REFERENCES Persons(PersonID)
);`}
      </pre>

      <p className="leading-relaxed font-semibold">SQL Server / Oracle / MS Access:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`CREATE TABLE Orders (
    OrderID int NOT NULL PRIMARY KEY,
    OrderNumber int NOT NULL,
    PersonID int FOREIGN KEY REFERENCES Persons(PersonID)
);`}
      </pre>

      <p className="leading-relaxed font-semibold">With constraint name (multi-column allowed):</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`CREATE TABLE Orders (
    OrderID int NOT NULL,
    OrderNumber int NOT NULL,
    PersonID int,
    PRIMARY KEY (OrderID),
    CONSTRAINT FK_PersonOrder FOREIGN KEY (PersonID)
    REFERENCES Persons(PersonID)
);`}
      </pre>

      {/* FOREIGN KEY on ALTER TABLE */}
      <h2 className="text-2xl font-bold pt-5">FOREIGN KEY on ALTER TABLE</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`ALTER TABLE Orders
ADD FOREIGN KEY (PersonID) REFERENCES Persons(PersonID);`}
      </pre>

      <p className="leading-relaxed">
        With constraint name:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`ALTER TABLE Orders
ADD CONSTRAINT FK_PersonOrder
FOREIGN KEY (PersonID) REFERENCES Persons(PersonID);`}
      </pre>

      {/* DROP FOREIGN KEY */}
      <h2 className="text-2xl font-bold pt-5">Dropping a FOREIGN KEY Constraint</h2>
      <p className="leading-relaxed font-semibold">MySQL:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`ALTER TABLE Orders
DROP FOREIGN KEY FK_PersonOrder;`}
      </pre>

      <p className="leading-relaxed font-semibold">SQL Server / Oracle / MS Access:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`ALTER TABLE Orders
DROP CONSTRAINT FK_PersonOrder;`}
      </pre>
    </div>
  );
};

export default SqlForeignKey;
