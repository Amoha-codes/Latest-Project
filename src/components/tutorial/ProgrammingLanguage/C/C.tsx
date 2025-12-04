import React, { useState } from "react";
import Layout from "./Layout";

import CHome from "./Topic/Home";
import CIntroduction from "./Topic/intro";
import CGetStarted from "./Topic/GetStarted";
import CSyntax from "./Topic/Csyntax/syntax";
import CStatements from "./Topic/Csyntax/Statement";
import COutput from "./Topic/C Output/PrintText";
import CNewLines from "./Topic/C Output/NewLines";
import CComments from "./Topic/CComments";
import CVariables from "./Topic/C Variables/CreateVariable";
import CFormatSpecifiers from "./Topic/C Variables/FormatSpecifiers";
import CVariableNames from "./Topic/C Variables/Variables";
import CDeclareMultipleVariables from "./Topic/C Variables/MultipleVariables";
import CVariableValues from "./Topic/C Variables/ChangeVariables";
import CTypeConversion from "./Topic/CTypeconversion";
import CConstants from "./Topic/CConstants";
import CBreakContinue from "./Topic/BreakContinue";
import COperators from "./Topic/C Operators/Operators";
import CArithmeticOperators from "./Topic/C Operators/CArithmetic";
import CAssignmentOperators from "./Topic/C Operators/CAssignment";
import CComparisonOperators from "./Topic/C Operators/CComparison";
import CLogicalOperators from "./Topic/C Operators/CLogical";
import CBooleans from "./Topic/CBoolean";
import CIfElse from "./Topic/C IfElse/if";
import CElse from "./Topic/C IfElse/Else";
import CElseIf from "./Topic/C IfElse/ElseIf";
import CNestedIf from "./Topic/C IfElse/Nestedifelse";
import CSwitch from "./Topic/C Switch";
import CWhileLoop from "./Topic/C while Loop/WhileLoop";
import CDoWhileLoop from "./Topic/C while Loop/Do-WhileLoop";
import CForLoop from "./Topic/C ForLoop/ForLoop";
import CNestedLoops from "./Topic/C ForLoop/NestedLoop";
import CArrays from "./Topic/C Array.tsx/Array";
import CArrayLoop from "./Topic/C Array.tsx/ArrayLoop";
import CArraySize from "./Topic/C Array.tsx/ArraySize";
import CMultidimensionalArrays from "./Topic/C Array.tsx/Multidimensional";
import CStrings from "./Topic/C Strings.tsx/String";
import CSpecialCharacters from "./Topic/C Strings.tsx/SpecialCharacter";
import CStringFunctions from "./Topic/C Strings.tsx/StringFunction";
import CUserInput from "./Topic/UserInput";
import CMemoryAddress from "./Topic/MemoryAddress";
import CPointers from "./Topic/C Pointers/Pointers";
import CPointersArrays from "./Topic/C Pointers/Pointers&Arrays";
import CPointerToPointer from "./Topic/C Pointers/PointerstoPointers";
import CPointerArithmetic from "./Topic/C Pointers/PointersArithmetic";
import CDataTypes from "./Topic/DataTypes";

// Import topic components


// Map sidebar component keys to actual components
const topicComponents: { [key: string]: React.FC } = {
home:CHome,
intro:CIntroduction,
getstarted:CGetStarted,
syntax:CSyntax,
statement:CStatements,
printtext:COutput,
newlines:CNewLines,
comments:CComments,
createvariables:CVariables,
specifiers:CFormatSpecifiers,
changevariables:CVariableValues,
multiplevariables:CDeclareMultipleVariables,
variables:CVariableNames,
typeconversion:CTypeConversion,
constants:CConstants,
breakcontinue:CBreakContinue,
operators:COperators,
arithmetic:CArithmeticOperators,
assignment:CAssignmentOperators,
comparison:CComparisonOperators,
logical:CLogicalOperators,
booleans:CBooleans,
if:CIfElse,
else:CElse,
elseif:CElseIf,
nesetedif:CNestedIf,
switch:CSwitch,
whileloop:CWhileLoop,
dowhileloop:CDoWhileLoop,
forloop:CForLoop,
nestedloop:CNestedLoops,
arrays:CArrays,
looparray:CArrayLoop,
arraysize:CArraySize,
multidimensionalarrays:CMultidimensionalArrays,
strings:CStrings,
characters:CSpecialCharacters,
stringsfunction:CStringFunctions,
userinput:CUserInput,
memoryaddress:CMemoryAddress,
pointers:CPointers,
pointersarray:CPointersArrays,
pointersarithmetic:CPointerArithmetic,
pointertopointer:CPointerToPointer,
datatypes:CDataTypes




};

const C: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const [selectedTopic, setSelectedTopic] = useState("home");

  const handleSelectTopic = (key: string) => {
    setSelectedTopic(key.toLowerCase());
  };

  const CurrentComponent = topicComponents[selectedTopic] || CHome;

  return (
    <Layout selected={selectedTopic} onSelect={handleSelectTopic} darkMode={darkMode}>
      <CurrentComponent />
    </Layout>
  );
};

export default C;
