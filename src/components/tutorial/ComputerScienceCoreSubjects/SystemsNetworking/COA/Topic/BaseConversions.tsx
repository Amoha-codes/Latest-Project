import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Base Conversions for Number System ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Base Conversions for Number System
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 27 Aug, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Electronic and digital systems use various number systems such as <strong>Decimal</strong>, 
      <strong> Binary</strong>, <strong>Hexadecimal</strong>, and <strong>Octal</strong>, which are essential in computing.
    </p>
    <p className="text-lg leading-relaxed">
      Binary (base-2) is the foundation of digital systems. Hexadecimal (base-16) and Octal (base-8) 
      simplify the representation of binary data. Decimal (base-10) is used for everyday calculations. 
      Other systems like Duodecimal (base-12) have specific applications in certain fields.
    </p>

    {/* Types of Number System */}
    <h2 className="text-3xl font-bold mt-8">Types of Number System</h2>
    <ol className="list-decimal ml-6 leading-relaxed space-y-2">
      <li>
        <strong>Decimal Number System:</strong> Base-10, digits 0-9, each digit’s place value is a power of 10. Used for counting and calculations.
      </li>
      <li>
        <strong>Binary Number System:</strong> Base-2, digits 0-1, each digit’s place value is a power of 2. Foundation of data representation in computers.
      </li>
      <li>
        <strong>Octal Number System:</strong> Base-8, digits 0-7, each digit’s place value is a power of 8. Simplifies binary representation by grouping 3 bits.
      </li>
      <li>
        <strong>Hexadecimal Number System:</strong> Base-16, digits 0-9 and A-F (A=10, B=11,...), each digit’s place value is a power of 16. Represents 4 binary bits as one digit.
      </li>
    </ol>

    {/* Number System Conversion Methods */}
    <h2 className="text-3xl font-bold mt-8">Number System Conversion Methods</h2>
    <p className="leading-relaxed">
      A number <strong>N</strong> in base <strong>b</strong> can be written as:
    </p>
    <p className="bg-gray-400 p-4 rounded-lg text-sm font-mono">
      (N)<sub>b</sub> = d<sub>n-1</sub>d<sub>n-2</sub>...d<sub>1</sub>d<sub>0</sub> . d<sub>-1</sub>d<sub>-2</sub>...d<sub>-m</sub>
    </p>
    <p className="leading-relaxed">
      Here, d<sub>n-1</sub> to d<sub>0</sub> is the integer part, and d<sub>-1</sub> to d<sub>-m</sub> is the fractional part. 
      d<sub>n-1</sub> = Most significant bit (MSB), d<sub>-m</sub> = Least significant bit (LSB).
    </p>

    {/* Decimal to Binary Conversion */}
    <h2 className="text-3xl font-bold mt-8">1. Decimal to Binary Number System Conversion</h2>
    <p className="leading-relaxed font-semibold">For Integer Part:</p>
    <ol className="list-decimal ml-6 leading-relaxed space-y-1">
      <li>Divide the decimal number by 2.</li>
      <li>Record the remainder (0 or 1).</li>
      <li>Continue dividing the quotient by 2 until the quotient is 0.</li>
      <li>The binary equivalent is the remainders read from bottom to top.</li>
    </ol>
    <p className="leading-relaxed font-semibold">For Fractional Part:</p>
    <ol className="list-decimal ml-6 leading-relaxed space-y-1">
      <li>Multiply the fractional part by 2.</li>
      <li>Record the integer part (0 or 1).</li>
      <li>Take the fractional part of the result and repeat the multiplication.</li>
      <li>Continue until the fractional part becomes 0 or reaches desired precision.</li>
    </ol>
    <p className="leading-relaxed font-semibold">Example:</p>
    <p className="bg-gray-400 p-4 rounded-lg text-sm font-mono">(10.25)<sub>10</sub> = (1010.01)<sub>2</sub></p>

    {/* Binary to Decimal Conversion */}
    <h2 className="text-3xl font-bold mt-8">2. Binary to Decimal Number System Conversion</h2>
    <p className="leading-relaxed">
      Multiply each binary digit by 2 raised to the power of its position (starting from 0 for integer part, -1 for fractional part) and sum them.
    </p>
    <p className="bg-gray-400 p-4 rounded-lg text-sm font-mono">(1010.01)<sub>2</sub> = (10.25)<sub>10</sub></p>

    {/* Decimal to Octal */}
    <h2 className="text-3xl font-bold mt-8">3. Decimal to Octal Number System Conversion</h2>
    <p className="leading-relaxed">
      Divide integer by 8, multiply fractional by 8, record remainders/integers. Example:
    </p>
    <p className="bg-gray-400 p-4 rounded-lg text-sm font-mono">(10.25)<sub>10</sub> = (12.2)<sub>8</sub></p>

    {/* Octal to Decimal */}
    <h2 className="text-3xl font-bold mt-8">4. Octal to Decimal Number System Conversion</h2>
    <p className="bg-gray-400 p-4 rounded-lg text-sm font-mono">(12.2)<sub>8</sub> = (10.25)<sub>10</sub></p>

    {/* Decimal to Hexadecimal */}
    <h2 className="text-3xl font-bold mt-8">5. Decimal to Hexadecimal Conversion</h2>
    <p className="bg-gray-400 p-4 rounded-lg text-sm font-mono">(10.25)<sub>10</sub> = (A.4)<sub>16</sub></p>

    {/* Hexadecimal to Decimal */}
    <h2 className="text-3xl font-bold mt-8">6. Hexadecimal to Decimal Conversion</h2>
    <p className="bg-gray-400 p-4 rounded-lg text-sm font-mono">(A.4)<sub>16</sub> = (10.25)<sub>10</sub></p>

    {/* Hexadecimal to Binary */}
    <h2 className="text-3xl font-bold mt-8">7. Hexadecimal to Binary Conversion</h2>
    <p className="bg-gray-400 p-4 rounded-lg text-sm font-mono">(3A)<sub>16</sub> = (00111010)<sub>2</sub></p>

    {/* Binary to Hexadecimal */}
    <h2 className="text-3xl font-bold mt-8">8. Binary to Hexadecimal Conversion</h2>
    <p className="bg-gray-400 p-4 rounded-lg text-sm font-mono">(1111011011)<sub>2</sub> = (3DB)<sub>16</sub></p>

    {/* Binary to Octal */}
    <h2 className="text-3xl font-bold mt-8">9. Binary to Octal Conversion</h2>
    <p className="bg-gray-400 p-4 rounded-lg text-sm font-mono">(111101101)<sub>2</sub> = (755)<sub>8</sub></p>

    {/* Octal to Binary */}
    <h2 className="text-3xl font-bold mt-8">10. Octal to Binary Conversion</h2>
    <p className="bg-gray-400 p-4 rounded-lg text-sm font-mono">(153)<sub>8</sub> = (001101011)<sub>2</sub></p>

  </div>
);

export default Home;
