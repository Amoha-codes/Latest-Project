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

  // ================= 1. Automata_Introduction =================
  {
    title: "Automata_Introduction",
    component: "AutomataIntroduction",
    hasArrow: true,
    subtopics: [
      { title: "Chomsky Hierarchy in Theory of Computation", component: "ChomskyHierarchy" },
      { title: "Applications of various Automata", component: "variousAutomata" },
      
    ],
  },

  // ================= 2. Regualar Expression and Finite Automata =================
  {
    title: "Regualar Expression and Finite Automata",
    component: "RegualarExpressionandFiniteAutomata",
    hasArrow: true,
    subtopics: [
      { title: "Introduction of Finite Automata", component: "FiniteAutomata" },
      { title: "Arden's Theorem in Theory of Computation", component: "ArdensTheorem" },
      { title: "Solving Automata Using Arden's Theorem", component: "SolvingAutomata" },
      { title: "L-graphs and what they represent in TOC", component: "Lgraph" },
      { title: "Hypothesis (language regularity) and algorithm (L-graph to NFA) in TOC", component: "Hypothesis" },
      { title: "Regular Expressions, Regular Grammar and Regular Languages", component: "RegualarExpression" },
    ],
  },

  // ================= 3. CFG =================
  {
    title: "CFG",
    component: "CFG",
    hasArrow: true,
    subtopics: [
      { title: "Relationship between grammar and language in Theory of Computation", component: "RelationshipGL" },
      { title: "Simplifying Context Free Grammars", component: "ContextFreeGrammer" },
      { title: "Closure Properties of Context Free Languages", component: "ClosureProp" },
      { title: "Union and Intersection of Regular languages with CFL", component: "UnionInter" },
      { title: "Converting Context Free Grammar to Chomsky Normal Form", component: "ChomskyForm" },
    ],
  },

  // ================= 4. PDA(Pushdown Automata) =================
  {
    title: "PDA(Pushdown Automata)",
    component: "PDA(Pushdown Automata)",
    hasArrow: true,
    subtopics: [
      { title: "Introduction of Pushdown Automata", component: "Pushdown" },
      { title: "Pushdown Automata Acceptance by Final State", component: "PDFinalState" },
      { title: "Construct Pushdown Automata for given languages", component: "GivenLanguage" },
      { title: "Construct Pushdown Automata for all length palindrome", component: "Palindrome" },
      { title: "Detailed Study of PushDown Automata", component: "DetailedStudy" },
      { title: "NPDA for accepting the language L = {anbm cn | m,n>=1}", component: "NPDA" },
    ],
  },

  // ================= 5. Turning Machine =================
  {
    title: "Turning Machine",
    component: "TurningMachine",
    hasArrow: true,
    subtopics: [
      { title: "Turing Machine in TOC", component: "TMIntro" },
      { title: "Turing Machine for addition", component: "TMAddition" },
      { title: "Turing machine for subtraction | Set 1", component: "TMSubtarction" },
      { title: "Turing machine for multiplication", component: "TMMultiplication" },
      { title: "Turing machine for copying data", component: "TMCopyingData" },
    ],
  },

  // ================= 6. Decidability =================
  {
    title: "Decidability",
    component: "Decidability",
    hasArrow: true,
    subtopics: [
      { title: "Decidable and Undecidable Problems in Theory of Computation", component: "DUProblem" },
      { title: "Undecidability and Reducibility in TOC", component: "UNDR" },
      { title: "Computable and non-computable problems in TOC", component: "ComputableProblem" },
     
    ],
  },

];
