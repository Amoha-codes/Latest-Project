import React from "react";

const PhpCasting: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        PHP Casting
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        Sometimes you need to change a variable from one data type into another.
        This process is called <strong>casting</strong>. PHP provides several casting
        operators that allow you to convert variables into specific data types.
      </p>

      {/* Casting Types */}
      <h2 className="text-2xl font-bold">Change Data Type</h2>

      <p className="leading-relaxed">PHP supports the following cast operations:</p>

      <ul className="list-disc list-inside leading-relaxed space-y-1">
        <li><code>(string)</code> – Convert to String</li>
        <li><code>(int)</code> – Convert to Integer</li>
        <li><code>(float)</code> – Convert to Float</li>
        <li><code>(bool)</code> – Convert to Boolean</li>
        <li><code>(array)</code> – Convert to Array</li>
        <li><code>(object)</code> – Convert to Object</li>
        <li><code>(unset)</code> – Convert to NULL</li>
      </ul>

      {/* Cast to String */}
      <h2 className="text-2xl font-bold">Cast to String</h2>

      <p className="leading-relaxed">
        Use the <code>(string)</code> keyword to convert any value into a string.
      </p>

      <h3 className="text-xl font-semibold">Example</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`$a = 5;       // Integer
$b = 5.34;    // Float
$c = "hello"; // String
$d = true;    // Boolean
$e = NULL;    // NULL

$a = (string) $a;
$b = (string) $b;
$c = (string) $c;
$d = (string) $d;
$e = (string) $e;

var_dump($a);
var_dump($b);
var_dump($c);
var_dump($d);
var_dump($e);`}
      </pre>

      {/* Cast to Integer */}
      <h2 className="text-2xl font-bold">Cast to Integer</h2>

      <p className="leading-relaxed">Use <code>(int)</code> to cast a value into an integer.</p>

      <h3 className="text-xl font-semibold">Example</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`$a = 5;       
$b = 5.34;    
$c = "25 kilometers"; 
$d = "kilometers 25"; 
$e = "hello"; 
$f = true;    
$g = NULL;    

$a = (int) $a;
$b = (int) $b;
$c = (int) $c;   // Extracts leading number
$d = (int) $d;   // No leading number → 0
$e = (int) $e;   // 0
$f = (int) $f;   // true becomes 1
$g = (int) $g;   // NULL becomes 0`}
      </pre>

      {/* Cast to Float */}
      <h2 className="text-2xl font-bold">Cast to Float</h2>

      <p className="leading-relaxed">Use <code>(float)</code> to convert values into a floating-point number.</p>

      <h3 className="text-xl font-semibold">Example</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`$a = 5;       
$b = 5.34;    
$c = "25 kilometers";
$d = "kilometers 25";
$e = "hello";
$f = true;    
$g = NULL;

$a = (float) $a;
$b = (float) $b;
$c = (float) $c;
$d = (float) $d;
$e = (float) $e;
$f = (float) $f;
$g = (float) $g;`}
      </pre>

      {/* Cast to Boolean */}
      <h2 className="text-2xl font-bold">Cast to Boolean</h2>

      <p className="leading-relaxed">
        Use <code>(bool)</code> to convert values into a boolean.  
        PHP considers these as <strong>false</strong>:
      </p>

      <ul className="list-disc list-inside space-y-1 leading-relaxed">
        <li><code>0</code></li>
        <li><code>"0"</code></li>
        <li><code>""</code> (empty string)</li>
        <li><code>[]</code> (empty array)</li>
        <li><code>false</code></li>
        <li><code>null</code></li>
      </ul>

      <p className="leading-relaxed">Everything else converts to <strong>true</strong>.</p>

      <h3 className="text-xl font-semibold">Example</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`$a = 5;
$b = 5.34;
$c = 0;
$d = -1;
$e = 0.1;
$f = "hello";
$g = "";
$h = true;
$i = NULL;

$a = (bool) $a;
$b = (bool) $b;
$c = (bool) $c;
$d = (bool) $d;
$e = (bool) $e;
$f = (bool) $f;
$g = (bool) $g;
$h = (bool) $h;
$i = (bool) $i;`}
      </pre>

      {/* Cast to Array */}
      <h2 className="text-2xl font-bold">Cast to Array</h2>

      <p className="leading-relaxed">
        The <code>(array)</code> cast converts most values into an indexed array with one element.
        <br />NULL becomes an empty array.
      </p>

      <h3 className="text-xl font-semibold">Example</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`$a = 5;
$b = 5.34;
$c = "hello";
$d = true;
$e = NULL;

$a = (array) $a;
$b = (array) $b;
$c = (array) $c;
$d = (array) $d;
$e = (array) $e;`}
      </pre>

      <h3 className="text-xl font-semibold">Object to Array</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`class Car {
  public $color;
  public $model;
  public function __construct($color, $model) {
    $this->color = $color;
    $this->model = $model;
  }
}

$myCar = new Car("red", "Volvo");
$myCar = (array) $myCar;

var_dump($myCar);`}
      </pre>

      {/* Cast to Object */}
      <h2 className="text-2xl font-bold">Cast to Object</h2>

      <p className="leading-relaxed">
        Most values convert into an object with one property named <code>scalar</code>.
        <br />NULL becomes an empty object.
      </p>

      <h3 className="text-xl font-semibold">Example</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`$a = 5;
$b = 5.34;
$c = "hello";
$d = true;
$e = NULL;

$a = (object) $a;
$b = (object) $b;
$c = (object) $c;
$d = (object) $d;
$e = (object) $e;`}
      </pre>

      <h3 className="text-xl font-semibold">Arrays to Object</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`$a = ["Volvo", "BMW", "Toyota"];         
$b = ["Peter" => "35", "Ben" => "37"];

$a = (object) $a;
$b = (object) $b;`}
      </pre>

      {/* Cast to NULL */}
      <h2 className="text-2xl font-bold">Cast to NULL</h2>

      <p className="leading-relaxed">
        Use <code>(unset)</code> to convert any value into <strong>NULL</strong>.
      </p>

      <h3 className="text-xl font-semibold">Example</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`$a = 5;
$b = 5.34;
$c = "hello";
$d = true;
$e = NULL;

$a = (unset) $a;
$b = (unset) $b;
$c = (unset) $c;
$d = (unset) $d;
$e = (unset) $e;`}
      </pre>

    </div>
  );
};

export default PhpCasting;
