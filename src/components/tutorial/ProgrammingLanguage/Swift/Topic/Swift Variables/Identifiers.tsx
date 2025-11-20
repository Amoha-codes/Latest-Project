import React from "react";

const SwiftIdentifiers: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold text-gray-900 border-b-2 pb-2 mt-15">
      Swift Identifiers
    </h1>

    <p className="text-lg text-gray-700 leading-relaxed mt-4">
      Identifiers are names given to <b>variables, constants, functions, types,</b> and
      more. Swift has simple but strict rules for valid identifiers.
    </p>

    {/* Rules for Identifiers */}
    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Rules for Identifiers</h2>

    <p className="text-gray-700 leading-relaxed mt-3">
      In Swift, an identifier must follow these rules:
    </p>

    <ul className="list-disc ml-6 text-gray-700 leading-relaxed mt-2">
      <li>Must start with a letter or an underscore.</li>
      <li>May include numbers after the first character.</li>
      <li>Cannot start with a number.</li>
      <li>Cannot use keywords unless wrapped with backticks.</li>
      <li>Can include Unicode characters.</li>
    </ul>

    <h3 className="text-xl font-bold text-gray-800 mt-4">Example</h3>

    <div className="bg-gray-900 text-green-400 font-mono p-4 rounded-lg shadow-md mt-3">
      <pre>
{`let name = "Swift"
let π = 3.14
let _hidden = true`}
      </pre>
    </div>

    <p className="text-gray-700 leading-relaxed mt-4">
      These examples show valid Swift identifiers, including Unicode and underscore-based
      names.
    </p>

    {/* Escaping Keywords & Unicode */}
    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">
      Escaping Keywords and Unicode
    </h2>

    <p className="text-gray-700 leading-relaxed mt-3">
      Swift allows escaping keywords using <code>`backticks`</code>. Identifiers can also
      include Unicode characters such as emojis.
    </p>

    <h3 className="text-xl font-bold text-gray-800 mt-4">Example</h3>

    <div className="bg-gray-900 text-green-400 font-mono p-4 rounded-lg shadow-md mt-3">
      <pre>
{`let \`switch\` = "ok"   // Escaping a keyword
let 🐶 = "dog"            // Unicode identifier
print(\`switch\`, 🐶)`}
      </pre>
    </div>
  </>
);

export default SwiftIdentifiers;
