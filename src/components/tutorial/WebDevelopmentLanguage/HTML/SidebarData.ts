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
  { title: "PHP HOME", component: "php_home" },

  { title: "PHP Intro", component: "php_intro" },
  { title: "PHP Install", component: "php_install" },
  { title: "PHP Syntax", component: "php_syntax" },

  {
    title: "PHP Comments",
    component: "php_comments",
    hasArrow: true,
    subtopics: [
      { title: "PHP Comments", component: "php_comments" },
      { title: "PHP Multiline Comments", component: "php_multiline_comments" },
    ],
  },

  {
    title: "PHP Variables",
    component: "php_variables",
    hasArrow: true,
    subtopics: [
      { title: "Variables", component: "php_variables" },
      { title: "Variables Scope", component: "php_variable_scope" },
    ],
  },

  { title: "PHP Echo / Print", component: "php_echo_print" },
  { title: "PHP Data Types", component: "php_datatypes" },

  {
    title: "PHP Strings",
    component: "php_strings",
    hasArrow: true,
    subtopics: [
      { title: "PHP Strings", component: "php_strings" },
      { title: "Modify Strings", component: "php_modify_strings" },
      { title: "Concatenate Strings", component: "php_concatenate_strings" },
      { title: "Slicing Strings", component: "php_slicing_strings" },
      { title: "Escape Characters", component: "php_escape_characters" },
    ],
  },

  { title: "PHP Numbers", component: "php_numbers" },
  { title: "PHP Casting", component: "php_casting" },
  { title: "PHP Math", component: "php_math" },
  { title: "PHP Constants", component: "php_constants" },
  { title: "PHP Magic Constants", component: "php_magic_constants" },
  { title: "PHP Operators", component: "php_operators" },

  {
    title: "PHP If...Else...Elseif",
    component: "php_ifelse",
    hasArrow: true,
    subtopics: [
      { title: "PHP If", component: "php_if" },
      { title: "PHP If Operators", component: "php_if_operators" },
      { title: "PHP If...Else", component: "php_if_else" },
      { title: "PHP Shorthand if", component: "php_shorthand_if" },
      { title: "PHP Nested if", component: "php_nested_if" },
    ],
  },

  { title: "PHP Switch", component: "php_switch" },

  {
    title: "PHP Loops",
    component: "php_loops",
    hasArrow: true,
    subtopics: [
      { title: "Loops", component: "php_loops_intro" },
      { title: "While Loop", component: "php_while_loop" },
      { title: "Do While Loop", component: "php_do_while_loop" },
      { title: "For Loop", component: "php_for_loop" },
      { title: "Foreach Loop", component: "php_foreach_loop" },
      { title: "Break", component: "php_break" },
      { title: "Continue", component: "php_continue" },
    ],
  },

  { title: "PHP Functions", component: "php_functions" },

  {
    title: "PHP Arrays",
    component: "php_arrays",
    hasArrow: true,
    subtopics: [
      { title: "Arrays", component: "php_arrays" },
      { title: "Indexed Arrays", component: "php_indexed_arrays" },
      { title: "Associative Arrays", component: "php_associative_arrays" },
      { title: "Create Arrays", component: "php_create_arrays" },
      { title: "Access Array Items", component: "php_access_array_items" },
      { title: "Update Array Items", component: "php_update_array_items" },
      { title: "Add Array Items", component: "php_add_array_items" },
      { title: "Remove Array Items", component: "php_remove_array_items" },
      { title: "Sorting Arrays", component: "php_sorting_arrays" },
      { title: "Multidimensional Arrays", component: "php_multidimensional_arrays" },
      { title: "Array Functions", component: "php_array_functions" },
    ],
  },

  {
    title: "PHP Superglobals",
    component: "php_superglobals",
    hasArrow: true,
    subtopics: [
      { title: "Superglobals", component: "php_superglobals" },
      { title: "$GLOBALS", component: "php_globals" },
      { title: "$_SERVER", component: "php_server" },
      { title: "$_REQUEST", component: "php_request" },
      { title: "$_POST", component: "php_post" },
      { title: "$_GET", component: "php_get" },
    ],
  },

  { title: "PHP RegEx", component: "php_regex" },
];
