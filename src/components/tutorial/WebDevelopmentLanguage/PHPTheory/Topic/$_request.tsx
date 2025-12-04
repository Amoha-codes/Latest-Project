import React from "react";

const PhpRequest: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        PHP - $_REQUEST Superglobal
      </h1>

      <p className="leading-relaxed">
        <code>$_REQUEST</code> is a PHP superglobal variable that stores data from 
        <code> $_GET</code>, <code>$_POST</code>, and <code>$_COOKIE</code>.  
        It allows you to access form inputs or query string values in a simple unified way.
      </p>

      {/* Basic Usage */}
      <h2 className="text-2xl font-bold">Basic Usage</h2>

      <p>
        You can access submitted form data or URL parameters using:
      </p>



      {/* Using REQUEST With POST */}
      <h2 className="text-2xl font-bold mt-10">Using $_REQUEST With POST Requests</h2>

      <p>
        A POST request usually comes from an HTML form. Example:
      </p>

      <h3 className="text-xl font-semibold">HTML Form</h3>

      <pre className="bg-gray-100 text-black p-4 rounded-lg overflow-auto">
{`<html>
<body>

<form method="post" action="demo_request.php">
  Name: <input type="text" name="fname">
  <input type="submit">
</form>

</body>
</html>`}
      </pre>

      <p>
        In the PHP file, you can collect the submitted form value:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`$name = $_REQUEST['fname'];
echo $name;`}
      </pre>

      {/* Form + PHP in the Same File */}
      <h3 className="text-xl font-semibold mt-6">Example: Form + PHP in Same File</h3>

      <pre className="bg-gray-100 text-black p-4 rounded-lg overflow-auto">
{`<html>
<body>

<form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
  Name: <input type="text" name="fname">
  <input type="submit">
</form>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = htmlspecialchars($_REQUEST['fname']);
  if (empty($name)) {
    echo "Name is empty";
  } else {
    echo $name;
  }
}
?>

</body>
</html>`}
      </pre>

      {/* Using REQUEST With GET */}
      <h2 className="text-2xl font-bold mt-10">Using $_REQUEST With GET Requests</h2>

      <p>
        GET requests can come from forms or from query strings in URLs.
      </p>

      <h3 className="text-xl font-semibold">HTML Link With Query String</h3>

      <pre className="bg-gray-100 text-black p-4 rounded-lg overflow-auto">
{`<html>
<body>

<a href="demo_phpfile.php?subject=PHP&web=W3schools.com">Test $_GET</a>

</body>
</html>`}
      </pre>

      <p>
        When clicked, the query string is sent to <code>demo_phpfile.php</code>.
      </p>

      <h3 className="text-xl font-semibold mt-6">PHP File Example</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<html>
<body>

<?php
echo "Study " . $_REQUEST['subject'] . " at " . $_REQUEST['web'];
?>

</body>
</html>`}
      </pre>

      <p className="leading-relaxed">
        <strong>Summary:</strong>  
        <code>$_REQUEST</code> makes it easy to access data from any request method, but in real-world applications, developers usually prefer <code>$_GET</code> and <code>$_POST</code> separately for security and clarity.
      </p>

    </div>
  );
};

export default PhpRequest;
