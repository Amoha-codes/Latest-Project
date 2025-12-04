import React from "react";

const GraphqlIntroduction: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">

      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        GraphQL - Introduction
      </h1>

      <p className="leading-relaxed">
        GraphQL is an open-source server-side technology developed by Facebook to
        optimize RESTful API calls. It is both a data query language and an execution
        engine. In this chapter, we discuss the advantages of using GraphQL.
      </p>

      {/* Why GraphQL */}
      <h2 className="text-2xl font-bold pt-5">Why GraphQL?</h2>

      <p className="leading-relaxed">
        RESTful APIs follow a resource-oriented structure, but when data becomes
        complex, routes become longer and require multiple requests. GraphQL solves
        this problem by structuring data as a graph and providing powerful query
        syntax to fetch exactly what you need.
      </p>

      <h3 className="text-xl font-semibold pt-3">
        Advantages of GraphQL Query Language
      </h3>

      <ul className="list-disc list-inside space-y-1">
        <li>Ask for exactly what you need — and get only that</li>
        <li>Fetch many related resources in a single request</li>
        <li>Strongly typed schema allows precise validation</li>
        <li>Rich developer tools like GraphiQL</li>
      </ul>

      {/* Ask for what you want */}
      <h2 className="text-2xl font-bold pt-5">Ask for What You Want — And Get It</h2>

      <p className="leading-relaxed">
        In REST, calling <code>/api/v1/students</code> returns full student data even if
        the client needs only a few fields — causing over-fetching. GraphQL solves
        this by allowing clients to request specific fields only.
      </p>

      <p className="leading-relaxed font-semibold">Example GraphQL Query:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`{
  students {
    id
    firstName
  }
}`}
      </pre>

      <p className="leading-relaxed font-semibold">Response:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`{
  "data": {
    "students": [
      { "id": "S1001", "firstName": "Mohtashim" },
      { "id": "S1002", "firstName": "Kannan" }
    ]
  }
}`}
      </pre>

      {/* Get many resources */}
      <h2 className="text-2xl font-bold pt-5">
        Get Many Resources in a Single Request
      </h2>

      <p className="leading-relaxed">
        REST APIs may require multiple URLs to load related objects, causing
        under-fetching. GraphQL allows fetching related objects in one query.
      </p>

      <p className="leading-relaxed font-semibold">Example Query:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`{
  students {
    id
    firstName
    lastName
    college {
      name
      location
    }
  }
}`}
      </pre>

      <p className="leading-relaxed font-semibold">Response:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`{
  "data": {
    "students": [
      {
        "id": "S1001",
        "firstName": "Mohtashim",
        "lastName": "Mohammad",
        "college": { "name": "CUSAT", "location": "Kerala" }
      },
      {
        "id": "S1002",
        "firstName": "Kannan",
        "lastName": "Sudhakaran",
        "college": { "name": "AMU", "location": "Uttar Pradesh" }
      },
      {
        "id": "S1003",
        "firstName": "Kiran",
        "lastName": "Panigrahi",
        "college": { "name": "AMU", "location": "Uttar Pradesh" }
      }
    ]
  }
}`}
      </pre>

      {/* Type system */}
      <h2 className="text-2xl font-bold pt-5">
        Describe What's Possible With a Type System
      </h2>

      <p className="leading-relaxed">
        GraphQL is strongly typed. Queries are validated against a schema which helps
        in catching type mismatches during development. This makes debugging easier
        and improves reliability.
      </p>

      <p className="leading-relaxed font-semibold">Example Schema:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`type Query {
  students: [Student]
}

type Student {
  id: ID!
  firstName: String
  lastName: String
  fullName: String
  college: College
}

type College {
  id: ID!
  name: String
  location: String
  rating: Float
  students: [Student]
}`}
      </pre>

      {/* Developer Tools */}
      <h2 className="text-2xl font-bold pt-5">
        Move Faster With Powerful Developer Tools
      </h2>

      <p className="leading-relaxed">
        GraphQL provides excellent developer tools for documentation and testing.
        GraphiQL offers auto-complete, schema documentation, and an interactive query
        editor for rapid API development.
      </p>
    </div>
  );
};

export default GraphqlIntroduction;
