import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= I/O Interface ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      I/O Interface (Interrupt and DMA Mode)
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 19 Sep, 2025</p>

    <p className="text-lg leading-relaxed">
      The I/O Interface is used to transfer information between internal storage and external I/O devices.  
      Peripherals are interfaced to the CPU using special communication links to resolve differences between CPU and peripherals.
    </p>

    <p className="leading-relaxed">
      <strong>Note:</strong> Special hardware components between CPU and peripherals, called <strong>interface units</strong>, supervise and synchronize all input and output transfers.
    </p>

    <h2 className="text-3xl font-bold mt-8">Modes of Data Transfer</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Programmed I/O</li>
      <li>Interrupt-Initiated I/O</li>
      <li>Direct Memory Access (DMA)</li>
    </ul>

    <h3 className="text-2xl font-bold mt-4">Programmed I/O</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Each data transfer is initiated by a CPU instruction.</li>
      <li>Data moves between CPU registers and memory; the CPU constantly monitors peripherals.</li>
      <li>I/O devices do not directly access memory; CPU executes multiple instructions to transfer data.</li>
      <li>CPU remains busy until the I/O unit signals readiness. Interrupts can be used to avoid this busy-wait.</li>
    </ul>

    <h3 className="text-2xl font-bold mt-4">Interrupt-Initiated I/O</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>CPU can continue other tasks while the interface monitors the device.</li>
      <li>When the device is ready, it sends an interrupt request to the CPU.</li>
      <li>CPU pauses its current task, executes the service program for I/O transfer, then returns to the original task.</li>
      <li>Transfer rate is limited by the processor’s speed in handling interrupts.</li>
      <li>Several instructions must be executed for each I/O transfer.</li>
    </ul>

    <h4 className="text-xl font-bold mt-4">Types of Interrupts</h4>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Hardware vs Software:</strong> External devices vs program instructions.</li>
      <li><strong>Vectored vs Non-Vectored:</strong> Fixed addresses vs dynamic runtime addresses.</li>
      <li><strong>Maskable vs Non-Maskable:</strong> Can be disabled vs always active.</li>
      <li><strong>External vs Internal:</strong> Triggered by hardware vs processor events.</li>
      <li><strong>Synchronous vs Asynchronous:</strong> Predictable vs unpredictable events.</li>
    </ul>

    <h3 className="text-2xl font-bold mt-4">Direct Memory Access (DMA)</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>DMA allows peripherals to transfer data directly to/from memory without CPU intervention.</li>
      <li>CPU is idle during DMA; the DMA controller manages memory buses.</li>
      <li>Enables transfer of an entire block of data at the device's transfer rate.</li>
      <li>Bus is granted to DMA, data is transferred, then control is returned to the CPU.</li>
      <li>Total transfer time = Bus grant request + (N × memory transfer rate) + Bus release time.</li>
    </ul>

    <p className="leading-relaxed">
      Using DMA and interrupt-driven I/O improves system efficiency by reducing CPU idle time and speeding up data transfers.
    </p>

  </div>
);

export default Home;
