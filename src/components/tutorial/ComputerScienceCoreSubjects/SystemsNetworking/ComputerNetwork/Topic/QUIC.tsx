import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= QUIC Protocol ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      QUIC Protocol
    </h1>

    <p className="text-sm text-gray-500">Last Updated : 15 Oct, 2025</p>

    <p className="text-lg leading-relaxed">
      QUIC is a transport layer network protocol designed to make web communication
      faster and more reliable. Unlike older versions of HTTP that rely on TCP, QUIC
      works over UDP, combining speed and security in a single handshake.
    </p>

    <p className="leading-relaxed font-semibold mt-2">In short:</p>
    <ul className="list-disc ml-6">
      <li>HTTP/2 = TCP + TLS (multiple handshakes, higher latency)</li>
      <li>HTTP/3 = QUIC (single handshake, low latency)</li>
    </ul>

    {/* Why QUIC was Created */}
    <h2 className="text-3xl font-bold mt-8">Why QUIC was Created</h2>

    <p className="leading-relaxed">
      Before QUIC, web communication used TCP, which ensures reliable delivery but
      with additional round trips during connection setup. When a client connects:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>It sends a SYN request.</li>
      <li>The server replies with SYN-ACK.</li>
      <li>The client responds with ACK.</li>
    </ul>

    <p className="leading-relaxed">
      This three-way handshake occurs before any actual data is transmitted. For HTTPS,
      there is an additional TLS handshake, increasing delay.
    </p>

    <p className="leading-relaxed font-semibold">
      Note: QUIC eliminates this handshake delay, dramatically reducing connection time.
    </p>

    {/* How QUIC Works */}
    <h2 className="text-3xl font-bold mt-8">How QUIC Works</h2>

    <p className="leading-relaxed">
      QUIC operates at the transport layer on top of UDP. Although UDP is
      connectionless, QUIC provides reliability through:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Packet sequencing</li>
      <li>Acknowledgments</li>
      <li>Loss recovery</li>
      <li>Encryption (built-in TLS 1.3)</li>
    </ul>

    <p className="leading-relaxed">
      Note: Unlike TCP, which separates transport and encryption, QUIC merges both
      into a single handshake — allowing data transfer almost immediately.
    </p>

    {/* QUIC Replacement for TCP + TLS */}
    <h2 className="text-3xl font-bold mt-8">QUIC - The Replacement for TCP + TLS</h2>

    <p className="leading-relaxed">
      Traditional HTTP/2 uses TCP for transmission and TLS for encryption, requiring
      several steps to establish a secure connection. QUIC combines both functionalities
      into the protocol itself, enabling:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Fewer round trips</li>
      <li>Encrypted communication by default</li>
      <li>Faster page load times</li>
    </ul>

    <p className="leading-relaxed">
      Note: This makes QUIC ideal for modern web applications.
    </p>

    {/* UDP's Role */}
    <h2 className="text-3xl font-bold mt-8">UDP’s Role in QUIC</h2>

    <p className="leading-relaxed">
      QUIC is built on UDP, which is lightweight and fast but traditionally unreliable.
      QUIC enhances UDP with features like:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Packet acknowledgment</li>
      <li>Retransmission of lost data</li>
      <li>Stream multiplexing</li>
    </ul>

    <p className="leading-relaxed">
      Note: QUIC makes UDP reliable like TCP, but without TCP's overhead, making adoption easier.
    </p>

    {/* Where QUIC is Used */}
    <h2 className="text-3xl font-bold mt-8">Where Is QUIC Used</h2>

    <p className="leading-relaxed">QUIC powers HTTP/3. Major platforms using it:</p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Google Chrome & YouTube</li>
      <li>Facebook</li>
      <li>Cloudflare</li>
      <li>Microsoft Edge</li>
      <li>Amazon & Akamai</li>
    </ul>

    <p className="leading-relaxed">
      Note: Most Chromium-based browsers already use QUIC by default.
    </p>

    {/* Enabling QUIC */}
    <h2 className="text-3xl font-bold mt-8">Enabling QUIC in Your Browser</h2>

    <p className="font-semibold">Using Chrome Flags:</p>
    <ul className="list-disc ml-6 leading-relaxed mb-3">
      <li>Go to chrome://flags</li>
      <li>Search "QUIC"</li>
      <li>Enable Experimental QUIC Protocol</li>
    </ul>

    <p className="font-semibold">Using Command Line:</p>
    <p className="leading-relaxed mb-3">
      {"<browser.exe> --enable-quic --quic-version=h3-25"} <br />
      Example: chrome.exe --enable-quic --quic-version=h3-25
    </p>

    <p className="font-semibold">Using Enterprise Policy (Windows Registry):</p>
    <p className="leading-relaxed mb-3">
      Registry Key: [HKLM/HKCU]/SOFTWARE/Policies/Google/Chrome <br />
      Value: QuicAllowed (1 = Allowed, 0 = Blocked)
    </p>

    {/* Checking QUIC */}
    <h2 className="text-3xl font-bold mt-8">How to Check if a Site Uses QUIC</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Open Developer Tools</li>
      <li>Go to Network Tab</li>
      <li>Enable "Protocol" column</li>
      <li>Look for h3 / http/3</li>
    </ul>

    {/* QUIC vs TCP */}
    <h2 className="text-3xl font-bold mt-8">QUIC vs TCP - Latency Comparison</h2>

    <table className="border border-gray-600 text-left">
      <thead>
        <tr>
          <th className="border p-2">Protocol</th>
          <th className="border p-2">Round Trips</th>
          <th className="border p-2">Latency</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border p-2">HTTP/2 (TCP)</td>
          <td className="border p-2">3–4</td>
          <td className="border p-2">~284 ms</td>
        </tr>
        <tr>
          <td className="border p-2">HTTP/3 (QUIC)</td>
          <td className="border p-2">1</td>
          <td className="border p-2">~261 ms</td>
        </tr>
      </tbody>
    </table>

    <p className="leading-relaxed">
      QUIC clearly takes less time than TCP.
    </p>

    {/* Advantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages of QUIC</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Low latency</li>
      <li>Built-in TLS 1.3 security</li>
      <li>Multiplexing (no head-of-line blocking)</li>
      <li>Easier adoption</li>
      <li>Connection migration across networks</li>
    </ul>

    {/* Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Disadvantages of QUIC</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Limited browser/server support</li>
      <li>Debugging is difficult</li>
      <li>Complex flow control</li>
      <li>Different congestion behavior from TCP</li>
    </ul>
  </div>
);

export default Home;
