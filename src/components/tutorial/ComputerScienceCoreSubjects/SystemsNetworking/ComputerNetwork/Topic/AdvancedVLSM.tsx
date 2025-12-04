import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Title ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Virtual Length Subnet Mask (VLSM) in IP Networking
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 30 Sep, 2025</p>

    {/* ================= Introduction ================= */}
    <p className="text-lg leading-relaxed">
      <strong>VLSM (Variable Length Subnet Mask)</strong> is an IP addressing technique that allows subnetting within subnets.
      Unlike traditional subnetting, which applies a single subnet mask to all subnets, VLSM assigns different subnet masks 
      based on host requirements. This ensures efficient use of IP addresses, especially in IPv4 where address space is limited.
    </p>

    {/* ================= How VLSM Works ================= */}
    <h2 className="text-3xl font-bold mt-8">How VLSM Works</h2>
    <p className="leading-relaxed">
      <strong>Traditional Subnetting:</strong>
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>A single subnet mask is applied to all subnets.</li>
      <li>This often wastes IP addresses because all subnets must be the same size, regardless of host needs.</li>
    </ul>

    <p className="leading-relaxed">
      <strong>With VLSM:</strong>
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Subnet masks are assigned based on the actual number of hosts needed per subnet.</li>
      <li>Minimizes wastage of IP addresses.</li>
    </ul>

    {/* ================= Example ================= */}
    <h2 className="text-3xl font-bold mt-8">Example</h2>
    <p className="leading-relaxed">
      Network: <code>192.168.1.0/24</code>
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Traditional Subnetting</strong> (divide into 4 subnets): Each subnet = /26 → 62 usable IPs.  
          If one subnet needs only 10 hosts and another 50, many addresses go unused.</li>
      <li><strong>VLSM</strong>:  
        Subnet A: /28 → 14 usable IPs (for 10 hosts)  
        Subnet B: /26 → 62 usable IPs (for 50 hosts)
      </li>
    </ul>

    {/* ================= Steps to Implement VLSM ================= */}
    <h2 className="text-3xl font-bold mt-8">Steps to Implement VLSM</h2>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li><strong>Plan the Network:</strong> Decide the IP address block and list subnet requirements. Calculate host counts per subnet to choose masks accordingly.</li>
      <li><strong>Allocate the Largest Subnet First:</strong> Start with the subnet requiring the most hosts and assign a suitable mask.</li>
      <li><strong>Subnet the Remaining Block:</strong> Assign masks to remaining subnets in descending order of size.</li>
      <li><strong>Configure Routers:</strong> Update routing tables and enable routing protocols (OSPF, EIGRP) to share subnet info.</li>
      <li><strong>Test and Verify:</strong> Check connectivity, troubleshoot misconfigurations or duplicate IPs.</li>
      <li><strong>Document the Configuration:</strong> Record subnet masks, IP ranges, host counts, and update network diagrams.</li>
    </ol>

    {/* ================= Benefits ================= */}
    <h2 className="text-3xl font-bold mt-8">Benefits of VLSM</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Efficient use of IP addresses by matching subnet size to host requirements.</li>
      <li>Flexible network design with subnets of varying sizes.</li>
      <li>Reduces costs by optimizing IP address allocation.</li>
      <li>Improves network performance by reducing broadcast traffic.</li>
      <li>Supports easy scalability and future network growth.</li>
    </ul>

  </div>
);

export default Home;
