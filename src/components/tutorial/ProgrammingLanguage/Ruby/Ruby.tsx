import React, { useState } from "react";
import Layout from "./Layout";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { sidebarItems } from "./SidebarData";
import RubyHome from "./Topic/Home";
import RubyOverview from "./Topic/RubyOverview";
import RubyEnvironmentSetup from "./Topic/EvironmentSetup";
import RubySyntax from "./Topic/RubySyntax";
import RubyClassesObjects from "./Topic/ClassesandObjects";
import RubyVariables from "./Topic/RubyVariables";
import RubyOperators from "./Topic/RubyOperators";
import RubyComments from "./Topic/RubyComments";
import RubyConditionals from "./Topic/RubyIfElse";
import RubyLoops from "./Topic/RubyLoop";
import RubyMethods from "./Topic/RubyMethods";
import RubyBlocks from "./Topic/Blocks";
import RubyModules from "./Topic/modules";
import RubyStrings from "./Topic/RubyStrings";
import RubyArrays from "./Topic/RubyArrays";
import RubyHashes from "./Topic/RubyHashes";
import RubyDateTime from "./Topic/DateTime";
import RubyRanges from "./Topic/Ranges";
import RubyIterators from "./Topic/Iterators";
import RubyExceptions from "./Topic/Exception";
import RubyOOP from "./Topic/OOP";
import RubyDBI from "./Topic/RubyDBI";
import RubyCGI from "./Topic/RubyWebApplication";
import RubySMTP from "./Topic/RubyEmail";
import RubySockets from "./Topic/RubySocket";
import RubyMultithreading from "./Topic/MultiThreading";
import RubyXML from "./Topic/Ruby";
import RubySOAP4R from "./Topic/WebServices";
import RubyTkGuide from "./Topic/TK";
import RubyLdapGuide from "./Topic/LDAP";
import RubyBuiltinFunctions from "./Topic/BuiltFunction";
import RubyPredefinedVariables from "./Topic/PredefinedVariables";
import RubyPredefinedConstants from "./Topic/PredefinedConstants";





// Map sidebar keys to actual components
const topicComponents: { [key: string]: React.FC } = {
  Home:RubyHome,
  overview:RubyOverview,
  environmentsetup:RubyEnvironmentSetup,
  syntax:RubySyntax,
  classesobjects:RubyClassesObjects,
  variables:RubyVariables,
  operators:RubyOperators,
  comments:RubyComments,
  ifelse:RubyConditionals,
  loops:RubyLoops,
  methods:RubyMethods,
  blocks:RubyBlocks,
  modules:RubyModules,
  strings:RubyStrings,
  arrays:RubyArrays,
  hashes:RubyHashes,
  datetime:RubyDateTime,
  ranges:RubyRanges,
  iterators:RubyIterators,
  exception:RubyExceptions,
  oop:RubyOOP,
  dbi:RubyDBI,
  web:RubyCGI,
  email:RubySMTP,
  socket:RubySockets,
  xml:RubyXML,
  services:RubySOAP4R,
  guide:RubyTkGuide,
  tutorial:RubyLdapGuide,
  multithreading:RubyMultithreading,
  function:RubyBuiltinFunctions,
  predefinedvariables:RubyPredefinedVariables,
  predefinedconstants:RubyPredefinedConstants









 
};

const Ruby: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const [selectedTopic, setSelectedTopic] = useState("home");

  const handleSelectTopic = (key: string) => {
    setSelectedTopic(key.toLowerCase());
  };

  const CurrentComponent = topicComponents[selectedTopic] || RubyHome;

  return (
    <Layout selected={selectedTopic} onSelect={handleSelectTopic} darkMode={darkMode}>
      <CurrentComponent />
    </Layout>
  );
};

export default Ruby;
