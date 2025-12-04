import React from "react";

const AFPProtocol: React.FC = () => {
  return (
    <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-2">
        AFP Fullform
      </h1>
      <p className="text-sm text-gray-500">Last Updated : 15 Jul, 2025</p>

      {/* Intro */}
      <p className="text-lg leading-relaxed">
        <strong>AFP</strong> stands for <strong>Apple Filing Protocol</strong>. It is a Mac OS network protocol used for sharing files among servers and clients. 
        It permits users to access files that belong to external systems. AFP operates at both the Application and Session layers of the OSI model.
      </p>

      {/* Features */}
      <h2 className="text-3xl font-bold mt-8">Features</h2>
      <ul className="list-disc ml-6 mt-2 space-y-1">
        <li>Supports Unicode file names.</li>
        <li>Provides a Portable Operating System Interface (POSIX).</li>
        <li>Provides Access Control List (ACL) permissions to specify which processes and users can access objects.</li>
        <li>Offers storage for structured data using Resource Fork and unstructured data using Data Fork.</li>
        <li>Supports both TCP/IP and AppleTalk for communication and service provision.</li>
        <li>Commands like create directory, close directory, copy file, delete file, and close volume can be executed.</li>
      </ul>

      {/* Advantages */}
      <h2 className="text-3xl font-bold mt-8">Advantages</h2>
      <ul className="list-disc ml-6 mt-2 space-y-1">
        <li>Offers security features that limit user access to hazardous files using advanced file locking mechanisms.</li>
        <li>Supports named extended attributes for mapping un-interpreted files with metadata.</li>
        <li>Supports both local file access and remote server file access.</li>
        <li>Provides 100% compatibility with the Mac file system (HFS+) and is the native file-sharing protocol.</li>
        <li>Includes built-in features such as Spotlight Search, Time Machine, Mac Aliases, and Bonjour Services.</li>
      </ul>

      {/* Disadvantages */}
      <h2 className="text-3xl font-bold mt-8">Disadvantages</h2>
      <ul className="list-disc ml-6 mt-2 space-y-1">
        <li>Not compatible with storage devices formatted using the Apple File System (APFS).</li>
        <li>Sequential read and write speed is lower compared to the Server Message Block (SMB) protocol.</li>
      </ul>
    </div>
  );
};

export default AFPProtocol;
