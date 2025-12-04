import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Title ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Middleware in Distributed Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 23 Jul, 2025</p>

    {/* Intro Section */}
    <section>
      <p className="text-lg leading-relaxed">
        In distributed systems, <strong>middleware</strong> is a software component that provides services 
        between two or more applications. Middleware acts as an intermediary, enabling communication, 
        integration, and data management between distributed applications while abstracting the 
        underlying complexity.
      </p>
    </section>

    {/* Importance */}
    <section>
      <h2 className="text-3xl font-bold mt-6">Importance of Middleware</h2>
      <ul className="list-disc ml-6 leading-relaxed space-y-1">
        <li><strong>Facilitates Communication:</strong> Enables seamless interaction between distributed components using standardized protocols and APIs.</li>
        <li><strong>Supports Integration:</strong> Integrates diverse services and applications, enabling interoperability across different platforms and technologies.</li>
        <li><strong>Enhances Scalability:</strong> Manages dynamic resources, distributes workloads, and improves system responsiveness.</li>
        <li><strong>Ensures Data Consistency:</strong> Manages transactions and synchronizes data across distributed systems to maintain integrity.</li>
      </ul>
    </section>

    {/* Types of Middleware */}
    <section>
      <h2 className="text-3xl font-bold mt-6">Types of Middleware</h2>

      <h3 className="text-2xl font-semibold mt-4">1. Communication Middleware</h3>
      <ul className="list-disc ml-6 leading-relaxed space-y-1">
        <li><strong>Message-Oriented Middleware (MOM):</strong> Manages communication using messages (e.g., RabbitMQ, Apache Kafka).</li>
        <li><strong>Remote Procedure Call (RPC) Middleware:</strong> Allows remote execution of procedures as if local (e.g., gRPC, Apache Thrift).</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-4">2. Database Middleware</h3>
      <ul className="list-disc ml-6 leading-relaxed space-y-1">
        <li><strong>Object Request Brokers (ORBs):</strong> Handles communication between distributed objects (e.g., CORBA).</li>
        <li><strong>Database Connectivity Middleware:</strong> Manages connections and transactions for databases (e.g., JDBC, ODBC).</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-4">3. Transaction Middleware</h3>
      <ul className="list-disc ml-6 leading-relaxed space-y-1">
        <li><strong>Transaction Processing Monitors (TPMs):</strong> Coordinate distributed transactions ensuring success or rollback (e.g., IBM CICS, BEA Tuxedo).</li>
        <li><strong>Two-Phase Commit Protocol:</strong> Ensures atomicity across distributed systems.</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-4">4. Application Middleware</h3>
      <ul className="list-disc ml-6 leading-relaxed space-y-1">
        <li><strong>Enterprise Service Bus (ESB):</strong> Provides integration and communication backbone (e.g., MuleSoft, Apache ServiceMix).</li>
        <li><strong>Web Middleware:</strong> Supports web applications and services (e.g., Apache Tomcat, Microsoft IIS).</li>
      </ul>
    </section>

    {/* Benefits */}
    <section>
      <h2 className="text-3xl font-bold mt-6">Benefits of Middleware</h2>
      <ul className="list-disc ml-6 leading-relaxed space-y-1">
        <li><strong>Enhanced Communication:</strong> Seamless interaction and standardized interfaces for distributed components.</li>
        <li><strong>Improved Integration:</strong> Enables service and data integration across diverse applications.</li>
        <li><strong>Scalability and Flexibility:</strong> Dynamic resource management and load balancing for varying workloads.</li>
        <li><strong>Transaction Management:</strong> Ensures consistency, reliability, and atomicity in distributed transactions.</li>
      </ul>
    </section>

    {/* Challenges */}
    <section>
      <h2 className="text-3xl font-bold mt-6">Challenges of Middleware</h2>
      <ul className="list-disc ml-6 leading-relaxed space-y-1">
        <li><strong>Performance Overhead:</strong> Can introduce latency and affect throughput.</li>
        <li><strong>Complexity & Integration Issues:</strong> Adds system complexity and integration challenges, especially in heterogeneous environments.</li>
        <li><strong>Scalability Concerns:</strong> Ensuring middleware itself scales effectively.</li>
        <li><strong>Security Issues:</strong> Potential vulnerabilities and complex access control requirements.</li>
      </ul>
    </section>

    {/* Conclusion */}
    <section>
      <h2 className="text-3xl font-bold mt-6">Conclusion</h2>
      <p className="leading-relaxed">
        Middleware is a pivotal component in distributed systems, bridging communication, integration, 
        and management of diverse software components. It abstracts underlying complexity and 
        enhances scalability, flexibility, and functionality in distributed environments.
      </p>
    </section>

  </div>
);

export default Home;
