import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= SCTP THEORY ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Stream Control Transmission Protocol (SCTP)
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 14 Oct, 2025</p>

    {/* Intro */}
    <p className="text-lg leading-relaxed">
      Stream Control Transmission Protocol (SCTP) is a connection-oriented transport 
      layer protocol used to transmit multiple independent streams of data between 
      two endpoints. It combines the reliability and congestion control of TCP with 
      the message-oriented behavior of UDP, making it ideal for telephony signaling 
      and mobile network communication.
    </p>

    {/* Applications */}
    <h2 className="text-3xl font-bold mt-8">Application of SCTP Protocol</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Telephony Communication: Internet-based telephone signaling.</li>
      <li>Mobile Networks: Transports SS7 messages for 3G/4G/5G using M3UA, M2UA, SUA.</li>
      <li>Roaming and RAN Security for telecom infrastructure.</li>
      <li>Reliable and low-latency transport applications.</li>
    </ul>

    {/* Features */}
    <h2 className="text-3xl font-bold mt-8">Key Features</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Reliable & Secure:</strong> Ensures in-order delivery with CRC32 checksum.</li>
      <li><strong>Message Oriented:</strong> Sends data as distinct messages, unlike TCP’s byte stream.</li>
      <li><strong>Multi-Streaming:</strong> Multiple independent streams prevent head-of-line blocking.</li>
      <li><strong>Multihoming:</strong> Supports multiple IP addresses for path redundancy.</li>
      <li><strong>Flow & Congestion Control:</strong> Similar to TCP.</li>
      <li><strong>Security:</strong> Resistant to blind DoS and spoofing attacks.</li>
    </ul>

    {/* Packet Structure */}
    <h2 className="text-3xl font-bold mt-8">SCTP Packet Structure</h2>
    <p className="leading-relaxed">
      An SCTP packet consists of a common header and multiple variable chunks in the payload.
      The common header is 12 bytes long and includes:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Source Port:</strong> Sender’s port number</li>
      <li><strong>Destination Port:</strong> Receiver’s port number</li>
      <li><strong>Verification Tag:</strong> 32-bit value used to identify associations</li>
      <li><strong>Checksum:</strong> CRC32 for error detection</li>
    </ul>

    {/* Multihoming */}
    <h2 className="text-3xl font-bold mt-8">Multihoming in SCTP</h2>
    <p className="leading-relaxed">
      SCTP supports multihoming, allowing a host to connect using multiple IP addresses. 
      If the primary path fails, data is automatically rerouted through an alternate path, 
      ensuring continuous and reliable communication. Each path’s RTT is monitored for efficiency.
    </p>

    {/* Security */}
    <h2 className="text-3xl font-bold mt-8">Security</h2>
    <p className="leading-relaxed">
      SCTP provides protection against blind DoS attacks, masquerading, and service monopolization. 
      SIGTRAN protocols rely on SCTP along with existing security mechanisms to protect SS7 messages 
      over IP networks.
    </p>

    {/* Services */}
    <h2 className="text-3xl font-bold mt-8">SCTP Services</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Aggregate Server Access Protocol (ASAP)</li>
      <li>Bearer-independent Call Control (BICC)</li>
      <li>Direct Data Placement (DDP-segment, DDP-stream)</li>
      <li>Diameter over DTLS/SCTP</li>
    </ul>

    {/* Central Point Architecture */}
    <h2 className="text-3xl font-bold mt-8">Central Point Architecture Support for SCTP</h2>
    <p className="leading-relaxed">
      An SCTP association is defined by unique verification tags. Earlier, sessions using the same 
      port pairs were mapped to a single SPU, limiting load balancing. Newer Junos OS versions 
      distribute SCTP traffic across SPUs using tag-based hashing for improved performance.
    </p>

    {/* History */}
    <h2 className="text-3xl font-bold mt-8">History of SCTP Protocol</h2>
    <p className="leading-relaxed">
      SCTP was developed by the IETF Transport Area Working Group (TSVWG) to carry call control 
      signals over IP networks, replacing traditional SS7 signaling in telecommunication systems.
    </p>

    {/* Advantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages of SCTP</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Full duplex communication.</li>
      <li>Independent, ordered delivery per stream.</li>
      <li>Supports multiple redundant IP paths.</li>
      <li>Strong congestion control and fault tolerance.</li>
      <li>Message-oriented transfer.</li>
    </ul>

    {/* Limitations */}
    <h2 className="text-3xl font-bold mt-8">Limitations and Constraints</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Supports a maximum of 8 source and 8 destination IPs per association.</li>
      <li>Static NAT only.</li>
      <li>Protocol numbers restricted to range 0–63.</li>
      <li>Blocking changes can impact existing traffic.</li>
      <li>Default session timeout is 30 minutes.</li>
    </ul>

  </div>
);

export default Home;
