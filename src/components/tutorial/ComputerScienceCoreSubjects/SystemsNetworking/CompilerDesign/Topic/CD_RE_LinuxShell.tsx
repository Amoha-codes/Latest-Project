import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Developing a Linux-based shell</h1>
    <p className="text-sm text-gray-500">Last Updated : 31 Jan, 2019</p>

    <section>
      <h2 className="text-2xl font-bold mt-6">What is a shell?</h2>
      <p className="leading-relaxed">
        A <strong>shell</strong> is the visible part of an operating system that allows users to interact
        with the kernel by typing commands. The shell reads user input, tokenizes it (lexical analysis),
        parses the token stream (syntax analysis), builds a command table (semantic actions) and finally
        executes the commands (executor).
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-bold mt-6">High-level architecture</h2>
      <p className="leading-relaxed">
        We implement the shell in three main components:
      </p>
      <ol className="list-decimal ml-6 leading-relaxed">
        <li><strong>Lexical analyzer (lexer)</strong> — reads input characters and produces tokens.</li>
        <li><strong>Parser</strong> — consumes tokens, detects syntax errors and builds the command table using semantic actions.</li>
        <li><strong>Executor</strong> — forks processes, sets up pipes/redirections and launches commands with <code>execvp</code>.</li>
      </ol>
    </section>

    <section>
      <h2 className="text-2xl font-bold mt-6">1. Lexical Analyzer</h2>
      <p className="leading-relaxed">
        The lexer processes the raw input character-by-character and emits tokens. In classic Unix shell projects
        you can use <code>lex</code> (or <code>flex</code>) to describe patterns and token types. Example input:
      </p>

      <div className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
        <strong>Command input:</strong> <code>ls -al | sort -r &gt; out.txt</code>
      </div>

      <p className="leading-relaxed mt-4">
        Example token stream produced by the lexer: <code>WORD OPTION PIPE WORD OPTION IO</code> (actual token values
        carry strings such as the command name, option text, or filename).
      </p>

      <h3 className="text-xl font-semibold mt-4">Token definitions (examples)</h3>
      <ul className="list-disc ml-6 leading-relaxed">
        <li><code>IO</code> — redirection tokens such as <code>&gt;</code>, <code>&gt;&gt;</code>, <code>#</code>.</li>
        <li><code>IOR</code> — combined redirection operator like <code>&gt;&amp;</code>.</li>
        <li><code>PIPE</code> — <code>|</code>.</li>
        <li><code>AMPERSAND</code> — <code>&amp;</code> for background execution.</li>
        <li><code>OPTION</code> — single-dash options like <code>-al</code> or <code>-r</code>.</li>
        <li><code>OPTION2</code> — double-dash options like <code>--help</code>.</li>
        <li><code>WORD</code> — commands, filenames and other word tokens (alphanumeric and common punctuation).
        </li>
      </ul>

      <p className="leading-relaxed">
        The lexer should handle quoting (single and double), escaping (backslash), and grouping so that strings
        like <code>"a b"</code> remain a single WORD token with value <code>a b</code>.
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-bold mt-6">2. Parser</h2>
      <p className="leading-relaxed">
        After tokenization the parser consumes the token stream to check syntax and perform semantic actions that
        populate the command table. Tools like <code>yacc</code>/<code>bison</code> are commonly used for the parser.
        Below is an example grammar (simplified) with semantic actions sketched in C-style pseudocode.
      </p>

      <pre className="bg-gray-400  p-4 rounded-md overflow-auto text-sm">
{`/* Example yacc-style grammar (simplified) */
q00: NEWLINE { return 0; }
    | cmd q1 q0
    | error;

q0: NEWLINE { return 1; }
   | PIPE q00 { clrcont(); };

q1: option q2
   | option option q2
   | arg_list q3
   | io_modifier q4
   | background q5
   | io_descr q3
   | /* empty */ { InsertNode(); clrcont(); };

q2: arg_list q3
   | io_modifier q4
   | io_descr q3
   | background q5
   | /* empty */ { InsertNode(); clrcont(); };

q3: io_modifier q4
   | io_descr q3
   | background q5
   | /* empty */ { InsertNode(); clrcont(); };

q4: file q3;

cmd: WORD { cmad.cmd = yylval.str; };

arg_list: arg | arg arg_list;
arg: WORD { insertArgNode(yylval.str); };

file: WORD { io_red(yylval.str); };

io_modifier: IO { cmad.op = yylval.str; };
io_descr: IOR { cmad.op = yylval.str; };

option: OPTION { cmad.opt = yylval.str; }
      | OPTION2 { cmad.opt2 = yylval.str; };

background: AMPERSAND { bg = '1'; };

q5: /* empty */ { InsertNode(); clrcont(); };
`}
      </pre>

      <p className="leading-relaxed mt-4">
        The parser is typically bottom-up; it reduces tokens to non-terminals and, via semantic actions, constructs
        a <em>command table</em> that represents one or more "simple commands" connected by pipes into a complex command.
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-bold mt-6">Command table (data structure)</h2>
      <p className="leading-relaxed">
        Each row of the table represents a simple command. Store for each entry:
      </p>
      <ul className="list-disc ml-6 leading-relaxed">
        <li><strong>Command</strong> (string)</li>
        <li><strong>Option</strong> / <strong>Option2</strong> (strings)
        </li>
        <li><strong>Arguments</strong> (array of strings)</li>
        <li><strong>StdIn</strong>, <strong>StdOut</strong>, <strong>StdError</strong> (filenames or pipes)</li>
        <li><strong>Background flag</strong> (boolean)
        </li>
      </ul>

      <p className="leading-relaxed">
        Example: <code>ls -al | sort -r &gt; file</code> becomes two table rows: <code>ls -al</code> and <code>sort -r</code>
        with the second row's StdOut redirected to <code>file</code>.
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-bold mt-6">3. Executor</h2>
      <p className="leading-relaxed">
        The executor iterates the command table, creating a process for each simple command, wiring pipes and redirections,
        and invoking <code>execvp()</code> in the child. Typical steps for N commands connected by pipes:
      </p>
      <ol className="list-decimal ml-6 leading-relaxed">
        <li>Create N-1 pipes.</li>
        <li>For each command i (0..N-1):</li>
        <ul className="list-disc ml-8">
          <li>fork();</li>
          <li>in child: set up <code>dup2()</code> to connect stdin/stdout to pipes or redirected files, close unused fds, then <code>execvp()</code>.</li>
          <li>in parent: close pipe ends used by parent and continue.</li>
        </ul>
        <li>If a command is requested to run in background, do not wait for it; otherwise wait for children.</li>
      </ol>

      <p className="leading-relaxed">
        The executor must honour redirections in the command table — an explicit file redirection overrides piping for that stream.
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-bold mt-6">Notes & best practices</h2>
      <ul className="list-disc ml-6 leading-relaxed">
        <li>Handle quoting and escaping carefully in the lexer so filenames and arguments with spaces are preserved.</li>
        <li>Close file descriptors you don't need (avoid fd leaks).
        </li>
        <li>Sanitize inputs before passing to <code>execvp</code> and be explicit about which arguments are passed.
        </li>
        <li>Support signal handling (e.g., SIGINT) in the shell so that children receive or ignore signals as appropriate.</li>
        <li>Test with combinations of pipes, redirections, background jobs and quoting to get robust behavior.</li>
      </ul>
    </section>

    <section>
      <h2 className="text-2xl font-bold mt-6">Further reading</h2>
      <p className="leading-relaxed">
        Look at the source of small educational shells (for example, <code>minishell</code> assignments, classic "tinysh" or
        projects on GitHub) to see working examples of lex/yacc or hand-written parsers and executors.
      </p>
    </section>

  </div>
);

export default Home;
