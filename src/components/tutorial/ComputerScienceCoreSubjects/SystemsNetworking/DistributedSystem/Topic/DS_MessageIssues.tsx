import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Issues in IPC By Message Passing ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Issues in IPC By Message Passing in Distributed Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 17 Mar, 2022</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      In distributed systems, inter-process communication (IPC) is performed using message passing. 
      A sender transmits a message containing data in a format that the receiver can interpret. 
      Message passing allows processes to exchange information using communication primitives such 
      as <strong>send()</strong> and <strong>receive()</strong>.
    </p>

    {/* Typical Message Structure */}
    <h2 className="text-3xl font-bold mt-8">Typical Message Structure</h2>
    <p className="leading-relaxed">
      Messages typically have two main parts:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Fixed-Length Header</strong> with three components:
        <ul className="list-disc ml-6">
          <li><strong>Address:</strong> Contains unique addresses of sender and receiver.</li>
          <li><strong>Sequence Number:</strong> Serves as a message ID to detect duplicates or missing messages.</li>
          <li><strong>Structural Information:</strong> Includes message type (data or pointer) and length.</li>
        </ul>
      </li>
      <li>
        <strong>Collection of Typed Data Objects:</strong> The actual payload of varying size.
      </li>
    </ul>

    {/* Message Passing System */}
    <h2 className="text-3xl font-bold mt-8">Message Passing System</h2>
    <p className="leading-relaxed">
      Message passing abstracts network complexities and heterogeneous platforms from programmers. 
      Processes use <strong>send()</strong> and <strong>receive()</strong> primitives to communicate. 
      For example, Process A sends a message to Process B using <strong>send()</strong>, 
      and Process B receives it using <strong>receive()</strong>.
    </p>

    {/* Characteristics of a Good System */}
    <h2 className="text-3xl font-bold mt-8">Characteristics of a Good Message Passing System</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Simplicity</li>
      <li>Uniform Semantics</li>
      <li>Efficiency</li>
      <li>Correctness</li>
      <li>Reliability</li>
      <li>Flexibility</li>
      <li>Security</li>
      <li>Portability</li>
    </ul>

    {/* Issues in Message Passing */}
    <h2 className="text-3xl font-bold mt-8">Issues in Message Passing</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Who is the sender of the message?</li>
      <li>Who is the intended recipient?</li>
      <li>Is there a single receiver or multiple receivers?</li>
      <li>Is there a guarantee that the recipient received the message? Should the sender wait for a reply?</li>
      <li>What happens in case of communication failure or node crash?</li>
      <li>What happens if the receiver is not ready to accept the message? Should it be buffered or discarded?</li>
      <li>Can the receiver order multiple messages correctly?</li>
    </ul>

    {/* Synchronization */}
    <h2 className="text-3xl font-bold mt-8">Synchronization in Message Passing</h2>
    <p className="leading-relaxed">
      Synchronization is a critical issue. The <strong>send()</strong> and <strong>receive()</strong> 
      primitives can follow two semantics:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Blocking (Synchronous):</strong> The calling process is blocked until the operation completes.
      </li>
      <li>
        <strong>Non-Blocking (Asynchronous):</strong> The calling process continues execution immediately.
      </li>
    </ul>

    {/* Blocking and Non-Blocking Primitives */}
    <h2 className="text-3xl font-bold mt-8">Blocking and Non-Blocking Primitives</h2>
    
    <h3 className="text-2xl font-semibold mt-4">Blocking send()</h3>
    <p className="leading-relaxed">
      The sending process is halted until it receives an acknowledgment from the receiver. 
      To avoid indefinite blocking in case of failure, a timeout value can be specified.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Non-Blocking send()</h3>
    <p className="leading-relaxed">
      The sending process continues immediately after transferring the message to a buffer.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Blocking receive()</h3>
    <p className="leading-relaxed">
      The receiving process is halted until a message is received. Timeouts can prevent indefinite blocking.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Non-Blocking receive()</h3>
    <p className="leading-relaxed">
      The receiving process continues execution immediately after specifying the message buffer location.
    </p>

    {/* Polling vs Interrupt */}
    <h2 className="text-3xl font-bold mt-8">Handling Non-Blocking Receives</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Polling:</strong> The receiver periodically checks the buffer for new messages.
      </li>
      <li>
        <strong>Interrupt:</strong> The system notifies the receiver when a message arrives in the buffer, allowing it to run without repeated checking.
      </li>
    </ul>

    {/* Summary */}
    <h2 className="text-3xl font-bold mt-8">Key Considerations</h2>
    <p className="leading-relaxed">
      Blocking primitives can cause permanent halts if a communication failure occurs. 
      Timeouts and acknowledgment mechanisms are necessary to maintain reliability. 
      Proper design of message passing ensures efficient, synchronized, and fault-tolerant IPC in distributed systems.
    </p>

  </div>
);

export default Home;
