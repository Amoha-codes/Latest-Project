import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Title ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Dependencies and Data Hazards in Pipelining
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 12 Nov, 2025</p>

    {/* ================= Introduction ================= */}
    <p className="text-lg leading-relaxed">
      In pipelined processors, multiple instructions execute simultaneously across different stages. 
      However, this parallelism can introduce conflicts known as <strong>dependencies</strong> and 
      <strong> data hazards</strong>, which may create stalls and performance penalties. This topic 
      explains all types of dependencies, hazards, and their hardware-level solutions.
    </p>

    {/* ================= Types of Dependencies ================= */}
    <h2 className="text-3xl font-bold mt-8">Types of Dependencies in a Pipelined Processor</h2>

    <p className="leading-relaxed">
      There are mainly <strong>three types of dependencies</strong> in a pipelined system:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Structural Dependency</li>
      <li>Control Dependency</li>
      <li>Data Dependency</li>
    </ul>

    <p className="leading-relaxed">
      These dependencies may introduce pipeline <strong>stalls</strong>.  
      A <strong>stall</strong> is a pipeline cycle without new instruction input.
    </p>

    {/* ================= Structural Dependency ================= */}
    <h2 className="text-3xl font-bold mt-8">1. Structural Dependency</h2>
    <p className="leading-relaxed">
      A structural dependency occurs when two or more instructions attempt to access the 
      same hardware resource (memory, register, ALU) in the same clock cycle.
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      Example Scenario:<br />
      In cycle 4, instructions I1 and I4 both need Memory → Resource conflict → Stall occurs.
    </p>

    <h3 className="text-2xl font-semibold mt-6">Solution: Hardware Renaming</h3>
    <p className="leading-relaxed">
      The memory is divided into two modules:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Code Memory (CM)</strong> – stores instructions</li>
      <li><strong>Data Memory (DM)</strong> – stores operands</li>
    </ul>

    <p className="leading-relaxed">
      This prevents instruction fetch and data access from conflicting.
    </p>

    {/* ================= Control Dependency ================= */}
    <h2 className="text-3xl font-bold mt-8">2. Control Dependency (Branch Hazards)</h2>

    <p className="leading-relaxed">
      Control dependency occurs when the pipeline encounters control flow instructions like 
      BRANCH, JUMP, or CALL. The target address is usually determined only after the 
      <strong>ID stage</strong>. Until then, unwanted instructions may enter the pipeline.
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      Example: JMP instruction target known after ID stage → Unwanted instruction I3 gets fetched.
    </p>

    <h3 className="text-2xl font-semibold mt-6">Solution: Delay Slot / Stalling</h3>
    <p className="leading-relaxed">
      Instruction fetch is paused until the branch target is known. This introduces 
      a <strong>stall cycle</strong>.
    </p>

    <h3 className="text-2xl font-semibold mt-6">Solution: Branch Prediction</h3>
    <p className="leading-relaxed">
      The processor predicts which branch will be taken at the IF stage to eliminate stalls.  
      If the prediction is wrong → branch penalty occurs.
    </p>

    <p className="leading-relaxed">
      <strong>Branch Penalty = Number of stall cycles caused by branch</strong><br />
      If target known after k-th stage → Penalty = k − 1 stalls
    </p>

    {/* ================= Data Dependency ================= */}
    <h2 className="text-3xl font-bold mt-8">3. Data Dependency (Data Hazard)</h2>

    <p className="leading-relaxed">
      Data dependency occurs when an instruction needs a value that a previous instruction 
      has not yet written. This is called the <strong>Bernstein Condition</strong>.
    </p>

    <h3 className="text-2xl font-semibold mt-6">Types of Data Dependencies</h3>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Flow (True) Dependence – RAW</strong><br />
        Output of S1 is input to S2
      </li>
      <li>
        <strong>Anti-dependence – WAR</strong><br />
        S1 reads something that S2 overwrites
      </li>
      <li>
        <strong>Output Dependence – WAW</strong><br />
        Both instructions write to same register
      </li>
    </ul>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      Example:<br />
      I1: ADD R1, R2, R3<br />
      I2: SUB R4, R1, R2 (needs updated R1, but gets old value)
    </p>

    <h3 className="text-2xl font-semibold mt-6">Solution: Operand Forwarding</h3>
    <p className="leading-relaxed">
      Intermediate outputs stored in interface registers between stages are forwarded directly 
      to dependent instructions. This eliminates many stalls.
    </p>

    <p className="leading-relaxed font-semibold">
      Note: Forwarding works only for ALU-based dependencies.
    </p>

    {/* ================= Data Hazards ================= */}
    <h2 className="text-3xl font-bold mt-8">Data Hazards</h2>

    <p className="leading-relaxed">
      Data hazards occur when pipelined instructions read/write registers that other 
      instructions are also accessing. They delay execution and must be resolved.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>RAW (Read After Write)</strong><br />
        J reads before I writes (True dependency)
      </li>
      <li>
        <strong>WAR (Write After Read)</strong><br />
        J writes before I reads (Anti-dependency)
      </li>
      <li>
        <strong>WAW (Write After Write)</strong><br />
        J writes before I writes (Output dependency)
      </li>
    </ul>

    <p className="leading-relaxed">
      <strong>RAW is the most common hazard.</strong><br />
      WAR & WAW mainly occur in out-of-order processors.
    </p>

  </div>
);

export default Home;
