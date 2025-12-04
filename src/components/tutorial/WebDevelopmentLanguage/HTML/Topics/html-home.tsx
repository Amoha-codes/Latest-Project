import React from "react";

const HtmlHome: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">HTML Tutorial</h1>

      {/* Intro */}
      <p className="leading-relaxed">
        Learn HTML — the standard markup language used to structure and design
        Web pages. HTML forms the foundation of every website, and mastering it
        allows you to build and customize your own web pages.
      </p>

      <p className="leading-relaxed">
        HTML is beginner-friendly and easy to learn — you will enjoy creating
        web pages as you progress!
      </p>

      {/* Free Tutorial Info */}
      <h2 className="text-2xl font-bold">Start Learning HTML</h2>
      <p className="leading-relaxed">
        Study our HTML Tutorial for free — no registration required.
      </p>

      <h3 className="text-xl font-semibold">HTML Course + Certificate</h3>
      <p className="leading-relaxed">
        Upgrade your learning experience with our interactive HTML Course and
        earn a Certificate.
      </p>

      <p className="leading-relaxed">🏁 Tip: Sign in to track your progress — it's free.</p>

      {/* Learning by Examples */}
      <h2 className="text-2xl font-bold">Learning by Examples</h2>
      <p className="leading-relaxed">
        With our "Try it Yourself" editor, you can edit the HTML code and view
        the result instantly in your browser:
      </p>

      {/* Example Code */}
      <h3 className="text-xl font-semibold">Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono whitespace-pre-wrap">
{`<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
</head>
<body>

  <h1>This is a Heading</h1>
  <p>This is a paragraph.</p>

</body>
</html>`}
      </pre>

      {/* Conclusion */}
      <p className="leading-relaxed">
        Explore more examples and practice regularly to gain confidence in HTML
        and web development.
      </p>
    </div>
  );
};

export default HtmlHome;
