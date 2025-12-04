import React from "react";

const DartObject: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        Dart Programming - Object
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        Object-Oriented Programming defines an object as any entity that has a defined boundary.
        An object has the following:
      </p>

      <ul className="list-disc list-inside space-y-1">
        <li>
          <strong>State</strong> − Describes the object. The fields of a class represent the object's state.
        </li>
        <li>
          <strong>Behavior</strong> − Describes what an object can do.
        </li>
        <li>
          <strong>Identity</strong> − A unique value that distinguishes an object from a set of similar objects.
        </li>
      </ul>

      <p className="leading-relaxed">
        The period operator <code>.</code> is used with the object to access class members.
      </p>

      {/* Code Example */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">Example: Creating and Using an Object</h2>
        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          <pre>
            <code>
{`class Student { 
  void test_method() { 
    print("This is a test method"); 
  } 
   
  void test_method1() { 
    print("This is a test method1"); 
  } 
}  

void main() { 
  Student s1 = new Student(); 
  s1.test_method(); 
  s1.test_method1(); 
}`}
            </code>
          </pre>
        </div>

        <p className="leading-relaxed font-semibold">Output:</p>
        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          This is a test method <br />
          This is a test method1
        </div>
      </div>

      {/* Cascade Operator */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">The Cascade Operator (..)</h2>
        <p className="leading-relaxed">
          The cascade operator <code>..</code> allows calling multiple methods on the same object
          without repeating the object reference.
        </p>

        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          <pre>
            <code>
{`new Student() 
  ..test_method() 
  ..test_method1();`}
            </code>
          </pre>
        </div>

        <p className="leading-relaxed font-semibold">Output:</p>
        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          This is a test method <br />
          This is a test method1
        </div>
      </div>

      {/* toString() Method */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">The toString() Method</h2>
        <p className="leading-relaxed">
          The <code>toString()</code> method returns a string representation of an object.
        </p>

        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          <pre>
            <code>
{`void main() { 
  int n = 12; 
  print(n.toString()); 
}`}
            </code>
          </pre>
        </div>

        <p className="leading-relaxed font-semibold">Output:</p>
        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          12
        </div>
      </div>
    </div>
  );
};

export default DartObject;
