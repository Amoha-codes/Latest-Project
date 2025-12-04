import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= SLR, CLR and LALR Parsers ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      SLR, CLR and LALR Parsers
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 23 Jul, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Parsing is a fundamental process in compiler design that helps analyze and validate the syntax 
      of programming languages. It converts a sequence of tokens into a structured format, often 
      represented as a parse tree. Among various parsing techniques, LR parsers are widely used due 
      to their efficiency and ability to handle a broad class of grammars.
    </p>

    <p className="leading-relaxed">
      LR parsers are a type of bottom-up parsers that construct the parse tree from the leaves (tokens) 
      to the root (start symbol). They are deterministic and capable of handling context-free grammars 
      (CFGs) efficiently. The three main types of LR parsers include:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>SLR (Simple LR) Parser – The most basic LR parser, using LR(0) items and FOLLOW sets for table construction.</li>
      <li>CLR (Canonical LR) Parser – A more powerful parser that utilizes LR(1) items to resolve conflicts and recognize a broader range of grammars.</li>
      <li>LALR (Look-Ahead LR) Parser – A memory-optimized version of CLR that merges states to reduce table size while maintaining most of its parsing power.</li>
    </ul>

    <p className="leading-relaxed">
      Each of these parsers differs in terms of complexity, power, and efficiency.
    </p>

    {/* Bottom-Up Parsing */}
    <h2 className="text-3xl font-bold mt-8">Bottom-Up Parsing</h2>
    <p className="leading-relaxed">
      Bottom-up parsing is a method used in compilers to analyze and understand code. It starts with 
      the smallest parts of a program (tokens) and gradually builds up to form the complete structure 
      (syntax tree). In bottom-up parsing:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Reads the input from left to right.</li>
      <li>Groups tokens into larger structures based on grammar rules.</li>
      <li>Keeps combining these structures until it forms the final result (start symbol).</li>
    </ul>

    <p className="leading-relaxed">
      The most powerful bottom-up parsers are LR Parsers (used in languages like C and Java): 
      SLR, CLR, and LALR.
    </p>

    {/* SLR(1) Parsing */}
    <h2 className="text-3xl font-bold mt-8">SLR(1) Parsing</h2>
    <p className="leading-relaxed">
      SLR(1) stands for Simple LR Parsing. It fixes shift-reduce conflicts in LR(0) parsing by using 
      FOLLOW sets. Reduce actions are applied only if the next input symbol is in the FOLLOW set of 
      the left-hand side (LHS) of the production rule.
    </p>

    <pre className="bg-gray-400 p-4 rounded-lg text-sm overflow-x-auto">
{`Constructing SLR(1) Table:
1. Construct collection of LR(0) items for G'.
2. For each state i:
   a. If [A -> α • aβ] ∈ Ii and GOTO(Ii, a) = Ij
      -> ACTION[i, a] = "shift j" (∀ a ≠ $)
   b. If [A -> α •] ∈ Ii, A ≠ S'
      -> ACTION[i, a] = "reduce A -> α" (∀ a ∈ FOLLOW(A))
   c. If [S' -> S • $] ∈ Ii
      -> ACTION[i, $] = "accept"
3. For each state i, if GOTO(Ii, A) = Ij
   -> GOTO[i, A] = j
4. Set undefined entries to "error"
5. Initial state s0 = CLOSURE([S' -> •S$])

Example:
Grammar:
E -> T + E | T
T -> id
Augmented Grammar:
E' -> E`}
    </pre>

    {/* CLR(1) Parsing */}
    <h2 className="text-3xl font-bold mt-8">CLR(1) Parsing</h2>
    <p className="leading-relaxed">
      CLR(1) (Canonical LR(1)) parsing eliminates conflicts by using look-ahead symbols with each production. 
      LR(1) items include look-ahead symbols to make precise shift/reduce decisions.
    </p>

    <pre className="bg-gray-400 p-4 rounded-lg text-sm overflow-x-auto">
{`Constructing CLR(1) Table:
1. Build lookahead into DFA.
2. Construct LR(1) item sets for G'.
3. For each state i:
   a. If [A -> α • aβ, b] ∈ Ii and GOTO1(Ii, a) = Ij
      -> ACTION[i, a] = "shift j"
   b. If [A -> α •, a] ∈ Ii, A ≠ S'
      -> ACTION[i, a] = "reduce A -> α"
   c. If [S' -> S •, $] ∈ Ii
      -> ACTION[i, $] = "accept"
4. For each state i, if GOTO1(Ii, A) = Ij
   -> GOTO[i, A] = j
5. Set undefined entries to "error"
6. Initial state s0 = CLOSURE1([S' -> •S, $])

Example:
Grammar:
S -> AaAb | BbBa
A -> ?
B -> ?
Augmented Grammar:
S' -> S`}
    </pre>

    {/* LALR Parsing */}
    <h2 className="text-3xl font-bold mt-8">LALR(1) Parsing</h2>
    <p className="leading-relaxed">
      LALR(1) is an optimized version of CLR(1) that merges states with the same LR(0) core but 
      different look-ahead symbols. This reduces table size while maintaining parsing power.
    </p>

    <pre className="bg-gray-400 p-4 rounded-lg text-sm overflow-x-auto">
{`Constructing LALR(1) Table:
1. Construct LR(1) item sets for G'.
2. Merge states with same LR(0) core.
3. Update GOTO1 incrementally.
4. For each state i:
   a. If [A -> α • aβ, b] ∈ Ii and GOTO1(Ii, a) = Ij
      -> ACTION[i, a] = "shift j"
   b. If [A -> α •, a] ∈ Ii, A ≠ S'
      -> ACTION[i, a] = "reduce A -> α"
   c. If [S' -> S •, $] ∈ Ii
      -> ACTION[i, $] = "accept"
5. For each state i, if GOTO1(Ii, A) = Ij
   -> GOTO[i, A] = j
6. Set undefined entries to "error"
7. Initial state s0 = CLOSURE1([S' -> •S, $])

Example:
Grammar:
S -> AA
A -> aA | b
Augmented Grammar:
S' -> S`}
    </pre>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">SLR(1) vs CLR(1) vs LALR(1)</h2>
    <pre className="bg-gray-400 p-4 rounded-lg text-sm overflow-x-auto">
{`Feature                     | SLR(1) Parser       | CLR(1) Parser      | LALR(1) Parser
----------------------------|-------------------|------------------|----------------
Parsing Table Size          | Smallest           | Largest           | Medium
Grammar Handling            | Limited            | Most powerful     | Nearly as powerful
Basis for Decisions         | FOLLOW sets        | Look-ahead symbols| Merged look-ahead symbols
Conflicts                   | More conflicts     | Least conflicts   | May introduce reduce-reduce conflicts
Error Detection             | Delayed            | Delayed           | Similar to CLR
Time & Space Complexity     | Low                | High              | Medium
Ease of Implementation      | Easiest            | Most complex      | Slightly more complex than SLR
Used In                     | Educational tools  | Theoretical compilers | Real-world compilers (YACC, Bison)`}
    </pre>

  </div>
);

export default Home;
