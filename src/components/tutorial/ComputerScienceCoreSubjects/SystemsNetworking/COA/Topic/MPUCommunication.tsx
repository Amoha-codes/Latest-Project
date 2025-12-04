import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= MPU Communication ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      MPU Communication in Computer Organization
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 14 May, 2023</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      MPU communicates with external devices using Input/Output (I/O) devices. It receives binary 
      data from input devices such as keyboards or ADCs, and sends data to output devices such as 
      LEDs or printers. To perform these operations, the MPU must identify each I/O device. 
      This is done using two addressing methods: <strong>8-bit addressing</strong> and 
      <strong> 16-bit addressing</strong>.
    </p>

    {/* 8-bit Addressing */}
    <h2 className="text-3xl font-bold mt-8">I/Os with 8-bit Addresses (I/O-Mapped I/O)</h2>
    <p className="leading-relaxed">
      This method is also known as <strong>peripheral-mapped I/O</strong> or <strong>I/O-mapped I/O</strong>. 
      The MPU uses eight address lines to identify input or output devices. These eight lines offer 
      <strong> 2⁸ = 256</strong> address combinations, meaning the MPU can address 256 input devices and 
      256 output devices (00H to FFH).
    </p>

    <p className="leading-relaxed">
      Control signals <strong>I/O Read</strong> and <strong>I/O Write</strong> are used to differentiate 
      between input and output devices. Individual addresses are known as <strong>I/O port numbers</strong>.
      Since these devices cannot connect directly to the buses, tri-state interfaces are used so they 
      become active only when the MPU communicates with them.
    </p>

    {/* 16-bit Addressing */}
    <h2 className="text-3xl font-bold mt-8">I/Os with 16-bit Addresses (Memory-Mapped I/O)</h2>
    <p className="leading-relaxed">
      Here, the MPU uses sixteen address lines to identify I/O devices, treating each device like 
      a memory register. The same control signals—<strong>Memory Read</strong> and 
      <strong> Memory Write</strong>—are used for both memory and I/O. In processors like the 
      Motorola 6800, all I/Os share the same 64K memory map.
    </p>

    <p className="leading-relaxed font-semibold mt-4">Steps in communicating with an I/O device:</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>MPU places an 8-bit or 16-bit address on the address bus, decoded by external logic.</li>
      <li>MPU sends a control signal (I/O Read or I/O Write).</li>
      <li>Data transfer happens using the data bus.</li>
    </ul>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">Comparison of 8-bit and 16-bit Address I/O Mapping</h2>

    <div className="bg-gray-200 p-4 rounded-lg shadow-inner text-sm">
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="p-2 font-semibold">Features</th>
            <th className="p-2 font-semibold">8-bit I/O Mapping</th>
            <th className="p-2 font-semibold">16-bit I/O Mapping</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2">Number of Address Lines</td>
            <td className="p-2">8</td>
            <td className="p-2">16</td>
          </tr>
          <tr>
            <td className="p-2">Total I/O Devices</td>
            <td className="p-2">256</td>
            <td className="p-2">65536</td>
          </tr>
          <tr>
            <td className="p-2">Address Range</td>
            <td className="p-2">00H to FFH</td>
            <td className="p-2">0000H to FFFFH</td>
          </tr>
          <tr>
            <td className="p-2">Control Signals</td>
            <td className="p-2">I/O Read, I/O Write</td>
            <td className="p-2">I/O Read, I/O Write</td>
          </tr>
          <tr>
            <td className="p-2">Interfacing Devices Required</td>
            <td className="p-2">Yes</td>
            <td className="p-2">No</td>
          </tr>
          <tr>
            <td className="p-2">Memory and I/O Sharing</td>
            <td className="p-2">No</td>
            <td className="p-2">Yes</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Advantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Fast and efficient data transfer.</li>
      <li>Easy scalability with additional devices.</li>
      <li>Supports distributed processing.</li>
      <li>Error-checking ensures reduced data loss.</li>
    </ul>

    {/* Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Disadvantages</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Complex to implement due to specialized hardware.</li>
      <li>Possible latency in communication.</li>
      <li>Compatibility issues between different I/O standards.</li>
      <li>Potential security risks due to data interception.</li>
    </ul>

  </div>
);

export default Home;
