import React from "react";

const CVariableValues: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        C - Variable Values
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        In C, once a variable has been created, you can change its value at
        any time. Assigning a new value overwrites the previous value.
      </p>

      {/* Example 1 */}
      <h2 className="text-2xl font-semibold">Change Variable Values</h2>
      <p className="leading-relaxed">
        Assigning a new value to a variable replaces the old one:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`int myNum = 15;  // myNum is 15
myNum = 10;        // Now myNum is 10`}
      </pre>

      {/* Example 2 */}
      <p className="leading-relaxed">
        You can also assign one variable's value to another:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`int myNum = 15;
int myOtherNum = 23;

// Assign the value of myOtherNum (23) to myNum
myNum = myOtherNum;

// myNum is now 23
printf("%d", myNum);`}
      </pre>

      {/* Example 3 */}
      <h2 className="text-2xl font-semibold">Copy Values to Empty Variables</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`// Create a variable and assign the value 15 to it
int myNum = 15;

// Declare a variable without assigning it a value
int myOtherNum;

// Assign the value of myNum to myOtherNum
myOtherNum = myNum;

// myOtherNum now has 15 as a value
printf("%d", myOtherNum);`}
      </pre>

      {/* Example 4 */}
      <h2 className="text-2xl font-semibold">Add Variables Together</h2>
      <p className="leading-relaxed">
        You can add variables using the <code>+</code> operator:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`int x = 5;
int y = 6;
int sum = x + y;

printf("%d", sum);`}
      </pre>
    </div>
  );
};

export default CVariableValues;
