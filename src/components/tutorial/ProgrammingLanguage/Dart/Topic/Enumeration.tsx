import React from "react";

const DartEnumeration: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        Dart Programming - Enumeration
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        An <span className="font-semibold">enumeration (enum)</span> is used to define a set of named constant values.
        Enums help you represent a collection of related values with meaningful names.
      </p>

      {/* Syntax */}
      <h2 className="text-2xl font-bold">Syntax</h2>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>
          <code>{`enum enum_name {  
  enumeration_list 
}`}</code>
        </pre>
      </div>
      <p className="leading-relaxed">
        - <b>enum_name</b>: Name of the enumeration type.<br />
        - <b>enumeration_list</b>: Comma-separated list of identifiers. Each symbol has an integer value starting from 0 by default.
      </p>

      {/* Example */}
      <h2 className="text-2xl font-bold">Example</h2>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>
          <code>{`enum Status { 
  none, 
  running, 
  stopped, 
  paused 
}  

void main() { 
  print(Status.values); 
  Status.values.forEach((v) => print('value: \$v, index: \${v.index}'));
  
  print('running: \$\{Status.running}, \${Status.running.index}'); 
  print('running index: \$\{Status.values[1]}'); 
}`}</code>
        </pre>
      </div>

      {/* Output */}
      <h2 className="text-2xl font-bold">Output</h2>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`[Status.none, Status.running, Status.stopped, Status.paused] 
value: Status.none, index: 0 
value: Status.running, index: 1 
value: Status.stopped, index: 2 
value: Status.paused, index: 3 
running: Status.running, 1 
running index: Status.running`}
      </div>

      {/* Explanation */}
      <p className="leading-relaxed">
        Each enum value has an <b>index</b> starting from 0. You can access all enum values using <code>Status.values</code> and reference a specific value using <code>Status.valueName</code> or by index.
      </p>
    </div>
  );
};

export default DartEnumeration;
