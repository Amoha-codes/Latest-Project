import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Stub Generation ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Stub Generation in Distributed System
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 18 Mar, 2024</p>

    {/* Introduction */}
    <p className="text-lg leading-relaxed">
      A <strong>stub</strong> is a piece of code that translates parameters sent between the client and server 
      during a Remote Procedure Call (RPC) in distributed systems. RPC allows a client to call procedures 
      on a remote server even though the client and server reside in distinct address spaces. Stubs ensure 
      that parameters are correctly translated between different memory spaces, preventing pointer mismatches.
    </p>

    {/* Stub Role */}
    <p className="leading-relaxed">
      Typically, stub libraries are installed on both client and server sides. 
      <strong>Client stubs</strong> perform marshalling of parameters for outgoing calls and unmarshalling of 
      server responses. <strong>Server stubs</strong> perform the reverse operations: they convert client 
      arguments into server-friendly formats, execute the procedure, and marshal results back to the client.
    </p>

    {/* Stub Generation Methods */}
    <h2 className="text-3xl font-bold mt-8">Stub Generation Methods</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Manual Generation:</strong> The RPC implementer provides translation functions, 
        allowing users to create custom stubs. This method is flexible and supports a wide range of argument types.
      </li>
      <li>
        <strong>Automatic Generation:</strong> Interfaces are defined using <strong>Interface Definition Language (IDL)</strong>. 
        The IDL compiler generates stubs automatically, handling parameter direction (input/output) and data marshalling/unmarshalling. 
        This is the most popular method.
      </li>
    </ul>

    {/* Import/Export Interface */}
    <h2 className="text-3xl font-bold mt-8">Interface Concepts</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Import an Interface:</strong> A client program that calls procedures from an interface imports the interface.</li>
      <li><strong>Export an Interface:</strong> A server program that implements procedures in an interface exports the interface.</li>
    </ul>

    {/* IDL and Stub Compilation */}
    <h2 className="text-3xl font-bold mt-8">Interface Definition Language (IDL)</h2>
    <p className="leading-relaxed">
      When creating a distributed application, a programmer first defines the interface in IDL, 
      then writes the client program (importing the interface) and the server program (exporting the interface). 
      An IDL compiler processes the interface definition and generates:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Client and server stub procedures with marshalling and unmarshalling logic.</li>
      <li>A header file supporting the data types in the interface specification.</li>
    </ul>
    <p className="leading-relaxed">
      The client stubs are compiled and linked with the client program, while server stubs are compiled 
      and linked with the server program. IDL compilers can support multiple languages, enabling RPC 
      communication across heterogeneous systems.
    </p>

    {/* Semantic Transparency */}
    <h2 className="text-3xl font-bold mt-8">Achieving Semantic Transparency</h2>
    <p className="leading-relaxed">
      Stubs help achieve semantic transparency, making an RPC call appear like a Local Procedure Call (LPC). 
      They hide the actual RPC implementation from the client application, masking network communication, 
      parameter translation, and remote execution details.
    </p>

  </div>
);

export default Home;
