import React from "react";

const RubyEnvironmentSetup: React.FC = () => (
  <div className="mt-20 space-y-6">

    <h1 className="text-4xl font-extrabold border-b-2 pb-3">
      Ruby – Environment Setup
    </h1>

    {/* Local Environment Intro */}
    <p className="text-lg leading-relaxed">
      Before you begin Ruby development, you need a proper environment setup.
      This chapter guides you through installation, command-line usage, and
      essential environment variables needed for Ruby development.
    </p>

    <p className="leading-relaxed">
      It is recommended to review the following setup topics before continuing:
    </p>

    <ul className="list-disc ml-8 space-y-2">
      <li><strong>Ruby Installation on Linux/Unix</strong> – Learn to install Ruby on Linux/Unix systems.</li>
      <li><strong>Ruby Installation on Windows</strong> – Guide for setting up Ruby on Windows machines.</li>
      <li><strong>Ruby Command Line Options</strong> – A list of useful options available for the Ruby interpreter.</li>
      <li><strong>Ruby Environment Variables</strong> – Important environment variables required for the Ruby interpreter.</li>
    </ul>

    {/* Editors */}
    <h2 className="text-2xl font-bold mt-10">Popular Ruby Editors</h2>

    <p className="leading-relaxed">
      To write Ruby programs, any text editor or IDE can be used. Common options include:
    </p>

    <ul className="list-disc ml-8 space-y-2">
      <li>
        <strong>Notepad / EditPlus (Windows):</strong> Simple text editors for Windows users.
      </li>
      <li>
        <strong>VIM / VI Editor:</strong> A widely-used editor available by default on most Unix-based systems and also available on Windows.
      </li>
      <li>
        <strong>RubyWin:</strong> A lightweight Ruby IDE for Windows.
      </li>
      <li>
        <strong>RDE (Ruby Development Environment):</strong> Another good IDE for developing Ruby applications on Windows.
      </li>
    </ul>

    {/* IRB */}
    <h2 className="text-2xl font-bold mt-10">Interactive Ruby (IRb)</h2>

    <p className="leading-relaxed">
      Interactive Ruby, commonly called <strong>IRb</strong>, provides a live shell
      to test Ruby code interactively. It comes bundled with Ruby installation,
      so no additional setup is required.
    </p>

    <p className="leading-relaxed">
      Start IRb by typing <code>irb</code> in your terminal:
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`$ irb
irb 0.6.1(99/09/16)
irb(main):001:0> def hello
irb(main):002:1>   out = "Hello World"
irb(main):003:1>   puts out
irb(main):004:1> end
nil
irb(main):005:0> hello
Hello World
nil
`}
    </pre>

    <p className="leading-relaxed">
      Don’t worry about understanding the above code yet—these concepts will be
      covered in upcoming chapters.
    </p>

  </div>
);

export default RubyEnvironmentSetup;
