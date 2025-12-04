import React from "react";

const SqlInjection: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        SQL Injection
      </h1>

      <p className="leading-relaxed">
        SQL injection is a code injection technique that can compromise or destroy your database.
        It occurs when user input is directly included in SQL statements without proper validation.
      </p>

      <h2 className="text-2xl font-bold pt-5">Example of SQL Injection</h2>
      <p className="leading-relaxed">
        A query intended to select a user by ID:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`txtUserId = getRequestString("UserId");
txtSQL = "SELECT * FROM Users WHERE UserId = " + txtUserId;`}
      </pre>

      <p className="leading-relaxed font-bold">
        Dangerous input:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`UserId: 105 OR 1=1`}
      </pre>
      <p className="leading-relaxed">
        Results in:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`SELECT * FROM Users WHERE UserId = 105 OR 1=1;`}
      </pre>

      <h2 className="text-2xl font-bold pt-5">Other SQL Injection Examples</h2>
      <p className="leading-relaxed">
        <strong>Login bypass:</strong> Using input like <code>" OR ""="</code> can return all users.
      </p>
      <p className="leading-relaxed">
        <strong>Batched statements:</strong> Using input like <code>105; DROP TABLE Suppliers</code> can delete tables.
      </p>

      <h2 className="text-2xl font-bold pt-5">How to Prevent SQL Injection</h2>
      <p className="leading-relaxed">
        Always use parameterized queries or prepared statements. The database treats parameters literally and not as SQL code.
      </p>

      <h3 className="text-xl font-bold pt-3">ASP.NET Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`txtUserId = getRequestString("UserId");
txtSQL = "SELECT * FROM Users WHERE UserId = @0";
db.Execute(txtSQL, txtUserId);`}
      </pre>

      <h3 className="text-xl font-bold pt-3">ASP.NET INSERT Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`txtNam = getRequestString("CustomerName");
txtAdd = getRequestString("Address");
txtCit = getRequestString("City");
txtSQL = "INSERT INTO Customers (CustomerName,Address,City) VALUES(@0,@1,@2)";
command = new SqlCommand(txtSQL);
command.Parameters.AddWithValue("@0", txtNam);
command.Parameters.AddWithValue("@1", txtAdd);
command.Parameters.AddWithValue("@2", txtCit);
command.ExecuteNonQuery();`}
      </pre>

      <h3 className="text-xl font-bold pt-3">PHP INSERT Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`$stmt = $dbh->prepare("INSERT INTO Customers (CustomerName,Address,City)
VALUES (:nam, :add, :cit)");
$stmt->bindParam(':nam', $txtNam);
$stmt->bindParam(':add', $txtAdd);
$stmt->bindParam(':cit', $txtCit);
$stmt->execute();`}
      </pre>

      <p className="leading-relaxed font-bold pt-5">
        ✅ Key takeaway: Never directly include user input in SQL statements. Always use parameters.
      </p>
    </div>
  );
};

export default SqlInjection;
