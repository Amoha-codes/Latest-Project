import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Task Assignment Approach ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Task Assignment Approach in Distributed Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 03 Dec, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      A distributed system is a network of machines that can exchange information via 
      message-passing. Task assignment in such systems involves dividing processes into 
      tasks and allocating them to appropriate nodes to improve performance and efficiency.
    </p>

    {/* Resource Management */}
    <h2 className="text-3xl font-bold mt-8">1. Resource Management</h2>
    <p className="leading-relaxed">
      The resource manager allocates system resources to user processes and routes tasks 
      to suitable nodes. Resources can be logical (e.g., shared data files) or physical 
      (e.g., CPUs). Effective resource management ensures transparency and efficient task execution.
    </p>

    {/* Task Division */}
    <h2 className="text-3xl font-bold mt-8">2. Task Division and Allocation</h2>
    <p className="leading-relaxed">
      Each process is divided into multiple tasks. These tasks are assigned to nodes based 
      on their computing requirements, processor speed, execution costs, and inter-task 
      communication (IPC) costs. Prior knowledge about tasks and system resources is typically required.
    </p>

    {/* Goals of Task Assignment */}
    <h2 className="text-3xl font-bold mt-8">3. Goals of Task Assignment Algorithms</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Reduce Inter-Process Communication (IPC) cost</li>
      <li>Minimize overall turnaround or response time</li>
      <li>Maximize parallelism</li>
      <li>Utilize system resources efficiently</li>
    </ul>
    <p className="leading-relaxed">
      These goals often conflict. For example, assigning all tasks of a process to one node 
      reduces IPC cost but may underutilize system resources.
    </p>

    {/* Number of Possible Assignments */}
    <h2 className="text-3xl font-bold mt-8">4. Number of Possible Assignments</h2>
    <p className="leading-relaxed">
      For <strong>m</strong> tasks and <strong>n</strong> nodes, the theoretical number of 
      assignments is <strong>m × n</strong>. Practical constraints like memory, priority, 
      and resource availability reduce this number.
    </p>

    {/* Need for Task Assignment */}
    <h2 className="text-3xl font-bold mt-8">5. Need for Task Assignment</h2>
    <p className="leading-relaxed">
      Task assignment ensures optimal system performance by minimizing execution and 
      communication costs, balancing workloads, and improving completion times.
    </p>

    {/* Example */}
    <h2 className="text-3xl font-bold mt-8">6. Example of Task Assignment</h2>
    <p className="leading-relaxed">
      Consider two nodes <strong>n1</strong> and <strong>n2</strong> and six tasks <strong>t1–t6</strong>. 
      Tasks have execution costs on each node and IPC costs between tasks.
    </p>

    <p className="leading-relaxed">
      <strong>Serial Assignment:</strong> Tasks are assigned sequentially to nodes. Total cost = 58.
    </p>
    <p className="leading-relaxed">
      <strong>Optimal Assignment:</strong> Tasks are assigned to minimize execution and IPC costs. 
      Total cost = 38.
    </p>

    {/* Minimal Cutset */}
    <h2 className="text-3xl font-bold mt-8">7. Optimal Assignment using Minimal Cutset</h2>
    <p className="leading-relaxed">
      The minimal cutset of a graph identifies the smallest set of edges whose removal disconnects 
      the graph. Task assignments based on minimal cutsets help achieve optimal execution and 
      communication efficiency.
    </p>

    {/* Conclusion */}
    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      Task assignment in distributed systems divides processes into tasks and allocates them 
      efficiently to nodes while minimizing costs and maximizing performance. Proper algorithms 
      consider execution cost, IPC cost, system resources, and task priorities to achieve optimal results.
    </p>

  </div>
);

export default Home;
