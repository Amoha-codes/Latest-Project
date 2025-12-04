import React from "react";

const CSSAttributeSelectors: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Attribute Selectors
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        CSS <b>attribute selectors</b> allow you to select and style HTML
        elements based on attributes or attribute values.  
        They are extremely useful when styling links, form elements, or any
        elements that contain specific attributes.
      </p>

      {/* Section 1 */}
      <h2 className="text-2xl font-bold">1 — [attribute] Selector</h2>
      <p className="leading-relaxed">
        Selects all elements that contain a specific attribute.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`a[target] {
  background-color: yellow;
}`}
      </pre>

      {/* Section 2 */}
      <h2 className="text-2xl font-bold">2 — [attribute="value"] Selector</h2>
      <p className="leading-relaxed">
        Selects elements with an attribute equal to a specific value.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`a[target="_blank"] {
  background-color: yellow;
}`}
      </pre>

      {/* Section 3 */}
      <h2 className="text-2xl font-bold">3 — [attribute~="value"] Selector</h2>
      <p className="leading-relaxed">
        Selects elements whose attribute contains a <b>specific word</b>.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`[title~="flower"] {
  border: 5px solid yellow;
}`}
      </pre>

      {/* Section 4 */}
      <h2 className="text-2xl font-bold">4 — [attribute|="value"] Selector</h2>
      <p className="leading-relaxed">
        Matches elements whose attribute value is exactly the given value OR begins
        with it followed by a hyphen.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`[class|="top"] {
  background: yellow;
}`}
      </pre>

      {/* Section 5 */}
      <h2 className="text-2xl font-bold">5 — [attribute^="value"] Selector</h2>
      <p className="leading-relaxed">
        Selects elements whose attribute value <b>starts with</b> the given value.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`[class^="top"] {
  background: yellow;
}`}
      </pre>

      {/* Section 6 */}
      <h2 className="text-2xl font-bold">6 — [attribute$="value"] Selector</h2>
      <p className="leading-relaxed">
        Selects elements whose attribute value <b>ends with</b> the given value.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`[class$="test"] {
  background: yellow;
}`}
      </pre>

      {/* Section 7 */}
      <h2 className="text-2xl font-bold">7 — [attribute*="value"] Selector</h2>
      <p className="leading-relaxed">
        Selects elements whose attribute value <b>contains</b> the given text.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`[class*="te"] {
  background: yellow;
}`}
      </pre>

      {/* Section 8 */}
      <h2 className="text-2xl font-bold">
        8 — Styling Form Elements With Attribute Selectors
      </h2>

      <p className="leading-relaxed">
        Attribute selectors are very useful for form input styling.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`input[type="text"] {
  width: 150px;
  padding: 6px;
  margin-bottom: 10px;
  background-color: pink;
}

input[type="button"] {
  width: 100px;
  padding: 6px;
  background-color: lightgreen;
}`}
      </pre>

      {/* Conclusion */}
      <h2 className="text-2xl font-bold">Conclusion</h2>
      <p className="leading-relaxed">
        CSS Attribute Selectors provide a powerful way to style elements based on
        attributes without using classes or IDs. They are especially helpful for
        styling dynamic or generated content.
      </p>

    </div>
  );
};

export default CSSAttributeSelectors;
