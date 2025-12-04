import React from "react";

const CPointerToPointer: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        C - Pointer to Pointer
      </h1>

      <p className="leading-relaxed">
        A pointer to pointer (or double pointer) is a pointer that stores the address of another pointer.
        It's one more level of indirection: think of it like a note that tells you where another note is kept.
      </p>

      {/* Basic Example */}
      <h2 className="text-2xl font-bold">Basic Example</h2>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`int myNum = 10;       // normal variable
int *ptr = &myNum;    // pointer to int
int **pptr = &ptr;    // pointer to pointer

printf("myNum = %d\\n", myNum);
printf("*ptr = %d\\n", *ptr);
printf("**pptr = %d\\n", **pptr);`}</pre>
      </div>
      <p className="leading-relaxed">
        Output:
        <br />
        myNum = 10
        <br />
        *ptr = 10
        <br />
        **pptr = 10
      </p>

      <p className="leading-relaxed">
        Explanation:
        <br />- <code>myNum</code> holds the value 10.
        <br />- <code>ptr</code> holds the address of <code>myNum</code>.
        <br />- <code>pptr</code> holds the address of <code>ptr</code>.
        <br />- <code>*ptr</code> gives the value of <code>myNum</code>.
        <br />- <code>**pptr</code> also gives the value of <code>myNum</code> by following both pointers.
      </p>

      {/* Changing Values Through Pointer to Pointer */}
      <h2 className="text-2xl font-bold">Changing Values Through Pointer to Pointer</h2>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`int myNum = 5;
int *ptr = &myNum;
int **pptr = &ptr;

**pptr = 20; // changes myNum

printf("myNum = %d\\n", myNum); // prints 20`}</pre>
      </div>
      <p className="leading-relaxed">
        Using <code>**pptr</code> allows you to change the original variable's value through two levels of pointers.
      </p>

      {/* Summary */}
      <h2 className="text-2xl font-bold">Summary</h2>
      <ul className="list-disc ml-6 leading-relaxed">
        <li>A pointer to pointer stores the address of another pointer.</li>
        <li><code>*ptr</code> gives the value of the original variable.</li>
        <li><code>**pptr</code> gives the value of the variable through two levels of indirection.</li>
        <li>Useful when passing pointers to functions or working with complex data structures.</li>
      </ul>
    </div>
  );
};

export default CPointerToPointer;
