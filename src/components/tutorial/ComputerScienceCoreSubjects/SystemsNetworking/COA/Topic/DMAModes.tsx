import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Modes of DMA Transfer ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Modes of DMA Transfer
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 08 Jan, 2024</p>

    <p className="text-lg leading-relaxed">
      Direct Memory Access (DMA) allows data transfer between memory and I/O devices without CPU involvement. The CPU only initializes the DMA controller and provides the starting memory address and data count. After that, the DMA controller operates independently to transfer data efficiently.
    </p>

    {/* ================= Working of DMA ================= */}
    <h2 className="text-3xl font-bold mt-8">Working of DMA</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>DMA Controller (DMAC) manages the data transfer between memory and I/O devices directly.</li>
      <li>The I/O device sends a DMA request to the DMAC, which in turn sends a HOLD signal to the CPU requesting access to necessary information.</li>
      <li>The CPU provides the starting address (memory location) and data count to the DMAC.</li>
      <li>The CPU sends HLDACK (Hold Acknowledge) to DMAC allowing it to take control.</li>
      <li>DMAC sends DMA ACK to the I/O device to start the direct data transfer.</li>
    </ul>

    {/* ================= Modes of DMA Transfer ================= */}
    <h2 className="text-3xl font-bold mt-8">Modes of DMA Transfer</h2>
    <p className="leading-relaxed">
      During DMA transfer, the CPU may be blocked depending on the mode of transfer. There are three primary modes:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <b>Burst Mode:</b> The DMA controller transfers the entire block of data at once before returning control of the bus to the CPU.  
        <br /><b>Pros:</b> Fastest mode of DMA transfer.  
        <br /><b>Cons:</b> CPU is blocked during the transfer.  
        <br /><b>CPU Blocked Percentage:</b> <code>Ty * 100% / (Tx + Ty)</code>
      </li>

      <li className="mt-4">
        <b>Cycle Stealing Mode:</b> DMA transfers one word/byte at a time when the CPU temporarily gives up control of the bus.  
        <br /><b>Pros:</b> CPU is not blocked entirely; efficient for multitasking.  
        <br /><b>Cons:</b> Slower than Burst Mode.  
        <br /><b>CPU Blocked Percentage:</b> <code>Ty * 100% / Tx</code>
      </li>

      <li className="mt-4">
        <b>Interleaving Mode:</b> DMA only transfers data when the CPU is not using the bus.  
        <br /><b>Pros:</b> CPU is never blocked.  
        <br /><b>Cons:</b> Slowest mode of DMA transfer.  
        <br /><b>CPU Blocked Percentage:</b> 0%
      </li>
    </ul>

    {/* ================= Example ================= */}
    <h2 className="text-3xl font-bold mt-8">Example Calculation</h2>
   <ul className="list-disc ml-6 leading-relaxed">
  <li>Internal data preparation speed = 2 MB/s.</li>
  <li>Preparing 2 MB takes 1 second.</li>
  <li>Preparing 1 B takes 1 second ÷ 2 MB.</li>
  <li>For 16 B: 1 second * 16 B / 2 MB ≈ 8 microseconds.</li>
  <li>CPU blocked percentage in Cycle Stealing Mode = 2 * 100% / 8 = 25%.</li>
</ul>


  </div>
);

export default Home;
