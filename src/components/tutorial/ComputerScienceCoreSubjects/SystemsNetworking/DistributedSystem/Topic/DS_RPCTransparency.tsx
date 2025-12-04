import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Distributed System - Transparency of RPC ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Distributed System - Transparency of RPC
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 22 Mar, 2022</p>

    {/* Introduction */}
    <p className="text-lg leading-relaxed">
      RPC (Remote Procedure Call) is an effective mechanism for building client-server systems that are distributed. 
      RPC enhances the power and ease of programming in the client/server computing concept. 
      A transparent RPC is one in which programmers cannot tell the difference between local and remote procedure calls. 
      Ensuring transparency is one of the most challenging aspects of designing an RPC facility.
    </p>

    {/* Types of Transparencies */}
    <h2 className="text-3xl font-bold mt-8">Types of Transparency in RPC</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Syntactic transparency:</strong> The syntax of a remote procedure call should be identical to that of a local procedure call.
      </li>
      <li>
        <strong>Semantic transparency:</strong> A remote procedure call and a local procedure call should have the same semantics.
      </li>
    </ul>

    {/* Variations Between Local and Remote Procedure Calls */}
    <h2 className="text-3xl font-bold mt-8">Variations Between RPC and Local Procedure Calls</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>RPCs have disjoint address spaces (different memory spaces) compared to local procedure calls.</li>
      <li>RPCs are more prone to failures due to processor issues or network communication failures.</li>
      <li>RPCs take longer than local calls due to communication delays across the network.</li>
    </ul>

    {/* Achieving Transparency */}
    <h2 className="text-3xl font-bold mt-8">How Transparency Can Be Achieved in RPC</h2>
    <p className="leading-relaxed">
      The main goal of RPC is to make remote procedure calls appear transparent to the calling process. 
      The calling process should be unaware that the procedure is executed on a different machine.
      For example, when a read operation is used as a remote procedure, a client stub version of the read procedure is added to the library. 
      The calling sequence then invokes this stub just like a local function call.
    </p>

    {/* RPC Model */}
    <h2 className="text-3xl font-bold mt-8">RPC Model</h2>
    <p className="leading-relaxed">
      Parameters are encapsulated in a message and transmitted to the server. 
      The server's operating system forwards the message to the server stub, which handles message reception.
      The server unpacks the parameters, executes the server procedure, and sends the result back to the client stub.
      The client’s OS then recognizes the incoming message, and the calling process receives the result as if the procedure was executed locally.
    </p>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Syntactic transparency can be fully achieved—remote calls look like local calls.</li>
      <li>Semantic transparency is difficult to achieve completely due to variations in address space, failure probabilities, and network delays.</li>
      <li>RPC allows distributed systems to be programmed more easily while abstracting the complexities of network communication.</li>
    </ul>

  </div>
);

export default Home;
