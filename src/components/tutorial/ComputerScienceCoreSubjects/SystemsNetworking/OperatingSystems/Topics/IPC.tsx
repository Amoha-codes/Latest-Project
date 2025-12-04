import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Inter Process Communication ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Inter Process Communication (IPC)
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 29 Aug, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Processes often need to communicate with each other. <strong>Inter-Process Communication (IPC)</strong> is a mechanism that allows processes to exchange data, synchronize their activities, and avoid conflicts when accessing shared resources.
    </p>

    <h2 className="text-3xl font-bold mt-8">Methods of IPC</h2>
    <p className="leading-relaxed">
      IPC can be implemented using two main methods:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Shared Memory:</strong> Processes share a common memory space for communication.</li>
      <li><strong>Message Passing:</strong> Processes communicate by sending and receiving messages via the kernel.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Shared Memory</h2>
    <p className="leading-relaxed">
      In shared memory IPC, the operating system allocates a memory region accessible by multiple processes.
      <ul className="list-disc ml-6 leading-relaxed">
        <li>Process A writes data into the shared memory region.</li>
        <li>Process B reads data directly from the same memory region.</li>
      </ul>
      This method is fast because processes access memory directly, but it requires synchronization mechanisms such as semaphores to avoid conflicts when multiple processes read/write simultaneously.
    </p>

    <h2 className="text-3xl font-bold mt-8">Message Passing</h2>
    <p className="leading-relaxed">
      In message passing IPC, processes communicate by sending and receiving messages via the kernel. This approach does not require shared memory.
      <ul className="list-disc ml-6 leading-relaxed">
        <li>Process A sends a message to the kernel.</li>
        <li>The kernel delivers the message to Process B.</li>
      </ul>
      Message passing can be implemented using sockets, pipes, or message queues. It is simpler and safer than shared memory because processes do not overwrite each other's data, though it incurs more overhead due to kernel involvement.
    </p>

    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      IPC enables processes to communicate and coordinate efficiently. Choosing between shared memory and message passing depends on speed requirements, synchronization complexity, and safety considerations.
    </p>

  </div>
);

export default Home;
