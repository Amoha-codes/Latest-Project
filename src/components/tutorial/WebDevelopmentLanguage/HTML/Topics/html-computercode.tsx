import React from "react";

const HtmlCodeElements: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        HTML Computer Code Elements
      </h1>

      <p className="leading-relaxed">
        HTML contains several elements for defining user input and computer code.
      </p>

      <h2 className="text-2xl font-semibold">HTML &lt;kbd&gt; For Keyboard Input</h2>
      <p className="leading-relaxed">
        The <code>&lt;kbd&gt;</code> element is used to define keyboard input. The content inside is displayed in the browser's default monospace font.
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
        &lt;p&gt;Save the document by pressing &lt;kbd&gt;Ctrl + S&lt;/kbd&gt;&lt;/p&gt;
      </pre>
      <p className="leading-relaxed font-mono">
        Result: Save the document by pressing <kbd>Ctrl + S</kbd>
      </p>

      <h2 className="text-2xl font-semibold">HTML &lt;samp&gt; For Program Output</h2>
      <p className="leading-relaxed">
        The <code>&lt;samp&gt;</code> element is used to define sample output from a computer program. The content inside is displayed in the browser's default monospace font.
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
        &lt;p&gt;Message from my computer:&lt;/p&gt;
        {"\n"}&lt;p&gt;&lt;samp&gt;File not found.&lt;br/&gt;Press F1 to continue&lt;/samp&gt;&lt;/p&gt;
      </pre>
      <p className="leading-relaxed font-mono">
        Result: <br />
        Message from my computer: <br />
        <samp>File not found.<br />Press F1 to continue</samp>
      </p>

      <h2 className="text-2xl font-semibold">HTML &lt;code&gt; For Computer Code</h2>
      <p className="leading-relaxed">
        The <code>&lt;code&gt;</code> element defines a piece of computer code. The content inside is displayed in the browser's default monospace font.
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
        &lt;code&gt;
        {"\n"}x = 5;
        {"\n"}y = 6;
        {"\n"}z = x + y;
        {"\n"}&lt;/code&gt;
      </pre>
      <p className="leading-relaxed font-mono">
        Result: x = 5; y = 6; z = x + y;
      </p>

      <h3 className="text-xl font-semibold">Preserve Line-Breaks</h3>
      <p className="leading-relaxed">
        Notice that the <code>&lt;code&gt;</code> element does NOT preserve extra whitespace and line-breaks. To preserve them, wrap it inside a <code>&lt;pre&gt;</code> element.
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
        &lt;pre&gt;
        {"\n"}  &lt;code&gt;
        {"\n"}  x = 5;
        {"\n"}  y = 6;
        {"\n"}  z = x + y;
        {"\n"}  &lt;/code&gt;
        {"\n"}&lt;/pre&gt;
      </pre>
      <p className="leading-relaxed font-mono">
        Result:
        <br />
        x = 5; <br />
        y = 6; <br />
        z = x + y;
      </p>

      <h2 className="text-2xl font-semibold">HTML &lt;var&gt; For Variables</h2>
      <p className="leading-relaxed">
        The <code>&lt;var&gt;</code> element is used to define a variable in programming or a mathematical expression. The content inside is typically displayed in italic.
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
        &lt;p&gt;The area of a triangle is: 1/2 x &lt;var&gt;b&lt;/var&gt; x &lt;var&gt;h&lt;/var&gt;, 
        {"\n"}where &lt;var&gt;b&lt;/var&gt; is the base, and &lt;var&gt;h&lt;/var&gt; is the vertical height.&lt;/p&gt;
      </pre>
      <p className="leading-relaxed font-mono">
        Result: <br />
        The area of a triangle is: 1/2 x <var>b</var> x <var>h</var>, where <var>b</var> is the base, and <var>h</var> is the vertical height.
      </p>

    
    </div>
  );
};

export default HtmlCodeElements;
