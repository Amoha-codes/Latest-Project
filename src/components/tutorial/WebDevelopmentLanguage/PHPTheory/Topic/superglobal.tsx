import React from "react";

const PhpSuperGlobals: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        PHP Global Variables - Superglobals
      </h1>

      <p className="leading-relaxed">
        Superglobals are predefined variables in PHP that are always available in all scopes.  
        This means they can be accessed anywhere: inside functions, classes, or included files.
        Superglobals were introduced in PHP 4.1.0.
      </p>

      <h2 className="text-2xl font-bold">What Are Superglobals?</h2>

      <p>
        These variables are always accessible regardless of scope — you don't need <code>global</code> 
        keywords or special declarations to use them. PHP provides several superglobal arrays for 
        handling user input, server information, sessions, forms, and more.
      </p>

      {/* List of Superglobals */}
      <h2 className="text-2xl font-bold">List of PHP Superglobal Variables</h2>

      <ul className="list-disc ml-8 space-y-2 text-lg">
        <li><code>$GLOBALS</code> — References all global variables in the script.</li>
        <li><code>$_SERVER</code> — Contains information about headers, paths, and script locations.</li>
        <li><code>$_REQUEST</code> — Collects data sent via GET, POST, and COOKIE.</li>
        <li><code>$_POST</code> — Collects data sent via HTTP POST method.</li>
        <li><code>$_GET</code> — Collects data sent via HTTP GET method.</li>
        <li><code>$_FILES</code> — Handles uploaded files.</li>
        <li><code>$_ENV</code> — Environment variables.</li>
        <li><code>$_COOKIE</code> — Variables passed via HTTP cookies.</li>
        <li><code>$_SESSION</code> — Session variables.</li>
      </ul>

      <p className="leading-relaxed">
        Each superglobal plays a specific role and is essential for handling forms, sessions, 
        server data, and global application state.
      </p>
    </div>
  );
};

export default PhpSuperGlobals;
