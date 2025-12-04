import React from "react";

const CSSImageSprites: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Image Sprites
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        A <b>CSS image sprite</b> is a collection of multiple small images
        combined into one larger image. Using sprites helps reduce the number
        of server requests and improves page performance.
        <br />
        Instead of loading many small images, the browser loads one single sprite sheet.
      </p>

      {/* Sprite Explanation */}
      <h2 className="text-2xl font-bold">Why Use Image Sprites?</h2>
      <ul className="list-disc ml-6 leading-relaxed space-y-2">
        <li>Reduces number of HTTP requests</li>
        <li>Better performance & faster page load</li>
        <li>Easy to switch images using <code>background-position</code></li>
      </ul>

      {/* Basic Example */}
      <h2 className="text-2xl font-bold">Basic Sprite Example</h2>

      <p className="leading-relaxed">
        Here is how to display different parts of a sprite sheet using
        <code>background-position</code>:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`#home {
  width: 46px;
  height: 44px;
  background-image: url('img_navsprites.gif');
  background-position: 0 0;
}

#prev {
  width: 43px;
  height: 44px;
  background-image: url('img_navsprites.gif');
  background-position: -47px 0;
}

#next {
  width: 43px;
  height: 44px;
  background-image: url('img_navsprites.gif');
  background-position: -91px 0;
}`}
      </pre>

      <p className="leading-relaxed">
        These positions show specific areas of the sprite image on each element.
      </p>

      {/* Navigation List */}
      <h2 className="text-2xl font-bold">Using Sprites in a Navigation List</h2>

      <p className="leading-relaxed">
        Here is how to use sprites inside a navigation menu:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`#navlist {
  position: relative;
}

#navlist li {
  margin: 0;
  padding: 0;
  list-style: none;
  position: absolute;
  top: 0;
}

#navlist li, #navlist a {
  height: 44px;
  display: block;
}

#home {
  left: 0px;
  width: 46px;
  background: url('img_navsprites.gif') 0 0;
}

#prev {
  left: 60px;
  width: 43px;
  background: url('img_navsprites.gif') -47px 0;
}

#next {
  left: 120px;
  width: 43px;
  background: url('img_navsprites.gif') -91px 0;
}`}
      </pre>

      {/* Hover Effect */}
      <h2 className="text-2xl font-bold">Hover Effect with Sprite Sheet</h2>

      <p className="leading-relaxed">
        Use another sprite image that contains hover graphics:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`#home a:hover {
  background: url('img_navsprites_hover.gif') 0 -45px;
}

#prev a:hover {
  background: url('img_navsprites_hover.gif') -47px -45px;
}

#next a:hover {
  background: url('img_navsprites_hover.gif') -91px -45px;
}`}
      </pre>

      {/* Conclusion */}
      <h2 className="text-2xl font-bold">Conclusion</h2>
      <p className="leading-relaxed">
        CSS Sprites significantly improve performance by reducing multiple image
        requests into a single sprite sheet. Using
        <code> background-position</code>, you can easily show different
        portions of the image and create hover effects effortlessly.
      </p>
    </div>
  );
};

export default CSSImageSprites;
