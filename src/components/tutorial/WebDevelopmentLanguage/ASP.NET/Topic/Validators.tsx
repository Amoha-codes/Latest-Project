import React from "react";

const AspNetValidators: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        ASP.NET - Validators
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        ASP.NET validation controls ensure that user input data is correct,
        authenticated, and consistent before processing. All validation
        controls inherit from the <strong>BaseValidator</strong> class.
      </p>

      <h2 className="text-2xl font-bold">BaseValidator Properties & Methods</h2>
      <ul className="list-disc list-inside space-y-1">
        <li><strong>ControlToValidate</strong> — Input control to validate</li>
        <li><strong>Display</strong> — How error message appears</li>
        <li><strong>EnableClientScript</strong> — Enable client-side validation</li>
        <li><strong>Enabled</strong> — Enables/disables validator</li>
        <li><strong>ErrorMessage</strong> — Error string</li>
        <li><strong>Text</strong> — Text shown if validation fails</li>
        <li><strong>IsValid</strong> — Indicates if input is valid</li>
        <li><strong>SetFocusOnError</strong> — Focus input on error</li>
        <li><strong>ValidationGroup</strong> — Logical group for multiple validators</li>
        <li><strong>Validate()</strong> — Revalidates the control</li>
      </ul>

      {/* RequiredFieldValidator */}
      <h2 className="text-2xl font-bold">RequiredFieldValidator</h2>
      <p className="leading-relaxed">
        Ensures a field is not empty.
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<asp:RequiredFieldValidator 
    ID="rfvcandidate" 
    runat="server" 
    ControlToValidate="ddlcandidate"
    ErrorMessage="Please choose a candidate" 
    InitialValue="Please choose a candidate">
</asp:RequiredFieldValidator>`}
      </pre>

      {/* RangeValidator */}
      <h2 className="text-2xl font-bold">RangeValidator</h2>
      <p className="leading-relaxed">
        Ensures input falls within a specified range.
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<asp:RangeValidator 
    ID="rvclass" 
    runat="server" 
    ControlToValidate="txtclass" 
    ErrorMessage="Enter your class (6 - 12)" 
    MinimumValue="6" MaximumValue="12" 
    Type="Integer">
</asp:RangeValidator>`}
      </pre>

      {/* CompareValidator */}
      <h2 className="text-2xl font-bold">CompareValidator</h2>
      <p className="leading-relaxed">
        Compares input with a fixed value or another control.
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<asp:CompareValidator 
    ID="CompareValidator1" 
    runat="server" 
    ControlToValidate="txtValue1"
    ControlToCompare="txtValue2"
    Operator="Equal" 
    Type="Integer" 
    ErrorMessage="Values must match">
</asp:CompareValidator>`}
      </pre>

      {/* RegularExpressionValidator */}
      <h2 className="text-2xl font-bold">RegularExpressionValidator</h2>
      <p className="leading-relaxed">
        Validates input using a regular expression.
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<asp:RegularExpressionValidator 
    ID="remail" 
    runat="server" 
    ControlToValidate="txtemail" 
    ErrorMessage="Enter a valid email" 
    ValidationExpression="\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*">
</asp:RegularExpressionValidator>`}
      </pre>

      {/* CustomValidator */}
      <h2 className="text-2xl font-bold">CustomValidator</h2>
      <p className="leading-relaxed">
        Allows server-side or client-side custom validation logic.
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<asp:CustomValidator 
    ID="CustomValidator1" 
    runat="server" 
    ClientValidationFunction="cvf_func" 
    ErrorMessage="Custom validation failed">
</asp:CustomValidator>`}
      </pre>

      {/* ValidationSummary */}
      <h2 className="text-2xl font-bold">ValidationSummary</h2>
      <p className="leading-relaxed">
        Displays a summary of all validation errors on the page.
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<asp:ValidationSummary 
    ID="ValidationSummary1" 
    runat="server" 
    DisplayMode="BulletList" 
    ShowSummary="true" 
    HeaderText="Errors:" />`}
      </pre>

      {/* Validation Groups */}
      <h2 className="text-2xl font-bold">Validation Groups</h2>
      <p className="leading-relaxed">
        Group input and validators logically for complex pages.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<asp:TextBox ID="txtName" runat="server" ValidationGroup="Group1" />
<asp:RequiredFieldValidator 
    ControlToValidate="txtName" 
    ValidationGroup="Group1" 
    ErrorMessage="Name is required" />`}
      </pre>

      {/* Example */}
      <h2 className="text-2xl font-bold">Example: School President Election Form</h2>
      <p className="leading-relaxed">
        Validators are used to ensure candidates, house, class, and email are properly entered.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`protected void btnsubmit_Click(object sender, EventArgs e)
{
    if(Page.IsValid)
        lblmsg.Text = "Thank You";
    else
        lblmsg.Text = "Fill up all the fields";
}`}
      </pre>

      {/* Conclusion */}
      <p className="leading-relaxed">
        ASP.NET validation controls provide robust server- and client-side
        validation, improving data integrity and user experience.
      </p>
    </div>
  );
};

export default AspNetValidators;
