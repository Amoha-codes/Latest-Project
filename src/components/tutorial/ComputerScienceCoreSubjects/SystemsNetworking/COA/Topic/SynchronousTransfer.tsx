import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Title ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Synchronous Data Transfer in Computer Organization
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 11 Jul, 2025</p>

    {/* ================= Intro ================= */}
    <p className="text-lg leading-relaxed">
      In Synchronous Data Transfer, both the sending and receiving units operate using 
      the same clock signal. This method works when each device already knows the timing 
      behaviour of the other. The master performs a predefined sequence of instructions 
      for data transfer, all synchronized with the common clock. Data is supplied at 
      a time when the slave is guaranteed to be ready.
    </p>

    <p className="leading-relaxed">
      The master often introduces a sufficient delay to accommodate the slower response 
      of the slave without receiving any request or acknowledgement. When sending data, 
      the master does not expect any acknowledgement. Similarly, while reading data, the 
      slave does not notify that data has been placed on the bus, nor does the master 
      confirm that it has been read.
    </p>

    <p className="leading-relaxed">
      Both devices operate at a known clock period, so no difficulty occurs as long as 
      their response times are known. Before transferring data, the master selects the 
      slave either by sending its address or a “device select” signal. However, no 
      acknowledgement is sent by the slave after selection.
    </p>

    {/* ================= Timing Diagram ================= */}
    <h2 className="text-3xl font-bold mt-8">Timing Diagram for Synchronous Read Operation</h2>

    <p className="leading-relaxed">
      In this operation, the master places the slave’s address on the address bus and 
      activates the read signal at the falling edge of the clock. The entire read cycle 
      completes in one clock period.
    </p>

    {/* ================= Features ================= */}
    <h2 className="text-3xl font-bold mt-8">Features of Synchronous Data Transfer</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>Timing:</strong> Data transfer is synchronized using a common clock, 
        ensuring both devices are ready simultaneously.
      </li>
      <li>
        <strong>Data Transfer Modes:</strong> Supports both parallel (multiple bits 
        simultaneously) and serial (bit-by-bit) transfer.
      </li>
      <li>
        <strong>Handshaking:</strong> May involve limited handshaking using signals like 
        ACK and RDY, though not always mandatory.
      </li>
      <li>
        <strong>Data Rate:</strong> Speed depends on clock frequency and bits transferred 
        per cycle. Faster than asynchronous transfer due to no extra sync bits.
      </li>
      <li>
        <strong>Transmission Line:</strong> Requires properly designed transmission lines 
        matched with device impedance to prevent data loss.
      </li>
    </ul>

    {/* ================= Advantages ================= */}
    <h2 className="text-3xl font-bold mt-8">Advantages of Synchronous Data Transfer</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>The master does not wait for acknowledgement signals, simplifying the design.</li>
      <li>The slave follows timing rules defined by the master or system designer.</li>
    </ul>

    {/* ================= Disadvantages ================= */}
    <h2 className="text-3xl font-bold mt-8">Disadvantages of Synchronous Data Transfer</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        A slow-speed device connected to the bus can degrade the overall system performance.
      </li>
      <li>
        If the slave is slow, the master remains idle during transfer and vice versa.
      </li>
    </ul>

  </div>
);

export default Home;
