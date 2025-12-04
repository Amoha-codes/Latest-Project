import React from "react";

const RoutingTheory: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Title ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      What is Routing?
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 27 Jul, 2025</p>

    {/* ================= Introduction ================= */}
    <p className="text-lg leading-relaxed">
      Routing is the process of choosing a path across one or more networks to transmit data from a source to a destination. In modern networks, routing ensures that data packets reach their intended destinations efficiently and reliably. Routing decisions are primarily made by specialized devices called routers.
    </p>

    {/* ================= What is a Router ================= */}
    <h2 className="text-3xl font-bold mt-8">What is a Router?</h2>
    <p className="leading-relaxed">
      Routers are networking devices that forward data packets between computer networks. They operate at Layer 3 (Network Layer) of the OSI model and determine the best path for data to travel. Routers manage data traffic between networks and ensure packets reach their intended destination by examining the destination IP address in each packet.
    </p>

    {/* ================= Types of Routing ================= */}
    <h2 className="text-3xl font-bold mt-8">Different Types of Routing</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Static Routing:</strong> Routes are manually configured by the network administrator. It provides fine-grained control but is not suitable for large networks.
      </li>
      <li>
        <strong>Dynamic Routing:</strong> Routes are determined automatically using routing algorithms. Also called adaptive routing, it is flexible and preferred for modern networks.
      </li>
      <li>
        <strong>Default Routing:</strong> A router forwards packets to a default route if no specific path exists. Typically used for networks with a single exit point.
      </li>
    </ul>

    {/* ================= Working Principle ================= */}
    <h2 className="text-3xl font-bold mt-8">Working Principle of Routing</h2>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>
        <strong>Communication Initiation:</strong> A node initiates communication across a network using protocols like HTTP.
      </li>
      <li>
        <strong>Data Packets:</strong> Information is broken into small packets. Each packet is labeled with the destination IP address.
      </li>
      <li>
        <strong>Routing Table:</strong> Routers maintain a routing table containing network paths and metrics. Packets are forwarded along the shortest path.
      </li>
      <li>
        <strong>Hopping Procedure:</strong> Packets traverse multiple routers (hops) until they reach the destination. Hop count limits prevent infinite loops.
      </li>
      <li>
        <strong>Destination Arrival:</strong> Packets reassemble into complete information at the destination. Error-checking ensures accuracy.
      </li>
    </ol>

    {/* ================= Routing Protocols ================= */}
    <h2 className="text-3xl font-bold mt-8">Main Routing Protocols</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>RIP:</strong> Distance-vector protocol using hop count as metric.</li>
      <li><strong>OSPF:</strong> Link-state protocol using Dijkstra’s algorithm.</li>
      <li><strong>EIGRP:</strong> Hybrid protocol combining distance-vector and link-state features.</li>
      <li><strong>BGP:</strong> Path-vector protocol for inter-AS routing on the Internet.</li>
      <li><strong>IS-IS:</strong> Link-state protocol used in large ISP networks.</li>
    </ul>

    {/* ================= Routing Metrics ================= */}
    <h2 className="text-3xl font-bold mt-8">Routing Metrics</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Hop Count:</strong> Number of routers a packet traverses. Lower hop count is preferred.</li>
      <li><strong>Bandwidth:</strong> Network capacity. Routes are chosen to efficiently utilize available bandwidth.</li>
      <li><strong>Delay:</strong> Time taken for a packet to reach its destination. Includes propagation, transmission, and queuing delays.</li>
      <li><strong>Load:</strong> Network traffic. Packets are routed along less congested paths.</li>
      <li><strong>Reliability:</strong> Likelihood of successful packet delivery. Routers consider link stability when choosing routes.</li>
    </ul>

    {/* ================= Distance Vector vs Link State ================= */}
    <h2 className="text-3xl font-bold mt-8">Distance Vector vs Link State Routing</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Distance Vector Routing:</strong> Routers share routing tables with neighbors periodically. Uses Bellman-Ford algorithm. Less scalable, fixed-length subnet masks.
      </li>
      <li>
        <strong>Link State Routing:</strong> Routers exchange updates only when topology changes. Uses Dijkstra's algorithm. Scalable, supports variable-length subnet masks.
      </li>
    </ul>

    {/* ================= Advantages & Disadvantages ================= */}
    <h2 className="text-3xl font-bold mt-8">Advantages of Routing</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Automated routing reduces manual configuration effort.</li>
      <li>Highly scalable for large enterprise networks.</li>
      <li>Supports load balancing to avoid congested paths.</li>
      <li>Ensures data is transmitted via optimal paths based on routing metrics.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Disadvantages of Routing</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Static Routing:</strong> Manual configuration; not suitable for large networks.</li>
      <li><strong>Dynamic Routing:</strong> Less control over routes; computationally expensive.</li>
      <li><strong>Default Routing:</strong> Complexity in defining default paths for large networks.</li>
    </ul>

    {/* ================= Conclusion ================= */}
    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      Routing is fundamental to network communication, enabling data packets to reach their destinations efficiently. Routing algorithms select the shortest and most reliable paths based on metrics like hop count, delay, bandwidth, and reliability. Proper use of routing protocols ensures scalable, efficient, and reliable data delivery across networks.
    </p>

  </div>
);

export default RoutingTheory;
