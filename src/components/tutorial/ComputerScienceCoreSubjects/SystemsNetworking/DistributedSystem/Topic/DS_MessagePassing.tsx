import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Message Passing in Distributed Systems ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Message Passing in Distributed Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 21 Aug, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Message passing is a communication mechanism used in distributed systems for nodes 
      (computers or processes) to exchange information and coordinate actions. It enables 
      synchronization, coordination, and data sharing among components that may reside on 
      different machines.
    </p>

    {/* Importance Section */}
    <h2 className="text-3xl font-bold mt-8">Importance of Message Passing</h2>
    <p className="leading-relaxed">
      In distributed systems, message passing is crucial for inter-process communication (IPC). 
      It allows distributed applications to share resources, synchronize actions, coordinate tasks, 
      and manage concurrent operations efficiently.
    </p>

    {/* Types of Message Passing */}
    <h2 className="text-3xl font-bold mt-8">Types of Message Passing</h2>

    <h3 className="text-2xl font-semibold mt-4">1. Synchronous Message Passing</h3>
    <p className="leading-relaxed">
      In synchronous message passing, the sender waits for the receiver to acknowledge receipt 
      before continuing execution. This ensures precise coordination.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Timing Coordination:</strong> Sender waits for receiver confirmation.</li>
      <li><strong>Request-Response Pattern:</strong> Often used in request-response communication.</li>
      <li><strong>Advantages:</strong> Ensures strict synchronization.</li>
      <li><strong>Disadvantages:</strong> May cause latency if receiver is busy.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">2. Asynchronous Message Passing</h3>
    <p className="leading-relaxed">
      Asynchronous message passing allows sender and receiver to operate independently. The sender 
      continues execution without waiting for a response.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Decoupled Timing:</strong> Sender does not block.</li>
      <li><strong>Event-Driven Model:</strong> Processes react to messages as they arrive.</li>
      <li><strong>Advantages:</strong> Improves throughput and system responsiveness.</li>
      <li><strong>Disadvantages:</strong> Requires callbacks or handlers to manage responses.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">3. Unicast Messaging</h3>
    <p className="leading-relaxed">
      One-to-one communication where a message is sent from a single sender to a specific receiver.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Advantages:</strong> Efficient for point-to-point communication.</li>
      <li><strong>Disadvantages:</strong> Not suitable for large group communication.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">4. Multicast Messaging</h3>
    <p className="leading-relaxed">
      One-to-many communication where a message is sent to a specific group of nodes.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Advantages:</strong> Reduces network traffic for group communication.</li>
      <li><strong>Disadvantages:</strong> Requires group membership management.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">5. Broadcast Messaging</h3>
    <p className="leading-relaxed">
      One-to-all communication where a message is sent to all nodes in the network.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Advantages:</strong> Ensures all nodes receive critical updates.</li>
      <li><strong>Disadvantages:</strong> High network overhead.</li>
    </ul>

    {/* Communication Protocols */}
    <h2 className="text-3xl font-bold mt-8">Communication Protocols</h2>
    <p className="leading-relaxed">
      Protocols ensure reliable and structured message transfer across distributed nodes. Key protocols include:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>TCP:</strong> Reliable, connection-oriented communication.</li>
      <li><strong>UDP:</strong> Lightweight, connectionless, low-latency communication.</li>
      <li><strong>MQTT:</strong> Publish-subscribe protocol for IoT and M2M communication.</li>
      <li><strong>HTTP:</strong> Used for web-based distributed communication.</li>
    </ul>

    {/* Challenges */}
    <h2 className="text-3xl font-bold mt-8">Challenges of Message Passing</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Scalability:</strong> Managing increased nodes and message volume efficiently.</li>
      <li><strong>Fault Tolerance:</strong> Handling node failures, network partitions, and message loss.</li>
      <li><strong>Security:</strong> Ensuring confidentiality, integrity, and authentication of messages.</li>
      <li><strong>Message Ordering:</strong> Guaranteeing messages arrive in the correct sequence.</li>
    </ul>

    {/* Examples */}
    <h2 className="text-3xl font-bold mt-8">Examples of Message Passing</h2>

    <h3 className="text-2xl font-semibold mt-4">Example 1: E-Commerce Platform</h3>
    <p className="leading-relaxed">
      An order system sends a payment request asynchronously to the payment service and continues processing other orders without waiting for immediate confirmation.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Example 2: Stock Trading App</h3>
    <p className="leading-relaxed">
      A trading app sends a buy/sell request to the server. The server processes the request and responds synchronously to confirm the transaction before proceeding.
    </p>

    {/* Comparison with Shared Memory */}
    <h2 className="text-3xl font-bold mt-8">Message Passing vs Shared Memory</h2>
    <table className="table-auto border-collapse border border-gray-400 w-full text-left">
      <thead>
        <tr className="bg-gray-400">
          <th className="border border-gray-400 p-2">Aspect</th>
          <th className="border border-gray-400 p-2">Message Passing System</th>
          <th className="border border-gray-400 p-2">Shared Memory System</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-400 p-2">Communication Model</td>
          <td className="border border-gray-400 p-2">Synchronous or asynchronous messages</td>
          <td className="border border-gray-400 p-2">Processes access shared memory</td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-2">Data Exchange</td>
          <td className="border border-gray-400 p-2">Messages copied from sender to receiver</td>
          <td className="border border-gray-400 p-2">Direct shared memory access</td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-2">Decoupling</td>
          <td className="border border-gray-400 p-2">Processes loosely coupled</td>
          <td className="border border-gray-400 p-2">Processes tightly coupled through shared memory</td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-2">Scalability</td>
          <td className="border border-gray-400 p-2">Scales well via network</td>
          <td className="border border-gray-400 p-2">Difficult to scale across distributed nodes</td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-2">Performance</td>
          <td className="border border-gray-400 p-2">Network overhead, serialization needed</td>
          <td className="border border-gray-400 p-2">Faster due to direct memory access</td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-2">Isolation</td>
          <td className="border border-gray-400 p-2">Processes isolated</td>
          <td className="border border-gray-400 p-2">Requires synchronization for consistency</td>
        </tr>
        <tr>
          <td className="border border-gray-400 p-2">Use Cases</td>
          <td className="border border-gray-400 p-2">Distributed systems, cloud computing, IoT</td>
          <td className="border border-gray-400 p-2">Multiprocessor systems, tightly coupled clusters</td>
        </tr>
      </tbody>
    </table>

  </div>
);

export default Home;
