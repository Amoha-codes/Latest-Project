import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Header ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Goals of Distributed System
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 25 Jun, 2023</p>

    {/* ================= Intro Section ================= */}
    <p className="text-lg leading-relaxed">
      In today’s digital world, a distributed system is a network of independent computers 
      that work together to provide improved performance, scalability, reliability, and 
      efficient resource utilization. This section explores the major goals of distributed 
      systems in a simple and easy-to-understand manner.
    </p>

    {/* ================= Goal 1 ================= */}
    <h2 className="text-3xl font-bold mt-8">1. Boosting Performance</h2>
    <p className="leading-relaxed">
      Distributed systems improve overall system performance by dividing a large task into 
      smaller parts and processing them simultaneously across multiple machines. It works 
      like a team where everyone handles a portion of the work.
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      Example: When you search something on the internet, the search engine distributes the 
      request to multiple servers and quickly returns results.
    </p>

    {/* ================= Goal 2 ================= */}
    <h2 className="text-3xl font-bold mt-8">2. Enhancing Reliability</h2>
    <p className="leading-relaxed">
      Distributed systems remain functional even when some computers fail. If one machine 
      crashes, others take over its tasks to keep the system running smoothly.
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      Example: Even if one server in a social media platform is down, users can still browse 
      posts because load is shifted to other servers.
    </p>

    {/* ================= Goal 3 ================= */}
    <h2 className="text-3xl font-bold mt-8">3. Scaling for the Future</h2>
    <p className="leading-relaxed">
      Distributed systems can easily handle increasing demand by adding more computers to 
      the network. This ensures the system runs smoothly even with growing users and tasks.
    </p>

    {/* ================= Goal 4 ================= */}
    <h2 className="text-3xl font-bold mt-8">4. Resourceful Utilization</h2>
    <p className="leading-relaxed">
      Distributed systems make efficient use of available resources by distributing tasks 
      across multiple machines. This avoids overloading a single system and ensures that 
      every resource is used effectively.
    </p>

    {/* ================= Additional Concepts ================= */}
    <h2 className="text-3xl font-bold mt-8">Further Subtopics and Approaches</h2>

    {/* Subtopic 1 */}
    <h3 className="text-2xl font-semibold mt-4">1. Consistency and Transparency</h3>
    <p className="leading-relaxed">
      Distributed systems aim to provide a unified and seamless experience, making the entire 
      network behave as a single system even though many machines are working behind the scenes.
    </p>

    {/* Subtopic 2 */}
    <h3 className="text-2xl font-semibold mt-4">2. Fault Tolerance and Resilience</h3>
    <p className="leading-relaxed">
      These systems incorporate backup mechanisms. If one component fails, tasks are quickly 
      shifted to other machines, ensuring minimal disruption.
    </p>

    {/* Subtopic 3 */}
    <h3 className="text-2xl font-semibold mt-4">3. Security and Data Integrity</h3>
    <p className="leading-relaxed">
      Distributed systems use encryption, authentication, and secure communication techniques 
      to protect sensitive data and prevent unauthorized access.
    </p>

    {/* Subtopic 4 */}
    <h3 className="text-2xl font-semibold mt-4">4. Load Balancing</h3>
    <p className="leading-relaxed">
      Load balancing ensures that work is evenly spread across multiple computers. This prevents 
      any single machine from becoming overloaded, improving speed and preventing system slowdowns.
    </p>

    {/* ================= Conclusion ================= */}
    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      Distributed systems make our digital experiences faster, more reliable, and more efficient. 
      Through improved performance, scalability, reliability, and intelligent resource usage, they 
      shape the future of technology and empower users, developers, and students to build modern, 
      robust applications.
    </p>

  </div>
);

export default Home;
