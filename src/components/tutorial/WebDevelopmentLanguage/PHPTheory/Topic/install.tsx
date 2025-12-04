import React from "react";

const PhpInstallation: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        PHP Installation
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        To start using PHP, you can either find a web host that already supports
        PHP, or install PHP on your own computer along with a web server and a
        database.
      </p>

      {/* What Do I Need */}
      <h2 className="text-2xl font-bold">What Do I Need?</h2>
      <p className="leading-relaxed">
        To begin working with PHP, you can choose one of these two options:
      </p>

      <ul className="list-disc list-inside space-y-1 leading-relaxed">
        <li>Use a web host with PHP and MySQL support</li>
        <li>Install PHP, a web server, and MySQL on your own PC</li>
      </ul>

      {/* Use a Web Host */}
      <h2 className="text-2xl font-bold">Use a Web Host With PHP Support</h2>
      <p className="leading-relaxed">
        If your web server already supports PHP, you do not need to do anything
        special. Simply create <code>.php</code> files and upload them to your
        server.
      </p>

      <ul className="list-disc list-inside space-y-1 leading-relaxed">
        <li>The server will automatically parse PHP files.</li>
        <li>No compilation or extra tools are needed.</li>
        <li>Because PHP is free, most web hosts support it by default.</li>
      </ul>

      {/* Set Up PHP on PC */}
      <h2 className="text-2xl font-bold">Set Up PHP on Your Own PC</h2>
      <p className="leading-relaxed">
        If your server does not support PHP, you must install:
      </p>

      <ul className="list-disc list-inside space-y-1 leading-relaxed">
        <li>A web server (like Apache)</li>
        <li>PHP</li>
        <li>A database system (like MySQL)</li>
      </ul>

      <p className="leading-relaxed">
        Installation instructions can be found on the official PHP website:
      </p>

      <a
        href="https://www.php.net/manual/en/install.php"
        target="_blank"
        className="text-purple-600 font-semibold underline"
      >
        https://www.php.net/manual/en/install.php
      </a>

      {/* Online Compiler */}
      <h2 className="text-2xl font-bold">PHP Online Compiler / Editor</h2>
      <p className="leading-relaxed">
        Using W3Schools' online PHP compiler, you can edit PHP code and instantly
        see the output in your browser.
      </p>

      {/* Example */}
      <h3 className="text-xl font-semibold">Example</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`<?php
$txt = "PHP";
echo "I love $txt!";
?>`}
      </pre>

      <p className="leading-relaxed font-semibold">Output:</p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
I love PHP!
      </pre>

      <p className="leading-relaxed">
        Click the <strong>"Try it Yourself"</strong> button in the editor to run
        the code.
      </p>

      {/* PHP Version */}
      <h2 className="text-2xl font-bold">PHP Version</h2>

      <p className="leading-relaxed">
        To check the installed PHP version, use the <code>phpversion()</code>{" "}
        function.
      </p>

      <h3 className="text-xl font-semibold">Example</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`echo phpversion();`}
      </pre>
    </div>
  );
};

export default PhpInstallation;
