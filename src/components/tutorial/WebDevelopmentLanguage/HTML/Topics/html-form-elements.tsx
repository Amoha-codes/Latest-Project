import React from "react";

const HtmlFormElements: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        HTML Form Elements
      </h1>

      <p className="leading-relaxed">
        This chapter describes all the different HTML form elements.
      </p>

      <h2 className="text-2xl font-semibold">The HTML &lt;form&gt; Elements</h2>
      <p className="leading-relaxed">
        The HTML <code>&lt;form&gt;</code> element can contain one or more of the following elements:
      </p>
      <ul className="list-disc ml-5 leading-relaxed">
        <li>&lt;input&gt;</li>
        <li>&lt;label&gt;</li>
        <li>&lt;select&gt;</li>
        <li>&lt;textarea&gt;</li>
        <li>&lt;button&gt;</li>
        <li>&lt;fieldset&gt;</li>
        <li>&lt;legend&gt;</li>
        <li>&lt;datalist&gt;</li>
        <li>&lt;output&gt;</li>
        <li>&lt;option&gt;</li>
        <li>&lt;optgroup&gt;</li>
      </ul>

      <h2 className="text-2xl font-semibold">The &lt;input&gt; Element</h2>
      <p className="leading-relaxed">
        The <code>&lt;input&gt;</code> element can be displayed in several ways depending on the <code>type</code> attribute.
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<label for="fname">First name:</label>
<input type="text" id="fname" name="fname">`}
      </pre>

      <h2 className="text-2xl font-semibold">The &lt;label&gt; Element</h2>
      <p className="leading-relaxed">
        The <code>&lt;label&gt;</code> element defines a label for form elements. It is useful for screen readers and improves click usability for small input elements.
      </p>

      <h2 className="text-2xl font-semibold">The &lt;select&gt; Element</h2>
      <p className="leading-relaxed">
        The <code>&lt;select&gt;</code> element defines a drop-down list.
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<label for="cars">Choose a car:</label>
<select id="cars" name="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
</select>`}
      </pre>
      <p className="leading-relaxed">
        Use <code>selected</code> to pre-select an option, <code>size</code> to show multiple visible values, and <code>multiple</code> to allow multiple selections.
      </p>

      <h2 className="text-2xl font-semibold">The &lt;textarea&gt; Element</h2>
      <p className="leading-relaxed">
        The <code>&lt;textarea&gt;</code> element defines a multi-line text input field.
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<textarea name="message" rows="10" cols="30">
The cat was playing in the garden.
</textarea>`}
      </pre>
      <p className="leading-relaxed">
        You can also use CSS to define the size of the text area:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<textarea name="message" style="width:200px; height:600px;">
The cat was playing in the garden.
</textarea>`}
      </pre>

      <h2 className="text-2xl font-semibold">The &lt;button&gt; Element</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<button type="button" onclick="alert('Hello World!')">Click Me!</button>`}
      </pre>

      <h2 className="text-2xl font-semibold">The &lt;fieldset&gt; and &lt;legend&gt; Elements</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<form action="/action_page.php">
  <fieldset>
    <legend>Personalia:</legend>
    <label for="fname">First name:</label><br>
    <input type="text" id="fname" name="fname" value="John"><br>
    <label for="lname">Last name:</label><br>
    <input type="text" id="lname" name="lname" value="Doe"><br><br>
    <input type="submit" value="Submit">
  </fieldset>
</form>`}
      </pre>

      <h2 className="text-2xl font-semibold">The &lt;datalist&gt; Element</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<form action="/action_page.php">
  <input list="browsers">
  <datalist id="browsers">
    <option value="Edge">
    <option value="Firefox">
    <option value="Chrome">
    <option value="Opera">
    <option value="Safari">
  </datalist>
</form>`}
      </pre>

      <h2 className="text-2xl font-semibold">The &lt;output&gt; Element</h2>
      <p className="leading-relaxed">
        The <code>&lt;output&gt;</code> element represents the result of a calculation performed by a script.
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<form action="/action_page.php"
  oninput="x.value=parseInt(a.value)+parseInt(b.value)">
  0
  <input type="range" id="a" name="a" value="50">
  100 +
  <input type="number" id="b" name="b" value="50">
  =
  <output name="x" for="a b"></output>
  <br><br>
  <input type="submit">
</form>`}
      </pre>
    </div>
  );
};

export default HtmlFormElements;
