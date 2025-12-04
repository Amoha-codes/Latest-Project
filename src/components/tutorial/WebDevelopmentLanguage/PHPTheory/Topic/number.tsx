import React from "react";

const PhpNumbers: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        PHP Numbers
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        In this chapter, we will look in-depth into PHP number types:
        <strong> Integers</strong>, <strong>Floats</strong>, and{" "}
        <strong>Number Strings</strong>.  
        PHP also includes two special numeric values: <strong>Infinity</strong> and{" "}
        <strong>NaN</strong>.
      </p>

      <h2 className="text-2xl font-bold">PHP Numeric Types</h2>
      <ul className="list-disc list-inside space-y-1 leading-relaxed">
        <li>Integer</li>
        <li>Float</li>
        <li>Number Strings</li>
        <li>Infinity</li>
        <li>NaN</li>
      </ul>

      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`$a = 5;
$b = 5.34;
$c = "25";`}
      </pre>

      <p className="leading-relaxed">Use <code>var_dump()</code> to check data types:</p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`var_dump($a);
var_dump($b);
var_dump($c);`}
      </pre>

      {/* Integers */}
      <h2 className="text-2xl font-bold">PHP Integers</h2>

      <p className="leading-relaxed">
        The <code>is_int()</code> function checks if a variable is an integer.
      </p>

      <h3 className="text-xl font-semibold">Example — Check for Integer</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`$x = 5985;
var_dump(is_int($x));

$x = 59.85;
var_dump(is_int($x));`}
      </pre>

      <p className="leading-relaxed">
        Integers must not have decimals and can be positive or negative.
      </p>

      <h3 className="text-xl font-semibold">Integer Rules</h3>
      <ul className="list-disc list-inside leading-relaxed space-y-1">
        <li>Must have at least one digit</li>
        <li>No decimal points allowed</li>
        <li>Can be positive or negative</li>
        <li>
          Supported formats:
          <ul className="list-disc ml-6">
            <li>Decimal</li>
            <li>Hex (e.g., 0x1A)</li>
            <li>Octal (e.g., 0755)</li>
            <li>Binary (e.g., 0b1111)</li>
          </ul>
        </li>
      </ul>

      <h3 className="text-xl font-semibold">Integer Constants</h3>
      <ul className="list-disc list-inside leading-relaxed">
        <li><code>PHP_INT_MAX</code></li>
        <li><code>PHP_INT_MIN</code></li>
        <li><code>PHP_INT_SIZE</code></li>
      </ul>

      {/* Floats */}
      <h2 className="text-2xl font-bold">PHP Floats</h2>

      <p className="leading-relaxed">
        A float is a number with a decimal point or in exponential form.
      </p>

      <h3 className="text-xl font-semibold">Example — Check for Float</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`$x = 10.365;
var_dump(is_float($x));`}
      </pre>

      <h3 className="text-xl font-semibold">Float Constants</h3>
      <ul className="list-disc list-inside leading-relaxed">
        <li><code>PHP_FLOAT_MAX</code></li>
        <li><code>PHP_FLOAT_MIN</code></li>
        <li><code>PHP_FLOAT_DIG</code></li>
        <li><code>PHP_FLOAT_EPSILON</code></li>
      </ul>

      {/* Infinity */}
      <h2 className="text-2xl font-bold">PHP Infinity</h2>

      <p className="leading-relaxed">
        A number becomes infinite when it exceeds the maximum float value.
      </p>

      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`$x = 1.9e411;
var_dump(is_infinite($x));`}
      </pre>

      {/* NaN */}
      <h2 className="text-2xl font-bold">PHP NaN</h2>

      <p className="leading-relaxed">
        NaN stands for <strong>Not a Number</strong>.  
        It occurs during invalid mathematical operations.
      </p>

      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`$x = acos(8);
var_dump($x);`}
      </pre>

      {/* Numerical Strings */}
      <h2 className="text-2xl font-bold">PHP Numerical Strings</h2>

      <p className="leading-relaxed">
        Use <code>is_numeric()</code> to check numeric values or numeric strings.
      </p>

      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`$x = 5985;
var_dump(is_numeric($x));

$x = "5985";
var_dump(is_numeric($x));

$x = "59.85" + 100;
var_dump(is_numeric($x));

$x = "Hello";
var_dump(is_numeric($x));`}
      </pre>

      {/* Casting */}
      <h2 className="text-2xl font-bold">Casting Strings and Floats to Integers</h2>

      <p className="leading-relaxed">
        Use <code>(int)</code>, <code>(integer)</code>, or <code>intval()</code> to cast.
      </p>

      <h3 className="text-xl font-semibold">Example — Casting</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`// Cast float to int
$x = 23465.768;
$int_cast = (int)$x;
echo $int_cast;

echo "<br>";

// Cast string to int
$x = "23465.768";
$int_cast = (int)$x;
echo $int_cast;`}
      </pre>

    </div>
  );
};

export default PhpNumbers;
