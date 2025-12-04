
import React, { useState } from "react";
import Layout from "./Layout";
import DartHome from "./Topic/Home";
import DartOverview from "./Topic/Overview";
import DartEnvironment from "./Topic/EnvironmentSetup";
import DartSyntax from "./Topic/Syntax";
import DartDataTypes from "./Topic/DataTypes";
import DartVariables from "./Topic/Variables";
import DartOperators from "./Topic/Operators";
import DartLoops from "./Topic/Loop";
import DartDecisionMaking from "./Topic/DecisionMaking";
import DartNumbers from "./Topic/Numbers";
import DartStrings from "./Topic/String";
import DartBoolean from "./Topic/Boolean";
import DartLists from "./Topic/List";
import DartMaps from "./Topic/Map";
import DartSymbols from "./Topic/Symbol";
import DartRunes from "./Topic/Runes";
import DartEnumeration from "./Topic/Enumeration";
import DartFunctions from "./Topic/Function";
import DartInterfaces from "./Topic/Interfaces";
import DartClasses from "./Topic/Classes";
import DartObject from "./Topic/Objects";
import DartCollection from "./Topic/collection";
import DartPackages from "./Topic/Package";
import DartExceptions from "./Topic/Exceptions";
import DartLibraries from "./Topic/Libraries";
import DartAsync from "./Topic/Async";
import DartConcurrency from "./Topic/Concurrency";
import DartDebugging from "./Topic/Debugging";


const topicComponents: { [key: string]: React.FC } = {
  home:DartHome,
  overview:DartOverview,
  environmentsetup:DartEnvironment,
  syntax:DartSyntax,
  datatypes:DartDataTypes,
  variables:DartVariables,
  operators:DartOperators,
  loops:DartLoops,
  decisionmaking:DartDecisionMaking,
  numbers:DartNumbers,
  strings:DartStrings,
  boolean:DartBoolean,
  list:DartLists,
  map:DartMaps,
  symbol:DartSymbols,
  runes:DartRunes,
  enumeration:DartEnumeration,
  function:DartFunctions,
  interfaces:DartInterfaces,
  classes:DartClasses,
  object:DartObject,
  collection:DartCollection,
  package:DartPackages,
  exception:DartExceptions,
  libraries:DartLibraries,
  debugging:DartDebugging,
async:DartAsync,
concurrency:DartConcurrency


};

const Dart: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const [selectedTopic, setSelectedTopic] = useState("home");

  const handleSelectTopic = (key: string) => {
    setSelectedTopic(key.toLowerCase());
  };

  const CurrentComponent = topicComponents[selectedTopic] || DartHome;

  return (
    <Layout selected={selectedTopic} onSelect={handleSelectTopic} darkMode={darkMode}>
      <CurrentComponent />
    </Layout>
  );
};

export default Dart;
