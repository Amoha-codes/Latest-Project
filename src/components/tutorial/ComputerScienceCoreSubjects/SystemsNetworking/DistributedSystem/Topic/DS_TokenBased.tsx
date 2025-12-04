import React from 'react';

const SuzukiKasami: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Title ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Suzuki–Kasami Algorithm for Mutual Exclusion
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 11 Jul, 2025</p>

    {/* Introduction */}
    <p className="text-lg leading-relaxed">
      The <strong>Suzuki–Kasami algorithm</strong> is a <strong>token-based algorithm</strong> for mutual exclusion in distributed systems. 
      It is a modification of the Ricart–Agrawala algorithm (permission-based, non-token) that uses REQUEST and REPLY messages to ensure mutual exclusion. 
    </p>

    <p className="text-lg leading-relaxed">
      In token-based algorithms, a site can enter its Critical Section only if it holds the unique token. Non-token algorithms use timestamps to order requests, while token-based algorithms use sequence numbers to differentiate old and new requests.
    </p>

    {/* Data Structures */}
    <h2 className="text-3xl font-bold mt-8">Data Structures & Notations</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>
        <strong>RN[1...N]</strong>: Each site Si maintains RN[i][1...N], where RN[i][j] is the largest sequence number received from site Sj via REQUEST messages.
      </li>
      <li>
        <strong>LN[1...N]</strong>: Stored in the token. LN[j] is the sequence number of the last executed request by site Sj.
      </li>
      <li>
        <strong>Queue Q</strong>: Maintained by the token to track sites waiting for the token.
      </li>
    </ul>

    {/* Algorithm Steps */}
    <h2 className="text-3xl font-bold mt-8">Algorithm Steps</h2>

    <h3 className="text-xl font-semibold mt-4">To Enter Critical Section:</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>If site Si wants to enter the Critical Section and does not have the token, it increments its sequence number RN[i][i] and sends <strong>REQUEST(i, sn)</strong> to all other sites.</li>
      <li>When site Sj receives REQUEST(i, sn) from Si, it sets RN[j][i] = max(RN[j][i], sn).</li>
      <li>If Sj has the token and RN[j][i] = LN[i] + 1, it sends the token to Si.</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">To Execute Critical Section:</h3>
    <p className="leading-relaxed">Site Si executes the Critical Section only after acquiring the token.</p>

    <h3 className="text-xl font-semibold mt-4">To Release Critical Section:</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Si sets LN[i] = RN[i] to indicate its request has been executed.</li>
      <li>For each site Sj not in the token queue Q, append its ID if RN[j] = LN[j] + 1.</li>
      <li>If Q is non-empty, pop a site ID from Q and send the token to that site; otherwise, retain the token.</li>
    </ul>

    {/* Message Complexity */}
    <h2 className="text-3xl font-bold mt-8">Message Complexity</h2>
    <p className="leading-relaxed">
      - 0 messages if the site already holds the idle token. <br/>
      - Maximum of <strong>N messages</strong> per Critical Section execution if the token is not held:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>(N - 1) REQUEST messages</li>
      <li>1 REPLY message</li>
    </ul>

    {/* Drawbacks */}
    <h2 className="text-3xl font-bold mt-8">Drawbacks</h2>
    <p className="leading-relaxed">
      Non-symmetric: A site may retain the token even without requesting the Critical Section, violating the principle that no site should have the right to enter the Critical Section unless requested.
    </p>

    {/* Performance */}
    <h2 className="text-3xl font-bold mt-8">Performance</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Synchronization delay is 0 and no messages are needed if the site holds the idle token at request time.</li>
      <li>If the site does not hold the token, maximum synchronization delay equals the maximum message transmission time, requiring up to N messages per Critical Section invocation.</li>
    </ul>

  </div>
);

export default SuzukiKasami;
