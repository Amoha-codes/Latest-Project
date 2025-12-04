import React from "react";

const CssGreatFontPairings: React.FC = () => {
  return (
    <div className="mt-20 space-y-10">

      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Great Font Pairings
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        Great font pairings are essential to great design. Choosing the right
        combination of fonts improves readability and gives your website a
        strong visual identity.
      </p>

      {/* Font Pairing Rules */}
      <h2 className="text-2xl font-bold">Font Pairing Rules</h2>

      <h3 className="text-xl font-semibold mt-4">1. Complement</h3>
      <p className="leading-relaxed">
        Choose fonts that complement each other. They should not be too similar
        or too different — just balanced enough to work well together.
      </p>

      <h3 className="text-xl font-semibold">2. Use Font Superfamilies</h3>
      <p className="leading-relaxed">
        A font superfamily contains multiple related fonts designed to work
        together. Example: The Lucida superfamily contains Lucida Sans, Lucida Serif,
        Lucida Typewriter Sans, Lucida Typewriter Serif, and Lucida Math.
      </p>

      <h3 className="text-xl font-semibold">3. Contrast is King</h3>
      <p className="leading-relaxed">
        Pairing serif with sans-serif is a classic example of contrast done right.
        Fonts that are too similar tend to conflict.
      </p>

      <h3 className="text-xl font-semibold">4. Choose Only One Boss</h3>
      <p className="leading-relaxed">
        One font should dominate the hierarchy — usually the heading font. You can
        emphasize it by adjusting size, weight, or color.
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`body {
  background-color: black;
  font-family: Verdana, sans-serif;
  font-size: 16px;
  color: gray;
}

h1 {
  font-family: Georgia, serif;
  font-size: 60px;
  color: white;
}`}
      </pre>

      {/* --- POPULAR FONT PAIRINGS --- */}
      <h2 className="text-2xl font-bold mt-10">
        Popular Font Pairings
      </h2>
      <p className="leading-relaxed">
        Below are some common font combinations that work across many brands and design styles.
      </p>

      {/* Georgia + Verdana */}
      <h3 className="text-xl font-semibold">Georgia + Verdana</h3>
      <p className="leading-relaxed">
        Use <b>Georgia</b> for headings and <b>Verdana</b> for text:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`h1 {
  font-family: Georgia, serif;
}

p {
  font-family: Verdana, sans-serif;
}`}
      </pre>

      {/* Helvetica + Garamond */}
      <h3 className="text-xl font-semibold">Helvetica + Garamond</h3>
      <p className="leading-relaxed">
        Use <b>Helvetica</b> for headings and <b>Garamond</b> for text:
      </p>

      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`h1 {
  font-family: Helvetica, sans-serif;
}

p {
  font-family: Garamond, serif;
}`}
      </pre>

      {/* Google Font Pairings */}
      <h2 className="text-2xl font-bold mt-8">
        Popular Google Font Pairings
      </h2>
      <p className="leading-relaxed">
        Google Fonts are free and provide over 1000 font options. Below are some
        great pairings.
      </p>

      {/* Merriweather + Open Sans */}
      <h3 className="text-xl font-semibold">Merriweather + Open Sans</h3>
      <p><b>Merriweather</b> for headings, <b>Open Sans</b> for text:</p>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`h1 {
  font-family: 'Merriweather', serif;
}

p {
  font-family: 'Open Sans', sans-serif;
}`}
      </pre>

      {/* Ubuntu + Lora */}
      <h3 className="text-xl font-semibold">Ubuntu + Lora</h3>
      <p><b>Ubuntu</b> for headings, <b>Lora</b> for text:</p>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`h1 {
  font-family: 'Ubuntu', sans-serif;
}

p {
  font-family: 'Lora', serif;
}`}
      </pre>

      {/* Abril Fatface + Poppins */}
      <h3 className="text-xl font-semibold">Abril Fatface + Poppins</h3>
      <p><b>Abril Fatface</b> for headings, <b>Poppins</b> for text:</p>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`h1 {
  font-family: 'Abril Fatface', serif;
}

p {
  font-family: 'Poppins', sans-serif;
}`}
      </pre>

      {/* Cinzel + Fauna One */}
      <h3 className="text-xl font-semibold">Cinzel + Fauna One</h3>
      <p><b>Cinzel</b> for headings, <b>Fauna One</b> for text:</p>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`h1 {
  font-family: 'Cinzel', serif;
}

p {
  font-family: 'Fauna One', serif;
}`}
      </pre>

      {/* Fjalla One + Libre Baskerville */}
      <h3 className="text-xl font-semibold">Fjalla One + Libre Baskerville</h3>
      <p><b>Fjalla One</b> for headings, <b>Libre Baskerville</b> for text:</p>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`h1 {
  font-family: 'Fjalla One', sans-serif;
}

p {
  font-family: 'Libre Baskerville', serif;
}`}
      </pre>

      {/* Space Mono + Muli */}
      <h3 className="text-xl font-semibold">Space Mono + Muli</h3>
      <p><b>Space Mono</b> for headings, <b>Muli</b> for text:</p>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`h1 {
  font-family: 'Space Mono', monospace;
}

p {
  font-family: 'Muli', sans-serif;
}`}
      </pre>

      {/* Spectral + Rubik */}
      <h3 className="text-xl font-semibold">Spectral + Rubik</h3>
      <p><b>Spectral</b> for headings, <b>Rubik</b> for text:</p>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`h1 {
  font-family: 'Spectral', serif;
}

p {
  font-family: 'Rubik', sans-serif;
}`}
      </pre>

      {/* Oswald + Noto Sans */}
      <h3 className="text-xl font-semibold">Oswald + Noto Sans</h3>
      <p><b>Oswald</b> for headings, <b>Noto Sans</b> for text:</p>
      <pre className="bg-gray-100 p-3 rounded-md font-mono text-black">
{`h1 {
  font-family: 'Oswald', sans-serif;
}

p {
  font-family: 'Noto Sans', sans-serif;
}`}
      </pre>

    </div>
  );
};

export default CssGreatFontPairings;
