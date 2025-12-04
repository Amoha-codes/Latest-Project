import React from "react";

const PhpIntroduction: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        PHP Introduction
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        PHP code is executed on the server. It is a powerful and widely-used
        scripting language for creating dynamic and interactive web pages.
      </p>

      {/* What You Should Know */}
      <h2 className="text-2xl font-bold">What You Should Already Know</h2>
      <p className="leading-relaxed">
        Before learning PHP, you should have a basic understanding of:
      </p>

      <ul className="list-disc list-inside space-y-1 leading-relaxed">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>

      <p className="leading-relaxed">
        If you want to study these subjects first, you can find their tutorials
        on our Home page.
      </p>

      {/* What is PHP */}
      <h2 className="text-2xl font-bold">What is PHP?</h2>

      <ul className="list-disc list-inside space-y-1 leading-relaxed">
        <li>PHP stands for <strong>"PHP: Hypertext Preprocessor"</strong></li>
        <li>PHP is a widely-used, open-source scripting language</li>
        <li>PHP scripts are executed on the server</li>
        <li>PHP is free to download and use</li>
      </ul>

      <p className="leading-relaxed">
        PHP is an amazing and popular language!
      </p>

      <ul className="list-disc list-inside space-y-1 leading-relaxed">
        <li>
          Powerful enough to run the world’s biggest blogging system (
          <strong>WordPress</strong>)
        </li>
        <li>Deep enough to run large social networks</li>
        <li>Easy enough to be a beginner’s first server-side language</li>
      </ul>

      {/* What is a PHP File */}
      <h2 className="text-2xl font-bold">What is a PHP File?</h2>

      <ul className="list-disc list-inside space-y-1 leading-relaxed">
        <li>PHP files can contain text, HTML, CSS, JavaScript, and PHP code</li>
        <li>
          PHP code is executed on the server, and the result is returned to the
          browser as plain HTML
        </li>
        <li>PHP files have the extension <strong>".php"</strong></li>
      </ul>

      {/* What Can PHP Do */}
      <h2 className="text-2xl font-bold">What Can PHP Do?</h2>

      <ul className="list-disc list-inside space-y-1 leading-relaxed">
        <li>Generate dynamic page content</li>
        <li>Create, open, read, write, delete, and close files on the server</li>
        <li>Collect form data</li>
        <li>Send and receive cookies</li>
        <li>Add, delete, and modify data in your database</li>
        <li>Control user-access</li>
        <li>Encrypt data</li>
      </ul>

      <p className="leading-relaxed">
        With PHP, you aren't limited to outputting HTML — you can output images,
        PDFs, or even XML and XHTML.
      </p>

      {/* Why PHP */}
      <h2 className="text-2xl font-bold">Why PHP?</h2>

      <ul className="list-disc list-inside space-y-1 leading-relaxed">
        <li>Runs on all major platforms (Windows, Linux, Unix, macOS, etc.)</li>
        <li>Compatible with almost all modern servers (Apache, IIS, etc.)</li>
        <li>Supports a wide range of databases</li>
        <li>
          Free to download from the official PHP resource:
          <strong> php.net</strong>
        </li>
        <li>Easy to learn and efficient on the server side</li>
      </ul>

      {/* PHP 7 Features */}
      <h2 className="text-2xl font-bold">What's New in PHP 7</h2>

      <ul className="list-disc list-inside space-y-1 leading-relaxed">
        <li>Much faster performance compared to PHP 5.6</li>
        <li>Improved error handling</li>
        <li>Supports stricter type declarations for function arguments</li>
        <li>
          Introduces new operators such as the{" "}
          <strong>spaceship operator ( &lt;=&gt; )</strong>
        </li>
      </ul>
    </div>
  );
};

export default PhpIntroduction;
