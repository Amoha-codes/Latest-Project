import React from "react";

const CPointers: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        C - Pointers
      </h1>

      <p className="leading-relaxed">
        A <strong>pointer</strong> is a variable that stores the memory address of another variable.  
        The type of the pointer must match the type of the variable it points to.
      </p>

      {/* Creating a Pointer */}
      <h2 className="text-2xl font-bold">Creating a Pointer</h2>
      <p className="leading-relaxed">
        You can get the memory address of a variable using the <code>&</code> operator, and store it in a pointer variable using the <code>*</code> operator:
      </p>

      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`int myAge = 43;     // An int variable
int* ptr = &myAge;  // A pointer variable that stores the address of myAge

// Output the value of myAge
printf("%d\\n", myAge);    // 43

// Output the memory address of myAge
printf("%p\\n", &myAge);

// Output the memory address stored in the pointer
printf("%p\\n", ptr);`}</pre>
      </div>

      <p className="leading-relaxed">
        <strong>Explanation:</strong>  
        The pointer <code>ptr</code> holds the memory address of <code>myAge</code>.  
        The type of the pointer (<code>int*</code>) must match the type of the variable it points to (<code>int</code>).
      </p>

      {/* Dereferencing */}
      <h2 className="text-2xl font-bold">Dereferencing a Pointer</h2>
      <p className="leading-relaxed">
        You can get the value stored at the memory address using the <strong>dereference operator</strong> <code>*</code>:
      </p>

      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`int myAge = 43;
int* ptr = &myAge;

// Reference: print memory address
printf("%p\\n", ptr);

// Dereference: print the value of myAge using the pointer
printf("%d\\n", *ptr);   // 43`}</pre>
      </div>

      <p className="leading-relaxed">
        The <code>*ptr</code> accesses the value stored at the memory address that the pointer points to.
      </p>
    </div>
  );
};

export default CPointers;
