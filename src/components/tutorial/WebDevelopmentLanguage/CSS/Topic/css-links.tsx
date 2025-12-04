import React from "react";

const CssLinks: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Links
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        CSS allows you to fully style HTML links using properties like{" "}
        <b>color</b>, <b>background-color</b>, <b>text-decoration</b>,{" "}
        <b>font-size</b>, and more.  
        Links can also be styled based on their interaction state (normal,
        visited, hover, active).
      </p>

      {/* States */}
      <h2 className="text-2xl font-bold">Link States</h2>
      <p className="leading-relaxed">
        The four common link states are:
      </p>

      <ul className="list-disc ml-6 space-y-1 leading-relaxed">
        <li><code>:link</code> — Unvisited link</li>
        <li><code>:visited</code> — Visited link</li>
        <li><code>:hover</code> — Mouse over the link</li>
        <li><code>:active</code> — Link being clicked</li>
      </ul>

      <p className="leading-relaxed font-semibold">
        Order rule:  
        <br /> <code>:hover</code> must come after <code>:link</code> and <code>:visited</code>.  
        <br /> <code>:active</code> must come after <code>:hover</code>.
      </p>

      {/* Example: Link State Styling */}
      <h2 className="text-2xl font-bold">Example — Link State Styling</h2>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`/* unvisited link */
a:link {
  color: red;
}

/* visited link */
a:visited {
  color: green;
}

/* mouse over link */
a:hover {
  color: hotpink;
}

/* active link */
a:active {
  color: blue;
}`}
      </pre>

      {/* Text Decoration */}
      <h2 className="text-2xl font-bold">Removing Underlines</h2>

      <p className="leading-relaxed">
        Use <code>text-decoration</code> to control the underline on links.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

a:active {
  text-decoration: underline;
}`}
      </pre>

      {/* Background Colors */}
      <h2 className="text-2xl font-bold">Styling Link Background</h2>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`a:link {
  background-color: yellow;
}

a:visited {
  background-color: cyan;
}

a:hover {
  background-color: lightgreen;
}

a:active {
  background-color: hotpink;
}`}
      </pre>

      {/* Link Buttons */}
      <h2 className="text-2xl font-bold">CSS Link Buttons</h2>

      <p className="leading-relaxed">
        Links can be styled to look like buttons by combining
        padding, background-color, borders, and inline-block display.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`a:link, a:visited {
  background-color: #f44336;
  color: white;
  padding: 14px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}

a:hover, a:active {
  background-color: red;
}`}
      </pre>

      {/* More Styles */}
      <h2 className="text-2xl font-bold">More Link Styling Examples</h2>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`a.one:link {color:red;}
a.one:visited {color:blue;}
a.one:hover {color:orange;}

a.two:link {color:red;}
a.two:visited {color:blue;}
a.two:hover {font-size:150%;}

a.three:link {color:red;}
a.three:visited {color:blue;}
a.three:hover {background:lightgreen;}

a.four:link {color:red;}
a.four:visited {color:blue;}
a.four:hover {font-family:monospace;}

a.five:link {color:red;text-decoration:none;}
a.five:visited {color:blue;text-decoration:none;}
a.five:hover {text-decoration:underline;}`}
      </pre>

      {/* Cursor Examples */}
      <h2 className="text-2xl font-bold">Cursor Styles for Links</h2>
      <p className="leading-relaxed">
        You can change the cursor style to improve usability:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`cursor: pointer;
cursor: help;
cursor: progress;
cursor: text;
cursor: move;`}
      </pre>

      {/* Conclusion */}
      <h2 className="text-2xl font-bold">Conclusion</h2>
      <p className="leading-relaxed">
        CSS provides powerful ways to style links, control their behavior in
        different states, and even turn them into buttons. Understanding link
        states and applying styles properly helps create intuitive and
        user-friendly navigation.
      </p>

    </div>
  );
};

export default CssLinks;
