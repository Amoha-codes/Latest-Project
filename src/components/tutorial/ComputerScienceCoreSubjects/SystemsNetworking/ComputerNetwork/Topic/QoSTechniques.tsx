import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Congestion Control Techniques ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Congestion Control Techniques in Computer Networks
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 04 Oct, 2025</p>

    {/* Introduction */}
    <p className="text-lg leading-relaxed">
      <strong>Congestion</strong> occurs when the demand for network resources exceeds the available capacity, 
      leading to delays and packet loss. <strong>Congestion control</strong> refers to techniques used to 
      control or prevent congestion and is broadly classified into two categories:
    </p>

    {/* Open Loop Congestion Control */}
    <h2 className="text-3xl font-bold mt-8">Open Loop Congestion Control</h2>
    <p className="leading-relaxed">
      Open loop congestion control policies are applied to <strong>prevent congestion before it happens</strong>. 
      The congestion control is handled by the source or destination.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Retransmission Policy:</strong> Retransmitting lost packets can worsen congestion. Retransmission 
        timers must be optimized to prevent excessive retransmissions.
      </li>

      <li>
        <strong>Window Policy:</strong> The sliding window mechanism impacts congestion.  
        <br />
        <u>Go-Back-N ARQ</u> retransmits multiple packets even if only one is lost → increases congestion.  
        <br />
        <u>Selective Repeat ARQ</u> retransmits only lost packets → preferred for reducing congestion.
      </li>

      <li>
        <strong>Discarding Policy:</strong> Routers can discard less important packets during congestion.  
        Multimedia applications (audio/video streaming) tolerate some packet loss without major quality impact.
      </li>

      <li>
        <strong>Acknowledgment Policy:</strong> Acknowledgments add load to the network. Load can be reduced by:
        <ul className="list-disc ml-6">
          <li>Sending one ACK for multiple packets (ACK for N).</li>
          <li>Delaying ACKs until a timer expires or a packet is sent.</li>
        </ul>
      </li>

      <li>
        <strong>Admission Policy:</strong> Controls congestion by allowing new connections only when resources 
        (bandwidth, buffer space) are available. Congestion-prone requests are denied.
      </li>
    </ul>

    {/* Closed Loop Congestion Control */}
    <h2 className="text-3xl font-bold mt-8">Closed Loop Congestion Control</h2>
    <p className="leading-relaxed">
      Closed loop congestion control techniques are used to <strong>detect and alleviate congestion after it occurs</strong>.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">

      {/* Backpressure */}
      <li>
        <strong>Backpressure:</strong> A congested node stops accepting packets and signals its upstream neighbor 
        to slow down. This continues backward until it reaches the source.  
        <br />
        Works only in <strong>virtual circuit networks</strong>.
      </li>

      {/* Choke Packet */}
      <li>
        <strong>Choke Packet Technique:</strong> A congested router sends a special <strong>choke packet</strong> 
        to the source, instructing it to reduce transmission rate.  
        Intermediate routers are not notified; only the source gets the signal.
      </li>

      {/* Implicit Signaling */}
      <li>
        <strong>Implicit Signaling:</strong> Congestion is inferred indirectly when:
        <ul className="list-disc ml-6">
          <li>Acknowledgments are delayed.</li>
          <li>Acknowledgments do not arrive at all.</li>
        </ul>
      </li>

      {/* Explicit Signaling */}
      <li>
        <strong>Explicit Signaling:</strong> Congestion information is embedded inside packets.
        <ul className="list-disc ml-6">
          <li><strong>Forward Signaling:</strong> Congestion info sent to the destination.</li>
          <li><strong>Backward Signaling:</strong> Congestion info sent to the source to slow down transmission.</li>
        </ul>
      </li>

    </ul>
  
  </div>
);

export default Home;
