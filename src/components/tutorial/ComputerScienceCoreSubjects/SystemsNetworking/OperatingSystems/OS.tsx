import React, { useState } from 'react';
// Import Layout
import Layout from './Layout.tsx';
// Import sidebar data
 
// Import specific topic components
import Home from './Topics/Home.tsx';
import OS_Introduction from './Topics/OS_Introduction.tsx';
import TypesOfOS from './Topics/TypesOfOS.tsx';
import KernelOS from './Topics/KernelOS.tsx';
import SystemCall from './Topics/SystemCall.tsx';
import SystemInitialization from './Topics/SystemInitialization.tsx';
import ProcessIntroduction from './Topics/ProcessIntroduction.tsx';
import PCB from './Topics/PCB.tsx';
import ProcessMgmtIntro from './Topics/ProcessMgmtIntro.tsx';
import ProcessStates from './Topics/ProcessStates.tsx';
import ProcessScheduler from './Topics/ProcessScheduler.tsx';
import CPUSchedulingAlgorithms from './Topics/CPUSchedulingAlgorithms.tsx';
import PreemptiveVsNonPreemptive from './Topics/PreemptiveVsNonPreemptive.tsx';
import DispatcherVsScheduler from './Topics/DispatcherVsScheduler.tsx';
import StarvationAndAging from './Topics/StarvationAndAging.tsx';
import IPC from './Topics/IPC.tsx';
import ProcessSynchronization from './Topics/ProcessSynchronization.tsx';
import RaceCondition from './Topics/RaceCondition.tsx';
import CriticalSection from './Topics/CriticalSection.tsx';
import SyncSolutions from './Topics/SyncSolutions.tsx';
import PetersonAlgorithm from './Topics/PetersonAlgorithm.tsx';
import DekkerAlgorithm from './Topics/DekkerAlgorithm.tsx';
import BakeryAlgorithm from './Topics/BakeryAlgorithm.tsx';
import HardwareSolutions from './Topics/HardwareSolutions.tsx';
import Semaphores from './Topics/Semaphores.tsx';
import MutexVsSemaphore from './Topics/MutexVsSemaphore.tsx';
import Monitors from './Topics/Monitors.tsx';
import PriorityInversion from './Topics/PriorityInversion.tsx';
import ClassicalIPC from './Topics/ClassicalIPC.tsx';
import DeadlockIntro from './Topics/DeadlockIntro.tsx';
import DeadlockHandling from './Topics/DeadlockHandling.tsx';
import DeadlockPrevention from './Topics/DeadlockPrevention.tsx';
import BankersAlgorithm from './Topics/BankersAlgorithm.tsx';
import DeadlockDetection from './Topics/DeadlockDetection.tsx';
import DeadlockStarvationLivelock from './Topics/DeadlockStarvationLivelock.tsx';
import RAG from './Topics/RAG.tsx';
import ResourceAllocMethods from './Topics/ResourceAllocMethods.tsx';
import DeadlockFreeProgram from './Topics/DeadlockFreeProgram.tsx';
import OSThread from './Topics/OSThread.tsx';
import ThreadTypes from './Topics/ThreadTypes.tsx';
import UserVsKernelThread from './Topics/UserVsKernelThread.tsx';
import Multitasking from './Topics/Multitasking.tsx';
import ThreadModels from './Topics/ThreadModels.tsx';
import ThreadBenefits from './Topics/ThreadBenefits.tsx';
import RPC from './Topics/RPC.tsx';
import MemoryIntro from './Topics/MemoryIntro.tsx';
import ContiguousAllocation from './Topics/ContiguousAllocation.tsx';
import NonContiguousAllocation from './Topics/NonContiguousAllocation.tsx';
import Overlays from './Topics/Overlays.tsx';
import PageReplacement from './Topics/PageReplacement.tsx';
import KernelMemory from './Topics/KernelMemory.tsx';
import FileSystems from './Topics/FileSystems.tsx';
import UnixFileSystem from './Topics/UnixFileSystem.tsx';
import DirectoryScript from './Topics/DirectoryScript.tsx';
import PathName from './Topics/PathName.tsx';
import DirectoryStructures from './Topics/DirectoryStructures.tsx';
import FileAllocationMethods from './Topics/FileAllocationMethods.tsx';
import FileAccessMethods from './Topics/FileAccessMethods.tsx';
import SecondaryMemory from './Topics/SecondaryMemory.tsx';
import HardDiskDrive from './Topics/HardDiskDrive.tsx';
import DiskScheduling from './Topics/DiskScheduling.tsx';
import SSTFProgram from './Topics/SSTFProgram.tsx';
import Spooling from './Topics/Spooling.tsx';
import SpoolVsBuffer from './Topics/SpoolVsBuffer.tsx';
import FreeSpaceManagement from './Topics/FreeSpaceManagement.tsx';

