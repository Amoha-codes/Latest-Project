import React, { useState } from 'react';
// Import Layout
import Layout from './Layout.tsx';
// Import sidebar data
 
// Import specific topic components
import Home from './Topic/Home.tsx';
import BasicsComputerNetworks from './Topic/BasicsComputerNetworks.tsx';
import NetworkDevices from './Topic/NetworkDevices.tsx';
import TypesOfNetworks from './Topic/TypesOfNetworks.tsx';
import OSIModel from './Topic/OSIModel.tsx';
import TCPIPModel from './Topic/TCPIPModel.tsx';
import PhysicalLayerIntro from './Topic/PhysicalLayerIntro.tsx';
import NetworkTopology from './Topic/NetworkTopology.tsx';
import ModesOfTransmission from './Topic/ModesOfTransmission.tsx';
import TransmissionMedia from './Topic/TransmissionMedia.tsx';
import DataLink from './Topic/DataLink.tsx';
import SwitchingTechniques from './Topic/SwitchingTechniques.tsx';
import VLAN from './Topic/VLAN.tsx';
import LinkAggregation from './Topic/LinkAggregation.tsx';
import Framing from './Topic/Framing.tsx';
import ErrorDetection from './Topic/ErrorDetection.tsx';
import ErrorCorrection from './Topic/ErrorCorrection.tsx';
import ErrorControl from './Topic/ErrorControl.tsx';
import FlowControl from './Topic/FlowControl.tsx';
import StopWaitARQ from './Topic/StopWaitARQ.tsx';
import GoBackN from './Topic/GoBackN.tsx';
import SelectiveRepeat from './Topic/SelectiveRepeat.tsx';
import Piggybacking from './Topic/Piggybacking.tsx';
import NetworkLayer from './Topic/NetworkLayer.tsx';
import ClassfulAddressing from './Topic/ClassfulAddressing.tsx';
import ClasslessAddressing from './Topic/ClasslessAddressing.tsx';
import IPv4HeaderFormat from './Topic/IPv4HeaderFormat.tsx';
import IPv4vsIPv6 from './Topic/IPv4vsIPv6.tsx';
import PrivatePublicIP from './Topic/PrivatePublicIP.tsx';
import SubnettingBasics from './Topic/SubnettingBasics.tsx';
import SubnetMasks from './Topic/SubnetMasks.tsx';
import CalculateAddresses from './Topic/CalculateAddresses.tsx';
import VLSM from './Topic/VLSM.tsx';
import AdvancedVLSM from './Topic/AdvancedVLSM.tsx';
import Supernetting from './Topic/Supernetting.tsx';
import WhatIsRouting from './Topic/WhatIsRouting.tsx';
import StaticDynamicRouting from './Topic/StaticDynamicRouting.tsx';
import LinkStateRouting from './Topic/LinkStateRouting.tsx';
import DistanceVectorRouting from './Topic/DistanceVectorRouting.tsx';
import NAT from './Topic/NAT.tsx';
import ARP from './Topic/ARP.tsx';
import RARP from './Topic/RARP.tsx';
import DHCP from './Topic/DHCP.tsx';
import ICMP from './Topic/ICMP.tsx';
import IGMP from './Topic/IGMP.tsx';
import RIP from './Topic/RIP.tsx';
import OSPF from './Topic/OSPF.tsx';
import ISIS from './Topic/ISIS.tsx';
import EIGRP from './Topic/EIGRP.tsx';
import BGP from './Topic/BGP.tsx';
import MPLS from './Topic/MPLS.tsx';
import IP from './Topic/IP.tsx';
import GRE from './Topic/GRE.tsx';
import TransportLayer from './Topic/TransportLayer.tsx';
import TCPProtocol from './Topic/TCPProtocol.tsx';
import TCPHandshake from './Topic/TCPHandshake.tsx';
import TCPSegment from './Topic/TCPSegment.tsx';
import TCPConnectionEst from './Topic/TCPConnectionEst.tsx';
import TCPTermination from './Topic/TCPTermination.tsx';
import TCPCongestion from './Topic/TCPCongestion.tsx';
import UDPProtocol from './Topic/UDPProtocol.tsx';
import TCPvsUDP from './Topic/TCPvsUDP.tsx';
import SCTP from './Topic/SCTP.tsx';
import DCCP from './Topic/DCCP.tsx';
import RUDP from './Topic/RUDP.tsx';
import QUIC from './Topic/QUIC.tsx';
import SessionLayer from './Topic/SessionLayer.tsx';
import SessionLayerFunctions from './Topic/SessionLayerFunctions.tsx';
import PresentationLayer from './Topic/PresentationLayer.tsx';
import PresentationServices from './Topic/PresentationServices.tsx';
import AFP from './Topic/AFP.tsx';
import NCP from './Topic/NCP.tsx';
import SSL from './Topic/SSL.tsx';
import RPC from './Topic/RPC.tsx';
import PPTP from './Topic/PPTP.tsx';
import MIME from './Topic/MIME.tsx';
import ApplicationLayer from './Topic/ApplicationLayer.tsx';
import ClientServerModel from './Topic/ClientServerModel.tsx';
import WWW from './Topic/WWW.tsx';
import Email from './Topic/Email.tsx';
import CDN from './Topic/CDN.tsx';
import DNS from './Topic/DNS.tsx';
import FTP from './Topic/FTP.tsx';
import SMTP from './Topic/SMTP.tsx';
import SNMP from './Topic/SNMP.tsx';
import HTTP from './Topic/HTTP.tsx';
import HTTPS from './Topic/HTTPS.tsx';
import POP3 from './Topic/POP3.tsx';
import IMAP from './Topic/IMAP.tsx';
import LDAP from './Topic/LDAP.tsx';
import NTP from './Topic/NTP.tsx';
import TFTP from './Topic/TFTP.tsx';
import NNTP from './Topic/NNTP.tsx';
import MQTT from './Topic/MQTT.tsx';
import SIP from './Topic/SIP.tsx';
import SMB from './Topic/SMB.tsx';
import Authentication from './Topic/Authentication.tsx';
import Encryption from './Topic/Encryption.tsx';
import Firewalls from './Topic/Firewalls.tsx';
import MACFiltering from './Topic/MACFiltering.tsx';
import QoSMultimedia from './Topic/QoSMultimedia.tsx';
import QoSTechniques from './Topic/QoSTechniques.tsx';
import CongestionControl from './Topic/CongestionControl.tsx';
import TokenBucket from './Topic/TokenBucket.tsx';
import LeakyBucket from './Topic/LeakyBucket.tsx';
import WiFiStandards from './Topic/WiFiStandards.tsx';
import BluetoothZigbee from './Topic/BluetoothZigbee.tsx';
import MobileNetworks from './Topic/MobileNetworks.tsx';
import CloudServices from './Topic/CloudServices.tsx';
import VPN from './Topic/VPN.tsx';
import NFV from './Topic/NFV.tsx';
import NetworkSlicing from './Topic/NetworkSlicing.tsx';



