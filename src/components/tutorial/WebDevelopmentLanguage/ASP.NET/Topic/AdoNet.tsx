import React from "react";

const AdoNet: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        ADO.NET
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        <strong>ADO.NET</strong> provides a bridge between front-end controls and backend databases. 
        It encapsulates all data access operations, allowing controls to display data without handling 
        the underlying database details.
      </p>

      {/* ADO.NET Objects */}
      <h2 className="text-2xl font-bold">Key ADO.NET Objects</h2>
      <ul className="list-disc list-inside space-y-1">
        <li><strong>DataSet</strong> — Represents a subset of the database. Contains <code>DataTable</code> and <code>DataRelation</code> objects.</li>
        <li><strong>DataTable</strong> — Represents a table of data.</li>
        <li><strong>DataRow</strong> — Represents a row in a table.</li>
        <li><strong>DataAdapter</strong> — Acts as a bridge between <code>DataSet</code> and the database.</li>
        <li><strong>DataReader</strong> — Provides fast, forward-only, read-only access to database records.</li>
        <li><strong>DbConnection & DbCommand</strong> — Represent the database connection and commands respectively.</li>
      </ul>

      {/* DataSet */}
      <h2 className="text-2xl font-bold">The DataSet Class</h2>
      <p className="leading-relaxed">
        A <code>DataSet</code> is disconnected from the database. It contains tables, relationships, and constraints.
      </p>

      <ul className="list-disc list-inside space-y-1">
        <li>Contains <code>DataTable</code> objects and <code>DataRelation</code> objects.</li>
        <li>Important methods include: <code>AcceptChanges(), GetChanges(), Merge(), ReadXML(), WriteXML()</code></li>
        <li>Important properties include: <code>Tables, Relations, HasErrors, DataSetName</code></li>
      </ul>

      {/* DataTable */}
      <h2 className="text-2xl font-bold">The DataTable Class</h2>
      <p className="leading-relaxed">
        Represents tables in the database. Contains rows, columns, and constraints.
      </p>

      <ul className="list-disc list-inside space-y-1">
        <li>Properties: <code>Columns, Rows, PrimaryKey, Constraints</code></li>
        <li>Methods: <code>NewRow(), AcceptChanges(), Merge(), Select(), RejectChanges()</code></li>
      </ul>

      {/* DataRow */}
      <h2 className="text-2xl font-bold">The DataRow Class</h2>
      <p className="leading-relaxed">
        Represents a single row in a table.
      </p>

      <ul className="list-disc list-inside space-y-1">
        <li>Properties: <code>Items, ItemArray, Table, HasErrors</code></li>
        <li>Methods: <code>BeginEdit(), EndEdit(), AcceptChanges(), RejectChanges(), Delete()</code></li>
      </ul>

      {/* Example */}
      <h2 className="text-2xl font-bold">Example: Create DataSet & Display in GridView</h2>

      <p className="leading-relaxed">
        This example creates a <code>DataSet</code> with a <code>Student</code> table, adds columns and rows, and displays it using a <code>GridView</code>.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`// Page_Load event
if (!IsPostBack)
{
    DataSet ds = CreateDataSet();
    GridView1.DataSource = ds.Tables["Student"];
    GridView1.DataBind();
}

// Create DataSet
private DataSet CreateDataSet()
{
    DataSet dataset = new DataSet();
    DataTable students = CreateStudentTable();
    dataset.Tables.Add(students);
    return dataset;
}

// Create DataTable
private DataTable CreateStudentTable()
{
    DataTable students = new DataTable("Student");

    // Add columns
    AddNewColumn(students, "System.Int32", "StudentID");
    AddNewColumn(students, "System.String", "StudentName");
    AddNewColumn(students, "System.String", "StudentCity");

    // Add rows
    AddNewRow(students, 1, "M H Kabir", "Kolkata");
    AddNewRow(students, 2, "Shreya Sharma", "Delhi");
    AddNewRow(students, 3, "Rini Mukherjee", "Hyderabad");
    AddNewRow(students, 4, "Sunil Dubey", "Bikaner");
    AddNewRow(students, 5, "Rajat Mishra", "Patna");

    return students;
}

// Helper methods
private void AddNewColumn(DataTable table, string type, string name)
{
    table.Columns.Add(name, Type.GetType(type));
}

private void AddNewRow(DataTable table, int id, string name, string city)
{
    DataRow newRow = table.NewRow();
    newRow["StudentID"] = id;
    newRow["StudentName"] = name;
    newRow["StudentCity"] = city;
    table.Rows.Add(newRow);
}`}
      </pre>

      <p className="leading-relaxed">
        The <code>Page_Load</code> binds the DataSet to the GridView using <code>DataBind()</code>. 
        User-defined methods create the table, columns, and rows.
      </p>

      {/* Result */}
      <h2 className="text-2xl font-bold">Result</h2>
      <p className="leading-relaxed">
        The GridView displays the student records from the DataSet:
      </p>

      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-700 text-white">
            <th className="border border-gray-300 px-4 py-2">StudentID</th>
            <th className="border border-gray-300 px-4 py-2">StudentName</th>
            <th className="border border-gray-300 px-4 py-2">StudentCity</th>
          </tr>
        </thead>
        <tbody>
          {[
            { id: 1, name: "M H Kabir", city: "Kolkata" },
            { id: 2, name: "Shreya Sharma", city: "Delhi" },
            { id: 3, name: "Rini Mukherjee", city: "Hyderabad" },
            { id: 4, name: "Sunil Dubey", city: "Bikaner" },
            { id: 5, name: "Rajat Mishra", city: "Patna" },
          ].map((student) => (
            <tr key={student.id} className="even:bg-gray-100 odd:bg-white">
              <td className="border border-gray-300 px-4 py-2">{student.id}</td>
              <td className="border border-gray-300 px-4 py-2">{student.name}</td>
              <td className="border border-gray-300 px-4 py-2">{student.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdoNet;
