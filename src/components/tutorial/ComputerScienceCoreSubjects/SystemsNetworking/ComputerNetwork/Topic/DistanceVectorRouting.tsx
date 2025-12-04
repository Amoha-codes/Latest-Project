import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Distance Vector Routing ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Distance Vector Routing (DVR) Protocol
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 07 Oct, 2025</p>

    <p className="text-lg leading-relaxed">
      <strong>Distance Vector Routing (DVR)</strong> is a protocol in which each router maintains a table showing the distance (measured in hops or cost) to all other routers in the network. 
      Routers periodically exchange these tables with their neighbors to keep routing information updated and ensure that data takes the shortest and most efficient path to its destination.
    </p>

    <h2 className="text-3xl font-bold mt-8">Algorithm Basis</h2>
    <p className="leading-relaxed">
      DVR is based on the <strong>Bellman-Ford Algorithm</strong>, originally used in ARPANET. Each router performs the following steps:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Shares its distance vector table with all neighbors.</li>
      <li>Receives neighbor tables and recalculates its own table if shorter paths are found.</li>
      <li>Updates occur when network links change (new link or failure).</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Bellman-Ford Equation</h2>
    <p className="leading-relaxed">
      The cost to reach a destination <strong>y</strong> from router <strong>x</strong> is calculated as:
    </p>
    <p className="bg-gray-400 p-4 rounded-lg font-mono">
  {"Dx(y) = min { C(x, v) + Dv(y) }"}
</p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Dx(y)</strong>: Cost from router X to destination Y</li>
      <li><strong>C(x,v)</strong>: Cost from router X to neighbor V</li>
      <li><strong>Dv(y)</strong>: Cost from neighbor V to destination Y</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">How DVR Works</h2>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>Routers periodically send their distance vector tables to all directly connected neighbors.</li>
      <li>Each router receives neighbors’ tables and updates its own routing table if a shorter path is found.</li>
      <li>Distance is recalculated using the Bellman-Ford equation for every destination node.</li>
    </ol>

    <h2 className="text-3xl font-bold mt-8">Example</h2>
    <p className="leading-relaxed">
      Consider routers X, Y, and Z. Each router maintains its routing table with distances to all destinations.
      <br />
      Router X receives routing tables from its neighbors. Using the Bellman-Ford equation, it may find that the path through Y to Z is shorter than its current route. X updates its table accordingly. The same occurs for other routers.
    </p>

    <h2 className="text-3xl font-bold mt-8">Applications</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Computer Networking:</strong> Routes data packets efficiently.</li>
      <li><strong>Telephone Systems:</strong> Used in some switching systems.</li>
      <li><strong>Military:</strong> Applied for routing missiles and other tactical communications.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Advantages</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Finds the shortest path for data delivery.</li>
      <li>Works for LANs, MANs, and WANs.</li>
      <li>Easy to implement with minimal resources.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Disadvantages</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Slow convergence after topology changes.</li>
      <li>Count-to-infinity problem can occur in some failure cases.</li>
      <li>Periodic updates create extra network traffic, even when there are no changes.</li>
      <li>Scalability issues for large networks due to large routing tables.</li>
    </ul>

  </div>
);

export default Home;
