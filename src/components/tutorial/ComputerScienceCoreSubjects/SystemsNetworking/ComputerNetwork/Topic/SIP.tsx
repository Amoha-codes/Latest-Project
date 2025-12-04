import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Session Initiation Protocol ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Session Initiation Protocol (SIP)
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 15 Jul, 2025</p>

    {/* Introduction Paragraph */}
    <p className="text-lg leading-relaxed">
      Session Initiation Protocol (SIP) is an <strong>application-layer protocol</strong> designed by the IETF and described in <strong>RFC 3261</strong>. It is used to <strong>establish, manage, and terminate multimedia sessions</strong> such as internet telephone calls, video conferences, and other real-time communications. SIP supports two-way sessions, multiparty sessions, and multicast sessions. It is independent of the underlying transport layer and can run over <strong>UDP</strong> or <strong>TCP</strong>.
    </p>

    {/* SIP Address */}
    <h2 className="text-3xl font-bold mt-8">SIP Address</h2>
    <p className="leading-relaxed">
      In SIP, the sender and receiver can be identified by:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>An Email address</li>
      <li>An IP address</li>
      <li>A Phone number</li>
    </ul>
    <p className="leading-relaxed">
      SIP addresses are represented as URLs using the <strong>sip:</strong> scheme.
    </p>

    {/* SIP Messages */}
    <h2 className="text-3xl font-bold mt-8">SIP Messages</h2>
    <p className="leading-relaxed">
      SIP is a <strong>text-based protocol</strong> modeled on HTTP. Each message consists of ASCII text with a header and a body. The main SIP messages include:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>INVITE:</strong> Requests the initiation of a session.</li>
      <li><strong>ACK:</strong> Confirms that the session has been initiated.</li>
      <li><strong>BYE:</strong> Requests termination of the session.</li>
      <li><strong>OPTIONS:</strong> Queries a host about its capabilities.</li>
      <li><strong>CANCEL:</strong> Cancels a pending request.</li>
      <li><strong>REGISTER:</strong> Informs a redirect server about the user's current location.</li>
    </ul>

    {/* SIP Session */}
    <h2 className="text-3xl font-bold mt-8">SIP Session</h2>
    <p className="leading-relaxed">
      A SIP session consists of three main phases:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Establishing a Session:</strong> Requires a three-way handshake. The caller sends an INVITE message. If the callee accepts, a response is sent. The caller then sends an ACK to confirm.</li>
      <li><strong>Communication:</strong> After the session is established, the caller and callee communicate using two temporary ports for the media.</li>
      <li><strong>Terminating a Session:</strong> Either party can terminate the session by sending a BYE message.</li>
    </ul>

  </div>
);

export default Home;
