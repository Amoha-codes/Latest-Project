import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Privileged and Non-Privileged Instructions ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Privileged and Non-Privileged Instructions
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 18 Sep, 2025</p>

    {/* Intro */}
    <p className="text-lg leading-relaxed">
      In an operating system, CPU instructions are classified as <strong>privileged</strong> 
      or <strong>non-privileged</strong>. This classification ensures security, stability, 
      and efficient resource management.
    </p>

    {/* Privileged Instructions */}
    <h2 className="text-3xl font-bold mt-8">Privileged Instructions</h2>
    <p className="leading-relaxed">
      Privileged instructions can only be executed by the OS kernel or a privileged process 
      (like a device driver). They access hardware and critical resources, and are executed 
      in <strong>kernel mode</strong>. Attempting them in user mode triggers a trap to the OS.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Access I/O devices and halt instructions.</li>
      <li>Enable or disable interrupts.</li>
      <li>Set the system timer.</li>
      <li>Perform context switching.</li>
      <li>Clear memory or remove a process.</li>
      <li>Modify device-status table entries.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">OS Role in Managing Privileged Instructions</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Access Control:</strong> Restricts execution to authorized processes.</li>
      <li><strong>Memory Protection:</strong> Prevents processes from tampering with OS or each other.</li>
      <li><strong>Interrupt Handling:</strong> Safely executes system calls and exceptions.</li>
      <li><strong>Virtualization:</strong> Provides a secure environment to execute privileged instructions without direct hardware access.</li>
    </ul>

    {/* Non-Privileged Instructions */}
    <h2 className="text-3xl font-bold mt-8">Non-Privileged Instructions</h2>
    <p className="leading-relaxed">
      Non-privileged instructions can be executed by any user-level process in <strong>user mode</strong>. 
      They perform general-purpose tasks and have limited access to system resources.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Read processor status.</li>
      <li>Read system time.</li>
      <li>Generate trap instructions.</li>
      <li>Send print jobs to the printer.</li>
      <li>Switch mode from privileged to non-privileged without causing interrupts.</li>
    </ul>

    {/* Comparison Table */}
    <h3 className="text-2xl font-semibold mt-8">Differences Between Privileged and Non-Privileged Instructions</h3>
    <table className="table-auto border-collapse border border-gray-300 w-full text-left mt-2">
      <thead>
        <tr className="bg-gray-400">
          <th className="border px-4 py-2">Criteria</th>
          <th className="border px-4 py-2">Privileged Instructions</th>
          <th className="border px-4 py-2">Non-Privileged Instructions</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border px-4 py-2">Access to Resources</td><td className="border px-4 py-2">Direct access to system resources</td><td className="border px-4 py-2">Limited access to system resources</td></tr>
        <tr><td className="border px-4 py-2">Execution Mode</td><td className="border px-4 py-2">Kernel mode</td><td className="border px-4 py-2">User mode</td></tr>
        <tr><td className="border px-4 py-2">Execution Permissions</td><td className="border px-4 py-2">Requires special permissions</td><td className="border px-4 py-2">No special permissions required</td></tr>
        <tr><td className="border px-4 py-2">Purpose</td><td className="border px-4 py-2">Low-level system operations</td><td className="border px-4 py-2">General-purpose computing</td></tr>
        <tr><td className="border px-4 py-2">Risks</td><td className="border px-4 py-2">Higher risk of system crashes or vulnerabilities</td><td className="border px-4 py-2">Lower risk</td></tr>
      </tbody>
    </table>

  </div>
);

export default Home;
