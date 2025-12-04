
import React from "react";

const CUserInput: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        C - User Input
      </h1>

      <p className="leading-relaxed">
        In C, <code>printf()</code> is used to output values. To get input from the user, we use <code>scanf()</code> or <code>fgets()</code>.
      </p>

      {/* Single Input */}
      <h2 className="text-2xl font-bold">Single Input</h2>
      <p className="leading-relaxed">
        Example of reading an integer input from the user:
      </p>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`int myNum;

// Ask the user to type a number
printf("Type a number: \\n");

// Get and save the number
scanf("%d", &myNum);

// Output the number
printf("Your number is: %d", myNum);`}</pre>
      </div>

      {/* Multiple Inputs */}
      <h2 className="text-2xl font-bold">Multiple Inputs</h2>
      <p className="leading-relaxed">
        You can get multiple inputs at once using <code>scanf()</code>:
      </p>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`int myNum;
char myChar;

printf("Type a number AND a character: \\n");

// Read both number and character
scanf("%d %c", &myNum, &myChar);

printf("Your number is: %d\\n", myNum);
printf("Your character is: %c", myChar);`}</pre>
      </div>

      {/* String Input with scanf */}
      <h2 className="text-2xl font-bold">String Input (scanf)</h2>
      <p className="leading-relaxed">
        Reading a single word string:
      </p>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`char firstName[30];

printf("Enter your first name: \\n");

// Read a string (single word)
scanf("%s", firstName);

printf("Hello %s", firstName);`}</pre>
      </div>

      {/* String Input with fgets */}
      <h2 className="text-2xl font-bold">String Input (fgets)</h2>
      <p className="leading-relaxed">
        To read a full line of text (including spaces), use <code>fgets()</code>:
      </p>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`char fullName[30];

printf("Type your full name: \\n");

// Read full line including spaces
fgets(fullName, sizeof(fullName), stdin);

printf("Hello %s", fullName);`}</pre>
      </div>

      <p className="leading-relaxed">
        <strong>Note:</strong> For strings, <code>scanf()</code> stops at whitespace, so it only reads a single word. <code>fgets()</code> is preferred for full names or sentences.
      </p>
    </div>
  );
};

export default CUserInput;
