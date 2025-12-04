import React from "react";

const CHome: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        C Tutorial
      </h1>

      {/* Intro Section */}
      <p className="leading-relaxed">
        <span className="font-semibold">C</span> is a general-purpose programming language 
        that has been widely used for more than 50 years.  
        C is extremely powerful and is used to develop operating systems,
        databases, compilers, and performance-critical applications.
      </p>

     

      {/* Examples Section */}
      <h2 className="text-2xl font-bold">Example</h2>
      <p>Our online editor lets you edit code and run it instantly:</p>

      {/* Code Example */}
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`#include <stdio.h>

int main() {
  printf("Hello World!");
  return 0;
}`}
      </pre>

      {/* Explanation */}
      <p className="leading-relaxed">
        In this example, the program prints 
        <code className="bg-gray-200 px-1 mx-1 rounded">Hello World!</code> 
        to the screen using the <code className="bg-gray-200 px-1 mx-1 rounded">printf()</code> function.
      </p>
    </div>
  );
};

export default CHome;
