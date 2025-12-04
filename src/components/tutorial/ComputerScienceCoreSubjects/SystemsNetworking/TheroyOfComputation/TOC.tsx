import React, { useState } from 'react';
// Import Layout
import Layout from './Layout.tsx';
// Import sidebar data
 
// Import specific topic components
import Home from './Topic/Home.tsx';
import ChomskyHierarchy from './Topic/ChomskyHierarchy.tsx';
import variousAutomata from './Topic/variousAutomata.tsx';
import FiniteAutomata from './Topic/FiniteAutomata.tsx';
import ArdensTheorem from './Topic/ArdensTheorem.tsx';
import SolvingAutomata from './Topic/SolvingAutomata.tsx';
import Lgraph from './Topic/Lgraph.tsx';
import Hypothesis from './Topic/Hypothesis.tsx';
import RegualarExpression from './Topic/RegualarExpression.tsx';
import RelationshipGL from './Topic/RelationshipGL.tsx';
import ContextFreeGrammer from './Topic/ContextFreeGrammer.tsx';
import ClosureProp from './Topic/ClosureProp.tsx';
import UnionInter from './Topic/UnionInter.tsx';
import ChomskyForm from './Topic/ChomskyForm.tsx';
import Pushdown from './Topic/Pushdown.tsx';
import PDFinalState from './Topic/PDFinalState.tsx';
import GivenLanguage from './Topic/GivenLanguage.tsx';
import Palindrome from './Topic/Palindrome.tsx';
import DetailedStudy from './Topic/DetailedStudy.tsx';
import NPDA from './Topic/NPDA.tsx';
import TMIntro from './Topic/TMIntro.tsx';
import TMAddition from './Topic/TMAddition.tsx';
import TMSubtarction from './Topic/TMSubtarction.tsx';
import TMMultiplication from './Topic/TMMultiplication.tsx';
import TMCopyingData from './Topic/TMCopyingData.tsx';
import DUProblem from './Topic/DUProblem.tsx';
import UNDR from './Topic/UNDR.tsx';
import ComputableProblem from './Topic/ComputableProblem.tsx';

// Map topic keys (from SidebarData) to actual components
const topicComponents: { [key: string]: React.FC } = {
  // 1. 
  Home:Home,
  ChomskyHierarchy:ChomskyHierarchy,
  variousAutomata:variousAutomata,

  // 2.
  FiniteAutomata:FiniteAutomata,
  ArdensTheorem:ArdensTheorem,
  SolvingAutomata:SolvingAutomata,
  Lgraph:Lgraph,
  Hypothesis:Hypothesis,
  RegualarExpression:RegualarExpression,

  // 3.
  RelationshipGL:RelationshipGL,
  ContextFreeGrammer:ContextFreeGrammer,
  ClosureProp:ClosureProp,
  UnionInter:UnionInter,
  ChomskyForm:ChomskyForm,

  // 4.
  Pushdown:Pushdown,
  PDFinalState:PDFinalState,
  GivenLanguage:GivenLanguage,
  Palindrome:Palindrome,
  DetailedStudy:DetailedStudy,
  NPDA:NPDA,

  // 5.
  TMIntro:TMIntro,
  TMAddition:TMAddition,
  TMSubtarction:TMSubtarction,
  TMMultiplication:TMMultiplication,
  TMCopyingData:TMCopyingData,

  // 6.
  DUProblem:DUProblem,
  UNDR:UNDR,
  ComputableProblem:ComputableProblem,
    
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