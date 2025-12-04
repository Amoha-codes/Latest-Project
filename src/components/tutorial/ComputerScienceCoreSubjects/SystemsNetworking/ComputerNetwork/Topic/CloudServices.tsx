import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Cloud Based Services ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Cloud Based Services
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 11 Apr, 2025</p>

    {/* Introduction */}
    <p className="text-lg leading-relaxed">
      Cloud computing means using the internet to store, manage, and process
      data instead of using local computers or servers. Cloud providers like
      Amazon, Google, and Microsoft store your data on remote servers and
      charge based on usage.
    </p>

    <h2 className="text-3xl font-bold mt-8">Types of Cloud Computing</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Software as a Service (SaaS)</li>
      <li>Platform as a Service (PaaS)</li>
      <li>Infrastructure as a Service (IaaS)</li>
      <li>Anything / Everything as a Service (XaaS)</li>
      <li>Function as a Service (FaaS)</li>
    </ul>

    {/* ------------------------------ SaaS ------------------------------ */}
    <h2 className="text-3xl font-bold mt-8">1. Software as a Service (SaaS)</h2>
    <p className="leading-relaxed">
      SaaS allows users to access software over the internet without
      installation, maintenance, or updates. Everything is handled by the
      service provider.
    </p>

    <p className="leading-relaxed mt-4 font-semibold">Example:</p>
    <p className="leading-relaxed">
      Google Docs—accessible through a browser with automatic updates and
      cloud storage.
    </p>

    <h3 className="text-2xl font-bold mt-4">Advantages of SaaS</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Cost-effective and pay-as-you-go.</li>
      <li>No installation required.</li>
      <li>Accessible from anywhere.</li>
      <li>Automatic updates.</li>
      <li>Highly scalable.</li>
    </ul>

    <h3 className="text-2xl font-bold mt-4">Disadvantages of SaaS</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Limited customization.</li>
      <li>Requires stable internet.</li>
      <li>Security concerns.</li>
      <li>Less control over data.</li>
    </ul>

    {/* ------------------------------ PaaS ------------------------------ */}
    <h2 className="text-3xl font-bold mt-8">2. Platform as a Service (PaaS)</h2>
    <p className="leading-relaxed">
      PaaS provides a full development environment including OS, storage,
      servers, and tools. Developers focus only on building applications.
    </p>

    <p className="leading-relaxed mt-4 font-semibold">Example:</p>
    <p className="leading-relaxed">
      Renting a ready-to-use venue instead of building your own—similar to how
      PaaS provides an environment for app development.
    </p>

    <h3 className="text-2xl font-bold mt-4">Advantages of PaaS</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Simple and convenient.</li>
      <li>Cost-effective.</li>
      <li>Supports complete app lifecycle.</li>
      <li>Reduces complexity.</li>
    </ul>

    <h3 className="text-2xl font-bold mt-4">Disadvantages of PaaS</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Limited control over infrastructure.</li>
      <li>Dependency on provider.</li>
      <li>Limited flexibility for some workloads.</li>
    </ul>

    {/* ------------------------------ IaaS ------------------------------ */}
    <h2 className="text-3xl font-bold mt-8">3. Infrastructure as a Service (IaaS)</h2>
    <p className="leading-relaxed">
      IaaS offers virtualized computing resources like servers, storage, and
      networking on a rent-based model.
    </p>

    <p className="leading-relaxed mt-4 font-semibold">Example:</p>
    <p className="leading-relaxed">
      Renting a cloud server to host your website instead of buying physical
      hardware.
    </p>

    <h3 className="text-2xl font-bold mt-4">Advantages of IaaS</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>No hardware investment.</li>
      <li>Cost-effective.</li>
      <li>Better security from cloud provider.</li>
      <li>No maintenance needed.</li>
    </ul>

    <h3 className="text-2xl font-bold mt-4">Disadvantages of IaaS</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Limited control over hardware.</li>
      <li>User is responsible for securing data.</li>
      <li>May not be available in certain regions.</li>
    </ul>

    {/* ------------------------------ XaaS ------------------------------ */}
    <h2 className="text-3xl font-bold mt-8">4. Anything as a Service (XaaS)</h2>
    <p className="leading-relaxed">
      XaaS includes all cloud services combined—software, platform,
      infrastructure, storage, databases, etc.
    </p>

    <h3 className="text-2xl font-bold mt-4">Advantages of XaaS</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Highly scalable.</li>
      <li>Flexible and customizable.</li>
      <li>Cost-effective.</li>
    </ul>

    <h3 className="text-2xl font-bold mt-4">Disadvantages of XaaS</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Dependency on provider.</li>
      <li>Limited customization for certain workloads.</li>
      <li>Integration issues with legacy systems.</li>
    </ul>

    {/* ------------------------------ FaaS ------------------------------ */}
    <h2 className="text-3xl font-bold mt-8">5. Function as a Service (FaaS)</h2>
    <p className="leading-relaxed">
      FaaS lets you run small blocks of code (functions) without managing any
      servers. Code runs only when triggered by events—commonly known as
      serverless computing.
    </p>

    <p className="leading-relaxed mt-4 font-semibold">Example:</p>
    <p className="leading-relaxed">
      In a photo app, an image-resize function runs only when a user uploads a
      photo.
    </p>

    <h3 className="text-2xl font-bold mt-4">Advantages of FaaS</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Auto-scaling.</li>
      <li>Pay only per execution.</li>
      <li>Simplified code management.</li>
      <li>No server maintenance.</li>
      <li>Supports multiple programming languages.</li>
    </ul>

    <h3 className="text-2xl font-bold mt-4">Disadvantages of FaaS</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Cold start delays.</li>
      <li>Limited infrastructure control.</li>
      <li>Security concerns.</li>
      <li>Limited scalability for heavy workloads.</li>
    </ul>

    {/* Comparison Section */}
    <h2 className="text-3xl font-bold mt-8">FaaS vs PaaS</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Scalability:</strong> FaaS auto-scales; PaaS requires configuration.</li>
      <li><strong>Pricing:</strong> FaaS charges per function execution; PaaS charges for active runtime.</li>
    </ul>

    {/* Conclusion */}
    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      Cloud computing has transformed how data is stored, managed, and
      processed. With SaaS, PaaS, IaaS, XaaS, and FaaS, users can choose the
      best model based on their needs. As cloud technology evolves, automation,
      security, and integration will continue to improve.
    </p>

    {/* FAQs */}
    <h2 className="text-3xl font-bold mt-8">Frequently Asked Questions</h2>

    <h3 className="text-2xl font-bold mt-4">How is SaaS different from PaaS and IaaS?</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>SaaS:</strong> Use software online without installation.</li>
      <li><strong>PaaS:</strong> Provides platform for building apps.</li>
      <li><strong>IaaS:</strong> Provides virtual hardware like servers.</li>
    </ul>

    <h3 className="text-2xl font-bold mt-4">Advantages of Cloud Computing</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Cost-effective.</li>
      <li>Scalable and flexible.</li>
      <li>Reduces IT maintenance costs.</li>
      <li>Accessible from anywhere.</li>
      <li>Automatic updates.</li>
    </ul>

    <h3 className="text-2xl font-bold mt-4">Disadvantages of Cloud Computing</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Security risks.</li>
      <li>Internet dependency.</li>
      <li>Limited customization.</li>
      <li>Compliance challenges.</li>
    </ul>

  </div>
);

export default Home;
