import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= World Wide Web ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      World Wide Web (WWW)
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 11 Jul, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      The World Wide Web (WWW), often called the Web, is a system of interconnected webpages and information that you can access using the Internet. It allows us to browse websites, watch videos, shop online, and connect with others around the world through our computers and phones. Today, it connects over 63% of the world’s population.
    </p>

    {/* Key Parts of the Web */}
    <h2 className="text-3xl font-bold mt-8">Key Parts of the Web</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>URL (Uniform Resource Locator):</strong> The address of a webpage (e.g., https://www.example.com) that tells your browser where to find the page.</li>
      <li><strong>HTTP (Hypertext Transfer Protocol):</strong> The set of rules that lets your browser and the server communicate to send and receive webpages.</li>
      <li><strong>HTML (Hypertext Markup Language):</strong> The code that tells browsers how to display a webpage, including text, images, and links.</li>
    </ul>

    {/* Working of WWW */}
    <h2 className="text-3xl font-bold mt-8">Working of the World Wide Web (WWW)</h2>
    <p className="leading-relaxed">
      A web browser is used to access web pages. Hyperlinked resources on the Web can be accessed using software interfaces provided by browsers. Initially used only for surfing, browsers now support multiple tasks like searching, emailing, and file transfers. 
    </p>
    <p className="leading-relaxed">
      When a user requests a webpage, the browser sends a request to the web server. The server responds with the requested information, which the browser renders for the user.
    </p>

    {/* Browsers */}
    <h2 className="text-3xl font-bold mt-8">Web Browsers</h2>
    <p className="leading-relaxed">
      Web browsers can be used for several tasks, including searching, mailing, and transferring files. Common browsers include Internet Explorer, Opera Mini, and Google Chrome.
    </p>

    {/* WWW vs Internet */}
    <h2 className="text-3xl font-bold mt-8">World Wide Web (WWW) vs Internet</h2>
    <table className="table-auto border-collapse border border-gray-300 w-full text-left">
      <thead>
        <tr>
          <th className="border border-gray-300 px-2 py-1">Aspect</th>
          <th className="border border-gray-300 px-2 py-1">World Wide Web</th>
          <th className="border border-gray-300 px-2 py-1">Internet</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-2 py-1">What It Is</td>
          <td className="border border-gray-300 px-2 py-1">A collection of webpages and websites accessed with a browser.</td>
          <td className="border border-gray-300 px-2 py-1">A global network connecting computers.</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-2 py-1">Started</td>
          <td className="border border-gray-300 px-2 py-1">1989 by Tim Berners-Lee at CERN.</td>
          <td className="border border-gray-300 px-2 py-1">1960s as ARPANET.</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-2 py-1">Purpose</td>
          <td className="border border-gray-300 px-2 py-1">To share and explore information like text, images, and videos.</td>
          <td className="border border-gray-300 px-2 py-1">To connect devices and share data.</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-2 py-1">How You Use It</td>
          <td className="border border-gray-300 px-2 py-1">Through browsers like Chrome or Firefox.</td>
          <td className="border border-gray-300 px-2 py-1">Through any connected device for email, apps, etc.</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-2 py-1">Example</td>
          <td className="border border-gray-300 px-2 py-1">Visiting a website like Wikipedia.</td>
          <td className="border border-gray-300 px-2 py-1">Sending an email or streaming a video.</td>
        </tr>
      </tbody>
    </table>

    {/* Challenges */}
    <h2 className="text-3xl font-bold mt-8">Challenges of the Web</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Privacy: Some websites collect and share user information without consent.</li>
      <li>Safety: Hackers may attempt to steal information or send viruses.</li>
      <li>False Information: Not all content is trustworthy.</li>
      <li>Bullying: Some users may misuse the Web to bully others.</li>
      <li>Too Much Screen Time: Excessive use can affect health and focus.</li>
      <li>Access Issues: Not everyone has reliable Internet, making access difficult.</li>
    </ul>

    {/* History */}
    <h2 className="text-3xl font-bold mt-8">History of the WWW</h2>
    <p className="leading-relaxed">
      The WWW was created by Tim Berners-Lee in 1989 for researchers at CERN to communicate and share data efficiently. The World Wide Web Consortium (W3C) was established to oversee its development and standardization.
    </p>

    {/* Web Evolution */}
    <h2 className="text-3xl font-bold mt-8">Web Evolution</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Web 1.0 (1990–2000):</strong> Static websites.</li>
      <li><strong>Web 2.0 (2000–2010):</strong> Interactive and social platforms.</li>
      <li><strong>Web 3.0 (2010–2020):</strong> Semantic web for personalized experiences.</li>
      <li><strong>Web 4.0 (2020–2030):</strong> Expected fully intelligent web ecosystem powered by AI.</li>
    </ul>

    {/* Facts */}
    <h2 className="text-3xl font-bold mt-8">Some Facts About the Web</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>The first website is still online at <a href="http://info.cern.ch/" className="text-blue-600 underline">http://info.cern.ch/</a></li>
      <li>Over 1.5 billion websites exist worldwide.</li>
      <li>Google Chrome is used by over 60% of users.</li>
      <li>The Web is available in over 150 languages.</li>
    </ul>

    {/* Conclusion */}
    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      The World Wide Web is a gateway to knowledge, communication, and entertainment. Since its creation in 1989, it has evolved into an essential part of everyday life. Understanding the Web and using it safely allows us to harness its full potential.
    </p>

  </div>
);

export default Home;
