import React from "react";

const PhpEchoPrint: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        PHP echo and print Statements
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        In PHP, there are two basic ways to output data to the screen:
        <strong> echo</strong> and <strong>print</strong>.
      </p>

      <p className="leading-relaxed">Both are used to display text, variables, and HTML.</p>

      <h2 className="text-2xl font-bold">Differences Between echo and print</h2>

      <ul className="list-disc list-inside leading-relaxed space-y-1">
        <li><strong>echo</strong> has no return value</li>
        <li><strong>print</strong> returns <code>1</code> (so it can be used in expressions)</li>
        <li><strong>echo</strong> can take multiple parameters</li>
        <li><strong>print</strong> can take only one argument</li>
        <li><strong>echo</strong> is slightly faster than print</li>
      </ul>

      {/* echo Statement */}
      <h2 className="text-2xl font-bold mt-10">The PHP echo Statement</h2>

      <p className="leading-relaxed">
        The <code>echo</code> statement can be used with or without parentheses:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black whitespace-pre-wrap">
{`echo "Hello";
// same as:
echo("Hello");`}
      </pre>

      {/* Display Text */}
      <h3 className="text-xl font-semibold">Display Text</h3>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black whitespace-pre-wrap">
{`echo "<h2>PHP is Fun!</h2>";
echo "Hello world!<br>";
echo "I'm about to learn PHP!<br>";
echo "This ", "string ", "was ", "made ", "with multiple parameters.";`}
      </pre>

      {/* Display Variables */}
      <h3 className="text-xl font-semibold">Display Variables</h3>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black whitespace-pre-wrap">
{`$txt1 = "Learn PHP";
$txt2 = "W3Schools.com";

echo "<h2>$txt1</h2>";
echo "<p>Study PHP at $txt2</p>";`}
      </pre>

      {/* Single Quotes */}
      <h3 className="text-xl font-semibold">Using Single Quotes</h3>

      <p className="leading-relaxed">
        With double quotes, variables are parsed automatically.  
        With single quotes, you must concatenate variables using <code>.</code>.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black whitespace-pre-wrap">
{`$txt1 = "Learn PHP";
$txt2 = "W3Schools.com";

echo '<h2>' . $txt1 . '</h2>';
echo '<p>Study PHP at ' . $txt2 . '</p>';`}
      </pre>

      {/* print Statement */}
      <h2 className="text-2xl font-bold mt-10">The PHP print Statement</h2>

      <p className="leading-relaxed">
        The <code>print</code> statement works like <code>echo</code>, but can only take one argument.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black whitespace-pre-wrap">
{`print "Hello";
// same as:
print("Hello");`}
      </pre>

      {/* print display text */}
      <h3 className="text-xl font-semibold">Display Text with print</h3>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black whitespace-pre-wrap">
{`print "<h2>PHP is Fun!</h2>";
print "Hello world!<br>";
print "I'm about to learn PHP!";`}
      </pre>

      {/* print variables */}
      <h3 className="text-xl font-semibold">Display Variables with print</h3>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black whitespace-pre-wrap">
{`$txt1 = "Learn PHP";
$txt2 = "W3Schools.com";

print "<h2>$txt1</h2>";
print "<p>Study PHP at $txt2</p>";`}
      </pre>

      {/* print single quotes */}
      <h3 className="text-xl font-semibold">Using Single Quotes with print</h3>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black whitespace-pre-wrap">
{`$txt1 = "Learn PHP";
$txt2 = "W3Schools.com";

print '<h2>' . $txt1 . '</h2>';
print '<p>Study PHP at ' . $txt2 . '</p>';`}
      </pre>
    </div>
  );
};

export default PhpEchoPrint;
