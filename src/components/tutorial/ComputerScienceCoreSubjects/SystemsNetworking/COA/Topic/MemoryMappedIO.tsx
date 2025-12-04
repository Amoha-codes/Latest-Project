import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Memory Mapped I/O and Isolated I/O ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Memory Mapped I/O and Isolated I/O
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 07 Nov, 2025</p>

    <p className="text-lg leading-relaxed">
      CPU communicates with memory and I/O devices via the system bus. There are three ways to allocate the system bus:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Separate address, control, and data bus for I/O and memory.</li>
      <li>Common bus for data and address but separate control lines.</li>
      <li>Common bus for data, address, and control for both memory and I/O.</li>
    </ul>

    {/* Isolated I/O */}
    <h2 className="text-3xl font-bold mt-8">Isolated I/O</h2>
    <p className="leading-relaxed">
      CPU uses the same buses for memory and I/O but has separate control signals to indicate memory or I/O operation. I/O devices have special addresses called ports.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>CPU places the port address on the address bus.</li>
      <li>Special control lines like I/O Read or I/O Write are used.</li>
      <li>Data is transferred using the data bus.</li>
      <li>Memory and I/O have separate address spaces and different instructions (e.g., IN, OUT).</li>
    </ul>

    <h3 className="text-2xl font-bold mt-4">Applications of Isolated I/O</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Embedded Systems – industrial control, robotics, automotive electronics.</li>
      <li>Microcontrollers – interfacing with sensors, actuators, displays.</li>
      <li>Real-Time Systems – strict timing and deterministic performance.</li>
    </ul>

    <h3 className="text-2xl font-bold mt-4">Advantages of Isolated I/O</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Large I/O address space.</li>
      <li>Greater flexibility to add/remove devices.</li>
      <li>Improved reliability since memory and I/O are separate.</li>
    </ul>

    <h3 className="text-2xl font-bold mt-4">Disadvantages of Isolated I/O</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Slower I/O operations due to special instructions.</li>
      <li>More complex programming with dedicated I/O instructions.</li>
    </ul>

    {/* Memory-Mapped I/O */}
    <h2 className="text-3xl font-bold mt-8">Memory-Mapped I/O</h2>
    <p className="leading-relaxed">
      CPU uses normal memory instructions (LOAD, STORE) to access I/O devices. Each I/O device is assigned a specific memory address and connected through interface registers acting like memory locations.
    </p>

    <h3 className="text-2xl font-bold mt-4">Applications of Memory-Mapped I/O</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Graphics Processing – direct access to frame buffers and control registers.</li>
      <li>Network Communication – NIC registers mapped to memory addresses.</li>
      <li>Direct Memory Access (DMA) – high-speed data transfer without CPU intervention.</li>
    </ul>

    <h3 className="text-2xl font-bold mt-4">Advantages of Memory-Mapped I/O</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Faster I/O operations using standard memory instructions.</li>
      <li>Simplified programming as memory and I/O instructions are the same.</li>
      <li>Efficient use of address space.</li>
    </ul>

    <h3 className="text-2xl font-bold mt-4">Disadvantages of Memory-Mapped I/O</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Limited I/O address space due to shared memory.</li>
      <li>Potential performance issues if an I/O device responds slowly.</li>
    </ul>

    <h3 className="text-2xl font-bold mt-4">Differences between Memory-Mapped I/O and Isolated I/O</h3>
    <table className="table-auto border-collapse border border-gray-300 w-full text-left mt-4">
      <thead>
        <tr>
          <th className="border border-gray-300 px-2 py-1">Aspect</th>
          <th className="border border-gray-300 px-2 py-1">Isolated I/O</th>
          <th className="border border-gray-300 px-2 py-1">Memory-Mapped I/O</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-2 py-1">Address Space</td>
          <td className="border border-gray-300 px-2 py-1">Memory and I/O separate</td>
          <td className="border border-gray-300 px-2 py-1">Memory and I/O share same space</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-2 py-1">Memory Usage</td>
          <td className="border border-gray-300 px-2 py-1">All addresses usable for memory</td>
          <td className="border border-gray-300 px-2 py-1">Some memory used for I/O</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-2 py-1">Instruction Set</td>
          <td className="border border-gray-300 px-2 py-1">Separate for I/O (IN/OUT)</td>
          <td className="border border-gray-300 px-2 py-1">Same for memory and I/O</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-2 py-1">I/O Addressing</td>
          <td className="border border-gray-300 px-2 py-1">I/O ports</td>
          <td className="border border-gray-300 px-2 py-1">Memory addresses</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-2 py-1">Efficiency</td>
          <td className="border border-gray-300 px-2 py-1">More efficient due to separate buses</td>
          <td className="border border-gray-300 px-2 py-1">Slightly less efficient due to shared resources</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-2 py-1">Hardware Size</td>
          <td className="border border-gray-300 px-2 py-1">Larger due to extra buses</td>
          <td className="border border-gray-300 px-2 py-1">Smaller, fewer buses needed</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-2 py-1">Design Complexity</td>
          <td className="border border-gray-300 px-2 py-1">More complex, separate logic for I/O</td>
          <td className="border border-gray-300 px-2 py-1">Simpler, I/O handled like memory</td>
        </tr>
      </tbody>
    </table>

  </div>
);

export default Home;
