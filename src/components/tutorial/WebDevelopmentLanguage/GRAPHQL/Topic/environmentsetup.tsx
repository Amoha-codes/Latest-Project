import React from "react";

const GraphqlEnvironmentSetup: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">

      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        GraphQL - Environment Setup
      </h1>

      <p className="leading-relaxed">
        In this chapter, we will learn about the environment setup required for
        GraphQL. To execute examples in this tutorial, you will need the following:
      </p>

      <ul className="list-disc list-inside space-y-1">
        <li>A computer running Linux, macOS, or Windows</li>
        <li>A modern web browser (Google Chrome recommended)</li>
        <li>A recent version of Node.js (latest LTS recommended)</li>
        <li>
          Visual Studio Code with the <strong>GraphQL for VSCode</strong> extension (or any editor)
        </li>
      </ul>

      {/* Build GraphQL Server */}
      <h2 className="text-2xl font-bold pt-5">
        How to Build a GraphQL Server with Node.js
      </h2>

      <p className="leading-relaxed">
        Below is the step-by-step process to set up a GraphQL server using Node.js:
      </p>

      {/* Step 1 */}
      <h3 className="text-xl font-semibold pt-3">Step 1 — Verify Node and NPM Versions</h3>
      <p className="leading-relaxed">Run the following commands:</p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`C:\\Users\\Admin>node -v
v8.11.3

C:\\Users\\Admin>npm -v
5.6.0`}
      </pre>

      {/* Step 2 */}
      <h3 className="text-xl font-semibold pt-3">Step 2 — Create Project Folder and Open in VSCode</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`C:\\Users\\Admin>mkdir test-app
C:\\Users\\Admin>cd test-app
C:\\Users\\Admin\\test-app>code .`}
      </pre>

      {/* Step 3 */}
      <h3 className="text-xl font-semibold pt-3">
        Step 3 — Create package.json and Install Dependencies
      </h3>

      <p className="leading-relaxed">
        Create a <code>package.json</code> file with the following content:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`{
  "name": "hello-world-server",
  "private": true,
  "scripts": {
    "start": "nodemon --ignore data/ server.js"
  },
  "dependencies": {
    "apollo-server-express": "^1.4.0",
    "body-parser": "^1.18.3",
    "cors": "^2.8.4",
    "express": "^4.16.3",
    "graphql": "^0.13.2",
    "graphql-tools": "^3.1.1"
  },
  "devDependencies": {
    "nodemon": "1.17.1"
  }
}`}
      </pre>

      <p className="leading-relaxed">Install dependencies:</p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`C:\\Users\\Admin\\test-app>npm install`}
      </pre>

      {/* Step 4 */}
      <h3 className="text-xl font-semibold pt-3">
        Step 4 — Create Flat File Database (data folder)
      </h3>

      <p className="leading-relaxed">Create a <code>data</code> folder and add:</p>

      <h4 className="text-lg font-semibold">colleges.json</h4>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`[
  {
    "id": "col-101",
    "name": "AMU",
    "location": "Uttar Pradesh",
    "rating": 5.0
  },
  {
    "id": "col-102",
    "name": "CUSAT",
    "location": "Kerala",
    "rating": 4.5
  }
]`}
      </pre>

      <h4 className="text-lg font-semibold">students.json</h4>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`[
  {
    "id": "S1001",
    "firstName": "Mohtashim",
    "lastName": "Mohammad",
    "email": "mohtashim.mohammad@tutorialpoint.org",
    "password": "pass123",
    "collegeId": "col-102"
  },
  {
    "id": "S1002",
    "email": "kannan.sudhakaran@tutorialpoint.org",
    "firstName": "Kannan",
    "lastName": "Sudhakaran",
    "password": "pass123",
    "collegeId": "col-101"
  },
  {
    "id": "S1003",
    "email": "kiran.panigrahi@tutorialpoint.org",
    "firstName": "Kiran",
    "lastName": "Panigrahi",
    "password": "pass123",
    "collegeId": "col-101"
  }
]`}
      </pre>

      {/* Step 5 */}
      <h3 className="text-xl font-semibold pt-3">
        Step 5 — Create Data Access Layer (db.js)
      </h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`const { DataStore } = require('notarealdb');

const store = new DataStore('./data');

module.exports = {
  students: store.collection('students'),
  colleges: store.collection('colleges')
};`}
      </pre>

      {/* Step 6 */}
      <h3 className="text-xl font-semibold pt-3">
        Step 6 — Create Schema File (schema.graphql)
      </h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`type Query {
  test: String
}`}
      </pre>

      {/* Step 7 */}
      <h3 className="text-xl font-semibold pt-3">
        Step 7 — Create Resolver File (resolvers.js)
      </h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`const Query = {
  test: () => 'Test Success, GraphQL server is up & running !!'
}

module.exports = { Query };`}
      </pre>

      {/* Step 8 */}
      <h3 className="text-xl font-semibold pt-3">
        Step 8 — Create server.js and Configure GraphQL
      </h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const db = require('./db');

const port = process.env.PORT || 9000;
const app = express();

const fs = require('fs');
const typeDefs = fs.readFileSync('./schema.graphql', { encoding: 'utf-8' });
const resolvers = require('./resolvers');

const { makeExecutableSchema } = require('graphql-tools');
const schema = makeExecutableSchema({ typeDefs, resolvers });

app.use(cors(), bodyParser.json());

const { graphiqlExpress, graphqlExpress } = require('apollo-server-express');
app.use('/graphql', graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(port, () =>
  console.info(\`Server started on port \${port}\`)
);`}
      </pre>

      {/* Step 9 */}
      <h3 className="text-xl font-semibold pt-3">
        Step 9 — Run the Application and Test Using GraphiQL
      </h3>

      <p className="leading-relaxed">Start the server:</p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`C:\\Users\\Admin\\test-app>npm start`}
      </pre>

      <p className="leading-relaxed">
        Open browser and navigate to:{" "}
        <code>http://localhost:9000/graphiql</code>
      </p>

      <p className="leading-relaxed font-semibold">Test Query:</p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`{
  test
}`}
      </pre>

      <p className="leading-relaxed font-semibold">Response:</p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`{
  "data": {
    "test": "Test Success, GraphQL server is running !!"
  }
}`}
      </pre>

    </div>
  );
};

export default GraphqlEnvironmentSetup;
