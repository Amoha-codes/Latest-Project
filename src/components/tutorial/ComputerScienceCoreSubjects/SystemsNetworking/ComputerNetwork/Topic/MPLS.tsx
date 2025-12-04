import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Title ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Multi Protocol Label Switching (MPLS)
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 10 Oct, 2025</p>

    {/* ================= Intro Section ================= */}
    <p className="text-lg leading-relaxed">
      <strong>MPLS (Multi Protocol Label Switching)</strong> is an advanced packet-forwarding 
      technique used in modern networks. Instead of making routers look into complex Layer 3 routing 
      tables for every IP packet, MPLS uses <strong>labels</strong> for forwarding decisions. 
      These labels create pre-defined, efficient paths across the network, enhancing speed, 
      scalability, and traffic management.
    </p>

    <p className="text-lg leading-relaxed">
      <strong>Note:</strong> MPLS lies between Layer 2 (Data Link) and Layer 3 (Network Layer), 
      often referred to as a Layer 2.5 protocol.
    </p>

    {/* ================= Why MPLS ================= */}
    <h2 className="text-3xl font-bold mt-8">Why MPLS</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Traditional IP routing requires long routing table lookups.</li>
      <li>MPLS simplifies forwarding by assigning a short fixed-length label to each packet.</li>
      <li>Benefits: Faster delivery, better QoS support, easier traffic engineering and VPNs.</li>
    </ul>

    {/* ================= MPLS Header ================= */}
    <h2 className="text-3xl font-bold mt-8">MPLS Header</h2>
    <p className="leading-relaxed">
      MPLS header is 32 bits long and is inserted between Layer 2 and Layer 3 headers.
    </p>

    <div className="overflow-x-auto">
      <table border={1} className="w-full border-collapse text-left text-sm">
        <thead className="bg-gray-400">
          <tr>
            <th className="p-2">Field</th>
            <th className="p-2">Size</th>
            <th className="p-2">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2">Label</td>
            <td className="p-2">20 bits</td>
            <td className="p-2">Identifier for forwarding decisions (0 to 2²⁰–1)</td>
          </tr>
          <tr>
            <td className="p-2">Experimental (Exp)</td>
            <td className="p-2">3 bits</td>
            <td className="p-2">Used for QoS and traffic prioritization</td>
          </tr>
          <tr>
            <td className="p-2">Bottom of Stack (S)</td>
            <td className="p-2">1 bit</td>
            <td className="p-2">Indicates last label in stack (1 = last)</td>
          </tr>
          <tr>
            <td className="p-2">TTL</td>
            <td className="p-2">8 bits</td>
            <td className="p-2">Prevents loops; decremented at every hop</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p className="leading-relaxed">
      <strong>Note:</strong> Multiple labels can be stacked to form a label stack for hierarchical routing.
    </p>

    {/* ================= Key Terminologies ================= */}
    <h2 className="text-3xl font-bold mt-8">Key Terminologies in MPLS</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Provider Edge (PE) Router:</strong> Router at the edge of provider network; adds/removes labels.</li>
      <li><strong>Customer Edge (CE) Router:</strong> Router at customer network edge communicating with PE.</li>
      <li><strong>Label Switch Router (LSR):</strong> Router inside MPLS core that processes labels.</li>
      <li><strong>Ingress LSR:</strong> First router that pushes the MPLS header onto packets.</li>
      <li><strong>Intermediate LSR:</strong> Swaps labels as packets move across the path.</li>
      <li><strong>Egress LSR:</strong> Last router that pops the MPLS header before forwarding.</li>
      <li><strong>Push, Pop, Swap:</strong> Push = add label, Pop = remove label, Swap = replace label.</li>
    </ul>

    {/* ================= Working of MPLS ================= */}
    <h2 className="text-3xl font-bold mt-8">Working of MPLS (Forwarding Process)</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Ingress Stage (Push):</strong> CE sends IP packet to PE (Ingress LSR); PE adds label based on destination.</li>
      <li><strong>Core Stage (Swap):</strong> Intermediate LSRs forward based on labels, swapping as defined in LFIB.</li>
      <li><strong>Egress Stage (Pop):</strong> Egress PE removes label and forwards original IP packet to CE.</li>
      <li><strong>Note:</strong> Labels are distributed using the Label Distribution Protocol (LDP).</li>
    </ul>

    {/* ================= MPLS and VPN ================= */}
    <h2 className="text-3xl font-bold mt-8">MPLS and VPN</h2>
    <p className="leading-relaxed">
      MPLS can separate traffic for different customers similar to VPNs. Unlike traditional VPNs, MPLS 
      does not encrypt data; it ensures isolation within the label-switched path (LSP).
    </p>

    {/* ================= Advantages and Disadvantages ================= */}
    <h2 className="text-3xl font-bold mt-8">Advantages of MPLS</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Faster packet forwarding (label-based).</li>
      <li>Supports multiple protocols.</li>
      <li>Enables traffic engineering.</li>
      <li>Facilitates QoS.</li>
      <li>Scalable support for Layer 3 VPNs.</li>
      <li>Reliable with loop prevention via TTL.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Disadvantages of MPLS</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Expensive to implement.</li>
      <li>Complex configuration and management.</li>
      <li>Security is weaker than encrypted VPNs.</li>
      <li>Less suitable for small-scale networks.</li>
    </ul>

  </div>
);

export default Home;
