import React from "react";

const PhpValidateEmailUrl: React.FC = () => {
  return (
    <div className="mt-20 space-y-10">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        PHP Forms - Validate E-mail and URL
      </h1>

      <p className="leading-relaxed">
        This chapter explains how to validate the Name, E-mail, and Website fields in a PHP form.
        Validation ensures the submitted data is formatted correctly and safe to use.
      </p>

      {/* Validate Name */}
      <h2 className="text-2xl font-bold mt-8">PHP - Validate Name</h2>

      <p>
        Use <code>preg_match()</code> to verify the name contains only letters, dashes, apostrophes,
        and whitespace.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`$name = test_input($_POST["name"]);
if (!preg_match("/^[a-zA-Z-' ]*$/", $name)) {
  $nameErr = "Only letters and white space allowed";
}`}
      </pre>

      <p>
        The <code>preg_match()</code> function checks whether the input matches the given pattern.
      </p>

      {/* Validate Email */}
      <h2 className="text-2xl font-bold mt-10">PHP - Validate E-mail</h2>

      <p>
        PHP’s <code>filter_var()</code> function is the safest way to validate an email address.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`$email = test_input($_POST["email"]);
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  $emailErr = "Invalid email format";
}`}
      </pre>

      {/* Validate URL */}
      <h2 className="text-2xl font-bold mt-10">PHP - Validate URL</h2>

      <p>
        Use a regular expression to ensure the URL format is valid.  
        This pattern supports <strong>http</strong>, <strong>https</strong>, <strong>ftp</strong>, and <strong>www</strong>.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`$website = test_input($_POST["website"]);
if (!preg_match("/\\b(?:(?:https?|ftp):\\/\\/|www\\.)[-a-z0-9+&@#\\/%?=~_|!:,.;]*[-a-z0-9+&@#\\/%=~_|]/i", $website)) {
  $websiteErr = "Invalid URL";
}`}
      </pre>

      {/* Combined Script */}
      <h2 className="text-2xl font-bold mt-12">PHP - Validate Name, E-mail, and URL</h2>

      <p>
        Here is the full validation script with all required checks included:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`// define variables and set to empty values
$nameErr = $emailErr = $genderErr = $websiteErr = "";
$name = $email = $gender = $comment = $website = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

  // Validate Name
  if (empty($_POST["name"])) {
    $nameErr = "Name is required";
  } else {
    $name = test_input($_POST["name"]);
    if (!preg_match("/^[a-zA-Z-' ]*$/", $name)) {
      $nameErr = "Only letters and white space allowed";
    }
  }

  // Validate E-mail
  if (empty($_POST["email"])) {
    $emailErr = "Email is required";
  } else {
    $email = test_input($_POST["email"]);
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $emailErr = "Invalid email format";
    }
  }

  // Validate Website
  if (empty($_POST["website"])) {
    $website = "";
  } else {
    $website = test_input($_POST["website"]);
    if (!preg_match("/\\b(?:(?:https?|ftp):\\/\\/|www\\.)[-a-z0-9+&@#\\/%?=~_|!:,.;]*[-a-z0-9+&@#\\/%=~_|]/i", $website)) {
      $websiteErr = "Invalid URL";
    }
  }

  // Comment (optional)
  if (empty($_POST["comment"])) {
    $comment = "";
  } else {
    $comment = test_input($_POST["comment"]);
  }

  // Gender
  if (empty($_POST["gender"])) {
    $genderErr = "Gender is required";
  } else {
    $gender = test_input($_POST["gender"]);
  }
}`}
      </pre>

      <p className="text-yellow-700 font-semibold mt-6">
        Next: You will learn how to show error messages and repopulate form fields after submission.
      </p>

    </div>
  );
};

export default PhpValidateEmailUrl;
