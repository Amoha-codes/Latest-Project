import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Header ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Loosely Coupled vs Tightly Coupled Multiprocessor Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 12 Sep, 2024</p>

    {/* ================= Intro ================= */}
    <p className="text-lg leading-relaxed">
      Multiprocessor systems consist of two or more processors working in parallel to execute tasks, enhancing computing speed, efficiency, and reliability. 
      The interaction and connection between processors define whether a system is loosely coupled or tightly coupled, which is crucial when selecting the architecture for specific applications.
    </p>

    {/* ================= Loosely Coupled ================= */}
    <h2 className="text-3xl font-bold mt-8">Loosely Coupled Multiprocessor Systems</h2>
    <p className="leading-relaxed">
      Loosely coupled systems have distributed memory, and modules communicate via a Message Transfer System (MTS) network. Data rates are lower compared to tightly coupled systems.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Advantages</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Scalability:</strong> Additional processors can be added easily without major impact on system performance.</li>
      <li><strong>Fault Tolerance:</strong> Failure of one processor does not affect others, improving reliability.</li>
      <li><strong>Flexibility:</strong> Can support different operating systems and applications.</li>
      <li><strong>Cost Efficiency:</strong> Uses commodity hardware, making implementation cheaper.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Disadvantages</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Communication Latency:</strong> Inter-processor communication is slower due to network-based connections.</li>
      <li><strong>Synchronization Overhead:</strong> Tasks requiring tight coordination may suffer delays.</li>
      <li><strong>Inefficiency for Shared Tasks:</strong> Not suitable for applications needing high memory sharing and inter-processor communication.</li>
    </ul>

    {/* ================= Tightly Coupled ================= */}
    <h2 className="text-3xl font-bold mt-8">Tightly Coupled Multiprocessor Systems</h2>
    <p className="leading-relaxed">
      Tightly coupled systems share memory, and processors communicate through high-speed networks like PMIN, IOPIN, and ISIN. Data rates are higher and resource sharing is more efficient.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Advantages</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Faster Communication:</strong> Shared memory and high-speed interconnects enable efficient data exchange.</li>
      <li><strong>Efficient Resource Sharing:</strong> Memory and I/O devices can be shared easily among processors.</li>
      <li><strong>Better Performance for Synchronized Tasks:</strong> Ideal for tasks requiring high interactivity and coordination.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Disadvantages</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Cost:</strong> Requires specialized hardware and high-speed interconnects, making it expensive.</li>
      <li><strong>Scalability Limitations:</strong> Adding more processors is difficult due to shared resources and synchronization requirements.</li>
      <li><strong>Failure Impact:</strong> Failure of one processor or shared component can affect the entire system.</li>
    </ul>

    {/* ================= Comparison Table ================= */}
    <h2 className="text-3xl font-bold mt-8">Comparison</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 text-left">
        <thead>
          <tr className="bg-gray-400">
            <th className="px-4 py-2">S.No</th>
            <th className="px-4 py-2">Loosely Coupled</th>
            <th className="px-4 py-2">Tightly Coupled</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="px-4 py-2">1</td>
            <td className="px-4 py-2">Distributed memory</td>
            <td className="px-4 py-2">Shared memory</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">2</td>
            <td className="px-4 py-2">Low data rate</td>
            <td className="px-4 py-2">High data rate</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">3</td>
            <td className="px-4 py-2">Lower cost</td>
            <td className="px-4 py-2">Higher cost</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">4</td>
            <td className="px-4 py-2">Connected via MTS network</td>
            <td className="px-4 py-2">Connected via PMIN, IOPIN, ISIN networks</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">5</td>
            <td className="px-4 py-2">Memory conflicts rare</td>
            <td className="px-4 py-2">Memory conflicts possible</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">6</td>
            <td className="px-4 py-2">Low degree of interaction between tasks</td>
            <td className="px-4 py-2">High degree of interaction between tasks</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">7</td>
            <td className="px-4 py-2">Direct processor-to-I/O connection</td>
            <td className="px-4 py-2">I/O connected via IOPIN</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">8</td>
            <td className="px-4 py-2">Used in distributed computing</td>
            <td className="px-4 py-2">Used in parallel processing</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* ================= Conclusion ================= */}
    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      Loosely coupled systems excel in scalability and fault tolerance, while tightly coupled systems provide high-speed communication and efficient resource sharing. 
      The choice depends on application requirements—tasks needing minimal processor interaction are suited for loosely coupled architectures, whereas tasks requiring frequent interaction benefit from tightly coupled architectures.
    </p>

  </div>
);

export default Home;
