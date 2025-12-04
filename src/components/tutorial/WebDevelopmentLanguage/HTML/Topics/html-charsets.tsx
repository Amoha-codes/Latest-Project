import React from "react";

const HtmlEncoding: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        HTML Encoding (Character Sets)
      </h1>

      <h2 className="text-2xl font-semibold">The HTML <code>&lt;meta charset&gt;</code> Attribute</h2>
      <p className="leading-relaxed">
        To display an HTML page correctly, a web browser must know which character set to use. This is specified in the <code>&lt;meta&gt;</code> tag:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
        &lt;meta charset="UTF-8"&gt;
      </pre>
      <p>UTF-8 covers almost all characters and symbols in the world!</p>

      <h2 className="text-2xl font-semibold">Unicode and Web Growth</h2>
      <p>UTF-8 is recommended by the HTML specification for modern web development.</p>

      <h2 className="text-2xl font-semibold">The ASCII Character Set</h2>
      <p>ASCII was the first character encoding standard for the web. It defines 128 characters:</p>
      <ul className="list-disc ml-6">
        <li>English letters (a-z and A-Z)</li>
        <li>Numbers (0-9)</li>
        <li>Some special characters: ! $ + - ( ) @ &lt; &gt; . # ?</li>
      </ul>

      <h2 className="text-2xl font-semibold">The ANSI Character Set</h2>
      <p>ANSI (Windows-1252) was the first Windows character set:</p>
      <ul className="list-disc ml-6">
        <li>Identical to ASCII for the first 127 characters</li>
        <li>Special characters from 128 to 159</li>
        <li>Identical to UTF-8 from 160 to 255</li>
      </ul>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
        &lt;meta charset="Windows-1252"&gt;
      </pre>

      <h2 className="text-2xl font-semibold">The ISO-8859-1 Character Set</h2>
      <p>The default character set for HTML 4:</p>
      <ul className="list-disc ml-6">
        <li>Identical to ASCII for the first 127 characters</li>
        <li>Does not use the characters from 128 to 159</li>
        <li>Identical to ANSI and UTF-8 from 160 to 255</li>
      </ul>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
        HTML 4: &lt;meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1"&gt;{"\n"}
        HTML 5: &lt;meta charset="ISO-8859-1"&gt;
      </pre>

      <h2 className="text-2xl font-semibold">The UTF-8 Character Set</h2>
      <ul className="list-disc ml-6">
        <li>Identical to ASCII for values 0–127</li>
        <li>Does not use characters 128–159</li>
        <li>Matches ANSI and ISO-8859-1 for 160–255</li>
        <li>Supports characters from 256 to over 10,000</li>
      </ul>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
        &lt;meta charset="UTF-8"&gt;
      </pre>

      <h2 className="text-2xl font-semibold">HTML UTF-8 Characters Examples</h2>
      <p>Some examples of characters from different UTF-8 ranges:</p>

      <p><strong>Basic Latin:</strong> ABCD abcd 0123 ?#$%</p>
      <p><strong>Latin Extended A:</strong> Ā Ă Ą Ć Ĉ Ċ Ē Ĕ Ė Ę</p>
      <p><strong>Latin Extended B:</strong> ƀ Ɓ Ƃ ƃ Ƅ ƅ Ɔ Ƈ ƈ Ɖ Ɗ Ƌ ƌ</p>
      <p><strong>Latin Extended C:</strong> Ⱡ ⱡ Ɫ Ᵽ Ɽ ⱥ ⱦ Ⱨ ⱨ Ⱪ</p>
      <p><strong>Latin Extended D:</strong> Ꜧ ꜧ Ꜩ ꜩ Ꜫ ꜫ Ꜭ ꜭ Ꜯ ꜯ</p>
      <p><strong>Latin Extended E:</strong> ꬰ ꬱ ꬲ ꬳ ꬴ ꬵ ꬶ ꬷ ꬸ ꬹ</p>
      <p><strong>IPA Extensions:</strong> ɖ ɜ ɣ ɘ ɫ ɛ ɱ ɷ ɞ</p>
      <p><strong>Spacing Modifiers:</strong> pʰ pʱ pʲ pʳ</p>
      <p><strong>Diacritical Marks:</strong> à á â ã è é ê ẽ ò ó ô õ</p>
      <p><strong>General Punctuation:</strong> ‰ ‱ ⁒ ‼ ⁇ ⁈ ⁉ ⁎ ⁑ ⁂</p>
      <p><strong>Super and Subscript:</strong> C⁰ Cⁱ C⁴ C⁵ C₆ C₇ C₈</p>
      <p><strong>Braille:</strong> ⠓ ⠑ ⠇ ⠇ ⠕ ⠺ ⠕ ⠗ ⠇ ⠙</p>
    </div>
  );
};

export default HtmlEncoding;
