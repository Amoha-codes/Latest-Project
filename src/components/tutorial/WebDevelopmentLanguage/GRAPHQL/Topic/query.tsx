import React from "react";

const GraphqlQuery: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        GraphQL - Query
      </h1>

      <p className="leading-relaxed">
        A GraphQL operation can either be a <strong>read</strong> (query) or a
        <strong> write</strong> (mutation). A query is used to fetch data from
        the GraphQL server and typically returns results in JSON format.
        Unlike REST, GraphQL allows fetching only the required fields,
        reducing network usage and improving performance.
      </p>

      {/* Syntax */}
      <h2 className="text-2xl font-bold pt-5">Query Syntax</h2>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`// Syntax 1
query query_name {
  someField
}

// Syntax 2
{
  someField
}`}</pre>

      <p className="leading-relaxed">
        The <code>query</code> keyword is optional.
      </p>

      <h3 className="text-xl font-semibold pt-3">Example</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`// Named Query
query myQuery {
  greeting
}

// Anonymous Query
{
  greeting
}`}</pre>

      {/* Illustration 1 */}
      <h2 className="text-2xl font-bold pt-5">
        Illustration 1 — Querying Student Model with a Custom Field
      </h2>

      <p className="leading-relaxed">
        In this example, students are stored in a JSON file. The model contains
        <code>firstName</code>, <code>lastName</code>, and <code>id</code>, but
        no <code>fullName</code> field. We will create a custom resolver to
        return <code>fullName</code>.
      </p>

      <h3 className="text-xl font-semibold pt-3">Step 1 — Install Dependencies</h3>

      <p>Create folder <code>query-app</code>. Follow environment setup steps.</p>

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
  fullName: String
}`}</pre>

      <h3 className="text-xl font-semibold pt-3">
        Step 3 — Create Resolver (resolvers.js)
      </h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`const db = require('./db');

const Query = {
  greeting: () => "hello from TutorialsPoint !!!",
  students: () => db.students.list(),
  studentById: (root, args) => db.students.get(args.id)
};

const Student = {
  fullName: (root) => root.firstName + ":" + root.lastName
};

module.exports = { Query, Student };`}</pre>

      <h3 className="text-xl font-semibold pt-3">
        Step 4 — Run the Application (server.js)
      </h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

const db = require('./db');
const fs = require('fs');
const port = 9000;
const app = express();

const typeDefs = fs.readFileSync('./schema.graphql', { encoding: 'utf-8' });
const resolvers = require('./resolvers');

const { makeExecutableSchema } = require('graphql-tools');
const schema = makeExecutableSchema({ typeDefs, resolvers });

const { graphiqlExpress, graphqlExpress } = require('apollo-server-express');
app.use(cors(), bodyParser.json());

app.use('/graphql', graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(port, () => console.log("Server started on port " + port));`}</pre>

      <h3 className="text-xl font-semibold pt-3">Example Query</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`{
  students {
    id
    fullName
  }
}`}</pre>

      {/* Illustration 2 */}
      <h2 className="text-2xl font-bold pt-5">Illustration 2 — Nested Query</h2>

      <p className="leading-relaxed">
        Now we add a <code>college</code> field inside <code>Student</code>,
        allowing nested queries.
      </p>

      <h3 className="text-xl font-semibold pt-3">Update Schema</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`type College {
  id: ID!
  name: String
  location: String
  rating: Float
}

type Student {
  id: ID!
  firstName: String
  lastName: String
  fullName: String
  college: College
}`}</pre>

      <h3 className="text-xl font-semibold pt-3">Update Resolver</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`const Student = {
  fullName: (root) => root.firstName + ":" + root.lastName,
  college: (root) => db.colleges.get(root.collegeId)
};

module.exports = { Query, Student };`}</pre>


      <h3 className="text-xl font-semibold pt-3">Example Nested Query</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`{
  students {
    id
    firstName
    college {
      id
      name
      location
      rating
    }
  }
}`}</pre>

      {/* Query Variables */}
      <h2 className="text-2xl font-bold pt-5">What is a Query Variable?</h2>

      <p className="leading-relaxed">
        Query variables allow sending dynamic values to a GraphQL query,
        making queries reusable.
      </p>

      <h3 className="text-xl font-semibold pt-3">Step 1 — Schema Update</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`type Query {
  sayHello(name: String!): String
}`}</pre>

      <h3 className="text-xl font-semibold pt-3">Step 2 — Resolver</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`sayHello: (root, args) => \`Hi \${args.name} GraphQL server says Hello to you!!\``}</pre>

      <h3 className="text-xl font-semibold pt-3">Step 3 — Using Variables in GraphiQL</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`query myQuery($myname_Variable: String!) {
  sayHello(name: $myname_Variable)
}`}</pre>

      <h4 className="text-lg font-semibold pt-2">Query Variables</h4>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`{
  "myname_Variable": "Mohtashim"
}`}</pre>

      {/* Enum Variables */}
      <h2 className="text-2xl font-bold pt-5">Using Query Variables with Enum</h2>

      <h3 className="text-xl font-semibold pt-3">Step 1 — Schema</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`enum ColorType {
  RED
  BLUE
  GREEN
}

type Query {
  setFavouriteColor(color: ColorType): String
}`}</pre>

      <h3 className="text-xl font-semibold pt-3">Step 2 — Resolver</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`setFavouriteColor: (root, args) => 
  "Your Fav Color is: " + args.color`}</pre>

      <h3 className="text-xl font-semibold pt-3">Step 3 — Query</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`query query_to_setColor($color_variable: ColorType) {
  setFavouriteColor(color: $color_variable)
}`}</pre>

      <h4 className="text-lg font-semibold pt-2">Variables</h4>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`{
  "color_variable": "RED"
}`}</pre>

    </div>
  );
};

export default GraphqlQuery;
