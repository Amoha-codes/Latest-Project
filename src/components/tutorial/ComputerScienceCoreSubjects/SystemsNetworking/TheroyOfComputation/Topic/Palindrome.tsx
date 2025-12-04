import React from "react";

const Home: React.FC = () => (


<div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

  <h1 className="text-4xl font-extrabold border-b-2 pb-2">
    Construct Pushdown Automata for All Length Palindrome
  </h1>

  <p className="text-sm text-gray-500">Last Updated : 11 Jul, 2025</p>

  <p className="leading-relaxed text-lg">
    A Pushdown Automata (PDA) is similar to an epsilon Non-deterministic Finite Automata (NFA) but with an infinite stack. PDAs can be used to implement Context-Free Languages (CFLs). Understanding how to construct PDA for palindromes is essential.
  </p>

  <h2 className="text-3xl font-bold mt-6">1. Odd-Length Palindrome</h2>
  <p className="leading-relaxed">
    Construct a PDA for L = {"wcw' | w = {0, 1}*"}, where w' is the reverse of w.
  </p>
  <p className="leading-relaxed font-semibold">Approach:</p>
  <ol className="list-decimal ml-6 leading-relaxed">
    <li>Push 0's and 1's onto the stack until the middle element 'c'.</li>
    <li>On reading 'c', move to the next state without modifying the stack.</li>
    <li>For the second half of the string, if the scanned symbol matches the top of the stack, pop it. Otherwise, move to a dead state.</li>
    <li>If the stack is empty and input is fully processed (or end marker '$'), accept. Otherwise, reject.</li>
  </ol>

  <p className="leading-relaxed font-semibold">Examples:</p>
  <ul className="list-disc ml-6">
    <li>Input: 1 0 1 0 1 0 1 0 1 → <strong>ACCEPTED</strong></li>
    <li>Input: 1 0 1 0 1 1 1 1 0 → <strong>NOT ACCEPTED</strong></li>
  </ul>

  <h2 className="text-3xl font-bold mt-6">2. Even-Length Palindrome</h2>
  <p className="leading-relaxed">
    Construct a PDA for L = {"ww' | w = {0, 1}*"} using a Non-deterministic PDA (NPDA).
  </p>
  <p className="leading-relaxed font-semibold">Approach:</p>
  <ol className="list-decimal ml-6 leading-relaxed">
    <li>Push symbols of the first half onto the stack while keeping track of the input position.</li>
    <li>At the midpoint, make an epsilon move to the next state.</li>
    <li>For the second half, pop matching symbols from the stack. Move to dead state if mismatch occurs.</li>
    <li>If stack is empty at the end, accept. Otherwise, reject.</li>
  </ol>

  <p className="leading-relaxed font-semibold">Examples:</p>
  <ul className="list-disc ml-6">
    <li>Input: 1 0 0 1 1 1 1 0 0 1 → <strong>ACCEPTED</strong></li>
    <li>Input: 1 0 0 1 1 1 → <strong>NOT ACCEPTED</strong></li>
  </ul>

  <h2 className="text-3xl font-bold mt-6">3. All-Length Palindrome</h2>
  <p className="leading-relaxed">
    Construct a PDA that accepts both odd and even length palindromes.
    L = {"ww' | wcw', w = {0, 1}*"}, using NPDA.
  </p>
  <p className="leading-relaxed font-semibold">Approach:</p>
  <ol className="list-decimal ml-6 leading-relaxed">
    <li>Push 0's and 1's onto the stack while tracking if the input is odd or even length.</li>
    <li>
      <strong>Odd length:</strong> On middle element 'c', move to next state without modifying the stack.  
      <strong>Even length:</strong> After last symbol of first half, make an epsilon move to next state.
    </li>
    <li>Pop matching symbols from the stack for the second half. Move to dead state on mismatch.</li>
    <li>If stack is empty at end of input (or '$'), accept. Otherwise, reject.</li>
  </ol>

  <p className="leading-relaxed font-semibold">Examples:</p>
  <ul className="list-disc ml-6">
    <li>Input: 1 1 0 0 1 1 1 1 0 0 1 1 → <strong>ACCEPTED</strong></li>
    <li>Input: 1 0 1 0 1 0 1 → <strong>ACCEPTED</strong></li>
  </ul>

</div>
 );

export default Home;
