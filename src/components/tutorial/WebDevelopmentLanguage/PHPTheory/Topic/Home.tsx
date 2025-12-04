import React from "react";

const PhpHome: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        PHP Tutorial
      </h1>

      {/* What is PHP */}
      <h2 className="text-2xl font-bold">Learn PHP</h2>

      <p className="leading-relaxed">
        PHP is a server scripting language, and a powerful tool for creating dynamic and interactive web pages.
      </p>

      <p className="leading-relaxed">
        PHP is widely used, free, and an efficient alternative to competitors like Microsoft's ASP.
      </p>

      {/* Tip Section */}
      <div className="bg-purple-100 dark:bg-purple-900 p-4 rounded-md border-l-4 border-purple-500">
        <p className="text-purple-700 dark:text-purple-200 font-semibold">
          🏁 Tip: Sign in to track your progress — it's free.
        </p>
      </div>

      {/* Try It Editor Intro */}
      <h2 className="text-2xl font-bold">Easy Learning with "PHP Tryit"</h2>

      <p className="leading-relaxed">
        With our online <strong>PHP Tryit Editor</strong>, you can edit PHP code and instantly view the result in your browser.
      </p>

      {/* Example */}
      <h3 className="text-xl font-semibold">Example</h3>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`<!DOCTYPE html>
<html>
<body>

<?php
echo "My first PHP script!";
?>

</body>
</html>`}
      </pre>

      <p className="leading-relaxed">
        The editor allows you to modify the PHP code and run it to see the output immediately.
      </p>
    </div>
  );
};

export default PhpHome;
