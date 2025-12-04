import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Role of Subnet Mask ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Role of Subnet Mask
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 15 Oct, 2025</p>

    <p className="text-lg leading-relaxed">
      A <strong>subnet mask</strong> is a 32-bit number that separates an IP address into <strong>network ID</strong> and <strong>host ID</strong>. In binary:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>1s represent the <strong>network portion</strong></li>
      <li>0s represent the <strong>host portion</strong></li>
    </ul>
    <p className="leading-relaxed mt-2">
      Subnet masks help determine whether two devices are on the same local network and enable dividing large networks into smaller subnets for better efficiency, security, and management.
    </p>

    <h2 className="text-3xl font-bold mt-6">Functions of a Subnet Mask</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Separates <strong>network ID</strong> and <strong>host ID</strong></li>
      <li>Organizes large networks into smaller subnets</li>
      <li>Improves network efficiency and security</li>
      <li>Guides routers on where to forward packets</li>
    </ul>

    <h2 className="text-3xl font-bold mt-6">Why Use a Subnet Mask?</h2>
    <p className="leading-relaxed">
      For example, a Class A network can have over 16 million hosts. Managing such a network without subnetting is challenging due to maintenance and security issues. Subnetting divides the network into smaller subnets, giving each department or group its own subnet.
    </p>

    <h2 className="text-3xl font-bold mt-6">Addressing With vs Without Subnetting</h2>
    <p className="leading-relaxed">
      <strong>Without subnetting:</strong> Reaching a device involves:
    </p>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>Identify the network</li>
      <li>Identify the host</li>
      <li>Identify the process</li>
    </ol>
    <p className="leading-relaxed mt-2">
      <strong>With subnetting:</strong> Reaching a device involves:
    </p>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>Identify the network</li>
      <li>Identify the subnet</li>
      <li>Identify the host</li>
      <li>Identify the process</li>
    </ol>

    <h2 className="text-3xl font-bold mt-6">Subnet Mask Example</h2>
    <p className="leading-relaxed">
      For a Class C network 200.1.2.0/24 divided into 4 subnets:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Borrow 2 bits from the host portion → new subnet mask: <strong>255.255.255.192</strong></li>
      <li>Binary: <code>11111111.11111111.11111111.11000000</code></li>
    </ul>
    <p className="leading-relaxed mt-2">
      Example of subnet matching (Bitwise AND):
    </p>
    <pre className="bg-gray-400 p-4 rounded-md text-sm">
IP Address:    200.1.2.20 → 11001000.00000001.00000010.00010100  
Subnet Mask:   255.255.255.192 → 11111111.11111111.11111111.11000000  
Result:        200.1.2.0 → 11001000.00000001.00000010.00000000  
    </pre>
    <p className="leading-relaxed mt-2">
      Therefore, IP 200.1.2.20 belongs to subnet <strong>200.1.2.0/26</strong>.
    </p>

    <h2 className="text-3xl font-bold mt-6">Routing Table and Subnet Matching</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>If a network ID doesn’t match any subnet, the packet is sent to the default route (0.0.0.0)</li>
      <li>If multiple matches occur, the route with the longest subnet mask (most 1s) is chosen</li>
    </ul>

    <h2 className="text-3xl font-bold mt-6">Network Classes</h2>
    <p className="leading-relaxed">
      IP addresses are divided into five classes (A–E) for easier management:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Class A, B, C: Commonly used by end users</li>
      <li>Class D: Reserved for multicast</li>
      <li>Class E: Reserved for experimental purposes</li>
    </ul>
    <p className="leading-relaxed mt-2">
      Each class has a default subnet mask determined by the first octet.
    </p>

    <h2 className="text-3xl font-bold mt-6">Advantages of Subnetting</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Reduces congestion and broadcast traffic</li>
      <li>Efficient IP allocation, preventing wastage</li>
      <li>Improved security by isolating subnets</li>
      <li>Supports departmental segmentation and priority handling</li>
      <li>Scalability: Easier network expansion while staying organized</li>
    </ul>

    <h2 className="text-3xl font-bold mt-6">Disadvantages of Subnetting</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Reduced usable IP address space (network ID & broadcast reserved)</li>
      <li>Requires additional hardware like routers, increasing cost</li>
      <li>More complex configuration and planning needed</li>
      <li>Potential compatibility issues with older or legacy devices</li>
    </ul>

  </div>
);

export default Home;
