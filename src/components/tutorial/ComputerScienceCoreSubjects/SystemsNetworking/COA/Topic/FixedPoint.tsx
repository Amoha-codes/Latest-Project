import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Fixed Point Representation ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Fixed Point Representation
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 19 Sep, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Fixed-point representation is a method of storing real numbers in a computer system where the position of the decimal (or binary) point is fixed. The number is divided into an integer part and a fractional part, with the binary point remaining at a fixed position.
    </p>

    {/* Binary Point */}
    <h2 className="text-3xl font-bold mt-8">Binary Point</h2>
    <p className="leading-relaxed">
      The binary point separates the integer part from the fractional part. Bits to the left have weights 2⁰, 2¹, 2²…, while bits to the right have weights 2⁻¹, 2⁻², 2⁻³…  
      <strong>Example (Decimal):</strong> 26.5 = 2×10¹ + 6×10⁰ + 5×10⁻¹  
      <strong>Example (Binary):</strong> 11010.1₂ = 16 + 8 + 2 + 0.5 = 26.5
    </p>

    {/* Shifting Pattern */}
    <h2 className="text-3xl font-bold mt-8">Shifting Pattern</h2>
    <p className="leading-relaxed">
      Shifting a number left multiplies it by 2, while shifting right divides it by 2. This is important for fixed-point arithmetic and understanding how numbers are represented in hardware.
    </p>

    {/* Fixed Point Number */}
    <h2 className="text-3xl font-bold mt-8">Fixed Point Number</h2>
    <p className="leading-relaxed">
      A fixed-point type is defined by two parameters:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Width of the number representation (total bits)</li>
      <li>Binary point position within the number</li>
    </ul>
    <p className="leading-relaxed">
      Example: <code>fixed&lt;8,3&gt;</code> means an 8-bit number with 3 fractional bits.  
      00010.110₂ = 1*2¹ + 1*2⁻¹ + 1*2⁻² = 2 + 0.5 + 0.25 = 2.75
    </p>

    {/* Signed Representation */}
    <h2 className="text-3xl font-bold mt-8">Signed Representation</h2>
    <p className="leading-relaxed">
      Negative numbers in binary require special representation. Common methods include:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Sign-Magnitude:</strong> MSB is the sign bit, remaining bits represent magnitude.  
          Example: 55₁₀ = 00110111, -55₁₀ = 10110111</li>
      <li><strong>1’s Complement:</strong> Invert all bits to represent a negative number.  
          Example: 55₁₀ = 00110111, -55₁₀ = 11001000</li>
      <li><strong>2’s Complement:</strong> Add 1 to the 1’s complement to represent negative numbers.  
          Example: 55₁₀ = 00110111 → 1’s complement 11001000 → 2’s complement -55₁₀ = 11001001</li>
    </ul>

    {/* Fixed Point Negative Example */}
    <h3 className="text-2xl font-semibold mt-4">Fixed Point Representation of Negative Numbers</h3>
    <p className="leading-relaxed">
      Example: Represent -2.5 in fixed&lt;4,1&gt;:  
      2.5₁₀ = 0101₂  
      1’s complement → 1010₂  
      Add 1 → 1011₂ (-2.5 in 2’s complement)
    </p>

    {/* Representation Range */}
    <h3 className="text-2xl font-semibold mt-4">Representation Ranges</h3>
    <p className="leading-relaxed">
      <strong>1’s Complement:</strong> Range is -127 to 127 in an 8-bit system.  
      <strong>2’s Complement:</strong> Range is -128 to 127 in an 8-bit system.
    </p>

  </div>
);

export default Home;
