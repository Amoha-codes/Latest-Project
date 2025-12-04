import React from "react";

const RubySockets: React.FC = () => (
  <div className="mt-20 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-3">
      Ruby – Socket Programming
    </h1>

    <p>
      Ruby provides low-level access to network services using <strong>sockets</strong>,
      allowing you to implement clients and servers for both connection-oriented (TCP) 
      and connectionless (UDP) protocols. Ruby also has higher-level libraries for FTP, 
      HTTP, SMTP, and more.
    </p>

    <h2 className="text-2xl font-bold mt-6">What are Sockets?</h2>
    <p>
      Sockets are endpoints of a bidirectional communication channel. They can be used:
    </p>
    <ul className="list-disc list-inside space-y-1">
      <li>Within a process</li>
      <li>Between processes on the same machine</li>
      <li>Between processes on different machines</li>
    </ul>
    <p>
      Common terms in socket programming:
    </p>
    <ul className="list-disc list-inside space-y-1">
      <li><strong>Domain:</strong> Protocol family (e.g., PF_INET, PF_UNIX).</li>
      <li><strong>Type:</strong> Connection type (e.g., SOCK_STREAM for TCP, SOCK_DGRAM for UDP).</li>
      <li><strong>Protocol:</strong> Typically 0, can specify protocol variant.</li>
      <li><strong>Hostname:</strong> Server identifier (name, IP, or &lt;broadcast&gt;).</li>
      <li><strong>Port:</strong> Port number or service name.</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">A Simple TCP Client</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`require 'socket'

hostname = 'localhost'
port = 2000

s = TCPSocket.open(hostname, port)

while line = s.gets
  puts line.chop
end

s.close`}</pre>

    <h2 className="text-2xl font-bold mt-6">A Simple TCP Server</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`require 'socket'

server = TCPServer.open(2000)
loop do
  client = server.accept
  client.puts(Time.now.ctime)
  client.puts "Closing the connection. Bye!"
  client.close
end`}</pre>

    <h2 className="text-2xl font-bold mt-6">Multi-Client TCP Server (Threaded)</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`require 'socket'

server = TCPServer.open(2000)
loop do
  Thread.start(server.accept) do |client|
    client.puts(Time.now.ctime)
    client.puts "Closing the connection. Bye!"
    client.close
  end
end`}</pre>

    <h2 className="text-2xl font-bold mt-6">A Tiny Web Browser</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`require 'socket'

host = 'www.tutorialspoint.com'
port = 80
path = "/index.htm"

request = "GET #{path} HTTP/1.0\r\n\r\n"

socket = TCPSocket.open(host, port)
socket.print(request)
response = socket.read

headers, body = response.split("\r\n\r\n", 2)
print body`}</pre>

    <p>
      Alternatively, you can use <code>Net::HTTP</code> for a higher-level HTTP client:
    </p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">{`require 'net/http'

host = 'www.tutorialspoint.com'
path = '/index.htm'

http = Net::HTTP.new(host)
headers, body = http.get(path)
if headers.code == "200"
  print body
else
  puts "\#{headers.code} \#{headers.message}"
end`}</pre>

    <h2 className="text-2xl font-bold mt-6">Notes</h2>
    <ul className="list-disc list-inside space-y-1">
      <li>Use <code>TCPSocket</code> to create clients and <code>TCPServer</code> for servers.</li>
      <li>Threading allows handling multiple clients simultaneously.</li>
      <li>You can implement any Internet protocol (HTTP, FTP, SMTP) using sockets.</li>
      <li>Higher-level libraries like <code>Net::HTTP</code> simplify common protocols.</li>
    </ul>
  </div>
);

export default RubySockets;
