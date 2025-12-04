

const AspNetCustomControls: React.FC = () => {
  const userControlSteps = [
    "Create a new web application.",
    "Right-click the project → Add New Item → Web User Control (.ascx).",
    "Name it (e.g., footer.ascx) and add your markup.",
    "Add a <%@ Register %> directive on the page where it will be used.",
    "Insert the user control tag with its prefix and ID."
  ];

  const customControlSteps = [
    "Create a new ASP.NET Server Control project in the solution.",
    "Build the project to generate a DLL.",
    "Add a reference to the DLL in your web project.",
    "Register the control with <%@ Register Assembly %> directive.",
    "Use the control tag in your page markup like any standard control."
  ];

  const palindromeControlExample = [
    "Add a TextBox for user input.",
    "Add a Button to trigger palindrome check.",
    "Add the custom control (ServerControl1) with Text property.",
    "In the Button click event, assign the TextBox value to the custom control's Text property.",
    "RenderContents method checks the palindrome and displays the result with color formatting."
  ];

  return (
    <div className="mt-20 space-y-8">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        ASP.NET - Custom Controls
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        ASP.NET allows you to create reusable controls to enhance web pages. 
        There are two main types:
        <strong> User Controls (.ascx)</strong> and <strong>Custom Controls (.dll)</strong>.
      </p>

      {/* User Controls */}
      <div>
        <h2 className="text-2xl font-bold mb-2">User Controls</h2>
        <p className="leading-relaxed mb-2">
          User controls act like mini web forms and can be reused across pages.
          Key characteristics:
        </p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Have an .ascx extension</li>
          <li>No &lt;html&gt;, &lt;body&gt;, or &lt;form&gt; tags</li>
          <li>Use Control directive instead of Page directive</li>
        </ul>

        <p className="leading-relaxed mt-2">
          Steps to create a simple footer user control:
        </p>
        <ol className="list-decimal ml-6 space-y-1">
          {userControlSteps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>

      {/* Custom Controls */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Custom Controls</h2>
        <p className="leading-relaxed mb-2">
          Custom controls are compiled into DLLs and can be used like any ASP.NET server control.
          They can be created by:
        </p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Deriving from an existing control</li>
          <li>Combining multiple controls into one</li>
          <li>Deriving from the base WebControl class</li>
        </ul>

        <p className="leading-relaxed mt-2">
          Steps to create and use a custom control:
        </p>
        <ol className="list-decimal ml-6 space-y-1">
          {customControlSteps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>

      {/* Palindrome Example */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Custom Control Example - Palindrome Check</h2>
        <p className="leading-relaxed mb-2">
          Extend the custom control to include a method for checking palindromes.
          Steps to implement:
        </p>
        <ol className="list-decimal ml-6 space-y-1">
          {palindromeControlExample.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>

        <p className="leading-relaxed mt-2">
          The <code>RenderContents</code> method can be overridden to render the text
          in different styles depending on whether it is a palindrome.
        </p>
      </div>

      {/* Notes */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Important Notes</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>After modifying a custom control, rebuild the solution to reflect changes.</li>
          <li>Custom controls appear in the Toolbox and can be used like built-in controls.</li>
          <li>Events, methods, and properties can be added to extend functionality.</li>
        </ul>
      </div>
    </div>
  );
};

export default AspNetCustomControls;
