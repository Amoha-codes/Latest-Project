import React from "react";

const HtmlJavaScript: React.FC = () => {
  // Function for the button example
  const showDateTime = () => {
    alert(new Date().toLocaleString());
  };

  // Function to demonstrate JavaScript content manipulation
  const changeContent = () => {
    const demo = document.getElementById("demo");
    if (demo) demo.innerHTML = "Hello JavaScript!";
  };

  // Function to demonstrate JavaScript style manipulation
  const changeStyle = () => {
    const demo = document.getElementById("demo");
    if (demo) {
      demo.style.fontSize = "25px";
      demo.style.color = "red";
      demo.style.backgroundColor = "yellow";
    }
  };

  // Function to demonstrate attribute change
  const changeImage = () => {
    const img = document.getElementById("image") as HTMLImageElement;
    if (img) img.src = "https://via.placeholder.com/150";
  };

  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        HTML - JavaScript
      </h1>

      <p className="leading-relaxed">
        JavaScript makes HTML pages more dynamic and interactive.
      </p>

      <h2 className="text-2xl font-semibold">My First JavaScript</h2>
      <button
        onClick={showDateTime}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Click me to display Date and Time
      </button>

      <h2 className="text-2xl font-semibold">The HTML &lt;script&gt; Tag</h2>
      <p className="leading-relaxed">
        The <code>&lt;script&gt;</code> tag defines a client-side script (JavaScript). It can contain script statements or link to an external script using the <code>src</code> attribute.
      </p>

      <h2 className="text-2xl font-semibold">JavaScript Example</h2>
      <p id="demo" className="mt-2 mb-2">
        This is a demo text
      </p>
      <div className="space-x-2">
        <button
          onClick={changeContent}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Change Content
        </button>
        <button
          onClick={changeStyle}
          className="bg-yellow-500 text-black px-4 py-2 rounded"
        >
          Change Style
        </button>
        <button
          onClick={changeImage}
          className="bg-purple-500 text-white px-4 py-2 rounded"
        >
          Change Image
        </button>
      </div>

      <h2 className="text-2xl font-semibold">Image Example</h2>
      <img
        id="image"
        src="https://via.placeholder.com/100"
        alt="demo"
        className="mt-2"
      />

      <h2 className="text-2xl font-semibold">The HTML &lt;noscript&gt; Tag</h2>
      <p className="leading-relaxed">
        The <code>&lt;noscript&gt;</code> tag defines alternate content for users who have disabled scripts in their browser or have a browser that doesn't support scripts:
      </p>
      <noscript>
        <p>Sorry, your browser does not support JavaScript!</p>
      </noscript>

      <h2 className="text-2xl font-semibold">Chapter Summary</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>Use the <code>&lt;script&gt;</code> tag to add JavaScript to an HTML page.</li>
        <li>JavaScript can change content, styles, and attributes of HTML elements.</li>
        <li>The <code>&lt;noscript&gt;</code> tag defines alternate content for browsers without JavaScript support.</li>
      </ul>
    </div>
  );
};

export default HtmlJavaScript;
