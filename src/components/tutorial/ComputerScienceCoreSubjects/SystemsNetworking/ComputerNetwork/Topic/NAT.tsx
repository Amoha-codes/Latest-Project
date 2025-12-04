import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= NAT THEORY ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Network Address Translation (NAT)
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 08 Oct, 2025</p>

    <p className="text-lg leading-relaxed">
      Network Address Translation (NAT) is a networking technique that allows multiple
      devices within a private network to access external networks (like the Internet)
      using a single public IP address. NAT translates private IP addresses into public
      IP addresses and vice versa, helping conserve IPv4 addresses and improving network
      security by hiding internal devices.
    </p>

    <p className="leading-relaxed">
      <strong>Note:</strong> IPv4 provides only 2³² (around 4.3 billion) addresses, which
      is insufficient for the massive number of connected devices. NAT prevents IP
      exhaustion by allowing thousands of private devices to share limited public IPs.
    </p>

    {/* Working of NAT */}
    <h2 className="text-3xl font-bold mt-8">Working of NAT</h2>

    <p className="leading-relaxed">
      When a device inside a private network sends a request to the Internet, the
      NAT-enabled router replaces the private IP with its public IP and assigns a unique
      port number. This mapping is stored in the NAT table.
    </p>

    <p className="leading-relaxed">
      When the external server responds, NAT looks at the stored entry, identifies the
      correct device, restores its private IP and port, and forwards the response.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Multiple devices share a single public IP</li>
      <li>Internal private addresses remain hidden</li>
      <li>Port numbers uniquely identify traffic</li>
    </ul>

    {/* Examples */}
    <h2 className="text-3xl font-bold mt-8">Examples of NAT Usage</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Connecting Private Networks to the Internet:</strong> A NAT-enabled router
        translates all internal private IPs to a single public IP.
      </li>
      <li>
        <strong>Linking Multiple Office Locations:</strong> NAT translates IPs across
        branches while allowing each to use private address schemes.
      </li>
    </ul>

    {/* Why NAT Masks Port Numbers */}
    <h2 className="text-3xl font-bold mt-8">Why NAT Masks Port Numbers?</h2>

    <p className="leading-relaxed">
      Suppose two internal hosts request the same destination on the same port at the
      same time. If NAT only translated IPs but not ports, their packets would look
      identical when sent out using the public IP.
    </p>

    <p className="leading-relaxed">
      When replies arrive, NAT wouldn’t know which internal host they belong to.
    </p>

    <p className="leading-relaxed">
      To avoid this, NAT masks the source port number and creates a unique NAT table entry.
    </p>

    {/* Inside & Outside Addresses */}
    <h2 className="text-3xl font-bold mt-8">NAT Inside and Outside Addresses</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Inside Local Address:</strong> Private IP of a device inside the network.
      </li>
      <li>
        <strong>Inside Global Address:</strong> Public IP representing inside devices to
        the outside world.
      </li>
      <li>
        <strong>Outside Local Address:</strong> IP of the external host as seen internally.
      </li>
      <li>
        <strong>Outside Global Address:</strong> Actual public IP of the external host.
      </li>
    </ul>

    {/* Types of NAT */}
    <h2 className="text-3xl font-bold mt-8">Types of NAT</h2>

    <h3 className="text-xl font-semibold mt-4">1. Static NAT</h3>
    <p className="leading-relaxed">
      Maps one private IP to one public IP (1-to-1 mapping). Common in hosting but not
      cost-effective for large networks.
    </p>

    <h3 className="text-xl font-semibold mt-4">2. Dynamic NAT</h3>
    <p className="leading-relaxed">
      Maps private IPs to public IPs from a predefined pool. If the pool is full, new
      requests are dropped.
    </p>

    <h3 className="text-xl font-semibold mt-4">3. Port Address Translation (PAT)</h3>
    <p className="leading-relaxed">
      Also called <strong>NAT Overload</strong>. Multiple private devices share a single
      public IP using unique port numbers. Most widely used and highly efficient.
    </p>

    {/* NAT Techniques */}
    <h2 className="text-3xl font-bold mt-8">NAT Techniques</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Static Mapping</li>
      <li>IP Masquerading</li>
      <li>Translation Table Mapping</li>
      <li>PAT (Port Address Translation)</li>
      <li>Round-Robin Mapping</li>
    </ul>

    {/* Pros */}
    <h2 className="text-3xl font-bold mt-8">Pros of NAT</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Conserves IPv4 addresses</li>
      <li>Enhances security by hiding internal IPs</li>
      <li>Allows multiple devices to share one public IP</li>
      <li>Simplifies administration when merging networks</li>
    </ul>

    {/* Cons */}
    <h2 className="text-3xl font-bold mt-8">Cons of NAT</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Increases processing load on routers</li>
      <li>May cause issues in applications requiring end-to-end connectivity (VoIP, gaming)</li>
      <li>Hard to trace individual users behind one public IP</li>
    </ul>

  </div>
);

export default Home;
