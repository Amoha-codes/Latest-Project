import React from "react";

const PPTP: React.FC = () => {
  return (
    <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-2">
        Point-to-Point Tunneling Protocol (PPTP)
      </h1>
      <p className="text-sm text-gray-500">Last Updated : 15 Oct, 2025</p>

      {/* Introduction */}
      <p className="text-lg leading-relaxed">
        PPTP (Point-to-Point Tunneling Protocol) is a networking protocol designed to create a secure private connection over a public network. Developed in the 1990s by Microsoft and other companies, it was one of the first protocols for Virtual Private Networks (VPNs).
      </p>

      {/* Explanation */}
      <h2 className="text-3xl font-bold mt-8">Concept</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li>
          <strong>Point-to-Point:</strong> A connection between two specific points.
        </li>
        <li>
          <strong>Tunneling:</strong> Encapsulating one protocol inside another. PPTP wraps the Point-to-Point Protocol (PPP) inside TCP/IP for secure Internet transmission.
        </li>
      </ul>
      <p className="mt-2">
        PPTP establishes a secure tunnel between two points, allowing remote users to connect safely to private networks. It is known for fast connectivity due to lightweight encryption.
      </p>

      {/* Working */}
      <h2 className="text-3xl font-bold mt-8">How PPTP Works</h2>
      <p className="leading-relaxed">
        PPTP operates at Layer 2 of the OSI model using a client-server design:
      </p>
      <ul className="list-disc ml-6 space-y-1">
        <li>VPN client initiates the connection.</li>
        <li>VPN server receives and authenticates the request.</li>
        <li>Control Messages manage VPN connection and termination.</li>
        <li>Data Packets carry user data through the tunnel.</li>
      </ul>

      {/* Technical Details */}
      <h2 className="text-3xl font-bold mt-8">Technical Details</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li>Uses GRE (General Routing Encapsulation).</li>
        <li>TCP Port 1723 for control; IP Protocol 47 for GRE.</li>
        <li>Supports Microsoft Point-to-Point Encryption (MPPE) up to 128-bit keys.</li>
        <li>Secure versions use MPPE-128, MS-CHAPv2 for authentication, and strong passwords.</li>
      </ul>

      {/* Types of Tunneling */}
      <h2 className="text-3xl font-bold mt-8">Types of Tunneling</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li>
          <strong>Voluntary Tunneling:</strong> Client-initiated VPN connection, manual setup, common for personal VPNs or remote work.
        </li>
        <li>
          <strong>Compulsory Tunneling:</strong> Server-initiated VPN connection, automatic setup, centralized control for organizations.
        </li>
      </ul>

      {/* Advantages */}
      <h2 className="text-3xl font-bold mt-8">Advantages of PPTP</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li>Fast connectivity due to lightweight encryption.</li>
        <li>Easy setup on most operating systems and devices.</li>
        <li>Cross-platform compatibility.</li>
        <li>Low hardware and transmission costs.</li>
        <li>Low administrative overhead with centralized user accounts.</li>
        <li>Basic security and support for multiple protocols (IP, IPX, NetBEUI).</li>
      </ul>

      {/* Disadvantages */}
      <h2 className="text-3xl font-bold mt-8">Disadvantages of PPTP</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li>Weak security; encryption is outdated and vulnerable.</li>
        <li>Susceptible to cyber attacks.</li>
        <li>Compatibility issues with routers requiring PPTP passthrough.</li>
        <li>Can be blocked by firewalls.</li>
      </ul>

      <p className="mt-2 italic">
        Note: PPTP is fast and widely compatible but not recommended for sensitive data. Modern VPN protocols like L2TP/IPsec, OpenVPN, or WireGuard provide stronger security.
      </p>
    </div>
  );
};

export default PPTP;
