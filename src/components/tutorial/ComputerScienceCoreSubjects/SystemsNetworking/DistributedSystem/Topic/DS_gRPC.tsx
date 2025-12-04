import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Title ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      gRPC Communication in Distributed Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 23 Jul, 2025</p>

    {/* Intro Section */}
    <section>
      <p className="text-lg leading-relaxed">
        gRPC is a high-performance, language-agnostic communication framework that enhances interactions in distributed systems. 
        It provides efficient data exchange, supports multiple communication patterns, and offers robust error handling and security mechanisms.
      </p>
    </section>

    {/* What are Distributed Systems */}
    <section>
      <h2 className="text-3xl font-bold mt-6">What are Distributed Systems?</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li><strong>Decentralization:</strong> No single point of control or failure.</li>
        <li><strong>Scalability:</strong> Nodes can be added easily.</li>
        <li><strong>Concurrency:</strong> Multiple processes run simultaneously.</li>
        <li><strong>Transparency:</strong> System appears as a single coherent unit to users.</li>
      </ul>
      <p className="leading-relaxed mt-2">
        Distributed systems enable cloud computing, IoT, and other applications by providing resilience, redundancy, and efficient resource management.
      </p>
    </section>

    {/* What is gRPC */}
    <section>
      <h2 className="text-3xl font-bold mt-6">What is gRPC?</h2>
      <p className="leading-relaxed">
        gRPC (gRPC Remote Procedure Calls) is an open-source framework by Google for building efficient APIs using HTTP/2 and Protocol Buffers. 
        It supports multiple programming languages and is ideal for distributed systems. Key features include:
      </p>
      <ul className="list-disc ml-6 space-y-2 mt-2">
        <li>Bi-directional Streaming for client-server communication.</li>
        <li>Deadlines and Timeouts for controlling response wait times.</li>
        <li>Robust Error Handling with status codes and metadata.</li>
        <li>Pluggable features like authentication and load balancing.</li>
      </ul>
    </section>

    {/* gRPC Architecture */}
    <section>
      <h2 className="text-3xl font-bold mt-6">Architecture of gRPC</h2>
      <p className="leading-relaxed">
        gRPC architecture consists of several key components:
      </p>
      <ul className="list-disc ml-6 space-y-2 mt-2">
        <li><strong>Client and Server:</strong> Client initiates requests; server processes requests and responds.</li>
        <li><strong>Service Definition:</strong> Defined using Protocol Buffers (protobuf), specifying methods and message types.</li>
        <li><strong>Transport Protocol:</strong> Uses HTTP/2 for multiplexing, header compression, and bidirectional streaming.</li>
        <li><strong>Communication Patterns:</strong> Unary RPC, Server Streaming, Client Streaming, Bi-directional Streaming.</li>
        <li><strong>Serialization:</strong> Uses Protocol Buffers for efficient encoding and decoding of messages.</li>
        <li><strong>Load Balancing & Service Discovery:</strong> Ensures scalable and resilient communication across multiple server instances.</li>
        <li><strong>Interceptors:</strong> Allow cross-cutting concerns like logging and security checks without modifying business logic.</li>
      </ul>
    </section>

    {/* Setting Up gRPC */}
    <section>
      <h2 className="text-3xl font-bold mt-6">Setting Up a gRPC Environment</h2>
      <ul className="list-disc ml-6 space-y-2 mt-2">
        <li>Install gRPC libraries using npm, pip, or Maven depending on the language.</li>
        <li>Define the service in a <code>.proto</code> file.</li>
        <li>Generate client and server code using the Protocol Buffers compiler (<code>protoc</code>).</li>
        <li>Implement server logic and start the gRPC server; implement client logic to call server methods.</li>
        <li>Run server and client to test communication.</li>
      </ul>
    </section>

    {/* Communication Patterns */}
    <section>
      <h2 className="text-3xl font-bold mt-6">gRPC Communication Patterns</h2>
      <ul className="list-disc ml-6 space-y-2 mt-2">
        <li><strong>Unary RPC:</strong> Single request and single response. Example: fetching user details.</li>
        <li><strong>Server Streaming RPC:</strong> Single request, stream of responses. Example: retrieving server logs.</li>
        <li><strong>Client Streaming RPC:</strong> Stream of requests, single response. Example: uploading a large file.</li>
        <li><strong>Bi-directional Streaming RPC:</strong> Both client and server stream messages. Example: chat applications.</li>
      </ul>
    </section>

    {/* Error Handling */}
    <section>
      <h2 className="text-3xl font-bold mt-6">Error Handling in gRPC</h2>
      <ul className="list-disc ml-6 space-y-2 mt-2">
        <li>Status Codes: Standardized codes like <code>NOT_FOUND</code>, <code>INVALID_ARGUMENT</code>.</li>
        <li>Error Metadata: Provides additional context for debugging.</li>
        <li>Retry Logic: Supports exponential backoff for transient failures while maintaining idempotency.</li>
      </ul>
    </section>

    {/* Performance */}
    <section>
      <h2 className="text-3xl font-bold mt-6">Performance Considerations</h2>
      <ul className="list-disc ml-6 space-y-2 mt-2">
        <li>HTTP/2 enables multiplexing for lower latency.</li>
        <li>Protocol Buffers ensure fast serialization and smaller message sizes.</li>
        <li>Load balancing improves scalability and availability.</li>
        <li>Efficient connection management reduces communication overhead.</li>
      </ul>
    </section>

    {/* Security */}
    <section>
      <h2 className="text-3xl font-bold mt-6">Security in gRPC</h2>
      <ul className="list-disc ml-6 space-y-2 mt-2">
        <li>Transport Layer Security (TLS) encrypts client-server communication.</li>
        <li>Authentication and Authorization via OAuth, JWT, etc.</li>
        <li>Interceptors enable logging, metrics, and security enforcement.</li>
      </ul>
    </section>

    {/* Use Cases */}
    <section>
      <h2 className="text-3xl font-bold mt-6">Use Cases</h2>
      <ul className="list-disc ml-6 space-y-2 mt-2">
        <li>Microservices Architecture: Efficient service-to-service communication.</li>
        <li>Real-Time Applications: Low latency and high throughput, e.g., gaming or video conferencing.</li>
        <li>Cloud Services: Data transfer and service discovery in cloud-native environments.</li>
        <li>IoT Applications: Streaming communication between IoT devices and servers.</li>
      </ul>
    </section>

    {/* Conclusion */}
    <section>
      <h2 className="text-3xl font-bold mt-6">Conclusion</h2>
      <p className="leading-relaxed">
        gRPC is a versatile, high-performance communication protocol for distributed systems. 
        With support for multiple communication patterns, robust error handling, and strong security features, 
        gRPC enables efficient, scalable, and reliable interactions among distributed components.
      </p>
    </section>

  </div>
);

export default Home;
