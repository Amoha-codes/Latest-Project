import React from "react";

const GraphqlMutation: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">GraphQL - Mutation</h1>

      <p className="leading-relaxed">
        Mutations in GraphQL are used to modify data — such as inserting,
        updating, or deleting records — and return a response. Mutations are
        defined inside the <code>Mutation</code> type in the schema.
      </p>

      <h2 className="text-2xl font-bold pt-5">Mutation Syntax</h2>
      
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`mutation {
  someEditOperation(dataField: "valueOfField"): returnType
}`}</pre>

      {/* Illustration */}
      <h2 className="text-2xl font-bold pt-5">Illustration — Add New Student</h2>

      <h3 className="text-xl font-semibold pt-3">Step 1 — Create Project</h3>
      <p>Create folder <code>mutation-app</code> and follow environment setup steps.</p>

      <h3 className="text-xl font-semibold pt-3">Step 2 — Create schema.graphql</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`type Query {
  greeting: String
}

type Mutation {
  createStudent(collegeId: ID, firstName: String, lastName: String): String
}`}</pre>

      <p>
        The <code>createStudent</code> mutation returns a unique ID generated for the
        new student.
      </p>

      <h3 className="text-xl font-semibold pt-3">Step 3 — Create resolvers.js</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`const db = require('./db');

const Mutation = {
  createStudent: (root, args) => {
    return db.students.create({
      collegeId: args.collegeId,
      firstName: args.firstName,
      lastName: args.lastName
    });
  }
};

const Query = {
  greeting: () => "hello"
};

module.exports = { Query, Mutation };`}</pre>

      <h3 className="text-xl font-semibold pt-3">Step 4 — Run Application</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`mutation {
  createStudent(collegeId: "col-2", firstName: "Tim", lastName: "George")
}`}</pre>

      <p>Sample Response:</p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`{
  "data": {
    "createStudent": "SkQtxYBUm"
  }
}`}</pre>

      {/* StudentById Update */}
      <h2 className="text-2xl font-bold pt-5">Query Newly Created Student</h2>

      <h3 className="text-xl font-semibold">Update schema.graphql</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`type Query {
  studentById(id: ID!): Student
}

type Student {
  id: ID!
  firstName: String
  lastName: String
  collegeId: String
}`}</pre>

      <h3 className="text-xl font-semibold pt-3">Update resolvers.js</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`const db = require('./db');

const Query = {
  studentById: (root, args) => db.students.get(args.id)
};

const Mutation = {
  createStudent: (root, args) => {
    return db.students.create({
      collegeId: args.collegeId,
      firstName: args.firstName,
      lastName: args.lastName
    });
  }
};

module.exports = { Query, Mutation };`}</pre>

      <h3 className="text-xl font-semibold pt-3">Query Student</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`{
  studentById(id: "SkQtxYBUm") {
    id
    firstName
    lastName
  }
}`}</pre>

      {/* Returning Object */}
      <h2 className="text-2xl font-bold pt-5">Returning an Object in Mutation</h2>
      <p>
        Best practice: return an object instead of a simple string so the
        client can retrieve related data in one request.
      </p>

      <h3 className="text-xl font-semibold pt-3">Step 1 — Update Schema</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`type Mutation {
  addStudent_returns_object(collegeId: ID, firstName: String, lastName: String): Student
  createStudent(collegeId: ID, firstName: String, lastName: String): String
}

type College {
  id: ID!
  name: String
  location: String
  rating: Float
}

type Student {
  id: ID!
  firstName: String
  lastName: String
  college: College
}`}</pre>

      <h3 className="text-xl font-semibold pt-3">Step 2 — Update resolvers.js</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`const Mutation = {
  createStudent: (root, args) => {
    return db.students.create({
      collegeId: args.collegeId,
      firstName: args.firstName,
      lastName: args.lastName
    });
  },

  addStudent_returns_object: (root, args) => {
    const id = db.students.create({
      collegeId: args.collegeId,
      firstName: args.firstName,
      lastName: args.lastName
    });

    return db.students.get(id);
  }
};

const Student = {
  college: (root) => db.colleges.get(root.collegeId)
};

module.exports = { Query, Student, Mutation };`}</pre>

      <h3 className="text-xl font-semibold pt-3">Step 3 — Mutation Query</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`mutation {
  addStudent_returns_object(collegeId: "col-101", firstName: "Susan", lastName: "George") {
    id
    firstName
    college {
      id
      name
    }
  }
}`}</pre>

      <p>Sample Response:</p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`{
  "data": {
    "addStudent_returns_object": {
      "id": "rklUl08IX",
      "firstName": "Susan",
      "college": {
        "id": "col-101",
        "name": "AMU"
      }
    }
  }
}`}</pre>
    </div>
  );
};

export default GraphqlMutation;
