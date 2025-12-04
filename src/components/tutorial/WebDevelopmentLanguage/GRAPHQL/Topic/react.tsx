
import { motion } from "framer-motion";

export default function GraphqlReactIntegration() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 space-y-6"
    >
      <h1 className="text-3xl font-bold">GraphQL - React Integration</h1>

      {/* Navigation */}
      <div className="flex justify-between text-blue-600 font-medium">
        <button>Previous</button>
        <button>Quiz</button>
        <button>Next</button>
      </div>

      {/* Introduction */}
      <div className="bg-white rounded-2xl shadow-md p-6 space-y-4 text-lg">
        <p>
          React is a JavaScript library for building user interfaces. This chapter explains how to
          integrate GraphQL with a React application.
        </p>
      </div>

      {/* Illustration */}
      <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
        <h2 className="text-2xl font-semibold">Illustration</h2>
        <p>
          The quickest way to set up a React project is by using the <b>Create React App</b> tool.
          In the sections below, we will learn how to set up both the <b>Server</b> and the
          <b> Client</b>.
        </p>
      </div>

      {/* Setting up Server */}
      <div className="bg-white rounded-2xl shadow-md p-6 space-y-6">
        <h2 className="text-2xl font-semibold">Setting up the Server</h2>

        <div className="space-y-2">
          <h3 className="font-semibold text-xl">Step 1 — Install Dependencies</h3>
          <p>
            Create a folder <code>react-server-app</code>. Change directory and follow steps 3–5 of
            the Environment Setup chapter.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-xl">Step 2 — Create a Schema</h3>
          <p>Add <code>schema.graphql</code> with:</p>
          <pre className="bg-black text-white p-4 rounded-xl text-sm overflow-auto">{`type Query {
  greeting: String
  sayHello(name: String!): String
}`}</pre>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-xl">Step 3 — Create Resolvers</h3>
          <pre className="bg-black text-white p-4 rounded-xl text-sm overflow-auto">{`const Query = {
  greeting: () => 'Hello GraphQL From TutorialsPoint !!',
  sayHello: (root, args) => \`Hi \${args.name} GraphQL server says Hello to you!!\`
};
module.exports = { Query };`}</pre>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-xl">Step 4 — Run the Application</h3>
          <p>
            Create <code>server.js</code> and run <code>npm start</code>. Open GraphiQL at:
          </p>
          <pre className="bg-black text-white p-4 rounded-xl text-sm overflow-auto">http://localhost:9000/graphiql</pre>
          <p>Query:</p>
          <pre className="bg-black text-white p-4 rounded-xl text-sm overflow-auto">{`{
  greeting,
  sayHello(name: "Mohtashim")
}`}</pre>
        </div>
      </div>

      {/* Setting up Client */}
      <div className="bg-white rounded-2xl shadow-md p-6 space-y-6">
        <h2 className="text-2xl font-semibold">Setting up the Client</h2>

        <h3 className="font-semibold text-xl">Step 1 — Create React Project</h3>
        <pre className="bg-black text-white p-4 rounded-xl text-sm overflow-auto">npx create-react-app hello-world-client</pre>

        <h3 className="font-semibold text-xl">Step 2 — Start Project</h3>
        <p>Run:</p>
        <pre className="bg-black text-white p-4 rounded-xl text-sm overflow-auto">npm start</pre>

        <h3 className="font-semibold text-xl">Step 3 — Modify App.js</h3>
        <p>Complete code:</p>
        <pre className="bg-black text-white p-4 rounded-xl text-sm overflow-auto">{`import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

async function loadGreeting() {
  const response = await fetch('http://localhost:9000/graphql', {
    method:'POST',
    headers:{'content-type':'application/json'},
    body: JSON.stringify({query:'{greeting}'} )
  })
  const responseBody = await response.json();
  return responseBody.data.greeting;
}

async function loadSayhello(name) {
  const response = await fetch('http://localhost:9000/graphql', {
    method:'POST',
    headers:{'content-type':'application/json'},
    body: JSON.stringify({query: \`{sayHello(name:"\${name}")}\`})
  })
  const responseBody = await response.json();
  return responseBody.data.sayHello;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { greetingMessage:'', sayHelloMessage:'', userName:'' };
  }

  showGreeting = () => {
    loadGreeting().then(g => this.setState({ greetingMessage: g + ' :-)' }));
  }

  showSayHelloMessage = () => {
    const name = this.state.userName;
    loadSayhello(name).then(m => this.setState({ sayHelloMessage: m }));
  }

  updateName = (event) => {
    this.setState({ userName: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <button onClick={this.showGreeting}>Greet</button>
        <h1>{this.state.greetingMessage}</h1>

        <hr />

        Enter a name:
        <input type="text" onChange={this.updateName} value={this.state.userName} />
        <button onClick={this.showSayHelloMessage}>SayHello</button>

        <h1>{this.state.sayHelloMessage}</h1>
      </div>
    );
  }
}

export default App;`}</pre>
      </div>
    </motion.div>
  );
}
