import React from "react";

const PhpSyntax: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        PHP Syntax
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        A PHP script is executed on the server, and the plain HTML result is sent back to the browser.
      </p>

      {/* Basic PHP Syntax */}
      <h2 className="text-2xl font-bold">Basic PHP Syntax</h2>

      <p className="leading-relaxed">
        A PHP script can be placed anywhere inside an HTML document.
      </p>

      <p className="leading-relaxed">
        A PHP script starts with <code>&lt;?php</code> and ends with <code>?&gt;</code>:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`<?php
// PHP code goes here
?>`}
      </pre>

      <p className="leading-relaxed">
        The default file extension for PHP files is <strong>.php</strong>.
      </p>

      <p className="leading-relaxed">
        PHP files usually contain a mix of HTML and PHP code.
      </p>

      {/* Example */}
      <h3 className="text-xl font-semibold">Example</h3>
      <p className="leading-relaxed mb-2">A simple PHP file with HTML and PHP:</p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`<!DOCTYPE html>
<html>
<body>

<h1>My first PHP page</h1>

<?php
echo "Hello World!";
?>

</body>
</html>`}
      </pre>

      <p className="leading-relaxed">
        <strong>Note:</strong> PHP statements end with a semicolon (<code>;</code>).
      </p>

      {/* Case Sensitivity */}
      <h2 className="text-2xl font-bold">PHP Case Sensitivity</h2>

      <p className="leading-relaxed">
        PHP keywords, function names, and class names are <strong>not case-sensitive</strong>.
      </p>

      <p className="leading-relaxed">All of the following are valid:</p>

      {/* Example */}
      <h3 className="text-xl font-semibold">Example</h3>
      <p className="leading-relaxed">ECHO is the same as echo:</p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`<!DOCTYPE html>
<html>
<body>

<?php
ECHO "Hello World!<br>";
echo "Hello World!<br>";
EcHo "Hello World!<br>";
?>

</body>
</html>`}
      </pre>

      <p className="leading-relaxed">
        <strong>However:</strong> variable names in PHP <strong>are case-sensitive</strong>.
      </p>

      <p className="leading-relaxed">
        The variables <code>$color</code>, <code>$COLOR</code>, and <code>$coLOR</code> are all treated as different variables.
      </p>

      {/* Example */}
      <h3 className="text-xl font-semibold">Example</h3>
      <p className="leading-relaxed">$COLOR is not the same as $color:</p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`<!DOCTYPE html>
<html>
<body>

<?php
$color = "red";
echo "My car is " . $color . "<br>";
echo "My house is " . $COLOR . "<br>";
echo "My boat is " . $coLOR . "<br>";
?>

</body>
</html>`}
      </pre>
    </div>
  );
};

export default PhpSyntax;
