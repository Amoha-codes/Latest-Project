import React from "react";

const TCPvsUDP: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20 bg-white text-black">

    {/* ================= Title ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Differences between TCP and UDP
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 06 Oct, 2025</p>

    {/* Intro */}
    <p className="text-lg leading-relaxed">
      Transmission Control Protocol (TCP) and User Datagram Protocol (UDP) are two
      core transport layer protocols used in computer networking. Below are the
      key differences between them based on various features and characteristics.
    </p>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">TCP vs UDP Comparison</h2>

    <table className="w-full border rounded bg-gray-50 text-sm">
      <thead>
        <tr className="bg-gray-400">
          <th className="border px-3 py-2 text-left">Basis</th>
          <th className="border px-3 py-2 text-left">TCP</th>
          <th className="border px-3 py-2 text-left">UDP</th>
        </tr>
      </thead>
      <tbody>

        <tr>
          <td className="border px-3 py-2">Type of Service</td>
          <td className="border px-3 py-2">
            TCP is a connection-oriented protocol. A connection must be established
            before data transfer and closed afterward.
          </td>
          <td className="border px-3 py-2">
            UDP is a datagram-oriented protocol. No overhead of connection setup,
            maintenance, or termination. Efficient for broadcast & multicast.
          </td>
        </tr>

        <tr>
          <td className="border px-3 py-2">Reliability</td>
          <td className="border px-3 py-2">Guaranteed, reliable delivery of data.</td>
          <td className="border px-3 py-2">Delivery is not guaranteed.</td>
        </tr>

        <tr>
          <td className="border px-3 py-2">Error Checking</td>
          <td className="border px-3 py-2">
            Extensive error checking with flow control and acknowledgments.
          </td>
          <td className="border px-3 py-2">
            Basic error checking using checksums only.
          </td>
        </tr>

        <tr>
          <td className="border px-3 py-2">Acknowledgment</td>
          <td className="border px-3 py-2">Acknowledgment segment is present.</td>
          <td className="border px-3 py-2">No acknowledgment segment.</td>
        </tr>

        <tr>
          <td className="border px-3 py-2">Sequence</td>
          <td className="border px-3 py-2">
            TCP provides sequencing to ensure in-order data arrival.
          </td>
          <td className="border px-3 py-2">
            No sequencing. Application must handle ordering if needed.
          </td>
        </tr>

        <tr>
          <td className="border px-3 py-2">Speed</td>
          <td className="border px-3 py-2">Slower due to reliability features.</td>
          <td className="border px-3 py-2">Faster, simpler, more efficient.</td>
        </tr>

        <tr>
          <td className="border px-3 py-2">Retransmission</td>
          <td className="border px-3 py-2">
            Lost packets are retransmitted automatically.
          </td>
          <td className="border px-3 py-2">No retransmission mechanism.</td>
        </tr>

        <tr>
          <td className="border px-3 py-2">Header Length</td>
          <td className="border px-3 py-2">
            Variable header length (20–60 bytes).
          </td>
          <td className="border px-3 py-2">Fixed 8-byte header.</td>
        </tr>

        <tr>
          <td className="border px-3 py-2">Weight</td>
          <td className="border px-3 py-2">Heavyweight protocol.</td>
          <td className="border px-3 py-2">Lightweight protocol.</td>
        </tr>

        <tr>
          <td className="border px-3 py-2">Handshaking</td>
          <td className="border px-3 py-2">Uses SYN, ACK, SYN-ACK (three-way handshake).</td>
          <td className="border px-3 py-2">Connectionless — no handshake.</td>
        </tr>

        <tr>
          <td className="border px-3 py-2">Broadcasting</td>
          <td className="border px-3 py-2">Does not support broadcasting.</td>
          <td className="border px-3 py-2">Supports broadcasting.</td>
        </tr>

        <tr>
          <td className="border px-3 py-2">Protocols Using It</td>
          <td className="border px-3 py-2">
            HTTP, HTTPS, FTP, SMTP, Telnet.
          </td>
          <td className="border px-3 py-2">
            DNS, DHCP, TFTP, SNMP, RIP, VoIP.
          </td>
        </tr>

        <tr>
          <td className="border px-3 py-2">Stream Type</td>
          <td className="border px-3 py-2">Byte-stream connection.</td>
          <td className="border px-3 py-2">Message-based stream.</td>
        </tr>

        <tr>
          <td className="border px-3 py-2">Overhead</td>
          <td className="border px-3 py-2">Low, but higher than UDP.</td>
          <td className="border px-3 py-2">Very low overhead.</td>
        </tr>

        <tr>
          <td className="border px-3 py-2">Applications</td>
          <td className="border px-3 py-2">
            Used where reliability is required: email, web browsing, file transfer,
            military communication, etc.
          </td>
          <td className="border px-3 py-2">
            Used where speed is more important than reliability: VoIP, live video
            streaming, gaming, etc.
          </td>
        </tr>

      </tbody>
    </table>

  </div>
);

export default TCPvsUDP;
