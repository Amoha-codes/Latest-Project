import React from "react";

const RubyStrings: React.FC = () => (
  <div className="mt-20 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-3">
      Ruby – Strings
    </h1>

    <p className="leading-relaxed">
      A String object in Ruby holds and manipulates a sequence of one or more bytes, typically representing human-readable characters.
    </p>

    {/* String Literals */}
    <h2 className="text-2xl font-bold mt-10">String Literals</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`'This is a simple Ruby string literal'
'Won\\'t you read O\\'Reilly\\'s book?'`}</pre>
    <p className="leading-relaxed">
      Single quotes can contain escaped apostrophes (\') or backslashes (\\) to avoid ending the string prematurely.
    </p>

    {/* Expression Substitution */}
    <h2 className="text-2xl font-bold mt-10">Expression Substitution</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`#!/usr/bin/ruby

x, y, z = 12, 36, 72
puts "The value of x is #{ x }."
puts "The sum of x and y is #{ x + y }."
puts "The average was #{ (x + y + z)/3 }."`}</pre>
    <p className="leading-relaxed font-semibold">Output:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`The value of x is 12.
The sum of x and y is 48.
The average was 40.`}</pre>

    {/* General Delimited Strings */}
    <h2 className="text-2xl font-bold mt-10">General Delimited Strings</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`%{Ruby is fun.}   # => "Ruby is fun."
%Q{ Ruby is fun. } # => " Ruby is fun. "
%q[Ruby is fun.]   # => 'Ruby is fun.'
%x!ls!             # => executes backtick command \`ls\``}</pre>

    {/* Escape Characters */}
    <h2 className="text-2xl font-bold mt-10">Escape Characters</h2>
    <p className="leading-relaxed">
      Ruby supports common escape sequences like:
      <ul className="list-disc ml-6 mt-2">
        <li>\\n – newline</li>
        <li>\\t – tab</li>
        <li>\\\\ – backslash</li>
        <li>\\' – single quote</li>
        <li>\\" – double quote</li>
      </ul>
    </p>

    {/* Character Encoding */}
    <h2 className="text-2xl font-bold mt-10">Character Encoding</h2>
    <p className="leading-relaxed">
      The default character set in Ruby is ASCII. UTF-8 or other modern encodings may use 1–4 bytes per character. You can change the character set using <code>$KCODE</code>:
    </p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`$KCODE = 'u'`}</pre>

    {/* String Built-in Methods */}
    <h2 className="text-2xl font-bold mt-10">String Built-in Methods</h2>
    <p className="leading-relaxed">
      You can create a new String object and call its methods:
    </p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`#!/usr/bin/ruby

myStr = String.new("THIS IS TEST")
foo = myStr.downcase

puts "#{foo}"`}</pre>
    <p className="leading-relaxed font-semibold">Output:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`this is test`}</pre>
  </div>
);

export default RubyStrings;
