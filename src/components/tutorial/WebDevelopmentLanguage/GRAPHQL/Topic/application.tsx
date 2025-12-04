import React from "react";

const GraphqlApplicationComponents: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">

      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        GraphQL - Application Components
      </h1>

      <p className="leading-relaxed">
        This chapter discusses different GraphQL components and how they
        communicate with each other. The application components are divided into:
      </p>

      <ul className="list-disc list-inside space-y-1">
        <li>Server-side Components</li>
        <li>Client-side Components</li>
      </ul>

      {/* Server-Side Components */}
      <h2 className="text-2xl font-bold pt-5">Server-Side Components</h2>

      <p className="leading-relaxed">
        The GraphQL server is the core component responsible for parsing queries
        from client applications. Apollo Server is one of the most widely used
        implementations of the GraphQL specification.
      </p>

      <h3 className="text-xl font-semibold pt-3">Server Essentials</h3>

      <table className="w-full border mt-3">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-3 py-2 w-32">Sr.No.</th>
            <th className="border px-3 py-2 w-40">Component</th>
            <th className="border px-3 py-2">Description</th>
          </tr>
        </thead>
        <tbody>

          <tr>
            <td className="border px-3 py-2 text-center">1</td>
            <td className="border px-3 py-2 font-semibold">Schema</td>
            <td className="border px-3 py-2">
              The schema is the heart of any GraphQL server. It defines the types
              and operations available for clients.
            </td>
          </tr>

          <tr>
            <td className="border px-3 py-2 text-center">2</td>
            <td className="border px-3 py-2 font-semibold">Query</td>
            <td className="border px-3 py-2">
              A query is a client request to retrieve data from the server,
              connected database, or external APIs.
            </td>
          </tr>

          <tr>
            <td className="border px-3 py-2 text-center">3</td>
            <td className="border px-3 py-2 font-semibold">Resolver</td>
            <td className="border px-3 py-2">
              Resolvers define how a GraphQL query is converted into actual data.
              They fetch and return the required information.
            </td>
          </tr>

        </tbody>
      </table>

      {/* Client-Side Components */}
      <h2 className="text-2xl font-bold pt-5">Client-Side Components</h2>

      <p className="leading-relaxed">Client-side tools include the following:</p>

      <table className="w-full border mt-3">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-3 py-2 w-32">Sr.No.</th>
            <th className="border px-3 py-2 w-40">Tool</th>
            <th className="border px-3 py-2">Description</th>
          </tr>
        </thead>
        <tbody>

          <tr>
            <td className="border px-3 py-2 text-center">1</td>
            <td className="border px-3 py-2 font-semibold">GraphiQL</td>
            <td className="border px-3 py-2">
              A browser-based IDE for writing, testing, and exploring GraphQL
              queries and mutations.
            </td>
          </tr>

          <tr>
            <td className="border px-3 py-2 text-center">2</td>
            <td className="border px-3 py-2 font-semibold">Apollo Client</td>
            <td className="border px-3 py-2">
              A powerful library for building GraphQL client applications,
              especially with React and other JavaScript frameworks.
            </td>
          </tr>

        </tbody>
      </table>

      {/* Architecture Description */}
      <h2 className="text-2xl font-bold pt-5">Client-Server Workflow</h2>

      <p className="leading-relaxed">
        The following describes how the client interacts with the server:
      </p>

      <p className="leading-relaxed">
        A ReactJS application (built using Apollo Client) or the GraphiQL browser
        tool sends queries to the Apollo GraphQL Server. The server then:
      </p>

      <ul className="list-disc list-inside space-y-1 ml-2">
        <li>Parses and validates the query</li>
        <li>Checks the schema for correctness</li>
        <li>Executes resolver functions if valid</li>
        <li>Fetches data from API or database</li>
        <li>Returns the response to the client</li>
      </ul>

      <p className="leading-relaxed">
        This architecture is typically built using Node.js and Express on the
        server side.
      </p>

    </div>
  );
};

export default GraphqlApplicationComponents;
