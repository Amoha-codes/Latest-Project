import React from "react";

const TCPConnectionTermination: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Title ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      TCP Connection Termination
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 06 Nov, 2025</p>

    {/* ================= Introduction ================= */}
    <p className="leading-relaxed mt-4">
      TCP connection termination is the process of closing an established TCP connection in an orderly way. It uses a <strong>four-step handshake</strong> (FIN-ACK exchange) to ensure both sides have finished sending and receiving data before the connection fully closes.
    </p>

    {/* ================= Types of TCP Connection Release ================= */}
    <h2 className="text-3xl font-bold mt-8">Types of TCP Connection Release</h2>
    <p className="leading-relaxed">
      TCP supports two types of connection release:
    </p>
    <ul className="list-disc ml-6 space-y-2 leading-relaxed">
      <li>
        <strong>Abrupt Connection Release:</strong> One TCP entity forcibly closes the connection, often using an RST segment. Causes can include:
        <ul className="list-disc ml-6 space-y-1">
          <li>Receiving a non-SYN segment for a non-existing TCP connection.</li>
          <li>Invalid header received in an open connection (prevents attacks).</li>
          <li>Lack of resources or the remote host becoming unreachable.</li>
        </ul>
      </li>
      <li>
        <strong>Graceful Connection Release:</strong> Uses the FIN flag to allow each host to close its side individually.
      </li>
    </ul>

    {/* ================= Graceful Termination Steps ================= */}
    <h2 className="text-3xl font-bold mt-8">Graceful Connection Termination Steps</h2>
    <ol className="list-decimal ml-6 space-y-3 leading-relaxed">
      <li><strong>FIN from Client:</strong> The client sends a FIN to the server and enters <code>FIN_WAIT_1</code> state.</li>
      <li><strong>ACK from Server:</strong> The server acknowledges the FIN; the client moves to <code>FIN_WAIT_2</code>.</li>
      <li><strong>Client Waiting:</strong> The client waits for the server’s FIN while in <code>FIN_WAIT_2</code> state.</li>
      <li><strong>FIN from Server:</strong> The server sends its FIN after finishing its tasks.</li>
      <li><strong>ACK from Client:</strong> The client acknowledges the server’s FIN, enters <code>TIME_WAIT</code>, and after a delay, the connection closes completely.</li>
    </ol>

    {/* ================= TCP States Visited ================= */}
    <h2 className="text-3xl font-bold mt-8">TCP States Visited</h2>
    <p className="leading-relaxed">
      TCP connections follow a state machine on both client and server sides, representing progress from establishment to termination.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Client Side States</h3>
    <p className="leading-relaxed">
      When the client initiates closure, the states include <code>FIN_WAIT_1</code>, <code>FIN_WAIT_2</code>, and <code>TIME_WAIT</code>. These states track the orderly shutdown of the connection.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Server Side States</h3>
    <p className="leading-relaxed">
      The server enters <code>CLOSE_WAIT</code> upon receiving the client’s FIN, acknowledges it, then sends its own FIN and moves to <code>LAST_ACK</code>. After receiving the final ACK from the client, the connection closes gracefully.
    </p>
  </div>
);

export default TCPConnectionTermination;
