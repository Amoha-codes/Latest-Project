import React from "react";

const DartGenerics: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        Dart Programming - Generics
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        Dart is an optionally typed language. Collections in Dart are heterogeneous by default, meaning a single collection can hold values of various types. 
        Using <span className="font-semibold">Generics</span>, collections can be made type-safe to hold homogeneous values only.
      </p>

      <p className="leading-relaxed">
        Generics restrict the data type of values in a collection. This ensures <strong>type safety</strong>, meaning a memory block can only contain data of a specific type.
      </p>

      <p className="leading-relaxed font-semibold">Syntax:</p>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>
          <code>
{`Collection_name<data_type> identifier = new Collection_name<data_type>();`}
          </code>
        </pre>
      </div>

      {/* Generic List */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">Generic List Example</h2>
        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          <pre>
            <code>
{`void main() { 
  List<String> logTypes = new List<String>(); 
  logTypes.add("ERROR"); 
  logTypes.add("INFO"); 

  for (String type in logTypes) { 
    print(type); 
  } 
}`}
            </code>
          </pre>
        </div>

        <p className="leading-relaxed font-semibold">Output:</p>
        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          ERROR <br />
          INFO
        </div>
      </div>

      {/* Generic Set */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">Generic Set Example</h2>
        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          <pre>
            <code>
{`void main() { 
  Set<int> numberSet = new Set<int>(); 
  numberSet.add(100); 
  numberSet.add(20); 
  numberSet.add(5); 
  numberSet.add(60); 
  numberSet.add(70); 

  // numberSet.add("Tom"); // compilation error
  print("Default implementation: ${numberSet.runtimeType}");  

  for (var no in numberSet) { 
    print(no); 
  } 
}`}
            </code>
          </pre>
        </div>

        <p className="leading-relaxed font-semibold">Output:</p>
        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          Default implementation : _CompactLinkedHashSet&lt;int&gt; <br />
          100 <br />
          20 <br />
          5 <br />
          60 <br />
          70
        </div>
      </div>

      {/* Generic Queue */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">Generic Queue Example</h2>
        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          <pre>
            <code>
{`import 'dart:collection'; 

void main() { 
  Queue<int> queue = new Queue<int>(); 
  print("Default implementation ${queue.runtimeType}");  

  queue.addLast(10); 
  queue.addLast(20); 
  queue.addLast(30); 
  queue.addLast(40); 
  queue.removeFirst();  

  for (int no in queue) { 
    print(no); 
  } 
}`}
            </code>
          </pre>
        </div>

        <p className="leading-relaxed font-semibold">Output:</p>
        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          Default implementation ListQueue&lt;int&gt; <br />
          20 <br />
          30 <br />
          40
        </div>
      </div>

      {/* Generic Map */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">Generic Map Example</h2>
        <p className="leading-relaxed">
          A type-safe map specifies the data types of both the <strong>key</strong> and <strong>value</strong>.
        </p>

        <p className="leading-relaxed font-semibold">Syntax:</p>
        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          <pre>
            <code>
{`Map<Key_type, Value_type> mapName = new Map<Key_type, Value_type>();`}
            </code>
          </pre>
        </div>

        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          <pre>
            <code>
{`void main() { 
  Map<String, String> m = {'name':'Tom', 'Id':'E1001'}; 
  print('Map: ${m}'); 
}`}
            </code>
          </pre>
        </div>

        <p className="leading-relaxed font-semibold">Output:</p>
        <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
          Map: {`{name: Tom, Id: E1001}`}
        </div>
      </div>
    </div>
  );
};

export default DartGenerics;
