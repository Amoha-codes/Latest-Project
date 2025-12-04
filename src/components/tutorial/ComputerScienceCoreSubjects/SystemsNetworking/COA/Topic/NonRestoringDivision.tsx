import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Non-Restoring Division ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Non-Restoring Division for Unsigned Integer
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 23 Sep, 2025</p>

    {/* Intro */}
    <p className="text-lg leading-relaxed">
      The non-restoring division algorithm is a faster method to divide binary numbers. 
      Unlike traditional division, it avoids repeatedly adding back the divisor, making 
      it more efficient for computers to perform.
    </p>

    <p className="leading-relaxed">
      It uses repeated subtraction and addition to determine quotient bits.
      If subtraction produces a negative value, the algorithm simply adds in the next
      step instead of correcting immediately.
    </p>

    {/* Steps */}
    <h2 className="text-3xl font-bold mt-8">Steps in the Non-Restoring Division Algorithm</h2>

    <ol className="list-decimal ml-6 leading-relaxed space-y-2">
      <li>
        Initialize registers: Q = Dividend, M = Divisor, A = 0, n = number of bits in the dividend.
      </li>
      <li>
        Check the sign bit of register A.
      </li>
      <li>
        If sign bit = 1, shift left AQ and perform A = A + M.  
        Otherwise, shift left AQ and perform A = A − M (i.e., add 2’s complement of M).
      </li>
      <li>
        Check the sign bit of A again.
      </li>
      <li>
        If sign bit = 1 → Q[0] becomes 0;  
        otherwise → Q[0] becomes 1.
      </li>
      <li>
        Decrement n by 1.
      </li>
      <li>
        If n ≠ 0, repeat from Step 2.
      </li>
      <li>
        If A has sign bit = 1, perform A = A + M.
      </li>
      <li>
        The final registers: Q contains the quotient, and A contains the remainder.
      </li>
    </ol>

    {/* Example */}
    <h2 className="text-3xl font-bold mt-8">Example</h2>

    <p className="leading-relaxed">
      Divide <strong>1011 (11 in decimal)</strong> by <strong>0011 (3 in decimal)</strong> 
      using the Non-Restoring Division Algorithm.
    </p>

    <h3 className="text-xl font-semibold mt-4">Initialization:</h3>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      Dividend (Q) = 1011 <br />
      Divisor (M) = 0011 <br />
      Accumulator (A) = 0000 <br />
      Number of bits (n) = 4
    </p>

    <h3 className="text-xl font-semibold mt-4">Step-by-Step Execution</h3>

    <ol className="list-decimal ml-6 leading-relaxed space-y-4">

      <li>
        <strong>1st Iteration</strong><br />
        Shift Left AQ → A = 0000, Q = 0110<br />
        A = A − M → 0000 − 0011 = 1101<br />
        Sign Bit = 1 → Q[0] = 0<br />
        n = 3
      </li>

      <li>
        <strong>2nd Iteration</strong><br />
        Shift Left AQ → A = 1010, Q = 1100<br />
        A = A + M → 1010 + 0011 = 1101<br />
        Sign Bit = 1 → Q[0] = 0<br />
        n = 2
      </li>

      <li>
        <strong>3rd Iteration</strong><br />
        Shift Left AQ → A = 1011, Q = 1000<br />
        A = A − M → 1011 − 0011 = 1000<br />
        Sign Bit = 1 → Q[0] = 0<br />
        n = 1
      </li>

      <li>
        <strong>4th Iteration</strong><br />
        Shift Left AQ → A = 0001, Q = 0000<br />
        A = A + M → 0001 + 0011 = 0010<br />
        Sign Bit = 0 → Q[0] = 1<br />
        n = 0
      </li>

    </ol>

    <h3 className="text-xl font-semibold mt-4">Final Adjustment</h3>

    <p className="leading-relaxed">
      Sign bit of A = 0 → No correction required.
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      <strong>Final Quotient (Q) = 0011</strong> → 3 in decimal <br />
      <strong>Final Remainder (A) = 0010</strong> → 2 in decimal
    </p>

  </div>
);

export default Home;
