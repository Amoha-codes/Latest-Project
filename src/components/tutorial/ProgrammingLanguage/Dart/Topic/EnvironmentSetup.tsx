import React from "react";

const DartEnvironment: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        Dart Programming - Environment
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        This chapter explains how to set up the Dart execution environment on the Windows platform
        along with using the online DartPad editor.
      </p>

      {/* DartPad Section */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">Executing Script Online with DartPad</h2>

        <p className="leading-relaxed">
          You can write and test Dart code online using{" "}
          <span className="font-semibold">DartPad</span> at dartpad.dev. It supports running Dart
          scripts and shows both console & HTML output.
        </p>

        <p className="leading-relaxed">
          DartPad can also run in strong mode which provides:
        </p>

        <ul className="list-disc list-inside space-y-1">
          <li>Stronger static and dynamic type checking</li>
          <li>Better JavaScript output for browser compatibility</li>
        </ul>

        {/* Code Example */}
        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          <pre>
            <code>
{`void main() { 
  print('hello world'); 
}`}
            </code>
          </pre>
        </div>

        <p className="leading-relaxed font-semibold">Output:</p>

        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          hello world
        </div>
      </div>

      {/* Local Environment */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">Setting Up the Local Environment</h2>

        <h3 className="text-xl font-semibold">Using a Text Editor</h3>
        <p className="leading-relaxed">
          You can write Dart code using editors like Notepad, Notepad++, VS Code, Emacs or Vim.
          Dart files use the extension <span className="font-semibold">.dart</span>.
        </p>

        <h3 className="text-xl font-semibold">Installing the Dart SDK</h3>
        <p className="leading-relaxed">
          You can download the Dart SDK from the official website. After installation, add the SDK
          <span className="font-semibold"> /bin </span> folder to your system PATH.
        </p>

        <p className="leading-relaxed font-semibold">Verify Installation:</p>

        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          Dart
        </div>

        <p className="leading-relaxed">
          If installed successfully, you will see the Dart runtime information.
        </p>
      </div>

      {/* IDE Support */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">IDE Support</h2>

        <p className="leading-relaxed">
          Dart is supported by many IDEs including Eclipse, IntelliJ, and WebStorm.
        </p>

        <h3 className="text-xl font-semibold">Setting up Dart in WebStorm</h3>

        <ol className="list-decimal list-inside space-y-2">
          <li>Install the Dart SDK.</li>
          <li>Create a new Dart project in WebStorm.</li>
          <li>Select Dart as the project type.</li>
          <li>Set the Dart SDK path (e.g. <i>dartsdk</i> folder).</li>
        </ol>

        <h3 className="text-xl font-semibold">Adding a Dart File</h3>

        <ol className="list-decimal list-inside space-y-2">
          <li>Right-click on the project.</li>
          <li>Select <strong>New → Dart File</strong>.</li>
          <li>Enter a file name.</li>
        </ol>
      </div>

      {/* dart2js Tool */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">The dart2js Tool</h2>

        <p className="leading-relaxed">
          The <span className="font-semibold">dart2js</span> tool compiles Dart code into JavaScript,
          enabling the code to run on browsers without Dart VM support.
        </p>

        <p className="leading-relaxed font-semibold">Compile Dart to JavaScript:</p>

        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          <pre>
            <code>
{`dart2js --out=<output_file>.js <script>.dart`}
            </code>
          </pre>
        </div>

        <p className="leading-relaxed">
          The output file contains the JavaScript equivalent of your Dart script.
        </p>
      </div>
    </div>
  );
};

export default DartEnvironment;
