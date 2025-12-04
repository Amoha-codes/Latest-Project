import React, { useState } from 'react';
// Import Layout
import Layout from './Layout.tsx';
// Import sidebar data
 
// Import specific topic components
import Home from './Topic/Home.tsx';
import WhatIsComputer from './Topic/WhatIsComputer.tsx';
import ComputerDesignIssues from './Topic/ComputerDesignIssues.tsx';
import VonNeumann from './Topic/VonNeumann.tsx';
import HarvardArchitecture from './Topic/HarvardArchitecture.tsx';
import FlynnsTaxonomy from './Topic/FlynnsTaxonomy.tsx';
import NumberSystems from './Topic/NumberSystems.tsx';
import BaseConversions from './Topic/BaseConversions.tsx';
import CharacterRepresentation from './Topic/CharacterRepresentation.tsx';
import ErrorDetectionCorrection from './Topic/ErrorDetectionCorrection.tsx';
import FixedPoint from './Topic/FixedPoint.tsx';
import FloatingPoint from './Topic/FloatingPoint.tsx';
import DigitalElectronics from './Topic/DigitalElectronics.tsx';
import BooleanAlgebra from './Topic/BooleanAlgebra.tsx';
import CombinationalSequential from './Topic/CombinationalSequential.tsx';
import RegisterTransferLanguage from './Topic/RegisterTransferLanguage.tsx';
import DataTransfers from './Topic/DataTransfers.tsx';
import ArithmeticMicroOps from './Topic/ArithmeticMicroOps.tsx';
import ShiftMicroOps from './Topic/ShiftMicroOps.tsx';
import Microoperations from './Topic/Microoperations.tsx';
import ControlUnit from './Topic/ControlUnit.tsx';
import InstructionFormat from './Topic/InstructionFormat.tsx';
import AddressingModes from './Topic/AddressingModes.tsx';
import MicroarchitectureISA from './Topic/MicroarchitectureISA.tsx';
import TimingControl from './Topic/TimingControl.tsx';
import RISCvsCISC from './Topic/RISCvsCISC.tsx';
import ALUDataPath from './Topic/ALUDataPath.tsx';
import Complements from './Topic/Complements.tsx';
import RestoringDivision from './Topic/RestoringDivision.tsx';
import NonRestoringDivision from './Topic/NonRestoringDivision.tsx';
import BoothsAlgorithm from './Topic/BoothsAlgorithm.tsx';
import OverflowAddition from './Topic/OverflowAddition.tsx';
import MemoryUnits from './Topic/MemoryUnits.tsx';
import Paging from './Topic/Paging.tsx';
import Segmentation from './Topic/Segmentation.tsx';
import VirtualMemory from './Topic/VirtualMemory.tsx';
import PageReplacement from './Topic/PageReplacement.tsx';
import TLB from './Topic/TLB.tsx';
import NUMAvsUMA from './Topic/NUMAvsUMA.tsx';
import MemoryInterleaving from './Topic/MemoryInterleaving.tsx';
import MemoryAddressing from './Topic/MemoryAddressing.tsx';
import MemoryAccess from './Topic/MemoryAccess.tsx';
import IOIntroduction from './Topic/IOIntroduction.tsx';
import IOInterruptDMA from './Topic/IOInterruptDMA.tsx';
import MemoryMappedIO from './Topic/MemoryMappedIO.tsx';
import Interrupts from './Topic/Interrupts.tsx';
import DMA from './Topic/DMA.tsx';
import DMAModes from './Topic/DMAModes.tsx';
import DMAController from './Topic/DMAController.tsx';
import PPI8255 from './Topic/PPI8255.tsx';
import IOSynchronization from './Topic/IOSynchronization.tsx';
import PPI8085Interface from './Topic/PPI8085Interface.tsx';
import Microcomputer8085 from './Topic/Microcomputer8085.tsx';
import PIT8085Interface from './Topic/PIT8085Interface.tsx';
import SynchronousTransfer from './Topic/SynchronousTransfer.tsx';
import IOProcessor from './Topic/IOProcessor.tsx';
import BusSystems from './Topic/BusSystems.tsx';
import MPUCommunication from './Topic/MPUCommunication.tsx';
import BusArbitration from './Topic/BusArbitration.tsx';
import Pipelining1 from './Topic/Pipelining1.tsx';
import Pipelining2 from './Topic/Pipelining2.tsx';
import ILP from './Topic/ILP.tsx';
import VLIW from './Topic/VLIW.tsx';
import Stalling from './Topic/Stalling.tsx';
import DependenciesHazard from './Topic/DependenciesHazard.tsx';
import BranchPrediction from './Topic/BranchPrediction.tsx';
import AmdahlsLaw from './Topic/AmdahlsLaw.tsx';

