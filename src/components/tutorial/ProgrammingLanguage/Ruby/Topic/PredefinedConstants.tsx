import React from "react";

const RubyPredefinedConstants: React.FC = () => {
  const constants = [
    { name: "TRUE", desc: "Synonym for true." },
    { name: "FALSE", desc: "Synonym for false." },
    { name: "NIL", desc: "Synonym for nil." },
    { name: "ARGF", desc: "Access to concatenation of files passed as command-line arguments or STDIN if no arguments. Synonym for $<." },
    { name: "ARGV", desc: "Array of command-line arguments passed to the program. Synonym for $*." },
    { name: "DATA", desc: "Input stream for reading lines after the __END__ directive. Not defined if __END__ isn't present." },
    { name: "ENV", desc: "Hash-like object containing the program's environment variables." },
    { name: "RUBY_PLATFORM", desc: "String indicating the platform of the Ruby interpreter." },
    { name: "RUBY_RELEASE_DATE", desc: "String indicating the release date of the Ruby interpreter." },
    { name: "RUBY_VERSION", desc: "String indicating the version of the Ruby interpreter." },
    { name: "STDERR", desc: "Standard error output stream. Default value of $stderr." },
    { name: "STDIN", desc: "Standard input stream. Default value of $stdin." },
    { name: "STDOUT", desc: "Standard output stream. Default value of $stdout." },
    { name: "TOPLEVEL_BINDING", desc: "A binding object at Ruby's top level." },
  ];

  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3  dark:text-gray-100 border-gray-300 dark:border-gray-600">
        Ruby – Predefined Constants
      </h1>
      <p className=" dark:text-gray-300">
        NOTE: TRUE, FALSE, and NIL are backward-compatible. It's preferable to use true, false, and nil.
      </p>

      <div className="overflow-x-auto">
        <table className="table-auto border border-gray-300 dark:border-gray-600 w-full text-left">
          <thead className="bg-gray-200 dark:bg-gray-800">
            <tr>
              <th className="px-4 py-2 border-b border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100">
                Constant
              </th>
              <th className="px-4 py-2 border-b border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {constants.map((c, idx) => (
              <tr
                key={idx}
                className="odd:bg-gray-50 dark:odd:bg-gray-900 even:bg-white dark:even:bg-gray-800"
              >
                <td className="px-4 py-2 font-mono text-gray-900 dark:text-gray-100">{c.name}</td>
                <td className="px-4 py-2 text-gray-900 dark:text-gray-100">{c.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RubyPredefinedConstants;
