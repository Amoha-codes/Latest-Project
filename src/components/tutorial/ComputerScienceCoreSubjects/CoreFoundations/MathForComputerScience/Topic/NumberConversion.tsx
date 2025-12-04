import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Base Conversions ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Base Conversions for Number System
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 27 Aug, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Electronic and digital systems use various number systems such as Decimal, Binary, 
      Hexadecimal, and Octal, which are essential in computing.
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Binary (base-2) is the foundation of digital systems.</li>
      <li>Hexadecimal (base-16) and Octal (base-8) simplify binary representation.</li>
      <li>Decimal system (base-10) is standard for everyday calculations.</li>
      <li>Other systems like Duodecimal (base-12) have niche applications.</li>
    </ul>

    {/* Types of Number Systems */}
    <h2 className="text-3xl font-bold mt-8">Types of Number System</h2>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>
        <strong>Decimal Number System:</strong> Base 10, digits 0–9, place values powers of 10.
      </li>
      <li>
        <strong>Binary Number System:</strong> Base 2, digits 0–1, place values powers of 2.
      </li>
      <li>
        <strong>Octal Number System:</strong> Base 8, digits 0–7, place values powers of 8.
      </li>
      <li>
        <strong>Hexadecimal Number System:</strong> Base 16, digits 0–9 and A–F, place values powers of 16.
      </li>
    </ol>

    {/* Number System Conversion Formula */}
    <h2 className="text-3xl font-bold mt-8">Number System Conversion Methods</h2>
    <p className="leading-relaxed">
      A number N in base b can be written as:
    </p>
    <p className="bg-gray-400 p-4 rounded-lg text-sm">
      (N)<sub>b</sub> = d<sub>n-1</sub>d<sub>n-2</sub>…d<sub>1</sub>d<sub>0</sub> . d<sub>-1</sub>d<sub>-2</sub>…d<sub>-m</sub>
    </p>
    <p className="leading-relaxed">
      Here, d<sub>n-1</sub> is the most significant bit (MSB) and d<sub>-m</sub> is the least significant bit (LSB).
    </p>

    {/* Conversion Examples */}
    <h2 className="text-3xl font-bold mt-8">1. Decimal to Binary Conversion</h2>
    <p className="leading-relaxed">
      <strong>Integer Part:</strong> Divide by 2 repeatedly and read remainders bottom-to-top.<br/>
      <strong>Fractional Part:</strong> Multiply by 2 repeatedly and record integer parts top-to-bottom.
    </p>
    <p className="leading-relaxed font-semibold">Example: (10.25)<sub>10</sub> → (1010.01)<sub>2</sub></p>

    <h2 className="text-3xl font-bold mt-8">2. Binary to Decimal Conversion</h2>
    <p className="leading-relaxed">
      Multiply each digit by 2 raised to its positional power (integer: 0, 1, 2…; fractional: -1, -2…).<br/>
      Example: (1010.01)<sub>2</sub> = 10.25<sub>10</sub>
    </p>

    <h2 className="text-3xl font-bold mt-8">3. Decimal to Octal Conversion</h2>
    <p className="leading-relaxed">
      Divide integer part by 8 and multiply fractional part by 8. Example: (10.25)<sub>10</sub> = (12.2)<sub>8</sub>
    </p>

    <h2 className="text-3xl font-bold mt-8">4. Octal to Decimal Conversion</h2>
    <p className="leading-relaxed">
      Multiply each octal digit by 8 raised to its position. Example: (12.2)<sub>8</sub> = 10.25<sub>10</sub>
    </p>

    <h2 className="text-3xl font-bold mt-8">5. Decimal to Hexadecimal Conversion</h2>
    <p className="leading-relaxed">
      Divide integer by 16 and multiply fractional part by 16. Example: (10.25)<sub>10</sub> = (A.4)<sub>16</sub>
    </p>

    <h2 className="text-3xl font-bold mt-8">6. Hexadecimal to Decimal Conversion</h2>
    <p className="leading-relaxed">
      Multiply each digit by 16 raised to its positional power. Example: (A.4)<sub>16</sub> = 10.25<sub>10</sub>
    </p>

    <h2 className="text-3xl font-bold mt-8">7. Hexadecimal to Binary Conversion</h2>
    <p className="leading-relaxed">
      Replace each hex digit with its 4-bit binary equivalent. Example: (3A)<sub>16</sub> = (00111010)<sub>2</sub>
    </p>

    <h2 className="text-3xl font-bold mt-8">8. Binary to Hexadecimal Conversion</h2>
    <p className="leading-relaxed">
      Group binary bits in 4s from right, replace each group with corresponding hex digit. Example: (1111011011)<sub>2</sub> = (3DB)<sub>16</sub>
    </p>

    <h2 className="text-3xl font-bold mt-8">9. Binary to Octal Conversion</h2>
    <p className="leading-relaxed">
      Group binary bits in 3s from right, replace each group with corresponding octal digit. Example: (111101101)<sub>2</sub> = (755)<sub>8</sub>
    </p>

    <h2 className="text-3xl font-bold mt-8">10. Octal to Binary Conversion</h2>
    <p className="leading-relaxed">
      Replace each octal digit with its 3-bit binary equivalent. Example: (153)<sub>8</sub> = (001101011)<sub>2</sub>
    </p>

    {/* Suggested Quiz */}
    <h2 className="text-3xl font-bold mt-8">Suggested Quiz</h2>
    <p className="leading-relaxed font-semibold">Question: How many symbols are there in the Hexadecimal number system?</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>A. 16</li>
      <li>B. 15</li>
      <li>C. 8</li>
      <li>D. 7</li>
    </ul>

  </div>
);

export default Home;
