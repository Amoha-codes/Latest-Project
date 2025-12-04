import React from "react";

const IssuesInComputerDesign: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Title ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Issues in Computer Design
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 29 Aug, 2025</p>

    {/* ================= Intro ================= */}
    <p className="text-lg leading-relaxed">
      A computer involves many different components, each with its own 
      requirements such as speed, size, and power consumption. Different 
      operating systems and types of devices add more complexity. Because of 
      these variations, several important issues arise in computer design.
    </p>

    {/* ================= Image Placeholder ================= */}
    <div className="bg-gray-300 p-4 rounded-lg text-center text-sm">
      issues_in_computer_design.webp
    </div>

    {/* ================= Performance ================= */}
    <h2 className="text-3xl font-bold mt-8">Performance</h2>
    <p className="leading-relaxed">
      Performance is one of the most critical factors during computer design. 
      Key concerns include:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Maximizing processing speed, memory performance, and I/O throughput.</li>
      <li>Designing energy-efficient systems to reduce environmental impact and improve battery life in portable devices.</li>
      <li>
        Processors operate significantly faster than memory and I/O devices, 
        leading to a performance bottleneck that slows overall system 
        efficiency.
      </li>
    </ul>

    {/* ================= Security ================= */}
    <h2 className="text-3xl font-bold mt-8">Security</h2>
    <p className="leading-relaxed">
      Ensuring the safety of sensitive data is essential. Security issues 
      involve:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Protecting data from unauthorized access and cyberattacks.</li>
      <li>Implementing strong encryption and authentication mechanisms.</li>
      <li>Designing hardware and software that resist modern threats.</li>
    </ul>

    {/* ================= Compatibility ================= */}
    <h2 className="text-3xl font-bold mt-8">Compatibility and User Experience</h2>
    <p className="leading-relaxed">
      Computers must work smoothly across different platforms, hardware, and 
      environments. Designers must ensure:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Software compatibility across multiple operating systems.</li>
      <li>Hardware interoperability between components and devices.</li>
      <li>Easy-to-use interfaces for a better user experience.</li>
    </ul>

    {/* ================= System Architecture ================= */}
    <h2 className="text-3xl font-bold mt-8">System Architecture and Infrastructure</h2>
    <p className="leading-relaxed">
      Modern computer systems are highly complex. Challenges include:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        Building fault-tolerant systems that can recover from failures without 
        major downtime.
      </li>
      <li>
        Managing design complexity to avoid excessive development cost and 
        time.
      </li>
      <li>
        Ensuring efficient integration of hardware, software, and networking 
        components.
      </li>
    </ul>

    {/* ================= Resource Constraints ================= */}
    <h2 className="text-3xl font-bold mt-8">Resource and Technical Constraints</h2>
    <p className="leading-relaxed">
      Every computer system must operate within physical and technical limits. 
      Some major constraints include:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        Recognizing limitations in computing speed and memory capacity.
      </li>
      <li>
        Using efficient methods to manage memory, especially for large 
        applications and datasets.
      </li>
      <li>
        Preventing performance slowdowns, system crashes, and resource 
        exhaustion.
      </li>
    </ul>

  </div>
);

export default IssuesInComputerDesign;
