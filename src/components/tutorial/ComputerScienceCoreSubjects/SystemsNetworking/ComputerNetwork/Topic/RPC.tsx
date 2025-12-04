import React from "react";

const RPC: React.FC = () => {
  return (
    <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-2">
        RPC Message Protocol
      </h1>
      <p className="text-sm text-gray-500">Last Updated : 29 Nov, 2022</p>

      {/* Introduction */}
      <p className="text-lg leading-relaxed">
        A distributed information system consists of multiple autonomous computers that communicate through a network. These systems exchange information using various methods:
      </p>
      <ul className="list-disc ml-6 space-y-1">
        <li>
          <strong>Interprocess Communication:</strong> Low-level communication like distributed shared memory or mailboxes.
        </li>
        <li>
          <strong>Remote Invocation:</strong> High-level direct communication, e.g., RPC, RMI.
        </li>
        <li>
          <strong>Indirect Communication:</strong> High-level indirect methods like group communication or Publish/Subscribe models.
        </li>
      </ul>

      {/* What is RPC */}
      <h2 className="text-3xl font-bold mt-8">What is RPC?</h2>
      <p className="leading-relaxed">
        RPC (Remote Procedure Call) allows a program to execute a procedure on a remote system as if it were a local call. 
        It uses a request-response message-passing mechanism, making network communication appear like a function call. 
        RPC is widely used in systems like Google Protobufs, Facebook Thrift, and Twitter Finagle.
      </p>

      {/* Historical Background */}
      <p className="leading-relaxed">
        The concept emerged in the 1970s, with the term "Remote Procedure Call" coined by Bruce Jay Nelson in 1981. RPC simplifies development by hiding the complexity of network communication from the programmer.
      </p>

      {/* Challenges */}
      <h2 className="text-3xl font-bold mt-8">Challenges in RPC</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li>Networks may limit message sizes and can lose or reorder messages.</li>
        <li>Different machines may have varying architectures and data representations.</li>
        <li>Failure scenarios: lost requests/replies, server crashes, client crashes.</li>
      </ul>

      {/* RPC Mechanism */}
      <h2 className="text-3xl font-bold mt-8">RPC Mechanism</h2>
      <p className="leading-relaxed">
        RPC consists of two key components: 
      </p>
      <ul className="list-disc ml-6 space-y-1">
        <li>
          <strong>Protocol:</strong> Controls messages between client and server and handles network issues.
        </li>
        <li>
          <strong>Stubs:</strong> Pack arguments into request messages on the client and translate them back on the server; return values are similarly translated back.
        </li>
      </ul>

      {/* RPC Execution Steps */}
      <h2 className="text-3xl font-bold mt-8">RPC Execution Steps</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li>The client sends a request message, acknowledged by the server.</li>
        <li>The server executes the operation and sends a reply back to the client.</li>
        <li>The client acknowledges the reply, completing the RPC.</li>
      </ul>

      {/* RPC Threading */}
      <h2 className="text-3xl font-bold mt-8">RPC Thread Execution</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li>Each RPC operates within a thread; client threads initiate RPCs, server threads execute remote operations.</li>
        <li>Single-threaded servers use one call thread; multi-threaded servers use multiple threads depending on architecture and RPC policies.</li>
        <li>RPC threads extend logically across execution threads and the network, encompassing all phases of the RPC.</li>
      </ul>

      {/* Network Limitations */}
      <h2 className="text-3xl font-bold mt-8">Handling Network Limitations</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li>Deliver messages in a timely manner despite network unreliability.</li>
        <li>Fragmentation and reassembly support large message sizes.</li>
        <li>RPC protocols often implement reliability on top of unreliable networks (e.g., using acknowledgments and timeouts).</li>
      </ul>

      {/* Benefits */}
      <h2 className="text-3xl font-bold mt-8">Benefits of RPC</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li>Supports both process-oriented and thread-oriented architectures.</li>
        <li>Can be used locally or in distributed systems.</li>
        <li>Abstracts message transmission, simplifying developer work.</li>
        <li>Minimizes protocol layer overhead and code rewriting.</li>
      </ul>

      {/* Drawbacks */}
      <h2 className="text-3xl font-bold mt-8">Drawbacks of RPC</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li>RPC is not standardized; implementations vary.</li>
        <li>Limited hardware architectural flexibility.</li>
        <li>May increase costs due to network and infrastructure requirements.</li>
      </ul>
    </div>
  );
};

export default RPC;
