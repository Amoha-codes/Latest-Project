import React from "react";

const DartFunctions: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        Dart Programming - Functions
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        Functions are the building blocks of readable, maintainable, and reusable code. 
        A function is a set of statements to perform a specific task. Functions organize the program into logical blocks of code, making it reusable and easier to maintain.
      </p>

      {/* Function Types */}
      <h2 className="text-2xl font-bold">Function Types & Description</h2>
      <ul className="list-disc ml-6">
        <li><b>Defining a Function:</b> Specifies what and how a specific task is done.</li>
        <li><b>Calling a Function:</b> Executes the function.</li>
        <li><b>Returning Functions:</b> Returns a value along with control to the caller.</li>
        <li><b>Parameterized Function:</b> Pass values to functions using parameters.</li>
      </ul>

      {/* Optional Parameters */}
      <h2 className="text-2xl font-bold">Optional Parameters</h2>
      <p className="leading-relaxed">
        Optional parameters are not required when calling a function. Dart supports three types:
      </p>
      <ul className="list-disc ml-6">
        <li><b>Optional Positional:</b> Use square brackets <code>[]</code>.</li>
        <li><b>Optional Named:</b> Use curly braces <code>{}</code> and specify the parameter name.</li>
        <li><b>Optional with Default Values:</b> Parameters can have default values but can still be explicitly passed.</li>
      </ul>

      {/* Recursive Functions */}
      <h2 className="text-2xl font-bold">Recursive Dart Functions</h2>
      <p className="leading-relaxed">
        Recursion is when a function calls itself repeatedly until it reaches a termination condition.
      </p>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>
          <code>{`void main() { 
  print(factorial(6));
}  

factorial(number) { 
  if (number <= 0) {         
    return 1; 
  } else { 
    return (number * factorial(number - 1));    
  } 
}`}</code>
        </pre>
      </div>
      <p className="bg-gray-100 text-black p-3 rounded-md font-mono">
        Output: 720
      </p>

      {/* Lambda / Arrow Functions */}
      <h2 className="text-2xl font-bold">Lambda / Arrow Functions</h2>
      <p className="leading-relaxed">
        Lambda functions provide a concise syntax using <code>=&gt;</code>.
      </p>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>
          <code>{`void main() { 
  printMsg(); 
  print(test()); 
}  

printMsg() => print("hello"); 

int test() => 123;`}</code>
        </pre>
      </div>
      <p className="bg-gray-100 text-black p-3 rounded-md font-mono">
        Output: hello 123
      </p>
    </div>
  );
};

export default DartFunctions;
