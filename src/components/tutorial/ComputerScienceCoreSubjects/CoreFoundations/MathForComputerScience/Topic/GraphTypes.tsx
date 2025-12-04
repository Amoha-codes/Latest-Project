import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Types of Graphs with Examples ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Types of Graphs with Examples
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 27 Oct, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      A graph is a mathematical structure used to represent relationships between objects.
      It consists of:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Vertices (or nodes):</strong> Points representing entities.</li>
      <li><strong>Edges:</strong> Lines connecting pairs of vertices representing relationships.</li>
    </ul>

    {/* Based on Size */}
    <h2 className="text-3xl font-bold mt-8">Based on Size</h2>
    <p className="leading-relaxed">
      Graphs can be classified based on the number of vertices and edges they contain:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Finite Graph:</strong> A graph with a finite number of vertices and edges. Useful for real-world systems where the number of objects and connections is limited.</li>
      <li><strong>Infinite Graph:</strong> A graph with infinitely many vertices and edges, extending indefinitely.</li>
    </ul>

    {/* Based on Structure */}
    <h2 className="text-3xl font-bold mt-8">Based on Structure</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Trivial Graph:</strong> Contains only one vertex and no edges. Also called a singleton graph.</li>
      <li><strong>Simple Graph:</strong> No multiple edges or self-loops. Example: a simple railway network connecting cities.</li>
      <li><strong>Multi Graph:</strong> Contains parallel edges but no self-loops. Example: multiple roads between two cities.</li>
      <li><strong>Null Graph:</strong> Contains vertices only with no edges. Also called an edgeless graph.</li>
      <li><strong>Complete Graph:</strong> Simple graph where each vertex is connected to all others. Also called a full graph.</li>
    </ul>

    {/* Based on Direction */}
    <h2 className="text-3xl font-bold mt-8">Based on Direction</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Directed Graph:</strong> Edges have a specific direction, represented by arrows.</li>
      <li><strong>Undirected Graph:</strong> Edges have no direction; connections are bidirectional. Example: friendships in social media.</li>
    </ul>

    {/* Based on Edge Weights */}
    <h2 className="text-3xl font-bold mt-8">Based on Edge Weights</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Weighted Graph:</strong> Each edge has a weight representing distance, cost, or time. Example: Google Maps routes.</li>
      <li><strong>Unweighted Graph:</strong> All edges are treated equally with no additional value. Example: simple social network or metro map without times.</li>
    </ul>

    {/* Special Graphs */}
    <h2 className="text-3xl font-bold mt-8">Special Graphs</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Pseudo Graph:</strong> Allows self-loops and multiple edges.</li>
      <li><strong>Regular Graph:</strong> All vertices have the same degree.</li>
    </ul>

    {/* Based on Density */}
    <h2 className="text-3xl font-bold mt-8">Based on Density</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Sparse Graph:</strong> Few edges compared to the number of vertices. Example: chemical reaction graph.</li>
      <li><strong>Dense Graph:</strong> Many edges compared to the number of vertices. Example: social network graph.</li>
    </ul>

    {/* Based on Connectivity */}
    <h2 className="text-3xl font-bold mt-8">Based on Connectivity</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Connected Graph:</strong> There exists a path between every pair of vertices.</li>
      <li><strong>Disconnected Graph:</strong> Some vertices are unreachable from others. Example: null graph is disconnected.</li>
    </ul>

    {/* Based on Cycles */}
    <h2 className="text-3xl font-bold mt-8">Based on Cycles</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Cyclic Graph:</strong> Contains at least one cycle, i.e., a path starting and ending at the same vertex.</li>
      <li><strong>Tree:</strong> Connected graph with no cycles; exactly one path exists between any two vertices.</li>
    </ul>

    {/* Applications Section */}
    <h2 className="text-3xl font-bold mt-8">Applications of Graphs</h2>
    <p className="leading-relaxed">
      Graphs have widespread applications in Computer Science and Engineering:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Computer Networks – Finding shortest paths for data transfer.</li>
      <li>Social Networks – Modeling friendships, influencers, and recommendations.</li>
      <li>Operating Systems – Deadlock detection using resource allocation graphs.</li>
      <li>Compiler Design – Control flow graphs and register allocation using graph coloring.</li>
      <li>Search Engines – Web page ranking using PageRank on directed graphs.</li>
    </ul>

    {/* Example Questions */}
    <h2 className="text-3xl font-bold mt-8">Example Questions</h2>
    <p className="leading-relaxed font-semibold">
      1. For V = { '{1,2,3,4}' }, find all edges in the complete graph K4.
    </p>
    <p className="leading-relaxed">
      Solution: Unordered pairs = { '{1,2}, {1,3}, {1,4}, {2,3}, {2,4}, {3,4}' } → Total = 6 edges.
    </p>
    <p className="leading-relaxed font-semibold">
      2. Graph with edges E = { '{A,B}, {B,C}, {C,D}, {D,A}' }. Find the degree of each vertex.
    </p>
    <p className="leading-relaxed">
      Solution: deg(A) = 2, deg(B) = 2, deg(C) = 2, deg(D) = 2.
    </p>

  </div>
);

export default Home;
