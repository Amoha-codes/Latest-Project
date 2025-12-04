import React from "react";

const DartSyntax: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        Dart Programming - Syntax
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        Syntax defines the rules for writing a program. A Dart program is made up
        of variables, functions, operators, classes, expressions, and other
        programming constructs.
      </p>

      <ul className="list-disc list-inside space-y-1">
        <li>Variables and Operators</li>
        <li>Classes</li>
        <li>Functions</li>
        <li>Expressions & Programming Constructs</li>
        <li>Decision Making & Looping</li>
        <li>Comments</li>
        <li>Libraries & Packages</li>
        <li>Typedefs</li>
        <li>Collections / Generics</li>
      </ul>

      {/* Hello World */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">Your First Dart Code</h2>

        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          <pre>
            <code>
{`main() { 
  print("Hello World!"); 
}`}
            </code>
          </pre>
        </div>

        <p className="leading-relaxed font-semibold">Output:</p>

        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          Hello World!
        </div>
      </div>

      {/* Execute Dart Program */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">Execute a Dart Program</h2>

        <h3 className="text-xl font-semibold">Via the Terminal</h3>
        <ol className="list-decimal list-inside space-y-1">
          <li>Navigate to your Dart project folder</li>
          <li>Run the following command:</li>
        </ol>

        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          dart file_name.dart
        </div>

        <h3 className="text-xl font-semibold">Via WebStorm IDE</h3>
        <ol className="list-decimal list-inside space-y-1">
          <li>Right-click the Dart file containing <strong>main()</strong></li>
          <li>Select <strong>Run &lt;filename&gt;</strong></li>
          <li>Or press <strong>Ctrl + Shift + F10</strong></li>
        </ol>
      </div>

      {/* Dart Command Line Options */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">Dart Command-Line Options</h2>

        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>-c / --checked</strong> – Enables assertions & type checks
          </li>
          <li>
            <strong>--version</strong> – Prints runtime version
          </li>
          <li>
            <strong>--packages &lt;path&gt;</strong> – Sets package config path
          </li>
          <li>
            <strong>-p &lt;path&gt;</strong> – Library import path
          </li>
          <li>
            <strong>-h / --help</strong> – Help menu
          </li>
        </ul>
      </div>

      {/* Checked Mode */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">Enabling Checked Mode</h2>

        <p className="leading-relaxed">
          Dart runs in two modes: <strong>Checked Mode</strong> and{" "}
          <strong>Production Mode</strong>. Checked mode helps catch type
          mismatches during development.
        </p>

        <h3 className="text-xl font-semibold">Example:</h3>

        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          <pre>
            <code>
{`void main() { 
  int n = "hello"; 
  print(n); 
}`}
            </code>
          </pre>
        </div>

        <p className="leading-relaxed font-semibold">Run:</p>

        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          dart Test.dart
        </div>

        <p className="leading-relaxed">
          The script runs but with wrong type. Now run in checked mode:
        </p>

        <div className="bg-gray-100 text-black p-3 rounded-md font-mono space-y-2">
          <div>dart -c Test.dart</div>
          <div>dart --checked Test.dart</div>
        </div>

        <p className="leading-relaxed font-semibold">
          Dart will throw a type-mismatch error.
        </p>
      </div>

      {/* Identifiers */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">Identifiers in Dart</h2>

        <ul className="list-disc list-inside space-y-1">
          <li>Cannot start with a digit</li>
          <li>Can include letters, digits, _, $</li>
          <li>Cannot be a keyword</li>
          <li>Case-sensitive</li>
          <li>No spaces allowed</li>
        </ul>

        <h3 className="text-xl font-semibold">Examples</h3>

        <table className="border border-black w-full">
          <tbody>
            <tr className="border border-black">
              <td className="p-2 font-semibold">Valid</td>
              <td className="p-2 font-semibold">Invalid</td>
            </tr>
            <tr className="border border-black">
              <td className="p-2">firstName, num1, $result</td>
              <td className="p-2">1number, first name, first-name</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Keywords */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">Keywords in Dart</h2>

        <p className="leading-relaxed">
          Keywords have a predefined meaning and cannot be used as identifiers.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {[
            "abstract",
            "assert",
            "break",
            "case",
            "class",
            "const",
            "continue",
            "default",
            "else",
            "enum",
            "extends",
            "false",
            "final",
            "for",
            "if",
            "import",
            "in",
            "is",
            "new",
            "null",
            "return",
            "static",
            "switch",
            "this",
            "throw",
            "true",
            "try",
            "var",
            "void",
            "while",
            "with",
          ].map((k) => (
            <div key={k} className="p-2 border rounded">
              {k}
            </div>
          ))}
        </div>
      </div>

      {/* Whitespace */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">Whitespace & Line Breaks</h2>

        <p className="leading-relaxed">
          Dart ignores spaces, tabs, and newlines. You can freely indent and
          format your code to improve readability.
        </p>
      </div>

      {/* Case Sensitivity */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">Dart is Case-Sensitive</h2>

        <p className="leading-relaxed">
          Dart treats uppercase and lowercase as different characters.
        </p>
      </div>

      {/* Semicolon */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">Statements End with a Semicolon</h2>
        <p className="leading-relaxed">
          Every Dart statement must end with a semicolon (;). Multiple statements
          can be written on the same line but each must end with a semicolon.
        </p>
      </div>

      {/* Comments */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">Comments in Dart</h2>

        <p className="leading-relaxed">
          Comments improve readability and are ignored by the compiler.
        </p>

        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          <pre>
            <code>
{`// Single line comment

/* 
  Multi-line comment 
*/`}
            </code>
          </pre>
        </div>
      </div>

      {/* OOP */}
      <div className="space-y-3 pb-10">
        <h2 className="text-2xl font-bold">
          Object-Oriented Programming in Dart
        </h2>

        <p className="leading-relaxed">
          Dart is fully object-oriented. Objects have state, behavior, and
          identity. Classes are blueprints for creating objects.
        </p>

        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          <pre>
            <code>
{`class TestClass {   
  void disp() {     
    print("Hello World"); 
  } 
}

void main() {   
  TestClass c = new TestClass();   
  c.disp();  
}`}
            </code>
          </pre>
        </div>

        <p className="leading-relaxed font-semibold">Output:</p>

        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          Hello World
        </div>
      </div>
    </div>
  );
};

export default DartSyntax;
