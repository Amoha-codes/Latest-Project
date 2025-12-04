import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Types of Operating Systems ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Types of Operating Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 19 Sep, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      An Operating System (OS) is software that manages hardware and software resources. 
      It acts as a bridge between users and the computer. Different OS types work for 
      different purposes — some execute tasks in batches, some support multiple users, 
      while others are built for real-time applications.
    </p>

    {/* ========== 1. Batch Operating System ========== */}
    <h2 className="text-3xl font-bold mt-8">1. Batch Operating System</h2>
    <p className="leading-relaxed">
      A Batch OS processes jobs in groups without direct user interaction. Jobs are 
      queued and executed sequentially.
    </p>

    <h3 className="font-semibold mt-4">Advantages</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Efficient job management</li>
      <li>Minimal idle time</li>
      <li>Ideal for repetitive tasks</li>
      <li>Improved system throughput</li>
    </ul>

    <h3 className="font-semibold mt-4">Disadvantages</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Poor CPU utilization when waiting for I/O</li>
      <li>Unpredictable job completion time</li>
      <li>High response time</li>
      <li>No real-time user interaction</li>
    </ul>

    <p><strong>Examples:</strong> Payroll Systems, Bank Statements</p>

    {/* ========== 2. Multiprogramming Operating System ========== */}
    <h2 className="text-3xl font-bold mt-8">2. Multiprogramming Operating System</h2>
    <p className="leading-relaxed">
      Multiple programs reside in memory simultaneously. The CPU switches between them 
      to maximize utilization.
    </p>

    <h3 className="font-semibold mt-4">Advantages</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Better CPU utilization</li>
      <li>Reduced waiting time</li>
      <li>Improved overall performance</li>
    </ul>

    {/* ========== 3. Multitasking / Time-Sharing OS ========== */}
    <h2 className="text-3xl font-bold mt-8">3. Multitasking / Time-Sharing Operating System</h2>
    <p className="leading-relaxed">
      Each task receives a fixed CPU time slice (quantum). The CPU switches rapidly 
      among tasks to provide interactive performance.
    </p>

    <h3 className="font-semibold mt-4">Advantages</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Equal CPU time for tasks</li>
      <li>Reduced idle time</li>
      <li>Improved productivity</li>
      <li>Better user interaction</li>
    </ul>

    <h3 className="font-semibold mt-4">Disadvantages</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>High overhead due to context switching</li>
      <li>Complex system management</li>
      <li>Increased security risks</li>
    </ul>

    <p><strong>Examples:</strong> IBM VM/CMS, TSO, Windows Terminal Services</p>

    {/* ========== 4. Multiprocessing OS ========== */}
    <h2 className="text-3xl font-bold mt-8">4. Multiprocessing Operating System</h2>
    <p className="leading-relaxed">
      A multiprocessing OS uses two or more CPUs simultaneously to execute tasks. 
      This improves performance through parallel processing.
    </p>

    <h3 className="font-semibold mt-4">Advantages</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>High system throughput</li>
      <li>Fault tolerance if one processor fails</li>
    </ul>

    {/* ========== 5. Distributed Operating System ========== */}
    <h2 className="text-3xl font-bold mt-8">5. Distributed Operating System</h2>
    <p className="leading-relaxed">
      A Distributed OS connects independent computers through a shared network. Users 
      can access remote files or software as if they were on their own systems.
    </p>

    <h3 className="font-semibold mt-4">Advantages</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>One node’s failure does not affect others</li>
      <li>Fast data exchange</li>
      <li>Highly scalable</li>
      <li>Reduced load on central systems</li>
    </ul>

    <h3 className="font-semibold mt-4">Disadvantages</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Network failure stops communication</li>
      <li>Complex design and expensive</li>
      <li>Synchronization issues</li>
      <li>Security vulnerabilities over networks</li>
    </ul>

    <p><strong>Examples:</strong> LOCUS, MICROS, Amoeba</p>

    {/* ========== 6. Network Operating System ========== */}
    <h2 className="text-3xl font-bold mt-8">6. Network Operating System</h2>
    <p className="leading-relaxed">
      A Network OS manages servers, users, permissions, and shared resources across 
      a network. Users are aware of each other’s devices and configurations.
    </p>

    <h3 className="font-semibold mt-4">Advantages</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Stable centralized servers</li>
      <li>Strong security control</li>
      <li>Easy integration of new hardware/software</li>
      <li>Remote server access</li>
    </ul>

    <h3 className="font-semibold mt-4">Disadvantages</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>High server cost</li>
      <li>Dependence on central server</li>
      <li>Regular maintenance required</li>
    </ul>

    <p><strong>Examples:</strong> Windows Server, Linux, UNIX, macOS Server, NetWare</p>

    {/* ========== 7. Real-Time Operating System (RTOS) ========== */}
    <h2 className="text-3xl font-bold mt-8">7. Real-Time Operating System (RTOS)</h2>
    <p className="leading-relaxed">
      RTOS responds to inputs within strict time limits. These are used in systems 
      requiring precise timing such as aircraft control and robotics.
    </p>

    <h3 className="font-semibold">Types</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Hard RTOS:</strong> No delay allowed; life-critical tasks</li>
      <li><strong>Soft RTOS:</strong> Minor delays acceptable</li>
    </ul>

    <h3 className="font-semibold mt-4">Advantages</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Fast task switching</li>
      <li>High reliability</li>
      <li>Efficient memory management</li>
      <li>Ideal for embedded systems</li>
    </ul>

    <h3 className="font-semibold mt-4">Disadvantages</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Limited number of tasks</li>
      <li>Expensive hardware</li>
      <li>Complex algorithms</li>
      <li>Requires specialized drivers</li>
    </ul>

    <p><strong>Examples:</strong> Medical imaging, Robotics, Air-traffic control, Industrial systems</p>

    {/* ========== 8. Mobile Operating System ========== */}
    <h2 className="text-3xl font-bold mt-8">8. Mobile Operating System</h2>
    <p className="leading-relaxed">
      Mobile OS powers smartphones and tablets, managing apps, sensors, memory, and 
      connectivity features.
    </p>

    <h3 className="font-semibold mt-4">Advantages</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>User-friendly interface</li>
      <li>Large app ecosystem</li>
      <li>Multiple connectivity options</li>
      <li>Regular updates</li>
    </ul>

    <h3 className="font-semibold mt-4">Disadvantages</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Battery drains quickly</li>
      <li>Security vulnerabilities</li>
      <li>Android fragmentation issues</li>
      <li>Limited hardware resources</li>
    </ul>

    <p><strong>Examples:</strong> Android, iOS</p>

  </div>
);

export default Home;
