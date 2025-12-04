import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Planar Graphs and Graph Coloring ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Planar Graphs and Graph Coloring
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 28 Jun, 2025</p>

    {/* Introduction */}
    <p className="leading-relaxed">
      Planar graphs are graphs that can be drawn on a plane without any edges crossing. Graph coloring
      is the assignment of colors to vertices such that no two adjacent vertices share the same color. 
      These concepts are widely used in computer science, engineering, geography, and mathematics.
    </p>

    {/* Planar Graphs */}
    <h2 className="text-3xl font-bold mt-8">Planar Graphs</h2>
    <p className="leading-relaxed">
      A planar graph can be drawn on a flat surface such that no edges intersect except at vertices.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Euler's Formula:</strong> For any connected planar graph, <code>V − E + F = 2</code>, where V = vertices, E = edges, F = faces.</li>
      <li><strong>Kuratowski's Theorem:</strong> A graph is planar if and only if it does not contain a subgraph that is a subdivision of <strong>K5</strong> (complete graph of 5 vertices) or <strong>K3,3</strong> (complete bipartite graph of 3+3 vertices).</li>
    </ul>

    {/* Graph Coloring */}
    <h2 className="text-3xl font-bold mt-8">Graph Coloring</h2>
    <p className="leading-relaxed">
      Graph coloring is the process of assigning colors to vertices of a graph so that no two adjacent 
      vertices have the same color. The minimum number of colors needed is the <strong>chromatic number</strong>.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Vertex Coloring:</strong> Assign colors to vertices.</li>
      <li><strong>Edge Coloring:</strong> Assign colors to edges such that no two edges sharing a vertex have the same color.</li>
      <li><strong>Face Coloring:</strong> Assign colors to faces of a planar graph so that adjacent faces differ in color.</li>
    </ul>

    {/* Applications */}
    <h2 className="text-3xl font-bold mt-8">Applications in Engineering</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Frequency Assignment:</strong> Assign different frequencies to cell towers to avoid interference.</li>
      <li><strong>Scheduling:</strong> Schedule tasks or exams to prevent conflicts.</li>
      <li><strong>Map Coloring:</strong> Color maps such that neighboring regions differ in color.</li>
      <li><strong>Register Allocation:</strong> Efficiently allocate CPU registers in compilers.</li>
      <li><strong>Circuit Design:</strong> Minimize layers in printed circuit boards.</li>
    </ul>

    {/* Solved Examples */}
    <h2 className="text-3xl font-bold mt-8">Solved Examples</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Example 1:</strong> K4 is planar. Chromatic number = 4.</li>
      <li><strong>Example 2:</strong> K3,3 is not planar (Kuratowski's Theorem).</li>
      <li><strong>Example 3:</strong> Planar graph with V=6, E=9 → F = 5 (Euler's formula).</li>
      <li><strong>Example 4:</strong> Chromatic number of odd cycle C5 = 3.</li>
      <li><strong>Example 5:</strong> Bipartite graph → 2-colorable.</li>
      <li><strong>Example 6:</strong> Petersen graph is not planar.</li>
      <li><strong>Example 7:</strong> Chromatic number of C5 ∪ C3 = 3.</li>
      <li><strong>Example 8:</strong> Verify Euler's formula: V=8, E=12, F=6 → 8−12+6=2.</li>
      <li><strong>Example 9:</strong> K2,3 is planar. Chromatic number = 2.</li>
    </ul>

    {/* Practice Problems */}
    <h2 className="text-3xl font-bold mt-8">Practice Problems</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Determine if K4 is planar and find its chromatic number.</li>
      <li>Given a planar graph with 10 vertices and 15 edges, find the number of faces.</li>
      <li>Find the chromatic number of a star graph S<sub>n</sub> with n leaves.</li>
      <li>Prove that a tree is 2-colorable.</li>
      <li>Given a planar graph with 12 vertices and 18 edges, verify Euler's formula.</li>
      <li>Find the chromatic number of a wheel graph W<sub>n</sub>.</li>
      <li>Determine if the dodecahedron graph is planar.</li>
      <li>Given a planar graph G with V vertices and E edges, if E = 3V−6, find F.</li>
      <li>Find the chromatic number of a complete bipartite graph K<sub>m,n</sub>.</li>
      <li>Determine if C4 ∪ K2 is planar and find its chromatic number.</li>
    </ul>

  </div>
);

export default Home;
