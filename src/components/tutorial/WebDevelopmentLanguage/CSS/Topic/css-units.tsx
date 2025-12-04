import React from "react";

const CssUnits: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Units
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        CSS provides multiple <b>length units</b> used to size elements like width,
        margin, padding, and font-size. These units are divided into two categories:
        <b> absolute units</b> and <b>relative units</b>.
      </p>

      {/* Absolute Units */}
      <h2 className="text-2xl font-bold">CSS Absolute Units</h2>
      <p className="leading-relaxed">
        Absolute units have fixed sizes and do not scale with screen size.
        They are best suited for print layouts, not responsive websites.
      </p>

      <ul className="list-disc ml-6 space-y-1 leading-relaxed">
        <li><code>px</code> — Pixels (most commonly used)</li>
        <li><code>cm</code> — Centimeters</li>
        <li><code>mm</code> — Millimeters</li>
        <li><code>in</code> — Inches (1in = 96px)</li>
        <li><code>pt</code> — Points (1pt = 1/72in)</li>
        <li><code>pc</code> — Picas (1pc = 12pt)</li>
      </ul>

      <h3 className="text-xl font-semibold">Example — Font Sizes in Pixels</h3>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`h1 { font-size: 40px; }
h2 { font-size: 30px; }
p  { font-size: 16px; }`}
      </pre>

      {/* Relative Units */}
      <h2 className="text-2xl font-bold">CSS Relative Units</h2>

      <p className="leading-relaxed">
        Relative units scale according to other elements like the parent,
        root font-size, or viewport size. These units are ideal for responsive design.
      </p>

      <ul className="list-disc ml-6 space-y-1 leading-relaxed">
        <li><code>em</code> — Relative to parent font size</li>
        <li><code>rem</code> — Relative to root <code>&lt;html&gt;</code> font-size</li>
        <li><code>vw</code> — 1% of viewport width</li>
        <li><code>vh</code> — 1% of viewport height</li>
        <li><code>vmin</code> — 1% of smaller viewport dimension</li>
        <li><code>vmax</code> — 1% of larger viewport dimension</li>
        <li><code>%</code> — Relative to parent element</li>
        <li><code>ch</code> — Width of “0” character</li>
        <li><code>fr</code> — Fractional unit (Grid)</li>
      </ul>

      {/* EM Examples */}
      <h2 className="text-2xl font-bold">Using <code>em</code></h2>
      <p className="leading-relaxed">
        <code>em</code> is relative to the font-size of the parent element.
        If parent is <code>16px</code>, then <code>2.5em = 40px</code>.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`body { font-size: 16px; }

h1 { font-size: 2.5em; }   /* 40px */
h2 { font-size: 1.875em; } /* 30px */
p  { font-size: 1em; }     /* 16px */`}
      </pre>

      {/* REM Examples */}
      <h2 className="text-2xl font-bold">Using <code>rem</code></h2>
      <p className="leading-relaxed">
        <code>rem</code> scales relative to the <b>root</b> HTML font-size.
        It ensures consistent sizing across nested components.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`html { font-size: 16px; }

h1 { font-size: 2.5rem; }   /* 40px */
h2 { font-size: 1.875rem; } /* 30px */
p  { font-size: 1rem; }     /* 16px */`}
      </pre>

      {/* Viewport Units */}
      <h2 className="text-2xl font-bold">Viewport Units</h2>
      <p className="leading-relaxed">
        Useful for layouts that scale with browser window size.
      </p>

      <ul className="list-disc ml-6 space-y-1 leading-relaxed">
        <li><code>100vw</code> = Full viewport width</li>
        <li><code>100vh</code> = Full viewport height</li>
        <li><code>100vmin</code> = Smaller of width/height</li>
        <li><code>100vmax</code> = Larger of width/height</li>
      </ul>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`.full-screen-box {
  width: 100vw;
  height: 100vh;
  background: lightblue;
}`}
      </pre>

      {/* Conclusion */}
      <h2 className="text-2xl font-bold">Conclusion</h2>
      <p className="leading-relaxed">
        CSS units form the foundation of responsive design.  
        Absolute units give fixed control, while relative units scale beautifully
        across different screen sizes.  
        <b>Use px sparingly, prefer em/rem for text, and vw/vh for layouts.</b>
      </p>

    </div>
  );
};

export default CssUnits;
