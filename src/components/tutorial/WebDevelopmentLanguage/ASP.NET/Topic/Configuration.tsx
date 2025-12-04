import React from "react";

const AspNetConfiguration: React.FC = () => {
  const configFiles = [
    {
      name: "machine.config",
      desc: "Contains default and machine-specific settings for all ASP.NET applications. Typically managed by the system administrator."
    },
    {
      name: "web.config",
      desc: "Overrides default machine.config settings for an individual application. Can be defined per folder to locally extend, restrict, or override settings."
    }
  ];

  const configSections = [
    "Clear: Removes all references to inherited sections and section groups.",
    "Remove: Removes a reference to an inherited section or section group.",
    "Section: Associates a configuration section handler with a configuration element.",
    "SectionGroup: Associates a configuration section handler with a configuration section."
  ];

  const appSettingsExample = `
<configuration>
  <appSettings>
    <add key="ApplicationName" value="MyApplication" />
    <add key="appISBN" value="0-273-68726-3" />
    <add key="appBook" value="Corporate Finance" />
  </appSettings>
</configuration>
`;

  const connectionStringsExample = `
<connectionStrings>
  <add name="ASPDotNetStepByStepConnectionString" 
       connectionString="Provider=Microsoft.Jet.OLEDB.4.0;
       Data Source=E:\\projects\\datacaching\\App_Data\\ASPDotNetStepByStep.mdb"
       providerName="System.Data.OleDb" />
       
  <add name="booksConnectionString" 
       connectionString="Provider=Microsoft.Jet.OLEDB.4.0;
       Data Source=C:\\databinding\\App_Data\\books.mdb"
       providerName="System.Data.OleDb" />
</connectionStrings>
`;

  const systemWebElements = [
    "AnonymousIdentification: Identify unauthenticated users.",
    "Authentication: Configure authentication support (Windows, Forms, Passport, None).",
    "Authorization: Configure authorization rules with allow/deny.",
    "Caching: Configure cache settings including output caching and SQL cache dependencies.",
    "CustomErrors: Define custom error messages for users.",
    "Deployment: Settings used during deployment (e.g., retail=true).",
    "HostingEnvironment: Configure idle timeout, shadow copy, shutdown timeout, etc.",
    "Identity: Configure application identity and impersonation.",
    "MachineKey: Configure encryption/decryption for forms authentication and view state.",
    "Membership: Manage user accounts and authentication settings.",
    "Pages: Page-specific configurations (view state, themes, async timeout, etc.).",
    "Profile: Configure user profile properties and providers.",
    "RoleManager: Configure user roles, cookie settings, and caching.",
    "SecurityPolicy: Configure application trust level.",
    "UrlMappings: Map URLs to user-friendly alternatives.",
    "WebControls: Configure shared client script locations.",
    "WebServices: Configure settings for web services."
  ];

  return (
    <div className="mt-20 space-y-8">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">ASP.NET - Configuration</h1>

      {/* Configuration Files */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Configuration Files</h2>
        <ul className="list-disc ml-6 space-y-1">
          {configFiles.map((file, idx) => (
            <li key={idx}><strong>{file.name}:</strong> {file.desc}</li>
          ))}
        </ul>
      </div>

      {/* Configuration Sections */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Configuration Section Handlers</h2>
        <ul className="list-disc ml-6 space-y-1">
          {configSections.map((section, idx) => (
            <li key={idx}>{section}</li>
          ))}
        </ul>
      </div>

      {/* Application Settings Example */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Application Settings Example</h2>
        <pre className="bg-gray-100 p-4 rounded whitespace-pre-wrap">{appSettingsExample}</pre>
      </div>

      {/* Connection Strings Example */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Connection Strings Example</h2>
        <pre className="bg-gray-100 p-4 rounded whitespace-pre-wrap">{connectionStringsExample}</pre>
      </div>

      {/* System.Web Elements */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Common system.web Elements</h2>
        <ul className="list-disc ml-6 space-y-1">
          {systemWebElements.map((element, idx) => (
            <li key={idx}>{element}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AspNetConfiguration;
