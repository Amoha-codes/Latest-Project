import React, { useState } from "react";
import Layout from "./Layout";
import { sidebarItems } from "./SidebarData";
import GoHome from "./Topic/GoHome";
import GoIntro from "./Topic/GoIntro";
import GoGettingStarted from "./Topic/GoGetStarted";
import GoSyntax from "./Topic/GoSyntax";
import GoComments from "./Topic/GoComments";
import GoDeclareVariables from "./Topic/GoVariables/DeclareVariables";
import GoMultipleVariable from "./Topic/GoVariables/MultipleVariables";
import GoNamingRules from "./Topic/GoVariables/NamingRules";
import GoConstants from "./Topic/GoConstants";
import GoOutputFunctions from "./Topic/GoOutput/OutputFunction";
import GoFormattingVerbs from "./Topic/GoOutput/FormattingVerbs";
import GoDataTypes from "./Topic/GoDataTypes/BasicDataTypes";
import GoBoolean from "./Topic/GoDataTypes/Boolean";
import GoInteger from "./Topic/GoDataTypes/Integer";
import GoFloat from "./Topic/GoDataTypes/Float";
import GoArrays from "./Topic/GoArrays";
import GoSlices from "./Topic/GoSlices/CreateSlice";
import GoModifySlices from "./Topic/GoSlices/ModifySlice";
import GoOperators from "./Topic/Go Operators/Operators";
import GoArithmeticOperators from "./Topic/Go Operators/Arithmetice";
import GoAssignmentOperators from "./Topic/Go Operators/Assignment";
import GoComparisonOperators from "./Topic/Go Operators/Comparison";
import GoBitwiseOperators from "./Topic/Go Operators/Bitwise";
import GoLogicalOperators from "./Topic/Go Operators/Logical";
import GoConditions from "./Topic/Go Conditons/Conditions";
import GoIfStatement from "./Topic/Go Conditons/IfStatement";
import GoIfElseStatement from "./Topic/Go Conditons/IfElseStatement";
import GoElseIfStatement from "./Topic/Go Conditons/ElseIfStatement";
import GoNestedIfStatement from "./Topic/Go Conditons/NestedIf";
import GoSinglecase from "./Topic/Go Switches/Singlecase";
import GoMultiCaseSwitch from "./Topic/Go Switches/Multicase";
import GoLoops from "./Topic/GoLoops";
import GoStruct from "./Topic/GoStruct";
import GoMaps from "./Topic/GoMaps";

// Map sidebar keys to actual components
const topicComponents: { [key: string]: React.FC } = {
  Home: GoHome, // key name must match the default state value
  intro:GoIntro,
  getstarted:GoGettingStarted,
  syntax:GoSyntax,
  comments:GoComments,
  declarevariables:GoDeclareVariables,
  multiplevariables:GoMultipleVariable,
  namingrules:GoNamingRules,
  constants:GoConstants,
  outputfunction:GoOutputFunctions,
  formattingverbs:GoFormattingVerbs,
  datatypes:GoDataTypes,
  boolean:GoBoolean,
  integer:GoInteger,
  float:GoFloat,
  arrays:GoArrays,
  createslice:GoSlices,
  modifyslice:GoModifySlices,
  operators:GoOperators,
  arithmetic:GoArithmeticOperators,
  assignment:GoAssignmentOperators,
  logical:GoLogicalOperators,
  bitwise:GoBitwiseOperators,
  comparison:GoComparisonOperators,
  condition:GoConditions,
  if:GoIfStatement,
  ifelse:GoIfElseStatement,
  elseif:GoElseIfStatement,
  nestedif:GoNestedIfStatement,
  singlecase:GoSinglecase,
  multicase:GoMultiCaseSwitch,
  loops:GoLoops,
  struct:GoStruct,
  maps:GoMaps


};

const GO: React.FC = () => {
  // Load Home content first by default
  const [selectedTopic, setSelectedTopic] = useState<string>("home");

  const handleSelectTopic = (componentKey: string) => {
    setSelectedTopic(componentKey.toLowerCase()); // normalize to lowercase
  };

  const CurrentComponent = topicComponents[selectedTopic] || GoHome; // fallback to GoHome if not found

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Layout selected={selectedTopic} onSelect={handleSelectTopic}>
        <CurrentComponent /> {/* Always render a valid component */}
      </Layout>
    </div>
  );
};

export default GO;
