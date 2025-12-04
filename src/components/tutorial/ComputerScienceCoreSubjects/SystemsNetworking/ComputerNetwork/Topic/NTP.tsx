import React from "react";

const NTPTheory: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= NTP ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Network Time Protocol (NTP)
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 23 Jul, 2025</p>

    {/* Introduction */}
    <p className="text-lg leading-relaxed">
      Network Time Protocol (NTP) is an application-layer protocol used to synchronize the clocks of computers across a network. It was developed by David Mills in 1981 at the University of Delaware. Accurate timekeeping ensures seamless communication and coordination between hosts on a TCP/IP network.
    </p>

    {/* Features */}
    <h2 className="text-3xl font-bold mt-6">Features of NTP</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Access to highly precise atomic and GPS clocks via NTP servers.</li>
      <li>Synchronizes system clocks using Coordinated Universal Time (UTC).</li>
      <li>Ensures reliable and consistent timekeeping across networked devices.</li>
      <li>Minimizes vulnerabilities in time-dependent information exchange.</li>
    </ul>

    {/* Working */}
    <h2 className="text-3xl font-bold mt-6">Working of NTP</h2>
    <p className="leading-relaxed">
      NTP operates in a hierarchical structure called strata. At the top are Stratum 0 devices, which are highly accurate clocks (atomic or GPS). These connect to Stratum 1 servers, which distribute accurate time to Stratum 2, Stratum 3, and so on. Client hosts synchronize their clocks with these servers to maintain consistent network time.
    </p>

    {/* Architecture */}
    <h2 className="text-3xl font-bold mt-6">Architecture of NTP</h2>
    <p className="leading-relaxed">
      The NTP architecture consists of:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Stratum 0: Highly accurate reference clocks (atomic/GPS).</li>
      <li>Stratum 1: Primary servers connected directly to Stratum 0 clocks.</li>
      <li>Stratum 2+: Secondary servers synchronizing with higher stratum servers.</li>
      <li>Clients: Hosts that request time synchronization from NTP servers.</li>
    </ul>

    {/* Applications */}
    <h2 className="text-3xl font-bold mt-6">Applications of NTP</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Synchronizing live audio and video in production systems.</li>
      <li>Development of broadcasting infrastructure.</li>
      <li>File system updates across multiple computers.</li>
      <li>Security mechanisms requiring accurate timestamps (e.g., Kerberos).</li>
      <li>Network performance monitoring and timestamp-based calculations.</li>
    </ul>

    {/* Advantages */}
    <h2 className="text-3xl font-bold mt-6">Advantages of NTP</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Ensures accurate time synchronization over the internet.</li>
      <li>Supports security systems requiring consistent time.</li>
      <li>Helps in troubleshooting and network acceleration.</li>
      <li>Maintains reliable timestamps for file systems and distributed applications.</li>
    </ul>

    {/* Disadvantages */}
    <h2 className="text-3xl font-bold mt-6">Disadvantages of NTP</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Synchronization is affected if NTP servers are down.</li>
      <li>Time zone differences can cause conflicts or errors.</li>
      <li>Accuracy may slightly degrade over long distances or heavy network traffic.</li>
      <li>Manipulation of NTP packets can compromise time synchronization.</li>
    </ul>

  </div>
);

export default NTPTheory;
