import React from "react";


const SQLSelectStatement: React.FC = () => {
  return <div className="mt-20 space-y-8">
        {/* Title */}
        <h1 className="text-4xl font-extrabold border-b-2 pb-3">SQL SELECT Statement</h1>

        <p className="mb-4">
            The <code>SELECT</code> statement is used to select data from a
            database.
        </p>

        <h2 className="text-xl font-semibold mb-2">Example</h2>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
            <code>{`SELECT CustomerName, City FROM Customers;`}</code>
        </pre>

        <h2 className="text-xl font-semibold mb-2">Syntax</h2>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
            <code>{`SELECT column1, column2, ...
FROM table_name;`}</code>
        </pre>

        <p className="mb-4">
            Here, <code>column1</code>, <code>column2</code>, ... are the field
            names of the table you want to select data from. The{" "}
            <code>table_name</code> represents the name of the table you want to
            select data from.
        </p>

        <h2 className="text-xl font-semibold mb-2">Demo Database</h2>
        <p className="mb-4">
            Below is a selection from the <code>Customers</code> table used in the
            examples:
        </p>

        <div className="overflow-x-auto mb-4">
            <table className="min-w-full border border-gray-300">
                <thead>
                    <tr className="bg-gray-100 border-b">
                        <th className="px-4 py-2 border">CustomerID</th>
                        <th className="px-4 py-2 border">CustomerName</th>
                        <th className="px-4 py-2 border">ContactName</th>
                        <th className="px-4 py-2 border">Address</th>
                        <th className="px-4 py-2 border">City</th>
                        <th className="px-4 py-2 border">PostalCode</th>
                        <th className="px-4 py-2 border">Country</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b">
                        <td className="px-4 py-2 border">1</td>
                        <td className="px-4 py-2 border">Alfreds Futterkiste</td>
                        <td className="px-4 py-2 border">Maria Anders</td>
                        <td className="px-4 py-2 border">Obere Str. 57</td>
                        <td className="px-4 py-2 border">Berlin</td>
                        <td className="px-4 py-2 border">12209</td>
                        <td className="px-4 py-2 border">Germany</td>
                    </tr>
                    <tr className="border-b">
                        <td className="px-4 py-2 border">2</td>
                        <td className="px-4 py-2 border">
                            Ana Trujillo Emparedados y helados
                        </td>
                        <td className="px-4 py-2 border">Ana Trujillo</td>
                        <td className="px-4 py-2 border">
                            Avda. de la Constitución 2222
                        </td>
                        <td className="px-4 py-2 border">México D.F.</td>
                        <td className="px-4 py-2 border">05021</td>
                        <td className="px-4 py-2 border">Mexico</td>
                    </tr>
                    <tr className="border-b">
                        <td className="px-4 py-2 border">3</td>
                        <td className="px-4 py-2 border">Antonio Moreno Taquería</td>
                        <td className="px-4 py-2 border">Antonio Moreno</td>
                        <td className="px-4 py-2 border">Mataderos 2312</td>
                        <td className="px-4 py-2 border">México D.F.</td>
                        <td className="px-4 py-2 border">05023</td>
                        <td className="px-4 py-2 border">Mexico</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h2 className="text-xl font-semibold mb-2">Select ALL columns</h2>
        <p className="mb-2">
            If you want to return all columns, without specifying every column name,
            you can use the <code>SELECT *</code> syntax:
        </p>
        <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
            <code>{`SELECT * FROM Customers;`}</code>
        </pre>
    </div>;
};

export default SQLSelectStatement;
