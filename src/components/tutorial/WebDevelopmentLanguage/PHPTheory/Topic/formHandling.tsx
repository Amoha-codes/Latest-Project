import React from "react";

const PhpFormHandling: React.FC = () => {
  return (
    <div className="mt-20 space-y-10">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        PHP Form Handling
      </h1>

      <p className="leading-relaxed">
        PHP uses the superglobals <code>$_GET</code> and <code>$_POST</code> to collect form data.
        These arrays contain key/value pairs sent from HTML forms.
      </p>

      {/* Section: Simple HTML Form */}
      <h2 className="text-2xl font-bold mt-6">PHP - A Simple HTML Form</h2>

      <p>A basic HTML form with two input fields and a submit button:</p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<html>
<body>

<form action="welcome.php" method="POST">
Name: <input type="text" name="name"><br>
E-mail: <input type="text" name="email"><br>
<input type="submit">
</form>

</body>
</html>`}
      </pre>

      <p>
        When the user submits this form, the data is sent to <code>welcome.php</code> using the
        POST method.
      </p>

      {/* welcome.php */}
      <h3 className="text-xl font-semibold mt-6">PHP Processing File (welcome.php)</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<html>
<body>

Welcome <?php echo $_POST["name"]; ?><br>
Your email address is: <?php echo $_POST["email"]; ?>

</body>
</html>`}
      </pre>

      <p>
        Output might look like this:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`Welcome John
Your email address is john.doe@example.com`}
      </pre>

      {/* GET Example */}
      <h2 className="text-2xl font-bold mt-10">Same Form Using GET</h2>

      <p>
        The same result can be achieved using the HTTP GET method by changing the form method:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<html>
<body>

<form action="welcome_get.php" method="GET">
Name: <input type="text" name="name"><br>
E-mail: <input type="text" name="email"><br>
<input type="submit">
</form>

</body>
</html>`}
      </pre>

      {/* welcome_get.php */}
      <h3 className="text-xl font-semibold mt-6">PHP GET Processing File (welcome_get.php)</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<html>
<body>

Welcome <?php echo $_GET["name"]; ?><br>
Your email address is: <?php echo $_GET["email"]; ?>

</body>
</html>`}
      </pre>

      <p className="text-yellow-700 font-semibold">
        ⚠️ Note: These examples do NOT include validation. Proper validation is necessary to protect
        your script from malicious data.
      </p>

      {/* GET vs POST */}
      <h2 className="text-3xl font-bold mt-12">GET vs POST</h2>

      <p>
        Both GET and POST create arrays of key/value pairs where the keys are form field names and
        values are user input.
      </p>

      <ul className="list-disc ml-8 space-y-2">
        <li><code>$_GET</code> — variables sent in the URL</li>
        <li><code>$_POST</code> — variables sent in the request body</li>
      </ul>

      {/* When to Use GET */}
      <h2 className="text-2xl font-bold mt-8">When to Use GET?</h2>

      <ul className="list-disc ml-8 space-y-2">
        <li>Data is visible in the URL</li>
        <li>URL can be bookmarked</li>
        <li>Suitable for non-sensitive data</li>
        <li>Limited to ~2000 characters</li>
      </ul>

      <p className="text-red-600 font-semibold">
        ❌ Never use GET for passwords or sensitive data!
      </p>

      {/* When to Use POST */}
      <h2 className="text-2xl font-bold mt-8">When to Use POST?</h2>

      <ul className="list-disc ml-8 space-y-2">
        <li>Data is hidden inside the HTTP request body</li>
        <li>No size limitations</li>
        <li>Supports file uploads</li>
        <li>More secure than GET</li>
      </ul>

      <p>
        However, POST requests cannot be bookmarked because the data is not visible in the URL.
      </p>

    </div>
  );
};

export default PhpFormHandling;
