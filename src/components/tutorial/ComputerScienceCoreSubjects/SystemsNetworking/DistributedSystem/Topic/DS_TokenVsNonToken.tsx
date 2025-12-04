import React from 'react';

const TokenVsNonToken: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Title ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Difference Between Token-Based and Non-Token-Based Algorithms in Distributed Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 12 Jul, 2025</p>

    {/* Introduction */}
    <p className="text-lg leading-relaxed">
      In a distributed system, components are located at different networked computers that communicate by exchanging asynchronous messages. 
      Mutual exclusion is required when multiple processes (sites) request access to a single shared resource, also called the Critical Section. 
      Mutual exclusion algorithms are broadly categorized into <strong>Token-Based</strong> and <strong>Non-Token-Based</strong> algorithms.
    </p>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">Comparison Table</h2>
    <div className="overflow-x-auto">
      <table className="table-auto border-collapse border border-gray-300 w-full text-left">
        <thead>
          <tr className="bg-gray-400">
            <th className="border border-gray-300 px-4 py-2">S.No.</th>
            <th className="border border-gray-300 px-4 py-2">Token-Based Algorithms</th>
            <th className="border border-gray-300 px-4 py-2">Non-Token-Based Algorithms</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">1</td>
            <td className="border border-gray-300 px-4 py-2">A unique token is shared among all sites.</td>
            <td className="border border-gray-300 px-4 py-2">No token exists; access is determined via message exchange.</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">2</td>
            <td className="border border-gray-300 px-4 py-2">A site can enter the Critical Section only if it possesses the token.</td>
            <td className="border border-gray-300 px-4 py-2">Sites exchange two or more rounds of messages to determine the next site for Critical Section entry.</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">3</td>
            <td className="border border-gray-300 px-4 py-2">Uses sequence numbers to order requests and resolve conflicts.</td>
            <td className="border border-gray-300 px-4 py-2">Uses timestamps to order requests and resolve conflicts.</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">4</td>
            <td className="border border-gray-300 px-4 py-2">Produces less message traffic.</td>
            <td className="border border-gray-300 px-4 py-2">Produces more message traffic due to multiple rounds.</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">5</td>
            <td className="border border-gray-300 px-4 py-2">Free from deadlock because of the unique token.</td>
            <td className="border border-gray-300 px-4 py-2">Not free from deadlock as it relies on timestamps.</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">6</td>
            <td className="border border-gray-300 px-4 py-2">Ensures requests are executed in the order they are made.</td>
            <td className="border border-gray-300 px-4 py-2">No guarantee of execution order.</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">7</td>
            <td className="border border-gray-300 px-4 py-2">More scalable; server is free from storing session state.</td>
            <td className="border border-gray-300 px-4 py-2">Less scalable; server must manage requests actively.</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">8</td>
            <td className="border border-gray-300 px-4 py-2">Fine-grained access control using token roles and permissions.</td>
            <td className="border border-gray-300 px-4 py-2">No fine-grained access control without a token.</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">9</td>
            <td className="border border-gray-300 px-4 py-2">Authentication is easier with a token.</td>
            <td className="border border-gray-300 px-4 py-2">Authentication is more complex without a token.</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Examples */}
    <h2 className="text-3xl font-bold mt-8">Examples</h2>
    <div className="leading-relaxed">
      <p><strong>Token-Based Algorithms:</strong></p>
      <ul className="list-disc ml-6">
        <li>Singhal’s Heuristic Algorithm</li>
        <li>Raymond’s Tree-Based Algorithm</li>
        <li>Suzuki–Kasami Algorithm</li>
      </ul>

      <p className="mt-4"><strong>Non-Token-Based Algorithms:</strong></p>
      <ul className="list-disc ml-6">
        <li>Lamport’s Algorithm</li>
        <li>Ricart–Agrawala Algorithm</li>
        <li>Maekawa’s Algorithm</li>
      </ul>
    </div>

  </div>
);

export default TokenVsNonToken;
