import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Input-Output Interface ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Input-Output Interface
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 08 Nov, 2025</p>

    <p className="text-lg leading-relaxed">
      Input-Output Interface is a method that helps transfer information between internal storage (memory) and external peripheral devices.  
      Peripheral devices provide input and output for the computer.
    </p>

    <h2 className="text-3xl font-bold mt-8">Examples of Input and Output Devices</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Input Devices:</strong> Keyboard, Mouse</li>
      <li><strong>Output Devices:</strong> Monitor, Printer</li>
      <li><strong>Input-Output Devices:</strong> External hard drives, touch screens, etc.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Role of Input-Output Interface</h2>
    <p className="leading-relaxed">
      In microcomputer systems, peripheral devices act as communication links for interfacing with the CPU.  
      The Input-Output Interface resolves differences between peripheral devices and CPU.
    </p>

    <h3 className="text-2xl font-bold mt-4">Major Differences Between CPU and Peripheral Devices</h3>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>Peripheral devices are electromagnetic/electro-mechanical; CPU is electronic.</li>
      <li>Data transfer rate of peripheral devices is slower than CPU; requires synchronization.</li>
      <li>Data codes and formats may differ between peripheral devices and CPU/memory.</li>
      <li>Operating modes of peripheral devices vary; each must be controlled to avoid interference.</li>
      <li>Additional hardware is needed to supervise and synchronize all I/O devices with CPU.</li>
    </ol>

    <h2 className="text-3xl font-bold mt-8">Functions of Input-Output Interface</h2>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>Synchronizes CPU speed with input-output devices.</li>
      <li>Selects the appropriate input-output device for data interpretation.</li>
      <li>Provides control and timing signals.</li>
      <li>Supports data buffering through the data bus.</li>
      <li>Includes various error detection mechanisms.</li>
      <li>Converts serial data to parallel data and vice versa.</li>
      <li>Converts digital data to analog signals and vice versa.</li>
    </ol>

  </div>
);

export default Home;
