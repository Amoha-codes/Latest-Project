import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= RIP THEORY ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Routing Information Protocol (RIP)
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 08 Oct, 2025</p>

    {/* Intro */}
    <p className="text-lg leading-relaxed">
      The Routing Information Protocol (RIP) is a distance-vector routing protocol used by routers 
      to determine the best path for forwarding packets. It uses <strong>hop count</strong> as its 
      routing metric and is best suited for small to medium-sized networks due to its scalability 
      limitations.
    </p>

    <p className="leading-relaxed">
      RIP operates at the <strong>Network Layer (Layer 3)</strong> and maintains routing tables on 
      each router. Every 30 seconds, routers exchange their entire routing tables using periodic 
      updates.
    </p>

    <p className="leading-relaxed font-semibold">
      Note: RIP supports a maximum hop count of 15; 16 is considered unreachable.
    </p>

    {/* Hop Count */}
    <h2 className="text-3xl font-bold mt-8">What is Hop Count?</h2>
    <p className="leading-relaxed">
      Hop count refers to the number of routers a packet travels through to reach a destination. 
      RIP chooses the path with the <strong>lowest hop count</strong>. Limiting the hop count to 15 
      prevents routing loops but reduces scalability.
    </p>

    {/* Features */}
    <h2 className="text-3xl font-bold mt-8">Features of RIP</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Periodic updates every 30 seconds</li>
      <li>Broadcasts (RIPv1) or multicasts (RIPv2/RIPng) routing information</li>
      <li>Sends entire routing tables in each update</li>
      <li>Uses “routing by rumor” — trusting neighbor routers</li>
      <li>Implements split horizon and route poisoning to avoid loops</li>
    </ul>

    {/* How RIP Works */}
    <h2 className="text-3xl font-bold mt-8">How RIP Works</h2>
    <p className="leading-relaxed">
      Each router maintains a routing table with network distances. Every 30 seconds, it sends its 
      routing table to neighbors. If a shorter path is discovered, the table is updated. If a route 
      is not refreshed:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>After 180 seconds → marked invalid</li>
      <li>After 240 seconds → removed (flushed)</li>
    </ul>

    {/* RIP Versions */}
    <h2 className="text-3xl font-bold mt-8">Types of RIP Versions</h2>
    <table className="w-full text-left border mt-4 text-sm">
      <thead>
        <tr className="bg-gray-400">
          <th className="p-2 border">Feature</th>
          <th className="p-2 border">RIPv1 (1988)</th>
          <th className="p-2 border">RIPv2 (1993)</th>
          <th className="p-2 border">RIPng (1997)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">Updates</td>
          <td className="p-2 border">Broadcast</td>
          <td className="p-2 border">Multicast (224.0.0.9)</td>
          <td className="p-2 border">Multicast (FF02::9)</td>
        </tr>
        <tr>
          <td className="p-2 border">Addressing</td>
          <td className="p-2 border">Classful</td>
          <td className="p-2 border">Classless</td>
          <td className="p-2 border">IPv6</td>
        </tr>
        <tr>
          <td className="p-2 border">Authentication</td>
          <td className="p-2 border">No</td>
          <td className="p-2 border">Yes</td>
          <td className="p-2 border">No</td>
        </tr>
        <tr>
          <td className="p-2 border">Supported IP</td>
          <td className="p-2 border">IPv4</td>
          <td className="p-2 border">IPv4</td>
          <td className="p-2 border">IPv6</td>
        </tr>
      </tbody>
    </table>

    {/* RIP Timers */}
    <h2 className="text-3xl font-bold mt-8">RIP Timers</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Update Timer:</strong> 30s</li>
      <li><strong>Invalid Timer:</strong> 180s</li>
      <li><strong>Hold-down Timer:</strong> 180s</li>
      <li><strong>Flush Timer:</strong> 240s</li>
    </ul>

    {/* RIP Configuration */}
    <h2 className="text-3xl font-bold mt-8">RIP Configuration Example</h2>
    <p className="leading-relaxed">Example configuration for R1 using RIPv2:</p>

    <pre className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
R1(config)# router rip
R1(config-router)# version 2
R1(config-router)# no auto-summary
R1(config-router)# network 192.168.10.0
R1(config-router)# network 172.16.10.0
    </pre>

    <p className="leading-relaxed font-semibold mt-2">Repeat similarly for R2 and R3.</p>

    {/* Useful Commands */}
    <h2 className="text-3xl font-bold mt-8">Useful Commands</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><code>debug ip rip</code> → Monitor RIP updates</li>
      <li><code>show ip route</code> → View routing table</li>
      <li><code>show ip protocols</code> → View active routing protocols</li>
    </ul>

    {/* Use Cases */}
    <h2 className="text-3xl font-bold mt-8">Where is RIP Used?</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Small/medium networks</li>
      <li>Legacy systems</li>
      <li>Education and labs</li>
      <li>As backup routing protocol</li>
    </ul>

    {/* Pros */}
    <h2 className="text-3xl font-bold mt-8">Pros of RIP</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Simple to configure</li>
      <li>Automatically updates routing tables</li>
      <li>Device compatibility</li>
      <li>Supports equal-cost load balancing</li>
    </ul>

    {/* Cons */}
    <h2 className="text-3xl font-bold mt-8">Cons of RIP</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Limited to 15 hops → poor scalability</li>
      <li>Slow convergence</li>
      <li>Routing loops possible</li>
      <li>Sends full routing table → wastes bandwidth</li>
      <li>No authentication in RIPv1</li>
    </ul>

  </div>
);

export default Home;
