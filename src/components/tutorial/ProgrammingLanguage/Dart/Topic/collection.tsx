import React from "react";

const DartCollection: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        Dart Programming - Collection
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        Dart, unlike other programming languages, doesn't support traditional arrays. Instead, Dart provides
        <span className="font-semibold"> collections</span> that replicate data structures like arrays.
        The <code>dart:core</code> library and other classes enable collection support in Dart scripts.
      </p>

      {/* Collection Types */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">Types of Dart Collections</h2>

        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>List:</strong> An ordered group of objects. Lists can be:
            <ul className="list-disc list-inside ml-5 space-y-1">
              <li><strong>Fixed Length List:</strong> Length cannot change at runtime.</li>
              <li><strong>Growable List:</strong> Length can change at runtime.</li>
            </ul>
          </li>
          <li>
            <strong>Set:</strong> A collection of unique objects. Each object can appear only once.
          </li>
          <li>
            <strong>Map:</strong> A key/value pair collection. Keys and values can be of any type. Maps are dynamic and can grow or shrink at runtime.
          </li>
          <li>
            <strong>Queue:</strong> A collection that allows manipulation at both ends (FIFO). Useful for first-in, first-out operations.
          </li>
        </ul>
      </div>

      {/* Iterating Collections */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">Iterating Collections</h2>

        <p className="leading-relaxed">
          The <code>Iterator</code> class from <code>dart:core</code> enables easy traversal of collections.
          Every collection has an <code>iterator</code> property that returns an iterator pointing to the collection's objects.
        </p>

        <p className="leading-relaxed font-semibold">Example:</p>
        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          <pre>
            <code>
{`import 'dart:collection'; 

void main() { 
  Queue numQ = new Queue(); 
  numQ.addAll([100, 200, 300]);  

  Iterator i = numQ.iterator; 
  while (i.moveNext()) { 
    print(i.current); 
  } 
}`}
            </code>
          </pre>
        </div>

        <p className="leading-relaxed">
          The <code>moveNext()</code> function returns <code>true</code> if there is a next element, and
          <code>current</code> returns the value at the iterator's current position.
        </p>

        <p className="leading-relaxed font-semibold">Output:</p>
        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          100 <br />
          200 <br />
          300
        </div>
      </div>
    </div>
  );
};

export default DartCollection;
