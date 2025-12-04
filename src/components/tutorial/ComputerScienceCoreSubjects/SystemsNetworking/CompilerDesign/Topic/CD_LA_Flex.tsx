import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Flex Theory ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Flex (Fast Lexical Analyzer Generator)
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 30 Aug, 2025</p>

    <p className="text-lg leading-relaxed">
      Flex (Fast Lexical Analyzer Generator) is a tool for generating lexical analyzers, scanners, or lexers. 
      Written by Vern Paxson in C around 1987, Flex produces analyzers that are faster than the original Lex program. 
      It is often used along with parser generators like Berkeley Yacc or GNU Bison.
    </p>

    <p className="leading-relaxed">
      Flex creates the function <code>yylex()</code> from a <code>.l</code> file, which contains rules of lexical analysis. 
      The parser calls <code>yylex()</code> to retrieve tokens from the input stream.
    </p>

    {/* Installing Flex */}
    <h2 className="text-3xl font-bold mt-8">Installing Flex on Ubuntu</h2>
    <pre className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
{`sudo apt-get update
sudo apt-get install flex`}
    </pre>

    <p className="leading-relaxed">
      Note: Run <code>update</code> first to ensure a newer version is installed.
    </p>

    {/* Steps */}
    <h2 className="text-3xl font-bold mt-8">Steps to Use Flex</h2>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>Write an input file <code>lex.l</code> describing the lexical analyzer.</li>
      <li>Use the Lex compiler to generate <code>lex.yy.c</code> (C code).</li>
      <li>Compile <code>lex.yy.c</code> using a C compiler to create an executable (<code>a.out</code>).</li>
      <li>Run <code>a.out</code> to process input characters and produce tokens.</li>
    </ol>

    {/* Program Structure */}
    <h2 className="text-3xl font-bold mt-8">Program Structure</h2>
    <p className="leading-relaxed">
      A Flex input file has three sections:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Definition Section:</strong> Declares variables, constants, and definitions inside <code>%{" %"}</code> brackets.</li>
      <li><strong>Rules Section:</strong> Contains <code>pattern action</code> rules enclosed between <code>%% %%</code>.</li>
      <li><strong>User Code Section:</strong> Additional C code and functions.</li>
    </ul>

    {/* Rules Table */}
    <h3 className="text-2xl font-semibold mt-4">Pattern Examples</h3>
    <table className="table-auto border-collapse border border-gray-400 text-sm">
      <thead>
        <tr>
          <th className="border border-gray-400 px-4 py-2">Pattern</th>
          <th className="border border-gray-400 px-4 py-2">Matches</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border border-gray-400 px-4 py-2">[0-9]</td><td className="border border-gray-400 px-4 py-2">all digits 0–9</td></tr>
        <tr><td className="border border-gray-400 px-4 py-2">[a-z]</td><td className="border border-gray-400 px-4 py-2">all lowercase letters</td></tr>
        <tr><td className="border border-gray-400 px-4 py-2">[A-Z]</td><td className="border border-gray-400 px-4 py-2">all uppercase letters</td></tr>
        <tr><td className="border border-gray-400 px-4 py-2">a{"2,4"}</td><td className="border border-gray-400 px-4 py-2">aa, aaa, or aaaa</td></tr>
        <tr><td className="border border-gray-400 px-4 py-2">a*</td><td className="border border-gray-400 px-4 py-2">0 or more a's</td></tr>
        <tr><td className="border border-gray-400 px-4 py-2">a+</td><td className="border border-gray-400 px-4 py-2">1 or more a's</td></tr>
      </tbody>
    </table>

    {/* Example 1 */}
    <h2 className="text-3xl font-bold mt-8">Example 1: Count Capital Letters</h2>
    <pre className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm overflow-x-auto">
{`%{
int count = 0;
%}

%%
[A-Z] { printf("%s capital letter\\n", yytext); count++; }
.     { printf("%s not a capital letter\\n", yytext); }
\\n    { return 0; }
%%

int yywrap(){}
int main(){
  yylex();
  printf("Number of capital letters: %d\\n", count);
  return 0;
}`}
    </pre>

    {/* Example 2 */}
    <h2 className="text-3xl font-bold mt-8">Example 2: Count Characters & Lines</h2>
    <pre className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm overflow-x-auto">
{`%{
int no_of_lines = 0;
int no_of_chars = 0;
%}

%%
\\n      ++no_of_lines;
.       ++no_of_chars;
end     return 0;
%%

int yywrap(){}
int main(int argc, char **argv){
  yylex();
  printf("number of lines = %d, number of chars = %d\\n", no_of_lines, no_of_chars);
  return 0;
}`}
    </pre>

    {/* Advantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages of Flex</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Efficiency:</strong> Flex-generated analyzers are very fast, improving overall performance.</li>
      <li><strong>Portability:</strong> Works on many platforms.</li>
      <li><strong>Flexibility:</strong> Supports various programming languages and input formats.</li>
      <li><strong>Ease of Use:</strong> Simple to learn, especially for programmers familiar with regular expressions.</li>
    </ul>

  </div>
);

export default Home;
