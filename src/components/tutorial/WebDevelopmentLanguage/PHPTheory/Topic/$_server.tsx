import React from "react";

const PhpServer: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        PHP - $_SERVER Superglobal
      </h1>

      <p className="leading-relaxed">
        <code>$_SERVER</code> is a PHP superglobal variable that stores information about 
        headers, paths, and script locations.  
        It is available in all scopes without needing any special imports.
      </p>

      {/* Example Usage */}
      <h2 className="text-2xl font-bold mt-10">Basic Usage</h2>

      <p>The following example displays useful information from the <code>$_SERVER</code> array:</p>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`echo $_SERVER['PHP_SELF'];
echo $_SERVER['SERVER_NAME'];
echo $_SERVER['HTTP_HOST'];
echo $_SERVER['HTTP_REFERER'];
echo $_SERVER['HTTP_USER_AGENT'];
echo $_SERVER['SCRIPT_NAME'];`}
      </pre>

      {/* Table */}
      <h2 className="text-2xl font-bold mt-10">Common $_SERVER Elements</h2>

      <p>Here are some of the most commonly used <code>$_SERVER</code> entries:</p>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-400 text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-3 py-2">Element</th>
              <th className="border px-3 py-2">Description</th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <td className="border px-3 py-2">$_SERVER['PHP_SELF']</td>
              <td className="border px-3 py-2">Returns the filename of the currently executing script</td>
            </tr>

            <tr>
              <td className="border px-3 py-2">$_SERVER['GATEWAY_INTERFACE']</td>
              <td className="border px-3 py-2">Version of the CGI being used</td>
            </tr>

            <tr>
              <td className="border px-3 py-2">$_SERVER['SERVER_ADDR']</td>
              <td className="border px-3 py-2">IP address of the server</td>
            </tr>

            <tr>
              <td className="border px-3 py-2">$_SERVER['SERVER_NAME']</td>
              <td className="border px-3 py-2">Host server name (e.g. example.com)</td>
            </tr>

            <tr>
              <td className="border px-3 py-2">$_SERVER['SERVER_SOFTWARE']</td>
              <td className="border px-3 py-2">Server identification string (e.g. Apache, Nginx)</td>
            </tr>

            <tr>
              <td className="border px-3 py-2">$_SERVER['SERVER_PROTOCOL']</td>
              <td className="border px-3 py-2">Protocol used (e.g. HTTP/1.1)</td>
            </tr>

            <tr>
              <td className="border px-3 py-2">$_SERVER['REQUEST_METHOD']</td>
              <td className="border px-3 py-2">Request method (GET, POST, etc.)</td>
            </tr>

            <tr>
              <td className="border px-3 py-2">$_SERVER['REQUEST_TIME']</td>
              <td className="border px-3 py-2">Timestamp of when the request started</td>
            </tr>

            <tr>
              <td className="border px-3 py-2">$_SERVER['QUERY_STRING']</td>
              <td className="border px-3 py-2">Query string from URL</td>
            </tr>

            <tr>
              <td className="border px-3 py-2">$_SERVER['HTTP_ACCEPT']</td>
              <td className="border px-3 py-2">Accept header from the client</td>
            </tr>

            <tr>
              <td className="border px-3 py-2">$_SERVER['HTTP_ACCEPT_CHARSET']</td>
              <td className="border px-3 py-2">Character set accepted (e.g. UTF-8)</td>
            </tr>

            <tr>
              <td className="border px-3 py-2">$_SERVER['HTTP_HOST']</td>
              <td className="border px-3 py-2">Host header (domain)</td>
            </tr>

            <tr>
              <td className="border px-3 py-2">$_SERVER['HTTP_REFERER']</td>
              <td className="border px-3 py-2">URL of the referring page (not always reliable)</td>
            </tr>

            <tr>
              <td className="border px-3 py-2">$_SERVER['HTTPS']</td>
              <td className="border px-3 py-2">Indicates whether HTTPS is used</td>
            </tr>

            <tr>
              <td className="border px-3 py-2">$_SERVER['REMOTE_ADDR']</td>
              <td className="border px-3 py-2">User’s IP address</td>
            </tr>

            <tr>
              <td className="border px-3 py-2">$_SERVER['REMOTE_HOST']</td>
              <td className="border px-3 py-2">Hostname of the user (rarely available)</td>
            </tr>

            <tr>
              <td className="border px-3 py-2">$_SERVER['REMOTE_PORT']</td>
              <td className="border px-3 py-2">Port used by the user’s machine</td>
            </tr>

            <tr>
              <td className="border px-3 py-2">$_SERVER['SCRIPT_FILENAME']</td>
              <td className="border px-3 py-2">Absolute path of the executing script</td>
            </tr>

            <tr>
              <td className="border px-3 py-2">$_SERVER['SERVER_ADMIN']</td>
              <td className="border px-3 py-2">Admin email from server config</td>
            </tr>

            <tr>
              <td className="border px-3 py-2">$_SERVER['SERVER_PORT']</td>
              <td className="border px-3 py-2">Port used by the web server (80, 443)</td>
            </tr>

            <tr>
              <td className="border px-3 py-2">$_SERVER['SERVER_SIGNATURE']</td>
              <td className="border px-3 py-2">Server version and host name info</td>
            </tr>

            <tr>
              <td className="border px-3 py-2">$_SERVER['PATH_TRANSLATED']</td>
              <td className="border px-3 py-2">File system path of the script</td>
            </tr>

            <tr>
              <td className="border px-3 py-2">$_SERVER['SCRIPT_NAME']</td>
              <td className="border px-3 py-2">Path of the current script</td>
            </tr>

            <tr>
              <td className="border px-3 py-2">$_SERVER['SCRIPT_URI']</td>
              <td className="border px-3 py-2">Full URI of the current page</td>
            </tr>

          </tbody>
        </table>
      </div>

    </div>
  );
};

export default PhpServer;
