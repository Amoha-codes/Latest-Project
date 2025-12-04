import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Introduction to Graph Theory ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Graph Theory
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 25 Aug, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Graph Theory is a branch of mathematics that deals with graphs—structures made up of 
      vertices (points) and edges (lines). It helps model relationships in social networks, 
      computer networks, biology, logistics, and many other fields.
    </p>

    {/* Definition Section */}
    <h2 className="text-3xl font-bold mt-8">Definition of Graph</h2>
    <p className="leading-relaxed">
      A graph G is defined as G = (V, E), where:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>V</strong> = set of vertices (nodes)</li>
      <li><strong>E</strong> = set of edges (connections between pairs of vertices)</li>
    </ul>

    {/* Basic Concepts */}
    <h2 className="text-3xl font-bold mt-8">Basic Concepts</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Vertex (Node)</strong>: A fundamental element of a graph.</li>
      <li><strong>Edge (Link)</strong>: A connection between two vertices.</li>
      <li><strong>Adjacent Vertices</strong>: Two vertices connected directly by an edge.</li>
      <li><strong>Degree of a Vertex</strong>: Number of edges incident on a vertex.</li>
      <li><strong>Path</strong>: Sequence of vertices connected by edges.</li>
      <li><strong>Cycle</strong>: Path that starts and ends at the same vertex.</li>
      <li><strong>Connected Graph</strong>: A graph where a path exists between every pair of vertices.</li>
      <li><strong>Subgraph</strong>: A graph formed from a subset of vertices and edges.</li>
      <li><strong>Loop</strong>: An edge connecting a vertex to itself.</li>
      <li><strong>Parallel Edges</strong>: Multiple edges connecting the same pair of vertices.</li>
    </ul>

    {/* Types of Graphs */}
    <h2 className="text-3xl font-bold mt-8">Types of Graphs</h2>
    <p className="leading-relaxed">
      Graphs can be classified into:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Directed Graph</strong>: Edges have a defined direction.</li>
      <li><strong>Directed Acyclic Graph (DAG)</strong>: Directed graph with no cycles.</li>
      <li><strong>Tree</strong>: DAG with the restriction that each child has only one parent.</li>
      <li><strong>Undirected Graph</strong>: Edges have no direction.</li>
      <li><strong>Connected Graph</strong>: Every pair of vertices is reachable.</li>
      <li><strong>Complete Graph</strong>: Every pair of vertices is connected by an edge.</li>
      <li><strong>Biconnected Graph</strong>: Connected graph with no articulation points.</li>
    </ul>

    {/* Some Important Graphs */}
    <h2 className="text-3xl font-bold mt-8">Some Important Graphs</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Regular Graph</strong>: Every vertex has the same degree.</li>
      <li><strong>Bipartite Graph</strong>: Vertices can be split into two sets U and V, with edges only between sets.</li>
      <li><strong>Complete Bipartite Graph</strong>: Every vertex in U is connected to every vertex in W.</li>
      <li><strong>Cycle Graph</strong>: Connected graph where each vertex has degree 2, forming a closed loop.</li>
    </ul>

    {/* Applications */}
    <h2 className="text-3xl font-bold mt-8">Applications of Graph Theory in Computer Science</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Computer Networks – Shortest and efficient data transfer paths.</li>
      <li>Social Networks – Friend suggestions, influencer analysis.</li>
      <li>Operating Systems – Deadlock detection using resource allocation graphs.</li>
      <li>Compiler Design – Control flow graphs, register allocation via graph coloring.</li>
      <li>Search Engines – Web graphs for PageRank and ranking pages.</li>
    </ul>

    {/* Solved Questions */}
    <h2 className="text-3xl font-bold mt-8">Solved Questions on Basic Graph Theory</h2>
    <p className="leading-relaxed">
      <strong>Question 1:</strong> For V = {`{1, 2, 3, 4}`}, find all unordered pairs and total edges in K4.<br/>
      <strong>Solution:</strong> Unordered pairs = {`{1, 2}, {1, 3}, {1, 4}, {2, 3}, {2, 4}, {3, 4}`}, Total = 6 edges.
    </p>
    <p className="leading-relaxed">
      <strong>Question 2:</strong> Graph with edges E = {`{{A, B}, {B, C}, {C, D}, {D, A}}`}. Find the order, size, and degree of each vertex.<br/>
      <strong>Solution:</strong> This is a square cycle C4. Degrees: deg(A) = deg(B) = deg(C) = deg(D) = 2.
    </p>

    {/* Unsolved Questions */}
    <h2 className="text-3xl font-bold mt-8">Unsolved Questions</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Graph with vertices V = {`{1, 2, 3, 4, 5}`}. Find the number of edges in K5.</li>
      <li>Graph with edges E = {`{{1, 2}, {2, 3}, {3, 4}, {4, 5}}`}. Find the order, size, and degree of each vertex.</li>
      <li>Find the number of edges and degree of each vertex in the complete bipartite graph K3,4.</li>
      <li>Find the number of spanning trees in K4.</li>
    </ul>

  </div>
);

export default Home;
