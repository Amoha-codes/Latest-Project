import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Title ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Difference between Hardware and Middleware
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 18 Sep, 2025</p>

    {/* Intro Section */}
    <section>
      <p className="text-lg leading-relaxed">
        Hardware and Middleware are both integral parts of a computer system. 
        <strong>Hardware</strong> refers to the physical components that perform input, output, processing, 
        and storage tasks. <strong>Middleware</strong> is software that acts as a communication layer 
        between applications and the operating system, managing data, integration, and services.
      </p>
    </section>

    {/* What is Hardware */}
    <section>
      <h2 className="text-3xl font-bold mt-6">What is Hardware?</h2>
      <p className="leading-relaxed">
        Hardware refers to the tangible components of a computer, including input devices, processing units, 
        output devices, and storage. It can be categorized into:
      </p>
      <ul className="list-disc ml-6 leading-relaxed space-y-1">
        <li><strong>Internal Hardware:</strong> Components inside the computer like CPU, RAM, motherboard. CPU acts as the brain of the system.</li>
        <li><strong>External Hardware:</strong> Devices outside the computer like keyboard, mouse, USB drives, and touchpads.</li>
      </ul>
      <p className="mt-2 font-semibold">Advantages of Hardware:</p>
      <ul className="list-disc ml-6 leading-relaxed space-y-1">
        <li>Enhanced storage capacity.</li>
        <li>Improved user experience with high-performance graphical interfaces.</li>
      </ul>
      <p className="mt-2 font-semibold">Disadvantages of Hardware:</p>
      <ul className="list-disc ml-6 leading-relaxed space-y-1">
        <li>Requires regular maintenance due to wear, overheating, or damage.</li>
        <li>High-performance hardware is costly.</li>
      </ul>
    </section>

    {/* What is Middleware */}
    <section>
      <h2 className="text-3xl font-bold mt-6">What is Middleware?</h2>
      <p className="leading-relaxed">
        Middleware is software that provides services to applications, handling data management, 
        authentication, API management, and communication between distributed systems. 
        It simplifies application development and ensures secure data exchange.
      </p>
      <p className="mt-2 font-semibold">Advantages of Middleware:</p>
      <ul className="list-disc ml-6 leading-relaxed space-y-1">
        <li>Enhances business efficiency.</li>
        <li>Helps developers build networked applications easily.</li>
      </ul>
      <p className="mt-2 font-semibold">Disadvantages of Middleware:</p>
      <ul className="list-disc ml-6 leading-relaxed space-y-1">
        <li>Some tools may not be fully developed.</li>
        <li>Connections between applications and databases can be slow.</li>
        <li>Setup and configuration can be complex.</li>
      </ul>
    </section>

    {/* Comparison Table */}
    <section>
      <h2 className="text-3xl font-bold mt-6">Hardware vs Middleware</h2>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-400 text-left">
              <th className="p-3 border">Hardware</th>
              <th className="p-3 border">Middleware</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr className="border">
              <td className="p-3 border">Physical components or devices making up a computer system.</td>
              <td className="p-3 border">Software layer between OS and applications providing services.</td>
            </tr>
            <tr className="border">
              <td className="p-3 border">Performs input, output, processing, and storage.</td>
              <td className="p-3 border">Provides common services and capabilities beyond the OS.</td>
            </tr>
            <tr className="border">
              <td className="p-3 border">Features include processor, memory, disk space, usability.</td>
              <td className="p-3 border">Features include reusability, self-discovery, flexibility, integration.</td>
            </tr>
            <tr className="border">
              <td className="p-3 border">Benefits: reduce costs, improve efficiency, effective communication.</td>
              <td className="p-3 border">Benefits: streamline processes, improve efficiency, enable networked applications.</td>
            </tr>
            <tr className="border">
              <td className="p-3 border">Purpose: make computer system work efficiently.</td>
              <td className="p-3 border">Purpose: enable communication and data management for distributed applications.</td>
            </tr>
            <tr className="border">
              <td className="p-3 border">Physical and tangible; mostly visible.</td>
              <td className="p-3 border">Software; mostly invisible.</td>
            </tr>
            <tr className="border">
              <td className="p-3 border">Supports input, processing, output, storage, and communication.</td>
              <td className="p-3 border">Supports multiple application architectures and simplifies integration.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

  </div>
);

export default Home;
