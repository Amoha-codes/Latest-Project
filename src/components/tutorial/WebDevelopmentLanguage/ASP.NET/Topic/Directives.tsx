import React from "react";

const AspNetDirectives: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        ASP.NET - Directives
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        ASP.NET directives are instructions that provide page-level settings for
        the ASP.NET compiler and parser. They define configurations such as page
        language, inheritance, caching, master pages, namespaces, and custom
        controls. Directives appear at the top of <code>.aspx</code> or{" "}
        <code>.ascx</code> files.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<%@ directive_name attribute="value" [attribute="value"] %>`}
      </pre>

      {/* Application Directive */}
      <h2 className="text-2xl font-bold">Application Directive</h2>
      <p className="leading-relaxed">
        Defines application-level attributes in <code>Global.asax</code>.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<%@ Application Language="C#" %>`}
      </pre>

      <ul className="list-disc list-inside space-y-1">
        <li><strong>Language</strong> — Code language (C#, VB)</li>
        <li><strong>Inherits</strong> — Parent class</li>
        <li><strong>Description</strong> — Documentation text</li>
      </ul>

      {/* Assembly Directive */}
      <h2 className="text-2xl font-bold">Assembly Directive</h2>
      <p className="leading-relaxed">
        Links external assemblies or compiles source files dynamically.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<%@ Assembly Name="myassembly" %>`}
      </pre>

      <ul className="list-disc list-inside space-y-1">
        <li><strong>Name</strong> — Assembly name</li>
        <li><strong>Src</strong> — Source file path</li>
      </ul>

      {/* Control Directive */}
      <h2 className="text-2xl font-bold">Control Directive</h2>
      <p className="leading-relaxed">
        Used in user controls (<code>.ascx</code> files).
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<%@ Control Language="C#" EnableViewState="false" %>`}
      </pre>

      <ul className="list-disc list-inside space-y-1">
        <li>AutoEventWireup</li>
        <li>ClassName</li>
        <li>EnableViewState</li>
        <li>Inherits</li>
        <li>Src</li>
      </ul>

      {/* Implements Directive */}
      <h2 className="text-2xl font-bold">Implements Directive</h2>
      <p className="leading-relaxed">
        Specifies that the page or control implements a .NET interface.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<%@ Implements Interface="System.IDisposable" %>`}
      </pre>

      {/* Import Directive */}
      <h2 className="text-2xl font-bold">Import Directive</h2>
      <p className="leading-relaxed">
        Imports namespaces into pages or controls.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<%@ Import Namespace="System.Drawing" %>`}
      </pre>

      {/* Master Directive */}
      <h2 className="text-2xl font-bold">Master Directive</h2>
      <p className="leading-relaxed">
        Declares a page as a master page.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<%@ Master Language="C#" CodeFile="Site.master.cs" Inherits="SiteMaster" %>`}
      </pre>

      {/* MasterType Directive */}
      <h2 className="text-2xl font-bold">MasterType Directive</h2>
      <p className="leading-relaxed">
        Provides strong typing access to the Master page.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<%@ MasterType VirtualPath="~/Site.master" %>`}
      </pre>

      {/* OutputCache Directive */}
      <h2 className="text-2xl font-bold">OutputCache Directive</h2>
      <p className="leading-relaxed">
        Enables response caching for performance improvement.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<%@ OutputCache Duration="15" VaryByParam="None" %>`}
      </pre>

      {/* Page Directive */}
      <h2 className="text-2xl font-bold">Page Directive</h2>
      <p className="leading-relaxed">
        Defines settings related to page compilation, parsing, and behavior.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<%@ Page Language="C#" AutoEventWireup="true"
         CodeFile="Default.aspx.cs"
         Inherits="_Default"
         Trace="true" %>`}
      </pre>

      <h3 className="text-xl font-semibold">Common Attributes</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Language</li>
        <li>CodeFile</li>
        <li>Inherits</li>
        <li>EnableViewState</li>
        <li>Debug</li>
        <li>Trace</li>
        <li>ErrorPage</li>
      </ul>

      {/* PreviousPageType Directive */}
      <h2 className="text-2xl font-bold">PreviousPageType Directive</h2>
      <p className="leading-relaxed">
        Enables strongly typed access to the previous page during cross-page posting.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<%@ PreviousPageType VirtualPath="~/SourcePage.aspx" %>`}
      </pre>

      {/* Reference Directive */}
      <h2 className="text-2xl font-bold">Reference Directive</h2>
      <p className="leading-relaxed">
        Links another page or user control for compilation.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<%@ Reference Page="SomePage.aspx" %>`}
      </pre>

      {/* Register Directive */}
      <h2 className="text-2xl font-bold">Register Directive</h2>
      <p className="leading-relaxed">
        Registers custom server controls or user controls on a page.
      </p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<%@ Register Src="~/footer.ascx" TagName="Footer" TagPrefix="uc" %>`}
      </pre>

      {/* Conclusion */}
      <p className="leading-relaxed">
        Directives form the foundation of ASP.NET Web Forms behavior. They
        influence page processing, compilation, inheritance, caching, namespace
        importing, and UI structure—making them essential for web development.
      </p>
    </div>
  );
};

export default AspNetDirectives;
