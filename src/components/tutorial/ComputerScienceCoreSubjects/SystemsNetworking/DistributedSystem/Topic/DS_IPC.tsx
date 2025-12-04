import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Title ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Interprocess Communication in Distributed Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 11 Jul, 2025</p>

    {/* Intro Section */}
    <section>
      <p className="text-lg leading-relaxed">
        Interprocess Communication (IPC) in distributed systems enables processes across different nodes to 
        exchange data and coordinate activities, facilitating communication, integration, and collaboration 
        in distributed environments.
      </p>
    </section>

    {/* What is IPC */}
    <section>
      <h2 className="text-3xl font-bold mt-6">What is Interprocess Communication?</h2>
      <p className="leading-relaxed">
        IPC is the process of exchanging data between two or more independent processes in a distributed system. 
        It allows processes to communicate via datagram or stream-based mechanisms, enabling seamless interaction 
        between components across networked nodes.
      </p>
    </section>

    {/* Characteristics */}
    <section>
      <h2 className="text-3xl font-bold mt-6">Characteristics of IPC</h2>
      <ul className="list-disc ml-6 leading-relaxed space-y-2">
        <li><strong>Synchronous System Calls:</strong> Sender and receiver use blocking calls; sender waits for acknowledgment.</li>
        <li><strong>Asynchronous System Calls:</strong> Non-blocking calls; sender does not wait for acknowledgment.</li>
        <li><strong>Message Destination:</strong> Messages are sent to specific ports; multiple senders, usually one receiver per port.</li>
        <li><strong>Reliability:</strong> Ensures messages are delivered without corruption or duplication.</li>
        <li><strong>Integrity:</strong> Guarantees that messages reach their destination intact.</li>
      </ul>
    </section>

    {/* Types of IPC */}
    <section>
      <h2 className="text-3xl font-bold mt-6">Types of Interprocess Communication</h2>
      <ul className="list-disc ml-6 leading-relaxed space-y-3">
        <li>
          <strong>Message Passing:</strong> Processes communicate by sending structured messages; supports synchronous and asynchronous modes. Examples: TCP/IP, UDP, MQTT.
        </li>
        <li>
          <strong>Remote Procedure Calls (RPC):</strong> Allows a process to invoke a procedure on a remote machine as if local. Abstracts network communication, parameter marshalling, and error handling.
        </li>
        <li>
          <strong>Sockets:</strong> Low-level network interface for sending streams (TCP) or datagrams (UDP) between processes on different machines.
        </li>
        <li>
          <strong>Message Queuing Systems:</strong> Asynchronous communication using queues; decouples senders and receivers. Examples: RabbitMQ, Apache Kafka, AWS SQS.
        </li>
        <li>
          <strong>Publish-Subscribe Systems:</strong> Publishers send messages to topics; subscribers receive messages based on interest. Supports scalable one-to-many communication. Examples: MQTT, Apache Pulsar.
        </li>
      </ul>
    </section>

    {/* Benefits */}
    <section>
      <h2 className="text-3xl font-bold mt-6">Benefits of IPC</h2>
      <ul className="list-disc ml-6 leading-relaxed space-y-2">
        <li><strong>Facilitates Communication:</strong> Enables seamless interaction between distributed processes.</li>
        <li><strong>Integration:</strong> Supports communication across heterogeneous systems and platforms.</li>
        <li><strong>Scalability:</strong> Enables efficient scaling using mechanisms like pub-sub and message queues.</li>
        <li><strong>Fault Tolerance:</strong> Supports resilience through retries, buffering, and failover strategies.</li>
        <li><strong>Performance Optimization:</strong> Minimizes latency and communication overhead for distributed components.</li>
      </ul>
    </section>

    {/* Challenges */}
    <section>
      <h2 className="text-3xl font-bold mt-6">Challenges of IPC</h2>
      <ul className="list-disc ml-6 leading-relaxed space-y-2">
        <li><strong>Network Latency & Bandwidth:</strong> Delays and bandwidth limitations can impact performance.</li>
        <li><strong>Reliability & Consistency:</strong> Ensuring messages arrive reliably and in order.</li>
        <li><strong>Security:</strong> Protecting data from unauthorized access, tampering, or eavesdropping.</li>
        <li><strong>Error Handling Complexity:</strong> Handling timeouts, connection failures, and protocol mismatches.</li>
        <li><strong>Synchronization & Coordination:</strong> Managing shared resources and distributed transactions effectively.</li>
      </ul>
    </section>

    {/* Example */}
    <section>
      <h2 className="text-3xl font-bold mt-6">Example of IPC using RPC</h2>
      <p className="leading-relaxed">
        Consider a distributed system with a client process (Process A) and a server process (Process B):
      </p>
      <ul className="list-disc ml-6 leading-relaxed space-y-2">
        <li><strong>Client Process A:</strong> Prepares an RPC request specifying the remote procedure and parameters, then sends it to Process B.</li>
        <li><strong>Server Process B:</strong> Listens for RPC requests, executes the requested procedure, and sends back the response.</li>
        <li><strong>Communication Flow:</strong> RPC abstracts the network communication, allowing processes on different machines to interact as if local.</li>
        <li><strong>Use Case:</strong> Process A could be a web application requesting data from a database hosted on Process B. RPC enables the transparent exchange of data between them.</li>
      </ul>
    </section>

    {/* Conclusion */}
    <section>
      <h2 className="text-3xl font-bold mt-6">Conclusion</h2>
      <p className="leading-relaxed">
        Interprocess Communication is essential for distributed systems, enabling processes on different nodes 
        to exchange information and coordinate activities efficiently. By choosing the appropriate IPC mechanism 
        and addressing challenges such as latency, reliability, and security, distributed systems can achieve 
        seamless communication, scalability, and robust performance.
      </p>
    </section>

  </div>
);

export default Home;
