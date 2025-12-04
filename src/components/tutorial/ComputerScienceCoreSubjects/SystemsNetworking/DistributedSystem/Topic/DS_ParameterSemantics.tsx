import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= RPC Parameter Passing Semantics ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Distributed System – Parameter Passing Semantics in RPC
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 22 Mar, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      A <strong>Distributed System</strong> is a network of independent machines that 
      communicate through message passing. Since there is no shared memory, the 
      only way for clients and servers to exchange information in 
      <strong> Remote Procedure Call (RPC)</strong> is through parameter passing. 
      This article explains the different parameter passing semantics used in RPC.
    </p>

    {/* 1. Call by Value */}
    <h2 className="text-3xl font-bold mt-8">1. Call-by-Value</h2>
    <p className="leading-relaxed">
      In call-by-value, the client stub copies the argument values into a message 
      and sends them to the server. This process is known as 
      <strong> parameter marshaling</strong>.
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      Example: For a remote procedure add(x, y), the client stub packages x and y 
      along with the method name, sends them to the server, which executes the 
      function and returns the result.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Works well when client & server machines have similar architectures.</li>
      <li>Suitable for scalar types: integers, booleans, characters.</li>
      <li>Simple and widely used in traditional RPC systems.</li>
    </ul>

    {/* 2. Call by Reference */}
    <h2 className="text-3xl font-bold mt-8">2. Call-by-Reference</h2>
    <p className="leading-relaxed">
      Call-by-reference attempts to pass <strong>pointers</strong> from client to server. 
      However, pointers are memory addresses valid only within one process, making 
      this difficult in distributed systems.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        In some systems, pointer operations are handled by sending messages back 
        to the client to fetch or store data.
      </li>
      <li>
        Works only in specialized setups like distributed shared memory systems.
      </li>
      <li>
        Inefficient because each dereferencing may require a network round trip.
      </li>
    </ul>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      Example: If the client passes address 1000 as a buffer, the server cannot 
      directly access that memory because it may not exist in its address space.
    </p>

    {/* Call-by-Object Reference */}
    <h2 className="text-3xl font-bold mt-8">3. Call-by-Object-Reference</h2>
    <p className="leading-relaxed">
      In this method, the RPC system passes an <strong>object reference</strong> instead of 
      copying object values. This is common in object-based distributed systems 
      like CORBA or Java RMI, where objects are invoked remotely.
    </p>

    {/* Call-by-Move */}
    <h2 className="text-3xl font-bold mt-8">4. Call-by-Move</h2>
    <p className="leading-relaxed">
      Call-by-move relocates the parameter object to the server for the duration 
      of the call. If the object remains at the caller's node but is temporarily 
      accessed remotely, the method is called <strong>call-by-visit</strong>.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Reduces network overhead by bundling object data with the call.</li>
      <li>Useful in mobile agent systems or mobile object-based RPC.</li>
    </ul>

    {/* Issues Section */}
    <h2 className="text-3xl font-bold mt-8">Issues in Parameter Passing</h2>
    <p className="leading-relaxed">
      Distributed systems consist of heterogeneous machines, making parameter 
      passing challenging. The main issues include:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Different data representations:</strong>  
        Example: IBM mainframes use EBCDIC, while PCs use ASCII.
      </li>

      <li>
        <strong>Byte ordering (Endianness):</strong>  
        Intel/AMD → Little Endian  
        Sun SPARC, PowerPC → Big Endian  
        This causes incorrect interpretation of integers and floats if not handled.
      </li>

      <li>
        <strong>Pointer invalidity:</strong>  
        Memory addresses on the client cannot be used on the server.
      </li>
    </ul>

    {/* Conclusion */}
    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      Parameter passing is a core part of RPC because distributed systems lack 
      shared memory. Call-by-value is the most widely used method, while 
      call-by-reference and more advanced methods require special mechanisms. 
      Heterogeneity issues like encoding differences and endianness must be 
      handled through marshaling to ensure correct communication.
    </p>

  </div>
);

export default Home;
