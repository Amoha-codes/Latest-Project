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

  // ================= 1.Compiler Design =================
  {
    title: "Introduction",
    component: "CD_Introduction",
    hasArrow: true,
    subtopics: [
      { title: "Introduction", component: "CD_Introduction_Main" },
      { title: "Phases of a Compiler", component: "CD_CompilerPhases" },
      { title: "Compiler Construction Tools", component: "CD_CompilerTools" },
      { title: "Symbol Table in Compiler", component: "CD_SymbolTable" },
      { title: "Error Handling in Compiler Design", component: "CD_ErrorHandling" },
      { title: "Generations of Programming Languages", component: "CD_ProgrammingGenerations" },
    ],
  },

  // ================= 2.Lexical Analysis =================
  {
    title: "Lexical Analysis",
    component: "CD_LexicalAnalysis",
    hasArrow: true,
    subtopics: [
      { title: "Lexical Analysis", component: "CD_LA_Introduction" },
      { title: "Program to Detect Tokens in C", component: "CD_LA_DetectTokens" },
      { title: "Flex (Fast Lexical Analyzer Generator)", component: "CD_LA_Flex" },
    ],
  },

  // ================= 3.Syntax Analysis =================
  {
    title: "Syntax Analysis",
    component: "CD_SyntaxAnalysis",
    hasArrow: true,
    subtopics: [
      { title: "Introduction to Syntax Analysis", component: "CD_SA_Introduction" },
      { title: "FIRST and FOLLOW", component: "CD_SA_FirstFollow" },
      { title: "Classification of CFG", component: "CD_SA_CFGClassification" },
      { title: "Ambiguous Grammar", component: "CD_SA_AmbiguousGrammar" },
      { title: "Introduction to Parsers", component: "CD_SA_ParsersIntro" },
      { title: "Classification of Top-down Parsers", component: "CD_SA_TopDownParsers" },
      { title: "Bottom Up Parser", component: "CD_SA_BottomUp" },
      { title: "Shift Reduce Parser", component: "CD_SA_ShiftReduce" },
      { title: "SLR, CLR and LALR Parsers", component: "CD_SA_SLR_CLR_LALR" },
      { title: "Operator Grammar and Precedence Parser", component: "CD_SA_OperatorGrammar" },
    ],
  },

  // ================= 4.Syntax Directed Translation =================
  {
    title: "Syntax Directed Translation",
    component: "CD_SDT",
    hasArrow: true,
    subtopics: [
      { title: "Syntax Directed Translation", component: "CD_SDT_Introduction" },
      { title: "S-Attributed and L-Attributed SDTs", component: "CD_SDT_S_L_Attributed" },
    ],
  },

  // ================= 5.Code Generation & Optimization =================
  {
    title: "Code Generation and Optimization",
    component: "CD_CodeGeneration",
    hasArrow: true,
    subtopics: [
      { title: "Code Optimization", component: "CD_CG_Optimization" },
      { title: "Intermediate Code Generation", component: "CD_CG_Intermediate" },
      { title: "Issues in Code Generator Design", component: "CD_CG_Issues" },
      { title: "Three Address Code", component: "CD_CG_TAC" },
      { title: "Detection of Loops in TAC", component: "CD_CG_LoopDetection" },
      { title: "Introduction of Object Code", component: "CD_CG_ObjectCode" },
      { title: "Data Flow Analysis", component: "CD_CG_DataFlow" },
    ],
  },

  // ================= 6.Runtime Environments =================
  {
    title: "Runtime Environments",
    component: "CD_Runtime",
    hasArrow: true,
    subtopics: [
      { title: "Static and Dynamic Scoping", component: "CD_RE_Scoping" },
      { title: "Runtime Environments", component: "CD_RE_Introduction" },
      { title: "Linker", component: "CD_RE_Linker" },
      { title: "Loader in C/C++", component: "CD_RE_Loader" },
      { title: "Developing a Linux Based Shell", component: "CD_RE_LinuxShell" },
    ],
  },
];
