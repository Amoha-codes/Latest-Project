import React from "react";

const AspNetManagingState: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        ASP.NET - Managing State
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        HTTP is a stateless protocol—meaning the server does not retain
        information between requests. ASP.NET provides several mechanisms to
        store data across requests, controls, pages, and users. This preserved
        data is known as <strong>state</strong>.
      </p>

      <h2 className="text-2xl font-bold">Types of State Management in ASP.NET</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>View State</li>
        <li>Control State</li>
        <li>Session State</li>
        <li>Application State</li>
      </ul>

      {/* View State */}
      <h2 className="text-2xl font-bold">View State</h2>
      <p className="leading-relaxed">
        View State preserves values of controls and page data across postbacks.
        It is stored in a hidden <code>_VIEWSTATE</code> field in the page.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<%@ Page Language="C#" EnableViewState="true" %>`}
      </pre>

      <p className="leading-relaxed font-semibold">Example — Counter using ViewState:</p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`public int Counter
{
    get => (int?)ViewState["Counter"] ?? 0;
    set => ViewState["Counter"] = value;
}

protected void Page_Load(object sender, EventArgs e)
{
    if (!IsPostBack)
        lblCounter.Text = Counter.ToString();
}

protected void btnIncrement_Click(object sender, EventArgs e)
{
    Counter++;
    lblCounter.Text = Counter.ToString();
}`}
      </pre>

      <p className="leading-relaxed">
        ✅ Best for page-level and control values <br />
        ❌ Not suitable for large data — increases page size
      </p>

      {/* Control State */}
      <h2 className="text-2xl font-bold">Control State</h2>
      <p className="leading-relaxed">
        Control State stores essential control data required for functionality
        and cannot be disabled — unlike ViewState.
      </p>

      <p className="italic text-gray-600">
        Example — pagination index of a GridView.
      </p>

      {/* Session State */}
      <h2 className="text-2xl font-bold">Session State</h2>
      <p className="leading-relaxed">
        Session State stores user-specific data on the server. It lasts until
        the session expires or the browser closes.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`// Store value
Session["UserName"] = txtName.Text;

// Retrieve value
lblMessage.Text = Session["UserName"]?.ToString();
`}
      </pre>

      <ul className="list-disc list-inside space-y-1">
        <li>Scoped per user session</li>
        <li>Default timeout — 20 minutes</li>
        <li>Uses unique SessionID cookie</li>
      </ul>

      {/* Application State */}
      <h2 className="text-2xl font-bold">Application State</h2>
      <p className="leading-relaxed">
        Application State stores global data shared across all users and
        sessions within the application.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`// global.asax
void Application_Start(object sender, EventArgs e)
{
    Application["TotalVisitors"] = 0;
}

void Session_Start(object sender, EventArgs e)
{
    Application.Lock();
    Application["TotalVisitors"] = (int)Application["TotalVisitors"] + 1;
    Application.UnLock();
}`}
      </pre>

      <p className="leading-relaxed">
        ✅ Ideal for shared configuration or counters <br />
        ❌ Stored in server memory — avoid large data
      </p>

      {/* Summary */}
      <h2 className="text-2xl font-bold">Comparison Table</h2>

      <table className="w-full border text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">State Type</th>
            <th className="border p-2">Scope</th>
            <th className="border p-2">Storage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">View State</td>
            <td className="border p-2">Page</td>
            <td className="border p-2">Client (hidden field)</td>
          </tr>
          <tr>
            <td className="border p-2">Control State</td>
            <td className="border p-2">Control</td>
            <td className="border p-2">Client</td>
          </tr>
          <tr>
            <td className="border p-2">Session State</td>
            <td className="border p-2">User</td>
            <td className="border p-2">Server</td>
          </tr>
          <tr>
            <td className="border p-2">Application State</td>
            <td className="border p-2">Entire App</td>
            <td className="border p-2">Server</td>
          </tr>
        </tbody>
      </table>

      {/* Conclusion */}
      <p className="leading-relaxed">
        State management is essential for building interactive, user-driven
        ASP.NET Web Forms applications. Choosing the right technique depends on
        data size, user scope, performance requirements, and persistence needs.
      </p>
    </div>
  );
};

export default AspNetManagingState;
