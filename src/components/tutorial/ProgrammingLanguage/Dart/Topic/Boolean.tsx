import React from "react";

const DartBoolean: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        Dart Programming – Boolean
      </h1>

      <p>
        Dart provides built-in support for the <strong>Boolean</strong> data type. It supports only
        two values: <strong>true</strong> and <strong>false</strong>. The keyword{" "}
        <strong>bool</strong> is used to declare a Boolean variable.
      </p>

      <h2 className="text-2xl font-bold">Syntax</h2>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`bool var_name = true;
bool var_name = false;`}
      </pre>

      <h2 className="text-2xl font-bold">Example</h2>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`void main() { 
   bool test; 
   test = 12 > 5; 
   print(test); 
}`}
      </pre>

      <p><strong>Output:</strong></p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`true`}
      </pre>

      <h2 className="text-2xl font-bold">Boolean Behavior in Dart vs JavaScript</h2>

      <p>
        Unlike JavaScript, <strong>Dart treats ONLY the literal true as true</strong>. Any non-boolean
        value is <strong>not</strong> considered truthy.
      </p>

      <h3 className="text-xl font-semibold">Example</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`var str = 'abc'; 
if (str) { 
   print('String is not empty'); 
} else { 
   print('Empty String'); 
}`}
      </pre>

      <p><strong>JavaScript Output:</strong> String is not empty</p>

      <p>
        But in Dart, this does <strong>not</strong> work because <strong>str is not a bool</strong>.
        If evaluated:
      </p>

      <ul className="list-disc pl-6">
        <li><strong>Unchecked Mode:</strong> str is treated as false → prints <em>Empty String</em></li>
        <li><strong>Checked Mode:</strong> throws a <strong>type error</strong></li>
      </ul>

      <h3 className="text-xl font-semibold">Checked Mode Example</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`void main() { 
   var str = 'abc'; 
   if (str) { 
      print('String is not empty'); 
   } else { 
      print('Empty String'); 
   } 
}`}
      </pre>

      <p><strong>Output (Checked Mode):</strong></p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`Unhandled exception:
type 'String' is not a subtype of type 'bool' of 'boolean expression'`}
      </pre>

      <p><strong>Output (Unchecked Mode):</strong></p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`Empty String`}
      </pre>

      <p><strong>Note:</strong> WebStorm IDE runs Dart in checked mode by default.</p>
    </div>
  );
};

export default DartBoolean;
