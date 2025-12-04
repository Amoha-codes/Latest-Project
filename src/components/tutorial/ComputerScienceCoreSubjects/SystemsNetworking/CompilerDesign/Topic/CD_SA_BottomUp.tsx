import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Bottom-Up Parsers ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Bottom-Up Parsers
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 23 Jul, 2025</p>

    <p className="leading-relaxed">
      <strong>Bottom-up parsing</strong> is a syntax analysis method where the parser starts from the input symbols (tokens) 
      and reduces them to the start symbol of the grammar (usually <strong>S</strong>). It applies production rules in reverse, 
      constructing the parse tree from leaves upward to the root.
    </p>

    <p className="leading-relaxed">
      Bottom-up parsers are needed because:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Ensures clear and efficient construction of the parse tree.</li>
      <li>Detects syntactic errors early.</li>
      <li>Handles complex grammars, including context-free grammars.</li>
      <li>Often uses less memory and can be more efficient for certain languages.</li>
    </ul>

    {/* ================= Steps in Bottom-Up Parsing ================= */}
    <h2 className="text-3xl font-bold mt-8">Steps in Bottom-Up Parsing</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Start with tokens:</strong> Begin with terminal symbols (input tokens), which are leaves of the parse tree.</li>
      <li><strong>Shift and reduce:</strong> Repeatedly apply:
        <ul className="list-disc ml-6">
          <li><strong>Shift:</strong> Push the next token onto a stack.</li>
          <li><strong>Reduce:</strong> Replace a sequence of symbols on the stack by a non-terminal according to grammar rules.</li>
        </ul>
      </li>
      <li><strong>Repeat until root:</strong> Continue shifting and reducing until the input reduces to the start symbol.</li>
    </ul>

    {/* ================= Shift and Reduce Operations ================= */}
    <h2 className="text-3xl font-bold mt-8">Shift and Reduce Operations</h2>
    <h3 className="text-2xl font-semibold mt-4">Shift Operation</h3>
    <p className="leading-relaxed">
      The shift operation pushes the next input symbol onto the stack for processing.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Input symbol: process one token at a time.</li>
      <li>Stack: contains processed symbols (terminals/non-terminals).</li>
      <li>Action: push the next token onto the stack.</li>
    </ul>

    <p className="leading-relaxed font-semibold">Example: Input "a + b"</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Initial input: "a + b"</li>
      <li>Shift "a" → Stack: ["a"], Remaining input: "+ b"</li>
      <li>Shift "+" → Stack: ["a", "+"], Remaining input: "b"</li>
      <li>Shift "b" → Stack: ["a", "+", "b"], Remaining input: ""</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Reduce Operation</h3>
    <p className="leading-relaxed">
      The reduce operation replaces a substring (handle) on the stack with a non-terminal according to production rules.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Production Rule example: Expression → Term + Term</li>
      <li>Matching the substring: find a segment of input matching RHS.</li>
      <li>Replacement: replace the substring with the LHS non-terminal.</li>
      <li>Continue reducing until the input is reduced to the start symbol.</li>
    </ul>

    <p className="leading-relaxed font-semibold">Example: Parsing "3 + 5"</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Match "3" → replace with A</li>
      <li>Match "5" → replace with B</li>
      <li>A + B matches S → replace with S</li>
    </ul>

    {/* ================= Classification of Bottom-Up Parsers ================= */}
    <h2 className="text-3xl font-bold mt-8">Classification of Bottom-Up Parsers</h2>
    <p className="leading-relaxed">
      Bottom-up parsers are often called <strong>shift-reduce parsers</strong>, with four canonical actions:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>shift:</strong> Push next input symbol onto the stack.</li>
      <li><strong>reduce:</strong> Replace RHS of a production with LHS.</li>
      <li><strong>accept:</strong> Parsing succeeds.</li>
      <li><strong>error:</strong> Call error recovery routine.</li>
    </ul>

    {/* ================= LR Parsers ================= */}
    <h2 className="text-3xl font-bold mt-8">LR Parsers</h2>
    <p className="leading-relaxed">
      LR parsers scan input <strong>Left-to-Right</strong> and construct a <strong>Rightmost derivation in reverse</strong>. 
      They are widely used in compilers for complex grammars.
    </p>
    <p className="leading-relaxed">
      The "K" in variants like LALR or SLR refers to lookahead symbols, which guide parsing decisions.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Algorithm</h3>
    <pre className="bg-gray-200 p-4 rounded text-sm overflow-x-auto">
1. Initialize stack with initial state s₀
2. Read the first token from input

3. Repeat until parsing is complete:
    a. Let s be the top of the stack
    b. Check the action for [s, token]:
        i. If action is "shift sᵢ":
            - Push sᵢ onto the stack
            - Read the next token
        ii. If action is "reduce A → β":
            - Pop |β| symbols from the stack
            - Let s' be the new top of stack
            - Push goto[s', A] onto the stack
        iii. If action is "accept" and token is $:
            - Parsing successful
        iv. Otherwise:
            - Raise an error

</pre>


    <h3 className="text-2xl font-semibold mt-4">LR Parser Variants</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>LR(0): No lookahead, parses based only on current symbol and stack.</li>
      <li>SLR(1): Simple LR with 1 lookahead symbol.</li>
      <li>LR(1): Full lookahead, can parse the largest set of grammars.</li>
      <li>LALR(1): Combines LR(1) efficiency with smaller parsing tables.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">LR(k) Items</h3>
    <p className="leading-relaxed">
      LR(k) items track parser progress. An item is [α, β]:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>α: Grammar rule with a dot (•) showing how much has been processed.</li>
      <li>β: Up to k lookahead tokens guiding the next action.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">CLOSURE and GOTO Functions</h3>
    <p className="leading-relaxed">
      <strong>CLOSURE:</strong> Finds all possible rules needed in a situation. Example: [S → A • B] → add all rules starting with B.<br/>
      <strong>GOTO:</strong> Moves parser from one state to another after recognizing a symbol, then applies CLOSURE.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Augmented Grammar</h3>
    <p className="leading-relaxed">
      Add a new start symbol S' and rule S' → S to help the parser recognize input completion.
    </p>

    <h2 className="text-3xl font-bold mt-8">Operator Precedence Parsing</h2>
    <p className="leading-relaxed">
      Operator precedence parsing is a bottom-up method used to parse expressions based on operator precedence and associativity.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Relations between operators:
        <ul className="list-disc ml-6">
          <li><strong>&lt;·</strong>: lower precedence → shift</li>
          <li><strong>·&gt;</strong>: higher precedence → reduce</li>
          <li><strong>=</strong>: same precedence → match (e.g., parentheses)</li>
        </ul>
      </li>
      <li>Use a precedence table to guide parsing decisions.</li>
      <li>Algorithm:
        <ul className="list-disc ml-6">
          <li>Initialize stack with $</li>
          <li>Read next input token</li>
          <li>Compare precedence with stack top → Shift/Reduce/Match/Error</li>
          <li>Repeat until input is fully parsed and accepted</li>
        </ul>
      </li>
    </ul>

    <p className="leading-relaxed">
      Advantages: Efficient for operator-precedence grammars, simple implementation, sometimes avoids left recursion removal.
    </p>

  </div>
);

export default Home;
