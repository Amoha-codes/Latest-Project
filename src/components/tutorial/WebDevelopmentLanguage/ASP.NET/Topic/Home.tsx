import React from "react";

const AspNetHome: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      {/* Page Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        ASP.NET Tutorial
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        ASP.NET is a web application framework developed and marketed by Microsoft
        to allow programmers to build dynamic web applications. It enables
        developers to use fully featured programming languages such as C# or
        VB.NET to create powerful, scalable, and interactive websites.
      </p>

      <p className="leading-relaxed">
        This tutorial covers the foundational elements of ASP.NET that a beginner
        needs to get started.
      </p>

      {/* Audience Section */}
      <h2 className="text-2xl font-bold border-b pb-2">Audience</h2>
      <p className="leading-relaxed">
        This tutorial is designed for beginners who want to learn ASP.NET
        programming. After completing this guide, you will have a moderate level
        of understanding that will help you progress to more advanced concepts
        and application development.
      </p>

      {/* Prerequisites Section */}
      <h2 className="text-2xl font-bold border-b pb-2">Prerequisites</h2>
      <p className="leading-relaxed">
        Before starting this tutorial, you should have a basic understanding of
        the .NET programming language. Since we will develop web-based
        applications using the ASP.NET framework, familiarity with other web
        technologies—such as HTML, CSS, and AJAX—will be beneficial.
      </p>
    </div>
  );
};

export default AspNetHome;
