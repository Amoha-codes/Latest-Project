import React from "react";

const PhpPost: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        PHP - $_POST Superglobal
      </h1>

      <p className="leading-relaxed">
        <code>$_POST</code> is a PHP superglobal variable that stores data sent 
        through the HTTP <strong>POST</strong> method.  
        POST requests most commonly come from:
      </p>

      <ul className="list-disc ml-6">
        <li>HTML forms</li>
        <li>JavaScript HTTP (AJAX) requests</li>
      </ul>

      {/* HTML FORM POST */}
      <h2 className="text-2xl font-bold mt-10">Using $_POST With HTML Forms</h2>

      <p>A basic HTML form that submits data using POST:</p>

      <pre className="bg-gray-100 text-black p-4 rounded-lg overflow-auto">
{`<html>
<body>

<form method="POST" action="demo_request.php">
  Name: <input type="text" name="fname">
  <input type="submit">
</form>

</body>
</html>`}
      </pre>

      <p>In the PHP file, you retrieve the value using:</p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`$name = $_POST['fname'];
echo $name;`}
      </pre>

      {/* Form + PHP in Same File */}
      <h3 className="text-xl font-semibold mt-6">
        Example: Form + PHP in the Same File
      </h3>

      <pre className="bg-gray-100 text-black p-4 rounded-lg overflow-auto">
{`<html>
<body>

<form method="POST" action="<?php echo $_SERVER['PHP_SELF']; ?>">
  Name: <input type="text" name="fname">
  <input type="submit">
</form>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = htmlspecialchars($_POST['fname']);
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

      {/* JavaScript HTTP POST Requests */}
      <h2 className="text-2xl font-bold mt-10">
        Using $_POST With JavaScript HTTP Requests
      </h2>

      <p>
        JavaScript can also send POST requests, such as through 
        <code> XMLHttpRequest</code> or <code>fetch()</code>.  
        Here is an example using <code>XMLHttpRequest</code>:
      </p>

      <h3 className="text-xl font-semibold">JavaScript Function Sending POST</h3>

      <pre className="bg-gray-100 text-black p-4 rounded-lg overflow-auto">
{`function myfunction() {
  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "demo_phpfile.php");
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.onload = function() {
    document.getElementById("demo").innerHTML = this.responseText;
  }
  xhttp.send("fname=Mary");
}`}
      </pre>

      <p>This function:</p>

      <ul className="list-disc ml-6">
        <li>Initializes a POST request</li>
        <li>Sets the proper request header</li>
        <li>Sends the variable <code>fname=Mary</code></li>
        <li>Displays the response in an element with ID <code>demo</code></li>
      </ul>

      {/* Full HTML + JS Example */}
      <h3 className="text-xl font-semibold mt-6">
        Full HTML + JavaScript Example
      </h3>

      <pre className="bg-gray-100 text-black p-4 rounded-lg overflow-auto">
{`<html>
<script>
function myfunction() {
  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "demo_ajax.php");
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.onload = function() {
    document.getElementById("demo").innerHTML = this.responseText;
  }
  xhttp.send("fname=Mary");
}
</script>

<body>

<button onclick="myfunction()">Click me!</button>

<h1 id="demo"></h1>

</body>
</html>`}
      </pre>

      {/* PHP Receiver */}
      <h3 className="text-xl font-semibold mt-6">
        Receiving POST Data in PHP
      </h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`$name = $_POST['fname'];
echo $name;`}
      </pre>

      <p className="leading-relaxed">
        This PHP script simply outputs <strong>Mary</strong> (the value sent from JavaScript).
      </p>
    </div>
  );
};

export default PhpPost;
