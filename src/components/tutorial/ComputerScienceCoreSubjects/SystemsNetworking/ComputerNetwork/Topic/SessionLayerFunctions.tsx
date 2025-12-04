import React from "react";

const SessionLayerFunctions: React.FC = () => {
  return (
    <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-2">
        Functions of Session Layer
      </h1>
      <p className="text-sm text-gray-500">Last Updated : 14 Oct, 2025</p>

      {/* Intro */}
      <p className="text-lg leading-relaxed">
        The Session Layer is responsible for <strong>establishing, maintaining, synchronizing,</strong> and 
        <strong> terminating sessions</strong> between communicating systems. A session is essentially a logical 
        connection that allows data exchange (such as file transfer, remote login, or online communication) 
        to occur in an organized and reliable manner.
      </p>

      <p className="italic mt-2">
        Note: It acts as a dialogue controller between systems, ensuring proper sequencing and synchronization of communication. 
        It also interacts with the Presentation Layer and the Transport Layer, handling the data received from the Presentation Layer before passing it to the Transport Layer for transmission.
      </p>

      {/* Functions List */}
      <h2 className="text-3xl font-bold mt-8">Functions of the Session Layer</h2>
      <ul className="list-decimal ml-6 leading-relaxed mt-2 space-y-2">

        {/* 1 */}
        <li>
          <strong>Session Establishment:</strong> The Session Layer establishes and manages communication sessions between devices. 
          Sessions can be connection-oriented or connectionless, and can be mapped to transport connections in three ways:
          <ul className="list-disc ml-6 mt-1">
            <li>One-to-One Mapping: One session uses a single transport connection.</li>
            <li>Many-to-One Mapping: Multiple sessions share a single transport connection.</li>
            <li>One-to-Many Mapping: A single session uses multiple transport connections.</li>
          </ul>
          <p className="italic mt-1">Note: Once a session is released, the associated transport connection is also released.</p>
        </li>

        {/* 2 */}
        <li>
          <strong>Communication Synchronization:</strong> Ensures proper synchronization during data transfer using synchronization bits and checkpoints.
          <ul className="list-disc ml-6 mt-1">
            <li>Checkpoints allow recovery from failures without restarting the entire communication.</li>
          </ul>
          <p className="italic mt-1">Note: This is crucial for long and complex communications, as the Transport Layer can only handle communication errors, not application-level synchronization.</p>
        </li>

        {/* 3 */}
        <li>
          <strong>Activity Management:</strong> Divides a continuous communication stream into logical units called activities.
          <ul className="list-disc ml-6 mt-1">
            <li>Each activity is treated independently, allowing better management of operations during a session.</li>
            <li>Makes it easier to differentiate tasks within a single communication stream.</li>
          </ul>
        </li>

        {/* 4 */}
        <li>
          <strong>Dialog Management:</strong> Manages conversations between devices, deciding who sends data and when.
          <ul className="list-disc ml-6 mt-1">
            <li>Half-duplex Mode: Only one party transmits at a time. A token mechanism determines who can send.</li>
            <li>Full-duplex Mode: Both devices transmit simultaneously, no tokens needed.</li>
          </ul>
          <p className="italic mt-1">Note: Ensures efficiency and prevents data collisions.</p>
        </li>

        {/* 5 */}
        <li>
          <strong>Data Transfer:</strong> Manages the exchange of information between two systems while maintaining communication mode.
          <ul className="list-disc ml-6 mt-1">
            <li>Half-duplex: One device transmits while the other listens.</li>
            <li>Full-duplex: Both devices send and receive simultaneously.</li>
          </ul>
          <p className="italic mt-1">Note: Ensures reliable and orderly communication.</p>
        </li>

        {/* 6 */}
        <li>
          <strong>Resynchronization:</strong> Restores a session to a previously defined state after an error or failure.
          <ul className="list-disc ml-6 mt-1">
            <li>Set: Assigns a new synchronization point serial number chosen by the user.</li>
            <li>Abandon: Discards the current synchronization point serial number and sets it to an unused value.</li>
            <li>Restart: Assigns a synchronization point serial number greater than the last acknowledged major synchronization point.</li>
          </ul>
          <p className="italic mt-1">Note: Ensures sessions can recover from disruptions without restarting entirely.</p>
        </li>

      </ul>
    </div>
  );
};

export default SessionLayerFunctions;
