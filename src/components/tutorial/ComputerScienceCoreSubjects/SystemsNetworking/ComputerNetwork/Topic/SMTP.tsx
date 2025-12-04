import React from "react";

const SMTPTheory: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= SMTP ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Simple Mail Transfer Protocol (SMTP)
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 28 Aug, 2025</p>

    {/* Introduction */}
    <p className="text-lg leading-relaxed">
      Simple Mail Transfer Protocol (SMTP) is an application layer protocol used for exchanging email messages between servers. 
      It operates over TCP/IP and is essential for email communication. SMTP servers typically listen on port 25 to receive messages from clients.
    </p>

    {/* Types of SMTP Protocol */}
    <h2 className="text-3xl font-bold mt-8">Types of SMTP Protocol</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>End-to-End Delivery:</strong> Directly from sender's SMTP client to recipient's SMTP server. The client waits until the email reaches the recipient’s server.</li>
      <li><strong>Store-and-Forward:</strong> Email passes through intermediate servers (MTAs) before reaching the recipient. The sender is notified once it reaches the first server.</li>
    </ul>

    {/* SMTP System Model */}
    <h2 className="text-3xl font-bold mt-8">Model of SMTP System</h2>
    <p className="leading-relaxed">
      Users interact with a <strong>User Agent (UA)</strong> such as Outlook or Gmail. The UA sends emails to a local <strong>Mail Transfer Agent (MTA)</strong>, which queues and transfers emails to the recipient’s server.
    </p>

    {/* Components of SMTP */}
    <h2 className="text-3xl font-bold mt-8">Components of SMTP</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Mail User Agent (MUA):</strong> Creates and retrieves emails.</li>
      <li><strong>Mail Submission Agent (MSA):</strong> Receives emails from MUA and hands them to MTA.</li>
      <li><strong>Mail Transfer Agent (MTA):</strong> Transfers emails between systems using SMTP.</li>
      <li><strong>Mail Delivery Agent (MDA):</strong> Delivers email to the local mailbox.</li>
    </ul>

    {/* How SMTP Works */}
    <h2 className="text-3xl font-bold mt-8">How SMTP Works</h2>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li><strong>Sending Email:</strong> UA hands email to MTA, which transfers it to the recipient’s server.</li>
      <li><strong>SMTP Client & Server:</strong> Sender-MTA (client) connects to Receiver-MTA (server) via TCP port 25.</li>
      <li><strong>Relays & Gateways:</strong> Intermediate MTAs may relay emails; gateways convert formats if needed.</li>
      <li><strong>Email Delivery:</strong> MTA places the email in recipient's mailbox, ready for download by their UA.</li>
    </ol>

    {/* SMTP Envelope */}
    <h2 className="text-3xl font-bold mt-8">SMTP Envelope</h2>
    <p className="leading-relaxed">
      The SMTP envelope guides delivery between servers and is distinct from email headers and body.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Sender Address:</strong> Origin of the email.</li>
      <li><strong>Recipient Addresses:</strong> Destination of the email.</li>
      <li><strong>Routing Information:</strong> Helps servers determine delivery path.</li>
    </ul>

    {/* SMTP Commands */}
    <h2 className="text-3xl font-bold mt-8">SMTP Commands</h2>
    <table className="table-auto border-collapse border border-gray-400 w-full">
      <thead>
        <tr>
          <th className="border px-4 py-2">S.No.</th>
          <th className="border px-4 py-2">Keyword</th>
          <th className="border px-4 py-2">Command Form</th>
          <th className="border px-4 py-2">Description</th>
          <th className="border px-4 py-2">Usage</th>
        </tr>
      </thead>
      <tbody className="text-sm">
        <tr>
          <td className="border px-4 py-2">1</td>
          <td className="border px-4 py-2">HELO</td>
          <td className="border px-4 py-2">HELO &lt;SP&gt;&lt;domain&gt;&lt;CRLF&gt;</td>
          <td>Identifies sender host name</td>
          <td>Mandatory</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">2</td>
          <td className="border px-4 py-2">MAIL</td>
          <td className="border px-4 py-2">MAIL &lt;SP&gt;FROM: &lt;reverse-path&gt;&lt;CRLF&gt;</td>
          <td>Specifies mail originator</td>
          <td>Mandatory</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">3</td>
          <td className="border px-4 py-2">RCPT</td>
          <td className="border px-4 py-2">RCPT &lt;SP&gt;TO: &lt;forward-path&gt;&lt;CRLF&gt;</td>
          <td>Specifies recipient</td>
          <td>Mandatory</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">4</td>
          <td className="border px-4 py-2">DATA</td>
          <td className="border px-4 py-2">DATA &lt;CRLF&gt;</td>
          <td>Indicates beginning of email content</td>
          <td>Mandatory</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">5</td>
          <td className="border px-4 py-2">QUIT</td>
          <td className="border px-4 py-2">QUIT &lt;CRLF&gt;</td>
          <td>Closes TCP connection</td>
          <td>Mandatory</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">6</td>
          <td className="border px-4 py-2">RSET</td>
          <td className="border px-4 py-2">RSET &lt;CRLF&gt;</td>
          <td>Aborts current transaction, keeps connection open</td>
          <td>Recommended</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">7</td>
          <td className="border px-4 py-2">VRFY</td>
          <td className="border px-4 py-2">VRFY &lt;SP&gt;&lt;string&gt;&lt;CRLF&gt;</td>
          <td>Verifies a username</td>
          <td>Recommended</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">8</td>
          <td className="border px-4 py-2">NOOP</td>
          <td className="border px-4 py-2">NOOP &lt;CRLF&gt;</td>
          <td>No operation</td>
          <td>Recommended</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">9</td>
          <td className="border px-4 py-2">TURN</td>
          <td className="border px-4 py-2">TURN &lt;CRLF&gt;</td>
          <td>Reverses sender/receiver roles</td>
          <td>Seldom used</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">10</td>
          <td className="border px-4 py-2">EXPN</td>
          <td className="border px-4 py-2">EXPN &lt;SP&gt;&lt;string&gt;&lt;CRLF&gt;</td>
          <td>Expands mailing list</td>
          <td>Seldom used</td>
        </tr>
      </tbody>
    </table>

    {/* SMTP Ports */}
    <h2 className="text-3xl font-bold mt-8">SMTP Ports</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Port 587 – Secure SMTP submission (recommended for clients).</li>
      <li>Port 465 – Legacy secure SMTP (not standard anymore).</li>
      <li>Port 25 – Traditional server-to-server relay (may be blocked).</li>
      <li>Port 2525 – Alternative submission port, used when 25 is blocked.</li>
    </ul>

    {/* SMTP vs Extended SMTP */}
    <h2 className="text-3xl font-bold mt-8">Difference Between SMTP and Extended SMTP (ESMTP)</h2>
    <table className="table-auto border-collapse border border-gray-400 w-full">
      <thead>
        <tr>
          <th className="border px-4 py-2">SMTP</th>
          <th className="border px-4 py-2">Extended SMTP (ESMTP)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">No sender verification</td>
          <td className="border px-4 py-2">Sender authentication provided</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Cannot attach multimedia directly</td>
          <td className="border px-4 py-2">Supports multimedia attachment</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">HELO command to start session</td>
          <td className="border px-4 py-2">EHLO command to start session</td>
        </tr>
      </tbody>
    </table>

    {/* Advantages & Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages of SMTP</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Supports dedicated servers.</li>
      <li>Enables bulk mailing.</li>
      <li>Low cost and wide coverage.</li>
      <li>Reliable and prompt delivery.</li>
      <li>Supports email tracking.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Disadvantages of SMTP</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Common port may be blocked by firewalls.</li>
      <li>Security issues (unencrypted transmission).</li>
      <li>Supports only 7-bit ASCII characters.</li>
      <li>Message length limitations may cause rejection.</li>
      <li>Delivery may involve multiple back-and-forth steps, causing delays.</li>
    </ul>

    {/* SMTP vs POP vs IMAP */}
    <h2 className="text-3xl font-bold mt-8">SMTP vs POP vs IMAP</h2>
    <table className="table-auto border-collapse border border-gray-400 w-full text-sm">
      <thead>
        <tr>
          <th className="border px-4 py-2">Protocol</th>
          <th className="border px-4 py-2">Purpose</th>
          <th className="border px-4 py-2">Direction</th>
          <th className="border px-4 py-2">Port</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">SMTP</td>
          <td className="border px-4 py-2">Sending mail</td>
          <td className="border px-4 py-2">Push</td>
          <td className="border px-4 py-2">25</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">POP</td>
          <td className="border px-4 py-2">Retrieving mail</td>
          <td className="border px-4 py-2">Pull</td>
          <td className="border px-4 py-2">110</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">IMAP</td>
          <td className="border px-4 py-2">Retrieving mail</td>
          <td className="border px-4 py-2">Pull</td>
          <td className="border px-4 py-2">143</td>
        </tr>
      </tbody>
    </table>

  </div>
);

export default SMTPTheory;
