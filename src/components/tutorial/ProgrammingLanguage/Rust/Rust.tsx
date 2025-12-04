import React, { useState } from "react";
import Layout from "./Layout";

import RustHome from "./Topic/Home";
import RustIntro from "./Topic/RustIntro";
import RustEnvironmentSetup from "./Topic/Environmentsetup";
import RustDataTypes from "./Topic/DataTypes";
import RustVariables from "./Topic/RustVariables";
import RustConstant from "./Topic/RustConstants";
import RustOperators from "./Topic/RustOperators";
import RustDecisionMaking from "./Topic/RustDecisionMaking";
import RustLoops from "./Topic/RustLoop";
import RustFunctions from "./Topic/RustFunction";
import RustTuple from "./Topic/RustTuple";
import RustArray from "./Topic/RustArrays";
import RustOwnership from "./Topic/RustOwnership";
import RustBorrowing from "./Topic/Borrowing";
import RustSlices from "./Topic/Slices";
import RustStructures from "./Topic/Structure";
import RustEnums from "./Topic/Enums";
import RustModules from "./Topic/modules";
import RustCollections from "./Topic/Collections";
import RustErrorHandling from "./Topic/Errorhandling";
import RustGenerics from "./Topic/Generics";
import RustConcurrency from "./Concurrency";
import RustIO from "./Topic/InputOutput";
import RustFileIO from "./Topic/FileIO";
import RustPackage from "./Topic/PackageManger";
import RustIteratorClosure from "./Topic/Iterators";
import RustSmartPointers from "./Topic/SmartPointer";




// Map sidebar keys to actual components
const topicComponents: { [key: string]: React.FC } = {
home:RustHome,
intro:RustIntro,
environmentsetup:RustEnvironmentSetup,
datatypes: RustDataTypes,
variables:RustVariables,
constants:RustConstant,
string:RustConstant,
operators:RustOperators,
decision:RustDecisionMaking,
loop:RustLoops,
functions:RustFunctions,
tuple:RustTuple,
array:RustArray,
ownership:RustOwnership,
borrowing:RustBorrowing,
slices:RustSlices,
structure:RustStructures,
enums:RustEnums,
modules:RustModules,
collections:RustCollections,
errorhandling:RustErrorHandling,
generics:RustGenerics,
concurrency:RustConcurrency,
input:RustIO,
fileoutput:RustFileIO,
manager:RustPackage,
closure:RustIteratorClosure,
smartpointer:RustSmartPointers










 
};

const Rust: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const [selectedTopic, setSelectedTopic] = useState("home");

  const handleSelectTopic = (key: string) => {
    setSelectedTopic(key.toLowerCase());
  };

  const CurrentComponent = topicComponents[selectedTopic] || RustHome;

  return (
    <Layout selected={selectedTopic} onSelect={handleSelectTopic} darkMode={darkMode}>
      <CurrentComponent />
    </Layout>
  );
};

export default Rust;
