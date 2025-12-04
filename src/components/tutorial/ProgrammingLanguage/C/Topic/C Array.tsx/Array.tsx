import React from "react";

const CArrays: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        C - Arrays
      </h1>

      <p className="leading-relaxed">
        Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value.
      </p>

      <p className="leading-relaxed">
        To create an array, define the data type (like <code>int</code>) and specify the array name followed by square brackets <code>[]</code>. Insert values using a comma-separated list inside curly braces. All values must be of the same data type.
      </p>

      {/* Creating an Array */}
      <h2 className="text-2xl font-bold">Example: Creating an Array</h2>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`int myNumbers[] = {25, 50, 75, 100};`}</pre>
      </div>

      <p className="leading-relaxed">
        We have now created a variable that holds an array of four integers.
      </p>

      {/* Accessing Array Elements */}
      <h2 className="text-2xl font-bold">Access the Elements of an Array</h2>
      <p className="leading-relaxed">
        Array elements are accessed using their <strong>index number</strong>. Array indexes start with 0: <code>[0]</code> is the first element, <code>[1]</code> is the second, and so on.
      </p>

      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`int myNumbers[] = {25, 50, 75, 100};
printf("%d", myNumbers[0]); // Outputs 25`}</pre>
      </div>

      {/* Changing Array Elements */}
      <h2 className="text-2xl font-bold">Change an Array Element</h2>
      <p className="leading-relaxed">
        To change the value of a specific element, refer to its index number and assign a new value.
      </p>

      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`int myNumbers[] = {25, 50, 75, 100};
myNumbers[0] = 33;

printf("%d", myNumbers[0]); // Now outputs 33 instead of 25`}</pre>
      </div>
    </div>
  );
};

export default CArrays;
