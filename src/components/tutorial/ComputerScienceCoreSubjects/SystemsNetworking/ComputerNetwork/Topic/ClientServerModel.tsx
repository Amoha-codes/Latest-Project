import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Client-Server Model ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Client-Server Model
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 27 Aug, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      The Client-Server Model is a distributed architecture where clients request services and servers provide them. It underpins many modern systems, including websites, email, and cloud storage platforms.
    </p>

    {/* How it Works */}
    <h2 className="text-3xl font-bold mt-8">How Does the Client-Server Model Work?</h2>
    <p className="leading-relaxed">
      <strong>Client:</strong> A client is any device or software that initiates communication by requesting data or services from a server. Common client applications include web browsers (e.g., Chrome, Firefox) and email apps (e.g., Gmail, Outlook).
    </p>
    <p className="leading-relaxed">
      <strong>Server:</strong> A server is a powerful system that listens for and responds to client requests by delivering data or performing tasks. Servers often handle multiple simultaneous client requests. Examples include web servers (Apache, Nginx), email servers, and database servers.
    </p>

    {/* Browser Interaction */}
    <h2 className="text-3xl font-bold mt-8">How the Browser Interacts With the Servers?</h2>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li><strong>User Enters the URL:</strong> The user types a website address (e.g., www.example.com) into the browser's address bar.</li>
      <li><strong>DNS Lookup:</strong> The browser contacts a DNS server to convert the domain into an IP address.</li>
      <li><strong>Establishing a Connection:</strong> The browser sends an HTTP/HTTPS request to the server using the resolved IP address.</li>
      <li><strong>Server Responds:</strong> The server sends back website files (HTML, CSS, JavaScript, images).</li>
      <li><strong>Browser Renders the Webpage:</strong>
        <ul className="list-disc ml-6">
          <li>DOM interpreter: Processes HTML to structure the page.</li>
          <li>CSS interpreter: Applies styles.</li>
          <li>JavaScript engine: Adds interactivity (JIT compilation for performance).</li>
        </ul>
      </li>
    </ol>

    {/* C++ Example */}
    <h2 className="text-3xl font-bold mt-8">Client-Server Communication in C++</h2>
    <p className="leading-relaxed">
      In C++, sockets are used for communication between the client and the server over a network. Example server and client code:
    </p>

   <pre className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm overflow-x-auto">
  <code>
{`// Server code (server.cpp)
#include <iostream>
#include <cstring>
#include <unistd.h>
#include <netinet/in.h>

int main() {
    int server_fd, new_socket;
    struct sockaddr_in address;
    int addrlen = sizeof(address);
    char buffer[1024] = {0};

    server_fd = socket(AF_INET, SOCK_STREAM, 0);
    address.sin_family = AF_INET;
    address.sin_addr.s_addr = INADDR_ANY;
    address.sin_port = htons(8080);

    bind(server_fd, (struct sockaddr*)&address, sizeof(address));
    listen(server_fd, 3);
    std::cout << "Server waiting for connection...\\n";

    new_socket = accept(server_fd, (struct sockaddr*)&address, (socklen_t*)&addrlen);
    read(new_socket, buffer, 1024);
    std::cout << "Client says: " << buffer << std::endl;

    const char* reply = "Hello from server!";
    send(new_socket, reply, strlen(reply), 0);

    close(new_socket);
    close(server_fd);
    return 0;
}`}
  </code>
</pre>


   <pre className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm overflow-x-auto">
  <code>
{`// Client code (client.cpp)
#include <iostream>
#include <cstring>
#include <unistd.h>
#include <arpa/inet.h>

int main() {
    int sock = 0;
    struct sockaddr_in serv_addr;
    char buffer[1024] = {0};

    sock = socket(AF_INET, SOCK_STREAM, 0);
    serv_addr.sin_family = AF_INET;
    serv_addr.sin_port = htons(8080);
    inet_pton(AF_INET, "127.0.0.1", &serv_addr.sin_addr);

    connect(sock, (struct sockaddr*)&serv_addr, sizeof(serv_addr));
    const char* hello = "Hello from client!";
    send(sock, hello, strlen(hello), 0);
    read(sock, buffer, 1024);
    std::cout << "Server says: " << buffer << std::endl;

    close(sock);
    return 0;
}`}
  </code>
</pre>


    {/* Real-World Examples */}
    <h2 className="text-3xl font-bold mt-8">Real-World Examples</h2>
    <table className="table-auto border-collapse border border-gray-300 w-full text-left">
      <thead>
        <tr>
          <th className="border border-gray-300 px-2 py-1">Use Case</th>
          <th className="border border-gray-300 px-2 py-1">Client</th>
          <th className="border border-gray-300 px-2 py-1">Server</th>
          <th className="border border-gray-300 px-2 py-1">Function</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-2 py-1">Email</td>
          <td className="border border-gray-300 px-2 py-1">Gmail, Outlook</td>
          <td className="border border-gray-300 px-2 py-1">Gmail/Yahoo Mail Servers</td>
          <td className="border border-gray-300 px-2 py-1">Send/receive email messages</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-2 py-1">Web Browsing</td>
          <td className="border border-gray-300 px-2 py-1">Chrome, Firefox</td>
          <td className="border border-gray-300 px-2 py-1">Apache, Nginx</td>
          <td className="border border-gray-300 px-2 py-1">Access and display websites</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-2 py-1">Cloud Storage</td>
          <td className="border border-gray-300 px-2 py-1">PC, Mobile App</td>
          <td className="border border-gray-300 px-2 py-1">Google Drive, Dropbox Servers</td>
          <td className="border border-gray-300 px-2 py-1">Upload/download and sync files</td>
        </tr>
      </tbody>
    </table>

    {/* Advantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Centralized Data Management</li>
      <li>Cost Efficiency</li>
      <li>Scalability</li>
      <li>Security</li>
      <li>Data Recovery</li>
    </ul>

    {/* Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Disadvantages</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Client Vulnerability</li>
      <li>Server as a Target</li>
      <li>Data Spoofing</li>
      <li>MITM Attacks</li>
    </ul>

  </div>
);

export default Home;
