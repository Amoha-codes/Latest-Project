import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Quality of Service ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Quality of Service (QoS) and Multimedia
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 17 Oct, 2025</p>

    {/* Introduction */}
    <p className="text-lg leading-relaxed">
      <strong>Quality-of-Service (QoS)</strong> refers to traffic control mechanisms that seek to 
      differentiate performance based on application or network-operator requirements or provide 
      predictable or guaranteed performance to applications, sessions, or traffic aggregates. 
      The basic parameters of QoS are measured in terms of packet delay and loss.
    </p>

    {/* Types of QoS */}
    <h2 className="text-3xl font-bold mt-8">Types of Quality of Service</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Stateless Solutions:</strong> Routers maintain no fine-grained state about traffic. They are scalable and robust but provide weak guarantees on performance or delay.</li>
      <li><strong>Stateful Solutions:</strong> Routers maintain per-flow state, enabling guaranteed services, high resource utilization, and protection. Less scalable and robust compared to stateless solutions.</li>
    </ul>

    {/* QoS Parameters */}
    <h2 className="text-3xl font-bold mt-8">QoS Parameters</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Packet Loss:</strong> Loss of data packets due to network congestion.</li>
      <li><strong>Jitter:</strong> Variation in packet arrival times, affecting voice and video quality.</li>
      <li><strong>Latency:</strong> Time taken for a packet to travel from source to destination.</li>
      <li><strong>Bandwidth:</strong> Capacity of a network link to transmit data over time.</li>
      <li><strong>Mean Opinion Score (MOS):</strong> Rating of voice quality on a five-point scale.</li>
      <li><strong>Throughput:</strong> Actual rate of successful data transfer over the network.</li>
      <li><strong>Error Rate:</strong> Frequency of corrupted or lost data packets.</li>
    </ul>

    {/* How QoS Works */}
    <h2 className="text-3xl font-bold mt-8">How QoS Works</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Packet Marking:</strong> Packets are marked to identify service types (e.g., voice, video, data).</li>
      <li><strong>Virtual Queues:</strong> Routers create separate queues for different applications based on priority.</li>
      <li><strong>Handling Allocation:</strong> QoS assigns processing order and bandwidth for each application.</li>
    </ul>

    {/* Importance of QoS */}
    <h2 className="text-3xl font-bold mt-8">Importance of QoS</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Prioritizes critical applications such as VoIP, video conferencing, and streaming.</li>
      <li>Reduces latency and jitter for better user experience.</li>
      <li>Minimizes packet loss for time-sensitive applications.</li>
      <li>Optimizes bandwidth usage to prevent congestion.</li>
      <li>Increases network reliability under heavy load.</li>
      <li>Supports service-level agreements (SLAs) for delay, throughput, and availability.</li>
    </ul>

    {/* Implementing QoS */}
    <h2 className="text-3xl font-bold mt-8">Implementing QoS</h2>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li><strong>Planning:</strong> Identify application requirements and stakeholder support.</li>
      <li><strong>Design:</strong> Modify QoS model based on network infrastructure.</li>
      <li><strong>Testing:</strong> Validate QoS policies in a controlled environment.</li>
      <li><strong>Deployment:</strong> Implement policies in phases across network segments.</li>
      <li><strong>Monitoring and Analyzing:</strong> Adjust policies based on performance data.</li>
    </ol>

    {/* QoS Models */}
    <h2 className="text-3xl font-bold mt-8">Models to Implement QoS</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Integrated Services (IntServ):</strong> Guarantees QoS for individual application sessions via resource reservation and per-flow state management.</li>
      <li><strong>RSVP-Internet Signaling:</strong> Creates and maintains distributed reservation states using PATH and RESV messages, supporting multicast scaling.</li>
      <li><strong>Call Admission:</strong> Routers admit calls based on R-spec (QoS requirement) and T-spec (traffic characteristics).</li>
      <li><strong>DiffServ:</strong> Provides reduced state services by maintaining state for aggregate flows rather than individual flows, simplifying signaling and offering flexible service classes.</li>
    </ul>

    {/* QoS Tools */}
    <h2 className="text-3xl font-bold mt-8">QoS Tools</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Traffic Classification and Marking</li>
      <li>Traffic Shaping and Policing</li>
      <li>Queue Management and Scheduling</li>
      <li>Resource Reservation</li>
      <li>Congestion Management</li>
    </ul>

    {/* Multimedia */}
    <h2 className="text-3xl font-bold mt-8">Multimedia</h2>
    <p className="leading-relaxed">
      Multimedia refers to the presentation of text, graphics, audio, video, and animation with interactive tools that allow users to navigate, interact, and communicate using a computer.
    </p>

    {/* Components of Multimedia */}
    <h2 className="text-3xl font-bold mt-8">Components of Multimedia</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Text:</strong> Characters forming words and paragraphs, with formatting options like fonts and sizes.</li>
      <li><strong>Graphics:</strong> Digital visuals such as photos, charts, and illustrations.</li>
      <li><strong>Animation:</strong> Makes still images move to engage the audience.</li>
      <li><strong>Video:</strong> Moving images with sound, typically 15–30 frames per second.</li>
      <li><strong>Audio:</strong> Music, speech, or sound effects to enrich the interaction (formats include MP3, WMA, etc.).</li>
    </ul>

  </div>
);

export default Home;
