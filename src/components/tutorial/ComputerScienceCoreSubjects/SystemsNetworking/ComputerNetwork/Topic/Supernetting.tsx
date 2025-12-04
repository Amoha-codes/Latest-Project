import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Title ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Supernetting in Network Layer
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 01 Oct, 2025</p>

    {/* ================= Introduction ================= */}
    <p className="text-lg leading-relaxed">
      <strong>Supernetting</strong> is the opposite of subnetting. While subnetting splits a large network into smaller subnets,
      supernetting combines multiple smaller networks with similar prefixes into a larger network called a <strong>supernet</strong>.
      This technique reduces routing table size, simplifies routing, and optimizes IP address usage, primarily through route summarization.
    </p>

    {/* ================= Benefits ================= */}
    <h2 className="text-3xl font-bold mt-8">Benefits of Supernetting</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Saves storage space in routing tables.</li>
      <li>Reduces the number of routing updates.</li>
      <li>Simplifies routing decisions.</li>
      <li>Helps manage the growth of routing tables as the Internet expands.</li>
    </ul>

    {/* ================= Important Points ================= */}
    <h2 className="text-3xl font-bold mt-8">Important Points for Supernetting</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>All networks must be contiguous.</li>
      <li>Each network block size should be equal and a power of 2 (2<sup>n</sup>).</li>
      <li>The first network ID must be exactly divisible by the total size of the supernet.</li>
    </ul>

    {/* ================= Example ================= */}
    <h2 className="text-3xl font-bold mt-8">Example: Combining Four Class C Networks</h2>
    <p className="leading-relaxed">
      Consider the networks: <code>200.1.0.0</code>, <code>200.1.1.0</code>, <code>200.1.2.0</code>, <code>200.1.3.0</code>
    </p>

    <p className="leading-relaxed font-semibold mt-4">Original Routing Table:</p>
    <table className="table-auto border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-200">
          <th className="border border-gray-300 p-2">Network ID</th>
          <th className="border border-gray-300 p-2">Subnet Mask</th>
          <th className="border border-gray-300 p-2">Interface</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 p-2">200.1.0.0</td>
          <td className="border border-gray-300 p-2">255.255.255.0</td>
          <td className="border border-gray-300 p-2">A</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-2">200.1.1.0</td>
          <td className="border border-gray-300 p-2">255.255.255.0</td>
          <td className="border border-gray-300 p-2">B</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-2">200.1.2.0</td>
          <td className="border border-gray-300 p-2">255.255.255.0</td>
          <td className="border border-gray-300 p-2">C</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-2">200.1.3.0</td>
          <td className="border border-gray-300 p-2">255.255.255.0</td>
          <td className="border border-gray-300 p-2">D</td>
        </tr>
      </tbody>
    </table>

    {/* ================= Conditions for Supernetting ================= */}
    <h2 className="text-3xl font-bold mt-8">Conditions to Check Before Supernetting</h2>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>
        <strong>Contiguous Networks:</strong> All networks must be consecutive without gaps.  
        Example: 200.1.0.0–200.1.0.255 is the first network. Adding 1 to the last IP gives 200.1.1.0 for the next network.
      </li>
      <li>
        <strong>Equal Network Size:</strong> Each network must have the same number of IP addresses. For Class C networks, each has 256 addresses (/24).
      </li>
      <li>
        <strong>First IP Aligns with Supernet Size:</strong> Convert the first IP to binary. If the last n bits (n = bits representing supernet size) are all 0, the first IP is correctly aligned.  
        In this example, the first IP is 200.1.0.0 and total supernet size is 4 × 256 = 1024 addresses. The last 10 bits are 0, so the networks can be combined.
      </li>
    </ol>

    {/* ================= Conclusion ================= */}
    <h2 className="text-3xl font-bold mt-8">Advantages of Supernetting</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Controls and reduces network traffic.</li>
      <li>Helps solve the problem of insufficient IP addresses.</li>
      <li>Minimizes routing table size; all networks should be of the same class and contiguous.</li>
    </ul>

  </div>
);

export default Home;
