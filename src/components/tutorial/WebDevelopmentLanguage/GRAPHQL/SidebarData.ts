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
  { title: "Graphql HOME", component: "home" },
  { title: "Graphql Introduction", component: "intro" },
  { title: "Graphql EnvironmentSetup", component: "environmentsetup" },
  { title: "Graphql Architecture", component: "architecture" },
  { title: "Graphql Application Components", component: "application" },
  { title: "Graphql Example", component: "example" },
  { title: "Graphql TypeSystem", component: "typesystem" },
  { title: "Graphql Schema", component: "schema" },
  { title: "Graphql Resolver", component: "resolver" },
  { title: "Graphql Query", component: "query" },
  { title: "Graphql Mutation", component: "mutation" },
  { title: "Graphql Validation", component: "validation" },
  { title: "Graphql  JQuery Integeration", component: "jquery" },
  { title: "Graphql  React Integeration", component: "react" },
  { title: "Graphql Apollo Client", component: "apollo" },
  { title: "Graphql Authenticating Client ", component: "authenticating" },
  { title: "Graphql Caching", component: "caching" },


];