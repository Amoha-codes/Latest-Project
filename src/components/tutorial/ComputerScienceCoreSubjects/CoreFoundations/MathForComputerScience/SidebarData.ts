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
  hasArrow?: boolean; // To show dropdown arrow
  subtopics?: SubTopic[]; // Nested topics
}

export const sidebarItems: SidebarItem[] = [
  { title: "Tutorial", component: "Home", icon: BookOpen },

  // ================= 1. Number Theory =================
  {
    title: "Number Theory",
    component: "NumberTheory",
    hasArrow: true,
    subtopics: [
      { title: "Decimal, Binary, Octal, Hexadecimal Systems", component: "NumberSystems" },
      { title: "Conversion Between Number Systems", component: "NumberConversion" },
      { title: "Arithmetic Operations", component: "ArithmeticOperations" },
      { title: "Modular Arithmetic", component: "ModularArithmetic" },
      { title: "Greatest Common Divisor (GCD)", component: "GCD" },
      { title: "Congruency", component: "Congruency" },
      { title: "Fermat's Little Theorem", component: "FermatTheorem" },
      { title: "Euclid's Division Algorithm", component: "EuclidAlgorithm" },
    ],
  },

  // ================= 2. Combinatorics =================
  {
    title: "Combinatorics",
    component: "Combinatorics",
    hasArrow: true,
    subtopics: [
      { title: "Basic Counting Rules", component: "BasicCounting" },
      { title: "Tree Diagram", component: "TreeDiagram" },
      { title: "Permutation and Combination", component: "PermutationCombination" },
      { title: "Pigeonhole Principle", component: "PigeonholePrinciple" },
      { title: "Inclusion-Exclusion Principle", component: "InclusionExclusionPrinciple" },
      { title: "Recurrence Relations", component: "RecurrenceRelations" },
      { title: "Algorithms and Complexity", component: "AlgorithmsComplexity" },
    ],
  },

  // ================= 3. Discrete Mathematics =================
  {
    title: "Discrete Mathematics",
    component: "DiscreteMath",
    hasArrow: true,
    subtopics: [
      { title: "Set Theory", component: "SetTheory" },
      { title: "Propositional Logic", component: "PropositionalLogic" },
      { title: "Functions in Mathematics", component: "FunctionsMath" },
      { title: "Relations and Their Properties", component: "RelationsProperties" },
      { title: "Principle of Mathematical Induction", component: "MathematicalInduction" },
      { title: "Boolean Algebra", component: "BooleanAlgebra" },
    ],
  },

  // ================= 4. Linear Algebra =================
  {
    title: "Linear Algebra",
    component: "LinearAlgebra",
    hasArrow: true,
    subtopics: [
      { title: "Vector and Vector Spaces", component: "VectorsSpaces" },
      { title: "Matrices", component: "Matrices" },
      { title: "Matrix Diagonalization", component: "MatrixDiagonalization" },
      { title: "Eigenvalues and Eigenvectors", component: "EigenValuesVectors" },
      { title: "System of Linear Equations", component: "LinearEquations" },
      { title: "Gaussian Elimination", component: "GaussianElimination" },
      { title: "Principal Component Analysis", component: "PCA" },
    ],
  },

  // ================= 5. Calculus =================
  {
    title: "Calculus",
    component: "Calculus",
    hasArrow: true,
    subtopics: [
      { title: "Limits, Continuity & Differentiation", component: "LimitsContinuity" },
      { title: "Integration", component: "Integration" },
      { title: "Partial Derivative", component: "PartialDerivative" },
      { title: "Differential Equation", component: "DifferentialEquation" },
    ],
  },

  // ================= 6. Graph Theory =================
  {
    title: "Graph Theory",
    component: "GraphTheory",
    hasArrow: true,
    subtopics: [
      { title: "Graph Theory Basics", component: "GraphBasics" },
      { title: "Types of Graphs with Examples", component: "GraphTypes" },
      { title: "Graph Representations", component: "GraphRepresentations" },
      { title: "Walks, Trails, Paths, Cycles, and Circuits", component: "GraphWalks" },
      { title: "Planar Graphs and Graph Coloring", component: "PlanarGraphsColoring" },
      { title: "Handshaking Lemma", component: "HandshakingLemma" },
    ],
  },

  // ================= 7. Probability & Statistics =================
  {
    title: "Probability and Statistics",
    component: "ProbabilityStatistics",
    hasArrow: true,
    subtopics: [
      { title: "Probability Theory", component: "ProbabilityTheory" },
      { title: "Bayes' Theorem", component: "BayesTheorem" },
      { title: "Probability Distributions", component: "ProbabilityDistributions" },
      { title: "Descriptive Statistics", component: "DescriptiveStatistics" },
      { title: "Sampling", component: "Sampling" },
      { title: "Hypothesis Testing", component: "HypothesisTesting" },
      { title: "Regression Analysis", component: "RegressionAnalysis" },
    ],
  },


];
