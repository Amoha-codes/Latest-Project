import React from "react";

const GoBoolean: React.FC = () => (
  <div className="mt-20 p-8 space-y-6 bg-white rounded-xl shadow-lg text-black">
    
    {/* Main Heading */}
    <h1 className="text-4xl font-extrabold text-gray-900 border-b-2 pb-2">
      Go Boolean Data Type
    </h1>

    {/* Subheading */}
    <h2 className="text-2xl font-bold text-gray-800 mt-4">Boolean Data Type</h2>

    {/* Description Paragraphs */}
    <p className="text-lg text-gray-700 leading-relaxed mt-2">
      A boolean data type is declared with the <code>bool</code> keyword and can only take the values{" "}
      <strong>true</strong> or <strong>false</strong>.
    </p>

    <p className="text-lg text-gray-700 leading-relaxed mt-2">
      The default value of a boolean data type is <strong>false</strong>.
    </p>

    {/* Example Section */}
    <h2 className="text-2xl font-bold text-gray-800 mt-8">Example</h2>
    <p className="text-lg text-gray-700 leading-relaxed mt-2">
      This example shows some different ways to declare Boolean variables:
    </p>

    {/* Code Example */}
    <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto mt-3">
{`package main
import ("fmt")

func main() {
  var b1 bool = true // typed declaration with initial value
  var b2 = true      // untyped declaration with initial value
  var b3 bool        // typed declaration without initial value
  b4 := true         // untyped declaration with initial value

  fmt.Println(b1) // Returns true
  fmt.Println(b2) // Returns true
  fmt.Println(b3) // Returns false
  fmt.Println(b4) // Returns true
}`}
    </pre>

  </div>
);

export default GoBoolean;
