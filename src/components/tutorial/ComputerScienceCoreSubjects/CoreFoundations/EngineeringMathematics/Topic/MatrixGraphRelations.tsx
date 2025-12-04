import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Representation of Relation in Graphs and Matrices ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Representation of Relation in Graphs and Matrices
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 23 Jul, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Understanding how to represent relations in graphs and matrices is fundamental in engineering mathematics.
      These representations help in analyzing complex connections and are widely used in engineering, computer
      science, network analysis, and data structures.
    </p>

    {/* What is a Relation */}
    <h2 className="text-3xl font-bold mt-8">What is a Relation?</h2>
    <p className="leading-relaxed">
      A relation is a connection or association between elements of two sets. If we have two sets A and B,
      a relation R from A to B is a subset of the Cartesian product A × B.
    </p>

    {/* Graph Representation */}
    <h2 className="text-3xl font-bold mt-8">Representation of Relation in Graphs</h2>
    <p className="leading-relaxed">
      Graphs provide a visual method for representing relations. These may be represented using
      directed graphs (digraphs) or undirected graphs.
    </p>

    {/* Directed Graphs */}
    <h3 className="text-2xl font-semibold mt-4">Directed Graphs (Digraphs)</h3>
    <p className="leading-relaxed">
      A directed graph consists of vertices connected by directed edges (arrows). If a relation R contains
      (a, b), then it is represented by an arrow from a to b in the graph.
    </p>

    <h3 className="text-xl font-semibold mt-4">Properties of Relations using Directed Graphs</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Reflexive:</strong> A loop exists at every node.</li>
      <li><strong>Irreflexive:</strong> No loop exists at any node.</li>
      <li><strong>Symmetric:</strong> If (a, b) exists, then (b, a) also exists.</li>
      <li><strong>Asymmetric:</strong> No pair of opposite directed edges exists.</li>
      <li><strong>Transitive:</strong> If (a, b) and (b, c) exist, then (a, c) exists.</li>
    </ul>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      Example: R = &#123;(a,a),(a,b),(b,b),(b,c),(c,c),(c,b),(c,a)&#125;
    </p>

    {/* Undirected Graphs */}
    <h3 className="text-2xl font-semibold mt-4">Undirected Graphs</h3>
    <p className="leading-relaxed">
      Used when relation is symmetric. If (a,b) exists, (b,a) is implied and represented by an undirected edge.
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      Example: A = &#123;1,2,3&#125;, R = &#123;(1,2),(2,3)&#125; → Edges: 1-2, 2-3
    </p>

    {/* Types of Relation */}
    <h2 className="text-3xl font-bold mt-8">Types of Relation in Graphs and Matrices</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Combination Relation (R ∘ S):</strong> Produces a relation between A and C through B.</li>
      <li><strong>Inverse Relation (R⁻¹):</strong> If (a,b) ∈ R, then (b,a) ∈ R⁻¹.</li>
      <li><strong>Complementary Relation:</strong> Contains ordered pairs not present in R.</li>
    </ul>

    {/* Matrices Representation */}
    <h2 className="text-3xl font-bold mt-8">Representation of Relation in Matrices</h2>
    <p className="leading-relaxed">
      A relation matrix is a 0-1 matrix where rows represent elements of set A and columns represent elements of set B.
      If (ai, bj) ∈ R, the entry is 1, otherwise 0.
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      Example: If R = (1,2),(2,3),(3,1) with A = &#123;1,2,3&#125;<br/>
      Adjacency Matrix: <br/>
      [0 1 0] <br/>
      [0 0 1] <br/>
      [1 0 0]
    </p>

    {/* Applications */}
    <h2 className="text-3xl font-bold mt-8">Applications in Engineering</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Network analysis (transport, communication, power systems)</li>
      <li>Control systems (state transition representation)</li>
      <li>Data structures & algorithm optimization</li>
      <li>Database management & relational models</li>
      <li>Social and biological network mapping</li>
    </ul>

    {/* Practice Problems */}
    <h2 className="text-3xl font-bold mt-8">Practice Problems</h2>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>Represent R = (1,2),(2,3),(3,1) graphically and using matrix; determine if it is reflexive, symmetric, transitive.</li>
      <li>For A = &#123;1,2,3,4,5&#125; & R = (1,2),(2,3),(3,4),(4,5) represent using graph and matrix.</li>
      <li>For C = &#123;a,b,c,d&#125;, T = (a,b),(b,c),(c,d),(d,a): create adjacency matrix & check transitivity.</li>
      <li>For D = &#123;1,2,3,4&#125;, U = (1,2),(2,1),(3,4),(4,3): represent graphically and check symmetry.</li>
      <li>For F = &#123;m,n,o&#125;, W = (m,n),(n,o),(o,m),(m,m): check reflexive, symmetric, transitive.</li>
    </ol>

    {/* Conclusion */}
    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      Representation of relations using graphs and matrices provides deeper insights into structure and connectivity.
      These concepts play a vital role in engineering, optimization, computing, and database systems.
    </p>
  </div>
);

export default Home;
