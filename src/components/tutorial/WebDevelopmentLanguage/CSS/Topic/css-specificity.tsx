import React from "react";

const CssSpecificity: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Specificity
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        CSS specificity determines which CSS rule is applied when multiple rules
        target the same element. The rule with the highest specificity “wins.”
      </p>

      {/* Basic Example */}
      <h2 className="text-2xl font-bold">Basic Example</h2>
      <p className="leading-relaxed">
        A simple selector like <code>p</code> has low specificity. Adding a
        class increases specificity, and adding an ID increases it even more.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`p { color: red; }
.test { color: green; }
#demo { color: blue; }`}
      </pre>

      <p className="leading-relaxed">
        Inline styles override all of these:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`<p id="demo" class="test" style="color: pink;">Hello</p>`}
      </pre>

      {/* Specificity Hierarchy */}
      <h2 className="text-2xl font-bold">Specificity Hierarchy</h2>

      <ul className="list-disc ml-6 space-y-2 leading-relaxed">
        <li><b>Inline styles</b> — highest priority</li>
        <li><b>ID selectors</b> — weight: 1-0-0</li>
        <li>
          <b>Classes, attributes, pseudo-classes</b> — weight: 0-1-0
        </li>
        <li>
          <b>Elements and pseudo-elements</b> — weight: 0-0-1
        </li>
        <li>
          <b>Universal selector (*) and :where()</b> — weight: 0-0-0
        </li>
      </ul>

      {/* Specificity Example */}
      <h2 className="text-2xl font-bold">Example — Which Rule Wins?</h2>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`#demo { color: blue; }      /* 1-0-0 */
p#demo { color: orange; }    /* 1-0-1 (wins) */
.test { color: green; }      /* 0-1-0 */
p.test { color: green; }     /* 0-1-1 */
p { color: red; }            /* 0-0-1 */`}
      </pre>

      <p className="leading-relaxed">
        The selector <code>p#demo</code> wins because it has the highest weight:
        <b> 1-0-1</b>.
      </p>

      {/* More Examples */}
      <h2 className="text-2xl font-bold">More Specificity Examples</h2>

      <h3 className="text-xl font-semibold">1. Equal Specificity → Latest Rule Wins</h3>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`h1 { background: yellow; }
h1 { background: red; }   /* wins */`}
      </pre>

      <h3 className="text-xl font-semibold">2. ID Beats Attribute Selector</h3>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`#myDiv { background: yellow; }
div[id=myDiv] { background: blue; }`}
      </pre>

      <h3 className="text-xl font-semibold">3. Class Beats Element Selector</h3>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`.intro { background: yellow; }
h1 { background: red; }`}
      </pre>

      <h3 className="text-xl font-semibold">4. Universal Selector Has No Weight</h3>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`* { background: yellow; }
h1 { background: red; }   /* wins */`}
      </pre>

      <h3 className="text-xl font-semibold">
        5. Inline Styles Beat External Styles
      </h3>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black text-sm">
{`/* external */
#content h1 { background: red; }

/* in HTML */
<style>
  #content h1 { background: yellow; }
</style>`}
      </pre>

      {/* Conclusion */}
      <h2 className="text-2xl font-bold">Conclusion</h2>
      <p className="leading-relaxed">
        Specificity helps CSS determine which rule applies. Understanding the
        hierarchy ensures you write clean, non-conflicting, predictable CSS.
      </p>

    </div>
  );
};

export default CssSpecificity;
