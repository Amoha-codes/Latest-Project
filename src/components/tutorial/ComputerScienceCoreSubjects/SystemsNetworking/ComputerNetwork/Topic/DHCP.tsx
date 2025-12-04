import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= DHCP THEORY ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Dynamic Host Configuration Protocol (DHCP)
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 11 Oct, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Dynamic Host Configuration Protocol (DHCP) is a network protocol used to automate the 
      process of assigning IP addresses and other network configuration parameters to devices 
      such as computers, smartphones, and printers. Instead of manually configuring each device, 
      DHCP enables devices to join a network and automatically receive:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>IP Address</li>
      <li>Subnet Mask</li>
      <li>Default Gateway</li>
      <li>DNS Server Addresses</li>
      <li>Other TCP/IP Configuration Options</li>
    </ul>

    <p className="leading-relaxed">
      This automation simplifies network administration, reduces errors, and allows devices 
      to connect seamlessly.
    </p>

    {/* Components */}
    <h2 className="text-3xl font-bold mt-8">Components of DHCP</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>DHCP Server:</strong> Stores IP addresses and configuration details, allocates addresses dynamically.</li>
      <li><strong>DHCP Relay:</strong> Bridges communication between clients and servers across subnets.</li>
      <li><strong>DHCP Client:</strong> Any device requesting network configuration.</li>
      <li><strong>IP Address Pool:</strong> Range of IP addresses available for assignment.</li>
      <li><strong>Subnets:</strong> Logical network divisions used for IP management.</li>
      <li><strong>Lease:</strong> Time period for which an IP is assigned.</li>
      <li><strong>DNS Servers:</strong> Provided by DHCP for domain name resolution.</li>
      <li><strong>Default Gateway:</strong> Provided to allow communication outside the subnet.</li>
      <li><strong>Options:</strong> Additional configuration such as subnet mask, domain name, and time servers.</li>
    </ul>

    {/* Advanced Features */}
    <h2 className="text-3xl font-bold mt-8">DHCP Advanced Features</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Renewal:</strong> Clients can extend their lease before expiration.</li>
      <li><strong>Failover:</strong> Redundant servers prevent service disruption.</li>
      <li><strong>Dynamic Updates:</strong> DHCP can automatically update DNS records.</li>
      <li><strong>Audit Logging:</strong> Logs lease information for monitoring and troubleshooting.</li>
    </ul>

    {/* DHCP Packet Format */}
    <h2 className="text-3xl font-bold mt-8">DHCP Packet Format</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Hardware Length (8 bits):</strong> MAC address length.</li>
      <li><strong>Hop Count (8 bits):</strong> Maximum hops allowed.</li>
      <li><strong>Transaction ID (32 bits):</strong> Identifies request/response pair.</li>
      <li><strong>Number of Seconds (16 bits):</strong> Time since boot started.</li>
      <li><strong>Flags (16 bits):</strong> For broadcast/unicast response.</li>
      <li><strong>Client IP Address:</strong> Filled only if already assigned.</li>
      <li><strong>Your IP Address:</strong> IP assigned by server.</li>
      <li><strong>Server IP Address:</strong> DHCP server address.</li>
      <li><strong>Gateway IP Address:</strong> Router IP.</li>
      <li><strong>Client Hardware Address:</strong> MAC address.</li>
      <li><strong>Server Name:</strong> Optional hostname.</li>
      <li><strong>Boot Filename:</strong> For diskless boot clients.</li>
      <li><strong>Options:</strong> Additional configuration parameters.</li>
    </ul>

    <p className="leading-relaxed">
      Each field plays an important role in identifying, addressing, and enabling smooth network communication.
    </p>

    {/* Working of DHCP */}
    <h2 className="text-3xl font-bold mt-8">Working of DHCP</h2>
    <p className="leading-relaxed">
      DHCP works using UDP ports 67 (server) and 68 (client). It follows a client-server model 
      and primarily exchanges four key messages — a process known as <strong>DORA</strong> 
      (Discover, Offer, Request, Acknowledge).
    </p>

    <h3 className="text-2xl font-semibold mt-6">1. DHCP Discover</h3>
    <p className="leading-relaxed">
      The client broadcasts a Discover message to locate available DHCP servers. The message uses:
      <br />• Source IP: 0.0.0.0 (client has no IP)  
      <br />• Destination IP: 255.255.255.255 (broadcast)
    </p>

    <h3 className="text-2xl font-semibold mt-6">2. DHCP Offer</h3>
    <p className="leading-relaxed">
      One or more DHCP servers respond with an Offer message containing an unleased IP address 
      and configuration details. The client accepts the first Offer it receives.
    </p>

    <h3 className="text-2xl font-semibold mt-6">3. DHCP Request</h3>
    <p className="leading-relaxed">
      The client broadcasts a Request message indicating acceptance of the offered IP. It also 
      sends a gratuitous ARP to ensure no other device is using the same IP.
    </p>

    <h3 className="text-2xl font-semibold mt-6">4. DHCP Acknowledgment</h3>
    <p className="leading-relaxed">
      The server sends an Acknowledgment message confirming the lease and binding the IP address 
      to the client's MAC address.
    </p>

    {/* Other DHCP Messages */}
    <h2 className="text-3xl font-bold mt-8">Other DHCP Messages</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>DHCP NACK:</strong> Server refuses the request (invalid IP or pool empty).</li>
      <li><strong>DHCP Decline:</strong> Client reports that the offered IP is already in use.</li>
      <li><strong>DHCP Release:</strong> Client releases the IP before lease expiration.</li>
      <li><strong>DHCP Inform:</strong> Client requests extra configuration without needing a new IP.</li>
    </ul>

    {/* Security Concerns */}
    <h2 className="text-3xl font-bold mt-8">Security Concerns with DHCP</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>IP exhaustion via DHCP starvation attacks</li>
      <li>Fake (rogue) DHCP servers assigning malicious settings</li>
      <li>Man-in-the-middle attacks</li>
      <li>DNS spoofing through malicious DHCP replies</li>
    </ul>

    {/* Protection */}
    <h2 className="text-3xl font-bold mt-8">Protection Against DHCP Starvation Attacks</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Enable DHCP snooping on switches</li>
      <li>Use port security</li>
      <li>Apply IP address filtering and monitoring</li>
    </ul>

    <p className="leading-relaxed">
      DHCP automates and simplifies IP address assignment, making it essential in modern networks.
    </p>

  </div>
);

export default Home;
