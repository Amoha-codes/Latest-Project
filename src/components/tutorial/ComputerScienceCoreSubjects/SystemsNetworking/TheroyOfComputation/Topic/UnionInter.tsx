import React from 'react';

const Home: React.FC = () => (

    <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

  <h1 className="text-4xl font-extrabold border-b-2 pb-2">
    Union and Intersection of Regular Languages with CFL
  </h1>

  <p className="text-sm text-gray-500">Last Updated : 05 May, 2025</p>

  <p className="text-lg leading-relaxed">
    Context-Free Languages (CFLs) are generated using Context-Free Grammars (CFGs)
    and recognized by Pushdown Automata (PDAs). Regular languages, on the other hand,
    are represented using finite automata or regular expressions. Understanding how
    these two classes behave under union and intersection helps in determining their
    closure properties.
  </p>

  <h2 className="text-3xl font-bold mt-8">Union of Regular Language with CFL</h2>

  <p className="leading-relaxed">
    Every regular language is also a context-free language. Therefore, the union of 
    a Regular Language (RL) and a Context-Free Language (CFL) always results in a CFL.
  </p>

  <h3 className="text-2xl font-semibold mt-6">Example 1</h3>
  <p className="leading-relaxed">
    L₁ = &#123; 0*1* &#125; is a regular language<br />
    L₂ = &#123; 0ᵐ1ᵐ | m ≥ 0 &#125; is a context-free language
  </p>

  <p>
    L = L₁ ∪ L₂ is context-free because both L₁ and L₂ are CFLs.
  </p>

  <h3 className="text-2xl font-semibold mt-6">Example 2</h3>
  <p className="leading-relaxed">
    RL = &#123; a, aa, aaa, ... &#125; (all strings of only a’s)<br />
    CFL = &#123; ab, aabb, ababab, ... &#125; (equal number of a’s and b’s)
  </p>

  <p>
    Their union contains strings that are either all a’s OR have equal a’s and b’s.
  </p>

  <p className="leading-relaxed">
    Example strings:<br />
    a → in RL<br />
    aa → in RL<br />
    ab → in CFL<br />
    aabb → in CFL<br />
    abab → in CFL<br />
  </p>

  <p>
    Thus, the union of a regular language and a CFL is always a CFL.
  </p>

  <h2 className="text-3xl font-bold mt-10">Intersection of Regular Language with CFL</h2>

  <p className="leading-relaxed">
    The intersection of a Regular Language (RL) and a Context-Free Language (CFL)
    is always a CFL. This results from the fact that a PDA can simulate both the RL
    (using finite control) and the CFL part simultaneously.
  </p>

  <h3 className="text-2xl font-semibold mt-6">Example 1</h3>
  <p className="leading-relaxed">
    L₁ = &#123; 0*1* &#125; (regular)<br />
    L₂ = &#123; 0ᵐ1ᵐ | m ≥ 0 &#125; (CFL)
  </p>

  <p>
    L = L₁ ∩ L₂ = &#123; 0ᵐ1ᵐ | m ≥ 0 &#125;, which is a CFL.
  </p>

  <h3 className="text-2xl font-semibold mt-6">Example 2</h3>
  <p className="leading-relaxed">
    RL = &#123; a, aa, aaa, ... &#125;<br />
    CFL = &#123; ab, aabb, ababab, ... &#125;
  </p>

  <p className="leading-relaxed">
    Intersection contains strings that:<br />
    ✔ start with 'a'<br />
    ✔ and have equal number of a’s and b’s
  </p>

  <p className="leading-relaxed">
    Example strings:<br />
    ab → starts with a and a = b<br />
    aabb → starts with a and a = b<br />
    abab → starts with a and a = b<br />
  </p>

  <p>
    Hence, the intersection of a regular language and a CFL always results in a CFL.
  </p>
  
</div>

);

export default Home;