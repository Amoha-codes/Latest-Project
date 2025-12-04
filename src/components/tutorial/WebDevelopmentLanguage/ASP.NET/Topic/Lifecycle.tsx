import React from "react";

const AspNetLifeCycle: React.FC = () => {
  const lifeCycleGroups = [
    "Application Life Cycle",
    "Page Life Cycle"
  ];

  const applicationStages = [
    "User requests an application resource through a browser.",
    "A unified pipeline receives the first request.",
    "ApplicationManager object is created.",
    "HostingEnvironment object is initialized to provide resource information.",
    "Top-level application items are compiled.",
    "HttpContext, HttpRequest, and HttpResponse objects are created.",
    "An instance of HttpApplication is created and mapped to the request.",
    "HttpApplication processes the request and raises required events."
  ];

  const pageLifeCyclePhases = [
    "Initialization",
    "Instantiation of page controls",
    "State restoration and maintenance",
    "Execution of event handlers",
    "Page rendering"
  ];

  const pageStages = [
    "Page request — ASP.NET decides whether to compile or serve cached output.",
    "Start — Request and Response objects are set, IsPostBack determined.",
    "Initialization — Controls receive unique IDs and themes are applied.",
    "Load — Controls are populated with view-state and control-state data.",
    "Validation — Validation controls run and Page.IsValid is set.",
    "Postback event handling — Event handlers are executed if postback.",
    "Rendering — View state is saved, controls render output to response stream.",
    "Unload — Response is sent to client and cleanup operations occur."
  ];

  const lifeCycleEvents = [
    "PreInit — Check IsPostBack, set themes, master pages, create dynamic controls.",
    "Init — Initialize controls and build control tree.",
    "InitComplete — View-state tracking begins.",
    "LoadViewState — View-state information is restored into controls.",
    "LoadPostData — Form input values are processed.",
    "PreLoad — Runs before postback data is loaded.",
    "Load — Page and child controls are loaded.",
    "LoadComplete — Page loading and validation complete.",
    "PreRender — Last chance to update controls before rendering.",
    "PreRenderComplete — Ensures pre-rendering for all child controls is finished.",
    "SaveStateComplete — View state, personalization, and control state saved.",
    "Unload — Final cleanup, dispose objects, close connections."
  ];

  return (
    <div className="mt-20 space-y-8">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        ASP.NET - Life Cycle
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The ASP.NET life cycle defines how applications and pages are processed,
        requested, compiled, instantiated, executed, and rendered into dynamic output.
      </p>

      <p className="leading-relaxed">
        The life cycle ensures that ASP.NET processes web requests in a structured
        sequence, providing access to built-in events and execution stages.
      </p>

      {/* Groups */}
      <h2 className="text-2xl font-bold">Life Cycle Categories</h2>
      <ul className="list-disc ml-6 space-y-1">
        {lifeCycleGroups.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Application Life Cycle */}
      <div>
        <h2 className="text-2xl font-bold mb-2">ASP.NET Application Life Cycle</h2>
        <p className="leading-relaxed mb-2">
          This life cycle begins when a user requests an ASP.NET application resource
          and ends when the request has been fully processed.
        </p>

        <ul className="list-decimal ml-6 space-y-1">
          {applicationStages.map((stage, index) => (
            <li key={index}>{stage}</li>
          ))}
        </ul>
      </div>

      {/* Page Life Cycle */}
      <div>
        <h2 className="text-2xl font-bold mb-2">ASP.NET Page Life Cycle</h2>
        <p className="leading-relaxed mb-2">
          When a page is requested, it is created, initialized, processed, rendered,
          and then removed from memory. Understanding this sequence helps developers
          execute logic at the correct stage.
        </p>

        <ul className="list-disc ml-6 space-y-1">
          {pageLifeCyclePhases.map((phase, index) => (
            <li key={index}>{phase}</li>
          ))}
        </ul>
      </div>

      {/* Page Stages */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Page Life Cycle Stages</h2>
        <ul className="list-decimal ml-6 space-y-1">
          {pageStages.map((stage, index) => (
            <li key={index}>{stage}</li>
          ))}
        </ul>
      </div>

      {/* Events */}
      <div>
        <h2 className="text-2xl font-bold mb-2">ASP.NET Page Life Cycle Events</h2>
        <p className="leading-relaxed mb-2">
          Each stage raises an event, allowing developers to execute custom logic.
        </p>

        <ul className="list-disc ml-6 space-y-1">
          {lifeCycleEvents.map((event, index) => (
            <li key={index}>{event}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AspNetLifeCycle;
