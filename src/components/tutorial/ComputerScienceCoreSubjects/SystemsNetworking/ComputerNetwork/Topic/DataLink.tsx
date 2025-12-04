import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Data Link Layer ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Data Link Layer in OSI Model
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 19 Sep, 2025</p>

    <p className="text-lg leading-relaxed">
      The <strong>Data Link Layer</strong> is the second layer from the bottom in the OSI (Open System Interconnection) model.
      <ul className="list-disc ml-6 mt-2">
        <li>Responsible for node-to-node delivery of data within the same local network.</li>
        <li>Ensures error-free transmission of information.</li>
        <li>Handles encoding, decoding, and organizing outgoing and incoming data.</li>
        <li>Hides hardware complexities from the upper layers, making it one of the most complex OSI layers.</li>
      </ul>
    </p>

    {/* Sub-Layers */}
    <h2 className="text-3xl font-bold mt-8">Sub-Layers of the Data Link Layer</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Logical Link Control (LLC):</strong> Handles multiplexing, flow of data, error messages, and acknowledgments.</li>
      <li><strong>Media Access Control (MAC):</strong> Manages device interaction, addressing frames, and controls physical media access. Converts network layer packets into frames for transmission.</li>
    </ul>

    {/* Functions */}
    <h2 className="text-3xl font-bold mt-8">Functions of the Data Link Layer</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Framing: Divides packets into frames for transmission.</li>
      <li>Error detection and correction.</li>
      <li>Flow control between sender and receiver.</li>
      <li>Media access management for shared networks.</li>
    </ul>

    {/* Protocols */}
    <h2 className="text-3xl font-bold mt-8">Protocols in Data Link Layer</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Synchronous Data Link Protocol (SDLC)</li>
      <li>High-Level Data Link Protocol (HDLC)</li>
      <li>Serial Line Interface Protocol (SLIP)</li>
      <li>Point-to-Point Protocol (PPP)</li>
      <li>Link Access Procedure (LAP)</li>
      <li>Link Control Protocol (LCP)</li>
      <li>Network Control Protocol (NCP)</li>
    </ul>

    {/* Devices */}
    <h2 className="text-3xl font-bold mt-8">Devices Operating at the Data Link Layer</h2>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li><strong>Switch:</strong> Uses MAC addresses to forward frames within a LAN.</li>
      <li><strong>Bridge:</strong> Connects multiple LANs, forwarding frames based on MAC addresses.</li>
      <li><strong>Network Interface Card (NIC):</strong> Adds MAC addresses to frames and communicates with the network.</li>
      <li><strong>Wireless Access Point (WAP):</strong> Manages wireless MAC addresses and communicates using Wi-Fi (IEEE 802.11).</li>
      <li><strong>Layer 2 Switches:</strong> Specialized switches operating only at Layer 2, forwarding frames via MAC address tables.</li>
    </ol>

    <p className="leading-relaxed mt-2">
      Note: The Data Link Layer can be targeted by attacks like MAC spoofing or ARP poisoning. Understanding device and frame operations helps detect and mitigate these threats.
    </p>

    {/* Limitations */}
    <h2 className="text-3xl font-bold mt-8">Limitations of the Data Link Layer</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Limited scope: Only operates within a local network.</li>
      <li>Increased overhead: Headers, trailers, and error-correction data increase transmitted size.</li>
      <li>Error handling dependency: Relies on upper layers for complex errors.</li>
      <li>No routing capability: Cannot make routing decisions.</li>
      <li>Resource usage: Flow control and error correction consume extra processing power.</li>
    </ul>

    {/* Applications */}
    <h2 className="text-3xl font-bold mt-8">Applications of the Data Link Layer</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Local Area Networks (LANs):</strong> Enables reliable communication within LANs using Ethernet (IEEE 802.3).</li>
      <li><strong>Wireless Networks (Wi-Fi):</strong> Manages communication via IEEE 802.11 protocols, handling media access and error control.</li>
      <li><strong>Switches and MAC Addressing:</strong> Supports switches to forward frames correctly within networks.</li>
      <li><strong>Point-to-Point Connections:</strong> Used in PPP to establish and manage direct communication between two nodes.</li>
    </ul>

  </div>
);

export default Home;
