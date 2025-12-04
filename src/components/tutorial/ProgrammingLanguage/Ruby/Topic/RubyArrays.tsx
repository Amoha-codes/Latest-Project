import React from "react";

const RubyArrays: React.FC = () => (
  <div className="mt-20 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-3">
      Ruby – Arrays
    </h1>

    <p className="leading-relaxed">
      Ruby arrays are ordered, integer-indexed collections of any object. Each element in an array is associated with an index, starting at 0. Negative indices count from the end, e.g., -1 is the last element.
    </p>

    <p className="leading-relaxed">
      Arrays can hold any object type including String, Integer, Hash, Symbol, or even another Array. Ruby arrays grow automatically when adding elements.
    </p>

    {/* Creating Arrays */}
    <h2 className="text-2xl font-bold mt-10">Creating Arrays</h2>
    <p className="leading-relaxed">
      Arrays can be created in several ways:
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`names = Array.new
names = Array.new(20)
names = Array.new(4, "mac")`}</pre>

    <p className="leading-relaxed font-semibold">Output:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`["mac", "mac", "mac", "mac"]`}</pre>

    <p className="leading-relaxed">
      You can also use a block to initialize elements dynamically:
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`nums = Array.new(10) { |e| e * 2 }
puts "#{nums}"`}</pre>

    <p className="leading-relaxed font-semibold">Output:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`[0, 2, 4, 6, 8, 10, 12, 14, 16, 18]`}</pre>

    <p className="leading-relaxed">
      Other ways to create arrays include:
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`nums = Array.[](1, 2, 3, 4, 5)
nums = Array[1, 2, 3, 4, 5]
digits = Array(0..9)
puts "#{digits}"`}</pre>

    <p className="leading-relaxed font-semibold">Output:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]`}</pre>

    {/* Array Built-in Methods */}
    <h2 className="text-2xl font-bold mt-10">Array Built-in Methods</h2>
    <p className="leading-relaxed">
      To call a method on an array object:
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`digits = Array(0..9)
num = digits.at(6)
puts "#{num}"`}</pre>

    <p className="leading-relaxed font-semibold">Output:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`6`}</pre>

    {/* Array Pack Directives */}
    <h2 className="text-2xl font-bold mt-10">Array Pack Directives</h2>
    <p className="leading-relaxed">
      The <code>Array#pack</code> method can be used to convert array elements into a binary sequence according to format directives:
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`a = ["a", "b", "c"]
n = [65, 66, 67]

puts a.pack("A3A3A3")   # => "a  b  c  "
puts a.pack("a3a3a3")   # => "a\\000\\000b\\000\\000c\\000\\000"
puts n.pack("ccc")       # => "ABC"`}</pre>

    <p className="leading-relaxed font-semibold">Output:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`a  b  c
a\0\0b\0\0c\0\0
ABC`}</pre>
  </div>
);

export default RubyArrays;
