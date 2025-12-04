import React from "react";

const HtmlImages: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        HTML Images
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        Images can improve the design and appearance of a web page. They are added using the <code>&lt;img&gt;</code> tag.
      </p>

      {/* Basic Examples */}
      <h2 className="text-2xl font-bold">Example Images</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<img src="pic_trulli.jpg" alt="Italian Trulli">
<img src="img_girl.jpg" alt="Girl in a jacket">
<img src="img_chania.jpg" alt="Flowers in Chania">`}
      </pre>

      {/* Syntax */}
      <h2 className="text-2xl font-bold">HTML Images Syntax</h2>
      <p className="leading-relaxed">
        The <code>&lt;img&gt;</code> tag is empty and requires two attributes: <code>src</code> (image path) and <code>alt</code> (alternate text).
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<img src="url" alt="alternatetext">`}
      </pre>

      {/* Width & Height */}
      <h2 className="text-2xl font-bold">Image Size - Width and Height</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<img src="img_girl.jpg" alt="Girl in a jacket" style={{width:"500px", height:"600px"}}>
<img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600">`}
      </pre>

      {/* Images in another folder */}
      <h2 className="text-2xl font-bold">Images in Another Folder</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<img src="/images/html5.gif" alt="HTML5 Icon" style={{width:"128px", height:"128px"}}>`}
      </pre>

      {/* External Images */}
      <h2 className="text-2xl font-bold">Images on Another Server</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="W3Schools.com">`}
      </pre>

      {/* Animated Images */}
      <h2 className="text-2xl font-bold">Animated Images</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<img src="programming.gif" alt="Computer Man" style={{width:"48px", height:"48px"}}>`}
      </pre>

      {/* Image as a Link */}
      <h2 className="text-2xl font-bold">Image as a Link</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<a href="default.asp">
  <img src="smiley.gif" alt="HTML tutorial" style={{width:"42px", height:"42px"}} />
</a>`}
      </pre>

      {/* Image Floating */}
      <h2 className="text-2xl font-bold">Image Floating</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<p><img src="smiley.gif" alt="Smiley face" style={{float:"right", width:"42px", height:"42px"}}> The image will float to the right of the text.</p>
<p><img src="smiley.gif" alt="Smiley face" style={{float:"left", width:"42px", height:"42px"}}> The image will float to the left of the text.</p>`}
      </pre>

      {/* Common Image Formats */}
      <h2 className="text-2xl font-bold">Common Image Formats</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`APNG  - .apng
GIF   - .gif
ICO   - .ico, .cur
JPEG  - .jpg, .jpeg, .jfif
PNG   - .png
SVG   - .svg`}
      </pre>

      {/* Chapter Summary */}
      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-xl">
        <p className="leading-relaxed">
          ✅ Use <code>&lt;img&gt;</code> to display images <br />
          ✅ Use <code>src</code> to specify the image path <br />
          ✅ Use <code>alt</code> to provide alternative text <br />
          ✅ Use <code>width</code> and <code>height</code> attributes or CSS for size <br />
          ✅ Use <code>float</code> property to align images left or right <br />
          ✅ Avoid large images to prevent slow page loading
        </p>
      </div>
    </div>
  );
};

export default HtmlImages;
