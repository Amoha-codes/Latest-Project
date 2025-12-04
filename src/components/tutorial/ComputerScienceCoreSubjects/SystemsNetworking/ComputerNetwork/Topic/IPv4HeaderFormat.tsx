import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= IPv4 Datagram Header ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      IPv4 Datagram Header
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 23 Jul, 2025</p>

    <p className="text-lg leading-relaxed">
      IPv4 (Internet Protocol version 4) is the fourth revision of the Internet Protocol and is widely used for communication over packet-switched networks. IPv4 uses 32-bit addresses written in dot-decimal notation (e.g., <code>192.168.1.5</code>), allowing up to 2³² unique addresses.
    </p>

    <h2 className="text-3xl font-bold mt-8">Characteristics of IPv4</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>32-bit numeric address divided into four octets separated by dots.</li>
      <li>Supports unicast, broadcast, and multicast addressing.</li>
      <li>Header contains 12 fields; base header length is 20 bytes.</li>
      <li>Supports VLSM (Variable Length Subnet Masking).</li>
      <li>Uses ARP (Address Resolution Protocol) to map IP addresses to MAC addresses.</li>
      <li>Packet fragmentation is supported to traverse networks with different MTUs.</li>
      <li>Networks can be configured manually or via DHCP.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">IPv4 Datagram Header Fields</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Version (4 bits):</strong> Protocol version, 4 for IPv4.</li>
      <li><strong>Header Length (HLEN, 4 bits):</strong> Number of 32-bit words in the header (min 5, max 15).</li>
      <li><strong>Type of Service (8 bits):</strong> Specifies low delay, high throughput, or reliability.</li>
      <li><strong>Total Length (16 bits):</strong> Header + data length (20–65,535 bytes).</li>
      <li><strong>Identification (16 bits):</strong> Unique ID for identifying fragments of a datagram.</li>
      <li><strong>Flags (3 bits):</strong> Reserved (0), Do Not Fragment (DF), More Fragments (MF).</li>
      <li><strong>Fragment Offset (13 bits):</strong> Position of this fragment in the original datagram, in units of 8 bytes (max 65,528 bytes).</li>
      <li><strong>Time To Live (TTL, 8 bits):</strong> Limits datagram lifetime by restricting hop count.</li>
      <li><strong>Protocol (8 bits):</strong> Indicates the protocol used in the data portion (e.g., TCP, UDP).</li>
      <li><strong>Header Checksum (16 bits):</strong> Error-checking of the header.</li>
      <li><strong>Source IP Address (32 bits):</strong> IP address of the sender.</li>
      <li><strong>Destination IP Address (32 bits):</strong> IP address of the receiver.</li>
      <li><strong>Options (variable):</strong> Optional information like source route, record route; used for network administration and troubleshooting.</li>
    </ul>

    <p className="text-lg leading-relaxed">
      Due to optional fields, the IPv4 datagram header can vary in size from 20 bytes to 60 bytes.
    </p>

  </div>
);

export default Home;
