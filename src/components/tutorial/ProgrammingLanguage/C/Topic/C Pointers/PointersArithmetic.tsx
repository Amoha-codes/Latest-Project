import React from "react";

const CPointerArithmetic: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        C - Pointer Arithmetic
      </h1>

      <p className="leading-relaxed">
        Pointer arithmetic allows us to move pointers to point to different elements in memory.  
        Since array elements are stored consecutively, adding 1 to a pointer moves it to the next element.
      </p>

      {/* Array Pointer Example */}
      <h2 className="text-2xl font-bold">Accessing Array Elements via Pointer</h2>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`int myNumbers[4] = {25, 50, 75, 100};
int *p = myNumbers;  // points to myNumbers[0]

printf("%d\\n", *p);       // 25
printf("%d\\n", *(p + 1)); // 50
printf("%d\\n", *(p + 2)); // 75
printf("%d\\n", *(p + 3)); // 100`}</pre>
      </div>

      {/* Increment / Decrement */}
      <h2 className="text-2xl font-bold">Increment & Decrement Pointers</h2>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`int myNumbers[3] = {10, 20, 30};
int *p = myNumbers;

printf("%d\\n", *p); // 10
p++;                  // move to myNumbers[1]
printf("%d\\n", *p); // 20
p--;                  // back to myNumbers[0]
printf("%d\\n", *p); // 10

p += 2;               // move to myNumbers[2]
printf("%d\\n", *p); // 30`}</pre>
      </div>

      {/* Pointer Subtraction */}
      <h2 className="text-2xl font-bold">Pointer Subtraction (Distance)</h2>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`int myNumbers[5] = {10, 20, 30, 40, 50};
int *start = &myNumbers[1]; // points to 20
int *end = &myNumbers[4];   // points to 50

printf("%ld\\n", end - start); // 3 elements apart`}</pre>
      </div>

      <p className="leading-relaxed">
        Pointer subtraction gives the number of elements between two pointers in the same array.
      </p>

      {/* Pointer Arithmetic Depends on Type */}
      <h2 className="text-2xl font-bold">Pointer Movement Depends on Type</h2>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`int myNumbers[2] = {1, 2};
char letters[] = "Hi";

int *pi = myNumbers;
char *pc = letters;

printf("%p\\n", (void*)pi);
printf("%p\\n", (void*)(pi + 1)); // moves by sizeof(int)
printf("%p\\n", (void*)(pi + 2));

printf("%p\\n", (void*)pc);
printf("%p\\n", (void*)(pc + 1)); // moves by 1 byte`}</pre>
      </div>

      <p className="leading-relaxed">
        Pointer movement depends on the data type: int* moves by sizeof(int), char* moves by sizeof(char).
      </p>

      {/* Looping with Pointers */}
      <h2 className="text-2xl font-bold">Looping with Pointers</h2>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`int myNumbers[4] = {25, 50, 75, 100};
int *p = myNumbers; // start of array

for (int i = 0; i < 4; i++) {
    printf("%d\\n", *p);
    p++; // move to next element
}`}</pre>
      </div>
    </div>
  );
};

export default CPointerArithmetic;
