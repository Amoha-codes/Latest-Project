import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= DMA Controller 8257/8237 ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      DMA Controller 8257/8237
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 08 Nov, 2025</p>

    <p className="text-lg leading-relaxed">
      Direct Memory Access (DMA) allows peripheral devices to transfer data directly to or from memory without CPU intervention, significantly improving data transfer speed and efficiency. The Intel 8257 and 8237 are widely used programmable DMA controllers in microprocessor systems.
    </p>

    <p className="leading-relaxed">
      Slow data transfer between I/O ports and memory or between two memory locations is avoided by using DMA, which bypasses the CPU and gives control of the address and data buses to the DMA controller.
    </p>

    <h2 className="text-3xl font-bold mt-8">Key Signals</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>HOLD – Hold Signal</li>
      <li>HLDA – Hold Acknowledgement</li>
      <li>DREQ – DMA Request</li>
      <li>DACK – DMA Acknowledgement</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Steps for DMA Data Transfer (Example: Floppy Drive → Memory)</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>DMA Request Initiation:</strong> Floppy drive asserts DREQ to DMA controller.</li>
      <li><strong>Bus Control Request:</strong> DMAC sends HOLD to CPU to gain control of buses.</li>
      <li><strong>CPU Relinquishes Control:</strong> CPU completes current bus activities and sends HLDA to DMAC, granting bus control.</li>
      <li><strong>DMA Acknowledgement:</strong> DMAC issues DACK to floppy drive, confirming DMA service.</li>
      <li><strong>Data Transfer Execution:</strong> DMAC moves data from floppy drive to memory using I/O read and memory write signals, without CPU involvement.</li>
      <li><strong>DMA Completion:</strong> After transferring data, DMAC returns bus control to CPU; normal processing resumes.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Features of 8257/8237</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Four independent DMA channels, programmable for read, write, or verify operations.</li>
      <li>Each channel can transfer up to 64 KB of data.</li>
      <li>Supports single and cascade modes for system expansion.</li>
      <li>Generates MARK signal every 128 bytes transferred, useful for block transfers.</li>
      <li>Operates in master and slave modes for different system configurations.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Modes of DMAC</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Single Mode:</strong> Only one channel is used; a single DMAC is connected to the bus.</li>
      <li><strong>Cascade Mode:</strong> Multiple channels are used; additional DMACs can be cascaded for larger systems.</li>
    </ul>

  </div>
);

export default Home;
