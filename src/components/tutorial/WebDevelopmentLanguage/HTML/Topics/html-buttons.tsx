import React from "react";

const HtmlButtons: React.FC = () => {
  const handleClick = () => {
    alert("Hello!");
  };

  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">HTML - Buttons</h1>

      {/* Intro */}
      <p className="leading-relaxed">
        Buttons let users interact with a web page. They can submit forms, run JavaScript, or trigger different actions when clicked.
      </p>

      <h2 className="text-2xl font-semibold">HTML Button</h2>
      <p className="leading-relaxed">
        The HTML <code>&lt;button&gt;</code> element defines a clickable button. By itself, it does nothing until you add an action.
      </p>
      <button className="px-4 py-2 border rounded bg-gray-200 hover:bg-gray-300">Click Me</button>

      <h2 className="text-2xl font-semibold">Styling HTML Buttons</h2>
      <p className="leading-relaxed">
        Buttons are often styled with CSS:
      </p>
      <button className="mytestbtn px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
        Green Button
      </button>

      <h2 className="text-2xl font-semibold">Disabled Buttons</h2>
      <p className="leading-relaxed">
        Use the <code>disabled</code> attribute to make a button unclickable:
      </p>
      <button disabled className="px-4 py-2 bg-gray-400 text-white rounded cursor-not-allowed">
        Disabled Button
      </button>

      <h2 className="text-2xl font-semibold">Button with JavaScript</h2>
      <p className="leading-relaxed">
        You can run JavaScript when the user clicks a button using the <code>onClick</code> attribute:
      </p>
      <button onClick={handleClick} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Click Me
      </button>

      <h2 className="text-2xl font-semibold">Button Types</h2>
      <p className="leading-relaxed">
        The <code>type</code> attribute defines what a button does when clicked. There are three types:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li><code>type="button"</code> - A normal clickable button (does nothing by default)</li>
        <li><code>type="submit"</code> - Submits a form</li>
        <li><code>type="reset"</code> - Resets all form fields</li>
      </ul>
      <div className="space-x-2 mt-2">
        <button type="button" className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Normal Button</button>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Submit</button>
        <button type="reset" className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Reset</button>
      </div>

      <h2 className="text-2xl font-semibold">Buttons inside a Form</h2>
      <p className="leading-relaxed">
        Submit buttons send the form data to the server, while reset buttons clear the form:
      </p>
      <form action="/action_page.php" className="space-y-2">
        <label>
          First name: <input type="text" name="fname" className="border px-2 py-1 rounded" />
        </label>
        <div className="space-x-2">
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Submit</button>
          <button type="reset" className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Reset Form</button>
        </div>
      </form>

      <h2 className="text-2xl font-semibold">HTML Button Reference</h2>
      <p className="leading-relaxed">
        <code>&lt;button&gt;</code> - Defines a clickable button.
      </p>
    </div>
  );
};

export default HtmlButtons;
