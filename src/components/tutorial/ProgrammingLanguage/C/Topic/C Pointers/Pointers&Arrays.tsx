import React from "react";

const CPointersArrays: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        C - Pointers & Arrays
      </h1>

      <p className="leading-relaxed">
        In C, the name of an array is actually a pointer to its first element.  
        This allows us to work with arrays through pointers.
      </p>

      {/* Array Example */}
      <h2 className="text-2xl font-bold">Array Elements & Memory Addresses</h2>
      <p className="leading-relaxed">
        Consider an array of integers:
      </p>

      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`int myNumbers[4] = {25, 50, 75, 100};
int i;

// Print array elements
for (i = 0; i < 4; i++) {
    printf("%d\\n", myNumbers[i]);
}`}</pre>
      </div>

      <p className="leading-relaxed">
        Output:
      </p>
      <pre className="bg-gray-100 p-2 rounded">25{'\n'}50{'\n'}75{'\n'}100</pre>

      <p className="leading-relaxed">
        You can also print the memory address of each element:
      </p>

      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`for (i = 0; i < 4; i++) {
    printf("%p\\n", &myNumbers[i]);
}`}</pre>
      </div>

      <p className="leading-relaxed">
        Each element's address increases by 4 bytes (size of int) for consecutive elements.
      </p>

      {/* Array Size */}
      <h2 className="text-2xl font-bold">Array Size</h2>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`printf("%zu", sizeof(myNumbers)); // Total bytes of the array`}</pre>
      </div>

      <p className="leading-relaxed">
        For 4 elements of int (4 bytes each), total memory = 16 bytes.
      </p>

      {/* Pointers & Array Relationship */}
      <h2 className="text-2xl font-bold">Pointers & Arrays Relationship</h2>
      <p className="leading-relaxed">
        The array name is a pointer to the first element:
      </p>

      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`printf("%p\\n", myNumbers);      // Address of first element
printf("%p\\n", &myNumbers[0]); // Same address`}</pre>
      </div>

      <p className="leading-relaxed">
        You can access elements via pointers:
      </p>

      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`printf("%d\\n", *myNumbers);      // First element
printf("%d\\n", *(myNumbers + 1)); // Second element
printf("%d\\n", *(myNumbers + 2)); // Third element`}</pre>
      </div>

      {/* Looping with Pointers */}
      <h2 className="text-2xl font-bold">Looping with Pointers</h2>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`int *ptr = myNumbers;
for (int i = 0; i < 4; i++) {
    printf("%d\\n", *(ptr + i));
}`}</pre>
      </div>

      {/* Modifying Array via Pointer */}
      <h2 className="text-2xl font-bold">Modifying Array Elements via Pointer</h2>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`*myNumbers = 13;        // First element
*(myNumbers + 1) = 17;   // Second element

printf("%d\\n", *myNumbers);      // 13
printf("%d\\n", *(myNumbers + 1)); // 17`}</pre>
      </div>
    </div>
  );
};

export default CPointersArrays;
