import React, { useState } from "react";
import Layout from "./Layout";

// IMPORT ALL TOPICS
import WebAssemblyHome from "./Topic/Home";
import WebAssemblyOverview from "./Topic/Overview";
import WebAssemblyIntroduction from "./Topic/Introduction";
import WebAssemblyWASM from "./Topic/WASM";
import WebAssemblyInstallation from "./Topic/Installation";
import WebAssemblyTools from "./Topic/Tools";
import WebAssemblyProgramStructure from "./Topic/ProgramStructure";
import WebAssemblyJavascript from "./Topic/Javascript";
import WebAssemblyJavascriptAPI from "./Topic/JavascriptAPI";
import WebAssemblyDebugFirefox from "./Topic/Debbugging";
import WebAssemblyHelloWorld from "./Topic/HellowWorld";
import WebAssemblyModules from "./Topic/Modules";
import WebAssemblyValidation from "./Topic/Validation";
import WebAssemblyTextFormat from "./Topic/Textformat";
import WebAssemblyDynamicLinking from "./Topic/DynamicLinking";
import WebAssemblyGo from "./Topic/Go";
import WebAssemblyRust from "./Topic/Rust";
import WebAssemblySecurity from "./Topic/Security";
import WebAssemblyC from "./Topic/WorkingwithC";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const topicComponents: Record<string, any> = {
  home: WebAssemblyHome,
  overview: WebAssemblyOverview,
  introduction: WebAssemblyIntroduction,
  wasm: WebAssemblyWASM,
  installation: WebAssemblyInstallation,
  tools: WebAssemblyTools,
  programstructure: WebAssemblyProgramStructure,
  javascript: WebAssemblyJavascript,
  javascriptapi: WebAssemblyJavascriptAPI,
  debugwasm: WebAssemblyDebugFirefox,
  helloworld: WebAssemblyHelloWorld,
  modules: WebAssemblyModules,
  validation: WebAssemblyValidation,
  textformat: WebAssemblyTextFormat,
  convertwattowasm: WebAssemblyWASM,
  dynamiclinking: WebAssemblyDynamicLinking,
  security: WebAssemblySecurity,
  workingwithc: WebAssemblyC,
  workingwithrust: WebAssemblyRust,
  workingwithgo: WebAssemblyGo,
  workingwithnode: WebAssemblyHome,

};


const WebAssembly: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const [selectedTopic, setSelectedTopic] = useState("home");

  const handleSelectTopic = (key: string) => {
    setSelectedTopic(key.toLowerCase());
  };

  const CurrentComponent = topicComponents[selectedTopic] || WebAssemblyHome;

  return (
    <Layout selected={selectedTopic} onSelect={handleSelectTopic} darkMode={darkMode}>
      <CurrentComponent />
    </Layout>
  );
};

export default WebAssembly;