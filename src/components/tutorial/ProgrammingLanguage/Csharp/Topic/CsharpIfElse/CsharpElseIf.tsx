import React from "react";

const CsharpElseIf: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold text-gray-900 border-b-2 pb-2 mt-15">
      C# The else if Statement
    </h1>

    <p className="text-lg text-gray-700 leading-relaxed mt-4">
      The <b>else if</b> statement is used to specify a new condition to test when the previous
      <b>if</b> condition is False. It allows you to check multiple conditions in sequence.
    </p>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Syntax</h2>
    <p className="text-gray-700 leading-relaxed mt-3">
      You can chain multiple <b>else if</b> statements between <b>if</b> and <b>else</b>:
    </p>

    <div className="bg-gray-900 text-green-400 font-mono p-4 rounded-lg shadow-md mt-3">
      <pre>
{`if (condition1)
{
  // executed if condition1 is True
} 
else if (condition2) 
{
  // executed if condition1 is False and condition2 is True
} 
else
{
  // executed if both condition1 and condition2 are False
}`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-8">Example</h2>
    <p className="text-gray-700 leading-relaxed mt-3">
      In the example below, multiple conditions are checked using <b>if</b>, <b>else if</b>, and
      <b>else</b>:
    </p>

    <div className="bg-gray-900 text-green-400 font-mono p-4 rounded-lg shadow-md mt-3">
      <pre>
{`int time = 22;
if (time < 10) 
{
  Console.WriteLine("Good morning.");
} 
else if (time < 20) 
{
  Console.WriteLine("Good day.");
} 
else 
{
  Console.WriteLine("Good evening.");
}
// Outputs "Good evening."`}
      </pre>
    </div>

    <p className="text-gray-700 leading-relaxed mt-4">
      ✅ Here, <b>time</b> is 22, so the first condition (<b>time &lt; 10</b>) is False, the
      second condition (<b>time &lt; 20</b>) is also False, and therefore the <b>else</b> block
      executes, printing <b>"Good evening."</b>
    </p>
  </>
);

export default CsharpElseIf;
