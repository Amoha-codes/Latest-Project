import React from "react";

const CssWebsiteLayout: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* TITLE */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Website Layout
      </h1>

      {/* INTRO */}
      <p className="leading-relaxed">
        A typical website layout includes a <b>header</b>, a <b>navigation bar</b>, 
        <b>main content area</b>, and a <b>footer</b>. CSS makes it easy to organize 
        and style these sections to achieve responsive and modern designs.
      </p>

      {/* HEADER */}
      <h2 className="text-2xl font-bold">1. CSS Header</h2>
      <p className="leading-relaxed">
        The header usually contains a site logo, title, or a branding section.  
        A simple header example:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">{`header {
  background-color: #f1f1f1;
  text-align: center;
  padding: 10px;
}`}</pre>

      {/* NAVIGATION BAR */}
      <h2 className="text-2xl font-bold">2. CSS Navigation Bar</h2>
      <p className="leading-relaxed">
        A navigation bar contains links that help users move through your website.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">{`/* Style the topnav */
ul.topnav {
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  background-color: #333333;
}

/* Style links */
ul.topnav li a {
  display: block;
  color: #f1f1f1;
  padding: 14px 16px;
  text-decoration: none;
}

/* Hover effect */
ul.topnav li a:hover {
  background-color: #dddddd;
  color: black;
}`}</pre>

      {/* CONTENT LAYOUT */}
      <h2 className="text-2xl font-bold">3. CSS Layout Content</h2>
      <p className="leading-relaxed">
        Layout design changes with device size. The most common layouts include:
      </p>

      <ul className="list-disc ml-6 space-y-1 leading-relaxed">
        <li>1-column layout (mobile)</li>
        <li>2-column layout (tablets)</li>
        <li>3-column layout (desktops)</li>
      </ul>

      <p className="leading-relaxed">
        Here is a <b>3-column layout</b> that becomes a <b>1-column layout</b> under 600px width:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">{`div.flex-container {
  display: flex;
  flex-direction: row;
}

div.flex-container > div {
  margin: 10px;
}

/* Responsive layout */
@media screen and (max-width:600px) {
  div.flex-container {
    flex-direction: column;
  }
}`}</pre>

      {/* FOOTER */}
      <h2 className="text-2xl font-bold">4. CSS Footer</h2>

      <p className="leading-relaxed">Basic footer styling:</p>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">{`footer {
  background-color: #f1f1f1;
  text-align: center;
  padding: 8px;
}`}</pre>

      <p className="leading-relaxed">Fixed footer (always visible):</p>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">{`footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #f1f1f1;
  padding: 8px;
  text-align: center;
  z-index: 1000;
}`}</pre>

      {/* CONCLUSION */}
      <h2 className="text-2xl font-bold">Conclusion</h2>
      <p className="leading-relaxed">
        CSS makes it simple to structure your website into familiar components like
        headers, navigation menus, content columns, and footers. Responsive design
        is often achieved using Flexbox and media queries.
      </p>

    </div>
  );
};

export default CssWebsiteLayout;
