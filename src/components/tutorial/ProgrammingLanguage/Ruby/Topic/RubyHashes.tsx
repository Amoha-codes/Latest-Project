import React from "react";

const RubyHashes: React.FC = () => (
  <div className="mt-20 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-3">
      Ruby – Hashes
    </h1>

    <p className="leading-relaxed">
      A Hash is a collection of key-value pairs, similar to an Array, except that indexing is done via arbitrary keys instead of integers. Accessing a nonexistent key returns <code>nil</code>.
    </p>

    {/* Creating Hashes */}
    <h2 className="text-2xl font-bold mt-10">Creating Hashes</h2>
    <p className="leading-relaxed">
      You can create hashes in multiple ways:
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`months = Hash.new
months = Hash.new("month") # default value
puts months[0]  # => month
puts months[72] # => month`}</pre>

    <p className="leading-relaxed">
      You can also initialize a hash with key-value pairs:
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`H = Hash["a" => 100, "b" => 200]
puts H['a']  # => 100
puts H['b']  # => 200`}</pre>

    <p className="leading-relaxed">
      Any Ruby object can be used as a key or value, even arrays:
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`[1, "jan"] => "January"`}</pre>

    {/* Hash Built-in Methods */}
    <h2 className="text-2xl font-bold mt-10">Hash Built-in Methods</h2>
    <p className="leading-relaxed">
      Hashes have many useful methods. Example of accessing keys:
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`months = {"1" => "January", "2" => "February"}
keys = months.keys
puts "#{keys}"  # => ["1", "2"]`}</pre>

    <p className="leading-relaxed">
      Some commonly used hash methods:
    </p>

    <ul className="list-disc ml-6 space-y-1">
      <li><code>hash[key]</code> – Access value by key</li>
      <li><code>hash[key] = value</code> – Assign value to key</li>
      <li><code>hash.clear</code> – Remove all pairs</li>
      <li><code>hash.default</code> – Get default value</li>
      <li><code>hash.delete(key)</code> – Remove key-value pair</li>
      <li><code>hash.each { "|k, v| ... "}</code> – Iterate over key-value pairs</li>
      <li><code>hash.keys</code> – Return array of keys</li>
      <li><code>hash.values</code> – Return array of values</li>
      <li><code>hash.merge(other_hash)</code> – Combine hashes</li>
      <li><code>hash.invert</code> – Swap keys and values</li>
      <li><code>hash.to_a</code> – Convert hash to array</li>
    </ul>

    <p className="leading-relaxed">
      Full list of hash methods includes equality checks, fetch, select, reject, shift, store, update, value?, values_at, and many more.
    </p>
  </div>
);

export default RubyHashes;