// Map topic keys (from SidebarData) to actual components
const topicComponents: { [key: string]: React.FC } = {
  // 1. 
  Home:Home,
  WhatIsComputer:WhatIsComputer,
  ComputerDesignIssues:ComputerDesignIssues,
  VonNeumann:VonNeumann,
  HarvardArchitecture:HarvardArchitecture,
  FlynnsTaxonomy:FlynnsTaxonomy,

  // 2.
  NumberSystems:NumberSystems,
  BaseConversions:BaseConversions,
  CharacterRepresentation:CharacterRepresentation,
  ErrorDetectionCorrection:ErrorDetectionCorrection,
  FixedPoint:FixedPoint,
  FloatingPoint:FloatingPoint,

  // 3.
  DigitalElectronics:DigitalElectronics,
  BooleanAlgebra:BooleanAlgebra,
  CombinationalSequential:CombinationalSequential,

  // 4.
  RegisterTransferLanguage:RegisterTransferLanguage,
  DataTransfers:DataTransfers,
  ArithmeticMicroOps:ArithmeticMicroOps,
  ShiftMicroOps:ShiftMicroOps,
  Microoperations:Microoperations,
  ControlUnit:ControlUnit,

  // 5.
  InstructionFormat:InstructionFormat,
  AddressingModes:AddressingModes,
  MicroarchitectureISA:MicroarchitectureISA,
  TimingControl:TimingControl,
  RISCvsCISC:RISCvsCISC,

  // 6.
  ALUDataPath:ALUDataPath,
  Complements:Complements,
  RestoringDivision:RestoringDivision,
  NonRestoringDivision:NonRestoringDivision,
  BoothsAlgorithm:BoothsAlgorithm,
  OverflowAddition:OverflowAddition,

  // 7.
  MemoryUnits:MemoryUnits,
  Paging:Paging,
  Segmentation:Segmentation,
  VirtualMemory:VirtualMemory,
  PageReplacement:PageReplacement,
  TLB:TLB,
  NUMAvsUMA:NUMAvsUMA,
  MemoryInterleaving:MemoryInterleaving,
  MemoryAddressing:MemoryAddressing,
  MemoryAccess:MemoryAccess,

  // 8.
  IOIntroduction:IOIntroduction,
  IOInterruptDMA:IOInterruptDMA,
  MemoryMappedIO:MemoryMappedIO,
  Interrupts:Interrupts,
  DMA:DMA,
  DMAModes:DMAModes,
  DMAController:DMAController,
  PPI8255:PPI8255,
  IOSynchronization:IOSynchronization,
  PPI8085Interface:PPI8085Interface,
  Microcomputer8085:Microcomputer8085,
  PIT8085Interface:PIT8085Interface,
  SynchronousTransfer:SynchronousTransfer,
  IOProcessor:IOProcessor,
  BusSystems:BusSystems,
  MPUCommunication:MPUCommunication,
  BusArbitration:BusArbitration,

  // 9.
  Pipelining1:Pipelining1,
  Pipelining2:Pipelining2,
  ILP:ILP,
  VLIW:VLIW,
  Stalling:Stalling,
  DependenciesHazard:DependenciesHazard,
  BranchPrediction:BranchPrediction,
  AmdahlsLaw:AmdahlsLaw,


    
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