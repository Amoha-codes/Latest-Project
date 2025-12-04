import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ====================== OSI MODEL TITLE ====================== */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      What is OSI Model? - Layers of OSI Model
    </h1>

    <p className="text-sm text-gray-500">Last Updated : 19 Sep, 2025</p>

    {/* ====================== INTRO ====================== */}
    <p className="text-lg leading-relaxed">
      The OSI (Open Systems Interconnection) Model is a set of rules that explains how different
      computer systems communicate over a network. It was developed by the International Organization
      for Standardization (ISO). The OSI Model includes 7 layers, each with specific functions and
      responsibilities. This layering helps different devices and technologies work together.
    </p>

    <p className="leading-relaxed">
      <strong>Note:</strong> OSI Model provides a clear structure for data transmission and is widely
      used to understand how network communication works.
    </p>

    {/* ====================== LAYERS LIST ====================== */}
    <h2 className="text-3xl font-bold mt-8">Layers of the OSI Model</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Physical Layer</li>
      <li>Data Link Layer</li>
      <li>Network Layer</li>
      <li>Transport Layer</li>
      <li>Session Layer</li>
      <li>Presentation Layer</li>
      <li>Application Layer</li>
    </ul>

    {/* ====================== PHYSICAL LAYER ====================== */}
    <h2 className="text-3xl font-bold mt-8">Layer 1: Physical Layer</h2>
    <p className="leading-relaxed">
      The Physical Layer is the lowest layer of the OSI model. It handles the actual physical
      connection between devices and transmits data in the form of bits (0s and 1s).
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Responsible for transmitting individual bits from one node to another.</li>
      <li>Converts received signals into bits and passes them to the Data Link Layer.</li>
      <li>Devices: Hubs, Repeaters, Modems, Cables.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Functions of the Physical Layer</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Bit Synchronization</strong> – Provides clock synchronization between sender & receiver.</li>
      <li><strong>Bit Rate Control</strong> – Defines number of bits transmitted per second.</li>
      <li><strong>Physical Topologies</strong> – Bus, Star, Mesh, etc.</li>
      <li><strong>Transmission Modes</strong> – Simplex, Half Duplex, Full Duplex.</li>
    </ul>

    {/* ====================== DATA LINK LAYER ====================== */}
    <h2 className="text-3xl font-bold mt-8">Layer 2: Data Link Layer (DLL)</h2>
    <p className="leading-relaxed">
      The Data Link Layer ensures error-free node-to-node communication. It provides MAC addressing
      and creates Frames.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Responsible for delivering frames using MAC address.</li>
      <li>Devices: Switches, Bridges.</li>
      <li>Divides packets from Network layer into frames.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Sublayers</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Logical Link Control (LLC)</li>
      <li>Media Access Control (MAC)</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Functions</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Framing</li>
      <li>Physical Addressing (MAC)</li>
      <li>Error Control</li>
      <li>Flow Control</li>
      <li>Access Control (MAC channel control)</li>
    </ul>

    {/* ====================== NETWORK LAYER ====================== */}
    <h2 className="text-3xl font-bold mt-8">Layer 3: Network Layer</h2>
    <p className="leading-relaxed">
      Responsible for routing packets between devices across multiple networks. It selects the
      shortest path for data.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Uses IP addressing for identifying sender/receiver.</li>
      <li>Devices: Routers, Layer-3 Switches.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Functions</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Routing</li>
      <li>Logical Addressing (IP address)</li>
    </ul>

    {/* ====================== TRANSPORT LAYER ====================== */}
    <h2 className="text-3xl font-bold mt-8">Layer 4: Transport Layer</h2>
    <p className="leading-relaxed">
      The Transport Layer ensures end-to-end communication and reliable delivery of data. It breaks
      data into Segments.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Provides acknowledgment and retransmission.</li>
      <li>Protocols: TCP, UDP, SCTP.</li>
      <li>Adds Source and Destination port numbers.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Functions</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Segmentation and Reassembly</li>
      <li>Service Point Addressing (Port Numbers)</li>
    </ul>

    {/* ====================== SESSION LAYER ====================== */}
    <h2 className="text-3xl font-bold mt-8">Layer 5: Session Layer</h2>
    <p className="leading-relaxed">
      The Session Layer establishes, maintains, and terminates communication sessions.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Functions</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Session Establishment & Termination</li>
      <li>Synchronization (Checkpoints)</li>
      <li>Dialog Control (Half/Full Duplex)</li>
    </ul>

    {/* ====================== PRESENTATION LAYER ====================== */}
    <h2 className="text-3xl font-bold mt-8">Layer 6: Presentation Layer</h2>
    <p className="leading-relaxed">
      This layer formats, encrypts, and compresses data. It acts as a “translator” between network
      formats.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Translation (ASCII ↔ EBCDIC)</li>
      <li>Encryption/Decryption</li>
      <li>Compression</li>
    </ul>

    {/* ====================== APPLICATION LAYER ====================== */}
    <h2 className="text-3xl font-bold mt-8">Layer 7: Application Layer</h2>
    <p className="leading-relaxed">
      The Application Layer is closest to the user. It provides services like email, file transfer,
      and domain resolution.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>SMTP (Emails)</li>
      <li>DNS (Domain Name Resolution)</li>
      <li>FTP (File Transfer)</li>
      <li>DHCP (Dynamic IP Assignment)</li>
    </ul>

    {/* ====================== HOW DATA FLOWS ====================== */}
    <h2 className="text-3xl font-bold mt-8">How Data Flows in the OSI Model?</h2>

    <p className="leading-relaxed">
      When data is sent from one device to another, it travels through all 7 layers. Each layer adds
      information, and the process is reversed at the receiver's end.
    </p>

    <ol className="list-decimal ml-6 leading-relaxed space-y-2">
      <li>Application Layer: Data creation</li>
      <li>Presentation Layer: Formatting/Encryption</li>
      <li>Session Layer: Connection setup</li>
      <li>Transport Layer: Segmentation and reliability</li>
      <li>Network Layer: Packet routing</li>
      <li>Data Link Layer: Framing + MAC addressing</li>
      <li>Physical Layer: Bits transmission</li>
    </ol>

    <h2 className="text-3xl font-bold mt-8">Example: Sending an Email</h2>
    <ol className="list-decimal ml-6 leading-relaxed space-y-2">
      <li>Person A writes an email (Application Layer).</li>
      <li>Data is encoded/encrypted (Presentation Layer).</li>
      <li>Session is established between sender & receiver.</li>
      <li>Email is segmented with port numbers (Transport Layer).</li>
      <li>Best route is selected (Network Layer).</li>
      <li>Frames are created and MAC address added (Data Link Layer).</li>
      <li>Data is sent as signals (Physical Layer).</li>
    </ol>

    {/* ====================== OSI LAYER TABLE ====================== */}
   <h2 className="text-3xl font-bold mt-8">Protocols Used in OSI Layers</h2>

