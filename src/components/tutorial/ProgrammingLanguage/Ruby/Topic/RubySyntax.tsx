import React from "react";

const RubySyntax: React.FC = () => (
  <div className="mt-20 space-y-6">

    <h1 className="text-4xl font-extrabold border-b-2 pb-3">
      Ruby – Syntax
    </h1>

    {/* Simple Program */}
    <p className="leading-relaxed">
      Let’s start with a simple Ruby program. Ruby files use the <strong>.rb</strong> extension.
      Save the following code into a file named <code>test.rb</code>.
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`#!/usr/bin/ruby -w

puts "Hello, Ruby!"`}
    </pre>

    <p className="leading-relaxed">
      Assuming Ruby is installed and available in <code>/usr/bin</code>, run the program using:
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`$ ruby test.rb`}
    </pre>

    <p>The output will be:</p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
Hello, Ruby!
    </pre>

    {/* Whitespace */}
    <h2 className="text-2xl font-bold mt-10">Whitespace in Ruby</h2>

    <p className="leading-relaxed">
      Ruby generally ignores whitespace except inside strings. However, whitespace can sometimes
      change the interpretation of code.
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`a + b   # Interpreted as a + b (a is a variable)
a  +b   # Interpreted as a(+b) (a is a method call)`}
    </pre>

    {/* Line Endings */}
    <h2 className="text-2xl font-bold mt-10">Line Endings in Ruby</h2>

    <p className="leading-relaxed">
      Ruby treats semicolons and newlines as statement separators. If a line ends with an operator
      such as <code>+</code>, <code>-</code>, or a backslash, Ruby continues the statement.
    </p>

    {/* Identifiers */}
    <h2 className="text-2xl font-bold mt-10">Ruby Identifiers</h2>

    <p className="leading-relaxed">
      Identifiers are names for variables, methods, and constants. Ruby identifier rules:
    </p>

    <ul className="list-disc ml-8 space-y-2">
      <li>Identifiers are <strong>case-sensitive</strong>.</li>
      <li>May include letters, numbers, and underscores.</li>
      <li><code>Ram</code> and <code>RAM</code> are different identifiers.</li>
    </ul>

    {/* Reserved Words */}
    <h2 className="text-2xl font-bold mt-10">Reserved Words</h2>

    <p className="leading-relaxed">
      These keywords cannot be used as variable or constant names:
    </p>

    <div className="grid grid-cols-3 gap-2 text-lg">
      {[
        "BEGIN","do","next","then","END","else","nil","true","alias","elsif","not","undef",
        "and","end","or","unless","begin","ensure","redo","until","break","false","rescue","when",
        "case","for","retry","while","class","if","return","yield","def","in","self","__FILE__",
        "defined?","module","super","__LINE__"
      ].map((w, i) => (
        <span key={i}>{w}</span>
      ))}
    </div>

    {/* Here Document */}
    <h2 className="text-2xl font-bold mt-10">Here Document in Ruby</h2>

    <p className="leading-relaxed">
      A <strong>Here Document</strong> allows creating multi-line strings. Use <code>&lt;&lt;</code> followed by a terminator.
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`#!/usr/bin/ruby -w

print <<EOF
  This is the first way of creating
  a here document.
EOF

print <<"EOF"
  This is the second way of creating
  a here document.
EOF

print <<\`EOC\`
  echo hi there
  echo lo there
EOC

print <<"foo", <<"bar"
  I said foo.
foo
  I said bar.
bar`}
    </pre>

    {/* BEGIN Statement */}
    <h2 className="text-2xl font-bold mt-10">Ruby BEGIN Statement</h2>

    <p>The <strong>BEGIN</strong> block runs before the main program starts.</p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`BEGIN {
  puts "Initializing Ruby Program"
}

puts "This is main Ruby Program"`}
    </pre>

    {/* END Statement */}
    <h2 className="text-2xl font-bold mt-10">Ruby END Statement</h2>

    <p>The <strong>END</strong> block executes after the program finishes.</p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`puts "This is main Ruby Program"

END {
  puts "Terminating Ruby Program"
}

BEGIN {
  puts "Initializing Ruby Program"
}`}
    </pre>

    {/* Comments */}
    <h2 className="text-2xl font-bold mt-10">Ruby Comments</h2>

    <p className="leading-relaxed">Ruby supports single-line and multi-line comments.</p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`# Single-line comment
name = "Madisetti"   # Inline comment

# Multi-line comments:
=begin
This is a comment.
Spans multiple lines.
=end`}
    </pre>

  </div>
);

export default RubySyntax;
