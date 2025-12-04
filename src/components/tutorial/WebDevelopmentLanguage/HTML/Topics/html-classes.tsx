import React from "react";

const HtmlClassAttribute: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">HTML - Class Attribute</h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The HTML <code>class</code> attribute is used to specify a class for an HTML element. Multiple elements can share the same class. It is often used with CSS and JavaScript.
      </p>

      <h2 className="text-2xl font-semibold">Example - Divs with Same Class</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<style>
.city {
  background-color: tomato;
  color: white;
  border: 2px solid black;
  margin: 20px;
  padding: 20px;
}
</style>

<div class="city">
  <h2>London</h2>
  <p>London is the capital of England.</p>
</div>

<div class="city">
  <h2>Paris</h2>
  <p>Paris is the capital of France.</p>
</div>

<div class="city">
  <h2>Tokyo</h2>
  <p>Tokyo is the capital of Japan.</p>
</div>`}
      </pre>

      <h2 className="text-2xl font-semibold">Example - Span Elements</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<style>
.note {
  font-size: 120%;
  color: red;
}
</style>

<h1>My <span class="note">Important</span> Heading</h1>
<p>This is some <span class="note">important</span> text.</p>`}
      </pre>

      <p className="leading-relaxed">Tip: The <code>class</code> attribute can be used on any HTML element. Class names are case-sensitive.</p>

      <h2 className="text-2xl font-semibold">The Syntax For Class</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`.city {
  background-color: tomato;
  color: white;
  padding: 10px;
}

<h2 class="city">London</h2>
<p>London is the capital of England.</p>`}
      </pre>

      <h2 className="text-2xl font-semibold">Multiple Classes</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<h2 class="city main">London</h2>
<h2 class="city">Paris</h2>
<h2 class="city">Tokyo</h2>`}
      </pre>

      <h2 className="text-2xl font-semibold">Different Elements Can Share Same Class</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<h2 class="city">Paris</h2>
<p class="city">Paris is the capital of France</p>`}
      </pre>

      <h2 className="text-2xl font-semibold">Use of Class in JavaScript</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<button onclick="myFunction()">Hide Cities</button>

<script>
function myFunction() {
  var x = document.getElementsByClassName("city");
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
}
</script>`}
      </pre>

      <h2 className="text-2xl font-semibold">Chapter Summary</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>The HTML <code>class</code> attribute specifies one or more class names for an element.</li>
        <li>Classes are used by CSS and JavaScript to select and access specific elements.</li>
        <li>The <code>class</code> attribute can be used on any HTML element.</li>
        <li>Class names are case sensitive.</li>
        <li>Different HTML elements can point to the same class name.</li>
        <li>JavaScript can access elements with a specific class name using <code>getElementsByClassName()</code>.</li>
      </ul>
    </div>
  );
};

export default HtmlClassAttribute;
