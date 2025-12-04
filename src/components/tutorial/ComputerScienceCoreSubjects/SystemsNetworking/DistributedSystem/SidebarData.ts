import { 
  BookOpen,
} from "lucide-react";

export interface SubTopic {
  title: string;
  component: string;
}

export interface SidebarItem {
  title: string;
  component: string;
  hasArrow?: boolean;
  subtopics?: SubTopic[];
  icon?: unknown;
}

export const sidebarItems: SidebarItem[] = [
  { title: "Tutorial", component: "Home", icon: BookOpen },

  // ================= 1.Distributed Systems =================
  {
    title: "Introduction to Distributed System",
    component: "DS_Introduction",
    hasArrow: true,
    subtopics: [
      { title: "Goals of Distributed System", component: "DS_Goals" },
      { title: "Types of Transparency", component: "DS_Transparency" },
      { title: "Centralized vs Decentralized vs Distributed", component: "DS_SystemTypes" },
      { title: "Loosely vs Tightly Coupled Systems", component: "DS_Coupling" },
      { title: "Design Issues", component: "DS_DesignIssues" },
      { title: "Types of Failures", component: "DS_Failures" },
      { title: "Parallel vs Distributed Computing", component: "DS_ParallelVsDistributed" },
    ],
  },

  // ================= 2.Scalability & Middleware =================
  {
    title: "Scalability & Middleware",
    component: "DS_Scalability",
    hasArrow: true,
    subtopics: [
      { title: "What is a Scalable System?", component: "DS_ScalableSystem" },
      { title: "Role of Middleware", component: "DS_Middleware" },
      { title: "Hardware vs Middleware", component: "DS_HardwareVsMiddleware" },
      { title: "What is Groupware?", component: "DS_Groupware" },
    ],
  },

  // ================= 3.Communication =================
  {
    title: "Communication in Distributed Systems",
    component: "DS_Communication",
    hasArrow: true,
    subtopics: [
      { title: "Interprocess Communication", component: "DS_IPC" },
      { title: "gRPC Communication", component: "DS_gRPC" },
      { title: "Gossip Protocol", component: "DS_Gossip" },
      { title: "Message Passing", component: "DS_MessagePassing" },
      { title: "Issues in Message Passing", component: "DS_MessageIssues" },
    ],
  },

  // ================= 4.RPC =================
  {
    title: "Remote Procedure Calls (RPC)",
    component: "DS_RPC",
    hasArrow: true,
    subtopics: [
      { title: "What is RPC Mechanism?", component: "DS_RPCMechanism" },
      { title: "Transparency in RPC", component: "DS_RPCTransparency" },
      { title: "RPC Implementation", component: "DS_RPCImplementation" },
      { title: "Stub Generation", component: "DS_StubGeneration" },
      { title: "Marshalling", component: "DS_Marshalling" },
      { title: "Server Management", component: "DS_ServerManagement" },
      { title: "Parameter-Passing Semantics", component: "DS_ParameterSemantics" },
      { title: "Call Semantics Issues", component: "DS_CallSemantics" },
      { title: "RPC Communication Protocols", component: "DS_RPCProtocols" },
    ],
  },

  // ================= 5.Synchronization =================
  {
    title: "Synchronization",
    component: "DS_Synchronization",
    hasArrow: true,
    subtopics: [
       { title: "Synchronization", component: "DS_Synchronization" },
      { title: "Clock Synchronization", component: "DS_ClockSync" },
      { title: "Logical Clocks", component: "DS_LogicalClocks" },
      { title: "Lamport Algorithm", component: "DS_Lamport" },
      { title: "Vector Clocks", component: "DS_VectorClocks" },
      { title: "Event Ordering", component: "DS_EventOrdering" },
      { title: "Mutual Exclusion", component: "DS_MutualExclusion" },
      { title: "Cristian Algorithm", component: "DS_Cristian" },
      { title: "Berkeley Algorithm", component: "DS_Berkeley" },
      { title: "Token vs Non-Token Algorithms", component: "DS_TokenVsNonToken" },
      { title: "Ricart-Agrawala Algorithm", component: "DS_Ricart" },
      { title: "Token-Based Algorithm", component: "DS_TokenBased" },
    ],
  },

  // ================= 6.Resource & Process Mgmt =================
  {
    title: "Resource & Process Management",
    component: "DS_ResourceManagement",
    hasArrow: true,
    subtopics: [
      { title: "Global Scheduling Features", component: "DS_GlobalScheduling" },
      { title: "Task Assignment Approach", component: "DS_TaskAssignment" },
      { title: "Load-Balancing Approach", component: "DS_LoadBalancing" },
      { title: "Load-Sharing Approach", component: "DS_LoadSharing" },
      { title: "Load Balancing vs Load Sharing", component: "DS_LoadBalVsShare" },
      { title: "Scheduling & Load Balancing", component: "DS_Scheduling" },
      { title: "Process Management", component: "DS_ProcessManagement" },
      { title: "Process Migration", component: "DS_ProcessMigration" },
    ],
  },

  // ================= 7.DFS & DSM =================
  {
    title: "Distributed File System & Shared Memory",
    component: "DS_DFS_DSM",
    hasArrow: true,
    subtopics: [
      { title: "Distributed File System (DFS)", component: "DS_DFS" },
      { title: "Characteristics of File System", component: "DS_FileCharacteristics" },
      { title: "NFS Architecture", component: "DS_NFS" },
      { title: "Andrew File System", component: "DS_AFS" },
      { title: "File Service Architecture", component: "DS_FileServiceArch" },
      { title: "File Models", component: "DS_FileModels" },
      { title: "File Access Models", component: "DS_FileAccessModels" },
      { title: "File Sharing Semantics", component: "DS_FileSharing" },
      { title: "File Caching Schemes", component: "DS_FileCaching" },
      { title: "Replication", component: "DS_Replication" },
      { title: "Atomic Commit Protocol", component: "DS_AtomicCommit" },
      { title: "Design Principles of DFS", component: "DS_DFSDesign" },
      { title: "Distributed Shared Memory", component: "DS_DSM" },
      { title: "DSM Architecture", component: "DS_DSMArchitecture" },
      { title: "UMA vs NUMA", component: "DS_UMAvNUMA" },
      { title: "DSM Design Issues", component: "DS_DSMDesignIssues" },
      { title: "DSM Algorithms", component: "DS_DSMAlgorithms" },
      { title: "Consistency Models", component: "DS_Consistency" },
      { title: "Thrashing in DSM", component: "DS_Thrashing" },
    ],
  },

  // ================= 8.Scheduling & Deadlock =================
  {
    title: "Distributed Scheduling & Deadlock",
    component: "DS_Sched_Deadlock",
    hasArrow: true,
    subtopics: [
      { title: "Scheduling & Load Balancing", component: "DS_DistributedScheduling" },
      { title: "Load Balancing Algorithms", component: "DS_LBAlgorithms" },
      { title: "Issues in Load Balancing", component: "DS_LBIssues" },
      { title: "Load Distribution Components", component: "DS_LoadDistribution" },
      { title: "Phantom Deadlock", component: "DS_PhantomDeadlock" },
      { title: "Deadlock Basics", component: "DS_Deadlock" },
      { title: "Deadlock Detection", component: "DS_DeadlockDetection" },
      { title: "Conditions for Deadlock", component: "DS_DeadlockConditions" },
      { title: "Deadlock Handling Strategies", component: "DS_DeadlockHandling" },
      { title: "Banker’s Algorithm", component: "DS_Banker" },
      { title: "Deadlock Prevention Policies", component: "DS_Prevention" },
      { title: "WFG-based Detection Algorithm", component: "DS_WFG" },
      { title: "Chandy-Misra-Haas Algorithm", component: "DS_CMH" },
      { title: "Hierarchical Deadlock Detection", component: "DS_HierarchicalDeadlock" },
    ],
  },

  // ================= 9.Security =================
  {
    title: "Security in Distributed Systems",
    component: "DS_Security",
    hasArrow: true,
    subtopics: [
      { title: "What is Security?", component: "DS_SecurityBasics" },
      { title: "Types of Cyberattacks", component: "DS_CyberAttacks" },
      { title: "Cryptography", component: "DS_Cryptography" },
      { title: "Authentication", component: "DS_Authentication" },
      { title: "Access Matrix", component: "DS_AccessMatrix" },
      { title: "Digital Signatures & Certificates", component: "DS_DigitalSignatures" },
      { title: "Security Design Principles", component: "DS_SecurityDesign" },
    ],
  },

  // ================= 10.Multimedia & DB =================
  {
    title: "Distributed Multimedia & Database",
    component: "DS_Multimedia_DB",
    hasArrow: true,
    subtopics: [
      { title: "What is Distributed DBMS?", component: "DS_DDBMS" },
      { title: "Advantages & Disadvantages", component: "DS_DDBMSAdvDisadv" },
      { title: "Functions of DDBMS", component: "DS_DDBMSFunctions" },
      { title: "Types of DBMS", component: "DS_DBMSTypes" },
      { title: "Homogeneous vs Heterogeneous DB", component: "DS_HomogeneousVsHeterogeneous" },
      { title: "Distributed Multimedia Systems", component: "DS_DistributedMultimedia" },
      { title: "Multimedia Database", component: "DS_MultimediaDB" },
    ],
  },

  // ================= 11.Distributed Algorithm =================
  {
    title: "Distributed Algorithms",
    component: "DS_DistributedAlgorithms",
    hasArrow: true,
    subtopics: [
      { title: "Destination-Based Routing", component: "DS_DestinationRouting" },
      { title: "Deadlock-Free Packet Switching", component: "DS_PacketSwitching" },
      { title: "Wave & Traversal Algorithms", component: "DS_WaveTraversal" },
      { title: "Election Algorithms", component: "DS_Election" },
      { title: "Ring vs Bully Algorithm", component: "DS_RingVsBully" },
      { title: "CORBA", component: "DS_CORBA" },
      { title: "CORBA vs DCOM", component: "DS_CORBAvsDCOM" },
      { title: "COM vs DCOM", component: "DS_COMvsDCOM" },
      { title: "COM Lifecycle", component: "DS_COMLifecycle" },
      { title: "DCOM (Distributed COM)", component: "DS_DCOM" },
    ],
  },

  // ================= 12.Distributed Transactions =================
  {
    title: "Distributed Transactions",
    component: "DS_DistributedTransactions",
    hasArrow: true,
    subtopics: [
      { title: "What is a Distributed Transaction?", component: "DS_DistributedTx" },
      { title: "Flat & Nested Transactions", component: "DS_FlatNested" },
      { title: "Concurrency Control", component: "DS_Concurrency" },
      { title: "Transaction Recovery", component: "DS_Recovery" },
      { title: "Replication Introduction", component: "DS_ReplicationIntro" },
      { title: "Two-Phase Commit", component: "DS_2PC" },
    ],
  },
];
