import React from "react";

const CssErrors: React.FC = () => {
  return (
       <div className="mt-20 space-y-8">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">CSS Errors</h1>

      <p className="text-base">
        Errors in CSS can cause unexpected behavior or prevent styles from being
        applied correctly. Below are common CSS mistakes and how to avoid them.
      </p>

      <h2 className="text-2xl font-semibold">Missing Semicolons</h2>
      <p className="text-base">
        Forgetting a semicolon at the end of a declaration may break the entire
        style rule.
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`.bad {
  color: red
  background-color: yellow;
}`}
      </pre>

      <h2 className="text-2xl font-semibold">Invalid Property Names</h2>
      <p className="text-base">
        If a property name does not exist, the browser simply ignores it.
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`.bad {
  colr: blue;
  font-size: 16px;
}`}
      </pre>

      <h2 className="text-2xl font-semibold">Invalid Values</h2>
      <p className="text-base">
        Even if the property name is correct, invalid values will be ignored.
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`.bad {
  width: -100px;
  color: green;
}`}
      </pre>

      <h2 className="text-2xl font-semibold">Unclosed Braces</h2>
      <p className="text-base">
        Missing a closing brace <code>{"}"}</code> can cause the entire rule to fail.
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`.bad {
  padding: 20px;
  margin: 10px;
`}
      </pre>

      <h2 className="text-2xl font-semibold">Extra Colons or Braces</h2>
      <p className="text-base">
        Extra punctuation like additional colons or misplaced braces can break
        your CSS.
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`.bad {
  color:: blue;
}`}
      </pre>

      <h2 className="text-2xl font-semibold">Tips to Avoid CSS Errors</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li>Use a code editor with syntax highlighting.</li>
        <li>Validate your CSS using a linter or CSS validator.</li>
        <li>Write CSS in small chunks and test frequently.</li>
      </ul>
    </div>
  );
};

export default CssErrors;
