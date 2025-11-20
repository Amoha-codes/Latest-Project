import React from 'react';

const GetStarted: React.FC = () => (
  <div className="mt-20"> {/* 👈 pushes content below navbar */}
    <h1 className="text-4xl font-extrabold text-gray-900 border-b-2 pb-2">
       C# Get Started
    </h1>

    <p className="text-lg text-gray-700 leading-relaxed mt-4">
      The easiest way to get started with <b>C#</b> is to use an <b>IDE</b>.
    </p>

    <p className="text-gray-700 leading-relaxed mt-2">
      An <b>IDE (Integrated Development Environment)</b> is a tool used to <b>edit</b> and <b>compile</b> code easily. 
      It provides features like syntax highlighting, debugging, and project management — 
      making development smoother and faster.
    </p>

    <h2 className="text-2xl font-bold text-blue-600 mt-6">C# IDE</h2>
    <p className="text-gray-700 leading-relaxed">
      In this tutorial, we’ll use <b>Visual Studio Community</b>, which is 
      free to download from{' '}
      <a 
        href="https://visualstudio.microsoft.com/vs/community/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-600 underline hover:text-blue-800"
      >
        https://visualstudio.microsoft.com/vs/community/
      </a>.
    </p>


    <h2 className="text-2xl font-bold text-blue-600 mt-6">C# Install</h2>
    <p className="text-gray-700 leading-relaxed">
      Once the <b>Visual Studio Installer</b> is downloaded and installed, 
      choose the <b>.NET workload</b> and click on the <b>Modify/Install</b> button.
    </p>

    <p className="text-gray-600 italic mt-2">
      After installation, you’ll be ready to create your first C# project directly from Visual Studio!
    </p>
  </div>
);

export default GetStarted;
