import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= IPv4 vs IPv6 ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Difference Between IPv4 and IPv6
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 30 Sep, 2025</p>

    <p className="text-lg leading-relaxed">
      The Internet Protocol (IP) assigns a unique address to every device on a network so it can send and receive data. IPv4 and IPv6 are two versions of IP addressing:
    </p>

    <h2 className="text-3xl font-bold mt-8">IPv4</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Older version using 32-bit addresses (≈4.3 billion addresses).</li>
      <li>Addresses written in decimal format (e.g., <code>192.168.0.1</code>).</li>
      <li>Limited address space, manual/DHCP configuration, and less secure.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-6">IPv6</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Newer version using 128-bit addresses (virtually unlimited addresses).</li>
      <li>Addresses written in hexadecimal format (e.g., <code>2001:0db8::1</code>).</li>
      <li>Built-in security (IPSec), auto-configuration, better QoS, and mobile-friendly.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Drawbacks of IPv4</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Limited addresses for the growing number of devices.</li>
      <li>Manual setup or DHCP is prone to errors.</li>
      <li>Inefficient routing and larger header overhead.</li>
      <li>No built-in security, limited QoS, broadcast overhead, and packet fragmentation.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Benefits of IPv6</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Larger 128-bit address space.</li>
      <li>Improved security with built-in authentication and encryption.</li>
      <li>Simpler, fixed-size header for faster processing.</li>
      <li>Better QoS and support for mobile devices.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Transition Strategies</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Dual Stack:</strong> Devices run both IPv4 and IPv6 simultaneously.</li>
      <li><strong>Tunneling:</strong> IPv6 packets are sent over IPv4 networks.</li>
      <li><strong>NAT64:</strong> Translates between IPv4 and IPv6 addresses for interoperability.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Comparison Table</h2>
    <div className="overflow-x-auto">
      <table className="table-auto border-collapse border border-gray-400 w-full text-left">
        <thead>
          <tr className="bg-gray-400">
            <th className="border border-gray-400 px-4 py-2">Feature</th>
            <th className="border border-gray-400 px-4 py-2">IPv4</th>
            <th className="border border-gray-400 px-4 py-2">IPv6</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border px-4 py-2">Address Length</td><td className="border px-4 py-2">32-bit</td><td className="border px-4 py-2">128-bit</td></tr>
          <tr><td className="border px-4 py-2">Address Format</td><td className="border px-4 py-2">Decimal (e.g., 192.168.0.1)</td><td className="border px-4 py-2">Hexadecimal (e.g., 2001:0db8::1)</td></tr>
          <tr><td className="border px-4 py-2">Configuration</td><td className="border px-4 py-2">Manual / DHCP</td><td className="border px-4 py-2">Auto-configuration supported</td></tr>
          <tr><td className="border px-4 py-2">Security</td><td className="border px-4 py-2">No built-in security</td><td className="border px-4 py-2">IPSec built-in</td></tr>
          <tr><td className="border px-4 py-2">Fragmentation</td><td className="border px-4 py-2">By sender and routers</td><td className="border px-4 py-2">By sender only</td></tr>
          <tr><td className="border px-4 py-2">Flow Identification</td><td className="border px-4 py-2">Not available</td><td className="border px-4 py-2">Flow Label field in header</td></tr>
          <tr><td className="border px-4 py-2">Checksum</td><td className="border px-4 py-2">Present</td><td className="border px-4 py-2">Not present</td></tr>
          <tr><td className="border px-4 py-2">Transmission Scheme</td><td className="border px-4 py-2">Broadcast</td><td className="border px-4 py-2">Multicast / Anycast</td></tr>
          <tr><td className="border px-4 py-2">Header Size</td><td className="border px-4 py-2">20–60 bytes</td><td className="border px-4 py-2">40 bytes</td></tr>
          <tr><td className="border px-4 py-2">Address Classes</td><td className="border px-4 py-2">A, B, C, D, E</td><td className="border px-4 py-2">None</td></tr>
          <tr><td className="border px-4 py-2">VLSM Support</td><td className="border px-4 py-2">Yes</td><td className="border px-4 py-2">No</td></tr>
          <tr><td className="border px-4 py-2">Example</td><td className="border px-4 py-2">66.94.29.13</td><td className="border px-4 py-2">2001:0000:3238:DFE1:0063:0000:0000:FEFB</td></tr>
        </tbody>
      </table>
    </div>

  </div>
);

export default Home;
