import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Network Slicing in 5G ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Network Slicing in 5G Networks
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 04 Oct, 2025</p>

    <p className="text-lg leading-relaxed">
      Network slicing in 5G allows a single network to be divided into multiple <strong>“slices”</strong>, 
      each designed for a specific use case. For example, one slice can deliver high-speed mobile internet, 
      another ultra-reliable links for critical tasks like remote surgery or autonomous cars, and another can 
      support massive IoT connectivity. These independent slices ensure smooth performance, making 5G more 
      powerful and flexible than previous networks.
    </p>

    {/* Core Features of 5G */}
    <h2 className="text-3xl font-bold mt-8">Core Features of 5G</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Enhanced Mobile Broadband (eMBB):</strong> Provides higher data rates and stable, high-speed internet.
      </li>
      <li>
        <strong>Ultra-Reliable Low Latency Communication (URLLC):</strong> Delivers low latency and high reliability for uses like autonomous vehicles, automation, and telemedicine.
      </li>
      <li>
        <strong>Massive Machine Type Communication (mMTC):</strong> Connects vast numbers of IoT devices, enabling smart cities and large-scale IoT applications.
      </li>
    </ul>

    {/* Key Terminologies */}
    <h2 className="text-3xl font-bold mt-8">Defining Key Terminologies</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Network Slicing:</strong> Creating multiple virtual networks within a single physical 5G infrastructure, each customized to cater to specific requirements.
      </li>
      <li>
        <strong>5G:</strong> The fifth generation of wireless technology promising faster data transmission, lower latency, and greater connectivity.
      </li>
    </ul>

    {/* Step-by-Step Process */}
    <h2 className="text-3xl font-bold mt-8">The Step-by-Step Process</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Slicing Creation:</strong> Network operators define parameters for each slice including bandwidth, latency, and security requirements.
      </li>
      <li>
        <strong>Resource Allocation:</strong> Dedicated resources are allocated to each slice to ensure required capacity.
      </li>
      <li>
        <strong>Isolation and Management:</strong> Each slice operates independently with its own network functions, management, and control.
      </li>
    </ul>

    <p className="leading-relaxed">
      <strong>Example:</strong> In a smart city, network slicing allows separate virtual networks for autonomous vehicles, public safety, and energy management, ensuring the required quality of service for each application.
    </p>

    {/* Real-World Applications */}
    <h2 className="text-3xl font-bold mt-8">Real-World Applications</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Smart Cities:</strong> Efficient management of traffic, energy, and public safety.</li>
      <li><strong>Autonomous Vehicles:</strong> Dedicated network resources ensure uninterrupted communication for self-driving cars.</li>
      <li><strong>IoT and Industry 4.0:</strong> Supports seamless data exchange for IoT devices and industrial automation.</li>
    </ul>

    {/* Advantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages of Network Slicing</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Customization & Resource Allocation: Tailors services and resources to specific applications.</li>
      <li>Improved QoS: Guarantees low latency, high bandwidth, and reliability.</li>
      <li>Multi-Tenancy: Supports multiple tenants securely on one network.</li>
      <li>Cost Efficiency: Optimizes resources to reduce costs and enable new revenue streams.</li>
      <li>Flexibility & Scalability: Dynamic configuration to meet changing demands.</li>
      <li>Enhanced Security: Isolation between slices limits security risks.</li>
    </ul>

    {/* Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Disadvantages of Network Slicing</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Complexity & Overhead: Managing multiple slices increases operational complexity and requires expertise.</li>
      <li>Resource Contention: Shared infrastructure may cause performance issues if resources aren’t allocated efficiently.</li>
      <li>Interoperability & Privacy: Different slice requirements can create compatibility issues and privacy risks.</li>
      <li>High Investment: Significant upfront costs for infrastructure and software upgrades.</li>
    </ul>

  </div>
);

export default Home;
