import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Transmission Modes ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Transmission Modes in Computer Networks (Simplex, Half-Duplex, and Full-Duplex)
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 22 Sep, 2025</p>

    <p className="text-lg leading-relaxed">
      Transmission modes, also known as communication modes, define how data is transferred 
      between devices in a network or bus system. They determine whether communication is 
      one-way or two-way and whether it can happen simultaneously. 
      The three main types are <strong>Simplex</strong>, <strong>Half-Duplex</strong>, and <strong>Full-Duplex</strong>.
    </p>

    {/* Simplex Mode */}
    <h2 className="text-3xl font-bold mt-8">Simplex Mode</h2>
    <p className="leading-relaxed">
      In Simplex mode, communication is unidirectional, like a one-way street. 
      Only one device can transmit, while the other only receives. The entire channel 
      capacity is used in one direction.
    </p>
    <p className="leading-relaxed font-semibold">Example: Keyboard → Monitor</p>
    <p className="leading-relaxed">
      <strong>Pros:</strong> Cost-effective, simple, no need for coordination, useful for broadcasting or surveillance.<br/>
      <strong>Cons:</strong> One-way communication only, cannot verify reception, not suitable for bidirectional communication.
    </p>

    {/* Half-Duplex Mode */}
    <h2 className="text-3xl font-bold mt-8">Half-Duplex Mode</h2>
    <p className="leading-relaxed">
      In Half-Duplex mode, devices can both transmit and receive, but not simultaneously. 
      When one device sends data, the other can only receive, and vice versa. 
      The entire channel capacity is available in the active direction.
    </p>
    <p className="leading-relaxed font-semibold">Example: Walkie-Talkie</p>
    <p className="leading-relaxed">
      <strong>Pros:</strong> Efficient use of channel, supports two-way communication (one direction at a time).<br/>
      <strong>Cons:</strong> Only one direction at a time, slower than full-duplex.
    </p>

    {/* Full-Duplex Mode */}
    <h2 className="text-3xl font-bold mt-8">Full-Duplex Mode</h2>
    <p className="leading-relaxed">
      In Full-Duplex mode, both devices can transmit and receive simultaneously. 
      Communication is bidirectional at all times. The channel capacity is shared 
      between the two directions either by separate paths or by dividing the link capacity.
    </p>
    <p className="leading-relaxed font-semibold">Example: Telephone Network</p>
    <p className="leading-relaxed">
      <strong>Pros:</strong> Ideal for real-time applications, high reliability, simultaneous communication.<br/>
      <strong>Cons:</strong> Expensive, complex setup, requires high bandwidth.
    </p>

  </div>
);

export default Home;
