import React from "react";

const GraphqlCaching: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        GraphQL - Caching
      </h1>

      <p className="leading-relaxed">
        Caching is the process of storing data temporarily in a cache. When you
        revisit a page, the browser or client can serve data from cache instead
        of re-fetching it from the server. This improves performance and reduces
        unnecessary network traffic.
      </p>

      <p className="leading-relaxed">
        GraphQL clients such as Apollo Client handle caching on the client side.
        A common approach is using globally unique identifiers like <code>id</code>{" "}
        for objects so cached data can be normalized.
      </p>

      {/* InMemory Cache */}
      <h2 className="text-2xl font-bold pt-5">InMemory Cache</h2>
      <p className="leading-relaxed">
        <code>InMemoryCache</code> is Apollo Client’s default and most commonly
        used cache for managing normalized data. It works without additional
        libraries like Redux.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost'

const cache = new InMemoryCache();

const client = new ApolloClient({
   link: new HttpLink(),
   cache
});`}</pre>

      <p className="leading-relaxed">
        The <code>InMemoryCache</code> constructor accepts an optional config
        object:
      </p>

      {/* Table */}
      <table className="w-full border mt-3">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2 w-1/4">Parameter</th>
            <th className="border p-2">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2 font-semibold">addTypename</td>
            <td className="border p-2">
              Automatically add <code>__typename</code> to documents. Default:
              true
            </td>
          </tr>
          <tr>
            <td className="border p-2 font-semibold">dataIdFromObject</td>
            <td className="border p-2">
              Function to return a unique ID for object normalization.
            </td>
          </tr>
          <tr>
            <td className="border p-2 font-semibold">fragmentMatcher</td>
            <td className="border p-2">
              Determines fragment matching behavior. Default is heuristic.
            </td>
          </tr>
          <tr>
            <td className="border p-2 font-semibold">cacheRedirects</td>
            <td className="border p-2">
              Redirect query results to cached entries before making requests.
            </td>
          </tr>
        </tbody>
      </table>

      {/* Illustration */}
      <h2 className="text-2xl font-bold pt-5">Illustration</h2>
      <p>
        We will build a React single-page application with two tabs:
        <br />• <strong>Home</strong>  
        • <strong>Students</strong>
      </p>

      <p>
        The Students tab loads data from a GraphQL server. Apollo Client will
        cache the result, so revisiting the Students page returns cached data
        with the same initial timestamp.
      </p>

      {/* Server Setup */}
      <h2 className="text-2xl font-bold pt-5">Setting up the Server</h2>

      <h3 className="text-xl font-semibold pt-3">Step 1 — Install Dependencies</h3>
      <p>Create a folder <code>cache-server-app</code>, then install dependencies.</p>

      <h3 className="text-xl font-semibold pt-3">Step 2 — Create schema.graphql</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`type Query {
   students:[Student]
   getTime:String
}

type Student {
   id:ID!
   firstName:String
   lastName:String
   fullName:String
}`}</pre>

      <h3 className="text-xl font-semibold pt-3">Step 3 — Add Resolvers</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`const db = require('./db')

const Query = {
  students: () => db.students.list(),
  getTime: () => {
    const t = new Date();
    return t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds();
  }
}

module.exports = { Query }`}</pre>

      <h3 className="text-xl font-semibold pt-3">Step 4 — Test in GraphiQL</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`{
  getTime
  students {
    id
    firstName
  }
}`}</pre>

      {/* Client Setup */}
      <h2 className="text-2xl font-bold pt-5">Setting up the React Client</h2>

      <h3 className="text-xl font-semibold pt-3">Step 1 — Create React App</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`npx create-react-app hello-world-client`}</pre>

      <h3 className="text-xl font-semibold pt-3">Step 2 — Install Router</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`npm install react-router-dom`}</pre>

      <h3 className="text-xl font-semibold pt-3">Step 3 — Install Apollo Client</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`npm install apollo-boost graphql`}</pre>

      {/* index.js */}
      <h2 className="text-2xl font-bold pt-5">index.js</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link } from 'react-router-dom';
import Students from './students';

function App() {
  return (
    <div>
      <h1>Home !!</h1>
      <h2>Welcome to React Application !!</h2>
    </div>
  );
}

function getTime() {
  const d = new Date();
  return d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}

const routes =
  <HashRouter>
    <div>
      <h4>Time from react app: {getTime()}</h4>
      <header>
        <h1>
          <Link to="/">Home</Link> &nbsp;
          <Link to="/students">Students</Link>
        </h1>
      </header>

      <Route exact path="/" component={App} />
      <Route exact path="/students" component={Students} />
    </div>
  </HashRouter>;

ReactDOM.render(routes, document.querySelector("#root"));`}</pre>

      {/* students.js */}
      <h2 className="text-2xl font-bold pt-5">Students Component</h2>

      <p className="leading-relaxed">
        We load data using:
        <br />• <strong>Apollo Client</strong> (cached)
        <br />• <strong>Fetch API</strong> (always new request)
      </p>

      <h3 className="text-xl font-semibold pt-3">students.js</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`import React, { Component } from 'react';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import gql from 'graphql-tag';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:9000/graphql' }),
  cache: new InMemoryCache()
});

class Students extends Component {
  constructor(props) {
    super(props);
    this.state = { students: [], serverTime: '' };

    // Cached load
    this.loadWithApolloclient().then(data => {
      this.setState({
        students: data.students,
        serverTime: data.getTime
      });
    });
  }

  async loadStudents_noCache() {
    const response = await fetch('http://localhost:9000/graphql', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        query: \`{
          getTime
          students { id firstName }
        }\`
      })
    });

    const result = await response.json();
    return result.data;
  }

  async loadWithApolloclient() {
    const query = gql\`{
      getTime
      students { id firstName }
    }\`;

    const { data } = await client.query({ query });
    return data;
  }

  render() {
    return (
      <div>
        <h3>Time from GraphQL server: {this.state.serverTime}</h3>
        <p>Following Students Found:</p>

        <ul>
          {this.state.students.map(s => (
            <li key={s.id}>{s.firstName}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Students;`}</pre>

      <h2 className="text-2xl font-bold pt-5">Step 6 — Run the Client</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`npm start`}</pre>

      <h2 className="text-2xl font-bold pt-5">Step 7 — Test Caching</h2>
      <p>
        Switching between <strong>Home</strong> → <strong>Students</strong> will
        reuse cached data if using Apollo Client.
      </p>

      <p className="leading-relaxed">
        To force fresh requests, replace:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`this.loadWithApolloclient()`}</pre>

      <p>with</p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`this.loadStudents_noCache()`}</pre>
    </div>
  );
};

export default GraphqlCaching;
