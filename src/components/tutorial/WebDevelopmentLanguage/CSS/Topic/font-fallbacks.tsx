import React from "react";

const CssFontFallbacks: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Font Fallbacks
      </h1>

      {/* Introduction */}
      <p className="leading-relaxed">
        Font fallbacks allow you to specify multiple fonts for an element. If the first font is unavailable, the browser will try the next one. 
        Always end with a generic font family.
      </p>

      {/* Serif Fonts */}
      <h2 className="text-2xl font-bold">Serif Fonts</h2>
      <div className="space-y-4">
        <div>
          <p className="font-serif font-bold">"Times New Roman", Times, serif</p>
          <p className="font-serif">This is a Heading</p>
          <p className="font-serif">This is a paragraph.</p>
        </div>

        <div>
          <p className="font-serif font-bold">Georgia, serif</p>
          <p className="font-serif">This is a Heading</p>
          <p className="font-serif">This is a paragraph.</p>
        </div>

        <div>
          <p className="font-serif font-bold">Garamond, serif</p>
          <p className="font-serif">This is a Heading</p>
          <p className="font-serif">This is a paragraph.</p>
        </div>
      </div>

      {/* Sans-Serif Fonts */}
      <h2 className="text-2xl font-bold">Sans-Serif Fonts</h2>
      <div className="space-y-4">
        <div>
          <p className="font-sans font-bold">Arial, Helvetica, sans-serif</p>
          <p className="font-sans">This is a Heading</p>
          <p className="font-sans">This is a paragraph.</p>
        </div>

        <div>
          <p className="font-sans font-bold">Tahoma, Verdana, sans-serif</p>
          <p className="font-sans">This is a Heading</p>
          <p className="font-sans">This is a paragraph.</p>
        </div>

        <div>
          <p className="font-sans font-bold">"Trebuchet MS", Helvetica, sans-serif</p>
          <p className="font-sans">This is a Heading</p>
          <p className="font-sans">This is a paragraph.</p>
        </div>

        <div>
          <p className="font-sans font-bold">Geneva, Verdana, sans-serif</p>
          <p className="font-sans">This is a Heading</p>
          <p className="font-sans">This is a paragraph.</p>
        </div>
      </div>

      {/* Monospace Fonts */}
      <h2 className="text-2xl font-bold">Monospace Fonts</h2>
      <div>
        <p className="font-mono font-bold">"Courier New", Courier, monospace</p>
        <p className="font-mono">This is a Heading</p>
        <p className="font-mono">This is a paragraph.</p>
      </div>

      {/* Cursive Fonts */}
      <h2 className="text-2xl font-bold">Cursive Fonts</h2>
      <div>
        <p className="font-cursive font-bold">"Brush Script MT", cursive</p>
        <p className="font-cursive">This is a Heading</p>
        <p className="font-cursive">This is a paragraph.</p>
      </div>

      {/* Fantasy Fonts */}
      <h2 className="text-2xl font-bold">Fantasy Fonts</h2>
      <div>
        <p className="font-fantasy font-bold">Copperplate, Papyrus, fantasy</p>
        <p className="font-fantasy">This is a Heading</p>
        <p className="font-fantasy">This is a paragraph.</p>
      </div>
    </div>
  );
};

export default CssFontFallbacks;
