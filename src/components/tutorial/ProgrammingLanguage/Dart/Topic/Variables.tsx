import React from "react";

const DartVariables: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        Dart Programming - Variables
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        A variable is a named space in memory that stores values. It acts as a
        container for data in a program. Variable names are also called
        identifiers and follow these rules:
      </p>

      <ul className="list-disc list-inside space-y-1">
        <li>Identifiers cannot be keywords.</li>
        <li>They can contain alphabets and numbers.</li>
        <li>
          They cannot contain spaces or special characters except <b>_</b> and{" "}
          <b>$</b>.
        </li>
        <li>They cannot begin with a number.</li>
      </ul>

      {/* Declaring Variables */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">Declaring Variables</h2>

        <p className="leading-relaxed">
          Dart uses the <span className="font-semibold">var</span> keyword to
          declare variables without specifying a type.
        </p>

        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          <pre>
            <code>{`var name = 'Smith';`}</code>
          </pre>
        </div>

        <p className="leading-relaxed">
          All variables in Dart store a <b>reference</b> to a value, not the
          value itself.
        </p>

        <h3 className="text-xl font-semibold">Using Explicit Types</h3>
        <p className="leading-relaxed">
          You can also declare variables using a specific data type:
        </p>

        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          <pre>
            <code>{`String name = 'Smith';
int num = 10;`}</code>
          </pre>
        </div>

        <p className="leading-relaxed font-semibold">Warning Example:</p>

        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          <pre>
            <code>{`void main() {
  String name = 1;
}`}</code>
          </pre>
        </div>

        <p className="leading-relaxed">
          This will produce a warning because the value does not match the
          variable’s type.
        </p>
      </div>

      {/* Null Variables */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">Uninitialized Variables</h2>

        <p className="leading-relaxed">
          All uninitialized variables in Dart have a value of{" "}
          <span className="font-semibold">null</span> because everything is an
          object.
        </p>

        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          <pre>
            <code>{`void main() {
  int num;
  print(num);
}`}</code>
          </pre>
        </div>

        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          null
        </div>
      </div>

      {/* Dynamic Keyword */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">The dynamic Keyword</h2>

        <p className="leading-relaxed">
          If a variable is declared without a type, it becomes{" "}
          <span className="font-semibold">dynamic</span>. You can also explicitly
          declare it using the keyword <b>dynamic</b>.
        </p>

        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          <pre>
            <code>{`void main() {
  dynamic x = "tom";
  print(x);
}`}</code>
          </pre>
        </div>

        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          tom
        </div>
      </div>

      {/* Final & Const */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">Final and Const</h2>

        <p className="leading-relaxed">
          Dart provides <b>final</b> and <b>const</b> to declare constants.
          Values assigned to these variables cannot be modified.
        </p>

        <h3 className="text-xl font-semibold">Syntax</h3>

        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          <pre>
            <code>{`final variable_name;
final data_type variable_name;

const variable_name;
const data_type variable_name;`}</code>
          </pre>
        </div>

        {/* final Example */}
        <h3 className="text-xl font-semibold">Example: final</h3>

        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          <pre>
            <code>{`void main() {
  final val1 = 12;
  print(val1);
}`}</code>
          </pre>
        </div>

        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          12
        </div>

        {/* const Example */}
        <h3 className="text-xl font-semibold">Example: const</h3>

        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          <pre>
            <code>{`void main() {
  const pi = 3.14;
  const area = pi * 12 * 12;
  print("The output is \${area}");
}`}</code>
          </pre>
        </div>

        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          The output is 452.15999999999997
        </div>

        <p className="leading-relaxed font-semibold">
          Note: Only const values can be used to compute compile-time constants.
        </p>

        {/* Error Example */}
        <h3 className="text-xl font-semibold">Modification Error Example</h3>

        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          <pre>
            <code>{`void main() {
  final v1 = 12;
  const v2 = 13;
  v2 = 12;
}`}</code>
          </pre>
        </div>

        <div className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`Unhandled exception:
cannot assign to final variable 'v2='
NoSuchMethodError: cannot assign to final variable 'v2='`}
        </div>
      </div>
    </div>
  );
};

export default DartVariables;
