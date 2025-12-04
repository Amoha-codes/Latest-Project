import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= NPDA for L = {a^n b^m c^n} ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      NPDA for Accepting the Language L = {'{aⁿ bᵐ cⁿ | m,n ≥ 1}'}
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 14 Apr, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      This NPDA accepts strings where the number of <strong>a's</strong> equals the number of <strong>c's</strong>,
      and the number of <strong>b's</strong> is independent. The order must be all a's first, then b's, then c's.
      A stack is used to track the number of a's for matching with c's.
    </p>

    {/* PDA Definition */}
    <h2 className="text-3xl font-bold mt-8">PDA Definition</h2>
    <p className="leading-relaxed">
      M = (Q, Σ, Γ, δ, q0, Z, F) where:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Q = {'{q0, q1, q2, qf}'} (Set of states)</li>
      <li>Σ = {'{a, b, c}'} (Input alphabet)</li>
      <li>Γ = {'{a, z}'} (Stack alphabet, z is initial stack symbol)</li>
      <li>q0 = Initial state</li>
      <li>Z = Initial stack symbol</li>
      <li>F = {'{qf}'} (Final state)</li>
    </ul>

    {/* Approach */}
    <h2 className="text-3xl font-bold mt-8">Approach</h2>
    <p className="leading-relaxed">
      <strong>Step 1:</strong> For each 'a' in input, push 'a' onto the stack.<br/>
      <strong>Step 2:</strong> For each 'b', do not change the stack (skip), just change state if necessary.<br/>
      <strong>Step 3:</strong> For each 'c', pop one 'a' from the stack. If all a's are matched and stack is empty at the end, the string is accepted.
    </p>

    {/* Stack Transitions */}
    <h2 className="text-3xl font-bold mt-8">Stack Transition Functions (δ)</h2>
    <p className="leading-relaxed">
      δ(q0, a, z) ⊢ (q0, az)<br/>
      δ(q0, a, a) ⊢ (q0, aa)<br/>
      δ(q0, b, a) ⊢ (q1, a)<br/>
      δ(q1, b, a) ⊢ (q1, a)<br/>
      δ(q1, c, a) ⊢ (q2, ϵ)<br/>
      δ(q2, c, a) ⊢ (q2, ϵ)<br/>
      δ(q2, ϵ, z) ⊢ (qf, z)
    </p>

    {/* Notes */}
    <h2 className="text-3xl font-bold mt-8">Notes</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>q0 = Initial state, qf = Final state</li>
      <li>ϵ = Pop operation</li>
      <li>This is a <strong>Non-deterministic PDA (NPDA)</strong> as it may make transitions without consuming input (ϵ-moves).</li>
    </ul>

    {/* Conclusion */}
    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      This NPDA successfully accepts the language L = {'{aⁿ bᵐ cⁿ | m,n ≥ 1}'}, maintaining the count of a's using a stack, skipping b's, and matching each c with an a.
    </p>

  </div>
);

export default Home;
