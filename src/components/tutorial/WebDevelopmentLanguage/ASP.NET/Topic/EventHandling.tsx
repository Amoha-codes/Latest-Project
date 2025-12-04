import React from "react";

const AspNetEventHandling: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        ASP.NET - Event Handling
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        An <strong>event</strong> represents an action—such as clicking a
        button, typing text, selecting an item, or system-level triggers.
        ASP.NET applications respond to these actions using{" "}
        <strong>event handlers</strong>.
      </p>

      <p className="leading-relaxed">
        In ASP.NET, events are triggered on the <strong>client browser</strong>
        and handled on the <strong>server</strong>. For example, when a button
        is clicked, a Click event is raised and posted to the server, where its
        handler executes.
      </p>

      {/* Event handler syntax */}
      <h2 className="text-2xl font-bold">Event Arguments</h2>
      <p className="leading-relaxed">
        ASP.NET event handlers usually accept two parameters:
      </p>

      <ul className="list-disc list-inside space-y-1">
        <li><strong>sender</strong> — the control raising the event</li>
        <li><strong>EventArgs</strong> — additional event data</li>
      </ul>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`private void EventName(object sender, EventArgs e);`}
      </pre>

      {/* Application & Session */}
      <h2 className="text-2xl font-bold">Application and Session Events</h2>
      <ul className="list-disc list-inside space-y-1">
        <li><strong>Application_Start</strong> — triggered when the application begins</li>
        <li><strong>Application_End</strong> — raised when the application stops</li>
        <li><strong>Session_Start</strong> — fired when a user first accesses the site</li>
        <li><strong>Session_End</strong> — occurs when a session expires or ends</li>
      </ul>

      {/* Page and Control Events */}
      <h2 className="text-2xl font-bold">Page and Control Events</h2>

      <ul className="list-disc list-inside space-y-1">
        <li>Init — page/control initialization</li>
        <li>Load — page loads into memory</li>
        <li>PreRender — final update before rendering</li>
        <li>Unload — cleanup after page rendering</li>
        <li>Error — unhandled exception occurred</li>
      </ul>

      {/* Controls */}
      <h2 className="text-2xl font-bold">Event Handling Using Controls</h2>
      <p className="leading-relaxed">
        ASP.NET controls raise events when interacted with. The event handler
        defines how the application should respond.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<asp:Button ID="btnCancel" runat="server" Text="Cancel" />`}
      </pre>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`Protected Sub btnCancel_Click(ByVal sender As Object, ByVal e As EventArgs)
   Handles btnCancel.Click
End Sub`}
      </pre>

      <p className="leading-relaxed">
        Without a <code>Handles</code> clause, specify the event in markup:
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<asp:Button ID="btnCancel" runat="server" Text="Cancel" OnClick="btnCancel_Click" />`}
      </pre>

      {/* Default Events */}
      <h2 className="text-2xl font-bold">Default Events</h2>
      <p className="leading-relaxed">
        Controls in ASP.NET have default events. For example:
      </p>

      <ul className="list-disc list-inside space-y-1">
        <li>Page — Load</li>
        <li>Button — Click</li>
        <li>TextBox — TextChanged</li>
        <li>DropDownList — SelectedIndexChanged</li>
      </ul>

      {/* Example */}
      <h2 className="text-2xl font-bold">Example</h2>
      <p className="leading-relaxed">
        This example demonstrates handling page life cycle events and button
        click events.
      </p>

      <h3 className="text-xl font-semibold">Default.aspx</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs"
    Inherits="eventdemo._Default" %>

<html>
<body>
   <form id="form1" runat="server">
      <asp:Label ID="lblmessage" runat="server"></asp:Label>
      <br /><br />
      <asp:Button ID="btnclick" runat="server" Text="Click" OnClick="btnclick_Click" />
   </form>
</body>
</html>`}
      </pre>

      <h3 className="text-xl font-semibold">Default.aspx.cs</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`protected void Page_Load(object sender, EventArgs e)
{
   lblmessage.Text += "Page Load event handled.<br/>";

   if (Page.IsPostBack)
   {
      lblmessage.Text += "Postback event handled.<br/>";
   }
}

protected void Page_Init(object sender, EventArgs e)
{
   lblmessage.Text += "Page initialization event handled.<br/>";
}

protected void Page_PreRender(object sender, EventArgs e)
{
   lblmessage.Text += "Page prerender event handled.<br/>";
}

protected void btnclick_Click(object sender, EventArgs e)
{
   lblmessage.Text += "Button click event handled.<br/>";
}`}
      </pre>

      <p className="leading-relaxed">
        When executed, the label displays messages for each event, and clicking
        the button triggers the Click event.
      </p>
    </div>
  );
};

export default AspNetEventHandling;
