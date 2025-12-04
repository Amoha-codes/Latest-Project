import React from "react";

const MIME: React.FC = () => {
  return (
    <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-2">
        Multipurpose Internet Mail Extension (MIME) Protocol
      </h1>
      <p className="text-sm text-gray-500">Last Updated : 15 Oct, 2025</p>

      {/* Introduction */}
      <p className="text-lg leading-relaxed">
        MIME (Multipurpose Internet Mail Extensions) is a standard that extends the format of email messages, allowing them to include more than plain text. It supports multimedia content such as images, audio, video, documents, and other types of data over email systems that traditionally only support ASCII text.
      </p>

      <p className="italic">
        Note: MIME allows emails to carry diverse content safely over protocols like SMTP, providing metadata to help the receiving client process the content correctly.
      </p>

      {/* Characteristics */}
      <h2 className="text-3xl font-bold mt-8">Characteristics of MIME</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>Text Encoding:</strong> Supports character sets beyond ASCII (e.g., UTF-8) for multilingual emails.</li>
        <li><strong>Attachments:</strong> Allows multimedia files such as images, audio, video, and documents.</li>
        <li><strong>Multipart Messages:</strong> Supports dividing messages into multiple parts (plain text, HTML, media attachments).</li>
        <li><strong>Header Fields:</strong> Introduces headers like Content-Type, Content-Disposition, and Content-Transfer-Encoding for proper content interpretation.</li>
      </ul>

      {/* MIME Structure */}
      <h2 className="text-3xl font-bold mt-8">MIME Structure</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>MIME-Version:</strong> Specifies the MIME version used (commonly 1.0).</li>
        <li><strong>Content-Type:</strong> Indicates content type, e.g., text/plain, text/html, image/jpeg, audio/mpeg.</li>
        <li><strong>Content-Transfer-Encoding:</strong> Shows encoding for safe transmission (base64, quoted-printable).</li>
        <li><strong>Content-Disposition:</strong> Determines inline display or attachment.</li>
        <li><strong>Content-ID:</strong> Unique identifier for referencing embedded objects like inline images.</li>
        <li><strong>Content-Description:</strong> Short description of content (e.g., "PDF Document").</li>
      </ul>

      {/* How MIME Works */}
      <h2 className="text-3xl font-bold mt-8">How MIME Works</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>Encoding:</strong> Converts message content into 7-bit ASCII for safe transmission.</li>
        <li><strong>Transmission:</strong> Encoded message travels through the email system using SMTP.</li>
        <li><strong>Decoding:</strong> Receiving client decodes the message back to its original format.</li>
        <li><strong>Interpretation:</strong> Email client reads MIME headers to display content and attachments correctly.</li>
      </ul>
      <p className="italic mt-2">
        Note: MIME can handle multipart messages using boundary separators to distinguish between different parts.
      </p>

      {/* Pros */}
      <h2 className="text-3xl font-bold mt-8">Advantages of MIME</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li>Supports multiple data types: text, audio, video, images, and application files.</li>
        <li>Multilingual compatibility for emails in languages like Hindi, French, Japanese, or Chinese.</li>
        <li>Rich formatting using HTML/CSS for enhanced styling.</li>
        <li>Handles long messages without corruption.</li>
        <li>Unique Content-ID for managing embedded media.</li>
      </ul>

      {/* Cons */}
      <h2 className="text-3xl font-bold mt-8">Disadvantages of MIME</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li>Inconsistent interpretation: Some recipients may not display MIME content correctly.</li>
        <li>Increased overhead due to extra headers and encoding, raising email size and transmission time.</li>
        <li>Complexity for non-technical users because of multiple media types and headers.</li>
        <li>Compatibility issues with older or limited email systems, potentially causing errors or data loss.</li>
      </ul>
    </div>
  );
};

export default MIME;
