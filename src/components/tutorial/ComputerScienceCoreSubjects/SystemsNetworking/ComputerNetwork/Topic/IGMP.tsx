import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= IGMP THEORY ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Internet Group Management Protocol (IGMP)
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 11 Oct, 2025</p>

    {/* Intro */}
    <p className="text-lg leading-relaxed">
      Internet Group Management Protocol (IGMP) is a network layer communication protocol
      used by hosts and adjacent routers to manage multicast group memberships in IPv4 networks.
      It helps identify multicast group members within a LAN and enables efficient one-to-many
      communication.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Unicast: One sender → One receiver</li>
      <li>Multicast: One sender → Multiple specific receivers</li>
      <li>Anycast: One sender → Nearest receiver from a group</li>
    </ul>

    <p className="font-semibold">
      Note: In IPv6, IGMP is replaced by Multicast Listener Discovery (MLD).
    </p>

    {/* Applications */}
    <h2 className="text-3xl font-bold mt-8">Applications of IGMP</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Streaming Media (IPTV, video/audio broadcasting)</li>
      <li>Online Gaming (real-time state exchange between players)</li>
      <li>Web Conferencing and collaboration tools</li>
    </ul>

    {/* Types of Messages */}
    <h2 className="text-3xl font-bold mt-8">Types of IGMP Messages</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Membership Query:</strong> Sent by routers to find active multicast members</li>
      <li><strong>Membership Report:</strong> Sent by hosts to join a multicast group</li>
      <li><strong>Leave Group:</strong> Sent by hosts leaving a multicast group</li>
      <li><strong>IGMPv3 Membership Report:</strong> Allows source-specific multicast (SSM)</li>
    </ul>

    {/* Working */}
    <h2 className="text-3xl font-bold mt-8">Working of IGMP</h2>
    <p className="leading-relaxed">
      IGMP manages group membership through communication between hosts and routers.
      Routers build and maintain multicast group tables to forward multicast traffic efficiently.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Uses Class D IP addresses (224.0.0.0 to 239.255.255.255)</li>
      <li>Switches use IGMP Snooping to forward multicast only where needed</li>
      <li>Routers use Protocol Independent Multicast (PIM) for forwarding across networks</li>
    </ul>

    {/* IGMP Snooping */}
    <h2 className="text-3xl font-bold mt-8">IGMP Snooping</h2>
    <p className="leading-relaxed">
      IGMP Snooping allows network switches to listen to IGMP messages between hosts and routers.
      It helps reduce unnecessary multicast flooding.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Prevents broadcast of multicast traffic to all ports</li>
      <li>Forwards multicast only to interested hosts</li>
      <li>Improves bandwidth usage and efficiency</li>
    </ul>

    {/* Versions */}
    <h2 className="text-3xl font-bold mt-8">IGMP Versions and Packet Formats</h2>

    {/* IGMPv1 */}
    <h3 className="text-2xl font-semibold mt-4">1. IGMPv1</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Hosts join groups using membership requests</li>
      <li>No leave message (host waits for timeout)</li>
      <li>Fields: Version, Type, Unused, Checksum, Group Address</li>
    </ul>

    {/* IGMPv2 */}
    <h3 className="text-2xl font-semibold mt-4">2. IGMPv2</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Introduces Leave Group message</li>
      <li>Supports general, group-specific, and source-specific queries</li>
      <li>Fields: Type, Max Response Time, Checksum, Group Address</li>
    </ul>

    <p className="font-medium leading-relaxed">Important Type Codes:</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>0x11 – Membership Query</li>
      <li>0x12 – IGMPv1 Membership Report</li>
      <li>0x16 – IGMPv2 Membership Report</li>
      <li>0x17 – Leave Group</li>
      <li>0x22 – IGMPv3 Membership Report</li>
    </ul>

    {/* IGMPv3 */}
    <h3 className="text-2xl font-semibold mt-4">3. IGMPv3</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Supports Source-Specific Multicast (SSM)</li>
      <li>Hosts can include or exclude specific multicast sources</li>
      <li>Fields: Max Response Time, Checksum, Group Address, Flags (S, QRV), QQIC, Source List</li>
    </ul>

    {/* Multicasting */}
    <h2 className="text-3xl font-bold mt-8">Multicasting</h2>
    <p className="leading-relaxed">
      Multicasting sends a packet once and the network delivers it to all interested receivers.
      This is more efficient than sending multiple unicast streams.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Used in IPTV</li>
      <li>Financial trading real-time updates</li>
      <li>Live broadcasting applications</li>
    </ul>

    {/* Layer Confirmation */}
    <h2 className="text-3xl font-bold mt-8">Is IGMP a Layer 3 Protocol?</h2>
    <p className="leading-relaxed">
      Yes. IGMP works at the Network Layer (Layer 3) of the OSI model. It manages multicast
      membership and ensures efficient distribution of multicast data across network segments.
    </p>

    {/* History */}
    <h2 className="text-3xl font-bold mt-8">History of IGMP Versions</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>IGMPv1 (1989):</strong> Basic group join, no leave option</li>
      <li><strong>IGMPv2 (1997):</strong> Introduced Leave Group message</li>
      <li><strong>IGMPv3 (2002):</strong> Added Source-Specific Multicast (SSM)</li>
    </ul>

  </div>
);

export default Home;
