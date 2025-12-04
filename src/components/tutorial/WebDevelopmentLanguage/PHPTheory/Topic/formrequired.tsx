import React from "react";

const PhpFormRequiredFields: React.FC = () => {
  return (
    <div className="mt-20 space-y-10">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        PHP Forms - Required Fields
      </h1>

      <p className="leading-relaxed">
        This chapter explains how to mark specific form inputs as required and how to
        display error messages when users do not enter the required information.
      </p>

      {/* Validation Rules */}
      <h2 className="text-2xl font-bold mt-6">PHP - Required Fields</h2>

      <p>
        From the validation rules, the <strong>Name</strong>, <strong>E-mail</strong>, and
        <strong> Gender</strong> fields are required. Users must fill them out before submitting the form.
      </p>

      <div className="overflow-x-auto mt-4">
        <table className="min-w-full border border-gray-400 text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-3 py-2">Field</th>
              <th className="border px-3 py-2">Validation Rules</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border px-3 py-2">Name</td><td className="border px-3 py-2">Required; letters & whitespace only</td></tr>
            <tr><td className="border px-3 py-2">E-mail</td><td className="border px-3 py-2">Required; must contain a valid email format</td></tr>
            <tr><td className="border px-3 py-2">Website</td><td className="border px-3 py-2">Optional; if present must be a valid URL</td></tr>
            <tr><td className="border px-3 py-2">Comment</td><td className="border px-3 py-2">Optional</td></tr>
            <tr><td className="border px-3 py-2">Gender</td><td className="border px-3 py-2">Required</td></tr>
          </tbody>
        </table>
      </div>

      {/* Validation Code */}
      <h2 className="text-2xl font-bold mt-10">Validation Logic</h2>

      <p>
        Below is the updated PHP validation script with error variables:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`// define variables and set to empty values
$nameErr = $emailErr = $genderErr = $websiteErr = "";
$name = $email = $gender = $comment = $website = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST["name"])) {
    $nameErr = "Name is required";
  } else {
    $name = test_input($_POST["name"]);
  }

  if (empty($_POST["email"])) {
    $emailErr = "Email is required";
  } else {
    $email = test_input($_POST["email"]);
  }

  if (empty($_POST["website"])) {
    $website = "";
  } else {
    $website = test_input($_POST["website"]);
  }

  if (empty($_POST["comment"])) {
    $comment = "";
  } else {
    $comment = test_input($_POST["comment"]);
  }

  if (empty($_POST["gender"])) {
    $genderErr = "Gender is required";
  } else {
    $gender = test_input($_POST["gender"]);
  }
}`}
      </pre>

      {/* Display Error Messages */}
      <h2 className="text-2xl font-bold mt-10">Displaying Error Messages</h2>

      <p>
        Add a small error message next to each required field inside the HTML form.
        This message appears when the user submits invalid or empty data.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">

Name: <input type="text" name="name">
<span class="error">* <?php echo $nameErr; ?></span>
<br><br>

E-mail: <input type="text" name="email">
<span class="error">* <?php echo $emailErr; ?></span>
<br><br>

Website: <input type="text" name="website">
<span class="error"><?php echo $websiteErr; ?></span>
<br><br>

Comment: <textarea name="comment" rows="5" cols="40"></textarea>
<br><br>

Gender:
<input type="radio" name="gender" value="female">Female
<input type="radio" name="gender" value="male">Male
<input type="radio" name="gender" value="other">Other
<span class="error">* <?php echo $genderErr; ?></span>
<br><br>

<input type="submit" name="submit" value="Submit">

</form>`}
      </pre>

      {/* Next Step */}
      <p className="text-yellow-700 font-semibold mt-6">
        Next: You will validate whether Name contains only letters/whitespace,
        Email has correct format, and Website is a valid URL.
      </p>

    </div>
  );
};

export default PhpFormRequiredFields;
