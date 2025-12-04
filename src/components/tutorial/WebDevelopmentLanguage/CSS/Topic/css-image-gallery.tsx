import React from "react";

const CSSImageGallery: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Image Gallery
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        A <b>CSS Image Gallery</b> is a collection of images displayed in an
        organized and responsive layout. Using CSS, we can create galleries that
        support hover effects, spacing, borders, and responsive behavior.
      </p>

      {/* Basic Structure */}
      <h2 className="text-2xl font-bold">HTML Structure</h2>
      <p className="leading-relaxed">
        A basic image gallery contains:
      </p>

      <ul className="list-disc ml-6 leading-relaxed">
        <li>A wrapper container (<code>gallery</code>)</li>
        <li>Gallery items (<code>gallery-item</code>)</li>
        <li>Each item includes the image and a description</li>
      </ul>

      <h3 className="text-xl font-semibold">Example Structure:</h3>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`<div class="gallery">
  <div class="gallery-item">
    <img src="img_5terre.jpg" alt="Cinque Terre">
    <div class="desc">Cinque Terre</div>
  </div>
</div>`}
      </pre>

      {/* Basic Gallery CSS */}
      <h2 className="text-2xl font-bold">CSS — Basic Gallery</h2>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`div.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

div.gallery-item {
  margin: 5px;
  border: 1px solid #ccc;
  width: 180px;
}

div.gallery-item:hover {
  border: 1px solid #777;
}

div.gallery-item img {
  width: 100%;
  height: auto;
}

div.gallery-item .desc {
  padding: 15px;
  text-align: center;
}`}
      </pre>

      {/* Full Example */}
      <h2 className="text-2xl font-bold">Full Working Example</h2>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`<div class="gallery">

  <div class="gallery-item">
    <img src="img_5terre.jpg" alt="Cinque Terre">
    <div class="desc">Cinque Terre</div>
  </div>

  <div class="gallery-item">
    <img src="img_forest.jpg" alt="Forest">
    <div class="desc">Green Forest</div>
  </div>

  <div class="gallery-item">
    <img src="img_lights.jpg" alt="Northern Lights">
    <div class="desc">Northern Lights</div>
  </div>

  <div class="gallery-item">
    <img src="img_mountains.jpg" alt="Mountains">
    <div class="desc">Mountains</div>
  </div>

</div>`}
      </pre>

      {/* Responsive Gallery */}
      <h2 className="text-2xl font-bold">CSS — Responsive Image Gallery</h2>

      <p className="leading-relaxed">
        Below is a responsive layout:
      </p>

      <ul className="list-disc ml-6 leading-relaxed">
        <li>4 images per row on screens &gt; 768px</li>
        <li>2 per row on screens &lt; 768px</li>
        <li>1 per row on screens &lt; 480px</li>
      </ul>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`div.gallery-item {
  width: 25%;
}

@media screen and (max-width: 768px) {
  div.gallery-item {
    width: 50%;
  }
}

@media screen and (max-width: 480px) {
  div.gallery-item {
    width: 100%;
  }
}`}
      </pre>

      {/* Conclusion */}
      <h2 className="text-2xl font-bold">Conclusion</h2>
      <p className="leading-relaxed">
        With only a few lines of CSS, you can build a clean, responsive, and
        flexible image gallery. This design adapts beautifully across devices
        using Flexbox and media queries.
      </p>

    </div>
  );
};

export default CSSImageGallery;
