import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= ICMP THEORY ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Internet Control Message Protocol (ICMP)
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 10 Oct, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Internet Control Message Protocol (ICMP) is a network layer protocol widely used by routers,
      gateways and hosts to send error messages and operational information. Since IP does not have 
      built-in error reporting, ICMP acts as a supporting protocol that helps report failures, 
      routing issues and diagnostic information.
    </p>

    <p className="leading-relaxed">
      ICMP is primarily used for:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Error reporting</strong> — unavailable hosts, timeouts, fragmentation issues.</li>
      <li><strong>Operational queries</strong> — echo request & reply (used in Ping), traceroute, etc.</li>
    </ul>

    <p className="leading-relaxed">
      Without ICMP, senders would not receive delivery failure information, making network 
      troubleshooting nearly impossible.
    </p>

    {/* Uses of ICMP */}
    <h2 className="text-3xl font-bold mt-8">Uses of ICMP</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Error Reporting</h3>
    <p className="leading-relaxed">
      If a packet cannot be delivered, ICMP informs the source about the failure.  
      Example: If a packet is too large and cannot be forwarded, the receiver drops it and 
      sends an ICMP “Destination Unreachable” message.
    </p>

    <h3 className="text-2xl font-semibold mt-6">2. Network Diagnostics</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Ping:</strong> Uses echo-request and echo-reply messages.</li>
      <li><strong>Traceroute:</strong> Tracks router hops by analyzing ICMP time-exceeded messages.</li>
    </ul>

    {/* How ICMP Works */}
    <h2 className="text-3xl font-bold mt-8">How ICMP Works</h2>
    <p className="leading-relaxed">
      ICMP is a connectionless protocol (unlike TCP) and does not require a handshake.  
      Messages are encapsulated inside IP datagrams — the IP header is followed by an ICMP 
      header and payload.
    </p>

    <p className="leading-relaxed">
      ICMP messages are generated when devices face errors such as:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Host unreachable</li>
      <li>Time-to-Live (TTL) expired</li>
      <li>Routing issues</li>
      <li>Fragmentation needed but "Don't Fragment" flag is set</li>
    </ul>

    {/* Packet Format */}
    <h2 className="text-3xl font-bold mt-8">ICMP Packet Format</h2>
    <p className="leading-relaxed">
      The ICMP header appears after the IPv4/IPv6 header.  
      The first 32 bits contain three fields:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Type (8 bits):</strong> Indicates message type. Examples:
        <ul className="list-disc ml-8">
          <li>Type 0 – Echo Reply</li>
          <li>Type 3 – Destination Unreachable</li>
          <li>Type 5 – Redirect Message</li>
          <li>Type 8 – Echo Request</li>
          <li>Type 11 – Time Exceeded</li>
          <li>Type 12 – Parameter Problem</li>
        </ul>
      </li>

      <li><strong>Code (8 bits):</strong> Provides more specific information about the type.</li>
      <li><strong>Checksum (16 bits):</strong> Ensures data integrity.</li>
    </ul>

    <p className="leading-relaxed">
      The next 32 bits form the <strong>Extended Header</strong>, pointing to the exact IP field 
      where the error occurred.  
      The final portion contains variable-length <strong>Data/Payload</strong> (576 bytes for IPv4, 
      1280 bytes for IPv6).
    </p>

    {/* ICMP in DDoS Attacks */}
    <h2 className="text-3xl font-bold mt-8">ICMP in DDoS Attacks</h2>
    <p className="leading-relaxed">
      Attackers often misuse ICMP to overwhelm or disrupt systems.
    </p>

    <h3 className="text-2xl font-semibold mt-6">1. Ping of Death Attack</h3>
    <p className="leading-relaxed">
      Oversized ping packets are fragmented and reassembled into a size exceeding limits, 
      causing buffer overflow and system freeze (mostly affects older devices).
    </p>

    <h3 className="text-2xl font-semibold mt-6">2. ICMP Flood Attack</h3>
    <p className="leading-relaxed">
      Attackers send excessive ICMP echo requests (ping floods), consuming the victim’s CPU 
      and bandwidth, leading to denial of service.
    </p>

    <h3 className="text-2xl font-semibold mt-6">3. Smurf Attack</h3>
    <p className="leading-relaxed">
      ICMP packets with spoofed source addresses cause multiple devices to respond to the victim, 
      overwhelming it. Mostly affects older hardware.
    </p>

    {/* Types of ICMP Messages */}
    <h2 className="text-3xl font-bold mt-8">Types of ICMP Messages</h2>

    <p className="leading-relaxed">A few important categories:</p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Echo Reply (Type 0)</strong></li>
      <li><strong>Destination Unreachable (Type 3)</strong></li>
      <li><strong>Redirect Message (Type 5)</strong></li>
      <li><strong>Echo Request (Type 8)</strong></li>
      <li><strong>Router Advertisement (Type 9)</strong></li>
      <li><strong>Router Solicitation (Type 10)</strong></li>
      <li><strong>Time Exceeded (Type 11)</strong></li>
      <li><strong>Parameter Problem (Type 12)</strong></li>
      <li><strong>Timestamp (Type 13) / Timestamp Reply (Type 14)</strong></li>
    </ul>

    {/* Detailed Messages */}
    <h2 className="text-3xl font-bold mt-8">Important ICMP Error Messages</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Source Quench Message</h3>
    <p className="leading-relaxed">
      Sent to the source to reduce its transmission rate when congestion is detected.  
      Each router sends hop-by-hop quench messages to slow the traffic flow.
    </p>

    <h3 className="text-2xl font-semibold mt-6">2. Parameter Problem</h3>
    <p className="leading-relaxed">
      If a router detects an incorrect header (checksum mismatch), it drops the packet 
      and informs the source using a Parameter Problem message.
    </p>

    <h3 className="text-2xl font-semibold mt-6">3. Time Exceeded Message</h3>
    <p className="leading-relaxed">
      Generated when the TTL value becomes zero.  
      Used heavily by <strong>Traceroute</strong> to discover intermediate hops.
    </p>

    <h3 className="text-2xl font-semibold mt-6">4. Destination Unreachable</h3>
    <p className="leading-relaxed">
      Indicates that the packet cannot reach the destination due to issues like host failure, 
      port failure or routing problems.
    </p>

    <h3 className="text-2xl font-semibold mt-6">5. Redirect Message</h3>
    <p className="leading-relaxed">
      Sent by routers to inform hosts of a better route.  
      Example: If Router R1 knows that R2 is a more direct route, it sends a Redirect message 
      instructing the host to forward packets directly to R2.
    </p>

    <p className="leading-relaxed mt-6">
      If the datagram contains routing information, the redirect message is not sent because 
      only gateways should issue redirects.
    </p>

  </div>
);

export default Home;
