import React from "react";

const HtmlFormAttributes: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        HTML Form Attributes
      </h1>

      <p className="leading-relaxed">
        This chapter describes the different attributes for the HTML <code>&lt;form&gt;</code> element.
      </p>

      <h2 className="text-2xl font-semibold">The Action Attribute</h2>
      <p className="leading-relaxed">
        The <code>action</code> attribute defines the action to be performed when the form is submitted.  
        Usually, the form data is sent to a file on the server when the user clicks the submit button.
      </p>
      <p className="leading-relaxed">
        Example: On submit, send form data to "action_page.php":
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>
  <input type="submit" value="Submit">
</form>`}
      </pre>
      <p className="leading-relaxed">
        Tip: If the <code>action</code> attribute is omitted, the action is set to the current page.
      </p>

      <h2 className="text-2xl font-semibold">The Target Attribute</h2>
      <p className="leading-relaxed">
        The <code>target</code> attribute specifies where to display the response received after submitting the form.
      </p>
      <table className="table-auto border-collapse border border-gray-300 w-full text-left">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-2 py-1">Value</th>
            <th className="border border-gray-300 px-2 py-1">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-2 py-1">_blank</td>
            <td className="border border-gray-300 px-2 py-1">The response is displayed in a new window or tab</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-2 py-1">_self</td>
            <td className="border border-gray-300 px-2 py-1">The response is displayed in the current window (default)</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-2 py-1">_parent</td>
            <td className="border border-gray-300 px-2 py-1">The response is displayed in the parent frame</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-2 py-1">_top</td>
            <td className="border border-gray-300 px-2 py-1">The response is displayed in the full body of the window</td>
          </tr>
        </tbody>
      </table>
      <p className="leading-relaxed">
        Example: Open submitted result in a new browser tab:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<form action="/action_page.php" target="_blank">`}
      </pre>

      <h2 className="text-2xl font-semibold">The Method Attribute</h2>
      <p className="leading-relaxed">
        The <code>method</code> attribute specifies the HTTP method to be used when submitting the form data: GET or POST.  
        The default is GET.
      </p>

      <p className="leading-relaxed font-semibold">GET method example:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<form action="/action_page.php" method="get">`}
      </pre>

      <p className="leading-relaxed font-semibold">POST method example:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<form action="/action_page.php" method="post">`}
      </pre>

      <h3 className="text-xl font-semibold">Notes on GET</h3>
      <ul className="list-disc ml-5 leading-relaxed">
        <li>Appends the form data to the URL, in name/value pairs</li>
        <li>NEVER use GET to send sensitive data!</li>
        <li>URL length is limited (~2048 characters)</li>
        <li>Good for bookmarking results or non-sensitive queries</li>
      </ul>

      <h3 className="text-xl font-semibold">Notes on POST</h3>
      <ul className="list-disc ml-5 leading-relaxed">
        <li>Appends the form data inside the body of the HTTP request (not visible in URL)</li>
        <li>No size limitations, can send large amounts of data</li>
        <li>Cannot be bookmarked</li>
        <li>Use POST for sensitive or personal information</li>
      </ul>

      <h2 className="text-2xl font-semibold">The Autocomplete Attribute</h2>
      <p className="leading-relaxed">
        The <code>autocomplete</code> attribute specifies whether the browser should autocomplete form values based on previous entries.
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<form action="/action_page.php" autocomplete="on">`}
      </pre>

      <h2 className="text-2xl font-semibold">The Novalidate Attribute</h2>
      <p className="leading-relaxed">
        The <code>novalidate</code> attribute is a boolean attribute.  
        When present, it specifies that the form-data should not be validated when submitted.
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<form action="/action_page.php" novalidate>`}
      </pre>
    </div>
  );
};

export default HtmlFormAttributes;
