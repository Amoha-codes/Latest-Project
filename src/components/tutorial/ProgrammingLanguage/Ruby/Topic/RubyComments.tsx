import React from "react";

const RubyComments: React.FC = () => (
  <div className="mt-20 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-3">
      Ruby – Comments
    </h1>

    {/* Intro */}
    <p className="leading-relaxed">
      Comments in Ruby are ignored during program execution. They are used to
      explain code and make it easier to understand.
    </p>

    {/* Single-line Comments */}
    <h2 className="text-2xl font-bold mt-10">Ruby Single-Line Comments</h2>
    <p className="leading-relaxed">
      A single-line comment starts with <code>#</code> and continues until the
      end of the line.
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`#!/usr/bin/ruby -w
# This is a single line comment.

puts "Hello, Ruby!"`}</pre>

    <p className="leading-relaxed font-semibold">Output:</p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`Hello, Ruby!`}</pre>

    {/* Multiline Comments */}
    <h2 className="text-2xl font-bold mt-10">Ruby Multiline Comments</h2>
    <p className="leading-relaxed">
      Ruby supports multiline comments using <code>=begin</code> and{" "}
      <code>=end</code>. They must start at the beginning of a line (column 0).
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`#!/usr/bin/ruby -w

puts "Hello, Ruby!"

=begin
This is a multiline comment.
You can write as many lines as you like.
But =begin and =end must start at column 0.
=end`}</pre>

    <p className="leading-relaxed font-semibold">Output:</p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`Hello, Ruby!`}</pre>
  </div>
);

export default RubyComments;
