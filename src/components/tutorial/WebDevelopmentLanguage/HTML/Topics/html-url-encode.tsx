import React from "react";

const HtmlUrls: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        HTML Uniform Resource Locators (URLs)
      </h1>

      <p className="leading-relaxed">
        A URL is another word for a web address. A URL can be composed of words (e.g. <code>w3schools.com</code>), or an Internet Protocol (IP) address (e.g. <code>192.68.20.50</code>).  
        Most people enter the name when surfing, because names are easier to remember than numbers.
      </p>

      <h2 className="text-2xl font-semibold">URL - Uniform Resource Locator</h2>
      <p className="leading-relaxed">
        Web browsers request pages from web servers using a URL.  
        A Uniform Resource Locator (URL) is used to address a document (or other data) on the web.
      </p>
      <p className="leading-relaxed">
        Example URL: <code>https://www.w3schools.com/html/default.asp</code>
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
        scheme://prefix.domain:port/path/filename
      </pre>

      <h3 className="text-xl font-semibold">Explanation:</h3>
      <ul className="list-disc ml-6">
        <li><strong>scheme</strong> - defines the type of Internet service (common: http or https)</li>
        <li><strong>prefix</strong> - defines a domain prefix (default for http is www)</li>
        <li><strong>domain</strong> - defines the Internet domain name (e.g., w3schools.com)</li>
        <li><strong>port</strong> - defines the port number at the host (default for http is 80)</li>
        <li><strong>path</strong> - defines a path at the server (If omitted: the root directory)</li>
        <li><strong>filename</strong> - defines the name of a document or resource</li>
      </ul>

      <h2 className="text-2xl font-semibold">Common URL Schemes</h2>
      <table className="table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-2 py-1">Scheme</th>
            <th className="border border-gray-300 px-2 py-1">Short for</th>
            <th className="border border-gray-300 px-2 py-1">Used for</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-2 py-1">http</td>
            <td className="border border-gray-300 px-2 py-1">HyperText Transfer Protocol</td>
            <td className="border border-gray-300 px-2 py-1">Common web pages. Not encrypted</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-2 py-1">https</td>
            <td className="border border-gray-300 px-2 py-1">Secure HyperText Transfer Protocol</td>
            <td className="border border-gray-300 px-2 py-1">Secure web pages. Encrypted</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-2 py-1">ftp</td>
            <td className="border border-gray-300 px-2 py-1">File Transfer Protocol</td>
            <td className="border border-gray-300 px-2 py-1">Downloading or uploading files</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-2 py-1">file</td>
            <td className="border border-gray-300 px-2 py-1"></td>
            <td className="border border-gray-300 px-2 py-1">A file on your computer</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold">URL Encoding</h2>
      <p className="leading-relaxed">
        URLs can only be sent over the Internet using the ASCII character set.  
        If a URL contains characters outside ASCII, it must be URL encoded.
      </p>
      <p className="leading-relaxed">
        URL encoding converts non-ASCII characters into a format transmitted over the Internet.  
        It replaces non-ASCII characters with a "%" followed by hexadecimal digits. Spaces are replaced by "+" or "%20".
      </p>

      <h3 className="text-xl font-semibold">ASCII Encoding Examples</h3>
      <p>Your browser will encode input according to the character set used in your page (default HTML5: UTF-8).</p>
      <table className="table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-2 py-1">Character</th>
            <th className="border border-gray-300 px-2 py-1">From Windows-1252</th>
            <th className="border border-gray-300 px-2 py-1">From UTF-8</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-2 py-1">€</td>
            <td className="border border-gray-300 px-2 py-1">%80</td>
            <td className="border border-gray-300 px-2 py-1">%E2%82%AC</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-2 py-1">£</td>
            <td className="border border-gray-300 px-2 py-1">%A3</td>
            <td className="border border-gray-300 px-2 py-1">%C2%A3</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-2 py-1">©</td>
            <td className="border border-gray-300 px-2 py-1">%A9</td>
            <td className="border border-gray-300 px-2 py-1">%C2%A9</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-2 py-1">®</td>
            <td className="border border-gray-300 px-2 py-1">%AE</td>
            <td className="border border-gray-300 px-2 py-1">%C2%AE</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-2 py-1">À</td>
            <td className="border border-gray-300 px-2 py-1">%C0</td>
            <td className="border border-gray-300 px-2 py-1">%C3%80</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-2 py-1">Á</td>
            <td className="border border-gray-300 px-2 py-1">%C1</td>
            <td className="border border-gray-300 px-2 py-1">%C3%81</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-2 py-1">Â</td>
            <td className="border border-gray-300 px-2 py-1">%C2</td>
            <td className="border border-gray-300 px-2 py-1">%C3%82</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HtmlUrls;
