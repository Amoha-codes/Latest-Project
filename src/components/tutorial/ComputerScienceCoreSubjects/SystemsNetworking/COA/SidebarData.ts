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

  // ================= 1. BASIC COMPUTER STRUCTURE =================
  {
    title: "Basic Computer Structure",
    component: "BasicComputerStructure",
    hasArrow: true,
    subtopics: [
      { title: "What is Computer?", component: "WhatIsComputer" },
      { title: "Issues in Computer Design", component: "ComputerDesignIssues" },
      { title: "Von Neumann Architecture", component: "VonNeumann" },
      { title: "Harvard Architecture", component: "HarvardArchitecture" },
      { title: "Flynn's Taxonomy", component: "FlynnsTaxonomy" },
    ],
  },

  // ================= 2. NUMBER SYSTEM AND DATA REPRESENTATION =================
  {
    title: "Number System and Data Representation",
    component: "NumberSystemDataRepresentation",
    hasArrow: true,
    subtopics: [
      { title: "Number Systems", component: "NumberSystems" },
      { title: "Base Conversions", component: "BaseConversions" },
      { title: "Character Representation", component: "CharacterRepresentation" },
      { title: "Error Detection and Correction Codes", component: "ErrorDetectionCorrection" },
      { title: "Fixed Point Representation", component: "FixedPoint" },
      { title: "Floating Point Representation", component: "FloatingPoint" },
    ],
  },

  // ================= 3. DIGITAL LOGIC & CIRCUITS =================
  {
    title: "Digital Logic & Circuits",
    component: "DigitalLogicCircuits",
    hasArrow: true,
    subtopics: [
      { title: "Digital Electronic and Logic Gate", component: "DigitalElectronics" },
      { title: "Boolean Algebra", component: "BooleanAlgebra" },
      { title: "Combinational Circuits and Sequential Circuits", component: "CombinationalSequential" },
    ],
  },

  // ================= 4. REGISTER TRANSFER & MICRO-OPERATIONS =================
  {
    title: "Register Transfer & Micro-Operations",
    component: "RegisterTransferMicroOps",
    hasArrow: true,
    subtopics: [
      { title: "Register Transfer Language", component: "RegisterTransferLanguage" },
      { title: "Data Transfers (Bus/Memory)", component: "DataTransfers" },
      { title: "Arithmetic Micro-Operations", component: "ArithmeticMicroOps" },
      { title: "Shift Micro-Operations", component: "ShiftMicroOps" },
      { title: "Microoperations", component: "Microoperations" },
      { title: "Hardwired vs Microprogrammed Control Unit", component: "ControlUnit" },
    ],
  },

  // ================= 5. INSTRUCTION SET ARCHITECTURE =================
  {
    title: "Instruction Set Architecture & Control Flow",
    component: "ISAControlFlow",
    hasArrow: true,
    subtopics: [
      { title: "Instruction Format", component: "InstructionFormat" },
      { title: "Addressing Modes", component: "AddressingModes" },
      { title: "Microarchitecture and ISA", component: "MicroarchitectureISA" },
      { title: "Timing and Control", component: "TimingControl" },
      { title: "RISC vs CISC Architectures", component: "RISCvsCISC" },
    ],
  },

  // ================= 6. COMPUTER ARITHMETIC =================
  {
    title: "Computer Arithmetic",
    component: "ComputerArithmetic",
    hasArrow: true,
    subtopics: [
      { title: "ALU and Data Path", component: "ALUDataPath" },
      { title: "1's Complement vs 2's Complement", component: "Complements" },
      { title: "Restoring Division Algorithm", component: "RestoringDivision" },
      { title: "Non-Restoring Division", component: "NonRestoringDivision" },
      { title: "Booth’s Algorithm", component: "BoothsAlgorithm" },
      { title: "Overflow in Arithmetic Addition", component: "OverflowAddition" },
    ],
  },

  // ================= 7. MEMORY ORGANIZATION =================
  {
    title: "Memory Organization",
    component: "MemoryOrganization",
    hasArrow: true,
    subtopics: [
      { title: "Memory & Memory Units", component: "MemoryUnits" },
      { title: "Paging", component: "Paging" },
      { title: "Segmentation", component: "Segmentation" },
      { title: "Virtual Memory", component: "VirtualMemory" },
      { title: "Page Replacement Algorithms", component: "PageReplacement" },
      { title: "Translation Lookaside Buffer", component: "TLB" },
      { title: "NUMA vs UMA Architectures", component: "NUMAvsUMA" },
      { title: "Memory Interleaving", component: "MemoryInterleaving" },
      { title: "Byte vs Word Addressable Memory", component: "MemoryAddressing" },
      { title: "Simultaneous vs Hierarchical Access Memory", component: "MemoryAccess" },
    ],
  },

  // ================= 8. INPUT/OUTPUT ORGANIZATION =================
  {
    title: "Input/Output Organization",
    component: "IOOrganization",
    hasArrow: true,
    subtopics: [
      { title: "Introduction to I/O Interface", component: "IOIntroduction" },
      { title: "I/O Interface (Interrupt and DMA Mode)", component: "IOInterruptDMA" },
      { title: "Memory mapped I/O and Isolated I/O", component: "MemoryMappedIO" },
      { title: "Interrupts", component: "Interrupts" },
      { title: "DMA", component: "DMA" },
      { title: "Modes of DMA Transfer", component: "DMAModes" },
      { title: "DMA controller 8257/8237", component: "DMAController" },
      { title: "Programmable peripheral interface 8255", component: "PPI8255" },
      { title: "Asynchronous & Synchronous I/O Synchronization", component: "IOSynchronization" },
      { title: "Interface 8255 with 8085 microprocessor", component: "PPI8085Interface" },
      { title: "Microcomputer system (8085 SBC)", component: "Microcomputer8085" },
      { title: "Interface 8254 PIT with 8085", component: "PIT8085Interface" },
      { title: "Synchronous Data Transfer", component: "SynchronousTransfer" },
      { title: "Input-Output Processor", component: "IOProcessor" },
      { title: "Bus Systems", component: "BusSystems" },
      { title: "MPU Communication", component: "MPUCommunication" },
      { title: "Bus Arbitration", component: "BusArbitration" },
    ],
  },

  // ================= 9. PIPELINING & HAZARDS =================
  {
    title: "Pipelining & Hazards",
    component: "PipeliningHazards",
    hasArrow: true,
    subtopics: [
      { title: "Pipelining Set 1 (Execution, Stages and Throughput)", component: "Pipelining1" },
      { title: "Pipelining Set 2 (Dependencies and Data Hazard)", component: "Pipelining2" },
      { title: "Instruction Level Parallelism", component: "ILP" },
      { title: "Very Long Instruction Word (VLIW) Architecture", component: "VLIW" },
      { title: "Types and Stalling", component: "Stalling" },
      { title: "Dependencies and Data Hazard", component: "DependenciesHazard" },
      { title: "Branch Prediction in Pentium", component: "BranchPrediction" },
      { title: "Amdahl's law and its Proof", component: "AmdahlsLaw" },
    ],
  },
];
