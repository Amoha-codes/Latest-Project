import React from "react";

const RubyOverview: React.FC = () => (
  <div className="mt-20 space-y-6">

    <h1 className="text-4xl font-extrabold border-b-2 pb-3">
      Ruby – Overview
    </h1>

    {/* Intro */}
    <p className="text-lg leading-relaxed">
      Ruby is a pure object-oriented programming language created in 1993 by
      Yukihiro Matsumoto of Japan, often known as <strong>Matz</strong> in the
      Ruby community. Ruby is widely praised as <em>"A Programmer's Best
      Friend"</em> due to its simplicity, elegance, and highly readable syntax.
    </p>

    <p className="text-lg leading-relaxed">
      Ruby draws inspiration from languages like Smalltalk, Perl, and Python.
      Smalltalk is a true object-oriented language, and Ruby mirrors this
      philosophy—everything in Ruby is an object. Compared to Smalltalk, Ruby
      offers a much simpler and more accessible syntax.
    </p>

    {/* Features */}
    <h2 className="text-2xl font-bold mt-10">Features of Ruby</h2>

    <ul className="list-disc ml-8 space-y-2">
      <li>Open-source and freely available (with license terms).</li>
      <li>General-purpose, interpreted programming language.</li>
      <li>Fully object-oriented—everything is an object.</li>
      <li>Server-side scripting similar to Python and Perl.</li>
      <li>Can be used for CGI scripting.</li>
      <li>Can be embedded into HTML.</li>
      <li>Clean, readable syntax ideal for beginners.</li>
      <li>Syntax influenced by C++ and Perl.</li>
      <li>Highly scalable and maintainable for large applications.</li>
      <li>Supports development of internet and intranet apps.</li>
      <li>Runs on Windows and POSIX-based systems.</li>
      <li>Supports GUI tools like Tcl/Tk, GTK, and OpenGL.</li>
      <li>
        Can easily connect to databases like DB2, MySQL, Oracle, and Sybase.
      </li>
      <li>Comes with a rich library of built-in functions.</li>
    </ul>

    {/* Tools Required */}
    <h2 className="text-2xl font-bold mt-10">Tools You Will Need</h2>

    <p className="leading-relaxed">
      To follow Ruby examples effectively, your system should meet the following
      basic requirements:
    </p>

    <ul className="list-disc ml-8 space-y-2">
      <li>Computer with Intel Core i3/i5 (minimum 2GB RAM, 4GB recommended).</li>
      <li>Any Linux distribution or Windows 95/98/2000/NT/7.</li>
      <li>Apache 1.3.19-5 Web Server.</li>
      <li>Internet Explorer 5.0 or newer.</li>
      <li>Ruby version 1.8.5 installed.</li>
    </ul>

    <p className="leading-relaxed">
      This tutorial equips you with the skills to develop GUI, networking, and
      web applications using Ruby, along with guidance on embedding and
      extending Ruby programs.
    </p>
  </div>
);

export default RubyOverview;
