import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Introduction to Subnetting ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Subnetting
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 07 Oct, 2025</p>

    <p className="text-lg leading-relaxed">
      Subnetting is the process of dividing a large network into smaller, manageable sub-networks called <strong>subnets</strong>. Subnets improve network performance, security, and simplify management.
    </p>

    <h2 className="text-3xl font-bold mt-6">Why Subnetting is Important</h2>
    <p className="leading-relaxed">
      For example, a company with a Class C network (192.168.1.0/24) has 256 IP addresses shared among three departments. Without subnetting:
    </p>
    <ul className="list-disc ml-6 mt-2 leading-relaxed">
      <li>IP Waste: Many addresses remain unused.</li>
      <li>Performance Issues: All traffic floods a single network.</li>
      <li>Security Risks: Devices from different departments can access each other.</li>
    </ul>

    <p className="leading-relaxed mt-2">
      With subnetting, each department gets its own subnet with just enough IPs:
    </p>
    <table className="table-auto border-collapse border border-gray-400 w-full mt-4 text-left">
      <thead>
        <tr className="bg-gray-400">
          <th className="border px-4 py-2">Department</th>
          <th className="border px-4 py-2">Devices</th>
          <th className="border px-4 py-2">IPs Allocated</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border px-4 py-2">Sales</td><td className="border px-4 py-2">20</td><td className="border px-4 py-2">32 (192.168.1.0/27)</td></tr>
        <tr><td className="border px-4 py-2">HR</td><td className="border px-4 py-2">10</td><td className="border px-4 py-2">16 (192.168.1.32/28)</td></tr>
        <tr><td className="border px-4 py-2">IT</td><td className="border px-4 py-2">50</td><td className="border px-4 py-2">64 (192.168.1.48/26)</td></tr>
      </tbody>
    </table>

    <h2 className="text-3xl font-bold mt-6">Key Concepts in Subnetting</h2>

    <h3 className="text-2xl font-semibold mt-4">IP Addressing</h3>
    <p className="leading-relaxed">
      An IPv4 address has four octets (e.g., 192.168.1.1), split into:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Network Portion:</strong> Identifies the network.</li>
      <li><strong>Host Portion:</strong> Identifies the device within that network.</li>
    </ul>
    <p className="leading-relaxed mt-2">
      IPv4 addresses are divided into classes:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Class A: 8-bit network ID, 24-bit host ID</li>
      <li>Class B: 16-bit network ID, 16-bit host ID</li>
      <li>Class C: 24-bit network ID, 8-bit host ID</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Subnet Mask</h3>
    <p className="leading-relaxed">
      A <strong>subnet mask</strong> separates the network and host portions of an IP address. Example: 255.255.255.0. CIDR simplifies this using the /n notation, e.g., /24.
    </p>

    <h3 className="text-2xl font-semibold mt-4">How Subnetting Works</h3>
    <p className="leading-relaxed">
      Subnets divide a network into smaller sections. Routers manage communication between subnets. Example for a Class C network (192.168.1.0/24):
    </p>
    <ul className="list-disc ml-6 leading-relaxed mt-2">
      <li><strong>Subnet 1:</strong> 192.168.1.0 to 192.168.1.127, 126 usable hosts, mask: 255.255.255.128</li>
      <li><strong>Subnet 2:</strong> 192.168.1.128 to 192.168.1.255, 126 usable hosts, mask: 255.255.255.128</li>
    </ul>
    <p className="leading-relaxed mt-2">
      Note: Dividing a network into more subnets reduces the number of usable hosts per subnet.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Advantages of Subnetting</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Improved security: Departments are isolated.</li>
      <li>Traffic prioritization: Critical subnets can get higher priority.</li>
      <li>Easier maintenance: Smaller networks are simpler to manage.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Disadvantages of Subnetting</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Extra overhead: Each subnet loses 2 IP addresses for network and broadcast IDs.</li>
      <li>Higher cost: Requires additional devices like routers and switches.</li>
      <li>More complexity: Increases planning and management effort.</li>
    </ul>

  </div>
);

export default Home;
