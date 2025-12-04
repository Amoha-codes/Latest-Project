import React from "react";

const HtmlFilePaths: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        HTML File Paths
      </h1>

      <p className="leading-relaxed">
        A file path describes the location of a file in a web site's folder structure.
      </p>

      <h2 className="text-2xl font-semibold">File Path Examples</h2>
      <table className="table-auto border-collapse border border-gray-300 w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Path</th>
            <th className="border border-gray-300 px-4 py-2">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">&lt;img src="picture.jpg"&gt;</td>
            <td className="border border-gray-300 px-4 py-2">
              The "picture.jpg" file is located in the same folder as the current page
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">&lt;img src="images/picture.jpg"&gt;</td>
            <td className="border border-gray-300 px-4 py-2">
              The "picture.jpg" file is located in the images folder in the current folder
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">&lt;img src="/images/picture.jpg"&gt;</td>
            <td className="border border-gray-300 px-4 py-2">
              The "picture.jpg" file is located in the images folder at the root of the current website
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">&lt;img src="../picture.jpg"&gt;</td>
            <td className="border border-gray-300 px-4 py-2">
              The "picture.jpg" file is located in the folder one level up from the current folder
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold">Absolute File Paths</h2>
      <p className="leading-relaxed">
        An absolute file path is the full URL to a file:
      </p>
      <img
        src="https://www.w3schools.com/images/picture.jpg"
        alt="Mountain"
        className="border border-gray-300"
      />

      <h2 className="text-2xl font-semibold">Relative File Paths</h2>
      <p className="leading-relaxed">
        A relative file path points to a file relative to the current page.
      </p>
      <p className="leading-relaxed">
        Example - file in the images folder at the root of the website:
      </p>
      <img src="/images/picture.jpg" alt="Mountain" className="border border-gray-300" />

      <p className="leading-relaxed">
        Example - file in the images folder in the current folder:
      </p>
      <img src="images/picture.jpg" alt="Mountain" className="border border-gray-300" />

      <p className="leading-relaxed">
        Example - file in the images folder one level up from the current folder:
      </p>
      <img src="../images/picture.jpg" alt="Mountain" className="border border-gray-300" />

      <h2 className="text-2xl font-semibold">Best Practice</h2>
      <p className="leading-relaxed">
        It is best practice to use relative file paths whenever possible. Using relative paths ensures that your links work both locally (localhost) and on any domain you host your website.
      </p>
    </div>
  );
};

export default HtmlFilePaths;
