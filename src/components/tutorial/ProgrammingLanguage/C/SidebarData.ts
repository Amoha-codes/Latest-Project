// Csharp/SidebarData.ts

export interface SubTopic {
  title: string;
  component: string;
}

export interface SidebarItem {
  [x: string]: any;
  title: string;
  component: string;
  hasArrow?: boolean; // To show dropdown arrow
  subtopics?: SubTopic[]; // Nested topics
}

export const sidebarItems: SidebarItem[] = [
  // --- C Basics ---
  { title: "C HOME", component: "Home" },
  { title: "C Intro", component: "intro" },
  { title: "C Get Started", component: "getstarted" },
   {
    title: "C Syntax",
    component: "syntax",
    hasArrow: true,
    subtopics: [
      { title: "C Syntax", component: "syntax" },
      { title: "C Statement", component: "statement" },

  
    ],
  },
   {
    title: "C Output",
    component: "output",
    hasArrow: true,
    subtopics: [
      { title: "Print Text", component: "printtext" },
      { title: "NewLines", component: "newlines" },

  
    ],
  },
  { title: "C Comments", component: "comments" },
  {
    title: "C Variables",
    component: "variables",
    hasArrow: true,
    subtopics: [
      { title: "Create Variable", component: "createvariables" },
      { title: "Format Specifiers", component: "specifiers" },
      { title: "Change Value", component: "changevalue" },
      { title: "Multiple Variables", component: "multiplevariables" },
      { title: "Variables", component: "variables" },
  
    ],
  },
  { title: "C Data Types", component: "datatypes" },
  { title: "C Type Conversion", component: "typeconversion" },
  { title: "C Constants", component: "constants" },
  { title: "C Break/Continue", component: "breakcontinue" },

  

  // --- Expandable Sections with Subtopics ---
  {
    title: "C Operators",
    component: "operators",
    hasArrow: true,
    subtopics: [
      { title: "Operators", component: "operators" },
      { title: "Arithmetic", component: "arithmetic" },
      { title: "Assignment", component: "assignment" },
      { title: "Comparison", component: "comparison" },
      { title: "Logical", component: "logical" },
    ],
  },
  { title: "C Booleans", component: "booleans" },

  {
    title: "C If..Else",
    component: "if-else",
    hasArrow: true,
    subtopics: [
      { title: "if", component: "if" },
      { title: "else", component: "else" },
      { title: "else if", component: "elseif" },
      { title: "Nested if", component: "nestedif" },
   
    ],
  },
    { title: "C Switch", component: "switch" },
      {
    title: "C While Loop",
    component: "whileloop",
    hasArrow: true,
    subtopics: [
      { title: "While Loop", component: "whileloop" },
      { title: "DO/ While Loop", component: "dowhileloop" },

    ],
  },
  {
    title: "C For Loop",
    component: "for-loop",
    hasArrow: true,
    subtopics: [
      { title: "For loop", component: "forloop" },
      { title: "Nested loop", component: "nestedloop" },
    ],
  },
  {
    title: "C Arrays",
    component: "arrays",
    hasArrow: true,
    subtopics: [
      { title: "Arrays", component: "arrays" },
      { title: "Loop Array", component: "looparray" },
      { title: "Array Size", component: "arraysize" },
      { title: "Multidimensional arrays", component: "multidimensionalarrays" },
    ],
  },
  {
    title: "C Strings",
    component: "strings",
    hasArrow: true,
    subtopics: [
      { title: "Strings", component: "strings" },
      { title: "Special Characters", component: "characters" },
      { title: "String Function", component: "stringsfunction" },
    ],
  },
    { title: "C User Input", component: "userinput" },
    { title: "C Memory Address", component: "memoryaddress" },
      {
    title: "C Pointers",
    component: "pointers",
    hasArrow: true,
    subtopics: [
      { title: " Pointers", component: "pointers" },
      { title: " Pointers & Arrays", component: "pointersarray" },
      { title: " Pointer Arithmetic", component: "pointersarithmetic" },
      { title: " Pointer to Pointer", component: "pointertopointer" },
    ],
  },
];
