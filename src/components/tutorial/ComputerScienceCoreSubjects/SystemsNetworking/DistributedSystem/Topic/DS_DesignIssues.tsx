import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Header ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Design Issues of Distributed Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 11 Jul, 2025</p>

    {/* ================= Intro ================= */}
    <p className="text-lg leading-relaxed">
      Distributed systems allow multiple computers to work together to provide high performance, scalability, and reliability. 
      Designing such systems involves addressing multiple challenges to ensure efficiency, security, and fault tolerance.
    </p>

    {/* ================= What is a Distributed System ================= */}
    <h2 className="text-3xl font-bold mt-8">What is a Distributed System?</h2>
    <p className="leading-relaxed">
      A distributed system is a collection of independent computers that appear as a single coherent system to users. 
      They share resources and coordinate tasks via a network. Examples include cloud services, online games, and web applications.
    </p>

    {/* ================= Design Issues ================= */}
    <h2 className="text-3xl font-bold mt-8">Major Design Issues</h2>

    <h3 className="text-2xl font-semibold mt-4">1. Communication Issues</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Message Passing:</strong> Processes communicate via messages over networks, which can be synchronous or asynchronous.</li>
      <li><strong>Latency and Bandwidth:</strong> Delays and data transfer limits affect system performance.</li>
      <li><strong>Protocols:</strong> Rules like TCP/IP or UDP ensure reliable and efficient communication.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">2. Process Management</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Process Coordination:</strong> Ensures processes synchronize and interact without conflicts using techniques like mutual exclusion.</li>
      <li><strong>Process Migration:</strong> Moves processes between nodes to balance load and improve performance.</li>
      <li><strong>Thread Management:</strong> Controls thread execution and scheduling for efficient resource use.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">3. Data Management</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Storage and Access:</strong> Data is distributed efficiently across nodes for fast access.</li>
      <li><strong>Consistency and Replication:</strong> Ensures identical data copies; replication improves speed and fault tolerance.</li>
      <li><strong>Integrity:</strong> Mechanisms like checksums and versioning maintain data accuracy.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">4. Fault Tolerance and Reliability</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Failure Detection:</strong> Identifies failed nodes or processes for corrective actions.</li>
      <li><strong>Redundancy and Recovery:</strong> Duplicates critical components and restores operations after failures.</li>
      <li><strong>Consensus and Quorum:</strong> Ensures agreement among nodes even with failures.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">5. Security</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Authentication and Authorization:</strong> Ensures only authorized users access resources.</li>
      <li><strong>Cryptography:</strong> Secures communication and storage of data.</li>
      <li><strong>Data Privacy:</strong> Protects sensitive information using encryption and access control.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">6. Scalability and Modularity</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Scalable Architectures:</strong> Handles growing workloads by adding resources.</li>
      <li><strong>Modular Design:</strong> Breaks the system into independent components for flexibility.</li>
      <li><strong>Elasticity:</strong> Dynamically allocates resources based on demand.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">7. Synchronization and Coordination</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Clock Synchronization:</strong> Ensures consistent time across nodes for coordination.</li>
      <li><strong>Leader Election:</strong> Selects a node to coordinate tasks and resources.</li>
      <li><strong>Mutual Exclusion:</strong> Prevents simultaneous access to shared resources.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">8. Transparency</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Access Transparency:</strong> Uniform interaction with resources.</li>
      <li><strong>Location Transparency:</strong> Resource locations are hidden from users.</li>
      <li><strong>Replication Transparency:</strong> Users see replicated data as a single resource.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">9. Performance</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Load Balancing:</strong> Distributes workloads to prevent bottlenecks.</li>
      <li><strong>Caching:</strong> Speeds up access to frequently used data.</li>
      <li><strong>Latency and Throughput:</strong> Minimize delay and maximize processing rate.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">10. Algorithmic Challenges</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Distributed Algorithms:</strong> Enable nodes to coordinate and maintain consistency.</li>
      <li><strong>Global State Management:</strong> Maintains consistent system state across nodes.</li>
      <li><strong>Distributed Synchronization:</strong> Ensures correct execution order of tasks.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">11. Application-Specific Challenges</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Mobile Systems:</strong> Handle intermittent connectivity and power constraints.</li>
      <li><strong>Sensor Networks:</strong> Collect real-time environmental data efficiently.</li>
      <li><strong>P2P Systems:</strong> Manage trust, security, and scalability in decentralized networks.</li>
      <li><strong>Cloud Computing:</strong> Ensure security, resource allocation, and high availability in on-demand systems.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">12. Debugging and Monitoring</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Debugging:</strong> Identify and fix errors across multiple nodes.</li>
      <li><strong>Event Monitoring:</strong> Track events to detect issues early.</li>
      <li><strong>Distributed Tracing:</strong> Visualize request flows to locate performance bottlenecks.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">13. Real-Time Systems</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Real-Time Scheduling:</strong> Ensures timely execution in critical systems.</li>
      <li><strong>Quality of Service (QoS):</strong> Guarantees bandwidth, latency, and reliability.</li>
    </ul>

    {/* ================= Conclusion ================= */}
    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      Efficient distributed systems require careful design to address communication, fault tolerance, data management, synchronization, and security challenges. 
      Properly addressing these issues ensures scalability, performance, reliability, and robustness across distributed nodes.
    </p>

  </div>
);

export default Home;
