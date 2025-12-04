import React from "react";

const CArraySize: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        C - Array Size
      </h1>

      <p className="leading-relaxed">
        To get the size of an array in bytes, you can use the <code>sizeof</code> operator.
      </p>

      {/* Get Array Size */}
      <h2 className="text-2xl font-bold">Example: Get Array Size</h2>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`int myNumbers[] = {10, 25, 50, 75, 100};

printf("%zu", sizeof(myNumbers));  // Prints 20`}</pre>
      </div>

      <p className="leading-relaxed">
        Note: The result is 20 instead of 5 because <code>sizeof</code> returns the size in bytes. Each <code>int</code> is typically 4 bytes, so 5 elements × 4 bytes = 20 bytes.
      </p>

      {/* Get Number of Elements */}
      <h2 className="text-2xl font-bold">Get the Number of Elements</h2>
      <p className="leading-relaxed">
        To find out how many elements an array contains, divide the total size of the array by the size of one element:
      </p>

      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`int myNumbers[] = {10, 25, 50, 75, 100};
int length = sizeof(myNumbers) / sizeof(myNumbers[0]);

printf("%d", length);  // Prints 5`}</pre>
      </div>

      <p className="leading-relaxed">
        The <code>sizeof</code> formula works for arrays of any type and any size.
      </p>

      {/* Another Example */}
      <h2 className="text-2xl font-bold">Example: Double Array</h2>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`double myValues[] = {1.1, 2.2, 3.3};
int length = sizeof(myValues) / sizeof(myValues[0]);

printf("%d", length);  // Prints 3`}</pre>
      </div>
    </div>
  );
};

export default CArraySize;
