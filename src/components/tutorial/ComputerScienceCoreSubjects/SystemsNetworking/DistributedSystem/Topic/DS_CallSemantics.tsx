import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= RPC Call Semantics ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Distributed System – Call Semantics in RPC
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 15 Mar, 2025</p>

    {/* Introduction */}
    <p className="text-lg leading-relaxed">
      In Remote Procedure Call (RPC), the goal is to make a remote function call 
      behave as closely as possible to a local function call. The client invokes a 
      procedure, passes input parameters, waits for execution, and finally receives 
      the results. To maintain transparency in distributed systems, certain 
      challenges related to calling semantics must be addressed.
    </p>

    {/* Key Challenges */}
    <h2 className="text-3xl font-bold mt-8">Key Challenges in RPC</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Binding:</strong> Establishing a link between the caller's procedure 
        name and the remote server where the procedure resides.
      </li>

      <li>
        <strong>Communication Transparency:</strong> The remote nature of the 
        procedure must be hidden from the user to preserve transparency.
      </li>

      <li>
        <strong>Concurrency:</strong> Communication should not interfere with 
        concurrency. Single-threaded servers may block while waiting, so 
        lightweight processes or multithreading help serve multiple clients 
        concurrently.
      </li>

      <li>
        <strong>Heterogeneity:</strong> Machines may have different hardware 
        architectures, data formats, operating systems, or languages. RPC 
        must bridge these differences.
      </li>
    </ul>

    {/* Failure Reasons */}
    <h2 className="text-3xl font-bold mt-8">Reasons for Failure in RPC</h2>

    <p className="leading-relaxed">
      RPC runtime systems incorporate mechanisms to detect and handle failures. 
      Failures may occur due to:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>The caller or callee node crashes.</li>
      <li>Request or response messages get lost in transmission.</li>
    </ul>

    <p className="leading-relaxed">
      RPC must specify how many times a remote operation is allowed to execute 
      when such failures occur. This leads to various call semantics.
    </p>

    {/* Call Semantics Types */}
    <h2 className="text-3xl font-bold mt-8">Types of Call Semantics</h2>

    {/* Perhaps / Possibly */}
    <h3 className="text-2xl font-semibold mt-6">1. Perhaps / Possibly Call Semantics</h3>
    <p className="leading-relaxed">
      This is the weakest type of guarantee. The caller waits for a fixed timeout 
      period and then continues execution, regardless of whether the response 
      arrives. Commonly used in periodic update services where responses are not 
      critical.
    </p>

    {/* Last-One */}
    <h3 className="text-2xl font-semibold mt-6">2. Last-One Call Semantics</h3>
    <p className="leading-relaxed">
      If no reply is received within a timeout, the call is retransmitted. The 
      caller uses the result from the last executed attempt. This may create 
      <strong>orphan calls</strong>—extra executions left running on the server. 
      Suitable for simple RPC systems where occasional extra executions are 
      acceptable.
    </p>

    {/* Last-of-Many */}
    <h3 className="text-2xl font-semibold mt-6">3. Last-of-Many Call Semantics</h3>
    <p className="leading-relaxed">
      Similar to last-one semantics but uses a <strong>unique call identifier</strong> 
      for each retry to avoid orphan calls. The server returns a result only if 
      the call-id matches the most recent invocation.
    </p>

    {/* At-Least-Once */}
    <h3 className="text-2xl font-semibold mt-6">4. At-Least-Once Call Semantics</h3>
    <p className="leading-relaxed">
      The call is guaranteed to be executed at least once. Retransmissions occur 
      if timeout expires, but multiple executions may happen. The caller does not 
      know which execution the result corresponds to. In nested RPCs, the first 
      response is taken even if it came from an orphan execution.
    </p>

    {/* Exactly-Once */}
    <h3 className="text-2xl font-semibold mt-6">5. Exactly-Once Call Semantics</h3>
    <p className="leading-relaxed">
      The strongest guarantee. The procedure executes <strong>no more than once</strong>, 
      regardless of message loss or retransmissions. Servers maintain a reply cache 
      and return stored responses for duplicate requests. The cached result is 
      removed only after receiving an acknowledgment from the client.
    </p>

    {/* Conclusion */}
    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      RPC call semantics define how reliable remote calls are in the face of 
      failures such as lost messages or node crashes. From the weakest 
      (Perhaps semantics) to the strongest (Exactly-once semantics), each level 
      provides different guarantees depending on application needs. Designing 
      robust RPC systems requires carefully selecting the appropriate semantics 
      to ensure transparency, reliability, and correctness.
    </p>

  </div>
);

export default Home;
