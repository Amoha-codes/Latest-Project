import React from "react";

const AspNetServerControls: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        ASP.NET - Server Controls
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        <strong>Server controls</strong> are the core UI elements used in
        ASP.NET to build interactive web applications—such as text boxes,
        buttons, lists, labels, checkboxes, and more. These controls run on the{" "}
        <strong>server</strong> and automatically render appropriate HTML for
        the browser.
      </p>

      <p className="leading-relaxed">
        They also support advanced features such as data binding, validation,
        event handling, personalization, navigation, user authentication, and
        page structure.
      </p>

      {/* Types of Controls */}
      <h2 className="text-2xl font-bold">Types of ASP.NET Web Controls</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>HTML Controls</li>
        <li>HTML Server Controls</li>
        <li>ASP.NET Server Controls</li>
        <li>ASP.NET AJAX Controls</li>
        <li>User Controls & Custom Controls</li>
      </ul>

      {/* Categories */}
      <h2 className="text-2xl font-bold">Categories of Server Controls</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Validation Controls</li>
        <li>Data Source Controls</li>
        <li>Data View Controls</li>
        <li>Personalization Controls</li>
        <li>Login & Security Controls</li>
        <li>Master Pages</li>
        <li>Navigation Controls</li>
        <li>Rich Controls (Calendar, FileUpload, etc.)</li>
      </ul>

      {/* Syntax */}
      <h2 className="text-2xl font-bold">Syntax</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<asp:controlType ID="ControlID" runat="server" Property1="value1"
     Property2="value2" />`}
      </pre>

      <p className="leading-relaxed">
        Visual Studio further helps through drag-and-drop UI, IntelliSense, and
        property windows.
      </p>

      {/* Common Properties */}
      <h2 className="text-2xl font-bold">Common Properties of Server Controls</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>ID</li>
        <li>Visible</li>
        <li>Enabled</li>
        <li>CssClass</li>
        <li>Height / Width</li>
        <li>ForeColor / BackColor</li>
        <li>ToolTip</li>
        <li>ViewState</li>
        <li>TabIndex</li>
        <li>AccessKey</li>
      </ul>

      {/* Example */}
      <h2 className="text-2xl font-bold">Example — Display Selected TreeView Node</h2>
      <p className="leading-relaxed">
        This example uses a <strong>TreeView</strong>, <strong>Label</strong>,
        and <strong>TextBox</strong> control to display selected nodes and their children:
      </p>

      <h3 className="text-xl font-semibold">treeviewdemo.aspx</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<%@ Page Language="C#" AutoEventWireup="true"
    CodeBehind="treeviewdemo.aspx.cs"
    Inherits="eventdemo.treeviewdemo" %>

<html>
<body>
   <form id="form1" runat="server">
      <asp:TreeView ID="TreeView1" runat="server"
         OnSelectedNodeChanged="TreeView1_SelectedNodeChanged"></asp:TreeView>

      <br /><br />

      <asp:Label ID="lblmessage" runat="server"></asp:Label>
      <br /><br />

      <asp:TextBox ID="txtmessage" runat="server"></asp:TextBox>
   </form>
</body>
</html>`}
      </pre>

      <h3 className="text-xl font-semibold">treeviewdemo.aspx.cs</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`protected void Page_Load(object sender, EventArgs e)
{
   txtmessage.Text = "";
}

protected void TreeView1_SelectedNodeChanged(object sender, EventArgs e)
{
   txtmessage.Text = "";
   lblmessage.Text = "Selected node: " + TreeView1.SelectedNode.Text;

   foreach (TreeNode node in TreeView1.SelectedNode.ChildNodes)
   {
      txtmessage.Text += node.Value + " ";
   }
}`}
      </pre>

      <p className="leading-relaxed">
        When the user selects a node, ASP.NET automatically posts back, raises
        the <strong>SelectedNodeChanged</strong> event, and updates the output
        accordingly.
      </p>
    </div>
  );
};

export default AspNetServerControls;
