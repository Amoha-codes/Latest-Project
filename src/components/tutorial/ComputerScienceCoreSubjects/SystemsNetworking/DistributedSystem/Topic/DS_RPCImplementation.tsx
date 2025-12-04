import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= RPC Implementation Mechanism ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      RPC Implementation Mechanism in Distributed System
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 16 Aug, 2022</p>

    {/* Introduction */}
    <p className="text-lg leading-relaxed">
      Remote Procedure Call (RPC) is a protocol that allows a program to request a service 
      from another program on a different computer in a network without needing to know 
      the network details. The requesting program is called the <strong>client</strong>, 
      and the program providing the service is called the <strong>server</strong>. 
      RPC simplifies client-server programming and enables distributed systems efficiently.
    </p>

    {/* Semantic and Syntactic Transparency */}
    <h2 className="text-3xl font-bold mt-8">Transparency in RPC</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Syntactic transparency:</strong> The remote procedure call syntax should resemble a local procedure call.</li>
      <li><strong>Semantic transparency:</strong> The meaning of a remote procedure call should be similar to a local procedure call.</li>
    </ul>

    {/* RPC Working Elements */}
    <h2 className="text-3xl font-bold mt-8">Elements in RPC Mechanism</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Client:</strong> Initiates the RPC request by making a standard call, which triggers the client stub.</li>
      <li><strong>Client Stub:</strong> Achieves semantic transparency. It marshals the parameters into a message, sends it, and unmarshals the result received from the server.</li>
      <li><strong>RPC Runtime:</strong> Handles message transmission, routing, acknowledgment, retransmission, and encryption between client and server.</li>
      <li><strong>Server Stub:</strong> Unmarshals incoming requests, invokes the required server procedure, and marshals the results back to the client.</li>
      <li><strong>Server:</strong> Executes the procedure and returns the results to the server stub.</li>
    </ul>

    {/* RPC Process Flow */}
    <h2 className="text-3xl font-bold mt-8">RPC Process Flow</h2>
    <p className="leading-relaxed">
      1. The client invokes a local procedure, which passes arguments to the client stub.<br/>
      2. The client stub marshals the parameters into a message and sends it to the server via RPC Runtime.<br/>
      3. The server stub receives the message, unmarshals it, and calls the server procedure.<br/>
      4. The server executes the procedure and returns the results to the server stub.<br/>
      5. The server stub marshals the results and sends them back to the client stub through RPC Runtime.<br/>
      6. The client stub unmarshals the results and returns control to the client process.
    </p>

    {/* Client and Server Stubs */}
    <h2 className="text-3xl font-bold mt-8">Client and Server Stubs</h2>
    <p className="leading-relaxed">
      When the client makes a local procedure call, the arguments are packed into a request message 
      and sent to the server. The server executes the procedure based on the request and returns a 
      response message to the client. The client can be blocked while waiting for the response, 
      or in asynchronous RPC, it may continue execution without blocking.
    </p>

    {/* Parameter Passing */}
    <h2 className="text-3xl font-bold mt-8">Parameter Passing in RPC</h2>
    <p className="leading-relaxed">
      Parameters can be passed in two ways:<br/>
      <strong>Pass by Value:</strong> Sends the actual values of variables to the remote procedure.<br/>
      <strong>Pass by Reference:</strong> Sends the address of variables using pointers. The procedure can directly modify the original variables.
    </p>
    <p className="leading-relaxed">
      The method of passing parameters depends on the programming language and data type. 
      For example, in C, scalar types like integers are usually passed by value, whereas arrays are passed by reference.
    </p>

  </div>
);

export default Home;
