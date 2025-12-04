import React from "react";

const HtmlInputFormAttributes: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        HTML Input <code>form*</code> Attributes
      </h1>

      <h2 className="text-2xl font-semibold">The form Attribute</h2>
      <p className="leading-relaxed">
        The <code>form</code> attribute specifies the form the <code>&lt;input&gt;</code> element belongs to.
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<form action="/action_page.php" id="form1">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <input type="submit" value="Submit">
</form>

<label for="lname">Last name:</label>
<input type="text" id="lname" name="lname" form="form1">`}
      </pre>

      <h2 className="text-2xl font-semibold">The formaction Attribute</h2>
      <p className="leading-relaxed">
        The <code>formaction</code> attribute specifies the URL that will process the input when the form is submitted. Overrides the form's <code>action</code> attribute.
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<form action="/action_page.php">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname"><br><br>
  <input type="submit" value="Submit">
  <input type="submit" formaction="/action_page2.php" value="Submit as Admin">
</form>`}
      </pre>

      <h2 className="text-2xl font-semibold">The formenctype Attribute</h2>
      <p className="leading-relaxed">
        The <code>formenctype</code> attribute specifies how the form-data should be encoded when submitted (only for <code>method="post"</code>). Overrides the form's <code>enctype</code>.
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<form action="/action_page_binary.asp" method="post">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <input type="submit" value="Submit">
  <input type="submit" formenctype="multipart/form-data" value="Submit as Multipart/form-data">
</form>`}
      </pre>

      <h2 className="text-2xl font-semibold">The formmethod Attribute</h2>
      <p className="leading-relaxed">
        The <code>formmethod</code> attribute defines the HTTP method for sending form-data to the action URL. Overrides the form's <code>method</code> attribute.
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<form action="/action_page.php" method="get">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname"><br><br>
  <input type="submit" value="Submit using GET">
  <input type="submit" formmethod="post" value="Submit using POST">
</form>`}
      </pre>

      <h2 className="text-2xl font-semibold">The formtarget Attribute</h2>
      <p className="leading-relaxed">
        The <code>formtarget</code> attribute specifies where to display the response after submitting the form. Overrides the form's <code>target</code> attribute.
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<form action="/action_page.php">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname"><br><br>
  <input type="submit" value="Submit">
  <input type="submit" formtarget="_blank" value="Submit to a new window/tab">
</form>`}
      </pre>

      <h2 className="text-2xl font-semibold">The formnovalidate Attribute</h2>
      <p className="leading-relaxed">
        The <code>formnovalidate</code> attribute specifies that an <code>&lt;input&gt;</code> element should not be validated when submitted. Overrides the form's <code>novalidate</code> attribute.
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<form action="/action_page.php">
  <label for="email">Enter your email:</label>
  <input type="email" id="email" name="email"><br><br>
  <input type="submit" value="Submit">
  <input type="submit" formnovalidate="formnovalidate" value="Submit without validation">
</form>`}
      </pre>

      <h2 className="text-2xl font-semibold">The novalidate Attribute</h2>
      <p className="leading-relaxed">
        The <code>novalidate</code> attribute is a <code>&lt;form&gt;</code> attribute. When present, no form-data will be validated when submitted.
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<form action="/action_page.php" novalidate>
  <label for="email">Enter your email:</label>
  <input type="email" id="email" name="email"><br><br>
  <input type="submit" value="Submit">
</form>`}
      </pre>
    </div>
  );
};

export default HtmlInputFormAttributes;
