import React from "react";

const RubyPredefinedVariables: React.FC = () => {
  const variables = [
    { name: "$!", desc: "The last exception object raised. Accessible via => in rescue clause." },
    { name: "$@", desc: "Stack backtrace for the last exception raised." },
    { name: "$/", desc: "Input record separator (newline by default)." },
    { name: "$\\", desc: "Output record separator (nil by default)." },
    { name: "$,", desc: "Output separator for print or Array#join (nil by default)." },
    { name: "$;", desc: "Default separator for split (nil by default)." },
    { name: "$.", desc: "Number of the last line read from the current input file." },
    { name: "$<", desc: "Synonym for ARGF." },
    { name: "$>", desc: "Synonym for $defout." },
    { name: "$0", desc: "The name of the current Ruby program being executed." },
    { name: "$$", desc: "The process pid of the current Ruby program." },
    { name: "$?", desc: "Exit status of the last process terminated." },
    { name: "$:", desc: "Synonym for $LOAD_PATH." },
    { name: "$DEBUG", desc: "True if the -d or --debug command-line option is specified." },
    { name: "$defout", desc: "Destination output for print and printf ($stdout by default)." },
    { name: "$F", desc: "Variable receiving output from split when -a is specified." },
    { name: "$FILENAME", desc: "Name of the file currently being read from ARGF." },
    { name: "$LOAD_PATH", desc: "Array holding directories searched when loading files." },
    { name: "$SAFE", desc: "Security level (0-4) controlling tainted data operations." },
    { name: "$stdin", desc: "Standard input (STDIN by default)." },
    { name: "$stdout", desc: "Standard output (STDOUT by default)." },
    { name: "$stderr", desc: "Standard error (STDERR by default)." },
    { name: "$VERBOSE", desc: "True if the -v, -w, or --verbose command-line option is specified." },
    { name: "$-x", desc: "Interpreter option -x value (x=0, a, d, F, i, K, l, p, v)." },
    { name: "$-0", desc: "Alias of $/ and interpreter -0 option value." },
    { name: "$-a", desc: "True if interpreter -a option is set." },
    { name: "$-d", desc: "Alias of $DEBUG and interpreter -d option." },
    { name: "$-F", desc: "Alias of $; and interpreter -F option." },
    { name: "$-i", desc: "In-place-edit extension if -i option is used, otherwise nil." },
    { name: "$-I", desc: "Alias of $: for -I option." },
    { name: "$-l", desc: "True if -l option is set." },
    { name: "$-p", desc: "True if -p option is set." },
    { name: "$_", desc: "Last string read by gets or readline in the current scope." },
    { name: "$~", desc: "MatchData for the last regex match." },
    { name: "$1, $2, $3...", desc: "String matched in the nth group of the last pattern match." },
    { name: "$&", desc: "String matched in the last pattern match." },
    { name: "$`", desc: "String preceding the match in the last pattern match." },
    { name: "$'", desc: "String following the match in the last pattern match." },
    { name: "$+", desc: "String corresponding to the last successfully matched group." },
  ];

  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        Ruby – Predefined Variables
      </h1>
      <p className=" dark:text-gray-300">
        Ruby's predefined variables affect the behavior of the entire program. Most of their values can also be accessed via alternative methods.
      </p>

      <div className="overflow-x-auto">
        <table className="table-auto border border-gray-300 dark:border-gray-600 w-full text-left">
          <thead className="bg-gray-200 dark:bg-gray-800">
            <tr>
              <th className="px-4 py-2 border-b border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100">
                Variable
              </th>
              <th className="px-4 py-2 border-b border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {variables.map((v, idx) => (
              <tr
                key={idx}
                className="odd:bg-gray-50 dark:odd:bg-gray-900 even:bg-white dark:even:bg-gray-800"
              >
                <td className="px-4 py-2 font-mono text-gray-900 dark:text-gray-100">{v.name}</td>
                <td className="px-4 py-2 text-gray-900 dark:text-gray-100">{v.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RubyPredefinedVariables;
