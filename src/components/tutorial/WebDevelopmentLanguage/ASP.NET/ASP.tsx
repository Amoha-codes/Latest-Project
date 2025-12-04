
import React, { useState } from "react";
import Layout from "./Layout";
import AspNetHome from "./Topic/Home";
import AspNetIntroduction from "./Topic/Intro";
import AspNetEnvironmentSetup from "./Topic/Environment";
import AspNetLifeCycle from "./Topic/Lifecycle";
import AspNetFirstExample from "./Topic/FirstExample";
import AspNetEventHandling from "./Topic/EventHandling";
import AspNetServerSide from "./Topic/Serverside";
import AspNetServerControls from "./Topic/Servercontrol";
import AspNetHtmlServerControls from "./Topic/HtmlServer";
import AspNetClientSide from "./Topic/ClientServer";
import AspNetBasicControls from "./Topic/BasicControls";
import AspNetDirectives from "./Topic/Directives";
import AspNetManagingState from "./Topic/MangaingState";
import AspNetValidators from "./Topic/Validators";
import AspNetDatabaseAccess from "./Topic/DatabaseAccess";
import AdoNet from "./Topic/AdoNet";
import FileUploadComponent from "./Topic/FileUploading";
import AdRotator from "./Topic/AdRotator";
import MultiViewComponent from "./Topic/Multiview";
import PanelControls from "./Topic/Panelcontrol";
import CalendarComponent from "./Topic/Calender";
import AjaxControl from "./Topic/Ajaxcontrol";
import DataSourceControl from "./Topic/Datasource";
import DataBindingControl from "./Topic/Databinding";
import AspNetCustomControls from "./Topic/Customcontrol";
import AspNetDebugging from "./Topic/Debugging";
import AspNetLINQ from "./Topic/LINQ";
import AspNetSecurity from "./Topic/Security";
import AspNetCaching from "./Topic/DataCaching";
import AspNetWebServices from "./Topic/Webservices";
import AspNetMultithreading from "./Topic/MultiThreading";
import AspNetConfiguration from "./Topic/Configuration";
import AspNetDeployment from "./Topic/Deployment";
import AspNetErrorHandling from "./Topic/Errorhandling";

const topicComponents: { [key: string]: React.FC } = {
  home:AspNetHome,
  intro:AspNetIntroduction,
  environmentsetup:AspNetEnvironmentSetup,
  lifecycle:AspNetLifeCycle,
  firstexample:AspNetFirstExample,
  eventhandling:AspNetEventHandling,
  serverside:AspNetServerSide,
  servercontrols:AspNetServerControls,
  htmlserver:AspNetHtmlServerControls,
  clientside:AspNetClientSide,
  basiccontrols:AspNetBasicControls,
  directives:AspNetDirectives,
  state:AspNetManagingState,
  validators:AspNetValidators,
  db: AspNetDatabaseAccess,
  ado:AdoNet,
  file:FileUploadComponent,
  rotator:AdRotator,
  views:MultiViewComponent,
  calender: CalendarComponent,
  panel:PanelControls,
  ajax:AjaxControl,
  source:DataSourceControl,
  binding:DataBindingControl,
  custom :AspNetCustomControls,
  error:AspNetErrorHandling,
  debug:AspNetDebugging,
  linq:AspNetLINQ,
  security:AspNetSecurity,
  caching:AspNetCaching,
  web:AspNetWebServices,
  multi:AspNetMultithreading,
  config:AspNetConfiguration,
  deploy:AspNetDeployment,






 
};

const ASP: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const [selectedTopic, setSelectedTopic] = useState("home");

  const handleSelectTopic = (key: string) => {
    setSelectedTopic(key.toLowerCase());
  };

  const CurrentComponent = topicComponents[selectedTopic] || AspNetHome;

  return (
    <Layout selected={selectedTopic} onSelect={handleSelectTopic} darkMode={darkMode}>
      <CurrentComponent />
    </Layout>
  );
};

export default ASP;
