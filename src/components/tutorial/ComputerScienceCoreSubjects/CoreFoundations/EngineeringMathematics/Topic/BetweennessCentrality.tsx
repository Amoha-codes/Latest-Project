import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Betweenness Centrality (Centrality Measure) ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Betweenness Centrality (Centrality Measure)
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 21 Jul, 2022</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      In graph theory, <strong>betweenness centrality</strong> is a measure of centrality in a graph
      based on <strong>shortest paths</strong>. For every pair of vertices in a connected graph, there
      exists at least one shortest path where the number of edges (for unweighted graphs) or the sum
      of edge weights (for weighted graphs) is minimized.
    </p>

    <p className="leading-relaxed">
      The betweenness centrality of a vertex represents how many shortest paths pass through that vertex.
      It helps identify nodes that act as communication bridges or influence the flow within a network.
      It is widely applied in <strong>social networks, communication systems, biology, transport planning</strong> etc.
    </p>

    {/* Definition Section */}
    <h2 className="text-3xl font-bold mt-8">Definition</h2>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      g(v) = Σ σ<sub>st</sub>(v) / σ<sub>st</sub> , &nbsp;&nbsp; where s ≠ v ≠ t
    </p>

    <p className="leading-relaxed">
      Here, σ<sub>st</sub> is the total number of shortest paths from node <strong>s</strong> to node <strong>t</strong>,
      and σ<sub>st</sub>(v) is the number of those paths that pass through vertex <strong>v</strong>.
    </p>

    <p className="leading-relaxed">
      The value is commonly normalized to lie within the range <strong>[0, 1]</strong> based on the total number of
      node pairs in the network.
    </p>

    {/* Weighted Networks */}
    <h2 className="text-3xl font-bold mt-8">Weighted Networks</h2>

    <p className="leading-relaxed">
      In weighted networks, edges have weights representing values like capacity, frequency, or influence.
      The strength of a node is given by the sum of weights of adjacent edges:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      s(i) = Σ a<sub>ij</sub> w<sub>ij</sub>
    </p>

    <p className="leading-relaxed">
      Studies show that node strength follows a power-law distribution, indicating that a few nodes
      may dominate network traffic.
    </p>

    {/* Implementation Section */}
    <h2 className="text-3xl font-bold mt-8">Python Implementation (NetworkX)</h2>
    <p className="leading-relaxed">
      The following implementation calculates the betweenness centrality of each node using NetworkX:
    </p>

    <pre className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm overflow-x-auto">
{`>>> import networkx as nx
>>> G = nx.erdos_renyi_graph(50, 0.5)
>>> b = nx.betweenness_centrality(G)
>>> print(b)`}
    </pre>

    <p className="leading-relaxed">
      The output is a dictionary of nodes mapped to their betweenness centrality values.
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      {'{0: 0.0122, 1: 0.0091, 2: 0.0104, ... }'}
    </p>

    {/* Conclusion */}
    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      Betweenness centrality identifies influential nodes that control information flow within a network.
      It is an essential metric for analyzing communication networks, transportation systems,
      biological systems, and social influence patterns.
    </p>

  </div>
);

export default Home;
