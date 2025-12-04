import React from "react";
import { motion } from "framer-motion";

export default function GraphqlArchitecture() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 space-y-6"
    >
      <h1 className="text-3xl font-bold">GraphQL - Architecture</h1>

      {/* Navigation */}
      <div className="flex justify-between text-blue-600 font-medium">
        <button>Previous</button>
        <button>Quiz</button>
        <button>Next</button>
      </div>

      {/* Introduction */}
      <div className="bg-white rounded-2xl shadow-md p-6 space-y-4 text-lg">
        <p>
          GraphQL is a specification that describes the behavior of a GraphQL server. It provides
          guidelines on how requests and responses should be handled, such as supported protocols,
          accepted data formats, and the format of responses returned by the server.
        </p>
        <p>
          A request made by a client to the GraphQL server is called a <b>Query</b>. GraphQL is
          transport-layer agnostic—it can be used with any network protocol like HTTP, TCP, or
          WebSocket—and is also database-agnostic, meaning it can be used with relational or NoSQL
          databases.
        </p>
      </div>

      {/* GraphQL Server with Connected Database */}
      <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
        <h2 className="text-2xl font-semibold">GraphQL Server with Connected Database</h2>
        <p>
          This architecture integrates the GraphQL server with a database, often suitable for new
          projects. When a query is received, the server reads the request payload, fetches data
          from the database, and returns a response formatted according to the GraphQL specification.
        </p>
        <p>
          <b>Architecture:</b> GraphQL server and database on a single node. Clients communicate
          over HTTP; the server processes requests, fetches data from the database, and returns it
          to the client.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg text-center text-gray-700">
          [GraphQL Server Connected Database Diagram Here]
        </div>
      </div>

      {/* GraphQL Server Integrating Existing Systems */}
      <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
        <h2 className="text-2xl font-semibold">GraphQL Server Integrating Existing Systems</h2>
        <p>
          This approach is helpful for companies with legacy infrastructure or multiple APIs. The
          GraphQL server acts as a unifying interface for microservices, legacy systems, and
          third-party APIs.
        </p>
        <p>
          <b>Architecture:</b> Clients communicate with the GraphQL server, which resolves queries
          by integrating with existing systems.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg text-center text-gray-700">
          [GraphQL Server Integrating Existing Systems Diagram Here]
        </div>
      </div>

      {/* Hybrid Approach */}
      <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
        <h2 className="text-2xl font-semibold">Hybrid Approach</h2>
        <p>
          Combines the previous two approaches. The GraphQL server can resolve requests by either
          fetching data from a connected database or querying integrated APIs.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg text-center text-gray-700">
          [Hybrid GraphQL Server Diagram Here]
        </div>
      </div>
    </motion.div>
  );
}
