import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Remote Procedure Call ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Remote Procedure Call (RPC) in Operating System
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 25 Oct, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Remote Procedure Call (RPC) allows a program to execute a function located on another
      machine in the network as though it were a local function call. The client sends a request  
      with arguments, the server executes the function, and the result is returned to the client.
      RPC hides networking complexity and provides simple function-call semantics.
    </p>

    {/* Working Section */}
    <h2 className="text-3xl font-bold mt-8">How RPC Works (Step by Step)</h2>
    <p className="leading-relaxed">
      RPC simplifies distributed computing by enabling seamless communication between client and server.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Client Calls Stub:</strong> The client calls a local stub like a normal function.</li>
      <li><strong>Marshalling:</strong> The stub packs (marshals) parameters into a message.</li>
      <li><strong>Send to Server:</strong> The message is sent over the network.</li>
      <li><strong>Server Stub:</strong> Unmarshals data and calls the actual server function.</li>
      <li><strong>Execution:</strong> The server executes the requested procedure.</li>
      <li><strong>Return to Client:</strong> The result is marshalled back and delivered to the client.</li>
    </ul>

    <p className="leading-relaxed">
      Execution resumes on the client side as if returning from a normal function call.
    </p>

    {/* Explanation Section */}
    <h2 className="text-3xl font-bold mt-8">How to Make a Remote Procedure Call?</h2>
    <p className="leading-relaxed">
      The calling environment is suspended, parameters are transferred to the remote system, 
      and the procedure executes there. After execution, results are returned, and the client 
      continues.
    </p>

    <p className="leading-relaxed">
      RPC is best suited for client-server interactions where execution alternates between 
      caller and callee.
    </p>

    {/* Types of RPC */}
    <h2 className="text-3xl font-bold mt-8">Types of RPC</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Callback RPC:</strong> Client and server can call each other. Useful in 
        interactive systems and supports peer-to-peer communication.
      </li>
      <li>
        <strong>Broadcast RPC:</strong> The client sends a broadcast request to multiple servers. 
        Useful when many servers may respond.
      </li>
      <li>
        <strong>Batch-mode RPC:</strong> Combines multiple client requests into one message to 
        reduce overhead.
      </li>
    </ul>

    {/* What RPC Does */}
    <h2 className="text-3xl font-bold mt-8">What Does RPC Do?</h2>

    <p className="leading-relaxed">
      RPC allows accessing remote code as if it were local. Stubs act as placeholders for remote 
      functions by converting function calls into messages and sending them to the server.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>The stub sends the request to a local helper.</li>
      <li>The helper finds the server over the network.</li>
      <li>The server runs the code and sends results back.</li>
      <li>The client receives and processes the result.</li>
    </ul>

    {/* Issues Section */}
    <h2 className="text-3xl font-bold mt-8">Issues of RPC</h2>

    <h3 className="text-2xl font-semibold mt-4">1. RPC Runtime</h3>
    <p className="leading-relaxed">
      Handles communication, binding, protocol selection, transmission, and error management.
    </p>

    <h3 className="text-2xl font-semibold mt-4">2. Stub</h3>
    <p className="leading-relaxed">
      Client stub converts function calls into messages (marshalling).  
      Server stub unpacks messages and invokes the actual procedure.
    </p>

    <h3 className="text-2xl font-semibold mt-4">3. Binding</h3>
    <p className="leading-relaxed">
      Binding determines which server a client communicates with.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Naming:</strong> Server exports an interface for clients.</li>
      <li><strong>Locating:</strong> Client imports the interface before communication.</li>
    </ul>

    {/* Call Semantics */}
    <h2 className="text-3xl font-bold mt-8">Call Semantics in RPC</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Retry Request Message:</strong> Handles lost messages or server failures.</li>
      <li><strong>Duplicate Filtering:</strong> Ensures server does not process duplicates.</li>
      <li><strong>Retransmission of Results:</strong> Resends results without re-executing operations.</li>
    </ul>

    {/* Advantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages of RPC</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Simple communication using normal procedure calls.</li>
      <li>Hides network complexity from programmers.</li>
      <li>Works in both local and distributed systems.</li>
    </ul>

    {/* Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Disadvantages of RPC</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Cannot pass pointers, only values.</li>
      <li>Slower than local calls due to networking delay.</li>
      <li>More vulnerable to failures due to network dependence.</li>
    </ul>

    {/* RPC vs REST */}
    <h2 className="text-3xl font-bold mt-8">RPC vs REST</h2>
    <p className="leading-relaxed">
      Both RPC and REST allow programs to communicate over networks but use different models.  
      RPC focuses on calling functions remotely, while REST focuses on resources and HTTP verbs.
    </p>

    <p className="leading-relaxed">
      Modern versions like <strong>gRPC</strong> and <strong>DRPC</strong> have made RPC efficient 
      again, and many companies use both RPC and REST depending on the requirement.
    </p>

  </div>
);

export default Home;
