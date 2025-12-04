import React from "react";

const NNTPTheory: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= NNTP ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Network News Transfer Protocol (NNTP)
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 12 Jul, 2025</p>

    {/* Introduction */}
    <p className="text-lg leading-relaxed">
      Network News Transfer Protocol (NNTP) is the protocol behind Usenet, a global discussion system that hosts posts or articles called "news." NNTP enables the transfer of news articles between servers and provides access to newsgroups for clients. Clients can be web browsers with built-in NNTP support (like Netscape, Opera, or Internet Explorer) or specialized newsreader applications. NNTP servers manage the distributed network of newsgroups across the Internet.
    </p>

    {/* History */}
    <h2 className="text-3xl font-bold mt-6">History</h2>
    <p className="leading-relaxed">
      Originally, Usenet used the Unix-to-Unix Copy Protocol (UUCP), where servers copied news locally and users accessed articles directly from the server's disk. As the Internet grew, there was a need to make Usenet accessible to personal computers. NNTP was developed to meet this need, taking inspiration from the Simple Mail Transfer Protocol (SMTP). Key contributors included Brian Kantor, Phil Lapsley, Sant.O.Barber, and Erik Fair. RFC 977, "Network News Transfer Protocol," was authored by Kantor and Lapsley in March 1986.
    </p>

    {/* Working */}
    <h2 className="text-3xl font-bold mt-6">Working of NNTP</h2>
    <p className="leading-relaxed">
      NNTP defines rules for clients (newsreaders) to interact with servers and retrieve articles or entire newsgroups. Common client commands include:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>ARTICLE:</strong> Retrieves a specific article.</li>
      <li><strong>NEWS:</strong> Retrieves an entire newsgroup.</li>
    </ul>
    <p className="leading-relaxed">
      These commands are typically handled by newsreader software, which communicates with NNTP servers over TCP ports <strong>119</strong> (default) or <strong>563</strong> (encrypted NNTP over SSL, also called NNSP). Servers exchange articles with peer servers in a distributed network. Each server can choose which newsgroups to store, provided peer servers maintain the remaining groups. New articles added to a server are propagated periodically to peers, ensuring network-wide distribution.
    </p>

    {/* Hosting */}
    <h2 className="text-3xl font-bold mt-6">Hosting Newsgroups</h2>
    <p className="leading-relaxed">
      Anyone can create personal newsgroups using software like <strong>Apache James</strong> or <strong>Leafnode</strong>. NNTP servers coordinate with peers to synchronize articles and maintain consistent access to global newsgroups. This distributed architecture allows flexibility in storage and redundancy across the network.
    </p>
  </div>
);

export default NNTPTheory;
