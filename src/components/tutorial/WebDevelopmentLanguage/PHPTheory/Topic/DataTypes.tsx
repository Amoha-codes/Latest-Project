import React from "react";

const PhpDataTypes: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        PHP Data Types
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        Variables in PHP can store different types of data. Each data type allows different operations.
      </p>

      <p className="leading-relaxed">
        PHP supports the following data types:
      </p>

      <ul className="list-disc list-inside leading-relaxed space-y-1">
        <li>String</li>
        <li>Integer</li>
        <li>Float</li>
        <li>Boolean</li>
        <li>Array</li>
        <li>Object</li>
        <li>NULL</li>
        <li>Resource</li>
      </ul>

      {/* var_dump */}
      <h2 className="text-2xl font-bold">Get the Data Type</h2>

      <p className="leading-relaxed">
        Use the <code>var_dump()</code> function to check a variable’s value and type.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black whitespace-pre-wrap">
{`$x = 5;
var_dump($x);`}
      </pre>

      {/* String */}
      <h2 className="text-2xl font-bold">PHP String</h2>

      <p className="leading-relaxed">
        A string is a sequence of characters. You can use single or double quotes.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black whitespace-pre-wrap">
{`$x = "Hello world!";
$y = 'Hello world!';

var_dump($x);
echo "<br>";
var_dump($y);`}
      </pre>

      {/* Integer */}
      <h2 className="text-2xl font-bold">PHP Integer</h2>

      <p className="leading-relaxed">An integer is a whole number without a decimal.</p>

      <ul className="list-disc list-inside leading-relaxed space-y-1">
        <li>Must have at least one digit</li>
        <li>No decimal point</li>
        <li>Can be positive or negative</li>
        <li>Can be in decimal, hexadecimal, octal, or binary form</li>
      </ul>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black whitespace-pre-wrap">
{`$x = 5985;
var_dump($x);`}
      </pre>

      {/* Float */}
      <h2 className="text-2xl font-bold">PHP Float</h2>

      <p className="leading-relaxed">
        A float is a number with a decimal or in exponential form.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black whitespace-pre-wrap">
{`$x = 10.365;
var_dump($x);`}
      </pre>

      {/* Boolean */}
      <h2 className="text-2xl font-bold">PHP Boolean</h2>

      <p className="leading-relaxed">A boolean represents either TRUE or FALSE.</p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black whitespace-pre-wrap">
{`$x = true;
var_dump($x);`}
      </pre>

      {/* Array */}
      <h2 className="text-2xl font-bold">PHP Array</h2>

      <p className="leading-relaxed">An array stores multiple values in a single variable.</p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black whitespace-pre-wrap">
{`$cars = array("Volvo", "BMW", "Toyota");
var_dump($cars);`}
      </pre>

      {/* Object */}
      <h2 className="text-2xl font-bold">PHP Object</h2>

      <p className="leading-relaxed">
        A class is a blueprint for objects. Objects inherit the class's properties and methods.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black whitespace-pre-wrap">
{`class Car {
  public $color;
  public $model;

  public function __construct($color, $model) {
    $this->color = $color;
    $this->model = $model;
  }

  public function message() {
    return "My car is a " . $this->color . " " . $this->model . "!";
  }
}

$myCar = new Car("red", "Volvo");
var_dump($myCar);`}
      </pre>

      {/* NULL */}
      <h2 className="text-2xl font-bold">PHP NULL Value</h2>

      <p className="leading-relaxed">
        A NULL variable has no value. You can empty a variable by setting it to NULL.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black whitespace-pre-wrap">
{`$x = "Hello world!";
$x = null;
var_dump($x);`}
      </pre>

      {/* Change Data Type */}
      <h2 className="text-2xl font-bold">Change Data Type</h2>

      <p className="leading-relaxed">
        PHP automatically changes variable types based on their values.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black whitespace-pre-wrap">
{`$x = 5;
var_dump($x);

$x = "Hello";
var_dump($x);`}
      </pre>

      <p className="leading-relaxed">
        You can also cast variables to a different data type manually:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black whitespace-pre-wrap">
{`$x = 5;
$x = (string)$x;
var_dump($x);`}
      </pre>
    </div>
  );
};

export default PhpDataTypes;
