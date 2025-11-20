import React from "react";

const GoMultiCaseSwitch: React.FC = () => (
  <div className="mt-20 px-6">
    {/* Main Heading */}
    <h1 className="text-4xl font-extrabold text-gray-900 border-b-2 pb-2">
      Go Multi-case switch Statement
    </h1>

    {/* Intro Paragraph */}
    <p className="text-lg text-gray-700 mt-4 leading-relaxed">
      The <code>multi-case switch</code> statement in Go allows you to include multiple 
      values for a single case. This is useful when different case values should execute 
      the same block of code.
    </p>

    {/* Syntax Section */}
    <h2 className="text-2xl font-bold text-gray-800 mt-6">Syntax</h2>

    <pre className="bg-gray-900 text-white p-4 rounded-lg mt-3 overflow-x-auto">
{`switch expression {
case x, y:
   // code block if expression is evaluated to x or y
case v, w:
   // code block if expression is evaluated to v or w
case z:
   // code block
default:
   // code block if expression does not match any cases
}`}
    </pre>

    {/* Example Section */}
    <h2 className="text-2xl font-bold text-gray-800 mt-6">
      Multi-case switch Example
    </h2>

    <p className="text-gray-700 mt-2 leading-relaxed">
      The example below uses a weekday number to print different text depending on 
      whether it’s an odd weekday, even weekday, or weekend:
    </p>

    <pre className="bg-gray-900 text-white p-4 rounded-lg mt-3 overflow-x-auto">
{`package main
import ("fmt")

func main() {
   day := 5

   switch day {
   case 1, 3, 5:
      fmt.Println("Odd weekday")
   case 2, 4:
      fmt.Println("Even weekday")
   case 6, 7:
      fmt.Println("Weekend")
   default:
      fmt.Println("Invalid day number")
   }
}`}
    </pre>

    {/* Result Section */}
    <h3 className="text-lg font-semibold text-gray-800 mt-3">Result:</h3>
    <pre className="bg-gray-100 text-gray-800 p-3 rounded-lg mt-2">
Odd weekday
    </pre>

    {/* Summary */}
    <p className="text-gray-700 mt-3 leading-relaxed">
      In this example, since <code>day</code> is 5, the program matches the 
      <code>case 1, 3, 5</code> and prints <strong>"Odd weekday"</strong>. 
      Multi-case switches make your code cleaner by grouping multiple case values 
      that share the same logic.
    </p>
  </div>
);

export default GoMultiCaseSwitch;
