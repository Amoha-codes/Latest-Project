import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Working of 8085-based Single Board Microcomputer ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Working of 8085-based Single Board Microcomputer
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 11 Jul, 2025</p>

    {/* Intro */}
    <p className="text-lg leading-relaxed">
      Single board microcomputers are systems that contain a program called 
      <strong> Key Monitor</strong> or <strong>Key Executive</strong> permanently stored in memory. 
      This program is stored in EPROM or ROM beginning at memory location <strong>0000H</strong>.
      Hardware is the skeleton of the computer, but software is its life. Without software, 
      the hardware is just a dead semiconductor device.
    </p>

    <p className="leading-relaxed">
      When power is turned on, the monitor program becomes active. Initially, the program 
      counter (PC) contains a random value. When the system is reset, the PC is cleared and 
      set to address <strong>0000H</strong>.  
      A power-on reset circuit resets the system and clears the PC.
    </p>

    <p className="leading-relaxed">
      The MPU places address 0000H on the address bus. The instruction at 0000H is fetched and 
      executed, and program execution continues according to the monitor program.
    </p>

    {/* Functions of Monitor Program */}
    <h2 className="text-3xl font-bold mt-8">Primary Functions of Monitor Program</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Reading the Hex keyboard and checking for a key press.</li>
      <li>Displaying the Hex equivalent of the pressed key on output devices like 7-segment LEDs.</li>
      <li>Identifying the key and storing its binary value in memory if required.</li>
      <li>Transferring program execution to the user program when the Execute key is pressed.</li>
    </ul>

    {/* Programmer Interaction */}
    <h2 className="text-3xl font-bold mt-8">Interaction With the System</h2>
    <p className="leading-relaxed">
      The programmer enters the program into R/W memory using the hex keys (0–F) and the Enter key.
      On reset, the monitor program checks key presses again.
    </p>

    <p className="leading-relaxed">
      Using the keyboard, the programmer enters the starting address of the user program stored in 
      RAM and directs the MPU to execute it by pressing the <strong>Run</strong> key.  
      The 8085 MPU then fetches, decodes, and executes one instruction at a time until a HALT 
      instruction is reached.
    </p>

    <p className="leading-relaxed">
      The monitor program remains in control until the Execute key is pressed. After execution begins, 
      the user program directs all MPU operations.
    </p>

    {/* Advantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Cost-effective</strong> – A complete system on a single board without extra hardware.</li>
      <li><strong>Easy to use</strong> – 8085 is simple, well-defined, and easy to program.</li>
      <li><strong>Software tool availability</strong> – Many assemblers, debuggers, and tools exist.</li>
      <li><strong>Expandability</strong> – Supports additional I/O devices, memory, and interfaces.</li>
      <li><strong>Low power consumption</strong> – Suitable for battery-powered applications.</li>
    </ul>

    {/* Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Disadvantages</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Limited processing power compared to modern processors.</li>
      <li>Limited memory due to restricted address space.</li>
      <li>Limited built-in peripherals.</li>
      <li>Limited connectivity options.</li>
      <li>Older architecture, so availability and support may reduce in future.</li>
    </ul>

    {/* Features */}
    <h2 className="text-3xl font-bold mt-8">Features</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>8-bit microprocessor:</strong> Can process 8 bits at a time—sufficient for many 
        small-scale applications.
      </li>
      <li>
        <strong>Memory:</strong> Includes ROM/EPROM for monitor program and RAM for user programs and data.
      </li>
      <li>
        <strong>I/O Ports:</strong> Supports serial, parallel, and peripheral interfaces.
      </li>
      <li>
        <strong>Clock:</strong> Includes a clock generator to synchronize all operations.
      </li>
    </ul>

  </div>
);

export default Home;
