import React from "react";

const AspNetBasicControls: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        ASP.NET - Basic Controls
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        ASP.NET provides a rich set of server controls that enable developers to
        build interactive, data-driven, and dynamic web applications. These
        controls run on the server and render standard HTML elements in the
        browser.
      </p>

      {/* Button Controls */}
      <h2 className="text-2xl font-bold">Button Controls</h2>
      <p className="leading-relaxed">
        ASP.NET includes three types of buttons for triggering actions:
      </p>

      <ul className="list-disc list-inside space-y-1">
        <li>
          <strong>Button</strong> — displays clickable text inside a rectangle
        </li>
        <li>
          <strong>LinkButton</strong> — looks like a hyperlink but triggers
          postback
        </li>
        <li>
          <strong>ImageButton</strong> — uses an image instead of text
        </li>
      </ul>

      <p className="leading-relaxed">
        When clicked, buttons raise <strong>Click</strong> and{" "}
        <strong>Command</strong> events.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<asp:Button ID="Button1"
            runat="server"
            Text="Click Me"
            OnClick="Button1_Click" />`}
      </pre>

      {/* Textboxes and Labels */}
      <h2 className="text-2xl font-bold">Text Boxes and Labels</h2>
      <p className="leading-relaxed">
        TextBox controls allow users to enter input, while Label controls display
        output text.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<asp:TextBox ID="txtName" runat="server"></asp:TextBox>
<asp:Label ID="lblMessage" runat="server" Text=""></asp:Label>`}
      </pre>

      <h3 className="text-xl font-semibold">Useful TextBox Properties</h3>
      <ul className="list-disc list-inside space-y-1">
        <li><strong>TextMode</strong> — SingleLine, MultiLine, Password</li>
        <li><strong>MaxLength</strong> — maximum characters allowed</li>
        <li><strong>ReadOnly</strong> — prevents editing</li>
        <li><strong>Rows</strong> — visible lines in MultiLine mode</li>
      </ul>

      {/* CheckBox & RadioButton */}
      <h2 className="text-2xl font-bold">Check Boxes and Radio Buttons</h2>
      <p className="leading-relaxed">
        Use <strong>CheckBox</strong> for multiple independent selections and{" "}
        <strong>RadioButton</strong> when only one option must be chosen.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<asp:CheckBox ID="chkAgree" runat="server" Text="I Agree" />

<asp:RadioButton ID="rdbMale"
                 runat="server"
                 GroupName="Gender"
                 Text="Male" />`}
      </pre>

      {/* List Controls */}
      <h2 className="text-2xl font-bold">List Controls</h2>
      <p className="leading-relaxed">
        These controls allow users to select one or more items from predefined
        lists:
      </p>

      <ul className="list-disc list-inside space-y-1">
        <li>DropDownList</li>
        <li>ListBox</li>
        <li>RadioButtonList</li>
        <li>CheckBoxList</li>
        <li>BulletedList</li>
      </ul>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<asp:DropDownList ID="ddlCountry"
                   runat="server"
                   AutoPostBack="True"
                   OnSelectedIndexChanged="ddlCountry_SelectedIndexChanged">
</asp:DropDownList>`}
      </pre>

      {/* HyperLink Control */}
      <h2 className="text-2xl font-bold">HyperLink Control</h2>
      <p className="leading-relaxed">
        Works like an HTML anchor tag but provides server-side properties.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<asp:HyperLink ID="lnkGoogle"
                runat="server"
                NavigateUrl="https://www.google.com"
                Text="Visit Google" />`}
      </pre>

      {/* Image Control */}
      <h2 className="text-2xl font-bold">Image Control</h2>
      <p className="leading-relaxed">
        Displays images on the page with server-side control support.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<asp:Image ID="imgLogo"
           runat="server"
           ImageUrl="~/images/logo.png"
           AlternateText="Website Logo" />`}
      </pre>

      {/* Conclusion */}
      <p className="leading-relaxed">
        These foundational ASP.NET Web Forms controls help build UI structure,
        gather input, display output, and trigger server-side events—making them
        essential for interactive web applications.
      </p>
    </div>
  );
};

export default AspNetBasicControls;
