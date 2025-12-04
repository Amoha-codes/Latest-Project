import React from "react";

const CssIcons: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Icons
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        Icons can be added to a webpage using icon libraries such as 
        <b> Font Awesome</b>, <b>Bootstrap Icons</b>, and 
        <b> Google Material Icons</b>. These icons are scalable vector 
        graphics that can be styled using CSS (size, color, shadows, etc.).
      </p>

      {/* Section */}
      <h2 className="text-2xl font-bold">How To Add Icons</h2>
      <p className="leading-relaxed">
        The simplest way to add icons is by using an external icon library and 
        applying the icon class to an inline HTML element like 
        <code>&lt;i&gt;</code> or <code>&lt;span&gt;</code>.
      </p>

      {/* Font Awesome */}
      <h2 className="text-2xl font-bold">Font Awesome Icons</h2>
      <p className="leading-relaxed">
        To use Font Awesome, sign in at{" "}
        <a href="https://fontawesome.com" className="text-blue-600 underline">
          fontawesome.com
        </a>{" "}
        to get your script code. Add it inside the{" "}
        <code>&lt;head&gt;</code> tag of your HTML page.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`<script src="https://kit.fontawesome.com/yourcode.js" crossorigin="anonymous"></script>`}
      </pre>

      <p className="leading-relaxed">Example:</p>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`<i class="fas fa-cloud"></i>
<i class="fas fa-heart"></i>
<i class="fas fa-car"></i>
<i class="fas fa-file"></i>
<i class="fas fa-bars"></i>`}
      </pre>

      {/* Bootstrap Icons */}
      <h2 className="text-2xl font-bold">Bootstrap Icons</h2>
      <p className="leading-relaxed">
        To use Bootstrap glyphicons, include the Bootstrap stylesheet in your{" "}
        <code>&lt;head&gt;</code>:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`<link rel="stylesheet" 
href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">`}
      </pre>

      <p className="leading-relaxed">Example:</p>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`<i class="glyphicon glyphicon-cloud"></i>
<i class="glyphicon glyphicon-remove"></i>
<i class="glyphicon glyphicon-user"></i>
<i class="glyphicon glyphicon-envelope"></i>
<i class="glyphicon glyphicon-thumbs-up"></i>`}
      </pre>

      {/* Google Icons */}
      <h2 className="text-2xl font-bold">Google Material Icons</h2>
      <p className="leading-relaxed">
        Google Material Icons can be added by including the following stylesheet:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`<link rel="stylesheet" 
href="https://fonts.googleapis.com/icon?family=Material+Icons">`}
      </pre>

      <p className="leading-relaxed">Example:</p>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`<i class="material-icons">cloud</i>
<i class="material-icons">favorite</i>
<i class="material-icons">attachment</i>
<i class="material-icons">computer</i>
<i class="material-icons">traffic</i>`}
      </pre>

      {/* Conclusion */}
      <h2 className="text-2xl font-bold">Conclusion</h2>
      <p className="leading-relaxed">
        Using icon libraries makes it easy to include high-quality, scalable 
        icons in your design. You can style these icons with CSS to match your 
        theme and create more visually appealing interfaces.
      </p>

    </div>
  );
};

export default CssIcons;
