import React from "react";

const PhpCompleteFormExample: React.FC = () => {
  return (
    <div className="mt-20 space-y-10">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        PHP Complete Form Example
      </h1>

      <p className="leading-relaxed">
        This chapter shows how to keep the values inside form fields after submitting the form.
        This technique is called <strong>sticky form fields</strong>.
      </p>

      {/* Keep values in form */}
      <h2 className="text-2xl font-bold mt-8">PHP - Keep Values in Form Fields</h2>

      <p>
        To keep the input values after the user submits the form, insert PHP scripts inside the
        <code>value</code> attribute or inside the <code>&lt;textarea&gt;</code> tag.
      </p>

      <h3 className="text-xl font-semibold mt-4">Text Fields</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`Name: <input type="text" name="name" value="<?php echo $name;?>">

E-mail: <input type="text" name="email" value="<?php echo $email;?>">

Website: <input type="text" name="website" value="<?php echo $website;?>">`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Textarea Field</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`Comment: <textarea name="comment" rows="5" cols="40"><?php echo $comment;?></textarea>`}
      </pre>

      {/* Radio Buttons */}
      <h2 className="text-2xl font-bold mt-10">Keeping Selected Radio Buttons</h2>

      <p>
        For radio buttons, you must control the <code>checked</code> attribute based on the
        previously selected value.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`Gender:
<input type="radio" name="gender"
<?php if (isset($gender) && $gender=="female") echo "checked";?>
value="female">Female

<input type="radio" name="gender"
<?php if (isset($gender) && $gender=="male") echo "checked";?>
value="male">Male

<input type="radio" name="gender"
<?php if (isset($gender) && $gender=="other") echo "checked";?>
value="other">Other`}
      </pre>

      {/* Complete Form Example */}
      <h2 className="text-3xl font-bold mt-12">PHP - Complete Form Example</h2>

      <p>
        Below is the full code for the PHP Form Validation example, including:
      </p>

      <ul className="list-disc ml-8 space-y-2">
        <li>Required fields</li>
        <li>Validation (name, email, URL)</li>
        <li>Error messages</li>
        <li>Sticky form values</li>
      </ul>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<?php
// define variables and set to empty values
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

  // Comment
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
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>


<h2>PHP Form Validation Example</h2>
<p><span class="error">* required field</span></p>

<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">

Name:
<input type="text" name="name" value="<?php echo $name;?>">
<span class="error">* <?php echo $nameErr;?></span>
<br><br>

E-mail:
<input type="text" name="email" value="<?php echo $email;?>">
<span class="error">* <?php echo $emailErr;?></span>
<br><br>

Website:
<input type="text" name="website" value="<?php echo $website;?>">
<span class="error"><?php echo $websiteErr;?></span>
<br><br>

Comment:
<textarea name="comment" rows="5" cols="40"><?php echo $comment;?></textarea>
<br><br>

Gender:
<input type="radio" name="gender" value="female"
<?php if (isset($gender) && $gender=="female") echo "checked";?>>Female

<input type="radio" name="gender" value="male"
<?php if (isset($gender) && $gender=="male") echo "checked";?>>Male

<input type="radio" name="gender" value="other"
<?php if (isset($gender) && $gender=="other") echo "checked";?>>Other

<span class="error">* <?php echo $genderErr;?></span>
<br><br>

<input type="submit" name="submit" value="Submit">

</form>`}
      </pre>

      <p className="text-green-700 font-semibold mt-6">
        You now have a fully working PHP form validation system with sticky fields!
      </p>

    </div>
  );
};

export default PhpCompleteFormExample;
