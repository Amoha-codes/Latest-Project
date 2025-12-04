import React, { useState } from 'react';
// Import Layout
import Layout from './Layout.tsx';
// Import sidebar data
 
// Import specific topic components
import Home from './Topic/Home.tsx';
import CD_Introduction_Main from './Topic/CD_Introduction_Main.tsx';
import CD_CompilerPhases from './Topic/CD_CompilerPhases.tsx';
import CD_CompilerTools from './Topic/CD_CompilerTools.tsx';
import CD_SymbolTable from './Topic/CD_SymbolTable.tsx';
import CD_ErrorHandling from './Topic/CD_ErrorHandling.tsx';
import CD_ProgrammingGenerations from './Topic/CD_ProgrammingGenerations.tsx';
import CD_LA_Introduction from './Topic/CD_LA_Introduction.tsx';
import CD_LA_DetectTokens from './Topic/CD_LA_DetectTokens.tsx';
import CD_LA_Flex from './Topic/CD_LA_Flex.tsx';
import CD_SA_Introduction from './Topic/CD_SA_Introduction.tsx';
import CD_SA_FirstFollow from './Topic/CD_SA_FirstFollow.tsx';
import CD_SA_CFGClassification from './Topic/CD_SA_CFGClassification.tsx';
import CD_SA_AmbiguousGrammar from './Topic/CD_SA_AmbiguousGrammar.tsx';
import CD_SA_ParsersIntro from './Topic/CD_SA_ParsersIntro.tsx';
import CD_SA_TopDownParsers from './Topic/CD_SA_TopDownParsers.tsx';
import CD_SA_BottomUp from './Topic/CD_SA_BottomUp.tsx';
import CD_SA_ShiftReduce from './Topic/CD_SA_ShiftReduce.tsx';
import CD_SA_SLR_CLR_LALR from './Topic/CD_SA_SLR_CLR_LALR.tsx';
import CD_SA_OperatorGrammar from './Topic/CD_SA_OperatorGrammar.tsx';
import CD_SDT_Introduction from './Topic/CD_SDT_Introduction.tsx';
import CD_SDT_S_L_Attributed from './Topic/CD_SDT_S_L_Attributed.tsx';
import CD_CG_Optimization from './Topic/CD_CG_Optimization.tsx';
import CD_CG_Intermediate from './Topic/CD_CG_Intermediate.tsx';
import CD_CG_Issues from './Topic/CD_CG_Issues.tsx';
import CD_CG_TAC from './Topic/CD_CG_TAC.tsx';
import CD_CG_LoopDetection from './Topic/CD_CG_LoopDetection.tsx';
import CD_CG_ObjectCode from './Topic/CD_CG_ObjectCode.tsx';
import CD_CG_DataFlow from './Topic/CD_CG_DataFlow.tsx';
import CD_RE_Scoping from './Topic/CD_RE_Scoping.tsx';
import CD_RE_Introduction from './Topic/CD_RE_Introduction.tsx';
import CD_RE_Linker from './Topic/CD_RE_Linker.tsx';
import CD_RE_Loader from './Topic/CD_RE_Loader.tsx';
import CD_RE_LinuxShell from './Topic/CD_RE_LinuxShell.tsx';

// Map topic keys (from SidebarData) to actual components
const topicComponents: { [key: string]: React.FC } = {
  // 1. 
  Home:Home,
  CD_Introduction_Main:CD_Introduction_Main,
  CD_CompilerPhases:CD_CompilerPhases,
  CD_CompilerTools:CD_CompilerTools,
  CD_SymbolTable:CD_SymbolTable,
  CD_ErrorHandling:CD_ErrorHandling,
  CD_ProgrammingGenerations:CD_ProgrammingGenerations,

  // 2.
  CD_LA_Introduction:CD_LA_Introduction,
  CD_LA_DetectTokens:CD_LA_DetectTokens,
  CD_LA_Flex:CD_LA_Flex,

  // 3.
  CD_SA_Introduction:CD_SA_Introduction,
  CD_SA_FirstFollow:CD_SA_FirstFollow,
  CD_SA_CFGClassification:CD_SA_CFGClassification,
  CD_SA_AmbiguousGrammar:CD_SA_AmbiguousGrammar,
  CD_SA_ParsersIntro:CD_SA_ParsersIntro,
  CD_SA_TopDownParsers:CD_SA_TopDownParsers,
  CD_SA_BottomUp:CD_SA_BottomUp,
  CD_SA_ShiftReduce:CD_SA_ShiftReduce,
  CD_SA_SLR_CLR_LALR:CD_SA_SLR_CLR_LALR,
  CD_SA_OperatorGrammar:CD_SA_OperatorGrammar,

  // 4.
  CD_SDT_Introduction:CD_SDT_Introduction,
  CD_SDT_S_L_Attributed:CD_SDT_S_L_Attributed,

  // 5.
  CD_CG_Optimization:CD_CG_Optimization,
  CD_CG_Intermediate:CD_CG_Intermediate,
  CD_CG_Issues:CD_CG_Issues,
  CD_CG_TAC:CD_CG_TAC,
  CD_CG_LoopDetection:CD_CG_LoopDetection,
  CD_CG_ObjectCode:CD_CG_ObjectCode,
  CD_CG_DataFlow:CD_CG_DataFlow,

  // 6.
  CD_RE_Scoping:CD_RE_Scoping,
  CD_RE_Introduction:CD_RE_Introduction,
  CD_RE_Linker:CD_RE_Linker,
  CD_RE_Loader:CD_RE_Loader,
  CD_RE_LinuxShell:CD_RE_LinuxShell,


   
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