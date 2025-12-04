import React from "react";

const AspNetFirstExample: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        ASP.NET - First Example
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        An ASP.NET page consists of server-side controls, HTML elements, text,
        and images. ASP.NET stores page data and control states in hidden fields
        to maintain context during page requests. The ASP.NET runtime manages
        the relationship between a page instance and its state.
      </p>

      <p className="leading-relaxed">
        An ASP.NET page is saved with the <code>.aspx</code> extension and
        follows a structured layout made up of:
      </p>

      <ul className="list-disc list-inside space-y-1">
        <li>Page Directives</li>
        <li>Code Section (Code-behind)</li>
        <li>Page Layout (UI)</li>
      </ul>

      {/* Page Directives */}
      <h2 className="text-2xl font-bold">Page Directives</h2>
      <p className="leading-relaxed">
        Page directives configure how the page is processed by the ASP.NET
        parser and compiler. The <code>@Page</code> directive defines
        page-specific attributes such as programming language, inheritance,
        event wiring, and more.
      </p>

      {/* Code Section */}
      <h2 className="text-2xl font-bold">Code Section</h2>
      <p className="leading-relaxed">
        The code section contains event handlers and business logic. Event
        handlers respond to user actions like button clicks or text input.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<!-- directives -->
<%@ Page Language="C#" %>

<!-- code section -->
<script runat="server">
   protected void ConvertToUpper(object sender, EventArgs e)
   {
      string input = mytext.Value;
      changed_text.InnerHtml = input.ToUpper();
   }
</script>

<!-- layout -->
<html>
<head>
   <title>Convert to Uppercase</title>
</head>
<body>
   <h3>Conversion to Uppercase</h3>

   <form runat="server">
      <input runat="server" id="mytext" type="text" />
      <input runat="server" id="button1" type="submit"
             value="Enter..."
             OnServerClick="ConvertToUpper" />

      <hr />
      <h3>Results:</h3>
      <span runat="server" id="changed_text" />
   </form>
</body>
</html>`}
      </pre>

      {/* Visual Studio example */}
      <h2 className="text-2xl font-bold">Using Visual Studio</h2>
      <p className="leading-relaxed">
        You can create the same example using Visual Studio by dragging controls
        onto the design surface. Only the event handler needs to be added in the
        code-behind file:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`protected void Button1_Click(object sender, EventArgs e)
{
   string input = TextBox1.Text;
   changed_text.InnerHtml = input.ToUpper();
}`}
      </pre>

      <p className="leading-relaxed">
        Run the project and open the page in a browser to view the output.
        Entering lowercase text will return the uppercase version.
      </p>
    </div>
  );
};

export default AspNetFirstExample;
