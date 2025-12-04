import React from "react";

const CssWebSafeFonts: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Web Safe Fonts
      </h1>

      {/* Introduction */}
      <p className="leading-relaxed">
        Web safe fonts are fonts that are universally installed across all browsers and devices. 
        There are no 100% guaranteed fonts, so always use fallback fonts in the <code>font-family</code> property.
      </p>

      {/* Fallback Fonts */}
      <h2 className="text-2xl font-bold">Fallback Fonts</h2>
      <p className="leading-relaxed">
        Provide multiple fonts in a list. If the first is unavailable, the browser uses the next one. Always end with a generic font family.
      </p>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`p {
  font-family: Tahoma, Verdana, sans-serif;
}`}
      </pre>

      {/* Best Web Safe Fonts */}
      <h2 className="text-2xl font-bold">Best Web Safe Fonts</h2>
      <p className="leading-relaxed">
        Here are some commonly used web safe fonts for HTML and CSS:
      </p>
      <ul className="list-disc ml-6 space-y-1">
        <li>Arial (sans-serif)</li>
        <li>Verdana (sans-serif)</li>
        <li>Tahoma (sans-serif)</li>
        <li>Trebuchet MS (sans-serif)</li>
        <li>Times New Roman (serif)</li>
        <li>Georgia (serif)</li>
        <li>Garamond (serif)</li>
        <li>Courier New (monospace)</li>
        <li>Brush Script MT (cursive)</li>
      </ul>

      {/* Individual Font Examples */}
      <h2 className="text-2xl font-bold">Examples of Web Safe Fonts</h2>

      <div className="space-y-6">
        <div>
          <p className="font-sans">Arial (sans-serif)</p>
          <p className="font-sans">Lorem ipsum dolor sit amet 0 1 2 3 4 5 6 7 8 9</p>
        </div>

        <div>
          <p className="font-sans">Verdana (sans-serif)</p>
          <p className="font-sans">Lorem ipsum dolor sit amet 0 1 2 3 4 5 6 7 8 9</p>
        </div>

        <div>
          <p className="font-sans">Tahoma (sans-serif)</p>
          <p className="font-sans">Lorem ipsum dolor sit amet 0 1 2 3 4 5 6 7 8 9</p>
        </div>

        <div>
          <p className="font-sans">Trebuchet MS (sans-serif)</p>
          <p className="font-sans">Lorem ipsum dolor sit amet 0 1 2 3 4 5 6 7 8 9</p>
        </div>

        <div>
          <p className="font-serif">Times New Roman (serif)</p>
          <p className="font-serif">Lorem ipsum dolor sit amet 0 1 2 3 4 5 6 7 8 9</p>
        </div>

        <div>
          <p className="font-serif">Georgia (serif)</p>
          <p className="font-serif">Lorem ipsum dolor sit amet 0 1 2 3 4 5 6 7 8 9</p>
        </div>

        <div>
          <p className="font-serif">Garamond (serif)</p>
          <p className="font-serif">Lorem ipsum dolor sit amet 0 1 2 3 4 5 6 7 8 9</p>
        </div>

        <div>
          <p className="font-mono">Courier New (monospace)</p>
          <p className="font-mono">Lorem ipsum dolor sit amet 0 1 2 3 4 5 6 7 8 9</p>
        </div>

        <div>
          <p className="font-cursive">Brush Script MT (cursive)</p>
          <p className="font-cursive">Lorem ipsum dolor sit amet 0 1 2 3 4 5 6 7 8 9</p>
        </div>
      </div>
    </div>
  );
};

export default CssWebSafeFonts;
