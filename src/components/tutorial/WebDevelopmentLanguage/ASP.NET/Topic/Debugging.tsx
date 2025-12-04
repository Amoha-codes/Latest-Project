import React from "react";

const AspNetDebugging: React.FC = () => {
  const debuggingConcepts = [
    "Step through code to observe variable values, object creation, and program flow.",
    "Modify values and test different scenarios at runtime.",
    "Examine execution of functions, loops, and conditional statements."
  ];

  const breakpointsSteps = [
    "Set a breakpoint by right-clicking on a line and selecting 'Insert Breakpoint'.",
    "A red dot appears in the left margin and the line is highlighted.",
    "When the code executes, it stops at the breakpoint allowing inspection.",
    "Modify breakpoint properties from the Properties menu: condition, hit count, filters, and actions.",
    "Use conditional breakpoints to evaluate expressions when execution reaches the line.",
    "Use hit count breakpoints to break after a specific number of executions.",
    "Filter breakpoints to target specific machines, processes, or threads.",
    "Use 'When Hit' to execute a custom action when a breakpoint is reached."
  ];

  const debugWindows = [
    "Immediate – Displays variables and expressions for immediate evaluation.",
    "Autos – Displays all variables in the current and previous statements.",
    "Locals – Displays all variables in the current context.",
    "Watch – Displays up to four custom sets of variables to monitor.",
    "Call Stack – Displays all methods in the call stack at current execution point.",
    "Threads – Displays and controls threads."
  ];

  return (
    <div className="mt-20 space-y-8">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        ASP.NET - Debugging
      </h1>

      {/* Introduction */}
      <p className="leading-relaxed">
        Debugging in ASP.NET allows developers to understand how the code executes,
        how variable values change, and how objects are created and destroyed. It 
        provides a step-by-step execution view to identify and fix issues.
      </p>

      {/* Key Concepts */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Key Concepts</h2>
        <ul className="list-disc ml-6 space-y-1">
          {debuggingConcepts.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Enabling Debug */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Enabling Debugging</h2>
        <p className="leading-relaxed mb-2">
          Visual Studio prompts to enable debugging the first time you run an ASP.NET project.
          The following snippet appears in the <code>web.config</code> when debugging is enabled:
        </p>
        <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
{`<system.web>
  <compilation debug="true">
    <assemblies>
      ...
    </assemblies>
  </compilation> 
</system.web>`}
        </pre>
      </div>

      {/* Breakpoints */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Breakpoints</h2>
        <p className="leading-relaxed mb-2">
          Breakpoints allow the program to pause execution at specific lines for inspection.
          Developers can step through code, examine variable values, and evaluate expressions.
        </p>
        <ol className="list-decimal ml-6 space-y-1">
          {breakpointsSteps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>

      {/* Debug Windows */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Debug Windows in Visual Studio</h2>
        <p className="leading-relaxed mb-2">
          Visual Studio provides multiple debug windows to monitor variables, program flow,
          and thread execution:
        </p>
        <ul className="list-disc ml-6 space-y-1">
          {debugWindows.map((window, index) => (
            <li key={index}>{window}</li>
          ))}
        </ul>
      </div>

      {/* Summary */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Summary</h2>
        <p className="leading-relaxed">
          Debugging is an essential part of ASP.NET development. By using breakpoints, 
          debug windows, and Visual Studio's debugging toolbar, developers can efficiently
          detect and fix errors, optimize performance, and ensure application reliability.
        </p>
      </div>
    </div>
  );
};

export default AspNetDebugging;
