import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Static and Dynamic Routing ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Static and Dynamic Routing
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 07 Oct, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Routing determines how data packets move from a source to a destination across a network, 
      ensuring efficient and reliable delivery. Routing can be implemented in two main ways: 
      <strong> Static Routing</strong> and <strong>Dynamic Routing</strong>.
    </p>

    {/* Static Routing Section */}
    <h2 className="text-3xl font-bold mt-8">1. Static Routing</h2>
    <p className="leading-relaxed">
      Static Routing, also called <strong>non-adaptive routing</strong>, requires manual 
      configuration of routes by a network administrator. The routing table does not change 
      unless the administrator updates it. Static routing does not rely on complex algorithms 
      and provides a higher level of security compared to dynamic routing.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Advantages of Static Routing</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Minimal CPU overhead; cheaper routers can be used.</li>
      <li>Secure, as only the administrator controls allowed routes.</li>
      <li>No bandwidth is consumed for route updates between routers.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Disadvantages of Static Routing</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Time-consuming in large networks due to manual route configuration.</li>
      <li>Requires detailed knowledge of network topology.</li>
      <li>New administrators must learn all routes to configure them correctly.</li>
    </ul>

    {/* Dynamic Routing Section */}
    <h2 className="text-3xl font-bold mt-8">2. Dynamic Routing</h2>
    <p className="leading-relaxed">
      Dynamic Routing, also called <strong>adaptive routing</strong>, automatically updates routing 
      tables whenever network topology changes. Routers exchange routing information and use complex 
      algorithms to calculate the best path for data. While dynamic routing is easier to manage, it 
      is less secure than static routing.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Advantages of Dynamic Routing</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Easy to configure and maintain.</li>
      <li>Efficient in discovering remote networks and selecting the best routes.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Disadvantages of Dynamic Routing</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Consumes more bandwidth for router-to-router communication.</li>
      <li>Provides less security than static routing.</li>
    </ul>

    {/* Difference Table */}
    <h2 className="text-3xl font-bold mt-8">3. Key Differences Between Static and Dynamic Routing</h2>
    <div className="overflow-x-auto">
      <table className="table-auto border border-gray-300 mt-4 w-full text-left">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 border">Feature</th>
            <th className="px-4 py-2 border">Static Routing</th>
            <th className="px-4 py-2 border">Dynamic Routing</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border">Route Definition</td>
            <td className="px-4 py-2 border">Routes are manually configured by the user.</td>
            <td className="px-4 py-2 border">Routes are automatically updated according to network topology.</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Algorithm</td>
            <td className="px-4 py-2 border">Does not use complex routing algorithms.</td>
            <td className="px-4 py-2 border">Uses complex algorithms to calculate best paths.</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Security</td>
            <td className="px-4 py-2 border">Higher security; only admin controls routes.</td>
            <td className="px-4 py-2 border">Less secure due to automatic updates.</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Automation</td>
            <td className="px-4 py-2 border">Manual configuration.</td>
            <td className="px-4 py-2 border">Fully automated.</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Network Size</td>
            <td className="px-4 py-2 border">Suitable for small networks.</td>
            <td className="px-4 py-2 border">Suitable for large networks.</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Resources</td>
            <td className="px-4 py-2 border">Minimal additional resources needed.</td>
            <td className="px-4 py-2 border">Requires additional resources to run routing protocols.</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Failure Handling</td>
            <td className="px-4 py-2 border">Failure of the link disrupts rerouting.</td>
            <td className="px-4 py-2 border">Failure of the link does not interrupt rerouting.</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Bandwidth</td>
            <td className="px-4 py-2 border">Less bandwidth required.</td>
            <td className="px-4 py-2 border">More bandwidth required.</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Configuration</td>
            <td className="px-4 py-2 border">Difficult to configure.</td>
            <td className="px-4 py-2 border">Easy to configure.</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Other Name</td>
            <td className="px-4 py-2 border">Non-adaptive routing.</td>
            <td className="px-4 py-2 border">Adaptive routing.</td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
);

export default Home;
