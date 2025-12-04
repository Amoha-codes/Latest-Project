import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Walks, Trails, Paths, Cycles and Circuits ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Walks, Trails, Paths, Cycles and Circuits in Graph
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 11 Jul, 2025</p>

    {/* Walk */}
    <h2 className="text-3xl font-bold mt-8">What is a Walk?</h2>
    <p className="leading-relaxed">
      A walk is a sequence of vertices and edges in a graph where both vertices and edges may be repeated.
      The length of a walk is the number of edges traversed. Walks can be <strong>open</strong> or <strong>closed</strong>.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Open Walk:</strong> Starts and ends at different vertices.</li>
      <li><strong>Closed Walk:</strong> Starts and ends at the same vertex.</li>
    </ul>
    <p className="leading-relaxed font-semibold">Example: 1 → 2 → 3 → 4 → 2 → 1 → 3 (walk)</p>

    {/* Trail */}
    <h2 className="text-3xl font-bold mt-8">What is a Trail?</h2>
    <p className="leading-relaxed">
      A trail is a walk in which <strong>edges cannot be repeated</strong>, but vertices may be repeated.
      Trails can also be <strong>open</strong> or <strong>closed</strong>.
    </p>
    <p className="leading-relaxed font-semibold">
      Open Trail: 1 → 3 → 8 → 6 → 3 → 2 <br />
      Closed Trail: 1 → 3 → 8 → 6 → 3 → 2 → 1
    </p>

    {/* Circuit */}
    <h2 className="text-3xl font-bold mt-8">What is a Circuit?</h2>
    <p className="leading-relaxed">
      A circuit is a <strong>closed trail</strong> where no edge is repeated, but vertices may be repeated.
    </p>
    <p className="leading-relaxed font-semibold">
      Example: 1 → 2 → 4 → 3 → 6 → 8 → 3 → 1
    </p>

    {/* Path */}
    <h2 className="text-3xl font-bold mt-8">What is a Path?</h2>
    <p className="leading-relaxed">
      A path is a trail where <strong>neither vertices nor edges are repeated</strong>. Paths are inherently open unless stated otherwise.
    </p>
    <p className="leading-relaxed font-semibold">
      Example: 6 → 8 → 3 → 1 → 2 → 4
    </p>

    {/* Cycle */}
    <h2 className="text-3xl font-bold mt-8">What is a Cycle?</h2>
    <p className="leading-relaxed">
      A cycle is a <strong>closed path</strong> where no vertex (except the starting/ending vertex) or edge is repeated.
    </p>
    <p className="leading-relaxed font-semibold">
      Example: 1 → 2 → 4 → 3 → 1
    </p>

    {/* Table */}
    <h2 className="text-3xl font-bold mt-8">Table for Walk, Trail, and Path</h2>
    <table className="table-auto border-collapse border border-gray-400 text-left">
      <thead>
        <tr>
          <th className="border border-gray-400 px-4 py-2">Category</th>
          <th className="border border-gray-400 px-4 py-2">Edges</th>
          <th className="border border-gray-400 px-4 py-2">Vertices</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Walk</td>
          <td className="border border-gray-400 px-4 py-2">Can be repeated</td>
          <td className="border border-gray-400 px-4 py-2">Can be repeated</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Trail</td>
          <td className="border border-gray-400 px-4 py-2">Cannot be repeated</td>
          <td className="border border-gray-400 px-4 py-2">Can be repeated</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Path</td>
          <td className="border border-gray-400 px-4 py-2">Cannot be repeated</td>
          <td className="border border-gray-400 px-4 py-2">Cannot be repeated</td>
        </tr>
      </tbody>
    </table>

    {/* Solved Examples */}
    <h2 className="text-3xl font-bold mt-8">Solved Examples</h2>
    <p className="leading-relaxed font-semibold">1. Trail from A to D:</p>
    <p className="leading-relaxed">A → B → D → C → A → B → D</p>

    <p className="leading-relaxed font-semibold">2. Shortest path from A to C:</p>
    <p className="leading-relaxed">A → B → C</p>

    <p className="leading-relaxed font-semibold">3. All possible paths:</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>A → B → C</li>
      <li>A → E → C</li>
      <li>A → B → E → C</li>
    </ul>

    {/* Practice Problems */}
    <h2 className="text-3xl font-bold mt-8">Practice Problems</h2>
    <p className="leading-relaxed">
      Consider the following graph for reference:
    </p>
    <pre className="bg-gray-400 p-4 rounded-lg overflow-x-auto">
{`      A
   / | \\
B  C  D
  \\ | /
   E
   |
   F`}
    </pre>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Find a path from A to F.</li>
      <li>Find a simple path from B to F.</li>
      <li>Find a trail that uses every edge exactly once.</li>
      <li>Identify a cycle in the graph.</li>
      <li>Find the shortest path from A to E.</li>
      <li>List all possible paths from E to F.</li>
      <li>Find a trail from C to F.</li>
      <li>Find the longest simple path in the graph.</li>
      <li>Count the number of distinct cycles in the graph.</li>
      <li>Find a path from A to F that consists of exactly 3 edges.</li>
    </ul>

  </div>
);

export default Home;
