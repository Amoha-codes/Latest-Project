import React from "react";

const ApplicationLayer: React.FC = () => {
  return (
    <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-2">
        Application Layer in OSI Model
      </h1>
      <p className="text-sm text-gray-500">Last Updated : 15 Oct, 2025</p>

      {/* Introduction */}
      <p className="text-lg leading-relaxed">
        The Application Layer is the topmost (7th) layer of the OSI (Open Systems Interconnection) model. It provides network services directly to users and applications, acting as the interface between the user and the underlying network.
      </p>

      <p className="italic">
        Note: It provides essential services such as file transfer, remote login, electronic mail, directory services, name resolution, and network resource sharing, making it indispensable for modern communication.
      </p>

      {/* Functions of Application Layer */}
      <h2 className="text-3xl font-bold mt-8">Functions of Application Layer</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>
          <strong>Data Representation:</strong> Converts user data into a network-compatible format (e.g., ASCII, JPEG, HTML) before transmission and interprets received data back into user-friendly form.
        </li>
        <li>
          <strong>Network Service Access:</strong> Provides direct access to network services for applications like email, file transfer, and remote login.
        </li>
        <li>
          <strong>Application Protocols:</strong> Defines rules and procedures for communication, including message formatting and data exchange. Examples: HTTP, FTP, SMTP, DNS.
        </li>
        <li>
          <strong>Session Management:</strong> Establishes, manages, and terminates communication sessions, maintaining synchronization and proper closure. Example: Logging into a remote server using Telnet or SSH.
        </li>
      </ul>

      {/* Working of Application Layer */}
      <h2 className="text-3xl font-bold mt-8">Working of Application Layer</h2>
      <p className="text-lg leading-relaxed">
        When a client communicates with a server, the following steps occur:
      </p>
      <ul className="list-disc ml-6 space-y-1">
        <li>The client sends a command to the server, which allocates a port number to the client.</li>
        <li>The client sends an initiation request to establish a connection, and the server acknowledges (ACK).</li>
        <li>After the connection is established, the client can request files or upload data to the server.</li>
      </ul>

      {/* Services Provided */}
      <h2 className="text-3xl font-bold mt-8">Services Provided by Application Layer Protocols</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li>Define communication processes for both sender and receiver.</li>
        <li>Specify the type and syntax of messages being sent or received.</li>
        <li>Define message delivery and expected responses.</li>
        <li>Ensure proper interaction with lower layers.</li>
      </ul>

      {/* Protocols of the Application Layer */}
      <h2 className="text-3xl font-bold mt-8">Application Layer Protocols</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>HTTP (HyperText Transfer Protocol):</strong> Web communication (Port 80)</li>
        <li><strong>DNS (Domain Name System):</strong> Domain name resolution (Port 53)</li>
        <li><strong>TELNET:</strong> Remote login and file management (Port 23)</li>
        <li><strong>DHCP (Dynamic Host Configuration Protocol):</strong> Dynamic IP assignment (Ports 67 & 68)</li>
        <li><strong>FTP (File Transfer Protocol):</strong> File transfer (Ports 20 for data, 21 for control)</li>
        <li><strong>SMTP (Simple Mail Transfer Protocol):</strong> Sending emails (Ports 25 & 587)</li>
        <li><strong>NFS (Network File System):</strong> Remote file access (Port 2049)</li>
        <li><strong>SNMP (Simple Network Management Protocol):</strong> Device monitoring and management (Ports 161 & 162)</li>
      </ul>
    </div>
  );
};

export default ApplicationLayer;
