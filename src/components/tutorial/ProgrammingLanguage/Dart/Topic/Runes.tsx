import React from "react";

const DartRunes: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        Dart Programming - Runes
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        Strings in Dart are sequences of characters represented using Unicode UTF-16 code units.
        A <span className="font-semibold">rune</span> is an integer representing a Unicode code point.
      </p>

      {/* Accessing Runes */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">Accessing Runes in Dart</h2>

        <p className="leading-relaxed">
          Dart provides multiple ways to access code units and runes in a string:
        </p>

        <ul className="list-disc list-inside space-y-1">
          <li><b>String.codeUnitAt()</b> function</li>
          <li><b>String.codeUnits</b> property</li>
          <li><b>String.runes</b> property</li>
        </ul>

        {/* codeUnitAt example */}
        <h3 className="text-xl font-semibold">Using String.codeUnitAt()</h3>
        <p className="leading-relaxed">Returns the 16-bit UTF-16 code unit at the given index.</p>
        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          <pre>
            <code>{`void main() { 
  String x = 'Runes'; 
  print(x.codeUnitAt(0)); 
}`}</code>
          </pre>
        </div>
        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">82</div>

        {/* codeUnits example */}
        <h3 className="text-xl font-semibold">Using String.codeUnits</h3>
        <p className="leading-relaxed">Returns an unmodifiable list of UTF-16 code units of the string.</p>
        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          <pre>
            <code>{`void main() { 
  String x = 'Runes'; 
  print(x.codeUnits); 
}`}</code>
          </pre>
        </div>
        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          [82, 117, 110, 101, 115]
        </div>

        {/* runes example */}
        <h3 className="text-xl font-semibold">Using String.runes</h3>
        <p className="leading-relaxed">
          Returns an iterable of Unicode code points. You can convert each rune to a character using <b>String.fromCharCode()</b>.
        </p>
        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          <pre>
            <code>{`void main() { 
  "A string".runes.forEach((int rune) { 
    var character = String.fromCharCode(rune); 
    print(character); 
  });  
}`}</code>
          </pre>
        </div>
        <div className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`A
s
t
r
i
n
g`}
        </div>

        {/* Unicode example */}
        <h3 className="text-xl font-semibold">Using Unicode Code Points</h3>
        <p className="leading-relaxed">
          Unicode code points are expressed as <code>\uXXXX</code> or <code>\u{"XXXXX"}</code> for longer values.
        </p>
        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          <pre>
            <code>{`void main() { 
  Runes input = Runes('\\u{1f605}'); 
  print(String.fromCharCodes(input)); 
}`}</code>
          </pre>
        </div>
        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">😅</div>
      </div>
    </div>
  );
};

export default DartRunes;
