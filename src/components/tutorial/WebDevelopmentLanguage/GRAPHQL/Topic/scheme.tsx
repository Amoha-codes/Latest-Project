import React from "react";

const GraphqlSchema: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">

      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        GraphQL - Schema
      </h1>

      <p className="leading-relaxed">
        A GraphQL schema is at the core of any GraphQL server. It describes the functionality available 
        to client applications. Any programming language can be used to create a schema and interface around it.
      </p>

      <p className="leading-relaxed">
        The GraphQL runtime defines a generic graph-based schema to publish the capabilities of the data service. 
        Client applications query the schema within its capabilities, allowing clients and servers to evolve independently.
      </p>

      <h2 className="text-2xl font-bold pt-5">makeExecutableSchema Function</h2>
      <p className="leading-relaxed">
        In Apollo Server, <code>makeExecutableSchema</code> from <code>graphql-tools</code> binds schema and resolvers.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`import { makeExecutableSchema } from 'graphql-tools';

const jsSchema = makeExecutableSchema({
  typeDefs,
  resolvers, // optional
  logger, // optional
  allowUndefinedInResolve = false, // optional
  resolverValidationOptions = {}, // optional
  directiveResolvers = null, // optional
  schemaDirectives = null,  // optional
  parseOptions = {},  // optional
  inheritResolversFromInterfaces = false  // optional
});`}
      </pre>

      <p className="leading-relaxed font-semibold">Parameters:</p>
      <ul className="list-disc list-inside space-y-1">
        <li><strong>typeDefs</strong> – Required. GraphQL query as UTF-8 string.</li>
        <li><strong>resolvers</strong> – Optional. Functions that handle queries.</li>
        <li><strong>logger</strong> – Optional. Prints errors to server console.</li>
        <li><strong>parseOptions</strong> – Optional. Customize parsing of typeDefs string.</li>
        <li><strong>allowUndefinedInResolve</strong> – Default true. Throws error if resolver returns undefined when false.</li>
        <li><strong>resolverValidationOptions</strong> – Optional Boolean options for validation.</li>
        <li><strong>inheritResolversFromInterfaces</strong> – Optional Boolean for resolver inheritance.</li>
      </ul>

      <h2 className="text-2xl font-bold pt-5">Illustration</h2>
      <p className="leading-relaxed">
        Let’s create a simple application to understand GraphQL schema. We will query a list of students using a fake database (<code>notarealdb</code>).
      </p>

      {/* Step 1 */}
      <h3 className="text-xl font-semibold pt-3">Step 1 — Install Dependencies</h3>
      <p className="leading-relaxed">
        Create a folder <code>schema-app</code> and follow steps from Environment Setup chapter to install dependencies.
      </p>

      {/* Step 2 */}
      <h3 className="text-xl font-semibold pt-3">Step 2 — Create Schema</h3>
      <p className="leading-relaxed">
        Add <code>schema.graphql</code>:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`type Query {
  greeting: String
  students: [Student]
}

type Student {
  id: ID!
  firstName: String
  lastName: String
  password: String
  collegeId: String
}`}
      </pre>

      {/* Step 3 */}
      <h3 className="text-xl font-semibold pt-3">Step 3 — Create Resolver</h3>
      <p className="leading-relaxed">
        Create <code>resolvers.js</code>:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`const db = require('./db');

const Query = {
  greeting: () => "hello from TutorialsPoint !!!",
  students: () => db.students.list()
};

module.exports = { Query };`}
      </pre>

      {/* Step 4 */}
      <h3 className="text-xl font-semibold pt-3">Step 4 — Run Application</h3>
      <p className="leading-relaxed">
        Create <code>server.js</code> as in Environment Setup chapter, then start server:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`npm start`}
      </pre>

      <p className="leading-relaxed">
        Open <code>http://localhost:9000/graphiql</code> and test with the following query:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`{
  greeting
  students {
    id
    firstName
    lastName
  }
}`}
      </pre>

    </div>
  );
};

export default GraphqlSchema;
