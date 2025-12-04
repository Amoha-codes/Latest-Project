import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      States of a Process in Operating Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 23 Oct, 2025</p>

    {/* Introduction */}
    <p className="text-lg leading-relaxed">
      In an Operating System, a process goes through different states during its lifetime. These states represent what the process is currently doing. A process may go through two, five, or seven states depending on the OS design.
    </p>

    {/* Two-State Model */}
    <h2 className="text-3xl font-bold mt-8">The Two-State Model</h2>
    <p className="leading-relaxed">
      <strong>Running:</strong> The process is actively using the CPU.<br/>
      <strong>Not Running:</strong> The process is not using the CPU. It could be waiting for input or paused.
    </p>

    {/* Five-State Model */}
    <h2 className="text-3xl font-bold mt-8">The Five-State Model</h2>
    <p className="leading-relaxed">
      <strong>New:</strong> Process is newly created, PCB is initialized.<br/>
      <strong>Ready:</strong> Process is waiting for CPU allocation.<br/>
      <strong>Running:</strong> Process is currently executing.<br/>
      <strong>Blocked/Waiting:</strong> Process is waiting for an event or I/O completion.<br/>
      <strong>Exit/Terminate:</strong> Process has finished execution and is removed from memory.
    </p>

    {/* Seven-State Model */}
    <h2 className="text-3xl font-bold mt-8">The Seven-State Model</h2>
    <p className="leading-relaxed">
      <strong>New:</strong> Process about to be created.<br/>
      <strong>Ready:</strong> Process is loaded in main memory and ready to execute.<br/>
      <strong>Running:</strong> Process instructions are executing.<br/>
      <strong>Blocked/Wait:</strong> Waiting for I/O or critical resources.<br/>
      <strong>Suspended Ready:</strong> Swapped out of main memory but can return to ready state.<br/>
      <strong>Terminated/Completed:</strong> Execution finished, PCB deleted.<br/>
      <strong>CPU-bound / I/O-bound:</strong> Depending on process resource intensity.
    </p>

    {/* State Transitions */}
    <h2 className="text-3xl font-bold mt-8">State Transitions</h2>
    <p className="leading-relaxed">
      A process moves between states depending on execution and resource availability:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>New → Ready: Resources allocated, ready for execution.</li>
      <li>Ready → Running: CPU assigned based on scheduling.</li>
      <li>Running → Blocked: Waiting for I/O or event.</li>
      <li>Running → Ready: Preempted by OS (higher priority process).</li>
      <li>Blocked → Ready: Event or I/O completed.</li>
      <li>Running → Terminated: Execution finished or killed.</li>
    </ul>

    {/* Schedulers */}
    <h2 className="text-3xl font-bold mt-8">Types of Schedulers</h2>
    <p className="leading-relaxed">
      <strong>Long-Term Scheduler:</strong> Controls degree of multiprogramming.<br/>
      <strong>Short-Term Scheduler:</strong> Decides which ready process gets CPU next.<br/>
      <strong>Medium-Term Scheduler:</strong> Handles swapping to reduce multiprogramming degree.
    </p>

    {/* Multiprogramming */}
    <h2 className="text-3xl font-bold mt-8">Multiprogramming</h2>
    <p className="leading-relaxed">
      <strong>Preemption:</strong> Process forcefully removed from CPU (time-sharing).<br/>
      <strong>Non-Preemption:</strong> Process runs until completion; CPU cannot be taken back forcibly.<br/>
      Degree of multiprogramming: Maximum processes in ready state.
    </p>

    {/* Operations on Process */}
    <h2 className="text-3xl font-bold mt-8">Operations on a Process</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Creation: Process enters ready queue.</li>
      <li>Planning/Scheduling: OS selects next process to execute.</li>
      <li>Execution: CPU runs the process; may block or wait.</li>
      <li>Termination: Process finishes and context is cleared.</li>
      <li>Blocking: Process waits for resource/event.</li>
      <li>Context Switching: OS switches CPU context between processes.</li>
      <li>Inter-Process Communication: Processes share data via OS mechanisms.</li>
    </ul>

    {/* Features */}
    <h2 className="text-3xl font-bold mt-8">Features of Process States</h2>
    <p className="leading-relaxed">
      Processes move between states multiple times (ready, running, waiting), but new and terminated occur only once. The OS scheduling algorithm controls state selection, ensuring CPU and resources are used efficiently.
    </p>

  </div>
);

export default Home;
