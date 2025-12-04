import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Computer Network Tutorial ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Computer Network Tutorial
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 18 Sep, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      A computer network is a system in which multiple devices are connected to
      share data, resources, and information. Networks can range from small
      setups like home networks to global systems such as the Internet.
      Networks enable communication, resource sharing, remote access, and
      centralized data management.
    </p>

    {/* Uses of Computer Networks */}
    <h2 className="text-3xl font-bold mt-8">Applications of Computer Networks</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Sharing Devices:</strong> Multiple systems can use the same printers, scanners, or hardware.</li>
      <li><strong>Sharing Data:</strong> Teams can collaborate on documents and applications efficiently.</li>
      <li><strong>Communication:</strong> Supports web browsing, email, video calls, and instant messaging.</li>
      <li><strong>Data Management:</strong> Data stored centrally can be secured, backed up, and accessed easily.</li>
      <li><strong>Remote Access:</strong> Enables access to servers or cloud platforms from any location.</li>
    </ul>

    {/* Fundamentals Section */}
    <h2 className="text-3xl font-bold mt-8">Fundamentals of Computer Network</h2>
    <p className="leading-relaxed">
      This section introduces what a network is, its benefits, characteristics,
      and the hardware devices involved in networking.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Basics of Computer Networks</li>
      <li>Network Devices</li>
      <li>Types of Networks</li>
      <li>Network Models</li>
    </ul>

    {/* Network Models Section */}
    <h2 className="text-3xl font-bold mt-8">Network Models</h2>
    <p className="leading-relaxed">
      Network models define how communication occurs in layered structures.
      The main two models are:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>OSI Model</li>
      <li>TCP/IP Model</li>
    </ul>

    {/* Physical Layer */}
    <h2 className="text-3xl font-bold mt-8">Physical Layer</h2>
    <p className="leading-relaxed">
      This layer deals with the physical medium of data transfer, including
      topologies, transmission modes, and data signals.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Types of Network Topology</li>
      <li>Modes of Transmission</li>
      <li>Transmission Media</li>
    </ul>

    {/* Data Link Layer */}
    <h2 className="text-3xl font-bold mt-8">Data Link Layer</h2>
    <p className="leading-relaxed">
      This layer ensures reliable and error-free communication between directly
      connected nodes. It manages framing, error control, switching, and flow control.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Switching Techniques</li>
      <li>Virtual LAN</li>
      <li>Framing</li>
      <li>Error Detection & Correction</li>
      <li>Flow Control</li>
      <li>ARQ Protocols (Stop & Wait, Go Back N, Selective Repeat)</li>
    </ul>

    {/* Network Layer */}
    <h2 className="text-3xl font-bold mt-8">Network Layer</h2>
    <p className="leading-relaxed">
      This layer handles logical addressing and routing across networks. IPv4, IPv6,
      private/public IPs, and subnetting are the core topics here.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>IPv4 & IPv6</li>
      <li>Classful & Classless Addressing</li>
      <li>Subnetting & VLSM</li>
      <li>Routing (Static, Dynamic, Link-State, Distance-Vector)</li>
      <li>NAT (Network Address Translation)</li>
    </ul>

    {/* Network Layer Protocols */}
    <h2 className="text-3xl font-bold mt-8">Network Layer Protocols</h2>
    <p className="leading-relaxed">
      Various protocols assist in routing, addressing, and network diagnostics.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>ARP, RARP</li>
      <li>DHCP</li>
      <li>ICMP, IGMP</li>
      <li>Routing Protocols: RIP, OSPF, BGP, IS-IS, EIGRP</li>
      <li>MPLS, GRE</li>
    </ul>

    {/* Transport Layer */}
    <h2 className="text-3xl font-bold mt-8">Transport Layer</h2>
    <p className="leading-relaxed">
      This layer provides end-to-end communication services for applications.
      TCP ensures reliability, while UDP offers faster, connectionless transfer.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>TCP 3-Way Handshake</li>
      <li>Congestion Control</li>
      <li>UDP</li>
      <li>QUIC, SCTP, DCCP, RUDP</li>
    </ul>

    {/* Session & Presentation Layer */}
    <h2 className="text-3xl font-bold mt-8">Session and Presentation Layer</h2>
    <p className="leading-relaxed">
      These layers manage communication sessions and ensure data formatting,
      encryption, and compression.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Session Layer Functions</li>
      <li>Data Translation & Encryption</li>
      <li>SSL, RPC, MIME</li>
    </ul>

    {/* Application Layer */}
    <h2 className="text-3xl font-bold mt-8">Application Layer</h2>
    <p className="leading-relaxed">
      Closest to the user, this layer enables services like browsing, emailing,
      file transfer, and directory access.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>DNS</li>
      <li>HTTP & HTTPS</li>
      <li>SMTP, POP3, IMAP</li>
      <li>FTP, TFTP, SNMP, LDAP</li>
      <li>MQTT, SIP, SMB</li>
    </ul>

    {/* Network Security */}
    <h2 className="text-3xl font-bold mt-8">Methods of Network Security</h2>
    <p className="leading-relaxed">
      Security methods protect network data and prevent unauthorized access.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Authentication</li>
      <li>Encryption</li>
      <li>Firewalls</li>
      <li>MAC Filtering</li>
    </ul>

    {/* QoS */}
    <h2 className="text-3xl font-bold mt-8">Quality of Service (QoS)</h2>
    <p className="leading-relaxed">
      QoS techniques prioritize network traffic and manage congestion to support
      real-time applications like video conferencing and VoIP.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Token Bucket</li>
      <li>Leaky Bucket</li>
    </ul>

    {/* Wireless Networking */}
    <h2 className="text-3xl font-bold mt-8">Wireless and Mobile Networking</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Wi-Fi Standards</li>
      <li>Bluetooth & Zigbee</li>
      <li>Mobile Networks</li>
    </ul>

    {/* Cloud Networking */}
    <h2 className="text-3xl font-bold mt-8">Cloud Networking</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Types of Cloud Services</li>
      <li>VPN</li>
      <li>Network Function Virtualization (NFV)</li>
    </ul>

    {/* Emerging Trends */}
    <h2 className="text-3xl font-bold mt-8">Emerging Networking Trends</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>5G and Beyond</li>
      <li>Network Slicing</li>
    </ul>

  </div>
);

export default Home;
