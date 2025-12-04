import React from "react";

const DartDebugging: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        Dart Programming - Debugging
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        Developers often make mistakes while coding. A mistake in a program is called a <span className="font-semibold">bug</span>. The process of finding and fixing bugs is called <span className="font-semibold">debugging</span>. This section explains tools and techniques to help you debug Dart programs.
      </p>

      <p className="leading-relaxed">
        The WebStorm editor supports breakpoints and step-by-step debugging. You can watch variables, inspect the stack, and step into or over functions from the editor.
      </p>

      {/* Adding a Breakpoint */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">Adding a Breakpoint</h2>
        <p className="leading-relaxed">
          Consider the following Dart code (TestString.dart):
        </p>

        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          <pre>
            <code>{`void main() {
  int a = 10, b = 20, c = 5;
  c = c * c * c;

  print("\${a} + \${b} = \${a+b}");
  print("\${a}%\${b} = \${a%b}");  // Add a breakpoint here
  print("\${a}*\${b} = \${a*b}");
  print("\${a}/\${b} = \${a/b}");
  print(c);
}`}</code>
          </pre>
        </div>

        <p className="leading-relaxed">
          To add a breakpoint, click on the left margin next to the line number. For example, line 7 above.
        </p>
      </div>

      {/* Running in Debug Mode */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">Running in Debug Mode</h2>
        <p className="leading-relaxed">
          Right-click the Dart file in the project explorer (TestString.dart) and select <span className="font-semibold">Debug</span>. The debugger window will appear.
        </p>

        <p className="leading-relaxed">
          - The <strong>Variables</strong> tab shows the values of variables in the current context.<br/>
          - You can add watchers for specific variables to track their values.
        </p>
      </div>

      {/* Step Into, Step Over, Step Out */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">Debugger Actions</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Step Into (F7)</strong> − Executes code one statement at a time, entering subroutine calls.
          </li>
          <li>
            <strong>Step Over (F8)</strong> − Executes a line of code. If the line calls a subroutine, it will skip its internal execution.
          </li>
          <li>
            <strong>Step Out (Shift+F8)</strong> − Executes the remaining lines of the current function and stops at the next statement after the function call.
          </li>
        </ul>
      </div>

      {/* Output */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">Program Output</h2>
        <p className="leading-relaxed font-semibold">Output:</p>
        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          10 + 20 = 30 <br />
          10 % 20 = 10 <br />
          10 * 20 = 200 <br />
          10 / 20 = 0.5 <br />
          125
        </div>
      </div>
    </div>
  );
};

export default DartDebugging;
