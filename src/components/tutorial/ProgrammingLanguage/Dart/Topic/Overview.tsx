import React from "react";

const DartOverview: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">Dart Programming - Overview</h1>

      {/* Introduction */}
      <div className="space-y-3">
        <p className="leading-relaxed">
          Dart is an object-oriented language with C-style syntax that can optionally compile into
          JavaScript. It supports a wide range of programming concepts such as interfaces, classes,
          collections, generics, and optional typing.
        </p>

        <p className="leading-relaxed">
          Dart is widely used to create single-page applications (SPAs). SPAs allow navigation between
          different views without loading a new webpage in the browser. A common example is Gmail — when
          you click on an email, the page does not reload; JavaScript simply switches the view.
        </p>

        <p className="leading-relaxed">
          Google also provides a special build of Chromium that includes the Dart VM. Using this version
          (called Dartium) allows you to run Dart code directly without compiling it to JavaScript until
          you want to test in other browsers.
        </p>
      </div>

      {/* Table */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">Dart vs JavaScript</h2>

        <table className="w-full border-collapse border rounded-lg overflow-hidden">
          <thead className=" dark:bg-gray-800">
            <tr>
              <th className="border px-4 py-2 text-left">Feature</th>
              <th className="border px-4 py-2 text-left">Dart</th>
              <th className="border px-4 py-2 text-left">JavaScript</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border px-4 py-2">Type system</td>
              <td className="border px-4 py-2">Optional, dynamic</td>
              <td className="border px-4 py-2">Weak, dynamic</td>
            </tr>

            <tr>
              <td className="border px-4 py-2">Classes</td>
              <td className="border px-4 py-2">Yes, single inheritance</td>
              <td className="border px-4 py-2">Prototypical</td>
            </tr>

            <tr>
              <td className="border px-4 py-2">Interfaces</td>
              <td className="border px-4 py-2">Yes, multiple interfaces</td>
              <td className="border px-4 py-2">No</td>
            </tr>

            <tr>
              <td className="border px-4 py-2">Concurrency</td>
              <td className="border px-4 py-2">Yes, with isolates</td>
              <td className="border px-4 py-2">Yes, with HTML5 web workers</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Conclusion */}
      <p className="leading-relaxed">
        This tutorial provides a basic-level understanding of the Dart programming language.
      </p>
    </div>
  );
};

export default DartOverview;
