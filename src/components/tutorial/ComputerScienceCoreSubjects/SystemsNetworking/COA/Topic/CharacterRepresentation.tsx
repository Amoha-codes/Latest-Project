import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Character Encoding Systems ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Character Encoding Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 24 Sep, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      In the digital world, every letter, number, and symbol you see on your screen—from the "A" 
      in "Apple" to the "@" in an email address—is ultimately represented by a series of bits, 
      the fundamental 0s and 1s that computers understand. Character encoding converts characters 
      into a format computers can store and process.
    </p>
    <p className="leading-relaxed">
      Encoding ensures accurate storage, processing, and transmission of text data. Decoding reverses 
      this process, turning binary codes back into readable text.
    </p>

    {/* Why We Need Encoding */}
    <h2 className="text-3xl font-bold mt-8">Why We Need a Character Encoding System</h2>
    <p className="leading-relaxed">
      Each letter, number, or symbol has a unique code number. When you type 'A', the computer 
      looks up its code, converts it to binary, and displays it accordingly. Decoding reverses this 
      process to render text.
    </p>

    {/* Text Encoding Types */}
    <h2 className="text-3xl font-bold mt-8">Text Encoding Types</h2>
    <p className="leading-relaxed">
      Over time, different encoding systems were developed to support multiple languages and symbols.
    </p>

    {/* ASCII */}
    <h3 className="text-2xl font-semibold mt-4">ASCII</h3>
    <p className="leading-relaxed">
      ASCII (American Standard Code for Information Interchange) was developed in the 1960s. It assigns numbers to characters, e.g., 'A' = 65.
    </p>
    <p className="leading-relaxed">
      ASCII is a 7-bit encoding representing 128 characters:
    </p>
    <ul className="list-disc ml-6 leading-relaxed space-y-1">
      <li>Non-printable system codes (0–31), e.g., 8 → backspace, 10 → newline, 13 → carriage return</li>
      <li>Printable characters (32–127), e.g., 32 → space, 40 → (, 65 → A, 97 → a</li>
      <li>Extended ASCII (128–255) adds extra symbols but is inconsistent across systems</li>
    </ul>
    <p className="leading-relaxed">
      ASCII’s limitation is that it cannot represent non-English letters or special symbols. This led to the development of extended ASCII and eventually Unicode.
    </p>

    {/* Unicode */}
    <h3 className="text-2xl font-semibold mt-4">Unicode: The Universal Character Set</h3>
    <p className="leading-relaxed">
      Unicode can encode any language, symbol, or emoji across different devices and systems. It defines code points, while Unicode Transformation Formats (UTFs) define how these code points are stored as bytes.
    </p>

    {/* UTFs */}
    <h3 className="text-2xl font-semibold mt-4">Unicode Transformation Formats (UTFs)</h3>
    <p className="leading-relaxed">
      UTFs are standardized methods for encoding Unicode characters into bytes. Common UTF encodings include UTF-16, UTF-8, and UTF-32.
    </p>

    {/* UTF-16 */}
    <h4 className="text-xl font-semibold mt-2">UTF-16</h4>
    <p className="leading-relaxed">
      UTF-16 uses 16-bit code units. Example: storing "BUS":
    </p>
    <p className="bg-gray-400 p-4 rounded-lg text-sm font-mono">
      'B' (U+0042) → 00 42<br/>
      'U' (U+0055) → 00 55<br/>
      'S' (U+0053) → 00 53
    </p>
    <p className="leading-relaxed">
      UTF-16 is widely used internally by operating systems like Windows and languages like Java and JavaScript.
    </p>

    {/* UTF-8 */}
    <h4 className="text-xl font-semibold mt-2">UTF-8</h4>
    <p className="leading-relaxed">
      UTF-8 uses 1–4 bytes per character, encoding all valid Unicode points. Lower code points use fewer bytes, and the first 128 Unicode characters match ASCII for compatibility.
    </p>
    <p className="bg-gray-400 p-4 rounded-lg text-sm font-mono">
      'A' → U+0041 → 01000001 (binary) → 41 (hex)
    </p>

    {/* UTF-32 */}
    <h4 className="text-xl font-semibold mt-2">UTF-32</h4>
    <p className="leading-relaxed">
      UTF-32 uses 32 bits per character, providing fixed-length encoding. Advantages include direct indexing of Unicode code points, though grapheme clusters or emojis may still require additional logic.
    </p>

  </div>
);

export default Home;