// Map topic keys (from SidebarData) to actual components
const topicComponents: { [key: string]: React.FC } = {
  // 1. 
  Home:Home,
  OS_Introduction:OS_Introduction,
  TypesOfOS:TypesOfOS,
  KernelOS:KernelOS,
  SystemCall:SystemCall,
  SystemInitialization:SystemInitialization,

  // 2.
  ProcessIntroduction:ProcessIntroduction,
  PCB:PCB,
  ProcessMgmtIntro:ProcessMgmtIntro,
  ProcessStates:ProcessStates,
  ProcessScheduler:ProcessScheduler,
  CPUSchedulingAlgorithms:CPUSchedulingAlgorithms,
  PreemptiveVsNonPreemptive:PreemptiveVsNonPreemptive,
  DispatcherVsScheduler:DispatcherVsScheduler,
  StarvationAndAging:StarvationAndAging,

  // 3.
  IPC:IPC,
  ProcessSynchronization:ProcessSynchronization,
  RaceCondition:RaceCondition,
  CriticalSection:CriticalSection,
  SyncSolutions:SyncSolutions,
  PetersonAlgorithm:PetersonAlgorithm,
  DekkerAlgorithm:DekkerAlgorithm,
  BakeryAlgorithm:BakeryAlgorithm,
  HardwareSolutions:HardwareSolutions,
  Semaphores:Semaphores,
  MutexVsSemaphore:MutexVsSemaphore,
  Monitors:Monitors,
  PriorityInversion:PriorityInversion,
  ClassicalIPC:ClassicalIPC,

  // 4.
  DeadlockIntro:DeadlockIntro,
  DeadlockHandling:DeadlockHandling,
  DeadlockPrevention:DeadlockPrevention,
  BankersAlgorithm:BankersAlgorithm,
  DeadlockDetection:DeadlockDetection,
  DeadlockStarvationLivelock:DeadlockStarvationLivelock,
  RAG:RAG,
  ResourceAllocMethods:ResourceAllocMethods,
  DeadlockFreeProgram:DeadlockFreeProgram,

  // 5.
  OSThread:OSThread,
  ThreadTypes:ThreadTypes,
  UserVsKernelThread:UserVsKernelThread,
  Multitasking:Multitasking,
  ThreadModels:ThreadModels,
  ThreadBenefits:ThreadBenefits,
  RPC:RPC,

  // 6.
  MemoryIntro:MemoryIntro,
  ContiguousAllocation:ContiguousAllocation,
  NonContiguousAllocation:NonContiguousAllocation,
  Overlays:Overlays,
  PageReplacement:PageReplacement,
  KernelMemory:KernelMemory,

  // 7.
  FileSystems:FileSystems,
  UnixFileSystem:UnixFileSystem,
  DirectoryScript:DirectoryScript,
  PathName:PathName,
  DirectoryStructures:DirectoryStructures,
  FileAllocationMethods:FileAllocationMethods,
  FileAccessMethods:FileAccessMethods,
  SecondaryMemory:SecondaryMemory,
  HardDiskDrive:HardDiskDrive,
  DiskScheduling:DiskScheduling,
  SSTFProgram:SSTFProgram,
  Spooling:Spooling,
  SpoolVsBuffer:SpoolVsBuffer,
  FreeSpaceManagement:FreeSpaceManagement,
     
};

const OS: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
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

export default OS;