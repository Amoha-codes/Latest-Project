import React from "react";

const CVariableNames: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        C - Variable Names (Identifiers)
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        All C variables must be identified with unique names. These names are
        called <strong>identifiers</strong>. Identifiers can be short like{" "}
        <code>x</code> or <code>y</code>, or descriptive like{" "}
        <code>age</code>, <code>sum</code>, or <code>totalVolume</code>.
      </p>

      <p className="leading-relaxed">
        It is recommended to use descriptive names to keep the code readable
        and easy to maintain:
      </p>

      {/* Example 1 */}
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`// Good variable name
int minutesPerHour = 60;

// OK, but not descriptive
int m = 60;`}
      </pre>

      {/* Rules */}
      <h2 className="text-2xl font-semibold">Rules for Naming Variables</h2>

      <ul className="list-disc pl-6 space-y-2 leading-relaxed">
        <li>Names can contain letters, digits, and underscores.</li>
        <li>Names must begin with a letter or an underscore (<code>_</code>).</li>
        <li>Names are case-sensitive (<code>myVar</code> and <code>myvar</code> are different).</li>
        <li>Names cannot contain whitespaces or special characters (!, #, %, etc.).</li>
        <li>Reserved words (like <code>int</code>, <code>float</code>, <code>return</code>) cannot be used as variable names.</li>
      </ul>
    </div>
  );
};

export default CVariableNames;
