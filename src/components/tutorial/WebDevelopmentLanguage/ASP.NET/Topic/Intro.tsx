import React from "react";

const AspNetIntroduction: React.FC = () => {
  const frameworkComponents = [
    {
      title: "Common Language Runtime (CLR)",
      desc: "Handles memory management, exception handling, debugging, security, code execution, verification, and JIT compilation."
    },
    {
      title: ".NET Framework Class Library",
      desc: "A rich collection of reusable classes, interfaces, structures, and types."
    },
    {
      title: "Common Language Specification (CLS)",
      desc: "Defines rules that ensure language interoperability within .NET."
    },
    {
      title: "Common Type System (CTS)",
      desc: "Specifies how types are declared, used, and managed during runtime."
    },
    {
      title: "Metadata & Assemblies",
      desc: "Metadata describes program structure; assemblies contain IL code, manifest, metadata, and resources."
    },
    {
      title: "Windows Forms",
      desc: "Provides a graphical interface for Windows desktop applications."
    },
    {
      title: "ASP.NET & ASP.NET AJAX",
      desc: "ASP.NET builds web applications, while AJAX enables async page updates."
    },
    {
      title: "ADO.NET",
      desc: "Provides access to relational databases, XML, and data services."
    },
    {
      title: "Windows Workflow Foundation (WF)",
      desc: "Used to build workflow-enabled applications."
    },
    {
      title: "Windows Presentation Foundation (WPF)",
      desc: "Creates modern, UI-rich desktop applications with multimedia and animations."
    },
    {
      title: "Windows Communication Foundation (WCF)",
      desc: "Framework for building connected, service-oriented applications."
    },
    {
      title: "Windows CardSpace",
      desc: "Manages and protects digital identities online."
    },
    {
      title: "LINQ",
      desc: "Supports structured data querying using SQL-like syntax in .NET languages."
    }
  ];

  return (
    <div className="mt-20 space-y-8">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        ASP.NET - Introduction
      </h1>

      {/* Overview */}
      <p className="leading-relaxed">
        ASP.NET is a powerful web development platform by Microsoft that
        provides a structured programming model, infrastructure, and essential
        services for building robust, dynamic web applications for PCs and
        mobile devices.
      </p>

      <p className="leading-relaxed">
        Built on top of the HTTP protocol, ASP.NET enables seamless
        browser-to-server communication while supporting modern, interactive web
        development.
      </p>

      <p className="leading-relaxed">
        As a part of the Microsoft .NET platform, ASP.NET applications consist
        of compiled code built using reusable components and objects defined in
        the .NET Framework.
      </p>

      {/* Supported Languages */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Supported Programming Languages</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>C#</li>
          <li>Visual Basic .NET</li>
          <li>JScript</li>
          <li>J#</li>
        </ul>
      </div>

      {/* Web Forms Model */}
      <div>
        <h2 className="text-2xl font-bold mb-2">ASP.NET Web Forms Model</h2>
        <p className="leading-relaxed">
          ASP.NET Web Forms extends event-driven programming to the web. A web
          form is submitted from the browser to the server, and the server
          returns a complete HTML response.
        </p>
        <p className="leading-relaxed">
          Since HTTP is stateless, ASP.NET manages state using:
        </p>

        <ul className="list-disc ml-6 space-y-1">
          <li>
            <strong>Page State</strong> — data from controls within a page
          </li>
          <li>
            <strong>Session State</strong> — user data preserved across multiple
            pages
          </li>
        </ul>

        <p className="leading-relaxed">
          For example, in a shopping cart system, session state remembers items
          selected across multiple pages, enabling a consistent user experience.
        </p>
      </div>

      {/* ASP.NET Component Model */}
      <div>
        <h2 className="text-2xl font-bold mb-2">ASP.NET Component Model</h2>
        <p className="leading-relaxed">
          ASP.NET uses an object-oriented component model that provides:
        </p>

        <ul className="list-disc ml-6 space-y-1">
          <li>
            Server-side equivalents of HTML elements like <code>&lt;form&gt;</code> and{" "}
            <code>&lt;input&gt;</code>
          </li>
          <li>
            Built-in server controls such as TextBox, Button, GridView, Calendar,
            and more
          </li>
        </ul>

        <p className="leading-relaxed">
          When a user requests a page, IIS hands off processing to the ASP.NET
          runtime, which converts the .aspx file into a class instance derived
          from the .NET Page class—meaning every ASP.NET page is an object.
        </p>
      </div>

      {/* .NET Framework Components */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Components of .NET Framework 3.5</h2>
        <div className="space-y-4">
          {frameworkComponents.map((item, index) => (
            <div key={index} className="border rounded-xl p-4 shadow-sm">
              <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
              <p className="leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AspNetIntroduction;
