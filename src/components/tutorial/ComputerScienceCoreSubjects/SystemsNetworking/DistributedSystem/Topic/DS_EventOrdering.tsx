import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Event Ordering in Distributed Systems ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Event Ordering in Distributed Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 04 Mar, 2022</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      A distributed system consists of multiple processes that may run on different machines
      or on the same machine independently. Processes communicate exclusively through message
      passing. Due to message transmission delays and the independent nature of processes, 
      determining the exact global order of events is challenging.
    </p>

    {/* Physical Clocks Limitation */}
    <h2 className="text-3xl font-bold mt-8">Limitations of Physical Clocks</h2>
    <p className="leading-relaxed">
      Physical clocks on different machines cannot be perfectly synchronized. Clock drift 
      makes physical time unreliable for ordering events. Therefore, distributed systems 
      primarily ignore physical clocks when reasoning about event ordering.
    </p>

    {/* Observable Events */}
    <h2 className="text-3xl font-bold mt-8">Observable Events</h2>
    <p className="leading-relaxed">
      Observable events in a distributed system are mainly the <strong>sending</strong> and 
      <strong>receiving</strong> of messages. Each process is sequential, so the order of events 
      within a single process is totally ordered. An event is defined as either sending or 
      receiving a message.
    </p>

    {/* Partial Ordering */}
    <h2 className="text-3xl font-bold mt-8">Partial Ordering (Happened-Before Relation)</h2>
    <p className="leading-relaxed">
      The <strong>happened-before relation</strong>, denoted as <strong>a ⇢ b</strong>, defines
      the partial ordering of events:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>If events a and b occur in the same process and a occurs before b, then a ⇢ b.</li>
      <li>If event a is the sending of a message by one process and b is the receipt of that 
          message by another process, then a ⇢ b.</li>
      <li>Transitivity holds: if a ⇢ b and b ⇢ c, then a ⇢ c.</li>
    </ul>
    <p className="leading-relaxed">
      Some events may be <strong>concurrent</strong>, meaning neither a ⇢ b nor b ⇢ a can be 
      determined from observable events.
    </p>

    {/* Example */}
    <h2 className="text-3xl font-bold mt-8">Example of Happened-Before</h2>
    <p className="leading-relaxed">
      Consider three processes P, Q, R. Each dot represents an event, and curves represent 
      messages between processes. For example, if P1 sends a message to Q2 and then Q sends 
      a message to R3, we can conclude that P1 ⇢ R4. Events like R2 and Q6 are concurrent 
      because they cannot causally affect each other.
    </p>
    <p className="leading-relaxed">
      The happened-before relation is an <strong>irreflexive partial ordering</strong>, i.e., 
      a ⇢ a is never true.
    </p>

    {/* Logical Clocks */}
    <h2 className="text-3xl font-bold mt-8">Logical Clocks</h2>
    <p className="leading-relaxed">
      A <strong>logical clock</strong> assigns a number to an event representing its logical 
      occurrence order. Let Ci(a) denote the logical clock value of event a in process Pi.
      These numbers are purely logical and unrelated to physical time.
    </p>

    {/* Conditions for Logical Clocks */}
    <h2 className="text-3xl font-bold mt-8">Conditions for Logical Clocks</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>If a ⇢ b within the same process Pi, then Ci(a) &lt; Ci(b).</li>
      <li>If a is the sending of a message by Pi and b is the receipt by Pj, then Ci(a) &lt; Cj(b).</li>
    </ul>
    <p className="leading-relaxed">
      Each process increments its logical clock between successive events. This allows 
      constructing logical timestamps that respect the happened-before relation.
    </p>

    {/* Conclusion */}
    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      By using logical clocks, distributed systems can assign consistent numbers to events, 
      enabling partial ordering and reasoning about causality even when physical clocks are 
      unreliable. This provides the foundation for advanced concepts such as vector clocks 
      and causal consistency in distributed computing.
    </p>

  </div>
);

export default Home;
