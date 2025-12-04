import React from "react";

const PhpForeachLoop: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        PHP foreach Loop
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <strong>foreach</strong> loop is used to iterate over arrays and objects in PHP. 
        It is the easiest way to loop through each item without needing a counter.
      </p>

      {/* Array foreach */}
      <h2 className="text-2xl font-bold mt-10">foreach Loop on Arrays</h2>

      <p className="leading-relaxed">
        The most common use of <code>foreach</code> is looping through array elements.
      </p>

      <h3 className="text-xl font-semibold">Example</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$colors = array("red", "green", "blue", "yellow");

foreach ($colors as $x) {
  echo "$x <br>";
}`}
      </pre>

      <p className="leading-relaxed">
        In each iteration, the current array value is assigned to <code>$x</code>.
      </p>

      {/* Keys + Values */}
      <h2 className="text-2xl font-bold mt-10">Keys and Values in foreach</h2>

      <p className="leading-relaxed">
        For associative arrays, you can access both the key and the value:
      </p>

      <h3 className="text-xl font-semibold">Example</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$members = array("Peter" => "35", "Ben" => "37", "Joe" => "43");

foreach ($members as $x => $y) {
  echo "$x : $y <br>";
}`}
      </pre>

      {/* Objects */}
      <h2 className="text-2xl font-bold mt-10">foreach Loop on Objects</h2>

      <p className="leading-relaxed">
        You can also loop through object properties using <code>foreach</code>.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`class Car {
  public $color;
  public $model;
  public function __construct($color, $model) {
    $this->color = $color;
    $this->model = $model;
  }
}

$myCar = new Car("red", "Volvo");

foreach ($myCar as $x => $y) {
  echo "$x: $y <br>";
}`}
      </pre>

      {/* break */}
      <h2 className="text-2xl font-bold mt-10">The break Statement</h2>

      <p className="leading-relaxed">
        Use <code>break</code> to stop the loop before it ends.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$colors = array("red", "green", "blue", "yellow");

foreach ($colors as $x) {
  if ($x == "blue") break;
  echo "$x <br>";
}`}
      </pre>

      {/* continue */}
      <h2 className="text-2xl font-bold mt-10">The continue Statement</h2>

      <p className="leading-relaxed">
        Use <code>continue</code> to skip an iteration and continue to the next.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$colors = array("red", "green", "blue", "yellow");

foreach ($colors as $x) {
  if ($x == "blue") continue;
  echo "$x <br>";
}`}
      </pre>

      {/* By Reference */}
      <h2 className="text-2xl font-bold mt-10">foreach Loop By Reference</h2>

      <p className="leading-relaxed">
        By default, modifying the loop variable does <strong>not</strong> change the original array:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$colors = array("red", "green", "blue", "yellow");

foreach ($colors as $x) {
  if ($x == "blue") $x = "pink";
}

var_dump($colors);`}
      </pre>

      <p className="leading-relaxed">
        But using <strong>&amp;</strong> assigns by reference, so changes affect the original array:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$colors = array("red", "green", "blue", "yellow");

foreach ($colors as &$x) {
  if ($x == "blue") $x = "pink";
}

var_dump($colors);`}
      </pre>

      {/* Alternative Syntax */}
      <h2 className="text-2xl font-bold mt-10">Alternative Syntax</h2>

      <p className="leading-relaxed">
        PHP also provides an alternative syntax using <code>endforeach</code>:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`$colors = array("red", "green", "blue", "yellow");

foreach ($colors as $x) :
  echo "$x <br>";
endforeach;`}
      </pre>
    </div>
  );
};

export default PhpForeachLoop;
