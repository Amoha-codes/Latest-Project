import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Virtual LAN (VLAN) ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Virtual LAN (VLAN)
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 03 Oct, 2025</p>

    <p className="text-lg leading-relaxed">
      A <strong>Virtual Local Area Network (VLAN)</strong> is a logical segmentation of a 
      Layer 2 (Data Link Layer) network that allows devices to be grouped together regardless 
      of their physical location. VLANs are implemented in switches using <strong>IEEE 802.1Q VLAN tagging</strong>.
    </p>

    <p className="leading-relaxed">
      VLANs partition a single physical network into multiple broadcast domains, improving 
      security, performance, flexibility, and manageability. Unlike traditional LANs, VLANs 
      allow switches to perform segmentation at Layer 2 instead of relying on routers (Layer 3).
    </p>

    <h2 className="text-3xl font-bold mt-8">Communication Rules</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Same VLAN:</strong> Devices can communicate directly.</li>
      <li><strong>Different VLANs:</strong> Communication requires Inter-VLAN Routing using a router or Layer 3 switch.</li>
      <li>In a normal LAN, all devices on the same switch share one broadcast domain, which can cause unnecessary traffic and security risks.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">VLAN Ranges (Cisco Standard)</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>VLAN 0 & 4095: Reserved, not usable.</li>
      <li>VLAN 1: Default VLAN; all switch ports initially belong here. Cannot be deleted.</li>
      <li>VLAN 2–1001: Normal VLAN range (configurable, editable, deletable).</li>
      <li>VLAN 1002–1005: Reserved for legacy Token Ring and FDDI.</li>
      <li>VLAN 1006–4094: Extended VLAN range.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">VLAN Configuration Example</h2>
    <p className="leading-relaxed">
      Example of creating VLANs and assigning ports in a Cisco switch:
    </p>

    <pre className="bg-gray-400 p-4 rounded-lg text-sm overflow-x-auto">
      {`# Create VLANs
Switch(config)# vlan 2
Switch(config-vlan)# name Accounts

Switch(config)# vlan 3
Switch(config-vlan)# name HR

# Assign switch ports to VLANs
Switch(config)# interface fa0/0
Switch(config-if)# switchport mode access
Switch(config-if)# switchport access vlan 2

Switch(config)# interface fa0/1
Switch(config-if)# switchport mode access
Switch(config-if)# switchport access vlan 3`}
    </pre>

    <p className="leading-relaxed">
      Here, port <code>fa0/0</code> belongs to VLAN 2 and port <code>fa0/1</code> belongs to VLAN 3. Devices in different VLANs require Inter-VLAN Routing to communicate.
    </p>

    <h2 className="text-3xl font-bold mt-8">Types of VLAN Links</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Access Link:</strong> Connects VLAN-unaware device to a VLAN-aware switch (frames untagged).</li>
      <li><strong>Trunk Link:</strong> Connects VLAN-aware devices (switch-to-switch, switch-to-router) carrying multiple VLANs using 802.1Q tagging.</li>
      <li><strong>Hybrid Link:</strong> Supports both tagged and untagged traffic.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">VLAN Features</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>VLAN Tagging (802.1Q):</strong> Inserts a 4-byte VLAN tag into Ethernet frames.</li>
      <li><strong>VLAN Membership:</strong> Devices grouped by port, MAC address, or protocol.</li>
      <li><strong>VLAN Trunking:</strong> Enables multiple VLANs over one physical link.</li>
      <li><strong>Dynamic VLANs:</strong> Membership assigned automatically based on policies.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Real-Time Applications of VLANs</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>VoIP (Voice over IP): Dedicated VLAN ensures QoS for voice traffic.</li>
      <li>Video Conferencing: Prioritized VLAN reduces latency and jitter.</li>
      <li>Cloud & Data Centers: Isolate tenant workloads.</li>
      <li>IoT Networks: Segment devices for security.</li>
      <li>Gaming Networks: VLANs prioritize gaming traffic.</li>
      <li>Remote Access: Secure VLANs for VPN and external users.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Pros of VLANs</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Improved Security: Sensitive traffic isolated within VLANs.</li>
      <li>Enhanced Performance: Reduces broadcast and multicast overhead.</li>
      <li>Simplified Management: Logical grouping of departments (e.g., HR, Finance).</li>
      <li>Flexibility: Devices can be reallocated without physical rewiring.</li>
      <li>Cost Savings: Eliminates need for excessive routers.</li>
      <li>Scalability: Networks segmented into manageable subnets.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Cons of VLANs</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Increased configuration complexity.</li>
      <li>Scalability limitations due to VLAN ID restrictions.</li>
      <li>Security risks if VLAN hopping attacks are exploited.</li>
      <li>Interoperability issues with non-standard devices.</li>
      <li>Troubleshooting challenges due to isolated traffic flows.</li>
    </ul>

  </div>
);

export default Home;
