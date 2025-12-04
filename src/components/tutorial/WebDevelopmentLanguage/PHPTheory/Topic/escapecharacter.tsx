import React from "react";

const PhpEscapeCharacters: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        PHP - Escape Characters
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        Escape characters are used to insert characters inside a string that would otherwise
        break the syntax.  
        An escape character consists of a backslash (<code>\</code>) followed by the character
        you want to insert.
      </p>

      {/* Illegal Example */}
      <h2 className="text-2xl font-bold">Escape Character</h2>

      <p className="leading-relaxed">
        Some characters cannot be written directly inside a string.  
        For example, a double quote (<code>"</code>) inside a double-quoted string:
      </p>

      <h3 className="text-xl font-semibold">Example — Illegal string</h3>

      <pre className="bg-gray-100 p-3 rounded-md text-black font-mono whitespace-pre-wrap">
{`$x = "We are the so-called "Vikings" from the north.";   // ❌ ERROR`}
      </pre>

      <p className="leading-relaxed">
        To fix this, escape the double quotes using <code>\"</code>.
      </p>

      <h3 className="text-xl font-semibold">Example — Correct string using escape characters</h3>

      <pre className="bg-gray-100 p-3 rounded-md text-black font-mono whitespace-pre-wrap">
{`$x = "We are the so-called \\"Vikings\\" from the north.";`}
      </pre>

      {/* List of Escape Characters */}
      <h2 className="text-2xl font-bold">Escape Characters</h2>

      <p className="leading-relaxed">
        PHP supports several escape sequences inside double-quoted strings:
      </p>

      <table className="w-full border border-gray-300 text-left">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Code</th>
            <th className="p-2 border">Meaning</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="p-2 border">\\'</td><td className="p-2 border">Single Quote</td></tr>
          <tr><td className="p-2 border">\\"</td><td className="p-2 border">Double Quote</td></tr>
          <tr><td className="p-2 border">\\$</td><td className="p-2 border">ESCAPE PHP variables</td></tr>
          <tr><td className="p-2 border">\\n</td><td className="p-2 border">New Line</td></tr>
          <tr><td className="p-2 border">\\r</td><td className="p-2 border">Carriage Return</td></tr>
          <tr><td className="p-2 border">\\t</td><td className="p-2 border">Tab</td></tr>
          <tr><td className="p-2 border">\\f</td><td className="p-2 border">Form Feed</td></tr>
          <tr><td className="p-2 border">\\ooo</td><td className="p-2 border">Octal Value</td></tr>
          <tr><td className="p-2 border">\\xhh</td><td className="p-2 border">Hexadecimal Value</td></tr>
        </tbody>
      </table>

    </div>
  );
};

export default PhpEscapeCharacters;
