import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= PPI 8255 ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Programmable Peripheral Interface 8255
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 18 Jul, 2024</p>

    <p className="text-lg leading-relaxed">
      The PPI 8255 is a general-purpose programmable I/O device used to interface the CPU with external devices such as ADCs, DACs, keyboards, etc. It consists of three 8-bit bidirectional I/O ports: <strong>PORT A, PORT B, and PORT C</strong>. Port C is further divided into two 4-bit ports: upper (PC upper) and lower (PC lower). The PPI can be programmed in different modes according to system requirements using the control register (D0-D7).
    </p>

    <h2 className="text-3xl font-bold mt-8">Pin Selection</h2>
    <p className="leading-relaxed">
      The chip select (CS') and address lines (A1, A0) select different ports:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>CS'=0, A1=0, A0=0 → PORT A (Address: 80H)</li>
      <li>CS'=0, A1=0, A0=1 → PORT B (Address: 81H)</li>
      <li>CS'=0, A1=1, A0=0 → PORT C (Address: 82H)</li>
      <li>CS'=0, A1=1, A0=1 → Control Register (Address: 83H)</li>
      <li>CS'=1 → No Selection</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Pin Diagram Overview</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>PA0 - PA7: Port A pins</li>
      <li>PB0 - PB7: Port B pins</li>
      <li>PC0 - PC7: Port C pins</li>
      <li>D0 - D7: Data pins for transfer</li>
      <li>RESET: Reset input</li>
      <li>RD': Read input</li>
      <li>WR': Write input</li>
      <li>CS': Chip select</li>
      <li>A1, A0: Address pins</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Operating Modes</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Bit Set/Reset (BSR) Mode:</strong> MSB (D7) = 0; only Port C bits can be set or reset.</li>
      <li><strong>Input-Output Mode:</strong> MSB (D7) = 1; subdivided into:
        <ul className="list-disc ml-6 leading-relaxed">
          <li><strong>Mode 0:</strong> Simple input/output for all ports; no interrupt handling.</li>
          <li><strong>Mode 1:</strong> Handshake/strobed I/O; uses Port C bits for handshake signals; supports interrupts.</li>
          <li><strong>Mode 2:</strong> Bi-directional bus mode (Port A only); Port B can be in Mode 0 or 1; 6 bits of Port C used for handshake; supports interrupts.</li>
        </ul>
      </li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Advantages</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Versatile: Programmable in multiple modes with 3 ports configurable as input or output.</li>
      <li>Easy to use: Simple programming via control register.</li>
      <li>Compatible: Works with a wide range of microprocessors and devices.</li>
      <li>Low cost: Affordable component for many applications.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Disadvantages</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Limited functionality: Cannot support high-speed data transfer or large memory.</li>
      <li>Limited ports: Only three 8-bit ports.</li>
      <li>Limited resolution: 8 bits per port may not be enough for some applications.</li>
      <li>Obsolete technology: Being replaced by newer I/O interface components.</li>
    </ul>

  </div>
);

export default Home;
