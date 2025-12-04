import React from "react";

const AspNetDeployment: React.FC = () => {
  const deploymentTypes = [
    {
      name: "Local Deployment",
      desc: "The entire application is contained within a virtual directory and all contents and assemblies are available to the application."
    },
    {
      name: "Global Deployment",
      desc: "Assemblies are available to every application running on the server."
    }
  ];

  const deploymentMethods = [
    {
      name: "XCOPY Deployment",
      desc: `Copy all files recursively to the target folder on the target machine.
- Techniques: FTP transfer, server management replication, MSI installer.
- Requires setting up a virtual directory in IIS (Internet Information Services).`
    },
    {
      name: "Copying a Website",
      desc: `Available in Visual Studio via Website -> Copy Web Site.
- Connect to target destination (local or remote).
- Copy modes: Overwrite, Source to Target Files, Sync Up Source and Target Projects.
- Drawbacks: Source code is copied, no pre-compilation, initial page load may be slow.`
    },
    {
      name: "Creating a Setup Project",
      desc: `Use Windows Installer to package your web application for deployment.
- Build deployment packages in Visual Studio.
- Includes setup wizard steps for creating setup for a web application.
- Produces Setup.exe and .msi files for deployment on server.`
    }
  ];

  const setupWizardSteps = [
    "Step 1: File -> Add -> New Project with website root directory highlighted.",
    "Step 2: Select 'Setup and Deployment' -> Setup Wizard.",
    "Step 3: Choose default location for setup project folder.",
    "Step 4: Select 'Create a setup for a web application'.",
    "Step 5: Choose project outputs (check 'Content Files').",
    "Step 6: Include other files (e.g., ReadMe) if required, then click Finish.",
    "Step 7: View summary screen of setup project settings.",
    "Step 8: Setup project is added to Solution Explorer with File System Editor.",
    "Step 9: Build the setup project (Right click -> Build).",
    "Step 10: After build, two files are created: Setup.exe and Setup-<project>.msi. Copy these to the server and run Setup.exe to install."
  ];

  return (
    <div className="mt-20 space-y-8">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">ASP.NET - Deployment</h1>

      {/* Deployment Types */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Deployment Types</h2>
        <ul className="list-disc ml-6 space-y-1">
          {deploymentTypes.map((type, idx) => (
            <li key={idx}><strong>{type.name}:</strong> {type.desc}</li>
          ))}
        </ul>
      </div>

      {/* Deployment Methods */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Common Deployment Methods</h2>
        <ul className="list-disc ml-6 space-y-3">
          {deploymentMethods.map((method, idx) => (
            <li key={idx}>
              <strong>{method.name}:</strong>
              <p className="ml-4 whitespace-pre-line">{method.desc}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Setup Wizard Steps */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Setup Project Wizard Steps</h2>
        <ol className="list-decimal ml-6 space-y-1">
          {setupWizardSteps.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default AspNetDeployment;
