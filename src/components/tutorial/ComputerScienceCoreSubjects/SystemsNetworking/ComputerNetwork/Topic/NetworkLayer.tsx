import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Network Layer ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Network Layer in OSI Model
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 04 Oct, 2025</p>

    <p className="text-lg leading-relaxed">
      The Network Layer is the third layer from the bottom (Layer 3) of the OSI Model. It ensures end-to-end delivery of data packets across multiple interconnected networks. Unlike the Data Link Layer, which provides node-to-node delivery within a single network segment, the Network Layer ensures that data travels from the source host to the destination host across different networks.
    </p>

    <h2 className="text-3xl font-bold mt-8">Key Responsibilities</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Logical Addressing:</strong> Assigns unique IP addresses to devices for accurate identification and communication.</li>
      <li><strong>Packetization:</strong> Encapsulates transport layer segments into packets for transmission.</li>
      <li><strong>Host-to-Host Delivery:</strong> Ensures reliable delivery from sender to receiver across diverse networks.</li>
      <li><strong>Forwarding:</strong> Directs packets from a router's input interface to the correct output interface based on the destination IP.</li>
      <li><strong>Routing:</strong> Determines optimal paths across networks using routing protocols.</li>
      <li><strong>Fragmentation & Reassembly:</strong> Splits large packets to match the network's MTU and reassembles them at the destination.</li>
      <li><strong>Subnetting:</strong> Divides networks into smaller subnets for efficient addressing and traffic management.</li>
      <li><strong>NAT (Network Address Translation):</strong> Maps private IP addresses to public IPs for internet communication, conserving address space and enhancing security.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">How the Network Layer Works</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Each device is assigned a unique logical address (IP address).</li>
      <li>Data from the transport layer is encapsulated into packets with source and destination IPs.</li>
      <li>Routers analyze destination addresses to determine the best available path.</li>
      <li>Packets traverse the network hop-by-hop until reaching the destination.</li>
      <li>Packets larger than the MTU are fragmented and reassembled at the destination.</li>
      <li>If errors occur, protocols like ICMP send messages back to the source.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Protocols Operating at the Network Layer</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>IP (IPv4/IPv6)</li>
      <li>ICMP (Internet Control Message Protocol)</li>
      <li>ARP (Address Resolution Protocol)</li>
      <li>RARP (Reverse Address Resolution Protocol)</li>
      <li>NAT (Network Address Translation)</li>
      <li>IPSec (Internet Protocol Security)</li>
      <li>MPLS (Multiprotocol Label Switching)</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Routing Protocols</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>RIP (Routing Information Protocol)</li>
      <li>OSPF (Open Shortest Path First)</li>
      <li>BGP (Border Gateway Protocol)</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Advantages</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Enables end-to-end communication across multiple networks.</li>
      <li>Supports scalability with subnetting and hierarchical addressing.</li>
      <li>Efficient packet routing using shortest-path and dynamic routing algorithms.</li>
      <li>Connects heterogeneous networks for seamless inter-networking.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Limitations</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>No flow control mechanism; congestion can occur with high traffic.</li>
      <li>Limited error control; relies on upper layers for reliability.</li>
      <li>Routers may drop packets under heavy load, causing data loss.</li>
      <li>Fragmentation increases processing overhead and may affect performance.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Routing vs Flooding</h2>
    <table className="table-auto border-collapse border border-gray-300 w-full text-left mt-4">
      <thead>
        <tr className="bg-gray-400">
          <th className="border border-gray-300 px-4 py-2">Routing</th>
          <th className="border border-gray-300 px-4 py-2">Flooding</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Requires a routing table</td>
          <td className="border border-gray-300 px-4 py-2">No routing table required</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">May give the shortest path</td>
          <td className="border border-gray-300 px-4 py-2">Always gives the shortest path</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Less reliable</td>
          <td className="border border-gray-300 px-4 py-2">More reliable</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Traffic is less</td>
          <td className="border border-gray-300 px-4 py-2">Traffic is more</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Duplicate packets not present</td>
          <td className="border border-gray-300 px-4 py-2">Duplicate packets present</td>
        </tr>
      </tbody>
    </table>

  </div>
);

export default Home;
