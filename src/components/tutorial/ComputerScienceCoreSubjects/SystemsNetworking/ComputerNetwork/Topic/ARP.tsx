import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= ARP THEORY ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Address Resolution Protocol (ARP)
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 10 Oct, 2025</p>

    <p className="text-lg leading-relaxed">
      ARP (Address Resolution Protocol) is a network protocol used to determine the{" "}
      <strong>MAC address</strong> of a device given its <strong>IP address</strong>.
      Whenever a device in a LAN wants to communicate with another device, it must know
      the destination’s MAC address. Since applications work with IP addresses, ARP acts
      as the translator between IP and MAC addresses.
    </p>

    <p className="leading-relaxed">
      <strong>Note:</strong> ARP operates at the Network Layer (Layer 3) but interacts
      closely with the Data Link Layer (Layer 2). Defined in RFC 826 (1982), it is still
      widely used in IPv4, Ethernet, ATM, and Frame Relay networks.
    </p>

    {/* Important ARP Terms */}
    <h2 className="text-3xl font-bold mt-8">Important ARP Terms</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>ARP Cache:</strong> Temporary table storing previously resolved MAC
        addresses.
      </li>
      <li>
        <strong>ARP Cache Timeout:</strong> Duration for which ARP entries remain valid.
      </li>
      <li>
        <strong>ARP Request:</strong> Broadcast asking, “Who has this IP?”
      </li>
      <li>
        <strong>ARP Reply:</strong> Unicast message containing the MAC address of the
        device with the requested IP.
      </li>
    </ul>

    {/* Types of ARP */}
    <h2 className="text-3xl font-bold mt-8">Types of ARP</h2>

    <h3 className="text-xl font-semibold mt-4">1. Proxy ARP</h3>
    <p className="leading-relaxed">
      A router responds to ARP requests on behalf of another device. Useful for connecting
      devices in different networks without requiring reconfiguration.
    </p>

    <h3 className="text-xl font-semibold mt-4">2. Gratuitous ARP</h3>
    <p className="leading-relaxed">
      A device broadcasts an ARP request for its own IP address. Used to detect duplicate
      IPs and to update ARP tables of other devices.
    </p>

    <h3 className="text-xl font-semibold mt-4">3. Reverse ARP (RARP)</h3>
    <p className="leading-relaxed">
      Used by devices (like diskless computers) to discover their IP address when they
      only know their MAC address.
    </p>

    <h3 className="text-xl font-semibold mt-4">4. Inverse ARP (InARP)</h3>
    <p className="leading-relaxed">
      Opposite of ARP — used to find the IP address of a device when only the MAC address
      is known. Common in Frame Relay and ATM networks.
    </p>

    {/* How ARP Works */}
    <h2 className="text-3xl font-bold mt-8">How ARP Works</h2>

    <ol className="list-decimal ml-6 leading-relaxed space-y-2">
      <li>The sender checks its ARP cache for the destination MAC address.</li>
      <li>
        If not found, it broadcasts an <strong>ARP Request</strong> across the LAN.
      </li>
      <li>Every device receives the request and checks whether the IP matches theirs.</li>
      <li>
        The device with the matching IP sends back an <strong>ARP Reply</strong> (unicast).
      </li>
      <li>The sender updates its ARP cache and begins communication.</li>
    </ol>

    {/* ARP Message Format */}
    <h2 className="text-3xl font-bold mt-8">ARP Message Format</h2>

    <p className="leading-relaxed">
      An ARP packet contains multiple fields that define how address resolution works:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Hardware Type (2 bytes):</strong> Specifies the network type (Ethernet = 1)
      </li>
      <li>
        <strong>Protocol Type (2 bytes):</strong> Specifies protocol (IPv4 = 0x0800)
      </li>
      <li>
        <strong>Hardware Address Length (1 byte):</strong> Length of MAC (6 bytes)
      </li>
      <li>
        <strong>Protocol Address Length (1 byte):</strong> Length of IPv4 address (4 bytes)
      </li>
      <li>
        <strong>Operation Code (2 bytes):</strong> 1 = ARP Request, 2 = ARP Reply
      </li>
      <li>
        <strong>Sender Hardware Address:</strong> MAC address of sender
      </li>
      <li>
        <strong>Sender Protocol Address:</strong> IP address of sender
      </li>
      <li>
        <strong>Target Hardware Address:</strong> Empty in request, filled in reply
      </li>
      <li>
        <strong>Target Protocol Address:</strong> IP address being queried
      </li>
    </ul>

    {/* Advantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages of ARP Protocol</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Automatic mapping of IP addresses to MAC addresses</li>
      <li>Improves communication efficiency within LANs</li>
      <li>Works transparently without user intervention</li>
      <li>Supports Proxy ARP, Gratuitous ARP, RARP, and InARP for flexible networking</li>
    </ul>

  </div>
);

export default Home;
