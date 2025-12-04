import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Restoring Division Algorithm ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Restoring Division Algorithm For Unsigned Integer
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 23 Sep, 2025</p>

    <p className="text-lg leading-relaxed">
      The Restoring Division Algorithm is a method for dividing two unsigned integers in binary
      form, producing a quotient and remainder through iterative shifting and subtraction.
    </p>

    <p className="leading-relaxed">
      It uses registers for the quotient (<strong>Q</strong>), remainder (<strong>A</strong>),
      and divisor (<strong>M</strong>). If subtraction gives a negative result, the remainder is
      restored to its previous value, and the quotient bit is set to zero — hence the term
      <strong> "restoring"</strong>.
    </p>

    <p className="leading-relaxed">
      Here, register Q contains the quotient and register A contains the remainder. An n-bit
      dividend is loaded in Q and the divisor is loaded in M. The value of register A is initially
      kept 0. Since A is restored after a negative subtraction, the algorithm is called
      <strong> Restoring Division</strong>.
    </p>

    {/* ================= Steps ================= */}
    <h2 className="text-3xl font-bold mt-8">Steps for Restoring Division Algorithm</h2>

    <ul className="list-decimal ml-6 leading-relaxed space-y-2">
      <li>Initialize: Q = Dividend, M = Divisor, A = 0, n = number of bits in dividend.</li>
      <li>Shift left the combined register <strong>AQ</strong> as if they are one unit.</li>
      <li>Compute <strong>A = A − M</strong>.</li>
      <li>
        Check MSB of A:
        <ul className="list-disc ml-6">
          <li>If MSB = 0 → Set Q₀ = 1</li>
          <li>
            If MSB = 1 → Set Q₀ = 0 and restore A (undo subtraction by adding M back)
          </li>
        </ul>
      </li>
      <li>Decrement counter n.</li>
      <li>If n ≠ 0, repeat from step 2.</li>
      <li>After completion, register Q contains the quotient and register A contains the remainder.</li>
    </ul>

    {/* ================= Unsigned Integer ================= */}
    <h2 className="text-3xl font-bold mt-8">Unsigned Integer</h2>

    <p className="leading-relaxed">
      Unsigned integers store only non-negative numbers. In signed integers the first bit is
      used for the sign (0 = positive, 1 = negative), but in unsigned all bits represent the
      value. In 8-bit form, unsigned integers range from 0 to 255. They are used when only 
      positive values or larger numeric ranges are needed.
    </p>

    {/* ================= Slow vs Fast Algorithms ================= */}
    <h2 className="text-3xl font-bold mt-8">Slow Algorithm and Fast Algorithm</h2>

    <p className="leading-relaxed">
      Slow division algorithms include: restoring, non-restoring, non-performing restoring, and
      SRT division.  
      Fast algorithms include Newton–Raphson and Goldschmidt methods.
    </p>

    <p className="leading-relaxed">
      In this article, we perform the <strong>Restoring Algorithm</strong> for unsigned integers.
      The term “restoring” comes from restoring the value of register A after each negative
      subtraction.
    </p>

    {/* ================= Example ================= */}
    <h2 className="text-3xl font-bold mt-8">Example: Restoring Division Algorithm</h2>

    <p className="leading-relaxed">
      Perform Restoring Division for: <br />
      <strong>Dividend = 11</strong> &nbsp;&nbsp; <strong>Divisor = 3</strong>
    </p>

    <div className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm overflow-auto">
      <table className="text-left w-full">
        <thead>
          <tr>
            <th className="p-1">n</th>
            <th className="p-1">M</th>
            <th className="p-1">A</th>
            <th className="p-1">Q</th>
            <th className="p-1">Operation</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>4</td><td>00011</td><td>00000</td><td>1011</td><td>initialize</td></tr>
          <tr><td></td><td>00011</td><td>00001</td><td>011_</td><td>shift left AQ</td></tr>
          <tr><td></td><td>00011</td><td>11110</td><td>011_</td><td>A = A − M</td></tr>
          <tr><td></td><td>00011</td><td>00001</td><td>0110</td><td>Q[0] = 0 & restore A</td></tr>

          <tr><td>3</td><td>00011</td><td>00010</td><td>110_</td><td>shift left AQ</td></tr>
          <tr><td></td><td>00011</td><td>11111</td><td>110_</td><td>A = A − M</td></tr>
          <tr><td></td><td>00011</td><td>00010</td><td>1100</td><td>Q[0] = 0</td></tr>

          <tr><td>2</td><td>00011</td><td>00101</td><td>100_</td><td>shift left AQ</td></tr>
          <tr><td></td><td>00011</td><td>00010</td><td>100_</td><td>A = A − M</td></tr>
          <tr><td></td><td>00011</td><td>00010</td><td>1001</td><td>Q[0] = 1</td></tr>

          <tr><td>1</td><td>00011</td><td>00101</td><td>001_</td><td>shift left AQ</td></tr>
          <tr><td></td><td>00011</td><td>00010</td><td>001_</td><td>A = A − M</td></tr>
          <tr><td></td><td>00011</td><td>00010</td><td>0011</td><td>Q[0] = 1</td></tr>
        </tbody>
      </table>
    </div>

    <p className="leading-relaxed mt-4">
      Final registers:  
      <strong>Quotient (Q) = 3</strong>,  
      <strong>Remainder (A) = 2</strong>.
    </p>

  </div>
);

export default Home;
