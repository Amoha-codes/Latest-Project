import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Title ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Pipelining: Dependencies and Data Hazards
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 12 Nov, 2025</p>

    {/* ================= Introduction ================= */}
    <p className="text-lg leading-relaxed">
      In a pipelined processor, dependencies between instructions can introduce stalls. There are mainly three types of dependencies:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Structural Dependency</li>
      <li>Control Dependency</li>
      <li>Data Dependency</li>
    </ul>
    <p className="leading-relaxed">
      A stall is a cycle in the pipeline without new input.
    </p>

    {/* ================= Structural Dependency ================= */}
    <h2 className="text-3xl font-bold mt-8">Structural Dependency</h2>
    <p className="leading-relaxed">
      Structural dependency occurs due to resource conflicts when multiple instructions try to access the same resource (register, memory, or ALU) in the same cycle.
    </p>
    <p className="leading-relaxed font-semibold">Example:</p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      Instruction / Cycle: 1 2 3 4 5 <br/>
      I1: IF(Mem) ID EX Mem <br/>
      I2: &nbsp;&nbsp;IF(Mem) ID EX <br/>
      I3: &nbsp;&nbsp;&nbsp;&nbsp;IF(Mem) ID EX <br/>
      I4: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IF(Mem) ID
    </p>
    <p className="leading-relaxed">
      In cycle 4, I1 and I4 access the same memory, causing a stall.
    </p>

    <h3 className="text-2xl font-bold mt-4">Solution: Renaming</h3>
    <p className="leading-relaxed">
      Divide memory into two independent modules: Code Memory (CM) for instructions and Data Memory (DM) for operands.
    </p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      Instruction / Cycle: 1 2 3 4 5 6 7 <br/>
      I1: IF(CM) ID EX DM WB <br/>
      I2: &nbsp;&nbsp;IF(CM) ID EX DM WB <br/>
      I3: &nbsp;&nbsp;&nbsp;&nbsp;IF(CM) ID EX DM WB <br/>
      I4: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IF(CM) ID EX DM
    </p>

    {/* ================= Control Dependency ================= */}
    <h2 className="text-3xl font-bold mt-8">Control Dependency (Branch Hazards)</h2>
    <p className="leading-relaxed">
      Control dependency occurs during branch, call, or jump instructions. The processor may not know the target address immediately, causing incorrect instruction fetches.
    </p>
    <p className="leading-relaxed font-semibold">Example:</p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      100: I1 <br/>
      101: I2 (JMP 250) <br/>
      102: I3 <br/>
      250: BI1
    </p>
    <p className="leading-relaxed">
      Expected output: I1 → I2 → BI1. Without delay slots, instructions execute incorrectly.
    </p>

    <h3 className="text-2xl font-bold mt-4">Solution: Delay Slot / Branch Prediction</h3>
    <p className="leading-relaxed">
      Introduce a delay slot until the branch target address is known, or use branch prediction to reduce stalls.
    </p>

    {/* ================= Data Dependency ================= */}
    <h2 className="text-3xl font-bold mt-8">Data Dependency (Data Hazards)</h2>
    <p className="leading-relaxed">
      Consider an ADD instruction S: ADD R1, R2, R3. 
      Addresses read = {`R2, R3`}, addresses written = {`R1`} 
      Instruction S2 depends on S1 if S2 reads a location before S1 writes it (Bernstein condition).
    </p>

    <h3 className="text-2xl font-bold mt-4">Types of Data Dependency</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Flow (True) Dependence: Read after Write (RAW)</li>
      <li>Anti-dependence: Write after Read (WAR)</li>
      <li>Output Dependence: Write after Write (WAW)</li>
    </ul>

    <h3 className="text-2xl font-bold mt-4">Example:</h3>
    <p className="leading-relaxed font-semibold">Instructions:</p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      I1: ADD R1, R2, R3 <br/>
      I2: SUB R4, R1, R2
    </p>
    <p className="leading-relaxed">
      Without operand forwarding, I2 reads the old value of R1, causing a stall.
    </p>

    <h3 className="text-2xl font-bold mt-4">Solution: Operand Forwarding</h3>
    <p className="leading-relaxed">
      Use intermediate registers between pipeline stages to provide the new value directly to dependent instructions, reducing stalls. Works best for ALU-type instructions.
    </p>

    <h3 className="text-2xl font-bold mt-4">Summary of Data Hazards</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>RAW: Instruction J reads before instruction I writes. E.g., I: R2 ← R1 + R3, J: R4 ← R2 + R3</li>
      <li>WAR: Instruction J writes before instruction I reads. E.g., I: R2 ← R1 + R3, J: R3 ← R4 + R5</li>
      <li>WAW: Instruction J writes before instruction I writes. E.g., I: R2 ← R1 + R3, J: R2 ← R4 + R5</li>
      <li>WAR and WAW typically occur during out-of-order execution.</li>
    </ul>

  </div>
);

export default Home;
