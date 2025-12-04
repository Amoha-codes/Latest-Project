import React from "react";

const DartPackages: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        Dart Programming - Packages
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        A <span className="font-semibold">package</span> is a mechanism to encapsulate a group of programming units. Dart applications often require third-party libraries or plugins. The package manager for Dart is <span className="font-semibold">pub</span>.
      </p>

      <p className="leading-relaxed">
        Packages are hosted at <a href="https://pub.dartlang.org/" className="text-blue-600 underline">https://pub.dartlang.org/</a>. Each Dart project contains a <code>pubspec.yaml</code> file which defines dependencies and metadata like application name, author, version, and description.
      </p>

      <p className="leading-relaxed font-semibold">Example pubspec.yaml:</p>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>
          <code>
{`name: 'vector_victor'
version: 0.0.1
description: An absolute bare-bones web app.
dependencies:
  browser: '>=0.10.0 <0.11.0'`}
          </code>
        </pre>
      </div>

      {/* Pub Commands */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">Important pub Commands</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>pub get</strong> − Installs all packages your application depends on.</li>
          <li><strong>pub upgrade</strong> − Upgrades dependencies to newer versions.</li>
          <li><strong>pub build</strong> − Builds the web application into a <code>build</code> folder.</li>
          <li><strong>pub help</strong> − Displays help for all pub commands.</li>
        </ul>

        <p className="leading-relaxed">
          In IDEs like WebStorm, right-clicking on <code>pubspec.yaml</code> allows you to run these commands directly.
        </p>
      </div>

      {/* Installing a Package */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">Installing a Package</h2>
        <p className="leading-relaxed">
          For example, to parse XML, you can use the <span className="font-semibold">xml</span> package.
        </p>

        <p className="leading-relaxed font-semibold">Step 1 − Add dependency in pubspec.yaml:</p>
        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          <pre>
            <code>
{`name: TestApp
version: 0.0.1
description: A simple console application.
dependencies:
  xml: ^6.1.0`}
            </code>
          </pre>
        </div>

        <p className="leading-relaxed">
          Right-click <code>pubspec.yaml</code> in the IDE and select <strong>Get dependencies</strong> to run <code>pub get</code>.
        </p>
      </div>

      {/* Using Package */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">Using the Package</h2>
        <p className="leading-relaxed">
          Import the package in your Dart file:
        </p>
        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          <pre>
            <code>
{`import 'package:xml/xml.dart' as xml;`}
            </code>
          </pre>
        </div>

        <p className="leading-relaxed font-semibold">Example: Parsing XML String</p>
        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          <pre>
            <code>
{`import 'package:xml/xml.dart' as xml;

void main() {
  print("xml");

  var bookshelfXml = '''<?xml version="1.0"?>
<bookshelf>
  <book>
    <title lang="english">Growing a Language</title>
    <price>29.99</price>
  </book>
  <book>
    <title lang="english">Learning XML</title>
    <price>39.95</price>
  </book>
  <price>132.00</price>
</bookshelf>''';

  var document = xml.parse(bookshelfXml);
  print(document.toString());
}`}
            </code>
          </pre>
        </div>

        <p className="leading-relaxed font-semibold">Output:</p>
        <div className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
          xml <br />
          &lt;?xml version="1.0"?&gt;&lt;bookshelf&gt; <br />
          &nbsp;&nbsp;&lt;book&gt; <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;title lang="english"&gt;Growing a Language&lt;/title&gt; <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;price&gt;29.99&lt;/price&gt; <br />
          &nbsp;&nbsp;&lt;/book&gt; <br />
          &nbsp;&nbsp;&lt;book&gt; <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;title lang="english"&gt;Learning XML&lt;/title&gt; <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;price&gt;39.95&lt;/price&gt; <br />
          &nbsp;&nbsp;&lt;/book&gt; <br />
          &nbsp;&nbsp;&lt;price&gt;132.00&lt;/price&gt; <br />
          &lt;/bookshelf&gt;
        </div>
      </div>
    </div>
  );
};

export default DartPackages;
