import React from "react";

const HtmlLayout: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        HTML Layout Elements and Techniques
      </h1>

      <p className="leading-relaxed">
        Websites often display content in multiple columns (like a magazine or a newspaper). HTML provides semantic elements and CSS techniques to organize layout.
      </p>

      <h2 className="text-2xl font-semibold">Example Layout</h2>
      <div className="bg-gray-100 p-4 border border-gray-300">
        <h3 className="font-semibold">Cities</h3>
        <ul className="list-disc pl-6">
          <li>London</li>
          <li>Paris</li>
          <li>Tokyo</li>
        </ul>
        <p>
          London is the capital city of England. It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants.
        </p>
        <p>
          Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its founding by the Romans, who named it Londinium.
        </p>
        <footer className="mt-4">Footer</footer>
      </div>

      <h2 className="text-2xl font-semibold">HTML Layout Elements</h2>
      <p className="leading-relaxed">
        HTML5 introduces semantic elements that define different parts of a web page:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li><code>&lt;header&gt;</code> - Defines a header for a document or a section</li>
        <li><code>&lt;nav&gt;</code> - Defines a set of navigation links</li>
        <li><code>&lt;section&gt;</code> - Defines a section in a document</li>
        <li><code>&lt;article&gt;</code> - Defines independent, self-contained content</li>
        <li><code>&lt;aside&gt;</code> - Defines content aside from the main content (sidebar)</li>
        <li><code>&lt;footer&gt;</code> - Defines a footer for a document or section</li>
        <li><code>&lt;details&gt;</code> - Defines additional details users can open/close</li>
        <li><code>&lt;summary&gt;</code> - Defines a heading for the <code>&lt;details&gt;</code> element</li>
      </ul>

      <h2 className="text-2xl font-semibold">HTML Layout Techniques</h2>
      <p className="leading-relaxed">
        There are four main techniques to create multi-column layouts:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>CSS frameworks (W3.CSS, Bootstrap)</li>
        <li>CSS float property</li>
        <li>CSS flexbox</li>
        <li>CSS grid</li>
      </ul>

      <h3 className="text-xl font-semibold">CSS Frameworks</h3>
      <p className="leading-relaxed">
        CSS frameworks allow you to create layouts quickly. W3.CSS and Bootstrap provide pre-designed templates and responsive features.
      </p>

      <h3 className="text-xl font-semibold">CSS Float Layout</h3>
      <p className="leading-relaxed">
        The <code>float</code> property can be used to position elements horizontally. Remember to use the <code>clear</code> property. Disadvantage: floats can harm layout flexibility.
      </p>

      <h3 className="text-xl font-semibold">CSS Flexbox Layout</h3>
      <p className="leading-relaxed">
        Flexbox ensures elements behave predictably on different screen sizes. Flex containers allow flexible, responsive layouts.
      </p>

      <h3 className="text-xl font-semibold">CSS Grid Layout</h3>
      <p className="leading-relaxed">
        CSS Grid provides a grid-based layout system with rows and columns. It makes it easier to design web pages without floats or positioning hacks.
      </p>

      <h2 className="text-2xl font-semibold">Chapter Summary</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>Use semantic elements to define page structure (<code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;aside&gt;</code>, <code>&lt;footer&gt;</code>)</li>
        <li>Use CSS frameworks for fast, responsive layouts</li>
        <li>The <code>float</code> property can create horizontal layouts</li>
        <li>Flexbox provides flexible, predictable layouts for different screen sizes</li>
        <li>CSS Grid allows precise control of rows and columns for complex layouts</li>
      </ul>
    </div>
  );
};

export default HtmlLayout;
