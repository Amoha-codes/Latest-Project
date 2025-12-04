import React from "react";

const CMemoryAddress: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        C - Memory Address
      </h1>

      <p className="leading-relaxed">
        In C, every variable is stored at a specific memory location. This location is called the <strong>memory address</strong>.
      </p>

      <p className="leading-relaxed">
        You can access the memory address of a variable using the <code>&</code> (reference) operator:
      </p>

      {/* Example */}
      <h2 className="text-2xl font-bold">Example</h2>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`int myAge = 43;

// Print the memory address of the variable
printf("%p", &myAge); // Outputs something like 0x7ffe5367e044`}</pre>
      </div>

      <p className="leading-relaxed">
        <strong>Explanation:</strong> The <code>&myAge</code> gives the address of the variable <code>myAge</code> in memory. The <code>%p</code> format specifier is used to print memory addresses in C.
      </p>
    </div>
  );
};

export default CMemoryAddress;
