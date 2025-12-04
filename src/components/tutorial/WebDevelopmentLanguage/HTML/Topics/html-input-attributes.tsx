import React from "react";

const HtmlInputAttributes: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        HTML Input Attributes
      </h1>

      <h2 className="text-2xl font-semibold">The value Attribute</h2>
      <p className="leading-relaxed">
        The <code>value</code> attribute specifies an initial value for an input field.
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe">
</form>`}
      </pre>

      <h2 className="text-2xl font-semibold">The readonly Attribute</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John" readonly><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe">
</form>`}
      </pre>

      <h2 className="text-2xl font-semibold">The disabled Attribute</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John" disabled><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe">
</form>`}
      </pre>

      <h2 className="text-2xl font-semibold">The size Attribute</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" size="50"><br>
  <label for="pin">PIN:</label><br>
  <input type="text" id="pin" name="pin" size="4">
</form>`}
      </pre>

      <h2 className="text-2xl font-semibold">The maxlength Attribute</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" size="50"><br>
  <label for="pin">PIN:</label><br>
  <input type="text" id="pin" name="pin" maxlength="4" size="4">
</form>`}
      </pre>

      <h2 className="text-2xl font-semibold">The min and max Attributes</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<form>
  <label for="datemax">Enter a date before 1980-01-01:</label>
  <input type="date" id="datemax" name="datemax" max="1979-12-31"><br><br>

  <label for="datemin">Enter a date after 2000-01-01:</label>
  <input type="date" id="datemin" name="datemin" min="2000-01-02"><br><br>

  <label for="quantity">Quantity (between 1 and 5):</label>
  <input type="number" id="quantity" name="quantity" min="1" max="5">
</form>`}
      </pre>

      <h2 className="text-2xl font-semibold">The multiple Attribute</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<form>
  <label for="files">Select files:</label>
  <input type="file" id="files" name="files" multiple>
</form>`}
      </pre>

      <h2 className="text-2xl font-semibold">The pattern Attribute</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<form>
  <label for="country_code">Country code:</label>
  <input type="text" id="country_code" name="country_code"
  pattern="[A-Za-z]{3}" title="Three letter country code">
</form>`}
      </pre>

      <h2 className="text-2xl font-semibold">The placeholder Attribute</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<form>
  <label for="phone">Enter a phone number:</label>
  <input type="tel" id="phone" name="phone"
  placeholder="123-45-678"
  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}">
</form>`}
      </pre>

      <h2 className="text-2xl font-semibold">The required Attribute</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<form>
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" required>
</form>`}
      </pre>

      <h2 className="text-2xl font-semibold">The step Attribute</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<form>
  <label for="points">Points:</label>
  <input type="number" id="points" name="points" step="3">
</form>`}
      </pre>

      <h2 className="text-2xl font-semibold">The autofocus Attribute</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" autofocus><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname">
</form>`}
      </pre>

      <h2 className="text-2xl font-semibold">The height and width Attributes</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<form>
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname"><br><br>
  <input type="image" src="img_submit.gif" alt="Submit" width="48" height="48">
</form>`}
      </pre>

      <h2 className="text-2xl font-semibold">The list Attribute</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<form>
  <input list="browsers">
  <datalist id="browsers">
    <option value="Edge">
    <option value="Firefox">
    <option value="Chrome">
    <option value="Opera">
    <option value="Safari">
  </datalist>
</form>`}
      </pre>

      <h2 className="text-2xl font-semibold">The autocomplete Attribute</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<form action="/action_page.php" autocomplete="on">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname"><br><br>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" autocomplete="off"><br><br>
  <input type="submit" value="Submit">
</form>`}
      </pre>
    </div>
  );
};

export default HtmlInputAttributes;
