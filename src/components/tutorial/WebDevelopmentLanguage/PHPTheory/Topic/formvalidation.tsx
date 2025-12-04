import React from "react";

const PhpFormValidation: React.FC = () => {
  return (
    <div className="mt-20 space-y-10">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        PHP Form Validation
      </h1>

      <p className="leading-relaxed">
        PHP form validation is essential for protecting your application from
        malicious input. These lessons explain how to validate user data securely.
      </p>

      {/* Security Note */}
      <p className="text-red-600 font-semibold">
        ⚠️ Always think SECURITY when processing PHP forms!
      </p>

      {/* Form Description */}
      <h2 className="text-2xl font-bold mt-8">Form Structure</h2>

      <p>
        The form we are working with contains required and optional fields:
        text inputs, radio buttons, and a submit button.
      </p>

      {/* Validation Rules Table */}
      <h3 className="text-xl font-semibold mt-6">Validation Rules</h3>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-400 text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-3 py-2">Field</th>
              <th className="border px-3 py-2">Validation Rules</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-3 py-2">Name</td>
              <td className="border px-3 py-2">
                Required. Must contain only letters and whitespace.
              </td>
            </tr>

            <tr>
              <td className="border px-3 py-2">E-mail</td>
              <td className="border px-3 py-2">
                Required. Must be a valid email address.
              </td>
            </tr>

            <tr>
              <td className="border px-3 py-2">Website</td>
              <td className="border px-3 py-2">
                Optional. If provided, must be a valid URL.
              </td>
            </tr>

            <tr>
              <td className="border px-3 py-2">Comment</td>
              <td className="border px-3 py-2">Optional. Multi-line textarea.</td>
            </tr>

            <tr>
              <td className="border px-3 py-2">Gender</td>
              <td className="border px-3 py-2">Required. Must select one.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* HTML Input Fields */}
      <h2 className="text-2xl font-bold mt-10">HTML Form Inputs</h2>

      <h3 className="text-xl font-semibold">Text Fields</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`Name: <input type="text" name="name">
E-mail: <input type="text" name="email">
Website: <input type="text" name="website">
Comment: <textarea name="comment" rows="5" cols="40"></textarea>`}
      </pre>

      {/* Radio Buttons */}
      <h3 className="text-xl font-semibold mt-6">Radio Buttons</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`Gender:
<input type="radio" name="gender" value="female">Female
<input type="radio" name="gender" value="male">Male
<input type="radio" name="gender" value="other">Other`}
      </pre>

      {/* Form Element */}
      <h2 className="text-2xl font-bold mt-10">Form Element</h2>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">`}
      </pre>

      {/* Explanation of PHP_SELF */}
      <h3 className="text-xl font-semibold mt-6">What is $_SERVER["PHP_SELF"]?</h3>

      <p>
        <code>$_SERVER["PHP_SELF"]</code> returns the filename of the current script.
        It sends form data to the same page so validation errors appear on the same page.
      </p>

      <h3 className="text-xl font-semibold mt-6">Why Use htmlspecialchars()?</h3>

      <p>
        <code>htmlspecialchars()</code> converts special characters like <code>&lt;</code> and
        <code>&gt;</code> into HTML entities to prevent XSS (Cross-Site Scripting).
      </p>

      {/* Warning Example */}
      <h2 className="text-2xl font-bold mt-10 text-red-600">⚠️ Warning About PHP_SELF!</h2>

      <p>
        Without <code>htmlspecialchars()</code>, hackers can inject malicious JavaScript into the URL.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`http://example.com/test_form.php/%22%3E%3Cscript%3Ealert('hacked')%3C/script%3E`}
      </pre>

      <p>
        This would cause the browser to execute the injected script unless escaped with
        <code>htmlspecialchars()</code>.
      </p>

      {/* Safe Form Code */}
      <h3 className="text-xl font-semibold mt-6">Safe Form Code</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">`}
      </pre>

      {/* Validate Form Data */}
      <h2 className="text-2xl font-bold mt-10">Validate Form Data With PHP</h2>

      <p>
        Before using user input, sanitize it first using a function like <code>test_input()</code>.
      </p>

      <ul className="list-disc ml-8 space-y-2">
        <li>Remove extra spaces (<code>trim()</code>)</li>
        <li>Remove backslashes (<code>stripslashes()</code>)</li>
        <li>Convert special chars (<code>htmlspecialchars()</code>)</li>
      </ul>

      {/* test_input function example */}
      <h3 className="text-xl font-semibold mt-6">Example Validation Script</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`// define variables and set to empty values
$name = $email = $gender = $comment = $website = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = test_input($_POST["name"]);
  $email = test_input($_POST["email"]);
  $website = test_input($_POST["website"]);
  $comment = test_input($_POST["comment"]);
  $gender = test_input($_POST["gender"]);
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}`}
      </pre>

      <p>
        <code>$_SERVER["REQUEST_METHOD"]</code> checks whether the form was submitted.  
        If it was not submitted, form fields remain blank.
      </p>

      <p className="text-yellow-600 font-semibold">
        Next steps: Make fields required and display validation error messages.
      </p>

    </div>
  );
};

export default PhpFormValidation;
