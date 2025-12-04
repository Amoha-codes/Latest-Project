import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Classless IP Addressing ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Classless IP Addressing (CIDR)
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 23 Jul, 2025</p>

    <p className="text-lg leading-relaxed">
      Classless Inter-Domain Routing (CIDR) or classless addressing is a modern method of IP allocation that overcomes the limitations of classful addressing. It allows flexible subnetting and efficient use of IP addresses by using a subnet mask of variable length, indicated after a "/" symbol.
    </p>

    <h2 className="text-3xl font-bold mt-8">Network Address & Subnet Mask</h2>
    <p className="text-lg leading-relaxed">
      The network address identifies the network portion of an IP address. A subnet mask is a 32-bit number that, when ANDed with any IP in the block, gives the network address.
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Class A: 255.0.0.0</li>
      <li>Class B: 255.255.0.0</li>
      <li>Class C: 255.255.255.0</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Subnetting</h2>
    <p className="text-lg leading-relaxed">
      Subnetting divides a large network into smaller, more efficient subnetworks. Each subnet can handle traffic independently, reducing unnecessary data flow across the network.
    </p>

    <h2 className="text-3xl font-bold mt-8">CIDR / Classless Addressing</h2>
    <p className="text-lg leading-relaxed">
      In classless addressing, host ID bits of a classful address are used as network ID bits. CIDR notation indicates the number of bits in the subnet mask, e.g., <code>192.168.1.1/28</code> has a mask of 28 bits, resulting in <code>255.255.255.240</code>.
    </p>

    <h2 className="text-3xl font-bold mt-8">Subnetting Calculations</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Number of subnets:</strong> 2^(given mask bits - default class mask bits)</li>
      <li><strong>Subnet address:</strong> AND of IP address and subnet mask</li>
      <li><strong>Broadcast address:</strong> Set all host bits to 1</li>
      <li><strong>Number of hosts per subnet:</strong> 2^(32 - mask bits) - 2</li>
      <li><strong>First Host ID:</strong> Subnet address + 1</li>
      <li><strong>Last Host ID:</strong> Subnet address + number of hosts</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Example Program (C++): Classful → Classless</h2>
    <pre className="bg-gray-400 p-4 rounded text-sm overflow-x-auto">
{`#include <bits/stdc++.h>
using namespace std;

string ip_classless(string ip){
    int first_octet = stoi(ip.substr(0, ip.find('.')));
    if(first_octet >= 0 && first_octet <= 127) return ip + "/8";
    if(first_octet >= 128 && first_octet <= 191) return ip + "/16";
    if(first_octet >= 192 && first_octet <= 223) return ip + "/24";
    return "Reserved IP Address. Invalid."; 
}

int main() {
    string ip;
    cout << "Enter the IP Address: ";
    cin >> ip;
    cout << ip_classless(ip) << endl;
    return 0;
}`}
    </pre>
    <p className="text-lg leading-relaxed">
      This program converts a classful IP to CIDR notation by determining its class and assigning the default subnet mask accordingly.
    </p>

    <h2 className="text-3xl font-bold mt-8">Example Subnetting Calculation</h2>
    <p className="text-lg leading-relaxed">
      Given <code>172.16.0.0/25</code> (Class B):
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Number of subnets = 2^(25 - 16) = 512</li>
      <li>Number of hosts per subnet = 2^(32 - 25) - 2 = 126</li>
      <li>First subnet block:
        <ul className="list-disc ml-6">
          <li>Subnet address: 172.16.0.0</li>
          <li>First Host ID: 172.16.0.1</li>
          <li>Last Host ID: 172.16.0.126</li>
          <li>Broadcast address: 172.16.0.127</li>
        </ul>
      </li>
    </ul>

  </div>
);

export default Home;
