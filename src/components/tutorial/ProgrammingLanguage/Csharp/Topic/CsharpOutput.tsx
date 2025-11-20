import React from 'react';
import type CSharpOutput from './Home';

const CsharpOutput: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold text-gray-900 border-b-2 pb-2">
       C# Output
    </h1>

    <p className="text-lg text-gray-700 leading-relaxed mt-4">
      To output values or print text in <b>C#</b>, you can use the <b>WriteLine()</b> method.
    </p>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Example:</h2>
    <div className="bg-gray-900 text-green-400 font-mono p-4 rounded-lg shadow-md mt-3">
      <pre>
{`Console.WriteLine("Hello World!");`}
      </pre>
    </div>

    <p className="text-gray-700 leading-relaxed mt-4">
      You can add as many <b>WriteLine()</b> methods as you want. 
      Each one adds a new line to the output.
    </p>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Example:</h2>
    <div className="bg-gray-900 text-green-400 font-mono p-4 rounded-lg shadow-md mt-3">
      <pre>
{`Console.WriteLine("Hello World!");
Console.WriteLine("I am Learning C#");
Console.WriteLine("It is awesome!");`}
      </pre>
    </div>

    <p className="text-gray-700 leading-relaxed mt-4">
      You can also output numbers and perform mathematical calculations.
    </p>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Example:</h2>
    <div className="bg-gray-900 text-green-400 font-mono p-4 rounded-lg shadow-md mt-3">
      <pre>
{`Console.WriteLine(3 + 3);`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">The Write Method</h2>
    <p className="text-gray-700 leading-relaxed mt-3">
      There is also a <b>Write()</b> method, which is similar to <b>WriteLine()</b>. 
      The only difference is that it does not insert a new line at the end of the output.
    </p>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Example:</h2>
    <div className="bg-gray-900 text-green-400 font-mono p-4 rounded-lg shadow-md mt-3">
      <pre>
{`Console.Write("Hello World! ");
Console.Write("I will print on the same line.");`}
      </pre>
    </div>

    <p className="text-gray-600 italic mt-3">
      Note: Add an extra space after "Hello World!" for better readability.
    </p>
  </div>
);

export default CsharpOutput;
