import React from "react";

const HtmlIdAttribute: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">HTML - id Attribute</h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The HTML <code>id</code> attribute is used to specify a <strong>unique id</strong> for an HTML element. 
        Each id must be unique within the HTML document. It is often used with CSS and JavaScript.
      </p>

      <h2 className="text-2xl font-semibold">Example - Styling with ID</h2>
      <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
{`<style>
#myHeader {
  background-color: lightblue;
  color: black;
  padding: 40px;
  text-align: center;
}
</style>

<h1 id="myHeader">My Header</h1>`}
      </pre>

      <p className="leading-relaxed">
        Note: The id name is case sensitive, must contain at least one character, cannot start with a number, and must not contain whitespace.
      </p>

      <h2 className="text-2xl font-semibold">Difference Between Class and ID</h2>
      <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
{`<style>
/* Style the element with the id "myHeader" */
#myHeader {
  background-color: lightblue;
  color: black;
  padding: 40px;
  text-align: center;
}

/* Style all elements with the class name "city" */
.city {
  background-color: tomato;
  color: white;
  padding: 10px;
}
</style>

<!-- Unique ID -->
<h1 id="myHeader">My Cities</h1>

<!-- Multiple elements with same class -->
<h2 class="city">London</h2>
<p>London is the capital of England.</p>

<h2 class="city">Paris</h2>
<p>Paris is the capital of France.</p>

<h2 class="city">Tokyo</h2>
<p>Tokyo is the capital of Japan.</p>`}
      </pre>

      <h2 className="text-2xl font-semibold">HTML Bookmarks with ID and Links</h2>
      <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
{`<!-- Create a bookmark -->
<h2 id="C4">Chapter 4</h2>

<!-- Link to the bookmark within the same page -->
<a href="#C4">Jump to Chapter 4</a>

<!-- Link to the bookmark from another page -->
<a href="html_demo.html#C4">Jump to Chapter 4</a>`}
      </pre>

      <h2 className="text-2xl font-semibold">Using ID in JavaScript</h2>
      <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
{`<script>
function displayResult() {
  document.getElementById("myHeader").innerHTML = "Have a nice day!";
}
</script>`}
      </pre>

      <h2 className="text-2xl font-semibold">Chapter Summary</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>The <code>id</code> attribute specifies a unique id for an HTML element.</li>
        <li>The value of the <code>id</code> attribute must be unique within the document.</li>
        <li>The <code>id</code> is used by CSS and JavaScript to style/select a specific element.</li>
        <li>The id value is case sensitive.</li>
        <li>The <code>id</code> attribute can also be used to create HTML bookmarks.</li>
        <li>JavaScript can access an element with a specific id using <code>getElementById()</code>.</li>
      </ul>
    </div>
  );
};

export default HtmlIdAttribute;
