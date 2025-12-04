import React from "react";

const PhpGet: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        PHP - $_GET Superglobal
      </h1>

      <p className="leading-relaxed">
        <code>$_GET</code> is a superglobal array in PHP that stores variables passed
        through the HTTPs <strong>GET</strong> method.  
        GET data is visible in the URL and is commonly used for sending small amounts of data.
      </p>

      {/* Section: Ways to Send Data */}
      <h2 className="text-2xl font-bold">Ways to Send Data Using GET</h2>

      <ul className="list-disc ml-8 space-y-2">
        <li>Query strings in the URL</li>
        <li>HTML forms with <code>method="GET"</code></li>
      </ul>

      {/* Query String Section */}
      <h2 className="text-2xl font-bold mt-10">Query String in the URL</h2>

      <p>
        A query string is added at the end of a URL after a <code>?</code> symbol.
        Here is an example link with GET parameters:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<a href="demo_phpfile.php?subject=PHP&web=W3schools.com">Test $GET</a>`}
      </pre>

      <p>The query string contains two key/value pairs:</p>

      <ul className="list-disc ml-8 space-y-2">
        <li><code>subject = PHP</code></li>
        <li><code>web = W3schools.com</code></li>
      </ul>

      <p>You can access them in PHP like this:</p>

      {/* PHP Example 1 */}
      <h3 className="text-xl font-semibold mt-6">Example: Reading GET Data</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<html>
<body>

<?php
echo "Study " . $_GET['subject'] . " at " . $_GET['web'];
?>

</body>
</html>`}
      </pre>

      {/* HTML Forms with GET */}
      <h2 className="text-2xl font-bold mt-10">Using $_GET in HTML Forms</h2>

      <p>
        A form sends data using the GET method when its <code>method</code> attribute is set to 
        <code>"GET"</code>.
      </p>

      <h3 className="text-xl font-semibold mt-4">HTML Form Example</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<html>
<body>

<form action="welcome_get.php" method="GET">
  Name: <input type="text" name="name">
  E-mail: <input type="text" name="email">
  <input type="submit">
</form>

</body>
</html>`}
      </pre>

      <p>When submitted, the URL becomes:</p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`welcome_get.php?name=John&email=john@example.com`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">PHP Code to Read Form Data</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<html>
<body>

Welcome <?php echo $_GET["name"]; ?><br>
Your email address is: <?php echo $_GET["email"]; ?>

</body>
</html>`}
      </pre>

    </div>
  );
};

export default PhpGet;
