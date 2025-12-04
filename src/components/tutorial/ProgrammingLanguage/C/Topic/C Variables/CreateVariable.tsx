import React from "react";

const CVariables: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">

      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        C Programming – Variables
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        Variables are containers used to store data values such as numbers or characters.
        In C, variables are declared with specific data types.
      </p>

      {/* Types */}
      <h2 className="text-2xl font-bold">Types of Variables</h2>
      <ul className="list-disc list-inside space-y-1 leading-relaxed">
        <li>
          <span className="font-semibold">int</span> – stores whole numbers like 123 or -123
        </li>
        <li>
          <span className="font-semibold">float</span> – stores decimal numbers like 19.99 or -19.99
        </li>
        <li>
          <span className="font-semibold">char</span> – stores a single character, such as 'a' or 'B'
        </li>
      </ul>

      {/* Declaring Variables */}
      <h2 className="text-2xl font-bold">Declaring (Creating) Variables</h2>
      <p className="leading-relaxed">
        To create a variable, specify the type and assign a value:
      </p>

      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>
          <code>{`type variableName = value;`}</code>
        </pre>
      </div>

      <p className="leading-relaxed">
        Example: Create a variable called <code>myNum</code> of type{" "}
        <span className="font-semibold">int</span> and assign the value 15:
      </p>

      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>
          <code>{`int myNum = 15;`}</code>
        </pre>
      </div>

      <p className="leading-relaxed">
        You can also declare a variable first and assign a value later:
      </p>

      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>
          <code>{`// Declare a variable
int myNum;

// Assign a value to the variable
myNum = 15;`}</code>
        </pre>
      </div>

      {/* Output Variables */}
      <h2 className="text-2xl font-bold">Output Variables</h2>
      <p className="leading-relaxed">
        You know that <code>printf()</code> is used to print text or values:
      </p>

      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>
          <code>{`printf("Hello World!");`}</code>
        </pre>
      </div>

      <p className="leading-relaxed">
        But unlike Python, Java, or C++, you cannot print variables directly like this:
      </p>

      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>
          <code>{`int myNum = 15;
printf(myNum);  // Nothing happens`}</code>
        </pre>
      </div>

      <p className="leading-relaxed font-semibold">
        (In the next chapter, you will learn how to correctly print variables using format specifiers.)
      </p>

    </div>
  );
};

export default CVariables;
