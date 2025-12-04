import React from "react";

const AspNetServerSide: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        ASP.NET - Server Side
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        In ASP.NET, every Web Form is an instance of the{" "}
        <strong>Page class</strong>, which acts like a container for all server
        controls. When a request comes from the browser, ASP.NET processes it on
        the <strong>server</strong> — not on the client — before generating the
        final HTML sent to the browser.
      </p>

      <p className="leading-relaxed">
        The Page class exposes several useful built-in objects that help manage
        requests, responses, state, caching, user identity, and more:
      </p>

      {/* Intrinsic Objects */}
      <ul className="list-disc list-inside space-y-1">
        <li>Session</li>
        <li>Application</li>
        <li>Cache</li>
        <li>Request</li>
        <li>Response</li>
        <li>Server</li>
        <li>User</li>
        <li>Trace</li>
      </ul>

      {/* Server Object */}
      <h2 className="text-2xl font-bold">Server Object</h2>
      <p className="leading-relaxed">
        The <strong>Server object</strong> is an instance of{" "}
        <code>System.Web.HttpServerUtility</code>. It provides helpful methods
        for encoding, URL processing, error handling, file path mapping, and
        executing pages on the server.
      </p>

      <h3 className="text-xl font-semibold">Common Server Methods</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>HtmlEncode()</li>
        <li>HtmlDecode()</li>
        <li>UrlEncode()</li>
        <li>UrlDecode()</li>
        <li>Execute()</li>
        <li>Transfer()</li>
        <li>MapPath()</li>
        <li>GetLastError()</li>
      </ul>

      {/* Request Object */}
      <h2 className="text-2xl font-bold">Request Object</h2>
      <p className="leading-relaxed">
        The <strong>Request object</strong> represents incoming browser data. It
        belongs to the <code>System.Web.HttpRequest</code> class and allows
        access to form values, cookies, headers, query strings, uploaded files,
        and client information.
      </p>

      <h3 className="text-xl font-semibold">Useful Request Properties</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Request.QueryString</li>
        <li>Request.Form</li>
        <li>Request.Headers</li>
        <li>Request.Cookies</li>
        <li>Request.HttpMethod</li>
        <li>Request.UserHostAddress</li>
        <li>Request.Url</li>
        <li>Request.Browser</li>
      </ul>

      {/* Response Object */}
      <h2 className="text-2xl font-bold">Response Object</h2>
      <p className="leading-relaxed">
        The <strong>Response object</strong> belongs to{" "}
        <code>System.Web.HttpResponse</code>. It is responsible for sending
        output back to the browser — including text, HTML, cookies, files,
        status codes, and redirections.
      </p>

      <h3 className="text-xl font-semibold">Popular Response Methods</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Write()</li>
        <li>Redirect()</li>
        <li>AppendHeader()</li>
        <li>BinaryWrite()</li>
        <li>TransmitFile()</li>
        <li>End()</li>
        <li>Flush()</li>
      </ul>

      {/* Example */}
      <h2 className="text-2xl font-bold">Example — Using Server, Request & Response</h2>
      <p className="leading-relaxed">
        This example reads user input, encodes it for safety, and displays the
        requested URL:
      </p>

      <h3 className="text-xl font-semibold">Default.aspx</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<%@ Page Language="C#" AutoEventWireup="true"
    CodeBehind="Default.aspx.cs"
    Inherits="server_side._Default" %>

<html xmlns="http://www.w3.org/1999/xhtml">
<body>
  <form id="form1" runat="server">
     Enter your name:
     <br />
     <asp:TextBox ID="TextBox1" runat="server" />
     <asp:Button ID="Button1" runat="server"
                 Text="Submit"
                 OnClick="Button1_Click" />
     <br />
     <asp:Label ID="Label1" runat="server" />
  </form>
</body>
</html>`}
      </pre>

      <h3 className="text-xl font-semibold">Default.aspx.cs</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`protected void Button1_Click(object sender, EventArgs e)
{
   if (!String.IsNullOrEmpty(TextBox1.Text))
   {
      Label1.Text = "Welcome, "
         + Server.HtmlEncode(TextBox1.Text)
         + "<br/>The URL is: "
         + Server.UrlEncode(Request.Url.ToString());
   }
}`}
      </pre>

      <p className="leading-relaxed">
        Here, <strong>Server.HtmlEncode()</strong> prevents script injection, and{" "}
        <strong>Server.UrlEncode()</strong> safely formats the request URL.
      </p>
    </div>
  );
};

export default AspNetServerSide;
