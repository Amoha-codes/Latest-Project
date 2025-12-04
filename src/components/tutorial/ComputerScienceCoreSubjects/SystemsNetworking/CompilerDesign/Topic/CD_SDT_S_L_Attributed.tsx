import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= S-Attributed and L-Attributed SDTs ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      S-Attributed and L-Attributed SDTs in Syntax Directed Translation
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 11 Jul, 2025</p>

    <p className="text-lg leading-relaxed">
      In Syntax-Directed Translation (SDT), semantic actions describe how information flows
      between nodes during parsing. SDTs are derived from context-free grammars with semantic 
      actions linked to grammar productions. They are used for tasks such as intermediate code 
      generation, type checking, and other compiler operations.
    </p>

    <p className="text-lg leading-relaxed">
      Based on how attributes are associated with grammar symbols and how information is propagated, 
      there are two main types of SDTs: <strong>S-attributed</strong> and <strong>L-attributed</strong> SDTs.
    </p>

    {/* ================= S-Attributed SDT ================= */}
    <h2 className="text-3xl font-bold mt-8">S-attributed SDT</h2>
    <p className="leading-relaxed">
      An S-attributed SDT (Synthesized Attributed SDT) is a Syntax-Directed Translation scheme 
      in which all attributes are synthesized. Synthesized attributes are computed from the 
      attributes of a node’s children and are passed up the parse tree from leaves to root.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Bottom-Up Evaluation:</strong> Synthesized attributes are evaluated bottom-up.</li>
      <li><strong>Suitable for Bottom-Up Parsing:</strong> Ideal for shift-reduce and other bottom-up parsers.</li>
      <li><strong>Simple and Efficient:</strong> No inherited attributes, making implementation straightforward.</li>
    </ul>

    <p className="leading-relaxed font-semibold">Example:</p>
    <p className="bg-gray-400 p-4 rounded-lg text-sm">
      Production: E → E1 + T <br/>
      Synthesized attribute: {'E.val = E1.val + T.val'}
    </p>

    {/* ================= L-Attributed SDT ================= */}
    <h2 className="text-3xl font-bold mt-8">L-attributed SDT</h2>
    <p className="leading-relaxed">
      An L-attributed SDT (Left-Attributed SDT) allows both synthesized and inherited attributes.
      Inherited attributes are passed from parent to children (top-down), while synthesized 
      attributes are computed as in S-attributed SDTs (bottom-up). Attributes in L-attributed SDTs 
      can only be inherited from the left in a production.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Top-Down Evaluation:</strong> Inherited attributes are evaluated top-down; synthesized attributes bottom-up.</li>
      <li><strong>Suitable for Top-Down Parsing:</strong> Ideal for recursive descent and other top-down parsers.</li>
      <li><strong>Allows More Complex Dependencies:</strong> Supports sophisticated semantic rules with both inherited and synthesized attributes.</li>
    </ul>

    <p className="leading-relaxed font-semibold">Example:</p>
    <p className="bg-gray-400 p-4 rounded-lg text-sm">
      Production: S → A B <br/>
      Inherited attribute: {'A.inh = f(S.inh)'} <br/>
      Synthesized attribute: {'B.synth = g(A.synth)'}
    </p>

    {/* ================= Conclusion ================= */}
    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      S-attributed and L-attributed SDTs play key roles in compiler design. S-attributed SDTs are 
      simpler and effective with bottom-up parsing, while L-attributed SDTs are flexible, supporting 
      both inherited and synthesized attributes for top-down parsing. Understanding these distinctions 
      is essential to design effective translation schemes.
    </p>

  </div>
);

export default Home;
