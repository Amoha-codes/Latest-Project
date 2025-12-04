import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Classful IP Addressing ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Classful IP Addressing
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 04 Oct, 2025</p>

    <p className="text-lg leading-relaxed">
      Classful IP addressing was an early method (1981–1993) for assigning IPv4 addresses and dividing the IP address space. It was later replaced by CIDR (Classless Inter-Domain Routing), which uses prefixes instead of fixed classes. IP addresses were divided into five classes (A, B, C, D, E) for specific purposes:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Class A, B, C:</strong> Used for unicast communication in large, medium, and small networks.</li>
      <li><strong>Class D:</strong> Reserved for multicasting.</li>
      <li><strong>Class E:</strong> Reserved for experimental use.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Dotted Decimal & Hexadecimal Notation</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Each segment (byte) ranges from 0 to 255.</li>
      <li>No leading zeros (e.g., 54 is correct, 054 is wrong).</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Need for Classful Addressing</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Simple allocation of IP addresses using fixed classes (A, B, C).</li>
      <li>Easy routing as routers can identify the class from the first few bits.</li>
      <li>Supported different network sizes and ensured compatibility.</li>
      <li>Cost-effective, reduced need for complex subnetting.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Classes of IP Addressing</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Class A:</strong> Network ID = 8 bits, Host ID = 24 bits, Range: 0.0.0.0 – 127.255.255.255, Default subnet mask: 255.x.x.x</li>
      <li><strong>Class B:</strong> Network ID = 16 bits, Host ID = 16 bits, Range: 128.0.0.0 – 191.255.255.255, Default subnet mask: 255.255.x.x</li>
      <li><strong>Class C:</strong> Network ID = 24 bits, Host ID = 8 bits, Range: 192.0.0.0 – 223.255.255.255, Default subnet mask: 255.255.255.x</li>
      <li><strong>Class D:</strong> Reserved for multicasting, Range: 224.0.0.0 – 239.255.255.255, No subnet mask.</li>
      <li><strong>Class E:</strong> Reserved for experimental use, Range: 240.0.0.0 – 255.255.255.255, No subnet mask.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Special IP Address Ranges</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>169.254.0.0 – 169.254.0.16 : Link-local addresses</li>
      <li>127.0.0.0 – 127.255.255.255 : Loopback addresses</li>
      <li>0.0.0.0 – 0.0.0.8 : Communication within the current network</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Rules for Assigning Host and Network IDs</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Host IDs must be unique within the network.</li>
      <li>Host ID of all 0s = network ID (cannot assign).</li>
      <li>Host ID of all 1s = broadcast address (cannot assign).</li>
      <li>Network IDs starting with 127 are reserved for loopback testing.</li>
      <li>All bits of network ID set to 1 = reserved for broadcast; all bits 0 = not routed.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Problems with Classful Addressing</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Wastage of many Class A and B addresses.</li>
      <li>Class C addresses too small for many organizations.</li>
      <li>Class D limited to multicast; Class E reserved for experiments.</li>
      <li>Replaced by CIDR (Classless Inter-Domain Routing) in 1993 for better utilization.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Classful vs Classless Addressing</h2>
    <table className="table-auto border-collapse border border-gray-300 w-full text-left mt-4">
      <thead>
        <tr className="bg-gray-400">
          <th className="border border-gray-300 px-4 py-2">Parameter</th>
          <th className="border border-gray-300 px-4 py-2">Classful Addressing</th>
          <th className="border border-gray-300 px-4 py-2">Classless Addressing</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Basics</td>
          <td className="border border-gray-300 px-4 py-2">Fixed classes A–E</td>
          <td className="border border-gray-300 px-4 py-2">Uses prefixes; flexible allocation</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">VLSM</td>
          <td className="border border-gray-300 px-4 py-2">Not supported</td>
          <td className="border border-gray-300 px-4 py-2">Supported</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Bandwidth</td>
          <td className="border border-gray-300 px-4 py-2">More bandwidth; slower and costly</td>
          <td className="border border-gray-300 px-4 py-2">Less bandwidth; faster and cheaper</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">CIDR Support</td>
          <td className="border border-gray-300 px-4 py-2">Not supported</td>
          <td className="border border-gray-300 px-4 py-2">Supported</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Practicality</td>
          <td className="border border-gray-300 px-4 py-2">Less practical</td>
          <td className="border border-gray-300 px-4 py-2">More practical</td>
        </tr>
      </tbody>
    </table>

  </div>
);

export default Home;
