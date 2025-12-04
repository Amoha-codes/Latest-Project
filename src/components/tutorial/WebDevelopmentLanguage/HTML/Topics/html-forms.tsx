import React from "react";

const HtmlForms: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        HTML Forms
      </h1>

      <p className="leading-relaxed">
        An HTML form is used to collect user input. The user input is most often sent to a server for processing.
      </p>

      <h2 className="text-2xl font-semibold">The &lt;form&gt; Element</h2>
      <p className="leading-relaxed">
        The HTML <code>&lt;form&gt;</code> element is used to create an HTML form for user input:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<form>
  <!-- form elements go here -->
</form>`}
      </pre>
      <p className="leading-relaxed">
        The <code>&lt;form&gt;</code> element is a container for different types of input elements, such as text fields, checkboxes, radio buttons, submit buttons, etc.
      </p>

      <h2 className="text-2xl font-semibold">The &lt;input&gt; Element</h2>
      <p className="leading-relaxed">
        The HTML <code>&lt;input&gt;</code> element is the most used form element.  
        An <code>&lt;input&gt;</code> element can be displayed in many ways, depending on the <code>type</code> attribute.
      </p>
      <table className="table-auto border-collapse border border-gray-300 w-full text-left">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-2 py-1">Type</th>
            <th className="border border-gray-300 px-2 py-1">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-2 py-1">&lt;input type="text"&gt;</td>
            <td className="border border-gray-300 px-2 py-1">Displays a single-line text input field</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-2 py-1">&lt;input type="radio"&gt;</td>
            <td className="border border-gray-300 px-2 py-1">Displays a radio button (select one of many choices)</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-2 py-1">&lt;input type="checkbox"&gt;</td>
            <td className="border border-gray-300 px-2 py-1">Displays a checkbox (select zero or more choices)</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-2 py-1">&lt;input type="submit"&gt;</td>
            <td className="border border-gray-300 px-2 py-1">Displays a submit button (send form data)</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-2 py-1">&lt;input type="button"&gt;</td>
            <td className="border border-gray-300 px-2 py-1">Displays a clickable button</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold">Text Fields</h2>
      <p className="leading-relaxed">
        The <code>&lt;input type="text"&gt;</code> defines a single-line input field for text input.
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname">
</form>`}
      </pre>

      <h2 className="text-2xl font-semibold">The &lt;label&gt; Element</h2>
      <p className="leading-relaxed">
        The <code>&lt;label&gt;</code> tag defines a label for form elements.  
        It helps screen readers and improves click accessibility for small elements like radio buttons and checkboxes.
      </p>

      <h2 className="text-2xl font-semibold">Radio Buttons</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<p>Choose your favorite Web language:</p>
<form>
  <input type="radio" id="html" name="fav_language" value="HTML">
  <label for="html">HTML</label><br>
  <input type="radio" id="css" name="fav_language" value="CSS">
  <label for="css">CSS</label><br>
  <input type="radio" id="javascript" name="fav_language" value="JavaScript">
  <label for="javascript">JavaScript</label>
</form>`}
      </pre>

      <h2 className="text-2xl font-semibold">Checkboxes</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<form>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
  <label for="vehicle1"> I have a bike</label><br>
  <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
  <label for="vehicle2"> I have a car</label><br>
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
  <label for="vehicle3"> I have a boat</label>
</form>`}
      </pre>

      <h2 className="text-2xl font-semibold">Submit Button</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>
  <input type="submit" value="Submit">
</form>`}
      </pre>

      <h2 className="text-2xl font-semibold">The Name Attribute for &lt;input&gt;</h2>
      <p className="leading-relaxed">
        Each input field must have a <code>name</code> attribute to be submitted.  
        If the <code>name</code> attribute is omitted, the value will not be sent.
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" value="John"><br><br>
  <input type="submit" value="Submit">
</form>`}
      </pre>
    </div>
  );
};

export default HtmlForms;
