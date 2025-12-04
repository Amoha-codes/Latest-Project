import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Interrupt ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      What is an Interrupt?
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 12 Jul, 2025</p>

    <p className="text-lg leading-relaxed">
      Interrupts allow the processor to respond quickly to events or requests from hardware or software. An interrupt signals the CPU to pause the current process and execute a high-priority routine, called the Interrupt Service Routine (ISR).
    </p>

    {/* ================= Types of Interrupts ================= */}
    <h2 className="text-3xl font-bold mt-8">Types of Interrupts</h2>

    <h3 className="text-2xl font-bold mt-4">Software Interrupts</h3>
    <p className="leading-relaxed">
      Triggered by software or system instructions, also known as traps or exceptions. Examples include system calls like fork() or exceptions like division by zero. The processor executes a specific interrupt handler routine before returning to the interrupted process.
    </p>

    <h3 className="text-2xl font-bold mt-4">Hardware Interrupts</h3>
    <p className="leading-relaxed">
      Triggered by external devices connected to the Interrupt Request (INTR) line. All devices share a common request line. Hardware interrupts are further divided into:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><b>Maskable Interrupt:</b> Can be enabled or disabled via an interrupt mask register.</li>
      <li><b>Spurious Interrupt:</b> Interrupts with no actual source, often occurring in level-sensitive circuits.</li>
    </ul>

    {/* ================= Interrupt Handling ================= */}
    <h2 className="text-3xl font-bold mt-8">Interrupt Handling Mechanism</h2>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>Device raises an Interrupt Request (IRQ).</li>
      <li>Processor stops the current process temporarily.</li>
      <li>Device is acknowledged and deactivates the request signal.</li>
      <li>Interrupt Service Routine (ISR) is executed.</li>
      <li>Processor restores the previous process and resumes execution.</li>
    </ol>

    <h3 className="text-2xl font-bold mt-4">Managing Multiple Devices</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><b>Polling:</b> CPU checks IRQ bits of all devices; first device found is serviced.</li>
      <li><b>Vectored Interrupts:</b> Device sends a code to identify itself, allowing CPU to jump to its ISR.</li>
      <li><b>Interrupt Nesting:</b> Devices prioritized; higher-priority interrupts are serviced first.</li>
    </ul>

    <h3 className="text-2xl font-bold mt-4">Interrupt Priority Schemes</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><b>Fixed Priority:</b> Predefined priority for each interrupt.</li>
      <li><b>Dynamic Priority:</b> Priority changes based on system conditions.</li>
      <li><b>Vectored Interrupt:</b> Each interrupt has a memory address vector.</li>
      <li><b>Priority Masking:</b> Temporarily disables lower-priority interrupts.</li>
      <li><b>Round-Robin:</b> Interrupts handled cyclically for fairness.</li>
    </ul>

    <h3 className="text-2xl font-bold mt-4">Interrupt Latency</h3>
    <p className="leading-relaxed">
      The time between the generation of an interrupt and the start of its handling. Affected by number of interrupts, enabled interrupts, and handling time of each interrupt.
    </p>

    <h3 className="text-2xl font-bold mt-4">CPU Response to Interrupts</h3>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>Detect interrupt from hardware or software.</li>
      <li>Acknowledge the interrupt to the device or software.</li>
      <li>Identify interrupt type using the interrupt vector table.</li>
      <li>Save current context (PC, registers).</li>
      <li>Transfer control to the ISR.</li>
      <li>ISR performs necessary tasks (I/O or processing).</li>
      <li>Restore previous context and resume interrupted process.</li>
    </ol>

    <h3 className="text-2xl font-bold mt-4">Triggering Methods</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><b>Level-Triggered:</b> Active while signal remains at a logic level (high/low).</li>
      <li><b>Edge-Triggered:</b> Triggered by rising or falling edge of signal.</li>
    </ul>

    <h3 className="text-2xl font-bold mt-4">Benefits of Interrupts</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Real-time responsiveness to events.</li>
      <li>Efficient resource usage compared to polling.</li>
      <li>Supports multitasking and concurrency.</li>
      <li>Improves system throughput by overlapping computation and I/O.</li>
    </ul>

    <h3 className="text-2xl font-bold mt-4">Conclusion</h3>
    <p className="leading-relaxed">
      Interrupts allow the CPU to handle urgent requests from hardware or software efficiently. They can be maskable or non-maskable (hardware) or triggered by special instructions (software). After servicing the interrupt, the CPU resumes the interrupted process.
    </p>

  </div>
);

export default Home;
