
import React, { useState } from "react";
import Layout from "./Layout";
import PhpHome from "./Topic/Home";
import PhpInstallation from "./Topic/install";
import PhpIntroduction from "./Topic/intro";
import PhpSyntax from "./Topic/syntax";
import PhpComments from "./Topic/comments";
import PhpMultilineComments from "./Topic/multicomments";
import PhpVariables from "./Topic/variable";
import PhpVariableScope from "./Topic/variablescope";

import PhpStrings from "./Topic/phpstring";
import PhpModifyStrings from "./Topic/modifystring";
import PhpConcatenateStrings from "./Topic/concatenatestring";
import PhpSlicingStrings from "./Topic/slicingstring";
import PhpEscapeCharacters from "./Topic/escapecharacter";
import PhpNumbers from "./Topic/Number";
import PhpCasting from "./Topic/casting";
import PhpMathFunctions from "./Topic/math";
import PhpConstants from "./Topic/constants";
import PhpMagicConstants from "./Topic/magicconstants";
import PhpOperators from "./Topic/operators";
import PhpIfStatements from "./Topic/phpif";
import PhpIfOperators from "./Topic/ifoperators";
import PhpIfElse from "./Topic/ifelse";
import PhpNestedIf from "./Topic/nestedif";
import PhpSwitch from "./Topic/switch";
import PhpLoops from "./Topic/loops";
import PhpWhileLoop from "./Topic/whileloop";
import PhpDoWhileLoop from "./Topic/dowhileloop";
import PhpForLoop from "./Topic/forloop";
import PhpForeachLoop from "./Topic/foreach";
import PhpBreakStatement from "./Topic/break";
import PhpContinueStatement from "./Topic/continue";
import PhpFunctions from "./Topic/functions";
import PhpArrays from "./Topic/Array";
import PhpIndexedArrays from "./Topic/indexarrays";
import PhpAssociativeArrays from "./Topic/associatearrays";
import PhpCreateArrays from "./Topic/createarrays";
import PhpAccessArrays from "./Topic/accsessarrays";
import PhpUpdateArrayItems from "./Topic/updatearrays";
import PhpDeleteArrayItems from "./Topic/removearrays";
import PhpSortingArrays from "./Topic/sortingarrays";
import PhpMultidimensionalArrays from "./Topic/multidimensionalarrays";
import PhpArrayFunctions from "./Topic/arrayfunction";
import PhpSuperGlobals from "./Topic/superglobal";
import PhpGlobals from "./Topic/$global";
import PhpServer from "./Topic/$_server";
import PhpRequest from "./Topic/$_request";
import PhpPost from "./Topic/$_post";
import PhpGet from "./Topic/$_get";
import PhpRegex from "./Topic/phpRegEx";
import PhpAddArrayItems from "./Topic/addarrays";
import PhpDataTypes from "./Topic/datatypes";
import PhpEchoPrint from "./Topic/echoprint";
import PhpFormHandling from "./Topic/formhandling";
import PhpFormValidation from "./Topic/formvalidation";
import PhpFormRequiredFields from "./Topic/formrequired";
import PhpValidateEmailUrl from "./Topic/formemail";
import PhpCompleteFormExample from "./Topic/formcomplete";


const topicComponents: { [key: string]: React.FC } = {
    home: PhpHome,
    install: PhpInstallation,
    intro: PhpIntroduction,
    syntax: PhpSyntax,
    multicomments: PhpMultilineComments,
    comments: PhpComments,
    variables: PhpVariables,
    scopevariables: PhpVariableScope,
    echoprint: PhpEchoPrint,
    datatypes: PhpDataTypes,
    string: PhpStrings,
    modifystring: PhpModifyStrings,
    concatenatestring: PhpConcatenateStrings,
    slicingstring: PhpSlicingStrings,
    escapecharacter: PhpEscapeCharacters,
    phpnumbers: PhpNumbers,
    phpcasting: PhpCasting,
    phpmath: PhpMathFunctions,
    phpconstants: PhpConstants,
    phpmagicconstants: PhpMagicConstants,
    phpoperators: PhpOperators,
    phpif: PhpIfStatements,
    ifoperators: PhpIfOperators,
    ifelse: PhpIfElse,
    nestedif: PhpNestedIf,
    phpswitch: PhpSwitch,
    loops: PhpLoops,
    whileloop: PhpWhileLoop,
    dowhileloop: PhpDoWhileLoop,
    forloop: PhpForLoop,
    foreachloop: PhpForeachLoop,
    break: PhpBreakStatement,
    continue: PhpContinueStatement,
    phpfunctions: PhpFunctions,
    arrays:PhpArrays,
    indexedarrays:PhpIndexedArrays,
    associativearrays:PhpAssociativeArrays,
    createarrays:PhpCreateArrays,
    accessarrayitems:PhpAccessArrays,
    updatearrayitems:PhpUpdateArrayItems,
    addarrayitems:PhpAddArrayItems,
    removearrayitems:PhpDeleteArrayItems,
    sortingarrays:PhpSortingArrays,
    multidimensionalarrays:PhpMultidimensionalArrays,
    arrayfunctions:PhpArrayFunctions,
    superglobals:PhpSuperGlobals,
    global:PhpGlobals,
    server:PhpServer,
    request:PhpRequest,
    post:PhpPost,
    get:PhpGet,
    phpregex:PhpRegex,
    phpformhandling:PhpFormHandling,
    phpformvalidation:PhpFormValidation,
    phpformrequired:PhpFormRequiredFields,
    phpformurlemail:PhpValidateEmailUrl,
    phpformcomplete:PhpCompleteFormExample,



};

const PHP: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
    const [selectedTopic, setSelectedTopic] = useState("home");

    const handleSelectTopic = (key: string) => {
        setSelectedTopic(key.toLowerCase());
    };

    const CurrentComponent = topicComponents[selectedTopic] || PhpHome;

    return (
        <Layout selected={selectedTopic} onSelect={handleSelectTopic} darkMode={darkMode}>
            <CurrentComponent />
        </Layout>
    );
};

export default PHP;
