import React from "react";

const GraphqlTypeSystem: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">

      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        GraphQL - Type System
      </h1>

      <p className="leading-relaxed">
        GraphQL is a strongly typed language. The type system defines the various
        data types used in a GraphQL application and acts as a contract between
        server and client.
      </p>

      <h2 className="text-2xl font-bold pt-3">Common GraphQL Types</h2>

      <table className="w-full border mt-3">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-3 py-2 w-20 text-center">Sr.No.</th>
            <th className="border px-3 py-2 w-40">Type</th>
            <th className="border px-3 py-2">Description</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="border px-3 py-2 text-center">1</td>
            <td className="border px-3 py-2 font-semibold">Scalar</td>
            <td className="border px-3 py-2">Stores a single value</td>
          </tr>

          <tr>
            <td className="border px-3 py-2 text-center">2</td>
            <td className="border px-3 py-2 font-semibold">Object</td>
            <td className="border px-3 py-2">Represents structured data with fields</td>
          </tr>

          <tr>
            <td className="border px-3 py-2 text-center">3</td>
            <td className="border px-3 py-2 font-semibold">Query</td>
            <td className="border px-3 py-2">Entry point for data fetching</td>
          </tr>

          <tr>
            <td className="border px-3 py-2 text-center">4</td>
            <td className="border px-3 py-2 font-semibold">Mutation</td>
            <td className="border px-3 py-2">Entry point for data manipulation</td>
          </tr>

          <tr>
            <td className="border px-3 py-2 text-center">5</td>
            <td className="border px-3 py-2 font-semibold">Enum</td>
            <td className="border px-3 py-2">
              Represents a fixed set of allowed values
            </td>
          </tr>
        </tbody>
      </table>

      {/* Scalar Type */}
      <h2 className="text-2xl font-bold pt-5">Scalar Type</h2>

      <p className="leading-relaxed">
        Scalar types store single primitive values. GraphQL provides the following
        built-in scalar types:
      </p>

      <ul className="list-disc list-inside space-y-1">
        <li><strong>Int</strong> – 32-bit integer</li>
        <li><strong>Float</strong> – Double-precision floating point</li>
        <li><strong>String</strong> – UTF-8 character sequence</li>
        <li><strong>Boolean</strong> – true or false</li>
        <li><strong>ID</strong> – Unique identifier used for caching or lookups</li>
      </ul>

      <p className="leading-relaxed">Example:</p>

      <pre className="bg-gray-900 text-white p-4 rounded">
        greeting: String
      </pre>

      {/* Object Type */}
      <h2 className="text-2xl font-bold pt-5">Object Type</h2>

      <p className="leading-relaxed">
        Object types represent structured data and contain multiple fields. Each
        field maps to another type (scalar or object).
      </p>

      <pre className="bg-gray-900 text-white p-4 rounded whitespace-pre-wrap">
{`type Student {
  stud_id: ID
  firstname: String
  age: Int
  score: Float
}

type Query {
  stud_details: [Student]
}`}
      </pre>

      {/* Query Type */}
      <h2 className="text-2xl font-bold pt-5">Query Type</h2>

      <p className="leading-relaxed">
        A Query type defines the read operations that clients can use to fetch
        data from the server.
      </p>

      <pre className="bg-gray-900 text-white p-4 rounded whitespace-pre-wrap">
{`type Query {
  greeting: String
}`}
      </pre>

      {/* Mutation Type */}
      <h2 className="text-2xl font-bold pt-5">Mutation Type</h2>

      <p className="leading-relaxed">
        Mutations are used to create, update, or delete data — similar to POST,
        PUT, PATCH, DELETE in REST APIs.
      </p>

      <pre className="bg-gray-900 text-white p-4 rounded whitespace-pre-wrap">
{`type Mutation {
  addStudent(firstName: String, lastName: String): Student
}`}
      </pre>

      {/* Enum Type */}
      <h2 className="text-2xl font-bold pt-5">Enum Type</h2>

      <p className="leading-relaxed">
        Enum types are used when a field must contain one value from a fixed set.
      </p>

      <pre className="bg-gray-900 text-white p-4 rounded whitespace-pre-wrap">
{`type Days_of_Week {
  SUNDAY
  MONDAY
  TUESDAY
  WEDNESDAY
  THURSDAY
  FRIDAY
  SATURDAY
}`}
      </pre>

      {/* List Type */}
      <h2 className="text-2xl font-bold pt-5">List Type</h2>

      <p className="leading-relaxed">
        Lists represent an array of values. They are defined using square brackets.
      </p>

      <pre className="bg-gray-900 text-white p-4 rounded whitespace-pre-wrap">
{`type Query {
  todos: [String]
}`}
      </pre>

      {/* Non-Nullable Type */}
      <h2 className="text-2xl font-bold pt-5">Non-Nullable Type</h2>

      <p className="leading-relaxed">
        By default, any field may contain a <code>null</code> value. To enforce a
        required field, append an exclamation mark (<strong>!</strong>) to the type.
      </p>

      <pre className="bg-gray-900 text-white p-4 rounded whitespace-pre-wrap">
{`type Student {
  stud_id: ID!
  firstName: String
  lastName: String
  fullName: String
  college: College
}`}
      </pre>

    </div>
  );
};

export default GraphqlTypeSystem;
