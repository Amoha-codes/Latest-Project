import React from "react";

const CssLists: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Lists
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        In HTML, lists are used to group related items together.
        CSS provides many properties to style both{" "}
        <code>&lt;ul&gt;</code> (unordered) and{" "}
        <code>&lt;ol&gt;</code> (ordered) lists — including
        marker type, images, spacing, and position.
      </p>

      {/* List types */}
      <h2 className="text-2xl font-bold">Types of Lists</h2>

      <ul className="list-disc ml-6 leading-relaxed">
        <li><b>Unordered list (ul)</b> — uses bullets</li>
        <li><b>Ordered list (ol)</b> — uses numbers or letters</li>
      </ul>

      {/* list-style-type */}
      <h2 className="text-2xl font-bold">List Item Marker Styles</h2>
      <p className="leading-relaxed">
        The <code>list-style-type</code> property controls the bullet or numbering style.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`ul.a { list-style-type: circle; }
ul.b { list-style-type: disc; }
ul.c { list-style-type: square; }

ol.d { list-style-type: upper-roman; }
ol.e { list-style-type: lower-roman; }
ol.f { list-style-type: lower-alpha; }
ol.g { list-style-type: decimal; }`}
      </pre>

      {/* list-style-image */}
      <h2 className="text-2xl font-bold">Using an Image as Marker</h2>
      <p className="leading-relaxed">
        You can replace the default marker with an image using{" "}
        <code>list-style-image</code>.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`ul {
  list-style-image: url('sqpurple.gif');
  list-style-type: square; /* fallback */
}`}
      </pre>

      {/* list-style-position */}
      <h2 className="text-2xl font-bold">Marker Position</h2>
      <p className="leading-relaxed">
        The <code>list-style-position</code> property sets whether the bullet
        appears <b>outside</b> or <b>inside</b> the list item.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`ul.a { list-style-position: outside; }
ul.b { list-style-position: inside; }`}
      </pre>

      {/* Remove bullets */}
      <h2 className="text-2xl font-bold">Removing List Markers</h2>
      <p className="leading-relaxed">
        Remove marker bullets using <code>list-style-type: none</code>.
        Also remove default margins for full control.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}`}
      </pre>

      {/* Shorthand */}
      <h2 className="text-2xl font-bold">Shorthand — list-style</h2>
      <p className="leading-relaxed">
        The <code>list-style</code> shorthand sets type, position, and image:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`ul {
  list-style: square inside url("sqpurple.gif");
}`}
      </pre>

      {/* Styling lists */}
      <h2 className="text-2xl font-bold">Styling Lists With Backgrounds</h2>
      <p className="leading-relaxed">
        You can use backgrounds, padding, and margins to make lists more
        visually appealing.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`ol {
  background: salmon;
  padding: 20px;
}

ol li {
  background: mistyrose;
  color: darkred;
  padding: 10px;
  margin-left: 20px;
}

ul {
  background: powderblue;
  padding: 20px;
}

ul li {
  background: mistyrose;
  color: darkblue;
  margin: 5px;
}`}
      </pre>

      {/* Conclusion */}
      <h2 className="text-2xl font-bold">Conclusion</h2>
      <p className="leading-relaxed">
        CSS offers powerful tools to fully customize list appearance.
        You can control marker types, replace bullets with images, adjust spacing,
        or even transform lists into decorative components for your layout.
      </p>

    </div>
  );
};

export default CssLists;
