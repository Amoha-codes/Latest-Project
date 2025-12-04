import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Title ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Transmission Control Protocol (TCP)
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 13 Oct, 2025</p>

    {/* ================= Intro ================= */}
    <p className="text-lg leading-relaxed">
      Transmission Control Protocol (<strong>TCP</strong>) is a connection-oriented protocol used for reliable message exchange between devices over a network. 
      It operates at the Transport Layer (Layer 4) of the OSI model and works with the Internet Protocol (IP) to ensure data packets are delivered in order, error-free, and efficiently.
    </p>

    <p className="leading-relaxed">
      TCP establishes a reliable connection using a three-way handshake (<strong>SYN, SYN-ACK, ACK</strong>) and closes connections with a four-step handshake (<strong>FIN, ACK, FIN, ACK</strong>).
      It uses acknowledgments (ACKs), flow control, and congestion control mechanisms to manage transmission rates and ensure reliability.
    </p>

    {/* ================= Features ================= */}
    <h2 className="text-3xl font-bold mt-8">Features of TCP</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Segment Numbering:</strong> Each byte is numbered; sequence numbers and acknowledgment numbers ensure reliable delivery.</li>
      <li><strong>Connection-Oriented:</strong> Sender and receiver stay connected until the data transfer is complete; data order is preserved.</li>
      <li><strong>Full Duplex:</strong> Data can flow in both directions simultaneously.</li>
      <li><strong>Flow Control:</strong> Uses sliding window to prevent overwhelming the receiver.</li>
      <li><strong>Error Control:</strong> Detects and manages lost, duplicate, or corrupted segments.</li>
      <li><strong>Congestion Control:</strong> Adjusts sending rate based on network congestion to avoid overload.</li>
    </ul>

    {/* ================= IP Overview ================= */}
    <h2 className="text-3xl font-bold mt-8">Internet Protocol (IP)</h2>
    <p className="leading-relaxed">
      IP is responsible for addressing and routing packets so they can travel across networks from sender to receiver. 
      Each device has a unique IP address, which helps ensure correct delivery of data across the Internet.
    </p>

    {/* ================= How TCP Works ================= */}
    <h2 className="text-3xl font-bold mt-8">Working of TCP</h2>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li><strong>Data Segmentation:</strong> Application data is divided into smaller segments for efficient transmission.</li>
      <li><strong>Routing:</strong> Each segment may take different paths through the network but will arrive at the destination.</li>
      <li><strong>Reassembly:</strong> TCP reassembles the segments into the original message at the receiver using sequence numbers.</li>
      <li><strong>Acknowledgment:</strong> Receiver sends ACKs for successfully received segments; missing segments are retransmitted.</li>
      <li><strong>Error & Flow Control:</strong> Checksums detect errors and sliding window controls the flow to avoid receiver overload.</li>
    </ol>

    {/* ================= Example ================= */}
    <h2 className="text-3xl font-bold mt-8">Example: Webpage Request</h2>
    <p className="leading-relaxed">
      When a user requests a webpage:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>The browser uses HTTP, which relies on TCP to establish a connection.</li>
      <li>TCP divides the webpage (HTML file) into segments and hands them to IP for delivery.</li>
      <li>At the user’s end, TCP reassembles the packets and confirms successful delivery with ACKs.</li>
    </ul>

    {/* ================= Advantages ================= */}
    <h2 className="text-3xl font-bold mt-8">Advantages of TCP</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Reliable protocol with error detection and recovery.</li>
      <li>Ensures data reaches the destination in the correct order.</li>
      <li>Widely implemented and well-documented by IETF standards.</li>
      <li>Works with IP to establish network connections between devices.</li>
    </ul>

    {/* ================= Disadvantages ================= */}
    <h2 className="text-3xl font-bold mt-8">Disadvantages of TCP</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Designed for WANs; may be heavy for small networks with limited resources.</li>
      <li>Multiple layers and mechanisms can slow down speed.</li>
      <li>Limited to TCP/IP suite; cannot work with other protocol stacks like Bluetooth.</li>
      <li>Protocol design has remained largely unchanged for ~30 years.</li>
    </ul>

  </div>
);

export default Home;
