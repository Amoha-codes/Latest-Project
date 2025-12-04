import { 
  BookOpen,
} from "lucide-react";

export interface SubTopic {
  title: string;
  component: string;
}

export interface SidebarItem {
  [x: string]: unknown;
  title: string;
  component: string;
  hasArrow?: boolean;
  subtopics?: SubTopic[];
}

export const sidebarItems: SidebarItem[] = [
  { title: "Tutorial", component: "Home", icon: BookOpen },

  // ================= 1.FUNDAMENTALS OF COMPUTER NETWORK =================
  {
    title: "Fundamentals of Computer Network",
    component: "FundamentalsOfComputerNetwork",
    hasArrow: true,
    subtopics: [
      { title: "Basics of Computer Networks", component: "BasicsComputerNetworks" },
      { title: "Network Devices", component: "NetworkDevices" },
      { title: "Types of Networks", component: "TypesOfNetworks" },
    ],
  },

  // ================= 2.NETWORK MODELS =================
  {
    title: "Network Models",
    component: "NetworkModelsSection",
    hasArrow: true,
    subtopics: [
      { title: "OSI Model", component: "OSIModel" },
      { title: "TCP/IP Model", component: "TCPIPModel" },
    ],
  },

  // ================= 3.PHYSICAL LAYER =================
  {
    title: "Physical Layer",
    component: "PhysicalLayer",
    hasArrow: true,
    subtopics: [
      { title: "Physical Layer", component: "PhysicalLayerIntro" },
      { title: "Types of Network Topology", component: "NetworkTopology" },
      { title: "Modes of Transmission", component: "ModesOfTransmission" },
      { title: "Transmission Media", component: "TransmissionMedia" },
    ],
  },

  // ================= 4.DATA LINK LAYER =================
  {
    title: "Data Link Layer",
    component: "DataLinkLayer",
    hasArrow: true,
    subtopics: [
       { title: "Data Link Layer", component: "DataLink" },
      { title: "Switching Techniques", component: "SwitchingTechniques" },
      { title: "Virtual LAN", component: "VLAN" },
      { title: "Link Aggregation", component: "LinkAggregation" },
      { title: "Framing", component: "Framing" },
      { title: "Error Detection", component: "ErrorDetection" },
      { title: "Error Correction", component: "ErrorCorrection" },
      { title: "Error Control", component: "ErrorControl" },
      { title: "Flow Control", component: "FlowControl" },
      { title: "Stop and Wait ARQ", component: "StopWaitARQ" },
      { title: "Go Back N", component: "GoBackN" },
      { title: "Selective Repeat", component: "SelectiveRepeat" },
      { title: "Piggybacking", component: "Piggybacking" },
    ],
  },

  // ================= 5.NETWORK LAYER =================
  {
    title: "Network Layer",
    component: "NetworkLayer",
    hasArrow: true,
    subtopics: [
       { title: "Network Layer", component: "NetworkLayer" },
      { title: "Classful Addressing", component: "ClassfulAddressing" },
      { title: "Classless Addressing", component: "ClasslessAddressing" },
      { title: "IPv4 Header Format", component: "IPv4HeaderFormat" },
      { title: "IPv4 vs IPv6", component: "IPv4vsIPv6" },
      { title: "Private vs Public IP", component: "PrivatePublicIP" },
    ],
  },

  // ================= 6.SUBNETTING =================
  {
    title: "Subnetting",
    component: "Subnetting",
    hasArrow: true,
    subtopics: [
      { title: "Subnetting Basics", component: "SubnettingBasics" },
      { title: "Subnet Masks", component: "SubnetMasks" },
      { title: "Calculate Network / Broadcast / Hosts", component: "CalculateAddresses" },
      { title: "VLSM", component: "VLSM" },
      { title: "Advanced VLSM", component: "AdvancedVLSM" },
      { title: "Supernetting", component: "Supernetting" },
    ],
  },

  // ================= 7.ROUTING =================
  {
    title: "Routing",
    component: "Routing",
    hasArrow: true,
    subtopics: [
      { title: "What is Routing?", component: "WhatIsRouting" },
      { title: "Static vs Dynamic Routing", component: "StaticDynamicRouting" },
      { title: "Link State Routing", component: "LinkStateRouting" },
      { title: "Distance Vector Routing", component: "DistanceVectorRouting" },
      { title: "NAT", component: "NAT" },
    ],
  },

  // ================= 8.NETWORK LAYER PROTOCOLS =================
  {
    title: "Network Layer Protocols",
    component: "NetworkLayerProtocols",
    hasArrow: true,
    subtopics: [
      { title: "ARP", component: "ARP" },
      { title: "RARP", component: "RARP" },
      { title: "DHCP", component: "DHCP" },
      { title: "ICMP", component: "ICMP" },
      { title: "IGMP", component: "IGMP" },
      { title: "RIP", component: "RIP" },
      { title: "OSPF", component: "OSPF" },
      { title: "IS-IS", component: "ISIS" },
      { title: "EIGRP", component: "EIGRP" },
      { title: "BGP", component: "BGP" },
      { title: "MPLS", component: "MPLS" },
      { title: "IP", component: "IP" },
      { title: "GRE", component: "GRE" },
    ],
  },

  // ================= 9.TRANSPORT LAYER =================
  {
    title: "Transport Layer",
    component: "TransportLayer",
    hasArrow: true,
    subtopics: [
      { title: "Transport Layer", component: "TransportLayer" },
      { title: "TCP Protocol", component: "TCPProtocol" },
      { title: "TCP 3-Way Handshake", component: "TCPHandshake" },
      { title: "TCP Services & Segment Structure", component: "TCPSegment" },
      { title: "TCP Connection Establishment", component: "TCPConnectionEst" },
      { title: "TCP Termination", component: "TCPTermination" },
      { title: "Congestion Control in TCP", component: "TCPCongestion" },
      { title: "UDP Protocol", component: "UDPProtocol" },
      { title: "TCP vs UDP", component: "TCPvsUDP" },
      { title: "SCTP", component: "SCTP" },
      { title: "DCCP", component: "DCCP" },
      { title: "RUDP", component: "RUDP" },
      { title: "QUIC", component: "QUIC" },
    ],
  },

  // ================= 10.SESSION & PRESENTATION LAYER =================
  {
    title: "Session & Presentation Layer",
    component: "SessionPresentation",
    hasArrow: true,
    subtopics: [
      { title: "Session Layer", component: "SessionLayer" },
      { title: "Functions of Session Layer", component: "SessionLayerFunctions" },
      { title: "Presentation Layer", component: "PresentationLayer" },
      { title: "Services of Presentation Layer", component: "PresentationServices" },
      { title: "AFP", component: "AFP" },
      { title: "NCP", component: "NCP" },
      { title: "SSL", component: "SSL" },
      { title: "RPC", component: "RPC" },
      { title: "PPTP", component: "PPTP" },
      { title: "MIME", component: "MIME" },
    ],
  },

  // ================= 11.APPLICATION LAYER =================
  {
    title: "Application Layer",
    component: "ApplicationLayer",
    hasArrow: true,
    subtopics: [
      { title: "Application Layer", component: "ApplicationLayer" },
      { title: "Client-Server Model", component: "ClientServerModel" },
      { title: "WWW", component: "WWW" },
      { title: "E-Mail", component: "Email" },
      { title: "CDN", component: "CDN" },
    ],
  },

  // ================= 12.APPLICATION LAYER PROTOCOLS =================
  {
    title: "Application Layer Protocols",
    component: "ApplicationLayerProtocols",
    hasArrow: true,
    subtopics: [
      { title: "DNS", component: "DNS" },
      { title: "FTP", component: "FTP" },
      { title: "SMTP", component: "SMTP" },
      { title: "SNMP", component: "SNMP" },
      { title: "HTTP", component: "HTTP" },
      { title: "HTTPS", component: "HTTPS" },
      { title: "POP3", component: "POP3" },
      { title: "IMAP", component: "IMAP" },
      { title: "LDAP", component: "LDAP" },
      { title: "NTP", component: "NTP" },
      { title: "TFTP", component: "TFTP" },
      { title: "NNTP", component: "NNTP" },
      { title: "MQTT", component: "MQTT" },
      { title: "SIP", component: "SIP" },
      { title: "SMB", component: "SMB" },
    ],
  },

  // =================  13.NETWORK SECURITY =================
  {
    title: "Network Security",
    component: "NetworkSecurity",
    hasArrow: true,
    subtopics: [
      { title: "Authentication", component: "Authentication" },
      { title: "Encryption", component: "Encryption" },
      { title: "Firewalls", component: "Firewalls" },
      { title: "MAC Address Filtering", component: "MACFiltering" },
    ],
  },

  // ================= 14.QoS =================
  {
    title: "Quality of Service (QoS)",
    component: "QoS",
    hasArrow: true,
    subtopics: [
      { title: "What is QoS & Multimedia?", component: "QoSMultimedia" },
      { title: "Techniques for QoS", component: "QoSTechniques" },
      { title: "Congestion Control", component: "CongestionControl" },
      { title: "Token Bucket", component: "TokenBucket" },
      { title: "Leaky Bucket", component: "LeakyBucket" },
    ],
  },

  // ================= 15.WIRELESS & MOBILE NETWORKING =================
  {
    title: "Wireless & Mobile Networking",
    component: "WirelessMobileNetworking",
    hasArrow: true,
    subtopics: [
      { title: "Wi-Fi Standards", component: "WiFiStandards" },
      { title: "Bluetooth & Zigbee", component: "BluetoothZigbee" },
      { title: "Mobile Networks", component: "MobileNetworks" },
    ],
  },

  // ================= 16.CLOUD NETWORKING =================
  {
    title: "Cloud Networking",
    component: "CloudNetworking",
    hasArrow: true,
    subtopics: [
      { title: "Types of Cloud Services", component: "CloudServices" },
      { title: "Virtual Private Network", component: "VPN" },
      { title: "Network Function Virtualization (NFV)", component: "NFV" },
    ],
  },

  // ================= 17.EMERGING NETWORKING TRENDS =================
  {
    title: "Emerging Networking Trends",
    component: "EmergingTrends",
    hasArrow: true,
    subtopics: [
      { title: "Network Slicing in 5G", component: "NetworkSlicing" },
    ],
  },
];
