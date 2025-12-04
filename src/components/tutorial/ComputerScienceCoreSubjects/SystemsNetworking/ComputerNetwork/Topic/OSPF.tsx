import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= OSPF THEORY ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Open Shortest Path First (OSPF) Protocol States
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 11 Jul, 2025</p>

    {/* Intro */}
    <p className="text-lg leading-relaxed">
      Open Shortest Path First (OSPF) is a link-state routing protocol used to
      determine the best path between routers within an Autonomous System (AS).
      OSPF routers form neighbor relationships and exchange link-state
      information to build a complete network topology. Understanding the
      transitions between OSPF protocol states is essential for optimization and
      troubleshooting.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Uses Hello packets for neighbor discovery.</li>
      <li>Neighbor states form the basis of OSPF adjacencies.</li>
      <li>Adjacencies require matching Area IDs, timers, MTU, and authentication.</li>
      <li>Distinguishing between neighbors and adjacent routers is crucial.</li>
      <li>Stable OSPF states help ensure optimized routing.</li>
    </ul>

    {/* Terms */}
    <h2 className="text-3xl font-bold mt-8">Open Shortest Path First (OSPF) Terms</h2>

    <h3 className="text-2xl font-semibold mt-4">Router ID</h3>
    <p className="leading-relaxed">
      The Router ID is the highest active IP address on the router. OSPF prefers
      the highest loopback address; if none is configured, it uses the highest
      active IP address.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Router Priority</h3>
    <p className="leading-relaxed">
      An 8-bit value used during DR/BDR elections. Higher priority increases
      chances of becoming the DR.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Designated Router (DR)</h3>
    <p className="leading-relaxed">
      The DR reduces the number of adjacencies in broadcast networks and is
      responsible for distributing LSAs.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Backup Designated Router (BDR)</h3>
    <p className="leading-relaxed">
      Acts as a backup to the DR. If the DR fails, the BDR takes over.
    </p>

    <h3 className="text-2xl font-semibold mt-4">DR and BDR Election Criteria</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Router with the highest priority becomes DR.</li>
      <li>If tied, the router with the highest Router ID becomes DR.</li>
    </ul>

    {/* States */}
    <h2 className="text-3xl font-bold mt-8">Open Shortest Path First (OSPF) States</h2>

    {/* Down State */}
    <h3 className="text-2xl font-semibold mt-4">1. Down State</h3>
    <p className="leading-relaxed">
      No Hello packets have been received. This is the initial state before OSPF
      communication starts. It does not mean the interface is physically down.
    </p>

    {/* Init */}
    <h3 className="text-2xl font-semibold mt-4">2. Init State</h3>
    <p className="leading-relaxed">
      The router has received a Hello packet but is not yet listed in the
      neighbor&apos;s Hello packet—no bidirectional communication yet.
    </p>

    {/* Two-Way */}
    <h3 className="text-2xl font-semibold mt-4">3. Two-Way State</h3>
    <p className="leading-relaxed">
      Bidirectional communication is confirmed when routers see themselves in
      each other's Hello packets. DR/BDR elections occur here in broadcast
      networks.
    </p>

    {/* ExStart */}
    <h3 className="text-2xl font-semibold mt-4">4. ExStart State</h3>
    <p className="leading-relaxed">
      Master/Slave roles are negotiated for Database Description (DBD)
      exchange. The router with the higher Router ID becomes the master.
    </p>

    {/* Exchange */}
    <h3 className="text-2xl font-semibold mt-4">5. Exchange State</h3>
    <p className="leading-relaxed">
      Routers exchange full DBD packets containing LSA headers. During this,
      routers build Link-State Request (LSR) lists for missing LSAs.
    </p>

    {/* Loading */}
    <h3 className="text-2xl font-semibold mt-4">6. Loading State</h3>
    <p className="leading-relaxed">
      Routers send Link-State Request (LSR) packets to request missing LSAs.
      The neighbor responds with Link-State Update (LSU) packets, followed by
      Link-State Acknowledgments (LSAcks).
    </p>

    {/* Full */}
    <h3 className="text-2xl font-semibold mt-4">7. Full State</h3>
    <p className="leading-relaxed">
      Routers reach full adjacency. Their Link-State Databases (LSDBs) are now
      synchronized, allowing SPF (Dijkstra) calculations for best path
      selection.
    </p>

  </div>
);

export default Home;
