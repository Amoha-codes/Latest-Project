export interface SubTopic {
  title: string;
  component: string;
}

export interface SidebarItem {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
  title: string;
  component: string;
  hasArrow?: boolean; // To show dropdown arrow
  subtopics?: SubTopic[]; // Nested topics
}

export const sidebarItems: SidebarItem[] = [
  // WebAssembly - Tutorial Core

  { title: "WebAssembly -  Home", component: "home" },
  { title: "WebAssembly -  Overview", component: "overview" },
  { title: "WebAssembly -  Introduction", component: "introduction" },
  { title: "WebAssembly -  WASM", component: "wasm" },
  { title: "WebAssembly -  Installation", component: "installation" },
  { title: "WebAssembly -  Tools to Compile to WASM", component: "tools" },
  { title: "WebAssembly -  Program Structure", component: "programstructure" },
  { title: "WebAssembly -  Javascript", component: "javascript" },
  { title: "WebAssembly -  Javascript API", component: "javascriptapi" },
  { title: "WebAssembly -  Debugging WASM in Firefox", component: "debuggingfirefox" },
  { title: "WebAssembly -  “Hello World”", component: "helloworld" },
  { title: "WebAssembly -  Modules", component: "modules" },
  { title: "WebAssembly -  Validation", component: "validation" },
  { title: "WebAssembly -  Text Format", component: "textformat" },
  { title: "WebAssembly -  Convert WAT to WASM", component: "convertwatwasm" },
  { title: "WebAssembly -  Dynamic Linking", component: "dynamiclinking" },
  { title: "WebAssembly -  Security", component: "security" },
  { title: "WebAssembly -  Working with C", component: "workingwithc" },
  { title: "WebAssembly -  Working with C++", component: "workingwithcpp" },
  { title: "WebAssembly -  Working with Rust", component: "workingwithrust" },
  { title: "WebAssembly -  Working with Go", component: "workingwithgo" },
  { title: "WebAssembly -  Working with Nodejs", component: "workingwithnodejs" },

];
