import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Congestion Control Techniques ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Congestion Control Techniques in Computer Networks
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 04 Oct, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Congestion occurs when the demand for network resources exceeds available capacity,
      causing delays and packet loss. Congestion control refers to techniques used to
      prevent or minimize this issue. These techniques fall into two categories:
      <strong> Open Loop </strong> (prevention) and <strong> Closed Loop </strong> (treatment).
    </p>

    {/* ================= Open Loop Section ================= */}
    <h2 className="text-3xl font-bold mt-8">Open Loop Congestion Control</h2>
    <p className="leading-relaxed">
      Open loop policies attempt to prevent congestion before it occurs. Here, the sender
      or the destination controls how packets are sent into the network.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Retransmission Policy:</strong> Retransmission timers must be carefully set.
        Excessive retransmissions increase congestion.
      </li>

      <li>
        <strong>Window Policy:</strong> Go-Back-N ARQ retransmits many packets unnecessarily,
        increasing congestion. Selective Repeat ARQ is preferred since it retransmits only
        lost packets.
      </li>

      <li>
        <strong>Discarding Policy:</strong> Routers may discard less important or corrupted
        packets. Multimedia applications tolerate some packet loss to reduce congestion.
      </li>

      <li>
        <strong>Acknowledgment Policy:</strong> To reduce ACK overhead, receivers may:
        <ul className="list-disc ml-6">
          <li>Send a single acknowledgment for multiple packets</li>
          <li>Delay ACKs until a timer expires</li>
        </ul>
      </li>

      <li>
        <strong>Admission Policy:</strong> New connections are accepted only if sufficient
        resources exist. Otherwise, the request is denied to avoid future congestion.
      </li>
    </ul>

    {/* ================= Closed Loop Section ================= */}
    <h2 className="text-3xl font-bold mt-8">Closed Loop Congestion Control</h2>
    <p className="leading-relaxed">
      Closed loop techniques attempt to reduce or eliminate congestion after it has occurred.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Backpressure:</strong> A congested node stops accepting packets from its
        upstream neighbor. This can propagate backward to the source, which eventually slows
        down.
      </li>

      <li>
        <strong>Choke Packet Technique:</strong> When congestion is detected, the router
        sends a choke packet to the source, instructing it to reduce transmission.
      </li>

      <li>
        <strong>Implicit Signaling:</strong> The source infers congestion from delayed or
        missing acknowledgments.
      </li>

      <li>
        <strong>Explicit Signaling:</strong> Congested nodes embed congestion information inside packets.
        <ul className="list-disc ml-6">
          <li><strong>Forward Signaling:</strong> Sent to the destination.</li>
          <li><strong>Backward Signaling:</strong> Sent to the source to slow down.</li>
        </ul>
      </li>
    </ul>

    {/* ================= Conclusion ================= */}
    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      Congestion control ensures smooth and reliable data flow in networks. Open loop
      techniques prevent congestion proactively, while closed loop techniques address it
      when it occurs. Most modern protocols—like TCP—combine both forms for efficient
      congestion management.
    </p>

  </div>
);

export default Home;
