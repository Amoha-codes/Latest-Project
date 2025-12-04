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
  { title: "Rust - Home", component: "home"},
  { title: "Rust - Introduction", component: "intro",},
  { title: "Rust - Environment Setup", component: "environmentsetup" },
  { title: "Rust - Data Types", component: "datatypes" },
  { title: "Rust - Variables", component: "variables" },
  { title: "Rust - Constant", component: "constants" },
  { title: "Rust - Strings", component: "string" },
  { title: "Rust - Operators", component: "operators" },
  { title: "Rust - Decision Making", component: "decision" },

  { title: "Rust - Loop", component: "loop",  },
  { title: "Rust - Functions", component: "functions",  },
  { title: "Rust - Tuple", component: "tuple"  },
  { title: "Rust - Array", component: "array",  },
  { title: "Rust - Ownership", component: "ownership",  },
  { title: "Rust - Borrowing", component: "borrowing" },
  { title: "Rust - Slices", component: "slices" },
  { title: "Rust - Structure", component: "structure" },
  { title: "Rust - Enums", component: "enums" },
  { title: "Rust - Modules", component: "modules" },

  { title: "Rust - Collections", component: "collections" },
  { title: "Rust - Error Handling", component: "errorhandling" },
  { title: "Rust - Generic Types", component: "generics" },
   { title: "Rust - InputOutput", component: "input" },
     { title: "Rust - File Input/Output", component: "fileoutput" },
       { title: "Rust - PackageManger", component: "manager" },
         { title: "Rust - Iterator and Closure", component: "closure" },
           { title: "Rust - SmartPointer", component: "smartpointer" },
  { title: "Rust - Concurrency", component: "concurrency" }
];