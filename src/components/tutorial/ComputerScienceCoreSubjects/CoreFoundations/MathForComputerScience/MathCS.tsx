import React, { useState } from 'react';
// Import Layout
import Layout from './Layout.tsx';
// Import sidebar data
 
// Import specific topic components
import Home from './Topic/Home.tsx';
import NumberSystems from './Topic/NumberSystems.tsx';
import NumberConversion from './Topic/NumberConversion.tsx';
import ArithmeticOperations from './Topic/ArithmeticOperations.tsx';
import ModularArithmetic from './Topic/ModularArithmetic.tsx';
import GCD from './Topic/GCD.tsx';
import Congruency from './Topic/Congruency.tsx';
import FermatTheorem from './Topic/FermatTheorem.tsx';
import EuclidAlgorithm from './Topic/EuclidAlgorithm.tsx';
import BasicCounting from './Topic/BasicCounting.tsx';
import TreeDiagram from './Topic/TreeDiagram.tsx';
import PermutationCombination from './Topic/PermutationCombination.tsx';
import PigeonholePrinciple from './Topic/PigeonholePrinciple.tsx';
import InclusionExclusionPrinciple from './Topic/InclusionExclusionPrinciple.tsx';
import RecurrenceRelations from './Topic/RecurrenceRelations.tsx';
import AlgorithmsComplexity from './Topic/AlgorithmsComplexity.tsx';
import SetTheory from './Topic/SetTheory.tsx';
import PropositionalLogic from './Topic/PropositionalLogic.tsx';
import FunctionsMath from './Topic/FunctionsMath.tsx';
import RelationsProperties from './Topic/RelationsProperties.tsx';
import MathematicalInduction from './Topic/MathematicalInduction.tsx';
import BooleanAlgebra from './Topic/BooleanAlgebra.tsx';
import VectorsSpaces from './Topic/VectorsSpaces.tsx';
import Matrices from './Topic/Matrices.tsx';
import MatrixDiagonalization from './Topic/MatrixDiagonalization.tsx';
import EigenValuesVectors from './Topic/EigenValuesVectors.tsx';
import LinearEquations from './Topic/LinearEquations.tsx';
import GaussianElimination from './Topic/GaussianElimination.tsx';
import PCA from './Topic/PCA.tsx';
import LimitsContinuity from './Topic/LimitsContinuity.tsx';
import Integration from './Topic/Integration.tsx';
import PartialDerivative from './Topic/PartialDerivative.tsx';
import DifferentialEquation from './Topic/DifferentialEquation.tsx';
import GraphBasics from './Topic/GraphBasics.tsx';
import GraphTypes from './Topic/GraphTypes.tsx';
import GraphRepresentations from './Topic/GraphRepresentations.tsx';
import GraphWalks from './Topic/GraphWalks.tsx';
import PlanarGraphsColoring from './Topic/PlanarGraphsColoring.tsx';
import HandshakingLemma from './Topic/HandshakingLemma.tsx';
import ProbabilityTheory from './Topic/ProbabilityTheory.tsx';
import BayesTheorem from './Topic/BayesTheorem.tsx';
import ProbabilityDistributions from './Topic/ProbabilityDistributions.tsx';
import DescriptiveStatistics from './Topic/DescriptiveStatistics.tsx';
import Sampling from './Topic/Sampling.tsx';
import HypothesisTesting from './Topic/HypothesisTesting.tsx';
import RegressionAnalysis from './Topic/RegressionAnalysis.tsx';


// Map topic keys (from SidebarData) to actual components
const topicComponents: { [key: string]: React.FC } = {
  // 1. Propositional and First-Order Logic
  Home:Home,
  NumberSystems:NumberSystems,
  NumberConversion:NumberConversion,
  ArithmeticOperations:ArithmeticOperations,
  ModularArithmetic:ModularArithmetic,
  GCD:GCD,
  Congruency:Congruency,
  FermatTheorem:FermatTheorem,
  EuclidAlgorithm:EuclidAlgorithm,

  // 2.
  BasicCounting:BasicCounting,
  TreeDiagram:TreeDiagram,
  PermutationCombination:PermutationCombination,
  PigeonholePrinciple:PigeonholePrinciple,
  InclusionExclusionPrinciple:InclusionExclusionPrinciple,
  RecurrenceRelations:RecurrenceRelations,
  AlgorithmsComplexity:AlgorithmsComplexity,

  // 3.
  SetTheory:SetTheory,
  PropositionalLogic:PropositionalLogic,
  FunctionsMath:FunctionsMath,
  RelationsProperties:RelationsProperties,
  MathematicalInduction:MathematicalInduction,
  BooleanAlgebra:BooleanAlgebra,

  // 4.
  VectorsSpaces:VectorsSpaces,
  Matrices:Matrices,
  MatrixDiagonalization:MatrixDiagonalization,
  EigenValuesVectors:EigenValuesVectors,
  LinearEquations:LinearEquations,
  GaussianElimination:GaussianElimination,
  PCA:PCA,

  // 5.
  LimitsContinuity:LimitsContinuity,
  Integration:Integration,
  PartialDerivative:PartialDerivative,
  DifferentialEquation:DifferentialEquation,

  // 6.
  GraphBasics:GraphBasics,
  GraphTypes:GraphTypes,
  GraphRepresentations:GraphRepresentations,
  GraphWalks:GraphWalks,
  PlanarGraphsColoring:PlanarGraphsColoring,
  HandshakingLemma:HandshakingLemma,

  // 7.
  ProbabilityTheory:ProbabilityTheory,
  BayesTheorem:BayesTheorem,
  ProbabilityDistributions:ProbabilityDistributions,
  DescriptiveStatistics:DescriptiveStatistics,
  Sampling:Sampling,
  HypothesisTesting:HypothesisTesting,
  RegressionAnalysis:RegressionAnalysis,
  
  
     
};

const EngMath: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
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

export default EngMath;