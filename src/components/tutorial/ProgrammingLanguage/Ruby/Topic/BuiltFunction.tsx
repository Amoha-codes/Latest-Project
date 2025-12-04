import React from "react";

const RubyBuiltinFunctions: React.FC = () => (
  <div className="mt-20 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-3">
      Ruby – Built-in Functions
    </h1>

    <p>
      Since the <strong>Kernel</strong> module is included by the <strong>Object</strong> class, its methods are available everywhere in Ruby. They can be called without a receiver and are often referred to as functions.
    </p>

    <h2 className="text-2xl font-bold mt-6">Functions for Numbers</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`#!/usr/bin/ruby

num = 12.40
puts num.floor      # 12
puts num + 10       # 22.40
puts num.integer?   # false (num is a float)`}</pre>
    <p>Output:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`12
22.4
false`}</pre>

    <h2 className="text-2xl font-bold mt-6">Functions for Float</h2>
    <p>Ruby provides built-in functions specifically for float numbers (not shown in full in this example).</p>

    <h2 className="text-2xl font-bold mt-6">Math Functions</h2>
    <p>Ruby also provides several math-related built-in functions (like <code>Math.sqrt</code>, <code>Math.sin</code>, <code>Math.log</code>, etc.).</p>

    <h2 className="text-2xl font-bold mt-6">Conversion Field Specifier</h2>
    <p>
      The <code>sprintf(fmt[, arg...])</code> and <code>format(fmt[, arg...])</code> methods return a string where arguments are formatted according to the format string.
      Conversion specifiers (% followed by a conversion field) are replaced by formatted arguments.
    </p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`#!/usr/bin/ruby

str = sprintf("%s\\n", "abc")   # => "abc\\n"
puts str 

str = sprintf("d=%d", 42)      # => "d=42"
puts str 

str = sprintf("%04x", 255)     # => "00ff"
puts str 

str = sprintf("%8s", "hello")  # => "   hello"
puts str 

str = sprintf("%.2s", "hello") # => "he"
puts str`}</pre>
    <p>Output:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`abc
d=42
00ff
   hello
he`}</pre>

    <h2 className="text-2xl font-bold mt-6">Test Function Arguments</h2>
    <p>
      The <code>test(test, f1[, f2])</code> function performs file tests specified by the character <code>test</code>. It's often better to use <code>File</code> class methods like <code>File.readable?</code> for readability.
    </p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`#!/usr/bin/ruby

puts test(?r, "main.rb")  # => true
puts test(?w, "main.rb")  # => true
puts test(?x, "main.rb")  # => false`}</pre>
    <p>Output:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`true
true
false`}</pre>
  </div>
);

export default RubyBuiltinFunctions;
