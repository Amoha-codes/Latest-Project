import React from "react";

const IMAPTheory: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= IMAP ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Internet Message Access Protocol (IMAP)
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 22 Nov, 2025</p>

    {/* Introduction */}
    <p className="text-lg leading-relaxed">
      IMAP (Internet Message Access Protocol) is an application-layer protocol designed for accessing and managing emails on a remote mail server. It was created by Mark Crispin in 1986, with the current version being IMAP4. Unlike POP3, IMAP allows users to view and manage emails across multiple devices while keeping messages on the server until explicitly deleted.
    </p>

    {/* Features */}
    <h2 className="text-3xl font-bold mt-6">Features of IMAP</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Multi-Mailbox Management:</strong> Organize emails into multiple folders or categories.</li>
      <li><strong>Message Flags:</strong> Track email status such as read, unread, replied, or flagged.</li>
      <li><strong>Selective Email Retrieval:</strong> Download only headers initially; full content can be retrieved later.</li>
      <li><strong>Efficient Attachment Handling:</strong> Download attachments on demand rather than automatically.</li>
      <li><strong>Synchronization:</strong> Changes like deletions, read/unread status, and folder organization are synchronized across all devices.</li>
    </ul>

    {/* Working */}
    <h2 className="text-3xl font-bold mt-6">Working of IMAP</h2>
    <p className="leading-relaxed">
      IMAP operates using a client-server architecture over TCP/IP networks. The protocol typically uses:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Port 143:</strong> Default non-encrypted IMAP communication.</li>
      <li><strong>Port 993:</strong> Secure IMAP communication using SSL/TLS encryption.</li>
    </ul>
    <ol className="list-decimal ml-6 leading-relaxed mt-2">
      <li>Email client (e.g., Outlook, Apple Mail) establishes a connection to the IMAP server.</li>
      <li>The client authenticates the user with the server.</li>
      <li>Initially, only email headers are retrieved.</li>
      <li>Messages and attachments are downloaded when the user opens them.</li>
      <li>Emails remain on the server until explicitly deleted, ensuring synchronization across devices.</li>
    </ol>

    {/* Architecture */}
    <h2 className="text-3xl font-bold mt-6">Architecture of IMAP</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>IMAP Clients:</strong> Email applications like Microsoft Outlook, Mozilla Thunderbird, Apple Mail, and mobile email apps communicate with the IMAP server.</li>
      <li><strong>IMAP Server:</strong> Stores and organizes emails, manages user mailboxes, and responds to client requests. Common servers include Dovecot, Courier IMAP, Cyrus IMAP, and Microsoft Exchange Server.</li>
      <li><strong>Network Protocol:</strong> Uses TCP/IP to allow clients to connect to the server over the Internet or local networks.</li>
    </ul>

    {/* Advantages over POP3 */}
    <h2 className="text-3xl font-bold mt-6">Advantages of IMAP over POP3</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Supports multiple devices with synchronized mailbox state.</li>
      <li>Faster access since only headers are retrieved initially.</li>
      <li>Emails are not deleted from the server unless the user chooses.</li>
      <li>Selective downloading of messages and attachments.</li>
    </ul>

  </div>
);

export default IMAPTheory;
