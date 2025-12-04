import React from "react";

const HtmlResponsive: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        HTML Responsive Web Design
      </h1>

      <p className="leading-relaxed">
        Responsive web design is about creating web pages that look good on all devices! A responsive web design will automatically adjust for different screen sizes and viewports.
      </p>

      <h2 className="text-2xl font-semibold">What is Responsive Web Design?</h2>
      <p className="leading-relaxed">
        Responsive Web Design uses HTML and CSS to automatically resize, hide, shrink, or enlarge a website to make it look good on desktops, tablets, and phones.
      </p>

      <h2 className="text-2xl font-semibold">Setting The Viewport</h2>
      <p className="leading-relaxed">
        To create a responsive website, add this meta tag in your <code>&lt;head&gt;</code>:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
        &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
      </pre>

      <h2 className="text-2xl font-semibold">Responsive Images</h2>
      <p className="leading-relaxed">
        Images can scale to fit the browser window using CSS <code>width</code> or <code>max-width</code>.
      </p>

      <h3 className="text-xl font-semibold">Using width: 100%</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
        &lt;img src="img_girl.jpg" style="width:100%;"&gt;
      </pre>

      <h3 className="text-xl font-semibold">Using max-width: 100%</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
        &lt;img src="img_girl.jpg" style="max-width:100%;height:auto;"&gt;
      </pre>

      <h3 className="text-xl font-semibold">Show Different Images Depending on Browser Width</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
        &lt;picture&gt;
        {"\n"}  &lt;source srcset="img_smallflower.jpg" media="(max-width: 600px)"&gt;
        {"\n"}  &lt;source srcset="img_flowers.jpg" media="(max-width: 1500px)"&gt;
        {"\n"}  &lt;source srcset="flowers.jpg"&gt;
        {"\n"}  &lt;img src="img_smallflower.jpg" alt="Flowers"&gt;
        {"\n"}&lt;/picture&gt;
      </pre>

      <h3 className="text-xl font-semibold">Responsive Text Size</h3>
      <p className="leading-relaxed">
        Use <code>vw</code> (viewport width) units to scale text according to browser width:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
        &lt;h1 style="font-size:10vw"&gt;Hello World&lt;/h1&gt;
      </pre>

      <h2 className="text-2xl font-semibold">Media Queries</h2>
      <p className="leading-relaxed">
        Media queries allow you to apply different CSS styles depending on the screen size. Example: three columns stack vertically on small screens.
      </p>
 
      <h2 className="text-2xl font-semibold">Responsive Web Design - Frameworks</h2>
      <p className="leading-relaxed">
        Popular CSS frameworks like W3.CSS and Bootstrap offer responsive design by default.
      </p>

      <h3 className="text-xl font-semibold">W3.CSS Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono overflow-x-auto">
        &lt;!DOCTYPE html&gt;
        {"\n"}&lt;html&gt;
        {"\n"}&lt;head&gt;
        {"\n"}&lt;title&gt;W3.CSS&lt;/title&gt;
        {"\n"}&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
        {"\n"}&lt;link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"&gt;
        {"\n"}&lt;/head&gt;
        {"\n"}&lt;body&gt;
        {"\n"}&lt;div class="w3-container w3-green"&gt;
        {"\n"}  &lt;h1&gt;W3Schools Demo&lt;/h1&gt;
        {"\n"}  &lt;p&gt;Resize this responsive page!&lt;/p&gt;
        {"\n"}&lt;/div&gt;
        {"\n"}&lt;div class="w3-row-padding"&gt;
        {"\n"}  &lt;div class="w3-third"&gt;&lt;h2&gt;London&lt;/h2&gt;&lt;p&gt;London is the capital city of England.&lt;/p&gt;&lt;/div&gt;
        {"\n"}  &lt;div class="w3-third"&gt;&lt;h2&gt;Paris&lt;/h2&gt;&lt;p&gt;Paris is the capital of France.&lt;/p&gt;&lt;/div&gt;
        {"\n"}  &lt;div class="w3-third"&gt;&lt;h2&gt;Tokyo&lt;/h2&gt;&lt;p&gt;Tokyo is the capital of Japan.&lt;/p&gt;&lt;/div&gt;
        {"\n"}&lt;/div&gt;
        {"\n"}&lt;/body&gt;
        {"\n"}&lt;/html&gt;
      </pre>

      <h3 className="text-xl font-semibold">Bootstrap Example</h3>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono overflow-x-auto">
        &lt;!DOCTYPE html&gt;
        {"\n"}&lt;html lang="en"&gt;
        {"\n"}&lt;head&gt;
        {"\n"}&lt;title&gt;Bootstrap 5 Example&lt;/title&gt;
        {"\n"}&lt;meta charset="utf-8"&gt;
        {"\n"}&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
        {"\n"}&lt;link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"&gt;
        {"\n"}&lt;script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"&gt;&lt;/script&gt;
        {"\n"}&lt;/head&gt;
        {"\n"}&lt;body&gt;
        {"\n"}&lt;div class="container-fluid p-5 bg-primary text-white text-center"&gt;
        {"\n"}  &lt;h1&gt;My First Bootstrap Page&lt;/h1&gt;
        {"\n"}  &lt;p&gt;Resize this responsive page to see the effect!&lt;/p&gt;
        {"\n"}&lt;/div&gt;
        {"\n"}&lt;div class="container mt-5"&gt;
        {"\n"}  &lt;div class="row"&gt;
        {"\n"}    &lt;div class="col-sm-4"&gt;&lt;h3&gt;Column 1&lt;/h3&gt;&lt;p&gt;Lorem ipsum...&lt;/p&gt;&lt;/div&gt;
        {"\n"}    &lt;div class="col-sm-4"&gt;&lt;h3&gt;Column 2&lt;/h3&gt;&lt;p&gt;Lorem ipsum...&lt;/p&gt;&lt;/div&gt;
        {"\n"}    &lt;div class="col-sm-4"&gt;&lt;h3&gt;Column 3&lt;/h3&gt;&lt;p&gt;Lorem ipsum...&lt;/p&gt;&lt;/div&gt;
        {"\n"}  &lt;/div&gt;
        {"\n"}&lt;/div&gt;
        {"\n"}&lt;/body&gt;
        {"\n"}&lt;/html&gt;
      </pre>
    </div>
  );
};

export default HtmlResponsive;
