import React from "react";

const DartMaps: React.FC = () => {
  const mapProperties = [
    { name: "keys", desc: "Returns an iterable object representing keys." },
    { name: "values", desc: "Returns an iterable object representing values." },
    { name: "length", desc: "Returns the size of the Map." },
    { name: "isEmpty", desc: "Returns true if the Map is empty." },
    { name: "isNotEmpty", desc: "Returns true if the Map is not empty." },
  ];

  const mapFunctions = [
    { name: "addAll()", desc: "Adds all key-value pairs of another map to this map." },
    { name: "clear()", desc: "Removes all pairs from the map." },
    { name: "remove()", desc: "Removes the key and its value if present." },
    { name: "forEach()", desc: "Applies a function to each key-value pair in the map." },
  ];

  return (
    <div className="space-y-8 p-4 mt-17">
      <h1 className="text-4xl font-bold border-b pb-2">Dart Programming - Map</h1>

      <p className="leading-relaxed">
        A <strong>Map</strong> in Dart is a collection of key/value pairs. Keys and values can be of any type, and maps can grow or shrink dynamically.
      </p>

      <h2 className="text-2xl font-semibold">Declaring Maps</h2>
      <p>You can declare maps in two ways:</p>
      <ul className="list-disc pl-6">
        <li>Using <strong>Map Literals</strong></li>
        <li>Using a <strong>Map Constructor</strong></li>
      </ul>

      <h3 className="text-xl font-semibold mt-4">Using Map Literals</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`var details = { 'Username': 'tom', 'Password': 'pass@123' };`}      
      </pre>

      <h3 className="text-xl font-semibold mt-4">Using Map Constructor</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`var details = new Map();
details['Username'] = 'admin';
details['Password'] = 'admin@123';`}      
      </pre>

      <h2 className="text-2xl font-semibold">Map Properties</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mapProperties.map((item, index) => (
          <div key={index} className="p-4 border rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg">{item.name}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold">Map Functions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mapFunctions.map((item, index) => (
          <div key={index} className="p-4 border rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg">{item.name}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DartMaps;
