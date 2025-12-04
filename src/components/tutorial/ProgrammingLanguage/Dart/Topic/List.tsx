import React from "react";

const DartLists: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">Dart - Lists</h1>

      <p className="leading-relaxed">
        In Dart, arrays are represented using <strong>List</strong> objects. A List is an ordered collection of elements, accessible using an index starting from 0. Lists can be either <strong>fixed-length</strong> or <strong>growable</strong>.
      </p>

      <h2 className="text-2xl font-bold mt-6">Logical Representation of a List</h2>
      <p className="leading-relaxed">
        <strong>test_list</strong> is the identifier that refers to a List containing values such as <code>[12, 13, 14]</code>. Each value is stored in a memory block called an <strong>element</strong>, and every element is accessed using its <strong>index</strong>.
      </p>

      <h2 className="text-2xl font-bold mt-6">Types of Lists</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li><strong>Fixed Length List</strong> – Length cannot change at runtime.</li>
        <li><strong>Growable List</strong> – Length can increase dynamically.</li>
      </ul>

      {/* Fixed Length List */}
      <h2 className="text-2xl font-bold mt-6">Fixed Length List</h2>
      <p className="leading-relaxed">
        A fixed-length list cannot grow or shrink during execution. Attempting to resize it results in an exception.
      </p>

      <h3 className="text-xl font-semibold mt-4">Declaration</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`var list_name = new List(initial_size);`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Initialization</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`lst_name[index] = value;`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`void main() { 
  var lst = new List(3); 
  lst[0] = 12; 
  lst[1] = 13; 
  lst[2] = 11; 
  print(lst); 
}`}
      </pre>

      <p className="leading-relaxed">Output:</p>
      <pre className="bg-gray-200 p-4 rounded-xl">[12, 13, 11]</pre>

      {/* Growable List */}
      <h2 className="text-2xl font-bold mt-6">Growable List</h2>
      <p className="leading-relaxed">
        A growable list can expand or shrink at runtime.
      </p>

      <h3 className="text-xl font-semibold mt-4">Declaration</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`var list_name = [val1, val2, val3];
// OR
var list_name = new List(); // Creates empty list`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Example 1</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`void main() { 
  var num_list = [1, 2, 3]; 
  print(num_list); 
}`}
      </pre>

      <p className="leading-relaxed">Output:</p>
      <pre className="bg-gray-200 p-4 rounded-xl">[1, 2, 3]</pre>

      <h3 className="text-xl font-semibold mt-4">Example 2</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`void main() { 
  var lst = new List(); 
  lst.add(12); 
  lst.add(13); 
  print(lst); 
}`}
      </pre>

      <p className="leading-relaxed">Output:</p>
      <pre className="bg-gray-200 p-4 rounded-xl">[12, 13]</pre>

      {/* List Properties */}
      <h2 className="text-2xl font-bold mt-6">List Properties</h2>
      <table className="w-full border mt-4 text-left">
        <thead>
          <tr className="bg-gray-300">
            <th className="p-2 border">Property</th>
            <th className="p-2 border">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border">first</td>
            <td className="p-2 border">Returns the first element in the list.</td>
          </tr>
          <tr>
            <td className="p-2 border">isEmpty</td>
            <td className="p-2 border">True if the list contains no elements.</td>
          </tr>
          <tr>
            <td className="p-2 border">isNotEmpty</td>
            <td className="p-2 border">True if the list has at least one element.</td>
          </tr>
          <tr>
            <td className="p-2 border">length</td>
            <td className="p-2 border">Returns the number of elements in the list.</td>
          </tr>
          <tr>
            <td className="p-2 border">last</td>
            <td className="p-2 border">Returns the last element in the list.</td>
          </tr>
          <tr>
            <td className="p-2 border">reversed</td>
            <td className="p-2 border">Returns a reversed iterable of the list.</td>
          </tr>
          <tr>
            <td className="p-2 border">single</td>
            <td className="p-2 border">Returns the only element if list contains exactly one item.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DartLists;