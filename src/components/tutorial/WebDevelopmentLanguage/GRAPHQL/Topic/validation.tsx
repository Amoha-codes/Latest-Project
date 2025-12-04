import React from "react";

export default function GraphqlValidation() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">GraphQL - Validation</h1>

      <p>
        While adding or modifying data, it is important to validate the user
        input. GraphQL allows basic validation using the <strong>!</strong>
        (non-nullable) marker.
      </p>

      <pre className="bg-gray-900 text-white p-4 rounded-xl overflow-x-auto">
{`type TypeName {
  field1: String!
  field2: String!
  field3: Int!
}`}
      </pre>

      <h2 className="text-2xl font-semibold">Illustration - Implementing Custom Validators</h2>
      <p>Example: A signup form with basic validation.</p>

      <h3 className="text-xl font-semibold">Step 1 – Create Project</h3>
      <p>Create folder <code>validation-app</code> and install dependencies.</p>

      <h3 className="text-xl font-semibold">Step 2 – Create Schema</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-xl overflow-x-auto">
{`type Query {
  greeting: String
}

type Mutation {
  signUp(input: SignUpInput): String
}

input SignUpInput {
  email: String!
  password: String!
  firstName: String!
}`}
      </pre>

      <h3 className="text-xl font-semibold">Step 3 – Create Resolvers</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-xl overflow-x-auto">
{`const Query = {
  greeting: () => "Hello",
};

const Mutation = {
  signUp: (root, args) => {
    const { email, firstName, password } = args.input;

    const emailExpression = /^(([^<>()\[]\\.,;:\s@"]+(\\.[^<>()\[]\\.,;:\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\-0-9]+\\.)+[a-zA-Z]{2,}))$/;

    const isValidEmail = emailExpression.test(String(email).toLowerCase());
    if (!isValidEmail) throw new Error("email not in proper format");

    if (firstName.length > 15)
      throw new Error("firstName should be less than 15 characters");

    if (password.length < 8)
      throw new Error("password should be minimum 8 characters");

    return "success";
  },
};

module.exports = { Query, Mutation };`}
      </pre>

      <h3 className="text-xl font-semibold">Step 4 – Test in GraphiQL</h3>
      <p>Run server and use GraphiQL with the following mutation:</p>

      <pre className="bg-gray-900 text-white p-4 rounded-xl overflow-x-auto">
{`mutation doSignUp($input: SignUpInput) {
  signUp(input: $input)
}`}
      </pre>

      <h3 className="text-xl font-semibold">Query Variables</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-xl overflow-x-auto">
{`{
  "input": {
    "email": "abc@abc",
    "firstName": "kannan",
    "password": "pass@1234"
  }
}`}
      </pre>

      <p>Error output example (invalid email):</p>
      <pre className="bg-gray-900 text-white p-4 rounded-xl overflow-x-auto">
{`{
  "data": { "signUp": null },
  "errors": [
    {
      "message": "email not in proper format",
      "path": ["signUp"]
    }
  ]
}`}
      </pre>

      <h3 className="text-xl font-semibold">Valid Input</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-xl overflow-x-auto">
{`{
  "input": {
    "email": "abc@abc.com",
    "firstName": "kannan",
    "password": "pass@1234"
  }
}`}
      </pre>

      <h3 className="text-xl font-semibold">Missing Required Field Example</h3>
      <pre className="bg-gray-900 text-white p-4 rounded-xl overflow-x-auto">
{`{
  "input": {
    "email": "abc@abc.com",
    "firstName": "kannan"
  }
}`}
      </pre>

      <p>GraphQL automatically throws error because password is required.</p>

      <p className="mt-6">End of GraphQL Validation Chapter</p>
    </div>
  );
}
