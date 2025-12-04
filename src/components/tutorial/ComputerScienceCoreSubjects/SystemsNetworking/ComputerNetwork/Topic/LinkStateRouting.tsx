import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Unicast Communication and Link State Routing ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Unicast Communication and Link State Routing
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 08 Oct, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      <strong>Unicast communication</strong> is the transmission of data from a single sender to a single receiver. 
      It is a point-to-point communication model. Common unicast protocols include <strong>TCP</strong> and <strong>HTTP</strong>.
    </p>

    <h2 className="text-3xl font-bold mt-8">Unicast Protocols</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>TCP (Transmission Control Protocol)</strong>: A connection-oriented protocol that relies on acknowledgments from the receiver.</li>
      <li><strong>HTTP (HyperText Transfer Protocol)</strong>: An object-oriented protocol for web communication.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Unicast Routing</h2>
    <p className="leading-relaxed">
      Unicast routing delivers packets from one source to one destination. Key routing methods include:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Distance Vector Routing:</strong> Routers use a distributed algorithm to compute routing tables.</li>
      <li><strong>Link-State Routing:</strong> Routers exchange information to learn the entire network topology.</li>
      <li><strong>Path-Vector Routing:</strong> Maintains dynamically updated path information.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Link State Routing</h2>
    <p className="leading-relaxed">
      In <strong>Link State Routing (LSR)</strong>, each router learns the full network topology and computes the shortest path to every destination using <strong>Dijkstra’s algorithm</strong>.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Key Features of LSR</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Neighborhood Knowledge:</strong> Routers share info about directly connected links only.</li>
      <li><strong>Flooding:</strong> Information is broadcast to all routers to maintain a consistent network view.</li>
      <li><strong>Information Sharing:</strong> Updates occur only on topology changes, not periodically.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Phases of Link State Routing</h3>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li><strong>Reliable Flooding:</strong> Every router learns the complete network graph.</li>
      <li><strong>Route Calculation:</strong> Each router computes optimal paths using Dijkstra’s algorithm.</li>
    </ol>

    <h3 className="text-2xl font-semibold mt-4">Components</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Link State Packet (LSP):</strong> Small packets containing routing information.</li>
      <li><strong>Link-State Database:</strong> Stores information from all received LSPs.</li>
      <li><strong>Shortest Path First Algorithm:</strong> Computes shortest paths from the database.</li>
      <li><strong>Routing Table:</strong> Lists known paths and outgoing interfaces.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Shortest Path Calculation</h3>
    <p className="leading-relaxed">
      Dijkstra’s algorithm calculates the shortest path from a source node to all other nodes. Each router maintains:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>sptSet[]:</strong> Boolean array representing nodes included in the Shortest Path Tree (SPT).</li>
      <li><strong>dist[]:</strong> Array storing shortest distances from the source to all vertices.</li>
    </ul>
    <p className="leading-relaxed">
      Steps include initializing distances, picking the vertex with the minimum distance, updating adjacent vertices, and repeating until all nodes are included in the SPT.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Characteristics of Link State Protocols</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Requires significant memory and CPU for computations.</li>
      <li>Fast reaction to topology changes.</li>
      <li>Supports authentication mechanisms.</li>
      <li>No split horizon is needed.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Common Link State Routing Protocols</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>OSPF (Open Shortest Path First):</strong> Link-state, classless, intradomain protocol. Supports VLSM/CIDR, runs on IP (protocol 89), uses SPF/Dijkstra algorithm, and provides secure neighbor authentication.
      </li>
      <li>
        <strong>IS-IS (Intermediate System to Intermediate System):</strong> Standardized link-state protocol for OSI. Uses System IDs for router identification, updates via CLNS, and is widely used in large provider networks.
      </li>
    </ul>

  </div>
);

export default Home;
