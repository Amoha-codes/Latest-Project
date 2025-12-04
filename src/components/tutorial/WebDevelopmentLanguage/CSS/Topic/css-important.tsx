import React from "react";

const CssImportantRule: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS The !important Rule
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <code>!important</code> rule is used in CSS to give a declaration 
        the highest priority. When applied, it overrides all other rules for 
        the same property — regardless of specificity.
      </p>

      {/* Syntax */}
      <h2 className="text-2xl font-bold">Syntax</h2>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`selector {
  property: value !important;
}`}
      </pre>

      {/* Example */}
      <h2 className="text-2xl font-bold">Example — !important Overrides Everything</h2>

      <p className="leading-relaxed">
        In the example below, all paragraphs get a yellow background even when 
        inline styles, class selectors, and ID selectors try to override it.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`p {
  background-color: yellow !important;
}

#myid {
  background-color: blue;
}

.myclass {
  background-color: gray;
}`}
      </pre>

      {/* Use Sparingly */}
      <h2 className="text-2xl font-bold">Use !important Sparingly</h2>

      <p className="leading-relaxed">
        Overusing <code>!important</code> makes debugging much harder and causes 
        conflicts between styles. It should only be used when absolutely necessary.
      </p>

      <h3 className="text-xl font-semibold">Confusing Example:</h3>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`p {
  background-color: red !important;
}

#myid {
  background-color: blue !important;
}

.myclass {
  background-color: gray !important;
}`}
      </pre>

      {/* Fair Uses */}
      <h2 className="text-2xl font-bold">Fair Uses of !important</h2>

      <ul className="list-disc ml-6 space-y-2 leading-relaxed">
        <li>To override styles in systems where you cannot edit the original CSS (e.g., CMS).</li>
        <li>To respect user preferences, such as reduced motion settings.</li>
        <li>To enforce a strict design rule for a specific component.</li>
      </ul>

      {/* Example: Reduced Motion */}
      <h3 className="text-xl font-semibold">Example — Respect User Preferences</h3>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}`}
      </pre>

      {/* Button Example */}
      <h2 className="text-2xl font-bold">Example — Enforcing Button Style</h2>

      <p className="leading-relaxed">
        Without <code>!important</code>, parent elements with higher specificity 
        could override the button’s style.
      </p>

      <h3 className="text-xl font-semibold">Before:</h3>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`a.button {
  background-color: #8c8c8c;
  color: white;
  padding: 5px;
  border: 1px solid black;
}

#myDiv a {
  color: red;
  background-color: yellow;
}`}
      </pre>

      <h3 className="text-xl font-semibold">After Using !important:</h3>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`a.button {
  background-color: #8c8c8c !important;
  color: white !important;
  padding: 5px !important;
  border: 1px solid black !important;
  text-decoration: none !important;
}

#myDiv a {
  color: red;
  background-color: yellow;
}`}
      </pre>

      {/* Conclusion */}
      <h2 className="text-2xl font-bold">Conclusion</h2>

      <p className="leading-relaxed">
        The <code>!important</code> rule is powerful but should be used carefully.  
        It overrides all other CSS for the same property, which can be helpful in 
        special cases but harmful if overused. Use it only when no other approach works.
      </p>

    </div>
  );
};

export default CssImportantRule;
