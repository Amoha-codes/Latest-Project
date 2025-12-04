import React from "react";

const GraphqlExample: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">

      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        GraphQL - Example
      </h1>

      <p className="leading-relaxed">
        In this chapter, we will create a simple API that returns a greeting message, <code>HelloWorld</code>,
        and access it using GraphiQL.
      </p>

      <p className="leading-relaxed">
        This example is based on NodeJS, Express, and Apollo Server. We will follow the steps below:
      </p>

      {/* Step 1 */}
      <h3 className="text-xl font-semibold pt-3">Step 1 — Set up Express</h3>
      <p className="leading-relaxed">
        Create a folder <code>hello-world-server</code> and navigate into it. Initialize a <code>package.json</code> file:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`{
  "name": "hello-world-server",
  "private": true
}`}
      </pre>

      <p className="leading-relaxed">Install Express dependencies:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`npm install express body-parser cors`}
      </pre>

      <p className="leading-relaxed">
        Create <code>server.js</code>:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const port = process.env.PORT || 9000;
const app = express();

app.use(bodyParser.json(), cors());
app.listen(port, () => console.log(\`Server is up and running at \${port}\`));`}
      </pre>

      {/* Step 2 */}
      <h3 className="text-xl font-semibold pt-3">Step 2 — Install GraphQL and Apollo Server</h3>
      <p className="leading-relaxed">
        Install the following dependencies:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`npm install graphql graphql-tools apollo-server-express@1`}
      </pre>

      {/* Step 3 */}
      <h3 className="text-xl font-semibold pt-3">Step 3 — Define the Schema</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`const typeDefinition = \`
type Query {
  greeting: String
}\``}
      </pre>

      {/* Step 4 */}
      <h3 className="text-xl font-semibold pt-3">Step 4 — Create a Resolver</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`const resolverObject = {
  Query: {
    greeting: () => 'Hello GraphQL From TutorialsPoint !!'
  }
}`}</pre>

      <p className="leading-relaxed">
        Bind the schema and resolver:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`const { makeExecutableSchema } = require('graphql-tools');
const schema = makeExecutableSchema({ typeDefs: typeDefinition, resolvers: resolverObject });`}
      </pre>

      {/* Step 5 */}
      <h3 className="text-xl font-semibold pt-3">Step 5 — Define Routes</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');

app.use('/graphql', graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));`}
      </pre>

      {/* Step 6 */}
      <h3 className="text-xl font-semibold pt-3">Step 6 — Start the Server</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`node server.js`}
      </pre>

      {/* Step 7 */}
      <h3 className="text-xl font-semibold pt-3">Step 7 — Test GraphQL API</h3>
      <p className="leading-relaxed">
        Open <code>http://localhost:9000/graphiql</code> and run the following query:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`{
  greeting
}`}
      </pre>

      <p className="leading-relaxed font-semibold">Response:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`{
  "data": {
    "greeting": "Hello GraphQL From TutorialsPoint !!"
  }
}`}
      </pre>

    </div>
  );
};

export default GraphqlExample;
