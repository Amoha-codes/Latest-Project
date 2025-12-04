import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Title ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Border Gateway Protocol (BGP)
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 10 Oct, 2025</p>

    {/* ================= Intro Section ================= */}
    <p className="text-lg leading-relaxed">
      <strong>BGP (Border Gateway Protocol)</strong> is an Exterior Gateway Protocol (EGP) used to 
      connect Autonomous Systems (AS) in any topology. Its primary function is to exchange network 
      reachability information between BGP systems. BGP is a path-vector routing protocol.
    </p>

    <p className="text-lg leading-relaxed">
      <strong>Note:</strong> BGP constructs an AS graph based on information exchanged between BGP routers.
    </p>

    {/* ================= Characteristics ================= */}
    <h2 className="text-3xl font-bold mt-8">Characteristics of BGP</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Inter-AS Communication: Provides communication between autonomous systems.</li>
      <li>Next-Hop Paradigm Supported.</li>
      <li>Coordination among multiple BGP speakers within an AS.</li>
      <li>Path information is included in advertisements.</li>
      <li>Policy support: Administrators can implement routing policies.</li>
      <li>Runs over TCP.</li>
      <li>Conserves network bandwidth and supports CIDR.</li>
      <li>Supports security features.</li>
    </ul>

    {/* ================= Functionality ================= */}
    <h2 className="text-3xl font-bold mt-8">Functionality of BGP</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Peer acquisition and authentication via TCP connection.</li>
      <li>Exchange of reachability information (positive or negative).</li>
      <li>Verification that peers and network connections are functional.</li>
    </ul>

    {/* ================= Importance ================= */}
    <h2 className="text-3xl font-bold mt-8">Importance of BGP</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Security: Authenticates messages using preconfigured passwords.</li>
      <li>Scalability: Manages a large number of routes and networks on the internet.</li>
      <li>Supports multihoming: Connect to multiple networks simultaneously.</li>
      <li>Calculates the best path for packets between source and destination.</li>
      <li>Operates using the TCP/IP model.</li>
    </ul>

    {/* ================= Types of BGP ================= */}
    <h2 className="text-3xl font-bold mt-8">Types of BGP</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>External BGP (eBGP):</strong> Exchanges routing information between different AS.</li>
      <li><strong>Internal BGP (iBGP):</strong> Exchanges routing information within the same AS.</li>
    </ul>

    {/* ================= Elements of BGP ================= */}
    <h2 className="text-3xl font-bold mt-8">Elements of BGP</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Weight: Cisco-specific attribute to prefer a path.</li>
      <li>Originate: How a router chooses and adds routes to BGP.</li>
      <li>Local Preference: Selects the outbound path; higher is preferred.</li>
      <li>AS Path: Shorter AS path is preferred.</li>
      <li>Next Hop: Specifies the IP to reach the destination.</li>
    </ul>

    {/* ================= Route Management ================= */}
    <h2 className="text-3xl font-bold mt-8">BGP Route Information Management</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Route Storage: Stores information about how to reach other networks.</li>
      <li>Route Update: Determines when and how to update routes from peers.</li>
      <li>Route Selection: Chooses the best routes using the routing database.</li>
      <li>Route Advertisement: Periodically informs peers about network reachability.</li>
    </ul>

    {/* ================= Difference Between BGP and OSPF ================= */}
    <h2 className="text-3xl font-bold mt-8">Difference Between BGP and OSPF</h2>
    <div className="overflow-x-auto">
      <table border={1} className="w-full border-collapse text-left text-sm">
        <thead className="bg-gray-400">
          <tr>
            <th className="p-2">Feature</th>
            <th className="p-2">BGP</th>
            <th className="p-2">OSPF</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2">Routing Algorithm</td>
            <td className="p-2">Path Vector</td>
            <td className="p-2">Link State</td>
          </tr>
          <tr>
            <td className="p-2">Convergence Speed</td>
            <td className="p-2">Slow</td>
            <td className="p-2">Fast</td>
          </tr>
          <tr>
            <td className="p-2">Domain</td>
            <td className="p-2">Inter-domain</td>
            <td className="p-2">Intra-domain</td>
          </tr>
          <tr>
            <td className="p-2">Routing Operation</td>
            <td className="p-2">Between AS</td>
            <td className="p-2">Inside AS</td>
          </tr>
          <tr>
            <td className="p-2">Protocol Used</td>
            <td className="p-2">TCP</td>
            <td className="p-2">IP</td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
);

export default Home;
