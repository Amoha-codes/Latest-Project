import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Public and Private IP Addresses ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Public and Private IP Addresses
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 07 Oct, 2025</p>

    <p className="text-lg leading-relaxed">
      IP addresses uniquely identify devices on a network, enabling communication and traffic management. Based on their accessibility, they are classified into two types:
    </p>

    {/* ================= Private IP ================= */}
    <h2 className="text-3xl font-bold mt-8">1. Private IP Address</h2>
    <p className="leading-relaxed">
      Private IP addresses are used for communication within a local network (LAN). These addresses are typically assigned by routers and are not visible on the internet, enhancing security.
    </p>
    <ul className="list-disc ml-6 leading-relaxed mt-2">
      <li>Scope: Local network only.</li>
      <li>Not visible externally, used internally within the LAN.</li>
      <li>Assigned by routers to ensure uniqueness in the local network.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Advantages</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Security: Not accessible from the internet, reducing attack risk.</li>
      <li>Scalability: Supports large internal networks.</li>
      <li>Cost-effective: No need to purchase public IPs.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Disadvantages</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Limited accessibility: Cannot communicate directly with the internet.</li>
      <li>Interoperability issues: May face challenges with external services.</li>
      <li>NAT overhead: Network Address Translation adds processing and latency.</li>
    </ul>

    {/* ================= Public IP ================= */}
    <h2 className="text-3xl font-bold mt-8">2. Public IP Address</h2>
    <p className="leading-relaxed">
      Public IP addresses are used for communication outside the local network. They are assigned by Internet Service Providers (ISP) and are globally unique.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Types</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Dynamic:</strong> Changes periodically, assigned by the ISP.</li>
      <li><strong>Static:</strong> Permanent, often used by servers for hosting.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Advantages</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Direct access: Devices can be reached directly from the internet.</li>
      <li>Hosting: Ideal for websites, servers, or online services.</li>
      <li>Direct communication: Facilitates peer-to-peer connections globally.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Disadvantages</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Higher cost: Public IPs may incur extra fees from ISPs.</li>
      <li>Limited availability: IPv4 addresses are becoming scarce.</li>
      <li>Privacy concerns: Easier to trace, reducing user privacy.</li>
    </ul>

    {/* ================= Comparison Table ================= */}
    <h2 className="text-3xl font-bold mt-8">Difference Between Private and Public IP</h2>
    <div className="overflow-x-auto mt-4">
      <table className="table-auto border-collapse border border-gray-400 w-full text-left">
        <thead>
          <tr className="bg-gray-400">
            <th className="border border-gray-400 px-4 py-2">Feature</th>
            <th className="border border-gray-400 px-4 py-2">Private IP</th>
            <th className="border border-gray-400 px-4 py-2">Public IP</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border px-4 py-2">Scope</td><td className="border px-4 py-2">Local network</td><td className="border px-4 py-2">Global / Internet</td></tr>
          <tr><td className="border px-4 py-2">Communication</td><td className="border px-4 py-2">Within LAN</td><td className="border px-4 py-2">Outside LAN / Internet</td></tr>
          <tr><td className="border px-4 py-2">Assignment</td><td className="border px-4 py-2">Router / Admin</td><td className="border px-4 py-2">ISP</td></tr>
          <tr><td className="border px-4 py-2">Cost</td><td className="border px-4 py-2">Free</td><td className="border px-4 py-2">Paid / ISP-dependent</td></tr>
          <tr><td className="border px-4 py-2">Visibility</td><td className="border px-4 py-2">Visible only within local network</td><td className="border px-4 py-2">Visible on the Internet</td></tr>
          <tr><td className="border px-4 py-2">Security</td><td className="border px-4 py-2">Secure by default</td><td className="border px-4 py-2">Vulnerable to attacks</td></tr>
          <tr><td className="border px-4 py-2">NAT Requirement</td><td className="border px-4 py-2">Required for internet access</td><td className="border px-4 py-2">Not required</td></tr>
          <tr><td className="border px-4 py-2">Example Range</td><td className="border px-4 py-2">10.0.0.0–10.255.255.255, 172.16.0.0–172.31.255.255, 192.168.0.0–192.168.255.255</td><td className="border px-4 py-2">All addresses outside private ranges (e.g., 17.5.7.8)</td></tr>
        </tbody>
      </table>
    </div>

  </div>
);

export default Home;
