import React from "react";

const CSwitch: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        C - Switch Statement
      </h1>

      <p className="leading-relaxed">
        Instead of writing many <code>if..else</code> statements, you can use the 
        <code>switch</code> statement. It selects one of many code blocks to be executed.
      </p>

      {/* Syntax */}
      <h2 className="text-2xl font-bold">Syntax</h2>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`switch (expression) {
    case x:
        // code block
        break;
    case y:
        // code block
        break;
    default:
        // code block
}`}</pre>
      </div>

      <p className="leading-relaxed">
        How it works:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>The switch expression is evaluated once.</li>
        <li>The value of the expression is compared with each case.</li>
        <li>If a match is found, the associated block of code is executed.</li>
        <li>The <code>break</code> statement stops execution of the switch block.</li>
        <li>The <code>default</code> case is optional and runs if no match is found.</li>
      </ul>

      {/* Example 1 */}
      <h2 className="text-2xl font-bold">Example: Weekday Name</h2>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`int day = 4;

switch (day) {
    case 1:
        printf("Monday");
        break;
    case 2:
        printf("Tuesday");
        break;
    case 3:
        printf("Wednesday");
        break;
    case 4:
        printf("Thursday");
        break;
    case 5:
        printf("Friday");
        break;
    case 6:
        printf("Saturday");
        break;
    case 7:
        printf("Sunday");
        break;
}

// Outputs "Thursday" (day 4)`}</pre>
      </div>

      {/* Break Keyword */}
      <h2 className="text-2xl font-bold">The <code>break</code> Keyword</h2>
      <p className="leading-relaxed">
        When C reaches a <code>break</code>, it exits the switch block, stopping further case testing. 
        This saves execution time by ignoring the remaining cases once a match is found.
      </p>

      {/* Default Keyword */}
      <h2 className="text-2xl font-bold">The <code>default</code> Keyword</h2>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`int day = 4;

switch (day) {
    case 6:
        printf("Today is Saturday");
        break;
    case 7:
        printf("Today is Sunday");
        break;
    default:
        printf("Looking forward to the Weekend");
}

// Outputs "Looking forward to the Weekend"`}</pre>
      </div>
    </div>
  );
};

export default CSwitch;
