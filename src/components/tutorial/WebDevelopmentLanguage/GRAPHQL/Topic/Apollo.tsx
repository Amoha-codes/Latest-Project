import React from "react";

const GraphqlApolloClient: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        GraphQL - Apollo Client
      </h1>

      <p className="leading-relaxed">
        Apollo Client is a powerful JavaScript library used to fetch data from a
        GraphQL server. It works with any frontend framework including React,
        Vue, Angular, and more. It also comes with intelligent caching to
        optimize network requests.
      </p>

      <h2 className="text-2xl font-bold pt-5">Supported Platforms</h2>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`1. JavaScript
   - React, Angular, Vue, Meteor, Ember

2. Web Components
   - Polymer, lit-apollo

3. Native Mobile
   - Android (Java), iOS (Swift)`}
      </pre>

      {/* Illustration Section */}
      <h2 className="text-2xl font-bold pt-5">Illustration</h2>

      <p>Follow the steps below to build a full Apollo Client setup.</p>

      {/* Server Setup */}
      <h2 className="text-2xl font-bold pt-5">Setting up the Server</h2>

      <h3 className="text-xl font-semibold pt-3">Step 1 — Install Dependencies</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`mkdir apollo-server-app
cd apollo-server-app
# Follow environment setup steps`}
      </pre>

      <h3 className="text-xl font-semibold pt-3">Step 2 — Create schema.graphql</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`type Query {
  students: [Student]
}

type Student {
  id: ID!
  firstName: String
  lastName: String
  college: College
}

type College {
  id: ID!
  name: String
  location: String
  rating: Float
}`}
      </pre>

      <h3 className="text-xl font-semibold pt-3">Step 3 — Add Resolvers</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`const db = require('./db');

const Query = {
  students: () => db.students.list(),
};

const Student = {
  college: (root) => db.colleges.get(root.collegeId),
};

module.exports = { Query, Student };`}
      </pre>

      <h3 className="text-xl font-semibold pt-3">Step 4 — Run Server</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`npm start
# Server runs on http://localhost:9000/graphiql`}
      </pre>

      <p>Sample Query:</p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`{
  students {
    id
    firstName
    college {
      name
    }
  }
}`}
      </pre>

      {/* Client Setup */}
      <h2 className="text-2xl font-bold pt-5">Setting up the Client</h2>

      <h3 className="text-xl font-semibold pt-3">Step 1 — Create React App</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`npx create-react-app hello-world-client`}
      </pre>

      <h3 className="text-xl font-semibold pt-3">Step 2 — Start the Client</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`cd hello-world-client
npm start`}
      </pre>

      <h3 className="text-xl font-semibold pt-3">Step 3 — Install Apollo Client</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`npm install apollo-boost graphql`}
      </pre>

      <h3 className="text-xl font-semibold pt-3">
        Step 4 — Using Apollo Client in index.js
      </h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import gql from 'graphql-tag';

const endPointUrl = 'http://localhost:9000/graphql';

const client = new ApolloClient({
  link: new HttpLink({ uri: endPointUrl }),
  cache: new InMemoryCache(),
});

async function loadStudentsAsync() {
  const query = gql\`
  {
    students {
      id
      firstName
      lastName
      college {
        name
      }
    }
  }
  \`;

  const { data } = await client.query({ query });
  return data.students;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { students: [] };
  }

  async loadStudents() {
    const data = await loadStudentsAsync();
    this.setState({ students: data });
  }

  render() {
    return (
      <div>
        <button onClick={this.loadStudents.bind(this)}>Load Students</button>
        <table border="1">
          <thead>
            <tr>
              <td>First Name</td>
              <td>Last Name</td>
              <td>College Name</td>
            </tr>
          </thead>
          <tbody>
            {this.state.students.map(s => (
              <tr key={s.id}>
                <td>{s.firstName}</td>
                <td>{s.lastName}</td>
                <td>{s.college.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));`}
      </pre>
    </div>
  );
};

export default GraphqlApolloClient;
