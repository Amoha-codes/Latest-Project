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
  { title: "Ruby HOME", component: "home" },
  { title: "Ruby Overview", component: "overview" },
  { title: "RubyEnvironmentSetup", component: "environmentsetup" },
  { title: "Ruby Syntax", component: "syntax" },
  { title: "Ruby ClassesObjects", component: "classesobjects" },
  { title: "Ruby Variables", component: "variables" },
  { title: "Ruby Operators", component: "operators" },
  { title: "Ruby Comments", component: "comments" },
  { title: "Ruby If...Else", component: "ifelse" },
  { title: "Ruby Loop", component: "loops" },
  { title: "Ruby Methods", component: "methods" },
  { title: "Ruby Blocks", component: "blocks" },
  { title: "Ruby Modules", component: "modules" },
  { title: "Ruby Strings", component: "strings" },
  { title: "Ruby Arrays", component: "arrays" },
  { title: "Ruby Hashes", component: "hashes" },
  { title: "Ruby Date and Time", component: "datetime" },
  { title: "Ruby Ranges", component: "ranges" },
  { title: "Ruby Iterators", component: "iterators" },
  { title: "Ruby Exception", component: "exception" },
  { title: "Ruby OOP", component: "oop" },
  { title: "Ruby Databases", component: "dbi" },
  { title: "Ruby Web Application", component: "web" },
  { title: "Ruby Sending Email", component: "email" },
  { title: "Ruby Socket Programming", component: "socket" },
  { title: "Ruby/XML,/XSLT", component: "xml" },
  { title: "Ruby WebServices", component: "services" },
  { title: "Ruby TK Guide", component: "guide" },
    { title: "Ruby LDAP Tutorial", component: "tutorial" },
     {title: "Ruby MultiThreading ", component: "multithreading" },
    {title: "Ruby Built-in-function", component: "function" },
    {title: "Ruby Predefined Variables", component: "predefinedvariables" },
    {title: "Ruby Predefined Constants", component: "predefinedconstants" },




];
