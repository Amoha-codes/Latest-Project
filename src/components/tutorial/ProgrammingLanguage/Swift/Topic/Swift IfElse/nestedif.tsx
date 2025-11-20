import React from "react";

const SwiftNestedIf: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold text-gray-900 border-b-2 pb-2 mt-15">
      Swift Nested If
    </h1>

    <p className="text-lg text-gray-700 leading-relaxed mt-4">
      Nest <b>if</b> statements to check multiple levels of conditions.
    </p>

    <h2 className="text-2xl font-bold text-gray-800 mt-6">
      Use nested conditions for multi-step checks
    </h2>

    <p className="text-lg text-gray-700 leading-relaxed mt-2">
      Use nested conditions to handle layered checks, such as authentication and then role permissions.
    </p>

    <div className="bg-gray-900 text-green-400 p-4 rounded-lg mt-4 font-mono text-base">
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
