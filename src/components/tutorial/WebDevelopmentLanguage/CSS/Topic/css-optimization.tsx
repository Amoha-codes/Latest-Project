import React from "react";

const CssPerformanceOptimization: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Performance Optimization
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        Optimizing CSS improves page load speed, reduces rendering time,
        and enhances the overall user experience.  
        Below are essential techniques to write efficient, fast-loading,
        and maintainable CSS.
      </p>

      {/* Section 1 */}
      <h2 className="text-2xl font-bold">1. Use Simple Selectors</h2>
      <p className="leading-relaxed">
        Complex selectors take longer for the browser to parse.
        Use short, simple, and direct selectors whenever possible.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`/* Bad */
body #navlist ul li a.button:hover {
  background-color: blue;
}

/* Good */
.button:hover {
  background-color: blue;
}`}
      </pre>

      {/* Section 2 */}
      <h2 className="text-2xl font-bold">2. Avoid the Universal Selector</h2>
      <p className="leading-relaxed">
        The universal selector (<code>*</code>) applies to every element  
        and slows down rendering. Use it sparingly.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`/* Avoid */
* {
  margin: 0;
  padding: 0;
}`}
      </pre>

      {/* Section 3 */}
      <h2 className="text-2xl font-bold">3. Avoid Inline Styles</h2>
      <p className="leading-relaxed">
        Inline styles increase HTML size and are harder to maintain.
        Use external CSS instead.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`/* Bad */
<div style="color: red; font-size: 18px;">Hello</div>

/* Good */
<style>
  .text-red { color: red; font-size: 18px; }
</style>`}
      </pre>

      {/* Section 4 */}
      <h2 className="text-2xl font-bold">4. Avoid @import</h2>
      <p className="leading-relaxed">
        <code>@import</code> delays CSS loading.  
        Use <code>&lt;link&gt;</code> for better performance.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`<link rel="stylesheet" href="style.css">`}
      </pre>

      {/* Section 5 */}
      <h2 className="text-2xl font-bold">5. Use Shorthand Properties</h2>
      <p className="leading-relaxed">
        Shorthand properties reduce CSS size and load faster.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`/* Long */
margin-top: 10px;
margin-right: 20px;
margin-bottom: 10px;
margin-left: 20px;

/* Shorthand */
margin: 10px 20px;`}
      </pre>

      {/* Section 6 */}
      <h2 className="text-2xl font-bold">6. Remove Unnecessary Animations</h2>
      <p className="leading-relaxed">
        Animations consume CPU & GPU.  
        Use only when necessary and keep them lightweight.
      </p>

      {/* Section 7 */}
      <h2 className="text-2xl font-bold">7. Animate Only Performance-Friendly Properties</h2>
      <p className="leading-relaxed">
        Avoid animating layout-triggering properties like  
        <code>width</code>, <code>height</code>, <code>top</code>, <code>left</code>.
      </p>

      <p className="leading-relaxed">
        Use transform-based animations:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`div:hover {
  transform: translateX(20px);
  opacity: 0.8;
}`}
      </pre>

      {/* Section 8 */}
      <h2 className="text-2xl font-bold">8. Combine and Minify CSS</h2>
      <p className="leading-relaxed">
        Fewer CSS files = fewer server requests.  
        Minify CSS to reduce size and improve load time.
      </p>

      <ul className="list-disc ml-6 space-y-1 leading-relaxed">
        <li>CSS Minifier</li>
        <li>PostCSS</li>
        <li>Online CSS compressors</li>
      </ul>

      {/* Section 9 */}
      <h2 className="text-2xl font-bold">9. Cache Your CSS</h2>
      <p className="leading-relaxed">
        Enable long-term caching so the browser doesn’t re-download CSS
        for every visit.
      </p>

      {/* Summary */}
      <h2 className="text-2xl font-bold">Summary</h2>

      <ul className="list-disc ml-6 space-y-2 leading-relaxed">
        <li>Use simple, efficient selectors</li>
        <li>Avoid unnecessary animations</li>
        <li>Use transform-based animations</li>
        <li>Avoid inline styles & <code>@import</code></li>
        <li>Minify & cache CSS files</li>
        <li>Keep stylesheets external and organized</li>
      </ul>

    </div>
  );
};

export default CssPerformanceOptimization;
