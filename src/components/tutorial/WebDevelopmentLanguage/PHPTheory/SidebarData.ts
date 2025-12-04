import { BookOpen } from "lucide-react";

export interface SubTopic {
  title: string;
  component: string;
}

export interface SidebarItem {
  title: string;
  component: string;
  icon?: unknown;
  hasArrow?: boolean;
  subtopics?: SubTopic[];
}

export const sidebarItems: SidebarItem[] = [


  { title: "PHP Home", component: "home" },
  { title: "PHP Intro", component: "intro" },
  { title: "PHP Install", component: "install" },
  { title: "PHP Syntax", component: "syntax" },


  {
    title: "PHP Comments",
    component: "phpcomments",
    icon: BookOpen,
    hasArrow: true,
    subtopics: [
      { title: "PHP Comments", component: "comments" },
      { title: "PHP MultiComments", component: "multicomments" },

    ]
  },

  {
    title: "PHP Variables",
    component: "phpvariables",
    icon: BookOpen,
    hasArrow: true,
    subtopics: [
      { title: " Variables", component: "variables" },
      { title: "Variables Scope", component: "scopevariables" },

    ]
  },
  { title: "PHP Echo / Print", component: "echoprint" },
  { title: "PHP Data Types", component: "datatypes" },
  {
    title: "PHP Strings",
    component: "phpstrings",
    icon: BookOpen,
    hasArrow: true,
    subtopics: [
      { title: " Php String", component: "string" },
      { title: "Modify String", component: "modifystring" },
      { title: "Concatenate String", component: "concatenatestring" },
      { title: "Slicing String", component: "slicingstring" },
      { title: "Escape Character", component: "escapecharacter" },


    ]
  },
  { title: "PHP Numbers", component: "phpnumbers" },
  { title: "PHP Casting", component: "phpcasting" },
  { title: "PHP Math", component: "phpmath" },
  { title: "PHP Constants", component: "phpconstants" },
  { title: "PHP Magic Constants", component: "phpmagicconstants" },

  { title: "PHP Operators", component: "phpoperators" },

    {
    title: "PHP IfElseElseIf",
    component: "phpifelse",
    icon: BookOpen,
    hasArrow: true,
    subtopics: [
      { title: " Php If", component: "phpif" },
      { title: "Php If Operators", component: "ifoperators" },
      { title: "PHP If....Else", component: "ifelse" },
      { title: "Nested If", component: "nestedif" },



    ]
  },
  { title: "PHP Switch", component: "phpswitch" },
      {
    title: "PHP Loops",
    component: "phploops",
    icon: BookOpen,
    hasArrow: true,
    subtopics: [
      { title: "Loops", component: "loops" },
      { title: "While Loop", component: "whileloop" },
      { title: "Do While Loop", component: "dowhileloop" },
      { title: "For Loop", component: "forloop" },
      { title: "For Each Loop", component: "foreachloop" },
      { title: "Break ", component: "break" },
      { title: "Continue", component: "continue" },

    ]
  },
  { title: "PHP Functions", component: "phpfunctions" },
{
  title: "PHP Arrays",
  component: "phparrays",
  icon: BookOpen,
  hasArrow: true,
  subtopics: [
    { title: "Arrays", component: "arrays" },
    { title: "Indexed Arrays", component: "indexedarrays" },
    { title: "Associative Arrays", component: "associativearrays" },
    { title: "Create Arrays", component: "createarrays" },
    { title: "Access Array Items", component: "accessarrayitems" },
    { title: "Update Array Items", component: "updatearrayitems" },
    { title: "Add Array Items", component: "addarrayitems" },
    { title: "Remove Array Items", component: "removearrayitems" },
    { title: "Sorting Arrays", component: "sortingarrays" },
    { title: "Multidimensional Arrays", component: "multidimensionalarrays" },
    { title: "Array Functions", component: "arrayfunctions" }
  ]
},


{
  title: "PHP Superglobals",
  component: "phpsuperglobals",
  icon: BookOpen,
  hasArrow: true,
  subtopics: [
    { title: " Superglobals", component: "superglobals" },
    { title: "$GLOBALS", component: "global" },
    { title: "$_SERVER", component: "server" },
    { title: "$_REQUEST", component: "request" },
    { title: "$_POST", component: "post" },
    { title: "$_GET", component: "get" },

  ]
},

  { title: "PHP RegEx", component: "phpregex" },



  {
    title: "PHP Forms",
    component: "phpforms",
    icon: BookOpen,
    hasArrow: true,
    subtopics: [
      { title: "Form Handling", component: "phpformhandling" },
      { title: "Form Validation", component: "phpformvalidation" },
      { title: "Form Required", component: "phpformrequired" },
      { title: "Form URL/Email", component: "phpformurlemail" },
      { title: "Form Complete", component: "phpformcomplete" }
    ]
  },



];
