import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Remote Procedure Call (RPC) Mechanism ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Remote Procedure Call (RPC) Mechanism
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 15 Oct, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      A <strong>Remote Procedure Call (RPC)</strong> is a communication protocol that enables a 
      program to request a service or execute a procedure on a remote server as if it were a local function call.
    </p>

    {/* RPC Mechanism */}
    <h2 className="text-3xl font-bold mt-8">RPC Mechanism</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>The client invokes a function on a server located in a different address space.</li>
      <li>The RPC framework handles network communication, serialization, and response management.</li>
      <li>Remote communication becomes transparent to developers, promoting modular and maintainable distributed applications.</li>
    </ul>

    {/* Importance of RPC */}
    <h2 className="text-3xl font-bold mt-8">Importance of RPC in Distributed Systems</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Simplified Communication:</strong> Developers call remote services as if they were local methods.
        Provides a consistent interface across the system.
      </li>
      <li>
        <strong>Enhanced Modularity and Reusability:</strong> Decouples system components and allows services to be reused.
      </li>
      <li>
        <strong>Facilitates Distributed Computing:</strong> Enables IPC between processes on different machines and allows resource sharing like databases or computing power.
      </li>
    </ul>

    {/* RPC Architecture */}
    <h2 className="text-3xl font-bold mt-8">RPC Architecture in Distributed Systems</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Client and Server Components:</strong> Client initiates requests using a local stub; server hosts the actual implementation.
      </li>
      <li>
        <strong>Stubs:</strong> Client stub marshals arguments, sends requests, and receives results. Server stub unmarshals arguments, executes procedure, and sends results back.
      </li>
      <li>
        <strong>Marshalling and Unmarshalling:</strong> Marshalling converts data into transmittable byte streams; unmarshalling converts them back to usable data.
      </li>
      <li>
        <strong>Communication Layer:</strong> Uses transport protocols (TCP/UDP) to handle routing, buffering, and error management.
      </li>
      <li>
        <strong>RPC Framework:</strong> 
        <ul className="list-disc ml-6">
          <li>IDL (Interface Definition Language): Defines procedures, parameters, and return types independent of programming language.</li>
          <li>RPC Protocol: Specifies request-response rules and error handling.</li>
        </ul>
      </li>
      <li>
        <strong>Error Handling and Fault Tolerance:</strong> Includes timeouts, retries, and exception handling.
      </li>
      <li>
        <strong>Security:</strong> Authentication/authorization ensures valid clients access services; encryption (e.g., SSL/TLS) protects data during transmission.
      </li>
    </ul>

    {/* Types of RPC */}
    <h2 className="text-3xl font-bold mt-8">Types of RPC</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Synchronous RPC:</strong> Client waits for server response. Simple design but blocking in nature. Used when immediate response is required.
      </li>
      <li>
        <strong>Asynchronous RPC:</strong> Client sends request and continues execution without waiting. Improves responsiveness in concurrent applications.
      </li>
      <li>
        <strong>One-Way RPC:</strong> Client sends request without expecting a response. Useful for logging or notification services.
      </li>
      <li>
        <strong>Callback RPC:</strong> Server invokes a client-provided callback after processing. Useful for long-running operations.
      </li>
      <li>
        <strong>Batch RPC:</strong> Multiple requests are bundled into one batch, reducing network round trips and overhead.
      </li>
    </ul>

  </div>
);

export default Home;
