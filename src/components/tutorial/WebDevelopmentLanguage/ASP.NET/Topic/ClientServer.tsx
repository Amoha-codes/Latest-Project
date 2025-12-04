import React from "react";

const AspNetClientSide: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        ASP.NET - Client Side
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        Client-side functionality in ASP.NET refers to code that executes
        inside the <strong>browser</strong> rather than on the server. This
        improves responsiveness by avoiding unnecessary round trips to the
        server — especially for tasks like validation, UI updates, and
        interactivity.
      </p>

      {/* Two Aspects */}
      <h2 className="text-2xl font-bold">Two Aspects of Client-Side Coding</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Client-side scripts</strong> — JavaScript/VBScript that runs
          in the browser for faster execution
        </li>
        <li>
          <strong>Client-side source code</strong> — HTML, hidden fields, and
          auto-generated JavaScript produced by ASP.NET
        </li>
      </ul>

      {/* Client-side scripts */}
      <h2 className="text-2xl font-bold">Client-Side Scripts</h2>
      <p className="leading-relaxed">
        ASP.NET server controls can trigger or run JavaScript on the browser
        before the page is submitted to the server. This improves performance
        and user experience — for example, validation controls run client-side
        checks without requiring a postback.
      </p>

      <p className="leading-relaxed">
        The <strong>OnClientClick</strong> property of a Button allows executing
        JavaScript when clicked:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<asp:Button ID="Button1"
            runat="server"
            Text="Save"
            OnClientClick="alert('Button clicked!')" />`}
      </pre>

      {/* Common Events */}
      <h3 className="text-xl font-semibold">Common Client-Side Events</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>onblur — when the control loses focus</li>
        <li>onfocus — when the control receives focus</li>
        <li>onclick — when the control is clicked</li>
        <li>onchange — when the value changes</li>
        <li>onkeydown — when a key is pressed</li>
        <li>onkeypress — when an alphanumeric key is pressed</li>
        <li>onkeyup — when a key is released</li>
        <li>onmouseover — when the mouse hovers over control</li>
        <li>onserverclick — triggers ServerClick event</li>
      </ul>

      {/* Client-side Source Code */}
      <h2 className="text-2xl font-bold">Client-Side Source Code</h2>
      <p className="leading-relaxed">
        ASP.NET Web Forms are split into:
      </p>
      <ul className="list-disc list-inside space-y-1">
        <li><strong>.aspx</strong> — markup file containing HTML & controls</li>
        <li>
          <strong>code-behind file</strong> — contains event-handling C# code
        </li>
      </ul>

      <p className="leading-relaxed">
        At runtime, ASP.NET merges markup, server controls, and code-behind to
        generate executable page classes. The final output sent to the browser
        is pure HTML, hidden fields, and optional JavaScript.
      </p>

      {/* Example — ASPX Page */}
      <h2 className="text-2xl font-bold">Example — Default.aspx</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<%@ Page Language="C#" AutoEventWireup="true"
    CodeBehind="Default.aspx.cs"
    Inherits="clientside._Default" %>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head runat="server">
  <title>Untitled Page</title>
</head>

<body>
  <form id="form1" runat="server">
    <div>
      <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
      <asp:Button ID="Button1"
                  runat="server"
                  Text="Click"
                  OnClick="Button1_Click" />
    </div>

    <hr />

    <h3><asp:Label ID="Msg" runat="server" Text=""></asp:Label></h3>
  </form>
</body>
</html>`}
      </pre>

      {/* Example — Browser Output */}
      <h2 className="text-2xl font-bold">View Source — Browser Output</h2>
      <p className="leading-relaxed">
        When viewed in the browser, ASP.NET transforms server controls into
        HTML and injects hidden fields that store state information:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<form name="form1" method="post" action="Default.aspx" id="form1">

  <div>
    <input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE"
           value="/wEPDwUKMTU5MTA2ODYwOWRk31Nud..." />
  </div>

  <div>
    <input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION"
           value="/wEWAwKpjZj0DALs0bLr..." />
  </div>

  <div>
    <input name="TextBox1" type="text" id="TextBox1" />
    <input type="submit" name="Button1" value="Click" id="Button1" />
  </div>

  <h3><span id="Msg"></span></h3>

</form>`}
      </pre>

      <p className="leading-relaxed">
        Here, <strong>__VIEWSTATE</strong> and{" "}
        <strong>__EVENTVALIDATION</strong> are automatically generated hidden
        fields used to preserve page and control state across postbacks.
      </p>
    </div>
  );
};

export default AspNetClientSide;
