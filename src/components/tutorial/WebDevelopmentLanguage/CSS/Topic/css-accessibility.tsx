import React from "react";

const CssAccessibilityStyling: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Accessibility Styling
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        A well-designed website must be accessible to all users — including 
        people with disabilities. CSS accessibility styling helps improve 
        readability, usability, and the overall experience by following 
        inclusive design practices.
      </p>

      {/* Section 1 */}
      <h2 className="text-2xl font-bold">1. Provide High Color Contrast</h2>
      <p className="leading-relaxed">
        High contrast ensures text is readable for users with visual 
        impairments or color blindness.
      </p>

      <h3 className="text-xl font-semibold">Good Example</h3>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`body {
  background-color: #ffffff;
  color: #000000;
}`}
      </pre>

      <h3 className="text-xl font-semibold">Bad Example</h3>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`body {
  background-color: #eeeeee;
  color: #cccccc;
}`}
      </pre>

      {/* Section 2 */}
      <h2 className="text-2xl font-bold">2. Provide Good Font, Size, and Line Height</h2>
      <p className="leading-relaxed">
        Use readable fonts and allow text scaling using relative units like{" "}
        <code>rem</code>.
      </p>

      <h3 className="text-xl font-semibold">Good Example</h3>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`body {
  font-family: Arial, sans-serif;
  font-size: 1rem;
  line-height: 1.6;
}`}
      </pre>

      <h3 className="text-xl font-semibold">Bad Example</h3>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`body {
  font-family: Georgia, serif;
  font-size: 12px;
  font-style: italic;
  font-variant: small-caps;
  line-height: 90%;
}`}
      </pre>

      {/* Section 3 */}
      <h2 className="text-2xl font-bold">3. Use Visible Focus Indicators</h2>
      <p className="leading-relaxed">
        Keyboard users must clearly see which element is currently focused.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`a:focus, button:focus, input:focus {
  outline: 2px solid orange;
}`}
      </pre>

      {/* Section 4 */}
      <h2 className="text-2xl font-bold">4. Avoid Hiding Focus</h2>

      <h3 className="text-xl font-semibold">Bad Example</h3>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`button:focus {
  outline: none;
}`}
      </pre>

      <h3 className="text-xl font-semibold">Good Example</h3>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`button:focus {
  outline: 2px solid orange;
}`}
      </pre>

      {/* Section 5 */}
      <h2 className="text-2xl font-bold">5. Use CSS + Semantic HTML</h2>
      <p className="leading-relaxed">
        Semantic HTML improves accessibility while CSS provides visual styling.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`nav {
  background-color: #333;
  color: white;
}

aside {
  background-color: #333;
  color: white;
}`}
      </pre>

      {/* Section 6 */}
      <h2 className="text-2xl font-bold">6. Respect User Preferences</h2>
      <p className="leading-relaxed">
        Some users prefer reduced motion. Detect their preferences using{" "}
        <code>@media (prefers-reduced-motion)</code>.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}`}
      </pre>

      {/* Summary */}
      <h2 className="text-2xl font-bold">Summary</h2>
      <ul className="list-disc ml-6 space-y-1 leading-relaxed">
        <li>Use high color contrast for readability</li>
        <li>Use readable fonts with proper size and line-height</li>
        <li>Never hide focus indicators</li>
        <li>Use semantic HTML with CSS</li>
        <li>Respect user motion preferences</li>
      </ul>

    </div>
  );
};

export default CssAccessibilityStyling;
