import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Title ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      EIGRP Fundamentals
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 08 Oct, 2025</p>

    {/* ================= Intro Section ================= */}
    <p className="text-lg leading-relaxed">
      <strong>EIGRP (Enhanced Interior Gateway Routing Protocol)</strong> is a hybrid routing protocol 
      combining distance-vector and link-state features. It operates at the Network Layer (Layer 3) 
      and uses protocol number 88 for communication.
    </p>

    <p className="text-lg leading-relaxed">
      EIGRP helps routers or Layer 3 switches dynamically discover and maintain the best paths for 
      forwarding packets within an Autonomous System (AS).
    </p>

    {/* ================= Administrative Distance ================= */}
    <h2 className="text-3xl font-bold mt-8">Administrative Distance (AD) in EIGRP</h2>
    <p className="leading-relaxed">
      Administrative Distance defines the trustworthiness of routing information. Lower AD values 
      indicate higher trust. EIGRP assigns the following AD values:
    </p>

    <div className="overflow-x-auto">
      <table border={1} className="w-full border-collapse text-left text-sm">
        <thead className="bg-gray-400">
          <tr>
            <th className="p-2">EIGRP Routes</th>
            <th className="p-2">AD Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2">Summary Routes</td>
            <td className="p-2">5</td>
          </tr>
          <tr>
            <td className="p-2">Internal Routes</td>
            <td className="p-2">90</td>
          </tr>
          <tr>
            <td className="p-2">External Routes</td>
            <td className="p-2">170</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* ================= Key EIGRP Messages ================= */}
    <h2 className="text-3xl font-bold mt-8">Key EIGRP Messages</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Hello Message:</strong> Neighbor discovery and keep-alive. Sent every 5s; dead timer 15s.</li>
      <li><strong>Full Update:</strong> Sent after neighbor adjacency is formed. Contains all known routes.</li>
      <li><strong>Partial Update:</strong> Triggered by topology changes; contains only new/changed routes.</li>
      <li><strong>Query Message:</strong> Sent when a destination is unreachable; requests alternative routes.</li>
      <li><strong>Reply Message:</strong> Response to a Query; provides alternate route info.</li>
      <li><strong>Acknowledgement Message:</strong> Hello packet with no data; acknowledges updates, queries, replies.</li>
      <li><strong>NULL Update:</strong> Used for timers like SRTT and RTO calculation.</li>
    </ul>

    {/* ================= Composite Metric ================= */}
    <h2 className="text-3xl font-bold mt-8">Composite Metric in EIGRP</h2>
    <p className="leading-relaxed">
      EIGRP selects the best path using a composite metric based on five variables:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>K1 → Bandwidth</li>
      <li>K2 → Load</li>
      <li>K3 → Delay</li>
      <li>K4 → Reliability</li>
      <li>K5 → MTU</li>
    </ul>
    <p className="leading-relaxed">
      By default, only K1 (Bandwidth) and K3 (Delay) are used. Default values: K1=1, K2=0, K3=1, K4=0, K5=0.
    </p>

    {/* ================= Neighbor Adjacency Requirements ================= */}
    <h2 className="text-3xl font-bold mt-8">Neighbor Adjacency Requirements</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>K values must match.</li>
      <li>Autonomous System (AS) number must be identical.</li>
      <li>Subnet mask must match.</li>
      <li>Authentication (if enabled) must match. Only MD5 authentication is supported.</li>
    </ul>

    {/* ================= EIGRP Timers ================= */}
    <h2 className="text-3xl font-bold mt-8">EIGRP Timers</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Hello Timer:</strong> 5 seconds</li>
      <li><strong>Dead Timer (Hold Time):</strong> 15 seconds</li>
    </ul>

    {/* ================= Pros of EIGRP ================= */}
    <h2 className="text-3xl font-bold mt-8">Pros of EIGRP</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Fast convergence using the Diffusing Update Algorithm (DUAL).</li>
      <li>Supports VLSM and CIDR.</li>
      <li>Efficient bandwidth usage with partial updates.</li>
      <li>Scalable across large networks.</li>
      <li>Supports unequal-cost load balancing.</li>
    </ul>

  </div>
);

export default Home;