// Map topic keys (from SidebarData) to actual components
const topicComponents: { [key: string]: React.FC } = {
  // 1. 
  Home:Home,
  BasicsComputerNetworks:BasicsComputerNetworks,
  NetworkDevices:NetworkDevices,
  TypesOfNetworks:TypesOfNetworks,

  // 2.
  OSIModel:OSIModel,
  TCPIPModel:TCPIPModel,

  // 3.
  PhysicalLayerIntro:PhysicalLayerIntro,
  NetworkTopology:NetworkTopology,
  ModesOfTransmission:ModesOfTransmission,
  TransmissionMedia:TransmissionMedia,

  // 4.
  DataLink:DataLink,
  SwitchingTechniques:SwitchingTechniques,
  VLAN:VLAN,
  LinkAggregation:LinkAggregation,
  Framing:Framing,
  ErrorDetection:ErrorDetection,
  ErrorCorrection:ErrorCorrection,
  ErrorControl:ErrorControl,
  FlowControl:FlowControl,
  StopWaitARQ:StopWaitARQ,
  GoBackN:GoBackN,
  SelectiveRepeat:SelectiveRepeat,
  Piggybacking:Piggybacking,

  // 5.
  NetworkLayer:NetworkLayer,
  ClassfulAddressing:ClassfulAddressing,
  ClasslessAddressing:ClasslessAddressing,
  IPv4HeaderFormat:IPv4HeaderFormat,
  IPv4vsIPv6:IPv4vsIPv6,
  PrivatePublicIP:PrivatePublicIP,

  // 6.
  SubnettingBasics:SubnettingBasics,
  SubnetMasks:SubnetMasks,
  CalculateAddresses:CalculateAddresses,
  VLSM:VLSM,
  AdvancedVLSM:AdvancedVLSM,
  Supernetting:Supernetting,

  // 7.
  WhatIsRouting:WhatIsRouting,
  StaticDynamicRouting:StaticDynamicRouting,
  LinkStateRouting:LinkStateRouting,
  DistanceVectorRouting:DistanceVectorRouting,
  NAT:NAT,

  // 8.
  ARP:ARP,
  RARP:RARP,
  DHCP:DHCP,
  ICMP:ICMP,
  IGMP:IGMP,
  RIP:RIP,
  OSPF:OSPF,
  ISIS:ISIS,
  EIGRP:EIGRP,
  BGP:BGP,
  MPLS:MPLS,
  IP:IP,
  GRE:GRE,

  // 9.
  TransportLayer:TransportLayer,
  TCPProtocol:TCPProtocol,
  TCPHandshake:TCPHandshake,
  TCPSegment:TCPSegment,
  TCPConnectionEst:TCPConnectionEst,
  TCPTermination:TCPTermination,
  TCPCongestion:TCPCongestion,
  UDPProtocol:UDPProtocol,
  TCPvsUDP:TCPvsUDP,
  SCTP:SCTP,
  DCCP:DCCP,
  RUDP:RUDP,
  QUIC:QUIC,

  // 10.
  SessionLayer:SessionLayer,
  SessionLayerFunctions:SessionLayerFunctions,
  PresentationLayer:PresentationLayer,
  PresentationServices:PresentationServices,
  AFP:AFP,
  NCP:NCP,
  SSL:SSL,
  RPC:RPC,
  PPTP:PPTP,
  MIME:MIME,

  // 11.
  ApplicationLayer:ApplicationLayer,
  ClientServerModel:ClientServerModel,
  WWW:WWW,
  Email:Email,
  CDN:CDN,

  // 12.
  DNS:DNS,
  FTP:FTP,
  SMTP:SMTP,
  SNMP:SNMP,
  HTTP:HTTP,
  HTTPS:HTTPS,
  POP3:POP3,
  IMAP:IMAP,
  LDAP:LDAP,
  NTP:NTP,
  TFTP:TFTP,
  NNTP:NNTP,
  MQTT:MQTT,
  SIP:SIP,
  SMB:SMB,

  // 13.
  Authentication:Authentication,
  Encryption:Encryption,
  Firewalls:Firewalls,
  MACFiltering:MACFiltering,

  // 14.
  QoSMultimedia:QoSMultimedia,
  QoSTechniques:QoSTechniques,
  CongestionControl:CongestionControl,
  TokenBucket:TokenBucket,
  LeakyBucket:LeakyBucket,

  // 15.
  WiFiStandards:WiFiStandards,
  BluetoothZigbee:BluetoothZigbee,
  MobileNetworks:MobileNetworks,

  // 16.
  CloudServices:CloudServices,
  VPN:VPN,
  NFV:NFV,

  // 17.
  NetworkSlicing:NetworkSlicing,



    
};

const COA: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const [selectedTopic, setSelectedTopic] = useState("home");

  const handleSelectTopic = (key: string) => {
   setSelectedTopic(key);

  };

  const CurrentComponent = topicComponents[selectedTopic] || Home;

  return (
    <Layout selected={selectedTopic} onSelect={handleSelectTopic} darkMode={darkMode}>
      <CurrentComponent />
    </Layout>
  );
};

export default COA;