import React from "react";

const AspNetHtmlServerControls: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        ASP.NET - HTML Server Controls
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        HTML Server Controls in ASP.NET are ordinary HTML elements that are
        enhanced to support <strong>server-side processing</strong>. Normally,
        HTML tags like <code>&lt;input&gt;</code>, <code>&lt;a&gt;</code>, or{" "}
        <code>&lt;img&gt;</code> are sent directly to the browser without server
        interaction.
      </p>

      <p className="leading-relaxed">
        However, by adding <strong>runat="server"</strong> and an{" "}
        <strong>ID attribute</strong>, these elements become accessible in the
        server-side code.
      </p>

      {/* Example Intro */}
      <h2 className="text-2xl font-bold">Converting an HTML Element</h2>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<input type="text" size="40">`}
      </pre>

      <p className="leading-relaxed">Becomes a server control:</p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<input type="text" id="testtext" size="40" runat="server">`}
      </pre>

      {/* Advantages */}
      <h2 className="text-2xl font-bold">Advantages</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Useful when converting static HTML pages to ASP.NET</li>
        <li>Helpful for layout-based pages such as tables or forms</li>
        <li>Provides server-side accessibility without switching to ASP.NET controls</li>
      </ul>

      {/* Table of Controls */}
      <h2 className="text-2xl font-bold">Common HTML Server Controls</h2>

      <ul className="list-disc list-inside space-y-1">
        <li>HtmlInputText — <code>&lt;input type="text"&gt;</code></li>
        <li>HtmlInputCheckbox — <code>&lt;input type="checkbox"&gt;</code></li>
        <li>HtmlInputFile — <code>&lt;input type="file"&gt;</code></li>
        <li>HtmlImage — <code>&lt;img&gt;</code></li>
        <li>HtmlAnchor — <code>&lt;a&gt;</code></li>
        <li>HtmlSelect — <code>&lt;select&gt;</code></li>
        <li>HtmlTable — <code>&lt;table&gt;</code></li>
        <li>HtmlForm — <code>&lt;form&gt;</code></li>
        <li>HtmlTitle — <code>&lt;title&gt;</code></li>
        <li>HtmlGenericControl — any HTML tag not listed above</li>
      </ul>

      {/* Example */}
      <h2 className="text-2xl font-bold">Example — Displaying User Input</h2>
      <p className="leading-relaxed">
        This example uses text boxes within an HTML table layout, collects user
        details, and displays them after clicking a button.
      </p>

      {/* Default.aspx */}
      <h3 className="text-xl font-semibold">Default.aspx</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<%@ Page Language="C#" AutoEventWireup="true"
    CodeBehind="Default.aspx.cs"
    Inherits="htmlserver._Default" %>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
  <title>HTML Server Controls Example</title>
</head>

<body>
  <form id="form1" runat="server">
    <table style="width: 50%;">
      <tr>
        <td>Name:</td>
        <td><asp:TextBox ID="txtName" runat="server" Width="230px" /></td>
      </tr>
      <tr>
        <td>Street:</td>
        <td><asp:TextBox ID="txtStreet" runat="server" Width="230px" /></td>
      </tr>
      <tr>
        <td>City:</td>
        <td><asp:TextBox ID="txtCity" runat="server" Width="230px" /></td>
      </tr>
      <tr>
        <td>State:</td>
        <td><asp:TextBox ID="txtState" runat="server" Width="230px" /></td>
      </tr>
      <tr>
        <td></td>
        <td id="displayRow" runat="server"></td>
      </tr>
    </table>

    <asp:Button ID="Button1"
                runat="server"
                Text="Click"
                OnClick="Button1_Click" />
  </form>
</body>
</html>`}
      </pre>

      {/* Code Behind */}
      <h3 className="text-xl font-semibold">Default.aspx.cs</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`protected void Button1_Click(object sender, EventArgs e)
{
   string result = "";
   result += txtName.Text + "<br/>";
   result += txtStreet.Text + "<br/>";
   result += txtCity.Text + "<br/>";
   result += txtState.Text + "<br/>";

   displayRow.InnerHtml = result;
}`}
      </pre>

      <p className="leading-relaxed">
        Notice how the last table cell includes <strong>runat="server"</strong>,
        making it accessible in C# as <code>displayRow</code>.
      </p>
    </div>
  );
};

export default AspNetHtmlServerControls;
