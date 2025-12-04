import React, { useState } from 'react';
// Import Layout
import Layout from './Layout.tsx';
// Import sidebar data
 
// Import specific topic components
import Home from './Topic/Home.tsx';
import DS_Goals from './Topic/DS_Goals.tsx';
import DS_Transparency from './Topic/DS_Transparency.tsx';
import DS_SystemTypes from './Topic/DS_SystemTypes.tsx';
import DS_Coupling from './Topic/DS_Coupling.tsx';
import DS_DesignIssues from './Topic/DS_DesignIssues.tsx';
import DS_Failures from './Topic/DS_Failures.tsx';
import DS_ParallelVsDistributed from './Topic/DS_ParallelVsDistributed.tsx';
import DS_ScalableSystem from './Topic/DS_ScalableSystem.tsx';
import DS_Middleware from './Topic/DS_Middleware.tsx';
import DS_HardwareVsMiddleware from './Topic/DS_HardwareVsMiddleware.tsx';
import DS_Groupware from './Topic/DS_Groupware.tsx';
import DS_IPC from './Topic/DS_IPC.tsx';
import DS_gRPC from './Topic/DS_gRPC.tsx';
import DS_Gossip from './Topic/DS_Gossip.tsx';
import DS_MessagePassing from './Topic/DS_MessagePassing.tsx';
import DS_MessageIssues from './Topic/DS_MessageIssues.tsx';
import DS_RPCMechanism from './Topic/DS_RPCMechanism.tsx';
import DS_RPCTransparency from './Topic/DS_RPCTransparency.tsx';
import DS_RPCImplementation from './Topic/DS_RPCImplementation.tsx';
import DS_StubGeneration from './Topic/DS_StubGeneration.tsx';
import DS_Marshalling from './Topic/DS_Marshalling.tsx';
import DS_ServerManagement from './Topic/DS_ServerManagement.tsx';
import DS_ParameterSemantics from './Topic/DS_ParameterSemantics.tsx';
import DS_CallSemantics from './Topic/DS_CallSemantics.tsx';
import DS_RPCProtocols from './Topic/DS_RPCProtocols.tsx';
import DS_Synchronization from './Topic/DS_Synchronization.tsx';
import DS_ClockSync from './Topic/DS_ClockSync.tsx';
import DS_LogicalClocks from './Topic/DS_LogicalClocks.tsx';
import DS_Lamport from './Topic/DS_Lamport.tsx';
import DS_VectorClocks from './Topic/DS_VectorClocks.tsx';
import DS_EventOrdering from './Topic/DS_EventOrdering.tsx';
import DS_MutualExclusion from './Topic/DS_MutualExclusion.tsx';
import DS_Cristian from './Topic/DS_Cristian.tsx';
import DS_Berkeley from './Topic/DS_Berkeley.tsx';
import DS_TokenVsNonToken from './Topic/DS_TokenVsNonToken.tsx';
import DS_Ricart from './Topic/DS_Ricart.tsx';
import DS_TokenBased from './Topic/DS_TokenBased.tsx';
import DS_GlobalScheduling from './Topic/DS_GlobalScheduling.tsx';
import DS_TaskAssignment from './Topic/DS_TaskAssignment.tsx';
import DS_LoadBalancing from './Topic/DS_LoadBalancing.tsx';
import DS_LoadSharing from './Topic/DS_LoadSharing.tsx';
import DS_LoadBalVsShare from './Topic/DS_LoadBalVsShare.tsx';
import DS_Scheduling from './Topic/DS_Scheduling.tsx';
import DS_ProcessManagement from './Topic/DS_ProcessManagement.tsx';
import DS_ProcessMigration from './Topic/DS_ProcessMigration.tsx';

// Map topic keys (from SidebarData) to actual components
const topicComponents: { [key: string]: React.FC } = {
  // 1. 
  Home:Home,
  DS_Goals:DS_Goals,
  DS_Transparency:DS_Transparency,
  DS_SystemTypes:DS_SystemTypes,
  DS_Coupling:DS_Coupling,
  DS_DesignIssues:DS_DesignIssues,
  DS_Failures:DS_Failures,
  DS_ParallelVsDistributed:DS_ParallelVsDistributed,

  // 2.
  DS_ScalableSystem:DS_ScalableSystem,
  DS_Middleware:DS_Middleware,
  DS_HardwareVsMiddleware:DS_HardwareVsMiddleware,
  DS_Groupware:DS_Groupware,

  // 3.
  DS_IPC:DS_IPC,
  DS_gRPC:DS_gRPC,
  DS_Gossip:DS_Gossip,
  DS_MessagePassing:DS_MessagePassing,
  DS_MessageIssues:DS_MessageIssues,

  // 4.
  DS_RPCMechanism:DS_RPCMechanism,
  DS_RPCTransparency:DS_RPCTransparency,
  DS_RPCImplementation:DS_RPCImplementation,
  DS_StubGeneration:DS_StubGeneration,
  DS_Marshalling:DS_Marshalling,
  DS_ServerManagement:DS_ServerManagement,
  DS_ParameterSemantics:DS_ParameterSemantics,
  DS_CallSemantics:DS_CallSemantics,
  DS_RPCProtocols:DS_RPCProtocols,

  // 5.
  DS_Synchronization:DS_Synchronization,
  DS_ClockSync:DS_ClockSync,
  DS_LogicalClocks:DS_LogicalClocks,
  DS_Lamport:DS_Lamport,
  DS_VectorClocks:DS_VectorClocks,
  DS_EventOrdering:DS_EventOrdering,
  DS_MutualExclusion:DS_MutualExclusion,
  DS_Cristian:DS_Cristian,
  DS_Berkeley:DS_Berkeley,
  DS_TokenVsNonToken:DS_TokenVsNonToken,
  DS_Ricart:DS_Ricart,
  DS_TokenBased:DS_TokenBased,

  // 6.
  DS_GlobalScheduling:DS_GlobalScheduling,
  DS_TaskAssignment:DS_TaskAssignment,
  DS_LoadBalancing:DS_LoadBalancing,
  DS_LoadSharing:DS_LoadSharing,
  DS_LoadBalVsShare:DS_LoadBalVsShare,
  DS_Scheduling:DS_Scheduling,
  DS_ProcessManagement:DS_ProcessManagement,
  DS_ProcessMigration:DS_ProcessMigration,

  // 7.


  
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