import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Simultaneous vs Hierarchical Access Memory ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Difference between Simultaneous and Hierarchical Access Memory Organisations
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 11 Jul, 2025</p>

    <p className="text-lg leading-relaxed">
      Memory organization is important in computer system design to enhance performance and efficiency.  
      CPU accesses different levels of memory either using Simultaneous Access Memory Organization or Hierarchical Access Memory Organization.
    </p>

    <h2 className="text-3xl font-bold mt-8">Simultaneous Access Memory Organization</h2>
    <p className="leading-relaxed">
      In this organization, CPU can access data simultaneously from all levels of memory. If data is not found at one level, the CPU can check other levels at the same time.
    </p>

    <h3 className="text-2xl font-bold mt-4">Average Memory Access Time</h3>
    <p className="leading-relaxed">
      For three memory levels L1, L2, L3 with hit ratios H1, H2, H3 and access times T1, T2, T3:
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      AMAT = H1*T1 + (1-H1)*H2*T2 + (1-H1)*(1-H2)*H3*T3  
      (Here H3 = 1 as data is guaranteed in L3 if not found in L1 or L2)
    </p>

    <h2 className="text-3xl font-bold mt-8">Hierarchical Access Memory Organization</h2>
    <p className="leading-relaxed">
      In this organization, CPU is only directly connected to Level 1 memory. Data from higher levels (L2, L3, ...) is transferred to L1 before CPU can access it.
    </p>

    <h3 className="text-2xl font-bold mt-4">Average Memory Access Time</h3>
    <p className="leading-relaxed">
      For three memory levels L1, L2, L3 with hit ratios H1, H2, H3 and access times T1, T2, T3:
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      AMAT = H1*T1 + (1-H1)*H2*(T1+T2) + (1-H1)*(1-H2)*H3*(T1+T2+T3)  
      (Here H3 = 1)
    </p>

    <h2 className="text-3xl font-bold mt-8">Key Differences</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>CPU Connection:</strong> Simultaneous: CPU connected to all levels. Hierarchical: CPU connected only to L1.</li>
      <li><strong>Data Access:</strong> Simultaneous: All levels accessed together. Hierarchical: CPU accesses only L1; higher levels feed data to L1.</li>
      <li><strong>Miss Handling:</strong> Simultaneous: CPU can directly access higher levels on a miss. Hierarchical: Data must move from higher levels to L1 before CPU access.</li>
      <li><strong>AMAT Calculation:</strong> Simultaneous: T = H1*T1 + (1-H1)*H2*T2. Hierarchical: T = H1*T1 + (1-H1)*H2*(T1+T2).</li>
      <li><strong>Usage:</strong> Hierarchical is default in most systems for better locality. Simultaneous is used in Write Through Cache.</li>
      <li><strong>Hit Ratio:</strong> Last level always has H = 1 in both organizations.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      Simultaneous Access allows CPU to check all memory levels at once, improving access for some cache designs.  
      Hierarchical Access restricts CPU to L1 access first and uses locality to fetch from higher levels.  
      Both approaches enhance system performance and are applied according to design requirements.
    </p>

  </div>
);

export default Home;
