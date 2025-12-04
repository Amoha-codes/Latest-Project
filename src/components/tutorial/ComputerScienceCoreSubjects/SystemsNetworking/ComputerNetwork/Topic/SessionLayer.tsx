import React from "react";

const SessionLayerTheory: React.FC = () => {
  return (
    <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-2">
        Session Layer in OSI Model
      </h1>
      <p className="text-sm text-gray-500">Last Updated : 14 Oct, 2025</p>

      {/* Intro */}
      <p className="text-lg leading-relaxed">
        The <strong>Session Layer</strong> is the <strong>5th layer</strong> of the OSI
        (Open Systems Interconnection) model. It is responsible for <strong>establishing, maintaining, and terminating sessions</strong> between devices, ensuring smooth and synchronized data exchange.
      </p>

      {/* Role Section */}
      <h2 className="text-3xl font-bold mt-8">Role of the Session Layer</h2>
      <p className="leading-relaxed">
        The Session Layer ensures that two communicating devices can establish a meaningful
        dialogue, exchange data in an organized manner, and properly close the session when
        communication is complete.
      </p>
      <ul className="list-disc ml-6 leading-relaxed mt-2">
        <li>Provides mechanisms for session setup, management, and termination.</li>
        <li>Ensures that communication remains synchronized and reliable, even during long or complex transfers.</li>
        <li>Handles dialogue control, deciding whose turn it is to send or receive data.</li>
      </ul>
      <p className="italic mt-2">
        Note: In modern TCP/IP networks, some functions (like session release and dialogue control) are handled at the Transport Layer (TCP) or Application Layer.
      </p>

      {/* Key Functions */}
      <h2 className="text-3xl font-bold mt-8">Key Functions of the Session Layer</h2>
      <ul className="list-disc ml-6 leading-relaxed mt-2">
        <li>
          <strong>Session Establishment:</strong> Initiates and negotiates communication parameters such as authentication and duplex mode.
        </li>
        <li>
          <strong>Communication Synchronization:</strong> Keeps data streams in order using checkpoints.
        </li>
        <li>
          <strong>Activity & Dialog Management:</strong> Controls turns, prevents collisions, and avoids duplication.
        </li>
        <li>
          <strong>Resynchronization & Recovery:</strong> Recovers from failures using synchronization points.
        </li>
        <li>
          <strong>Session Termination:</strong> Gracefully ends communication after all data is exchanged.
        </li>
      </ul>

      {/* Working */}
      <h2 className="text-3xl font-bold mt-8">Working of the Session Layer</h2>
      <p className="leading-relaxed">
        The Session Layer works by:
      </p>
      <ul className="list-disc ml-6 leading-relaxed mt-2">
        <li>Establishing and negotiating session parameters (e.g., authentication, duplex mode).</li>
        <li>Managing token-based dialogue control to avoid collisions.</li>
        <li>Inserting synchronization checkpoints for recovery from failures.</li>
        <li>Ensuring data integrity by reducing duplication or message loss.</li>
        <li>Gracefully terminating sessions after confirming all data has been exchanged.</li>
      </ul>

      {/* Protocols */}
      <h2 className="text-3xl font-bold mt-8">Session Layer Protocols</h2>
      <ul className="list-disc ml-6 leading-relaxed mt-2">
        <li><strong>AppleTalk Data Stream Protocol (ADSP):</strong> LAN communication with self-configuration.</li>
        <li><strong>Real-time Transport Control Protocol (RTCP):</strong> QoS feedback for RTP-based multimedia sessions.</li>
        <li><strong>Point-to-Point Tunneling Protocol (PPTP):</strong> Enables VPNs over TCP/IP.</li>
        <li><strong>Password Authentication Protocol (PAP):</strong> Password-based authentication in PPP connections.</li>
        <li><strong>Remote Procedure Call Protocol (RPCP):</strong> Execute procedures in another address space (client-server).</li>
        <li><strong>Sockets Direct Protocol (SDP):</strong> Socket communication over RDMA-enabled networks.</li>
      </ul>

      {/* Devices */}
      <h2 className="text-3xl font-bold mt-8">Devices Associated with the Session Layer</h2>
      <ul className="list-disc ml-6 leading-relaxed mt-2">
        <li><strong>Firewalls:</strong> Monitor and control sessions for security.</li>
        <li><strong>Proxy Servers:</strong> Act as intermediaries, managing sessions between clients and servers.</li>
        <li><strong>Session Border Controllers (SBCs):</strong> Secure and manage VoIP sessions.</li>
        <li><strong>Application Servers:</strong> Create and maintain user sessions for applications.</li>
      </ul>
    </div>
  );
};

export default SessionLayerTheory;
