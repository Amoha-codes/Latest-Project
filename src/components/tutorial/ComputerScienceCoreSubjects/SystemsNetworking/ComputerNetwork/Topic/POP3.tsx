import React from "react";

const POP3Theory: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= POP3 ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Post Office Protocol Version 3 (POP3)
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 23 Jul, 2025</p>

    {/* Introduction */}
    <p className="text-lg leading-relaxed">
      POP3 (Post Office Protocol version 3) is an Internet Standard protocol used to retrieve emails from a mail server. It is part of the email protocol suite alongside SMTP and IMAP. POP3 allows users to download email messages from the server to their local system and access them offline.
    </p>

    <h2 className="text-3xl font-bold mt-6">What is POP3?</h2>
    <p className="leading-relaxed">
      POP3 provides access to the inbox stored on the mail server. Users can download messages, delete them, and read them locally without needing a continuous internet connection. POP3 does not support real-time synchronization; email clients typically check for new messages at regular intervals or manually. 
    </p>

    {/* POP3 Ports */}
    <h2 className="text-3xl font-bold mt-6">POP3 Ports</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Port 110:</strong> Default TCP port for POP3, not encrypted.</li>
      <li><strong>Port 995:</strong> Secure POP3 port using TLS/SSL for encrypted communication.</li>
    </ul>

    {/* History */}
    <h2 className="text-3xl font-bold mt-6">History of POP3</h2>
    <p className="leading-relaxed">
      POP was first published in 1984 (RFC 918). POP2 was introduced later, followed by POP3 in RFC 1081 (1988). POP3 was fully refined and released in 1996. It was designed to allow offline access to email while keeping the protocol simple and efficient.
    </p>

    {/* Working */}
    <h2 className="text-3xl font-bold mt-6">Working of POP3</h2>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>Client establishes a connection with the POP3 server.</li>
      <li>Secure connection is set up and commands are exchanged between client and server.</li>
      <li>Client requests the list of available emails, and the server responds with message sizes and unique IDs.</li>
      <li>Client requests specific messages to download; server sends messages and marks them accordingly.</li>
      <li>Client can request message deletion, if desired.</li>
      <li>Once tasks are completed, client closes the connection, and the server acknowledges it.</li>
    </ol>

    {/* Advantages */}
    <h2 className="text-3xl font-bold mt-6">Advantages of POP3</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Emails can be read offline.</li>
      <li>Requires less server storage.</li>
      <li>Simple to configure and widely supported.</li>
      <li>Local storage enables quick access to emails.</li>
      <li>Supports emails of unrestricted size.</li>
    </ul>

    {/* Disadvantages */}
    <h2 className="text-3xl font-bold mt-6">Disadvantages of POP3</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>No real-time synchronization across devices.</li>
      <li>Virus attachments can infect local systems.</li>
      <li>Cannot access the same email from multiple devices simultaneously.</li>
      <li>Emails stored locally are vulnerable if the computer is compromised.</li>
    </ul>

    {/* POP3 vs IMAP */}
    <h2 className="text-3xl font-bold mt-6">POP3 vs IMAP</h2>
    <table className="table-auto border-collapse border border-gray-400 w-full text-left">
      <thead>
        <tr>
          <th className="border border-gray-400 px-4 py-2">POP3</th>
          <th className="border border-gray-400 px-4 py-2">IMAP</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Downloads messages to local system</td>
          <td className="border border-gray-400 px-4 py-2">Allows access to all folders on the server</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Port 110 (default), 995 (SSL)</td>
          <td className="border border-gray-400 px-4 py-2">Port 143 (default), 993 (SSL)</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Single device access</td>
          <td className="border border-gray-400 px-4 py-2">Multiple device access</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Emails must be downloaded to read</td>
          <td className="border border-gray-400 px-4 py-2">Emails can be partially read before downloading</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Cannot modify server folders</td>
          <td className="border border-gray-400 px-4 py-2">Can create, delete, or rename folders on the server</td>
        </tr>
      </tbody>
    </table>

  </div>
);

export default POP3Theory;
