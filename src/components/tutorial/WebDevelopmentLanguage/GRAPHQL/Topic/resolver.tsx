import React from "react";

const GraphqlResolver: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        GraphQL - Resolver
      </h1>

      <p className="leading-relaxed">
        A resolver is a collection of functions that generate a response for a
        GraphQL query. In simple terms, a resolver acts as a GraphQL query
        handler. Every resolver function in a GraphQL schema accepts four
        positional arguments.
      </p>

      {/* Function Signature */}
      <h2 className="text-2xl font-bold pt-5">Resolver Function Syntax</h2>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fieldName: (root, args, context, info) => { 
  return result 
}`}
      </pre>

      {/* Examples */}
      <h2 className="text-2xl font-bold pt-5">Resolver Examples</h2>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`// Resolver returning a simple string
greeting: () => {
  return "hello from TutorialsPoint !!!"
}

// Resolver returning a list
students: () => db.students.list()

// Resolver with arguments
studentById: (root, args, context, info) => {
  return db.students.get(args.id)
}`}
      </pre>

      {/* Arguments Table */}
      <h2 className="text-2xl font-bold pt-5">Resolver Arguments</h2>

      <ul className="list-disc list-inside space-y-1">
        <li>
          <strong>root:</strong> Contains the result from parent resolver.
        </li>
        <li>
          <strong>args:</strong> Contains arguments passed in the query.
        </li>
        <li>
          <strong>context:</strong> Shared object across resolvers (auth, db, etc.).
        </li>
        <li>
          <strong>info:</strong> Metadata about execution (field name, path, etc.).
        </li>
      </ul>

      {/* Return Types */}
      <h2 className="text-2xl font-bold pt-5">Resolver Result Format</h2>

      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>null / undefined:</strong> Object not found.
        </li>
        <li>
          <strong>Array:</strong> Valid only when schema expects a list.
        </li>
        <li>
          <strong>Promise:</strong> Returned if using async operations like DB calls.
        </li>
        <li>
          <strong>Scalar / Object:</strong> Standard return values.
        </li>
      </ul>

      {/* Illustration */}
      <h2 className="text-2xl font-bold pt-5">Illustration</h2>

      <p className="leading-relaxed">
        Let us create a simple application to understand resolvers.  
        This schema will allow querying a student by ID.  
        Student data is stored in a flat JSON file and accessed using <code>notarealdb</code>.
      </p>

      {/* Step 1 */}
      <h3 className="text-xl font-semibold pt-3">
        Step 1 — Install Dependencies
      </h3>

      <p className="leading-relaxed">
        Create a folder <code>resolver-app</code>. Then follow steps in the
        Environment Setup chapter to install required dependencies.
      </p>

      {/* Step 2 */}
      <h3 className="text-xl font-semibold pt-3">
        Step 2 — Create Schema (schema.graphql)
      </h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`type Query { 
  greeting: String
  students: [Student]
  studentById(id: ID!): Student
}

type Student {
  id: ID!
  firstName: String
  lastName: String
  password: String
  collegeId: String
}`}
      </pre>

      <p className="leading-relaxed">
        The schema supports <strong>greeting</strong>, <strong>students</strong>,
        and <strong>studentById</strong> queries.  
        <code>ID!</code> denotes a required unique identifier.
      </p>

      {/* Step 3 */}
      <h3 className="text-xl font-semibold pt-3">
        Step 3 — Create Resolver (resolvers.js)
      </h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`const db = require('./db')

const Query = {

  // Greeting resolver
  greeting: () => {
    return "hello from TutorialsPoint !!!"
  },

  // Return list of students
  students: () => db.students.list(),

  // Resolver for student by ID
  studentById: (root, args, context, info) => {
    return db.students.get(args.id)
  }
}

module.exports = { Query }`}
      </pre>

      <p className="leading-relaxed">
        Here <strong>args.id</strong> retrieves the ID passed in the query.
        The <code>db.students.get()</code> method returns the student object.
      </p>

      {/* Step 4 */}
      <h3 className="text-xl font-semibold pt-3">Step 4 — Run the Application</h3>

      <p className="leading-relaxed">
        Create <code>server.js</code> (same as Environment Setup chapter) and run:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`npm start`}
      </pre>

      <p className="leading-relaxed">
        Open browser and navigate to:{" "}
        <code>http://localhost:9000/graphiql</code>
      </p>

      {/* Query Example */}
      <h3 className="text-xl font-semibold pt-3">Test Query</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`{
  studentById(id: "S1001") {
    id
    firstName
    lastName
  }
}`}
      </pre>

      {/* Output */}
      <h3 className="text-xl font-semibold pt-3">Response</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`{
  "data": {
    "studentById": {
      "id": "S1001",
      "firstName": "Mohtashim",
      "lastName": "Mohammad"
    }
  }
}`}
      </pre>

    </div>
  );
};

export default GraphqlResolver;
