import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Title ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Variable Length Subnet Mask (VLSM)
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 29 Sep, 2025</p>

    {/* ================= Introduction ================= */}
    <p className="text-lg leading-relaxed">
      <strong>Variable Length Subnet Mask (VLSM)</strong> is a technique used to create subnets with different subnet masks.
      It allows network administrators to allocate IP addresses more efficiently by using smaller masks for subnets with fewer hosts 
      and larger masks for subnets with more hosts.
    </p>

    {/* ================= VLSM vs Traditional ================= */}
    <h2 className="text-3xl font-bold mt-8">VLSM vs Traditional Subnetting</h2>
    <p className="leading-relaxed">
      In traditional subnetting (FLSM), a fixed subnet mask is applied to all subnets, which can lead to IP wastage.
      For example, a network with two subnets, one with 10 hosts and another with 50 hosts, would use <code>255.255.255.0</code> 
      for both, wasting IPs in the smaller subnet.
    </p>

    <p className="leading-relaxed">
      VLSM allows assigning masks based on host requirements:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Smaller subnet (10 hosts): <code>255.255.255.128</code> → 126 valid IPs</li>
      <li>Larger subnet (50 hosts): <code>255.255.255.192</code> → 62 valid IPs</li>
    </ul>

    <p className="leading-relaxed">
      This optimizes IP usage and reduces wastage.
    </p>

    {/* ================= Procedure ================= */}
    <h2 className="text-3xl font-bold mt-8">Procedure for Implementing VLSM</h2>
    <p className="leading-relaxed">
      VLSM allows subnetting of a subnet. Steps to allocate IPs:
    </p>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>Select a block size ≥ required hosts (include network and broadcast addresses).</li>
      <li>List subnets in descending order of host requirements.</li>
      <li>Allocate the highest available IP block to the subnet with the highest requirement.</li>
      <li>Repeat for remaining subnets.</li>
    </ol>

    {/* ================= Example ================= */}
    <h2 className="text-3xl font-bold mt-8">Example: Department-wise VLSM Allocation</h2>
    <p className="leading-relaxed">
      Given IP: <code>192.168.1.0/24</code> for four departments:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Sales & Purchase: 120 hosts → <code>192.168.1.0/25</code> → 126 IPs, mask <code>255.255.255.128</code></li>
      <li>Development: 50 hosts → <code>192.168.1.128/26</code> → 62 IPs, mask <code>255.255.255.192</code></li>
      <li>Accounts: 26 hosts → <code>192.168.1.192/27</code> → 30 IPs, mask <code>255.255.255.224</code></li>
      <li>Management: 5 hosts → <code>192.168.1.224/29</code> → 6 IPs, mask <code>255.255.255.248</code></li>
    </ul>

    <p className="leading-relaxed">
      Choosing the block size close to requirements minimizes IP wastage.
    </p>

    {/* ================= Advantages ================= */}
    <h2 className="text-3xl font-bold mt-8">Advantages of VLSM over FLSM</h2>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>Efficient IP usage: Assign smaller subnets to fewer hosts and larger subnets to more hosts.</li>
      <li>Greater flexibility: Create subnets of varying sizes based on requirements.</li>
      <li>Better scalability: Easily accommodate network growth.</li>
      <li>Improved performance: Reduce congestion by optimizing subnet size.</li>
      <li>Reduced management overhead: Easier IP allocation in large networks.</li>
    </ol>

    {/* ================= Disadvantages ================= */}
    <h2 className="text-3xl font-bold mt-8">Disadvantages of VLSM</h2>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>Complexity: Requires advanced planning and configuration.</li>
      <li>Increased management overhead: More subnets and addresses to track.</li>
      <li>Potential fragmentation: Non-contiguous IP allocation can occur.</li>
      <li>Compatibility issues: Older devices may not support VLSM.</li>
      <li>Configuration errors: Misconfiguration can cause connectivity issues.</li>
      <li>Training required: Administrators need advanced networking knowledge.</li>
      <li>Security concerns: Improper isolation can expose sensitive data.</li>
      <li>Higher cost: Advanced equipment/software may be needed.</li>
    </ol>

    {/* ================= Conclusion ================= */}
    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      VLSM optimizes IP allocation by allowing subnets of variable sizes. It reduces wastage, improves network performance, and provides flexibility for growth. 
      However, it requires careful planning, proper configuration, and advanced networking knowledge.
    </p>

  </div>
);

export default Home;
