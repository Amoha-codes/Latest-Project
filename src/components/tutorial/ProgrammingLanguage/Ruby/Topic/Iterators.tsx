import React from "react";

const RubyIterators: React.FC = () => (
  <div className="mt-20 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-3">
      Ruby – Iterators
    </h1>

    <p className="leading-relaxed">
      Iterators are methods supported by collections. Collections are objects that store multiple data members, like arrays and hashes. Iterators return each element of a collection, one by one.
    </p>

    <h2 className="text-2xl font-bold mt-6">Ruby <code>each</code> Iterator</h2>
    <p className="leading-relaxed">
      The <code>each</code> iterator executes code for each element in a collection.
    </p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`# Example with an array
ary = [1, 2, 3, 4, 5]
ary.each do |i|
  puts i
end
# Output:
# 1
# 2
# 3
# 4
# 5`}</pre>

    <p className="leading-relaxed">
      In this example, each element of the array is passed to the block variable <code>i</code> and printed.
    </p>

    <h2 className="text-2xl font-bold mt-6">Ruby <code>collect</code> Iterator</h2>
    <p className="leading-relaxed">
      The <code>collect</code> iterator (also called <code>map</code>) returns a new collection based on the block's processing of each element.
    </p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`# Example: simple collect
a = [1, 2, 3, 4, 5]
b = a.collect
puts b
# Output:
# 1
# 2
# 3
# 4
# 5`}</pre>

    <p className="leading-relaxed">
      Usually, <code>collect</code> is used to transform elements. For example, multiplying each value by 10:
    </p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`# Example: transform using collect
a = [1, 2, 3, 4, 5]
b = a.collect { |x| 10 * x }
puts b
# Output:
# 10
# 20
# 30
# 40
# 50`}</pre>

    <p className="leading-relaxed">
      <strong>Note:</strong> To copy an array without transformation, use <code>clone</code> instead of <code>collect</code>.
    </p>
  </div>
);

export default RubyIterators;
