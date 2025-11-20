import React from "react";

const SwiftNestedIf: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-15">
      Swift Nested If
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      Nest <b>if</b> statements to check multiple levels of conditions.
    </p>

    <h2 className="text-2xl font-bold text-gray-800 mt-6">
      Use nested conditions for multi-step checks
    </h2>

    <p className="text-lg  leading-relaxed mt-2">
      Use nested conditions to handle layered checks, such as authentication and then role permissions.
    </p>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`let isLoggedIn = true
let isAdmin = false

if isLoggedIn {
    if isAdmin {
        print("Admin panel")
    } else {
        print("Limited access")
    }
}`}
      </pre>
    </div>
  </>
);

export default SwiftNestedIf;
