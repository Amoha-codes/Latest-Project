import React from "react";

const HtmlColors: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">HTML - Colors</h1>

      {/* Intro */}
      <p className="leading-relaxed">
        HTML colors are specified using predefined color names, or by values such as <b>RGB</b>, <b>HEX</b>, <b>HSL</b>, <b>RGBA</b>, or <b>HSLA</b>.
      </p>

      {/* Color Names */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Color Names</h2>
        <p className="leading-relaxed">In HTML, colors can be set using predefined color names:</p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-white font-semibold">
          <div className="bg-red-500 p-3 rounded">Tomato</div>
          <div className="bg-orange-500 p-3 rounded">Orange</div>
          <div className="bg-blue-500 p-3 rounded">DodgerBlue</div>
          <div className="bg-green-500 p-3 rounded">MediumSeaGreen</div>
          <div className="bg-gray-500 p-3 rounded">Gray</div>
          <div className="bg-indigo-500 p-3 rounded">SlateBlue</div>
          <div className="bg-violet-500 p-3 rounded">Violet</div>
          <div className="bg-gray-300 text-black p-3 rounded">LightGray</div>
        </div>

        <p className="leading-relaxed">HTML supports <b>140 standard color names</b>.</p>
      </section>

      {/* Background Color */}
      <section className="space-y-3">
        <h2 className="text-2xl font-bold">Background Color</h2>
        <p className="leading-relaxed">You can set the background color for HTML elements:</p>

        <div className="space-y-2">
          <h1 className="bg-blue-500 text-white p-3 rounded w-fit">Hello World</h1>
          <p className="bg-red-500 text-white p-3 rounded">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
          </p>
        </div>

        <pre className="bg-gray-900 text-white p-4 rounded overflow-x-auto text-sm"><code>{`<h1 style="background-color:DodgerBlue;">Hello World</h1>
<p style="background-color:Tomato;">Lorem ipsum...</p>`}</code></pre>
      </section>

      {/* Text Color */}
      <section className="space-y-3">
        <h2 className="text-2xl font-bold">Text Color</h2>
        <p className="leading-relaxed">You can change the color of text using the <b>color</b> property:</p>

        <div className="space-y-1">
          <h1 className="text-red-500 font-bold text-2xl">Hello World</h1>
          <p className="text-blue-500">Lorem ipsum...</p>
          <p className="text-green-500">Ut wisi enim...</p>
        </div>

        <pre className="bg-gray-900 text-white p-4 rounded overflow-x-auto text-sm"><code>{`<h1 style="color:Tomato;">Hello World</h1>
<p style="color:DodgerBlue;">Lorem ipsum...</p>
<p style="color:MediumSeaGreen;">Ut wisi enim...</p>`}</code></pre>
      </section>

      {/* Border Color */}
      <section className="space-y-3">
        <h2 className="text-2xl font-bold">Border Color</h2>
        <p className="leading-relaxed">You can set border colors using CSS borders:</p>

        <div className="space-y-2">
          <h1 className="p-2 border-2 border-red-500 w-fit">Hello World</h1>
          <h1 className="p-2 border-2 border-blue-500 w-fit">Hello World</h1>
          <h1 className="p-2 border-2 border-purple-500 w-fit">Hello World</h1>
        </div>

        <pre className="bg-gray-900 text-white p-4 rounded overflow-x-auto text-sm"><code>{`<h1 style="border:2px solid Tomato;">Hello World</h1>
<h1 style="border:2px solid DodgerBlue;">Hello World</h1>
<h1 style="border:2px solid Violet;">Hello World</h1>`}</code></pre>
      </section>

      {/* Color Values */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Color Values</h2>
        <p className="leading-relaxed">
          Colors can also be specified using <b>RGB</b>, <b>HEX</b>, <b>HSL</b>, <b>RGBA</b>, and <b>HSLA</b> values.
        </p>

        <div className="grid md:grid-cols-3 gap-4 text-white font-semibold">
          <div className="bg-[rgb(255,99,71)] p-3 rounded">rgb(255, 99, 71)</div>
          <div className="bg-[#ff6347] p-3 rounded">#ff6347</div>
          <div className="bg-[hsl(9,100%,64%)] p-3 rounded">hsl(9, 100%, 64%)</div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 text-white font-semibold">
          <div className="bg-[rgba(255,99,71,0.5)] p-3 rounded">rgba(255, 99, 71, 0.5)</div>
          <div className="bg-[hsla(9,100%,64%,0.5)] p-3 rounded">hsla(9, 100%, 64%, 0.5)</div>
        </div>

        <pre className="bg-gray-900 text-white p-4 rounded overflow-x-auto text-sm"><code>{`<h1 style="background-color:rgb(255, 99, 71);">...</h1>
<h1 style="background-color:#ff6347;">...</h1>
<h1 style="background-color:hsl(9, 100%, 64%);">...</h1>

<h1 style="background-color:rgba(255, 99, 71, 0.5);">...</h1>
<h1 style="background-color:hsla(9, 100%, 64%, 0.5);">...</h1>`}</code></pre>
      </section>
    </div>
  );
};

export default HtmlColors;