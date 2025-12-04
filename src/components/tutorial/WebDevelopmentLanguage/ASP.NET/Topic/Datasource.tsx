import React, { useState } from "react";

// Simulated database records
interface Employee {
  EMPLOYEEID: number;
  LASTNAME: string;
}

interface Student {
  StudentID: number;
  Name: string;
  City: string;
}

// Simulated SQL Data Source
const sqlData: Employee[] = [
  { EMPLOYEEID: 1, LASTNAME: "Smith" },
  { EMPLOYEEID: 2, LASTNAME: "Johnson" },
  { EMPLOYEEID: 11, LASTNAME: "Williams" },
  { EMPLOYEEID: 12, LASTNAME: "Brown" },
];

// Simulated Object Data Source
const objectData: Student[] = [
  { StudentID: 1, Name: "M. H. Kabir", City: "Calcutta" },
  { StudentID: 2, Name: "Ayan J. Sarkar", City: "Calcutta" },
];

// Simulated Access Data Source
const accessData: { DotNetReferences: string }[] = [
  { DotNetReferences: "ASP.NET StepByStep" },
  { DotNetReferences: "C# Programming" },
];

const DataSourceControl: React.FC = () => {
  const [sqlEmployees, setSqlEmployees] = useState<Employee[]>([]);
  const [objectStudents, setObjectStudents] = useState<Student[]>([]);
  const [accessRecords, setAccessRecords] = useState<
    { DotNetReferences: string }[]
  >([]);

  // Simulate Select Command
  const handleSqlSelect = () => {
    // Filtering EMPLOYEEID > 10 to simulate FilterExpression
    setSqlEmployees(sqlData.filter((emp) => emp.EMPLOYEEID > 10));
  };

  const handleObjectSelect = () => {
    setObjectStudents(objectData); // Just get all students
  };

  const handleAccessSelect = () => {
    setAccessRecords(accessData);
  };

  // Simulate Update Command
  const handleSqlUpdate = () => {
    const updated = sqlEmployees.map((emp) => ({
      ...emp,
      LASTNAME: emp.LASTNAME + " (Updated)",
    }));
    setSqlEmployees(updated);
  };

  // Simulate Delete Command
  const handleSqlDelete = () => {
    setSqlEmployees(sqlEmployees.filter((emp) => emp.EMPLOYEEID !== 12));
  };

  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        ASP.NET Data Sources Simulation
      </h1>

      <p className="leading-relaxed">
        This example simulates SQL, Object, and Access data sources using React
        state.
      </p>

      {/* SQL Data Source Simulation */}
      <div className="border border-gray-400 p-4 rounded-md bg-blue-50">
        <h2 className="font-bold mb-2">SQL Data Source (Employees)</h2>
        <button
          onClick={handleSqlSelect}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        >
          Select Employees
        </button>
        <button
          onClick={handleSqlUpdate}
          className="bg-green-500 text-white px-4 py-2 rounded mr-2"
        >
          Update Employees
        </button>
        <button
          onClick={handleSqlDelete}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Delete Employee
        </button>
        <ul className="mt-2 text-gray-700">
          {sqlEmployees.map((emp) => (
            <li key={emp.EMPLOYEEID}>
              ID: {emp.EMPLOYEEID}, LastName: {emp.LASTNAME}
            </li>
          ))}
        </ul>
      </div>

      {/* Object Data Source Simulation */}
      <div className="border border-gray-400 p-4 rounded-md bg-green-50">
        <h2 className="font-bold mb-2">Object Data Source (Students)</h2>
        <button
          onClick={handleObjectSelect}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Select Students
        </button>
        <ul className="mt-2 text-gray-700">
          {objectStudents.map((s) => (
            <li key={s.StudentID}>
              ID: {s.StudentID}, Name: {s.Name}, City: {s.City}
            </li>
          ))}
        </ul>
      </div>

      {/* Access Data Source Simulation */}
      <div className="border border-gray-400 p-4 rounded-md bg-yellow-50">
        <h2 className="font-bold mb-2">Access Data Source</h2>
        <button
          onClick={handleAccessSelect}
          className="bg-yellow-500 text-white px-4 py-2 rounded"
        >
          Select Records
        </button>
        <ul className="mt-2 text-gray-700">
          {accessRecords.map((rec, idx) => (
            <li key={idx}>{rec.DotNetReferences}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DataSourceControl;
