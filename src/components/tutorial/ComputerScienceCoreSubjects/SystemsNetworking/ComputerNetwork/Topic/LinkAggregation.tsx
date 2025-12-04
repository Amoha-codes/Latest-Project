import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Link Aggregation Control Protocol ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Link Aggregation Control Protocol (LACP)
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 03 Oct, 2025</p>

    <p className="text-lg leading-relaxed">
      <strong>LACP</strong> is an IEEE standard protocol that allows multiple Ethernet interfaces 
      to operate as a single logical channel. It automatically detects and configures aggregation 
      between devices, eliminating the need for manual configuration.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Supports up to 16 Ethernet interfaces in an EtherChannel.</li>
      <li>Maximum of 8 active links in a LAG; the remaining act as standby.</li>
      <li>Provides automatic link detection, failover, and load balancing.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">LACP Modes</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Active Mode:</strong> Port actively sends LACPDU (Link Aggregation Control Protocol Data Units) to initiate aggregation.</li>
      <li><strong>Passive Mode:</strong> Port responds to LACP requests but does not initiate aggregation.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">LACP Architecture and OSI Model Layers</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Layer 1 (Physical):</strong> Aggregates physical Ethernet links into a single logical channel.</li>
      <li><strong>Layer 2 (Data Link):</strong> Bundles switch ports, managing MAC addresses and Ethernet frames.</li>
      <li><strong>Layer 3 (Network):</strong> Uses hashing algorithms (IP/MAC addresses or TCP/UDP ports) for load balancing and packet forwarding.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Features of LACP</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Port range: 1–8 active links in a LAG.</li>
      <li>LACP Multicast Address: 01:80:C2:00:00:02 for LACPDU communication.</li>
      <li>Timers: Fast mode (1 sec) & Slow mode (30 sec, default) for LACP packets.</li>
      <li>Load Balancing: Per-packet, per-flow, or per-socket methods.</li>
      <li>Failover Support: Automatic rerouting of traffic if a link fails.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">LACP Standards</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>IEEE 802.3ad (Original):</strong> Bundles multiple full-duplex Ethernet links into one logical interface (LAG).</li>
      <li><strong>IEEE 802.1AX (Enhanced):</strong> Successor to 802.3ad; provides better fault tolerance, redundancy, and higher link availability.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">LACP Configuration (Cisco Example)</h2>
    <pre className="bg-gray-400 p-4 rounded-lg text-sm overflow-x-auto">
      {`# Enable LACP on switch ports
Switch(config)# interface range fa0/0 - 3
Switch(config-if-range)# channel-group 1 mode active
Switch(config-if-range)# exit

# Verify EtherChannel
Switch# show etherchannel summary`}
    </pre>
    <p className="leading-relaxed">
      Here, ports <code>fa0/0–fa0/3</code> are aggregated into LAG 1 using LACP in active mode.
    </p>

    <h2 className="text-3xl font-bold mt-8">Benefits of LACP</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Increased Bandwidth: Multiple links act as a single high-capacity channel.</li>
      <li>Fault Tolerance: Traffic automatically redirected if a link fails.</li>
      <li>Load Balancing: Efficient distribution of traffic across aggregated links.</li>
      <li>Cost Efficiency: Cheaper than purchasing high-speed dedicated links.</li>
      <li>Simplified Management: Single logical IP for the LAG reduces complexity.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Limitations of LACP</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Requires compatible devices and proper configuration.</li>
      <li>Out-of-Order Delivery Risk if load-balanced per packet instead of per flow.</li>
      <li>VLAN Tagging must be carefully managed over LAGs.</li>
      <li>Scalability Limits: Only 16 ports per LAG; only 8 active at once.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Real-World Applications</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Enterprise LANs: Aggregating switch uplinks for higher bandwidth.</li>
      <li>Data Centers: Enhancing throughput and redundancy for servers and storage systems.</li>
      <li>Service Providers: Bundling multiple WAN links for high-speed connectivity.</li>
      <li>High-Availability Systems: Ensuring zero downtime with automatic failover.</li>
    </ul>

  </div>
);

export default Home;
