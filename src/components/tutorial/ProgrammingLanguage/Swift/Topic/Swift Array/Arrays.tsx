import React from "react";

const SwiftArrays: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-15">
      Swift Arrays
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      In Swift, <b>arrays</b> store ordered collections of values of the same type. 
      Arrays are <b>value types</b>, which means they are copied on assignment (copy-on-write).
    </p>

    {/* Create and Access */}
    <h2 className="text-2xl font-bold mt-6">Create and Access</h2>

    <p className=" leading-relaxed mt-3">
      Arrays can be created using literals or initializers. You can access elements by 
      index, and use properties like <code>count</code> and <code>isEmpty</code>.
    </p>

    <h3 className="text-xl font-bold  mt-4">Example</h3>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`var numbers = [10, 20, 30]
print(numbers[0])         // 10

numbers.append(40)
print(numbers.count)      // 4
print(numbers.isEmpty)    // false`}
      </pre>
    </div>

    <p className=" leading-relaxed mt-4">
      This example shows how to create an array, access elements, add new elements, 
      and check its properties.
    </p>
  </>
);

export default SwiftArrays;
