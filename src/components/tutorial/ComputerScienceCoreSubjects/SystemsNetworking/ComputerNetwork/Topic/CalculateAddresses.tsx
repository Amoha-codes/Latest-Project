import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Title ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      How to Calculate Number of Hosts in a Subnet
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 23 Jul, 2025</p>

    {/* ================= Introduction ================= */}
    <p className="text-lg leading-relaxed">
      <strong>Subnetting</strong> is the process of dividing a larger network into smaller, manageable subnet segments.
      Calculating the number of hosts in a subnet ensures efficient IP usage, improves network performance, and enhances security.
    </p>

    {/* ================= IP Address and Subnetting ================= */}
    <h2 className="text-3xl font-bold mt-8">Subnetting and IP Addresses</h2>
    <p className="leading-relaxed">
      An <strong>IP address</strong> identifies a device on a network. IPv4 addresses consist of 32 bits divided into four octets.
      Subnetting divides a network into smaller subnets, optimizing IP usage and isolating broadcast domains.
    </p>

    <p className="leading-relaxed">
      <strong>Subnet Mask</strong> is used to separate the network portion from the host portion of an IP address.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Reduces broadcast traffic within a network.</li>
      <li>Enhances network security by isolating subnets.</li>
      <li>Improves overall network efficiency.</li>
    </ul>

    {/* ================= Practical Application ================= */}
    <h2 className="text-3xl font-bold mt-8">Practical Application</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Adjust subnet mask (e.g., from <code>255.255.255.0</code> to <code>255.255.255.192</code>) to create smaller networks.</li>
      <li>Calculate usable hosts using the formula: <code>Usable Hosts = 2<sup>h</sup> - 2</code>, where <strong>h</strong> is the number of host bits.</li>
    </ul>

    {/* ================= Calculating Subnets and Hosts ================= */}
    <h2 className="text-3xl font-bold mt-8">Calculating Subnets and Hosts</h2>
    <p className="leading-relaxed">
      <strong>Formulas:</strong>
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Usable Hosts:</strong> <code>2<sup>h</sup> - 2</code>, where <strong>h</strong> = host bits in the subnet mask.</li>
      <li><strong>Total Subnets:</strong> <code>2<sup>s</sup></code>, where <strong>s</strong> = bits borrowed from host bits.</li>
    </ul>

    {/* ================= Example /25 ================= */}
    <h3 className="text-2xl font-bold mt-4">Example: /25 Subnet Mask</h3>
    <p className="leading-relaxed">
      Subnet Mask: <code>255.255.255.128</code> (CIDR: /25)<br/>
      Host bits <strong>h</strong> = 32 - 25 = 7<br/>
      Usable Hosts = 2<sup>7</sup> - 2 = 126<br/>
      Bits borrowed <strong>s</strong> = 25 - 24 = 1<br/>
      Total Subnets = 2<sup>1</sup> = 2
    </p>

    {/* ================= Example /26 and /27 ================= */}
    <h3 className="text-2xl font-bold mt-4">Other Examples</h3>
    <p className="leading-relaxed">
      <strong>/26 Subnet Mask:</strong> Host bits = 6, Usable Hosts = 62, Total Subnets = 4<br/>
      <strong>/27 Subnet Mask:</strong> Host bits = 5, Usable Hosts = 30, Total Subnets = 8
    </p>

    {/* ================= Steps to Find Number of Computers ================= */}
    <h2 className="text-3xl font-bold mt-8">Steps to Find Number of Computers Connected</h2>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>
        <strong>Identify the Class of the IP Address:</strong> Classes A, B, C, D, E based on first octet.
      </li>
      <li>
        <strong>Find the Network IP Address:</strong> Perform binary AND operation between IP and subnet mask.
      </li>
      <li>
        <strong>Calculate Number of Hosts:</strong> Use <code>2<sup>host_bits</sup> - 2</code> formula.
      </li>
    </ol>

    {/* ================= IP Classes Table ================= */}
    <h3 className="text-2xl font-bold mt-4">IPv4 Classes</h3>
    <table className="table-auto border-collapse border border-gray-400 mt-2">
      <thead>
        <tr>
          <th className="border border-gray-400 px-2">Class</th>
          <th className="border border-gray-400 px-2">Number of Networks</th>
          <th className="border border-gray-400 px-2">Number of Hosts</th>
          <th className="border border-gray-400 px-2">Usable Hosts</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-400 px-2">A</td>
          <td className="border border-gray-400 px-2">126</td>
          <td className="border border-gray-400 px-2">224</td>
          <td className="border border-gray-400 px-2">224 - 2</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-2">B</td>
          <td className="border border-gray-400 px-2">16,384</td>
          <td className="border border-gray-400 px-2">65,536</td>
          <td className="border border-gray-400 px-2">65,534</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-2">C</td>
          <td className="border border-gray-400 px-2">2,097,152</td>
          <td className="border border-gray-400 px-2">256</td>
          <td className="border border-gray-400 px-2">254</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-2">D</td>
          <td className="border border-gray-400 px-2">-</td>
          <td className="border border-gray-400 px-2">-</td>
          <td className="border border-gray-400 px-2">-</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-2">E</td>
          <td className="border border-gray-400 px-2">-</td>
          <td className="border border-gray-400 px-2">-</td>
          <td className="border border-gray-400 px-2">-</td>
        </tr>
      </tbody>
    </table>

    {/* ================= Example Calculations ================= */}
    <h3 className="text-2xl font-bold mt-4">Example Calculations</h3>
    <p className="leading-relaxed">
      <strong>Example 1:</strong> IP = 9.1.5.31 (Class A)<br/>
      Network ID bits = 8, Host ID bits = 24<br/>
      Network Address = 9.0.0.0, Broadcast Address = 9.255.255.255<br/>
      Number of Hosts = 2<sup>24</sup> - 2 = 16,777,214
    </p>

    <p className="leading-relaxed">
      <strong>Example 2:</strong> IP = 201.20.30.40 (Class C)<br/>
      Network ID bits = 24, Host ID bits = 8<br/>
      Network Address = 201.20.30.0, Broadcast Address = 201.20.30.255<br/>
      Number of Hosts = 2<sup>8</sup> - 2 = 254
    </p>

    {/* ================= Conclusion ================= */}
    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      Calculating the number of hosts in a subnet is essential for network planning. Subnetting optimizes IP address usage, improves performance, and enhances security. Using formulas for usable hosts and total subnets ensures accurate allocation in network design.
    </p>

  </div>
);

export default Home;
