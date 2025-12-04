import React from "react";

const HtmlSemanticElements: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        HTML Semantic Elements
      </h1>

      <p className="leading-relaxed">
        Semantic elements are HTML elements with a meaning. They clearly describe their purpose to both the browser and the developer.
      </p>

      <h2 className="text-2xl font-semibold">What are Semantic Elements?</h2>
      <p className="leading-relaxed">
        Examples of non-semantic elements: <code>&lt;div&gt;</code> and <code>&lt;span&gt;</code> - tells nothing about its content. <br />
        Examples of semantic elements: <code>&lt;img&gt;</code>, <code>&lt;table&gt;</code>, and <code>&lt;article&gt;</code> - clearly defines its content.
      </p>

      <h2 className="text-2xl font-semibold">Semantic Elements in HTML</h2>
      <p className="leading-relaxed">
        Semantic elements define different parts of a web page:
      </p>
      <ul className="list-disc pl-5 space-y-1">
        <li>&lt;article&gt;</li>
        <li>&lt;aside&gt;</li>
        <li>&lt;details&gt;</li>
        <li>&lt;figcaption&gt;</li>
        <li>&lt;figure&gt;</li>
        <li>&lt;footer&gt;</li>
        <li>&lt;header&gt;</li>
        <li>&lt;main&gt;</li>
        <li>&lt;mark&gt;</li>
        <li>&lt;nav&gt;</li>
        <li>&lt;section&gt;</li>
        <li>&lt;summary&gt;</li>
        <li>&lt;time&gt;</li>
      </ul>

      <h2 className="text-2xl font-semibold">HTML &lt;section&gt; Element</h2>
      <p className="leading-relaxed">
        The <code>&lt;section&gt;</code> element defines a section in a document. A section is a thematic grouping of content, typically with a heading.
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
        &lt;section&gt;
        {"\n"}  &lt;h1&gt;WWF&lt;/h1&gt;
        {"\n"}  &lt;p&gt;The World Wide Fund for Nature (WWF) is an international organization working on issues regarding the conservation, research and restoration of the environment.&lt;/p&gt;
        {"\n"}&lt;/section&gt;
      </pre>

      <h2 className="text-2xl font-semibold">HTML &lt;article&gt; Element</h2>
      <p className="leading-relaxed">
        The <code>&lt;article&gt;</code> element specifies independent, self-contained content. Articles should make sense on their own.
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
        &lt;article&gt;
        {"\n"}  &lt;h2&gt;Google Chrome&lt;/h2&gt;
        {"\n"}  &lt;p&gt;Google Chrome is a web browser developed by Google, released in 2008.&lt;/p&gt;
        {"\n"}&lt;/article&gt;
      </pre>

      <h2 className="text-2xl font-semibold">HTML &lt;header&gt; Element</h2>
      <p className="leading-relaxed">
        The <code>&lt;header&gt;</code> element represents a container for introductory content or navigational links.
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
        &lt;article&gt;
        {"\n"}  &lt;header&gt;
        {"\n"}    &lt;h1&gt;What Does WWF Do?&lt;/h1&gt;
        {"\n"}    &lt;p&gt;WWF's mission:&lt;/p&gt;
        {"\n"}  &lt;/header&gt;
        {"\n"}  &lt;p&gt;WWF's mission is to stop the degradation of our planet's natural environment.&lt;/p&gt;
        {"\n"}&lt;/article&gt;
      </pre>

      <h2 className="text-2xl font-semibold">HTML &lt;footer&gt; Element</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
        &lt;footer&gt;
        {"\n"}  &lt;p&gt;Author: Hege Refsnes&lt;/p&gt;
        {"\n"}  &lt;p&gt;&lt;a href="mailto:hege@example.com"&gt;hege@example.com&lt;/a&gt;&lt;/p&gt;
        {"\n"}&lt;/footer&gt;
      </pre>

      <h2 className="text-2xl font-semibold">HTML &lt;nav&gt; Element</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
        &lt;nav&gt;
        {"\n"}  &lt;a href="/html/"&gt;HTML&lt;/a&gt; | 
        {"\n"}  &lt;a href="/css/"&gt;CSS&lt;/a&gt; | 
        {"\n"}  &lt;a href="/js/"&gt;JavaScript&lt;/a&gt; | 
        {"\n"}  &lt;a href="/jquery/"&gt;jQuery&lt;/a&gt;
        {"\n"}&lt;/nav&gt;
      </pre>

      <h2 className="text-2xl font-semibold">HTML &lt;aside&gt; Element</h2>
      <p className="leading-relaxed">
        The <code>&lt;aside&gt;</code> element defines content aside from the main content (like a sidebar).
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
        &lt;aside&gt;
        {"\n"}  &lt;h4&gt;Epcot Center&lt;/h4&gt;
        {"\n"}  &lt;p&gt;Epcot is a theme park featuring exciting attractions and international pavilions.&lt;/p&gt;
        {"\n"}&lt;/aside&gt;
      </pre>

      <h2 className="text-2xl font-semibold">HTML &lt;figure&gt; and &lt;figcaption&gt; Elements</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
        &lt;figure&gt;
        {"\n"}  &lt;img src="pic_trulli.jpg" alt="Trulli"&gt;
        {"\n"}  &lt;figcaption&gt;Fig1. - Trulli, Puglia, Italy.&lt;/figcaption&gt;
        {"\n"}&lt;/figure&gt;
      </pre>

      <h2 className="text-2xl font-semibold">Chapter Summary</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>&lt;article&gt; - Defines independent, self-contained content</li>
        <li>&lt;aside&gt; - Defines content aside from the page content</li>
        <li>&lt;details&gt; - Defines additional details the user can view or hide</li>
        <li>&lt;figcaption&gt; - Defines a caption for a &lt;figure&gt; element</li>
        <li>&lt;figure&gt; - Specifies self-contained content like illustrations or code listings</li>
        <li>&lt;footer&gt; - Defines a footer for a document or section</li>
        <li>&lt;header&gt; - Specifies a header for a document or section</li>
        <li>&lt;main&gt; - Specifies the main content of a document</li>
        <li>&lt;mark&gt; - Defines highlighted text</li>
        <li>&lt;nav&gt; - Defines navigation links</li>
        <li>&lt;section&gt; - Defines a section in a document</li>
        <li>&lt;summary&gt; - Defines a heading for a &lt;details&gt; element</li>
        <li>&lt;time&gt; - Defines a date/time</li>
      </ul>
    </div>
  );
};

export default HtmlSemanticElements;
