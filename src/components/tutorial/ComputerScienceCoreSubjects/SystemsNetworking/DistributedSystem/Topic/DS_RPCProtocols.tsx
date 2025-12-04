import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Communication Protocols for RPCs ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Communication Protocols For RPCs
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 17 Mar, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Communication protocols define how Remote Procedure Calls (RPCs) exchange 
      messages between a client and a server. These protocols determine how requests, 
      replies, and acknowledgements are transferred and how failures or retransmissions 
      are handled in a distributed system.
    </p>

    {/* Section: Types of RPC Communication Protocols */}
    <h2 className="text-3xl font-bold mt-8">Types of Communication Protocols</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Request Protocol (R Protocol)</li>
      <li>Request/Reply Protocol (RR Protocol)</li>
      <li>Request/Reply/Acknowledgement-Reply Protocol (RRA Protocol)</li>
    </ul>

    {/* ================= Request Protocol ================= */}
    <h2 className="text-3xl font-bold mt-8">1. Request Protocol (R Protocol)</h2>

    <p className="leading-relaxed">
      The Request Protocol is used when a client sends a request to the server but does 
      not expect a reply or confirmation after execution. Only one message is transmitted 
      from client to server.
    </p>

    <ul className="list-disc ml-6 space-y-2 leading-relaxed">
      <li>Client sends one request message; server performs the operation silently.</li>
      <li>No reply or acknowledgement is needed.</li>
      <li>Client continues execution after sending the request.</li>
      <li>Provides <strong>maybe semantics</strong> — no retransmission or execution guarantee.</li>
      <li>Used in Asynchronous RPC for improved parallelism.</li>
      <li>RPC runtime does not retry if communication fails.</li>
      <li>
        Typically used for periodic update services such as distributed window systems.
      </li>
    </ul>

    {/* ================= Request/Reply Protocol ================= */}
    <h2 className="text-3xl font-bold mt-8">2. Request/Reply Protocol (RR Protocol)</h2>

    <p className="leading-relaxed">
      The Request/Reply Protocol is commonly used for simple RPCs where the server must 
      send a response to the client after processing the request.
    </p>

    <ul className="list-disc ml-6 space-y-2 leading-relaxed">
      <li>Client sends request → Server replies with the result.</li>
      <li>The reply automatically serves as an acknowledgement.</li>
      <li>
        The client's next request also acts as an implicit acknowledgement of the previous 
        server response.
      </li>
      <li>Timeouts detect missing responses; if time expires, request is retransmitted.</li>
      <li>
        Servers maintain a <strong>reply cache</strong> to resend replies for duplicate 
        requests.
      </li>
      <li>
        With duplicate filtering → <strong>exactly-once semantics</strong>.
      </li>
      <li>
        Without filtering → <strong>at-least-once semantics</strong>.
      </li>
    </ul>

    {/* ================= Request/Reply/Acknowledgement-Reply Protocol ================= */}
    <h2 className="text-3xl font-bold mt-8">
      3. Request/Reply/Acknowledgement-Reply Protocol (RRA Protocol)
    </h2>

    <p className="leading-relaxed">
      The RRA Protocol extends RR by adding explicit acknowledgements from the client. 
      This prevents servers from accidentally deleting cached replies before the client 
      receives them.
    </p>

    <ul className="list-disc ml-6 space-y-2 leading-relaxed">
      <li>Client acknowledges every reply message explicitly.</li>
      <li>
        Server removes reply data from cache only after receiving the acknowledgement.
      </li>
      <li>Avoids reply-loss problems in standard RR.</li>
      <li>Uses unique ordered message identifiers for tracking acknowledgements.</li>
      <li>Supports strong <strong>exactly-once</strong> semantics.</li>
    </ul>

    {/* ================= Complicated RPCs ================= */}
    <h2 className="text-3xl font-bold mt-8">Complicated RPCs</h2>
    <p className="leading-relaxed">
      Some RPC operations require more advanced handling because of long execution times 
      or large message sizes.
    </p>

    {/* Subsection A */}
    <h3 className="text-2xl font-bold mt-6">
      A. RPCs with Long-Duration Calls or Large Gaps Between Calls
    </h3>
    <ul className="list-disc ml-6 space-y-2 leading-relaxed">
      <li>
        <strong>Client Probing:</strong> The client periodically sends probe packets to 
        verify server availability.
      </li>
      <li>
        <strong>Server Acknowledgements:</strong> If server execution is delayed, it sends 
        periodic acknowledgements to avoid client timeouts.
      </li>
      <li>
        Lack of response → Client assumes failure or crash and reports exception.
      </li>
    </ul>

    {/* Subsection B */}
    <h3 className="text-2xl font-bold mt-6">
      B. RPCs with Large Parameters or Results
    </h3>

    <h4 className="text-xl font-semibold mt-4">1. RPCs with Long Messages</h4>
    <p className="leading-relaxed">
      Large arguments or results may not fit into a single datagram. They are sent across 
      multiple RPCs, each carrying a datagram-sized portion. Simple but inefficient due to 
      repeated overhead.
    </p>

    <h4 className="text-xl font-semibold mt-4">2. Multidatagram Messages</h4>
    <p className="leading-relaxed">
      The data is split into multiple packets and transmitted as a single logical RPC. A 
      single acknowledgement is used for all packets, improving performance compared to 
      multiple individual RPCs.
    </p>

  </div>
);

export default Home;
