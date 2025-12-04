import React from "react";

const AspNetErrorHandling: React.FC = () => {
  const errorHandlingConcepts = [
    "Tracing: Monitors program execution at the page or application level.",
    "Error Handling: Manages standard and custom errors at page or application level.",
    "Debugging: Allows stepping through code, setting breakpoints to analyze program flow."
  ];

  const tracingSteps = [
    "Enable page-level tracing by adding Trace='true' in the Page directive.",
    "Trace provides session ID, status code, request/response info, and more.",
    "You can add custom trace messages using Trace.Write and Trace.Warn methods.",
    "Application-level tracing can be enabled in web.config using <trace enabled='true' />."
  ];

  const errorHandlingSteps = [
    "Use web.config <customErrors> section for application-wide error handling.",
    "Mode attribute can be 'On', 'Off', or 'RemoteOnly' to control error page visibility.",
    "defaultRedirect defines the fallback page for unhandled errors.",
    "Specific <error> tags allow different pages for different HTTP status codes (e.g., 403, 404).",
    "Page-level error handling can be set using ErrorPage='PageError.htm' in Page directive."
  ];

  return (
    <div className="mt-20 space-y-8">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        ASP.NET - Error Handling
      </h1>

      {/* Introduction */}
      <p className="leading-relaxed">
        ASP.NET provides robust mechanisms to detect, trace, and handle errors. 
        The three main aspects of error management are tracing, error handling, 
        and debugging. Tracing and error handling help developers identify 
        problems, while debugging provides step-by-step code analysis.
      </p>

      {/* Key Concepts */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Key Concepts</h2>
        <ul className="list-disc ml-6 space-y-1">
          {errorHandlingConcepts.map((concept, index) => (
            <li key={index}>{concept}</li>
          ))}
        </ul>
      </div>

      {/* Tracing */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Tracing</h2>
        <p className="leading-relaxed mb-2">
          Tracing monitors execution and can provide detailed runtime information. 
          It can be enabled at page-level or application-level.
        </p>
        <ul className="list-disc ml-6 space-y-1">
          {tracingSteps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </div>

      {/* Error Handling */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Error Handling</h2>
        <p className="leading-relaxed mb-2">
          Error handling ensures that runtime errors are caught and appropriate 
          feedback or redirection is provided to users.
        </p>
        <ul className="list-disc ml-6 space-y-1">
          {errorHandlingSteps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </div>

      {/* Summary */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Summary</h2>
        <p className="leading-relaxed">
          ASP.NET's tracing and error handling features help developers identify 
          issues and provide users with meaningful error pages. By configuring 
          <code>Trace</code> and <code>customErrors</code> in page directives 
          and <code>web.config</code>, you can effectively monitor, debug, 
          and manage application errors.
        </p>
      </div>
    </div>
  );
};

export default AspNetErrorHandling;