<div className="overflow-x-auto mt-4">
  <table className="w-full text-sm border border-gray-300 rounded-lg">
    <thead className="bg-gray-200">
      <tr>
        <th className="border px-4 py-2 text-left">OSI Layer</th>
        <th className="border px-4 py-2 text-left">Protocols</th>
        <th className="border px-4 py-2 text-left">PDU</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border px-4 py-2">Physical Layer</td>
        <td className="border px-4 py-2">USB, SONET/SDH</td>
        <td className="border px-4 py-2">Bits</td>
      </tr>
      <tr>
        <td className="border px-4 py-2">Data Link Layer</td>
        <td className="border px-4 py-2">Ethernet, PPP</td>
        <td className="border px-4 py-2">Frames</td>
      </tr>
      <tr>
        <td className="border px-4 py-2">Network Layer</td>
        <td className="border px-4 py-2">IP, ICMP, OSPF</td>
        <td className="border px-4 py-2">Packets</td>
      </tr>
      <tr>
        <td className="border px-4 py-2">Transport Layer</td>
        <td className="border px-4 py-2">TCP, UDP, SCTP</td>
        <td className="border px-4 py-2">Segments</td>
      </tr>
      <tr>
        <td className="border px-4 py-2">Session Layer</td>
        <td className="border px-4 py-2">NetBIOS, RPC, PPTP</td>
        <td className="border px-4 py-2">Data</td>
      </tr>
      <tr>
        <td className="border px-4 py-2">Presentation Layer</td>
        <td className="border px-4 py-2">TLS/SSL, MIME</td>
        <td className="border px-4 py-2">Data</td>
      </tr>
      <tr>
        <td className="border px-4 py-2">Application Layer</td>
        <td className="border px-4 py-2">SMTP, FTP, DNS, DHCP</td>
        <td className="border px-4 py-2">Data</td>
      </tr>
    </tbody>
  </table>
</div>


    {/* ====================== WHY OSI MODEL MATTERS ====================== */}
    <h2 className="text-3xl font-bold mt-8">Why Does the OSI Model Matter?</h2>

    <p className="leading-relaxed">
      The OSI Model matters because it provides a clear understanding of how data travels across
      networks. Each layer has its own responsibility, making it easier to troubleshoot network
      problems by analyzing one layer at a time.
    </p>

    <p className="leading-relaxed">
      Although modern networking (TCP/IP) doesn’t fully follow OSI, the OSI Model remains extremely
      useful for learning and debugging network communication.
    </p>

  </div>
);

export default Home;
