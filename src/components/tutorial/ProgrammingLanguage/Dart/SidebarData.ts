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
  { title: "Dart Programming -  HOME", component: "home" },
  { title: "Dart Programming -  Overview", component: "overview" },
  { title: "Dart Programming -  EnvironmentSetup", component: "environmentsetup" },
  { title: "Dart Programming -  Syntax", component: "syntax" },
  { title: "Dart Programming -  Data Types", component: "datatypes" },
  { title: "Dart Programming -  Variables", component: "variables" },
  { title: "Dart Programming -  Operators", component: "operators" },
  { title: "Dart Programming -  Loop", component: "loops" },
  { title: "Dart Programming -  Decision Making", component: "decisionmaking" },
  { title: "Dart Programming -  Numbers", component: "numbers" },
  { title: "Dart Programming -  Strings", component: "strings" },
  { title: "Dart Programming -  Boolean", component: "boolean" },
  { title: "Dart Programming -  List", component: "list" },
  { title: "Dart Programming -  Map", component: "map" },
  { title: "Dart Programming -  Symbol", component: "symbol" },
  { title: "Dart Programming -  Runes", component: "runes" },
  { title: "Dart Programming -  Enumeration", component: "enumeration" },
  { title: "Dart Programming -  Function", component: "function" },
  { title: "Dart Programming -  Interfaces", component: "interfaces" },
  { title: "Dart Programming -  Classes", component: "classes" },
  { title: "Dart Programming -  Object", component: "object" },
  { title: "Dart Programming -  Collection", component: "collection" },
  { title: "Dart Programming -  Package", component: "package" },
  { title: "Dart Programming -  Exception", component: "exception" },
  { title: "Dart Programming -  Debugging", component: "debugging" },
    { title: "Dart Programming -  Libraries", component: "libraries" },
     {title: "Dart Programming -  Async", component: "async" },
    {title: "Dart Programming -  Concurrency", component: "concurrency" }



];
