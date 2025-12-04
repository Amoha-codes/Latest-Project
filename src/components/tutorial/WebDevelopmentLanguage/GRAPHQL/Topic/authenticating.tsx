import React from "react";

const GraphqlAuthenticatingClient: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        GraphQL - Authenticating Client
      </h1>

      <p className="leading-relaxed">
        Authentication ensures that only valid users can access protected
        resources. In GraphQL, authentication is commonly implemented using
        JSON Web Tokens (JWT). A token is generated after successful login and
        sent with every GraphQL request using HTTP headers.
      </p>

      {/* Express JWT */}
      <h2 className="text-2xl font-bold pt-5">Express JWT</h2>
      <p className="leading-relaxed">
        <code>express-jwt</code> is a middleware that authenticates HTTP
        requests using JWT tokens. Once a user logs in, a JWT token is generated
        and must be included in the Authorization header for future requests.
      </p>

      {/* Illustration */}
      <h2 className="text-2xl font-bold pt-5">Illustration</h2>
      <p>
        Below is the full workflow for authenticating a GraphQL API using JWT.
      </p>

      {/* Server Setup */}
      <h3 className="text-xl font-semibold pt-3">Setting up the Server</h3>

      <h4 className="text-lg font-semibold pt-2">
        Step 1 — Install Dependencies
      </h4>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`npm install express express-jwt jsonwebtoken cors body-parser apollo-server-express graphql-tools`}</pre>

      <h4 className="text-lg font-semibold pt-2">
        Step 2 — Create schema.graphql
      </h4>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`type Query {
  greetingWithAuth: String
}`}</pre>

      <h4 className="text-lg font-semibold pt-2">
        Step 3 — Add resolvers.js
      </h4>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`const Query = {
  greetingWithAuth: (root, args, context) => {
    if (!context.user) {
      throw new Error("Unauthorized");
    }
    return "Hello from TutorialsPoint, welcome back : " + context.user.firstName;
  }
}

module.exports = { Query };`}</pre>

      <h4 className="text-lg font-semibold pt-2">Step 4 — Create server.js</h4>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");
const bodyParser = require("body-parser");
const db = require("./db");
const fs = require("fs");
const { makeExecutableSchema } = require("graphql-tools");
const { graphiqlExpress, graphqlExpress } = require("apollo-server-express");

const app = express();
const port = 9000;

const jwtSecret = Buffer.from(
  "Zn8Q5tyZ/G1MHltc4F/gTkVJMlrbKiZt",
  "base64"
);

const typeDefs = fs.readFileSync("./schema.graphql", "utf-8");
const resolvers = require("./resolvers");

const schema = makeExecutableSchema({ typeDefs, resolvers });

app.use(
  cors(),
  bodyParser.json(),
  expressJwt({ secret: jwtSecret, credentialsRequired: false })
);

app.use(
  "/graphql",
  graphqlExpress((req) => ({
    schema,
    context: { user: req.user && db.students.get(req.user.sub) },
  }))
);

app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = db.students.list().find((u) => u.email === email);

  if (!(user && user.password === password)) {
    return res.sendStatus(401);
  }

  const token = jwt.sign({ sub: user.id }, jwtSecret);
  res.send({ token });
});

app.listen(port, () => console.log("Server running on port " + port));`}</pre>

      <h3 className="text-xl font-semibold pt-3">Step 5 — Test</h3>
      <p>Query without authentication will return:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`{
  "errors": [{ "message": "Unauthorized" }]
}`}</pre>

      {/* Client Setup */}
      <h2 className="text-2xl font-bold pt-5">Setting up the jQuery Client</h2>

      <p>
        The client has two operations:
        <br />• Login → receive JWT token  
        • Call GraphQL → send token in header
      </p>

      <h3 className="text-xl font-semibold pt-3">Login Request</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`$.ajax({
  url: "http://localhost:9000/login",
  contentType: "application/json",
  type: "POST",
  data: JSON.stringify({ email, password }),
  success: function (response) {
    loginToken = response.token;
  },
  error: () => alert("error"),
});`}</pre>

      <h3 className="text-xl font-semibold pt-3">
        Access Protected GraphQL Query
      </h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`$.ajax({
  url: "http://localhost:9000/graphql",
  contentType: "application/json",
  headers: { Authorization: "bearer " + loginToken },
  type: "POST",
  data: JSON.stringify({ query: "{ greetingWithAuth }" }),
});`}</pre>

      <h3 className="text-xl font-semibold pt-3">index.html</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`<!DOCTYPE html>
<html>
  <head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script>
      $(function () {
        let loginToken = "";

        $("#btnGreet").click(function () {
          $.ajax({
            url: "http://localhost:9000/graphql",
            contentType: "application/json",
            headers: { Authorization: "bearer " + loginToken },
            type: "POST",
            data: JSON.stringify({ query: "{ greetingWithAuth }" }),
            success: function (result) {
              $("#greetingDiv").html("<h1>" + result.data.greetingWithAuth + "</h1>");
            },
            error: function (xhr) {
              if (xhr.status == 401) {
                $("#greetingDiv").html("Please authenticate first!");
                return;
              }
            },
          });
        });

        $("#btnAuthenticate").click(function () {
          const email = $("#txtEmail").val();
          const password = $("#txtPwd").val();

          $.ajax({
            url: "http://localhost:9000/login",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify({ email, password }),
            success: function (response) {
              loginToken = response.token;
              $("#authStatus").html("Authenticated Successfully");
            },
          });
        });
      });
    </script>
  </head>
  <body>
    <h1>GraphQL Authentication</h1>
    <button id="btnGreet">Greet</button>
    <div id="greetingDiv"></div>

    <h2>Login</h2>
    <input id="txtEmail" />
    <input type="password" id="txtPwd" />
    <button id="btnAuthenticate">Login</button>
    <p id="authStatus"></p>
  </body>
</html>`}</pre>
    </div>
  );
};

export default GraphqlAuthenticatingClient;
