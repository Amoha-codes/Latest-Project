import React from "react";

const GraphqlHome: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">

      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        GraphQL Tutorial
      </h1>

      <p className="leading-relaxed">
        GraphQL is an open-source server-side technology developed by Facebook
        to optimize RESTful API calls. It is both a data query language and an
        execution engine that allows clients to request exactly the data they
        need.
      </p>

      <h2 className="text-2xl font-bold pt-5">What You Will Learn</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Implement GraphQL API using Apollo Server</li>
        <li>Test GraphQL API using GraphiQL</li>
        <li>
          Build ReactJS (with Apollo Client) and jQuery applications to consume the API
        </li>
      </ul>

      <h2 className="text-2xl font-bold pt-5">Audience</h2>
      <p className="leading-relaxed">
        This tutorial is designed for developers who have worked on JavaScript
        applications based on client-server architecture. After completing this
        tutorial, you will be able to build moderately complex GraphQL APIs for
        both mobile and web applications.
      </p>

      <h2 className="text-2xl font-bold pt-5">Prerequisites</h2>
      <p className="leading-relaxed">
        This course is based on NodeJS and Express. Having a basic understanding
        of NodeJS will make learning GraphQL much easier. For frontend
        integration, we will be using ReactJS and jQuery. Since examples in this
        tutorial use ES6 (EcmaScript 6) syntax, familiarity with modern JavaScript
        concepts such as arrow functions, classes, and modules will be helpful.
      </p>

    </div>
  );
};

export default GraphqlHome;
