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

  // ================= 1.OS BASICS =================
  {
    title: "Basics",
    component: "OSBasics",
    hasArrow: true,
    subtopics: [
      { title: "Introduction", component: "OS_Introduction" },
      { title: "Types of OS", component: "TypesOfOS" },
      { title: "Kernel in OS", component: "KernelOS" },
      { title: "System Call", component: "SystemCall" },
      { title: "System Initialization", component: "SystemInitialization" },
    ],
  },

  // ================= 2.PROCESS SCHEDULING =================
  {
    title: "Process Scheduling",
    component: "ProcessScheduling",
    hasArrow: true,
    subtopics: [
      { title: "Process Introduction", component: "ProcessIntroduction" },
      { title: "Process Table and Control Block", component: "PCB" },
      { title: "Process Management Introduction", component: "ProcessMgmtIntro" },
      { title: "Process States", component: "ProcessStates" },
      { title: "Process Scheduler", component: "ProcessScheduler" },
      { title: "CPU Scheduling Algorithms", component: "CPUSchedulingAlgorithms" },
      { title: "Preemptive vs Non-Preemptive", component: "PreemptiveVsNonPreemptive" },
      { title: "Dispatcher vs Scheduler", component: "DispatcherVsScheduler" },
      { title: "Starvation and Aging", component: "StarvationAndAging" },
    ],
  },

  // ================= 3.PROCESS SYNCHRONIZATION =================
  {
    title: "Process Synchronization",
    component: "ProcessSync",
    hasArrow: true,
    subtopics: [
      { title: "Inter Process Communication", component: "IPC" },
      { title: "Process Synchronization", component: "ProcessSynchronization" },
      { title: "Race Condition", component: "RaceCondition" },
      { title: "Critical Section", component: "CriticalSection" },
      { title: "Solutions to Synchronization Problems", component: "SyncSolutions" },
      { title: "Peterson’s Algorithm", component: "PetersonAlgorithm" },
      { title: "Dekker’s Algorithm", component: "DekkerAlgorithm" },
      { title: "Bakery Algorithm", component: "BakeryAlgorithm" },
      { title: "Hardware Based Solutions", component: "HardwareSolutions" },
      { title: "Semaphores", component: "Semaphores" },
      { title: "Mutex vs Semaphore", component: "MutexVsSemaphore" },
      { title: "Monitors", component: "Monitors" },
      { title: "Priority Inversion", component: "PriorityInversion" },
      { title: "Classical IPC Problems", component: "ClassicalIPC" },
    ],
  },

  // ================= 4.DEADLOCK =================
  {
    title: "Deadlock",
    component: "Deadlock",
    hasArrow: true,
    subtopics: [
      { title: "Deadlock Introduction", component: "DeadlockIntro" },
      { title: "Deadlock Handling", component: "DeadlockHandling" },
      { title: "Deadlock Prevention", component: "DeadlockPrevention" },
      { title: "Banker's Algorithm", component: "BankersAlgorithm" },
      { title: "Deadlock Detection and Recovery", component: "DeadlockDetection" },
      { title: "Deadlock, Starvation, Livelock", component: "DeadlockStarvationLivelock" },
      { title: "Resource Allocation Graph", component: "RAG" },
      { title: "Methods of Resource Allocation", component: "ResourceAllocMethods" },
      { title: "Program for Deadlock Free Condition", component: "DeadlockFreeProgram" },
    ],
  },

  // ================= 5.MULTITHREADING =================
  {
    title: "Multithreading",
    component: "Multithreading",
    hasArrow: true,
    subtopics: [
      { title: "Operating System | Thread", component: "OSThread" },
      { title: "Threads and Types", component: "ThreadTypes" },
      { title: "User Level vs Kernel Level Threads", component: "UserVsKernelThread" },
      { title: "Process vs Thread Multitasking", component: "Multitasking" },
      { title: "Multithreading Models", component: "ThreadModels" },
      { title: "Benefits of Multithreading", component: "ThreadBenefits" },
      { title: "Remote Procedure Call (RPC)", component: "RPC" },
    ],
  },

  // ================= 6.MEMORY MANAGEMENT =================
  {
    title: "Memory Management",
    component: "MemoryManagement",
    hasArrow: true,
    subtopics: [
      // 1. Basics
      { title: "Introduction to Memory", component: "MemoryIntro" },
      // 2. Contiguous Allocation
      { title: "Contiguous Allocation", component: "ContiguousAllocation" },
      // 3. Non-Contiguous
      { title: "Non-Contiguous Allocation", component: "NonContiguousAllocation" },
      // 4. Advanced Concepts
      { title: "Overlays", component: "Overlays" },
      // 5. Page Replacement
      { title: "Page Replacement Algorithms", component: "PageReplacement" },
      // 6. Kernel & System Concepts
      { title: "Kernel Memory Allocation", component: "KernelMemory" },
    ],
  },

  // ================= 7.DISK / FILE SYSTEM =================
  {
    title: "Disk & File Systems",
    component: "DiskManagement",
    hasArrow: true,
    subtopics: [
      { title: "File Systems", component: "FileSystems" },
      { title: "Unix File System", component: "UnixFileSystem" },
      { title: "Directory Management Script", component: "DirectoryScript" },
      { title: "File Directory | Path Name", component: "PathName" },
      { title: "Directory Structures", component: "DirectoryStructures" },
      { title: "File Allocation Methods", component: "FileAllocationMethods" },
      { title: "File Access Methods", component: "FileAccessMethods" },

      // Secondary Memory
      { title: "Secondary Memory", component: "SecondaryMemory" },
      { title: "Hard Disk Drive", component: "HardDiskDrive" },
      { title: "Disk Scheduling Algorithms", component: "DiskScheduling" },
      { title: "SSTF Program", component: "SSTFProgram" },

      { title: "Spooling", component: "Spooling" },
      { title: "Spooling vs Buffering", component: "SpoolVsBuffer" },
      { title: "Free Space Management", component: "FreeSpaceManagement" },
    ],
  },
];
