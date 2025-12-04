import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Title ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Generic Routing Encapsulation (GRE) Tunnel
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 10 Oct, 2025</p>

    {/* ================= Intro ================= */}
    <p className="text-lg leading-relaxed">
      <strong>Generic Routing Encapsulation (GRE)</strong> is a tunneling protocol developed by Cisco 
      that encapsulates one network protocol inside another. GRE is primarily used to transport packets 
      from one network to another efficiently, creating a virtual point-to-point connection between routers.
    </p>
    <p className="text-lg leading-relaxed">
      GRE allows different network segments or protocols to communicate as if they were directly connected.
    </p>

    {/* ================= GRE Encapsulation Process ================= */}
    <h2 className="text-3xl font-bold mt-8">GRE Encapsulation Process</h2>
    <p className="leading-relaxed">
      When GRE is configured between routers, the original IP packet is encapsulated with two additional headers:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>GRE Header:</strong> Provides information for the tunnel, acting as a new IP header.</li>
      <li><strong>Delivery Header:</strong> Contains the new source and destination IP addresses of the tunnel endpoints.</li>
    </ul>
    <p className="leading-relaxed">
      <strong>Note:</strong> GRE hides the original IP packet during transit. Only routers configured with GRE can encapsulate, 
      decapsulate, and interpret these headers.
    </p>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>The original packet enters the GRE-enabled router.</li>
      <li>A GRE header is added, followed by a delivery header with tunnel interface IPs.</li>
      <li>The packet traverses the network in encapsulated form.</li>
      <li>At the destination router, the GRE and delivery headers are removed and the original IP packet is forwarded.</li>
    </ol>
    <p className="leading-relaxed"><strong>Note:</strong> This mechanism simulates a tunnel between routers, hence the term GRE tunneling.</p>

    {/* ================= Routing Over GRE Tunnel ================= */}
    <h2 className="text-3xl font-bold mt-8">Routing Over GRE Tunnel</h2>
    <p className="leading-relaxed">
      Normally, routers forward traffic based on physical interfaces and IP routing. With GRE:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Routers use virtual tunnel interfaces instead of standard physical interfaces.</li>
      <li>Tunnel interfaces are assigned IPs from the organization’s IP pool, separate from physical interfaces.</li>
      <li>GRE-enabled routers forward packets through these tunnels, encapsulating them with delivery and GRE headers.</li>
    </ul>

    {/* ================= Example Scenario ================= */}
    <h2 className="text-3xl font-bold mt-8">Example Scenario</h2>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>PC1 sends data to a server in subnet 10.20.2.0/24.</li>
      <li>Router R1 receives the packet and encapsulates it with GRE Header & Delivery Header (Source = 10.40.20.1, Destination = 10.40.20.2).</li>
      <li>The encapsulated GRE packet traverses the intermediate network based on routing protocols.</li>
      <li>Router R2 receives the GRE packet, removes both headers, and forwards the original packet to the server.</li>
    </ol>
    <p className="leading-relaxed"><strong>Note:</strong> GRE creates a transparent tunnel between R1 and R2, ensuring end-to-end connectivity across separated networks.</p>

    {/* ================= GRE Tunnel Benefits ================= */}
    <h2 className="text-3xl font-bold mt-8">GRE Tunnel Benefits</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Supports multiprotocol traffic (IPv4, IPv6, multicast, etc.).</li>
      <li>Transparent communication across different networks.</li>
      <li>Simplifies routing by creating logical point-to-point links.</li>
      <li>Works with other routing protocols like EIGRP, OSPF, BGP.</li>
    </ul>

    {/* ================= Limitations of GRE ================= */}
    <h2 className="text-3xl font-bold mt-8">Limitations of GRE</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>No encryption:</strong> GRE provides encapsulation but not security; often paired with IPsec for secure tunneling.</li>
      <li><strong>Overhead:</strong> Additional headers increase packet size, potentially impacting performance.</li>
      <li><strong>Scalability:</strong> Managing multiple tunnels in large networks can be complex.</li>
    </ul>

  </div>
);

export default Home;
