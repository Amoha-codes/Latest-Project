import React from "react";

const CssTextDecoration: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Text Decoration
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <code>text-decoration</code> property is used to control the appearance of lines on text. 
        It is a shorthand for <code>text-decoration-line</code>, <code>text-decoration-color</code>, 
        <code>text-decoration-style</code>, and <code>text-decoration-thickness</code>.
      </p>

      {/* Decoration Line */}
      <h2 className="text-2xl font-bold">Decoration Line</h2>
      <p className="leading-relaxed">
        The <code>text-decoration-line</code> property sets the type of line added to text. Values: 
        <b>none</b>, <b>underline</b>, <b>overline</b>, <b>line-through</b>. Multiple values can be combined.
      </p>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`h1 { text-decoration-line: overline; }
h2 { text-decoration-line: line-through; }
h3 { text-decoration-line: underline; }
p { text-decoration-line: overline underline; }`}
      </pre>

      {/* Decoration Color */}
      <h2 className="text-2xl font-bold">Decoration Color</h2>
      <p className="leading-relaxed">
        The <code>text-decoration-color</code> property sets the color of the decoration line.
      </p>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`h1 { text-decoration-line: overline; text-decoration-color: red; }
h2 { text-decoration-line: line-through; text-decoration-color: blue; }
h3 { text-decoration-line: underline; text-decoration-color: green; }
p { text-decoration-line: overline underline; text-decoration-color: purple; }`}
      </pre>

      {/* Decoration Style */}
      <h2 className="text-2xl font-bold">Decoration Style</h2>
      <p className="leading-relaxed">
        The <code>text-decoration-style</code> property sets the style of the line. Values: solid, double, dotted, dashed, wavy.
      </p>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`h1 { text-decoration-line: underline; text-decoration-style: solid; }
h2 { text-decoration-line: underline; text-decoration-style: double; }
h3 { text-decoration-line: underline; text-decoration-style: dotted; }
p.ex1 { text-decoration-line: underline; text-decoration-style: dashed; }
p.ex2 { text-decoration-line: underline; text-decoration-style: wavy; }
p.ex3 { text-decoration-line: underline; text-decoration-color: red; text-decoration-style: wavy; }`}
      </pre>

      {/* Decoration Thickness */}
      <h2 className="text-2xl font-bold">Decoration Thickness</h2>
      <p className="leading-relaxed">
        The <code>text-decoration-thickness</code> property sets the thickness of the line.
      </p>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`h1 { text-decoration-line: underline; text-decoration-thickness: auto; }
h2 { text-decoration-line: underline; text-decoration-thickness: 5px; }
h3 { text-decoration-line: underline; text-decoration-thickness: 25%; }
p { text-decoration-line: underline; text-decoration-color: red; text-decoration-style: double; text-decoration-thickness: 5px; }`}
      </pre>

      {/* Shorthand */}
      <h2 className="text-2xl font-bold">Shorthand Property</h2>
      <p className="leading-relaxed">
        The <code>text-decoration</code> shorthand combines line, color, style, and thickness.
      </p>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`h1 { text-decoration: underline; }
h2 { text-decoration: underline red; }
h3 { text-decoration: underline red double; }
p { text-decoration: underline red double 5px; }`}
      </pre>

      {/* Links */}
      <h2 className="text-2xl font-bold">Links</h2>
      <p className="leading-relaxed">
        By default, HTML links are underlined. Use <code>text-decoration: none;</code> to remove the underline.
      </p>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`a { text-decoration: none; }`}
      </pre>
    </div>
  );
};

export default CssTextDecoration;
