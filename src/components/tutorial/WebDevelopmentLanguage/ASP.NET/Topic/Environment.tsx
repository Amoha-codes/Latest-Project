import React from "react";

const AspNetEnvironmentSetup: React.FC = () => {
  const installationSteps = [
    "Download Visual Studio from the official Microsoft website.",
    "Run the installer once the download completes.",
    "Click the Install button to begin setup.",
    "After successful installation, restart your system if required.",
    "Open Visual Studio from the Start Menu — first launch may take time.",
    "Once loaded, you will see the Visual Studio main dashboard."
  ];

  const projectContents = [
    "Page file (.aspx)",
    "User control (.ascx)",
    "Web service (.asmx)",
    "Master page (.master)",
    "Site map (.sitemap)",
    "Website configuration file (.config)"
  ];

  const windowActions = [
    "Switch between Design and Source view using tab buttons.",
    "Close a window using the Close icon in the top-right corner.",
    "Hide a window with Auto Hide — it becomes a collapsible tab.",
    "Resize a window by dragging its border.",
    "Reopen windows anytime through the View menu."
  ];

  const runOptions = [
    "Start (F5)",
    "Start Without Debugging (Ctrl + F5)",
    "Using Debug menu options",
    "Build project before execution using Build menu"
  ];

  return (
    <div className="mt-20 space-y-8">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        ASP.NET - Environment Setup
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        ASP.NET applications are built on top of HTTP, offering a high-level,
        object-oriented abstraction layer for modern web development. It
        provides components, classes, and tools needed to build responsive and
        scalable web applications.
      </p>

      <p className="leading-relaxed">
        The primary development tool for building ASP.NET applications is
        <strong> Visual Studio</strong>, a full-featured IDE used for writing,
        compiling, testing, and debugging web, desktop, and mobile applications.
      </p>

      {/* Installation */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Installation</h2>
        <p className="leading-relaxed mb-3">
          Microsoft provides a free edition of Visual Studio that includes
          ASP.NET development tools and SQL Server support. You can download it
          from the official Visual Studio website.
        </p>

        <ul className="list-decimal ml-6 space-y-1">
          {installationSteps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </div>

      {/* Visual Studio IDE */}
      <div>
        <h2 className="text-2xl font-bold mb-2">The Visual Studio IDE</h2>
        <p className="leading-relaxed">
          When creating a new ASP.NET project, Visual Studio automatically
          generates required folders, configurations, and a default web form.
        </p>

        <p className="leading-relaxed">
          The web form consists of:
        </p>

        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>
            <strong>Default.aspx</strong> — contains HTML + ASP.NET markup
          </li>
          <li>
            <strong>Default.aspx.cs</strong> or <strong>.vb</strong> — contains
            server-side logic
          </li>
        </ul>

        <p className="leading-relaxed mt-3">
          Key IDE windows include:
        </p>

        <ul className="list-disc ml-6 space-y-1">
          <li>Web Forms Designer</li>
          <li>Solution Explorer</li>
          <li>Toolbox</li>
          <li>Properties Window</li>
        </ul>
      </div>

      {/* Working with Views and Windows */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Working with Views & Windows</h2>
        <ul className="list-disc ml-6 space-y-1">
          {windowActions.map((action, index) => (
            <li key={index}>{action}</li>
          ))}
        </ul>
      </div>

      {/* Adding Files & Folders */}
      <div>
        <h2 className="text-2xl font-bold mb-2">
          Adding Files and Folders to Your Website
        </h2>
        <p className="leading-relaxed mb-2">
          Solution Explorer allows you to add folders, pages, components, and
          existing resources to your project:
        </p>

        <ul className="list-disc ml-6 space-y-1">
          <li>Right-click the project → New Folder</li>
          <li>Right-click project → Add → New Item or Existing Item</li>
          <li>Select ASP.NET folders like App_Data, App_Code, etc.</li>
        </ul>
      </div>

      {/* Projects & Solutions */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Projects and Solutions</h2>
        <p className="leading-relaxed mb-3">
          A Solution may contain one or more projects. Each ASP.NET project may
          include multiple components, such as web pages, data sources, images,
          and assemblies.
        </p>

        <p className="font-semibold">Common project files:</p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          {projectContents.map((file, index) => (
            <li key={index}>{file}</li>
          ))}
        </ul>

        <p className="leading-relaxed mt-3">
          During compilation, these files are built into assemblies
          (.exe or .dll).
        </p>
      </div>

      {/* Build & Run */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Building and Running a Project</h2>
        <p className="leading-relaxed mb-2">
          You can run an ASP.NET application using:
        </p>

        <ul className="list-disc ml-6 space-y-1">
          {runOptions.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>

        <p className="leading-relaxed mt-3">
          When executed, Visual Studio compiles the project, generates assemblies,
          and launches the application in the browser.
        </p>
      </div>
    </div>
  );
};

export default AspNetEnvironmentSetup;
