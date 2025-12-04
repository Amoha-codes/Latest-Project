
import React, { useState } from "react";
import Layout from "./Layout";
import GraphqlHome from "./Topic/home";
import GraphqlIntroduction from "./Topic/intro";
import GraphqlEnvironmentSetup from "./Topic/environmentsetup";
import GraphqlArchitecture from "./Topic/architecture";
import GraphqlApplicationComponents from "./Topic/application";
import GraphqlExample from "./Topic/example";
import GraphqlSchema from "./Topic/scheme";
import GraphqlResolver from "./Topic/resolver";
import GraphqlQuery from "./Topic/query";
import GraphqlMutation from "./Topic/mutation";
import GraphqlValidation from "./Topic/validation";
import GraphqlReactIntegration from "./Topic/react";
import GraphqlApolloClient from "./Topic/Apollo";
import GraphqlAuthenticatingClient from "./Topic/authenticating";
import GraphqlCaching from "./Topic/Caching";
import GraphqlTypeSystem from "./Topic/typesystem";

const topicComponents: { [key: string]: React.FC } = {
home:GraphqlHome,
intro:GraphqlIntroduction,
environmentsetup:GraphqlEnvironmentSetup,
architecture:GraphqlArchitecture,
application:GraphqlApplicationComponents,
example:GraphqlExample,
schema:GraphqlSchema,
resolver:GraphqlResolver,
query:GraphqlQuery,
mutation:GraphqlMutation,
validation:GraphqlValidation,
// jquery:GraphqlJ,
react:GraphqlReactIntegration,
apollo:GraphqlApolloClient,
authenticating:GraphqlAuthenticatingClient,
caching:GraphqlCaching,
typesystem:GraphqlTypeSystem
};

const Graphql: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const [selectedTopic, setSelectedTopic] = useState("home");

  const handleSelectTopic = (key: string) => {
    setSelectedTopic(key.toLowerCase());
  };

  const CurrentComponent = topicComponents[selectedTopic] || GraphqlHome;

  return (
    <Layout selected={selectedTopic} onSelect={handleSelectTopic} darkMode={darkMode}>
      <CurrentComponent />
    </Layout>
  );
};

export default Graphql;
