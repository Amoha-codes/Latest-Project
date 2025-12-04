import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Graph Measurements ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Graph Measurements
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 28 Aug, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      A graph consists of a set of points called <strong>Vertices (V)</strong> and lines joining these points known as
      <strong> Edges (E)</strong>. Graph measurements help analyze distances and connectivity between vertices.
    </p>

    {/* Vertices and Edges Example */}
    <h2 className="text-3xl font-bold mt-8">Example Graph</h2>
    <p className="leading-relaxed">
      Vertices: &#123;A, B, C, D, E, F&#125; <br />
      Edges: &#123;&#123;A, B&#125;, &#123;A, D&#125;, &#123;A, E&#125;, &#123;B, C&#125;, &#123;C, E&#125;, &#123;C, F&#125;, &#123;D, E&#125;, &#123;E, F&#125;&#125;
    </p>

    {/* 1 - Length */}
    <h2 className="text-3xl font-bold mt-8">1. Length of a Graph</h2>
    <p className="leading-relaxed">
      The length of a graph is defined as the number of edges it contains.
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      Length of the graph = 8
    </p>

    {/* 2 - Distance */}
    <h2 className="text-3xl font-bold mt-8">2. Distance Between Two Vertices</h2>
    <p className="leading-relaxed">
      The distance between two vertices is the minimum number of edges in the shortest path connecting them.
      There may be more than one shortest path.
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      Shortest distance between 1 and 5 is 2 &nbsp; → &nbsp; 1 → 2 → 5
    </p>

    {/* 3 - Eccentricity */}
    <h2 className="text-3xl font-bold mt-8">3. Eccentricity of a Vertex</h2>
    <p className="leading-relaxed">
      Eccentricity is the maximum distance of a vertex from any other vertex in the graph,
      denoted by <strong>e(V)</strong>.
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      For vertex A: (A, A) = 0, (A, B) = 1, (A, C) = 2, (A, D) = 1 <br />
      Maximum = 2 → Eccentricity = 2
    </p>

    {/* 4 - Diameter */}
    <h2 className="text-3xl font-bold mt-8">4. Diameter of a Graph</h2>
    <p className="leading-relaxed">
      The diameter of a graph is the maximum distance between any pair of vertices.
      It is equal to the maximum eccentricity in the graph.
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      Diameter = 3 → BC → CF → FG
    </p>

    {/* 5 - Radius */}
    <h2 className="text-3xl font-bold mt-8">5. Radius of a Graph</h2>
    <p className="leading-relaxed">
      The radius of a graph is the minimum eccentricity among all vertices.
      It exists only if the graph has a diameter.
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      Radius = 2
    </p>

    {/* 6 - Centre */}
    <h2 className="text-3xl font-bold mt-8">6. Centre of a Graph</h2>
    <p className="leading-relaxed">
      The center of a graph contains vertices whose eccentricity equals the radius.
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      Centre = A
    </p>

    {/* Practice Problems */}
    <h2 className="text-3xl font-bold mt-8">Practice Problems</h2>
    <ol className="list-decimal ml-6 leading-relaxed space-y-2">
      <li>Find the length of path A–B–C–D in a simple undirected graph.</li>
      <li>Compute shortest path distance between A and E in a weighted graph.</li>
      <li>Determine the diameter of the graph A–B–C–D–E.</li>
      <li>Find the eccentricity of vertex C in the graph A–B–C–D–E.</li>
      <li>Calculate the radius of the graph A–B–C–D–E.</li>
      <li>Find the center of the graph A–B–C–D–E.</li>
      <li>Compute path length from A to F with given edge weights (2,3,1,4,2).</li>
      <li>Find maximum distance from A in a sample graph.</li>
      <li>Find eccentricity of central vs outer vertices in a star graph.</li>
      <li>For complete graph K₅, determine radius and center.</li>
    </ol>

  </div>
);

export default Home;
