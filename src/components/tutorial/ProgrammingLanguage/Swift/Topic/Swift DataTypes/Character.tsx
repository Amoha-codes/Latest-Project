import React from "react";

const SwiftCharacters: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold text-gray-900 border-b-2 pb-2 mt-15">
      Swift Characters
    </h1>

    <p className="text-lg text-gray-700 leading-relaxed mt-4">
      A <b>Character</b> in Swift represents a single user-visible character, while a{" "}
      <b>String</b> is a collection of characters. Swift makes it easy to work with
      both types and convert between them when needed.
    </p>

    {/* Characters and String Length */}
    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">
      Characters and String Length
    </h2>

    <p className="text-gray-700 leading-relaxed mt-3">
      Use the <code>Character</code> type for single characters. To find the number of
      characters in a string, use <code>String.count</code>.
    </p>

    <h3 className="text-xl font-bold text-gray-800 mt-4">Example</h3>

    <div className="bg-gray-900 text-green-400 font-mono p-4 rounded-lg shadow-md mt-3">
      <pre>
{`let ch: Character = "A"
print(ch)

let word = "Swift"
print(word.count)     // prints number of characters`}
      </pre>
    </div>

    {/* Characters and String Conversion */}
    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">
      Characters and String Conversion
    </h2>

    <p className="text-gray-700 leading-relaxed mt-3">
      Convert a <code>Character</code> to a <code>String</code> using{" "}
      <code>String()</code> initializer.
    </p>

    <h3 className="text-xl font-bold text-gray-800 mt-4">Example</h3>

    <div className="bg-gray-900 text-green-400 font-mono p-4 rounded-lg shadow-md mt-3">
      <pre>
{`let ch: Character = "A"
let s = String(ch)
print(s)            // "A"`}
      </pre>
    </div>
  </>
);

export default SwiftCharacters;
