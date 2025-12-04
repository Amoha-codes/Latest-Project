import React from "react";

const UDP: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20  ">

    {/* ================= UDP Theory ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      User Datagram Protocol (UDP)
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 14 Oct, 2025</p>

    {/* Intro */}
    <p className="text-lg leading-relaxed">
      User Datagram Protocol (UDP) is a Transport Layer protocol of the Internet
      Protocol (IP) that provides fast, connectionless, and lightweight
      communication between processes. It does not guarantee delivery, order, or
      error checking, making it suitable for real-time and time-sensitive
      applications such as video streaming, DNS, and VoIP.
    </p>

    {/* UDP Header */}
    <h2 className="text-3xl font-bold mt-8">UDP Header</h2>
    <p className="leading-relaxed">
      The UDP header is 8 bytes long, followed by the data payload. It contains
      essential information for transmission. Each port number field is 16 bits,
      allowing a range of 0–65535 (port 0 is reserved). Port numbers identify
      and separate different user requests or processes.
    </p>

    <table className="w-full border rounded  text-sm">
      <thead>
        <tr className="bg-gray-400">
          <th className="border px-3 py-2 text-left">Field</th>
          <th className="border px-3 py-2 text-left">Size</th>
          <th className="border px-3 py-2 text-left">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-3 py-2">Source Port</td>
          <td className="border px-3 py-2">16 bits</td>
          <td className="border px-3 py-2">Identifies sender’s port number.</td>
        </tr>
        <tr>
          <td className="border px-3 py-2">Destination Port</td>
          <td className="border px-3 py-2">16 bits</td>
          <td className="border px-3 py-2">Identifies receiver’s port number.</td>
        </tr>
        <tr>
          <td className="border px-3 py-2">Length</td>
          <td className="border px-3 py-2">16 bits</td>
          <td className="border px-3 py-2">
            Specifies total length of UDP header and data.
          </td>
        </tr>
        <tr>
          <td className="border px-3 py-2">Checksum</td>
          <td className="border px-3 py-2">16 bits</td>
          <td className="border px-3 py-2">
            Error detection (optional in IPv4, mandatory in IPv6).
          </td>
        </tr>
      </tbody>
    </table>

    <p className="leading-relaxed">
      <strong>Notes:</strong> Unlike TCP, UDP checksum is optional. UDP provides
      no error or flow control and relies on IP/ICMP for error reporting.
    </p>

    {/* Applications */}
    <h2 className="text-3xl font-bold mt-8">Applications of UDP</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>DNS</strong> – fast query/response for domain lookups.
      </li>
      <li>
        <strong>DHCP</strong> – dynamic IP address assignment.
      </li>
      <li>
        <strong>VoIP</strong> – real-time voice communication.
      </li>
      <li>
        <strong>RIP</strong> – efficient routing updates.
      </li>
      <li>
        <strong>NTP</strong> – time synchronization with minimal overhead.
      </li>
    </ul>

    {/* Pseudo Header */}
    <h2 className="text-3xl font-bold mt-8">UDP Pseudo Header</h2>
    <p className="leading-relaxed">
      To improve checksum accuracy, UDP uses a pseudo header (not transmitted)
      during checksum calculation. It includes:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Source IP address</li>
      <li>Destination IP address</li>
      <li>Protocol number</li>
      <li>UDP length</li>
    </ul>

    <p className="leading-relaxed">
      The receiver verifies the checksum using the pseudo header. If valid, the
      packet is accepted.
    </p>

    {/* UDP in DDoS Attacks */}
    <h2 className="text-3xl font-bold mt-8">
      Use of UDP in DDoS Attacks
    </h2>

    <p className="leading-relaxed">
      A UDP flood attack is a type of Distributed Denial of Service (DDoS)
      attack where an attacker sends massive UDP packets to a target port,
      exploiting UDP’s connectionless nature.
    </p>

    <h3 className="text-xl font-semibold mt-4">Attack Process:</h3>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>Attacker sends huge UDP packets with spoofed IPs to random ports.</li>
      <li>Target checks for applications on those ports (usually none).</li>
      <li>
        Target responds with ICMP "Destination Unreachable" messages, causing
        resource overload.
      </li>
    </ol>

    <h3 className="text-xl font-semibold mt-4">Mitigation:</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Monitor for unusual UDP traffic spikes.</li>
      <li>Use firewalls, rate limiting, and intrusion prevention systems.</li>
      <li>Deploy DDoS protection services.</li>
    </ul>

    {/* Interaction with IP */}
    <h2 className="text-3xl font-bold mt-8">How UDP Interacts with IP</h2>

    <p className="leading-relaxed">
      UDP works on top of IP to enable communication between applications:
    </p>

    <ol className="list-decimal ml-6 leading-relaxed">
      <li>Application sends data + destination details to UDP.</li>
      <li>UDP attaches its header (ports, length, checksum).</li>
      <li>UDP hands the datagram to IP for routing.</li>
      <li>IP adds its own header and forwards it.</li>
      <li>Receiver’s UDP removes header and delivers data to application.</li>
    </ol>

  </div>
);

export default UDP;
