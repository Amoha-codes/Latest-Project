import React from "react";

const HtmlEmojis: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        Using Emojis in HTML
      </h1>

      <p className="leading-relaxed">
        Emojis look like images, but they are actually characters from the UTF-8 (Unicode) character set:
      </p>

      <p className="text-3xl">😄 😍 💗</p>

      <h2 className="text-2xl font-semibold">Emoji Entity Numbers</h2>
      <table className="table-auto border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 px-2 py-1">Emoji</th>
            <th className="border border-gray-400 px-2 py-1">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 px-2 py-1">🗻</td>
            <td className="border border-gray-400 px-2 py-1">&#128507;</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-2 py-1">🗼</td>
            <td className="border border-gray-400 px-2 py-1">&#128508;</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-2 py-1">😀</td>
            <td className="border border-gray-400 px-2 py-1">&#128512;</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-2 py-1">😄</td>
            <td className="border border-gray-400 px-2 py-1">&#128516;</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-2 py-1">😍</td>
            <td className="border border-gray-400 px-2 py-1">&#128525;</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold">Emoji Examples by Category</h2>
      <p>Smileys: 😀 😂 😊 😎 😜</p>
      <p>Hands: ✌ ✊ ☝ ✋ 👌</p>
      <p>People: 👮 🧕 👦 💏 🤴</p>
      <p>Office: 📈 💻 📌 📆 📒</p>
      <p>Places: ⛺ 🌋 🗽 🗿 🏢</p>
      <p>Transport: 🚈 🚗 🚢 🚌 🚀</p>
      <p>Animals: 🐴 🐕 🐘 🐻 🐞</p>
      <p>Food: ☕ 🌭 🍞 🍩 🍣</p>
      <p>Plants: 🌴 🌳 🌼 🍁 🥑</p>
      <p>Fruits: 🍇 🍊 🍏 🥝 🥥</p>
      <p>Sports: ⚽ 🏆 🤿 🏋 ⛳</p>
      <p>Earth & Sky: 🌐 🌍 🌖 🌟 🌞</p>
      <p>Weather: ⛅ ☔ 🌈 🌂 ⛄</p>
      <p>Clothing: 👚 👕 🎩 👜 👠</p>
      <p>Audio/Video: 🎥 🎵 🎹 🔊 📺</p>
      <p>Celebration: 🎁 🎃 🎈 🎓 🎂</p>
      <p>Entertainment: 🎨 🎪 🎭 🎡 🎢</p>
      <p>Symbols: 💡 💰 🔐 🔞 🔔</p>

      <h2 className="text-2xl font-semibold">HTML charset Attribute</h2>
      <p>
        To display emojis correctly, specify the character set in your HTML page:
      </p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
        &lt;meta charset="UTF-8"&gt;
      </pre>

      <h2 className="text-2xl font-semibold">UTF-8 Characters</h2>
      <p>Many UTF-8 characters cannot be typed on a keyboard but can be displayed using entity numbers:</p>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
        &lt;p&gt;I will display A B C&lt;/p&gt;{"\n"}
        &lt;p&gt;&#65; &#66; &#67;&lt;/p&gt;
      </pre>

      <h2 className="text-2xl font-semibold">Emoji Characters Example</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
        &lt;!DOCTYPE html&gt;{"\n"}
        &lt;html&gt;{"\n"}
        &lt;meta charset="UTF-8"&gt;{"\n"}
        &lt;body&gt;{"\n\n"}
        &lt;h1&gt;My First Emoji&lt;/h1&gt;{"\n"}
        &lt;p&gt;&#128512;&lt;/p&gt;{"\n\n"}
        &lt;/body&gt;{"\n"}
        &lt;/html&gt;
      </pre>

      <h2 className="text-2xl font-semibold">Sized Emojis Example</h2>
      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
        &lt;p style="font-size:48px"&gt;&#128512; &#128516; &#128525; &#128151;&lt;/p&gt;
      </pre>
      <p>
        Emojis can be copied, displayed, and sized just like any other character in HTML.
      </p>
    </div>
  );
};

export default HtmlEmojis;
