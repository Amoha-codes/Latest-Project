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
  { title: "ASP.NET -  HOME", component: "home" },
  { title: "ASP.NET -  Introduction", component: "intro" },
  { title: "ASP.NET -  EnvironmentSetup", component: "environmentsetup" },
  { title: "ASP.NET -  LifeCycle", component: "lifecycle" },
  { title: "ASP.NET -  FirstExample", component: "firstexample" },
  { title: "ASP.NET -  EventHandling", component: "eventhandling" },
  { title: "ASP.NET -  ServerSide", component: "serverside" },
  { title: "ASP.NET -  Server Controls", component: "servercontrols" },
  { title: "ASP.NET -  HTML Server", component: "htmlserver" },
  { title: "ASP.NET -  Client Side", component: "clientside" },
  { title: "ASP.NET -  Basic Controls", component: "basiccontrols" },
  { title: "ASP.NET -  Directives", component: "directives" },
  { title: "ASP.NET -  Managing State", component: "state" },
  { title: "ASP.NET -  Validators", component: "validators" },
  { title: "ASP.NET -  Database Access", component: "db" },
  { title: "ASP.NET -  ADO.Net", component: "ado" },
  { title: "ASP.NET -  File Uploading", component: "file" },
  { title: "ASP.NET -  Ad Rotator", component: "rotator" },
  { title: "ASP.NET -  Multi Views", component: "views" },
  { title: "ASP.NET -  Calender", component: "calender" },
  { title: "ASP.NET -  Panels Controls", component: "panel" },
  { title: "ASP.NET -  AJAX Controls", component: "ajax" },
  { title: "ASP.NET -  Data Sources", component: "source" },
  { title: "ASP.NET -  Data Binding", component: "binding" },
  { title: "ASP.NET -  Custom Controls", component: "custom" },
  { title: "ASP.NET -  Error Handling", component: "error" },
  { title: "ASP.NET -  Debugging", component: "debug" },
  { title: "ASP.NET -  LINQ", component: "linq" },
  { title: "ASP.NET -  Security", component: "security" },
  { title: "ASP.NET -  Data Caching", component: "caching" },
  { title: "ASP.NET -  Web Services ", component: "web" },
  { title: "ASP.NET -  Multi Threading", component: "multi" },
  { title: "ASP.NET -  Configuration", component: "config" },
  { title: "ASP.NET -  Deployment", component: "deploy" },
  



];
