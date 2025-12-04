import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= 8255 with 8085 ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Interface 8255 with 8085 Microprocessor for 1’s and 2’s Complement of a Number
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 27 Sep, 2025</p>

    <p className="text-lg leading-relaxed">
      The 8255 is a programmable peripheral interface (PPI) that can be interfaced with the 8085 microprocessor to perform various I/O operations, such as computing the 1’s and 2’s complement of a number.
    </p>

    <h2 className="text-3xl font-bold mt-8">Definitions</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>1’s complement:</strong> Flip all 0s to 1s and 1s to 0s.  
        Example: 1010 → 0101
      </li>
      <li><strong>2’s complement:</strong> Take 1’s complement and add 1.  
        Example: 1010 → 0101 + 1 → 0110
      </li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Steps to Interface 8255 with 8085</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Initialize the 8255 in Mode 0 for simple I/O operations.</li>
      <li>Assign a port (Port A) to input the binary number.</li>
      <li>Load the binary number into the 8085 accumulator.</li>
      <li>Compute 1’s complement using the CPL instruction and store in Port B.</li>
      <li>Compute 2’s complement by adding 1 to the 1’s complement and store in Port C.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Assembly Language Implementation</h2>
    <p className="leading-relaxed font-semibold">Step-by-Step Instructions:</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Initialize control word register of 8255 (e.g., MVI A, 80; OUT 33).</li>
      <li>Input value to accumulator A (MVI A, 99; OUT 30 → Port A).</li>
      <li>Calculate 1’s complement of A (CMA) and store in Port B (OUT 31).</li>
      <li>Calculate 2’s complement (INR A) and store in Port C (OUT 32).</li>
      <li>Return from program (RET).</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Example Program</h2>
    <p className="leading-relaxed font-semibold">Mnemonics and Comments:</p>
    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
      MVI A, 80 &nbsp;&nbsp;&nbsp;&nbsp; ; Load control register value<br/>
      OUT 33 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ; Initialize 8255 control register<br/>
      MVI A, 99 &nbsp;&nbsp;&nbsp;&nbsp; ; Load A with 99<br/>
      OUT 30 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ; Output to Port A<br/>
      CMA &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ; 1’s complement of A<br/>
      OUT 31 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ; Output 1’s complement to Port B<br/>
      INR A &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ; Increment A → 2’s complement<br/>
      OUT 32 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ; Output 2’s complement to Port C<br/>
      RET &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ; Return from program
    </p>

    <h2 className="text-3xl font-bold mt-8">Explanation</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>MVI A, 80 & OUT 33:</strong> Set 8255 in Mode 0 via control register.</li>
      <li><strong>MVI A, 99 & OUT 30:</strong> Load and display value in Port A.</li>
      <li><strong>CMA & OUT 31:</strong> Compute 1’s complement and display in Port B.</li>
      <li><strong>INR A & OUT 32:</strong> Compute 2’s complement and display in Port C.</li>
      <li><strong>RET:</strong> End program execution.</li>
    </ul>

  </div>
);

export default Home;
