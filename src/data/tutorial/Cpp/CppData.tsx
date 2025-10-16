// src/data/tutorial/cpp/cppData.ts

import React from 'react';

// --- TYPE DEFINITIONS ---
export interface SidebarItem {
  label: string;
  href: string; // The URL for the item (used as key)
  isHeader?: boolean;
  children?: SidebarItem[];
}

export interface TopicContent {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
}

export type TutorialContentMap = Record<string, TopicContent>;

// Function to flatten the nested tutorial data (essential for Next/Prev logic)
export const flattenData = (data: SidebarItem[], result: SidebarItem[] = []): SidebarItem[] => {
  data.forEach(item => {
    if (item.href) {
      result.push(item);
    }
    if (item.children) {
      flattenData(item.children, result);
    }
  });
  return result;
};

// Main structure of the sidebar navigation (FULL STRUCTURE)
export const tutorialData: SidebarItem[] = [
    { label: "C++ HOME", href: "cpp_home.asp" },
    { label: "C++ Intro", href: "cpp_intro.asp" },
    { label: "C++ Get Started", href: "cpp_get_started.asp" },
    {
      label: "C++ Syntax",
      href: "cpp_syntax.asp",
      isHeader: true,
      children: [
        { label: "C++ Syntax", href: "cpp_syntax.asp" },
        { label: "C++ Statements", href: "cpp_statements.asp" },
      ]
    },
    {
      label: "C++ Output",
      href: "cpp_output.asp",
      isHeader: true,
      children: [
        { label: "Print Text", href: "cpp_output.asp" },
        { label: "Print Numbers", href: "cpp_output_numbers.asp" },
        { label: "New Lines", href: "cpp_new_lines.asp" },
      ]
    },
    { label: "C++ Comments", href: "cpp_comments.asp" },
    {
      label: "C++ Variables",
      href: "cpp_variables.asp",
      isHeader: true,
      children: [
        { label: "Declare Variables", href: "cpp_variables.asp" },
        { label: "Multiple Variables", href: "cpp_variables_multiple.asp" },
        { label: "Identifiers", href: "cpp_variables_identifiers.asp" },
        { label: "Constants", href: "cpp_variables_constants.asp" },
        { label: "Real-Life Examples", href: "cpp_variables_reallife.asp" },
      ]
    },
    { label: "C++ User Input", href: "cpp_user_input.asp" },
    {
      label: "C++ Data Types",
      href: "cpp_data_types.asp",
      isHeader: true,
      children: [
        { label: "Basic Data Types", href: "cpp_data_types.asp" },
        { label: "Numbers", href: "cpp_data_types_numeric.asp" },
        { label: "Boolean", href: "cpp_booleans.asp" },
        { label: "Characters", href: "cpp_data_types_char.asp" },
        { label: "Strings", href: "cpp_data_types_string.asp" },
      ]
    },
    {
      label: "C++ Operators",
      href: "cpp_operators.asp",
      isHeader: true,
      children: [
        { label: "Operators", href: "cpp_operators.asp" },
        { label: "Arithmetic", href: "cpp_operators_arithmetic.asp" },
        { label: "Assignment", href: "cpp_operators_assignment.asp" },
        { label: "Comparison", href: "cpp_operators_comparison.asp" },
        { label: "Logical", href: "cpp_operators_logical.asp" },
      ]
    },
    {
      label: "C++ Strings",
      href: "cpp_strings.asp",
      isHeader: true,
      children: [
        { label: "Strings Intro", href: "cpp_strings_string_intro.asp" },
        { label: "Concatenation", href: "cpp_strings_concatenation.asp" },
        { label: "Number and Strings", href: "cpp_strings_number_and_string_.asp" },
        { label: "String Length", href: "cpp_strings_string_length_.asp" },
        { label: "Access Strings ", href: "cpp_strings_access_strings_.asp" },
        { label: "User Input Strings ", href: "cpp_strings_user_input_strings_.asp" },
      ]
    },
    { label: "C++ Math", href: "cpp_math.asp" },
    {
      label: "C++ If..Else",
      href: "cpp_conditions.asp",
      isHeader: true,
      children: [
        { label: "If", href: "cpp_conditions.asp" },
        { label: "Else", href: "cpp_conditions_else.asp" },
        { label: "Else If", href: "cpp_conditions_elseif.asp" },
        { label: "Short hand if..else", href: "cpp_conditions_shorthand.asp" },
        { label: "Nested If", href: "cpp_conditions_nested.asp" },
      ]
    },
    {
      label: "C++ While loop",
      href: "cpp_while.asp",
      isHeader: true,
      children: [
        { label: "While", href: "cpp_while_loop.asp" },
        { label: "Do/While", href: "cpp_do_while_loop.asp" },

      ]
    },
    {
      label: "C++ For loop",
      href: "cpp_For_loop.asp",
      isHeader: true,
      children: [
        { label: "For Loop", href: "cpp_for_loop.asp" },
        { label: "Nested Loop", href: "cpp_nested_loop.asp" },
        { label: "The Foreach Loop", href: "cpp_for_each_loop.asp" },

      ]
    },

    { label: "C++ Break/Continue", href: "cpp_break_continue.asp" },
    {
      label: "C++ Arrays",
      href: "cpp_arrays.asp",
      isHeader: true,
      children: [
        { label: "Array", href: "cpp_arrays.asp" },
        { label: "Array and Loop", href: "cpp_arrays_loops.asp" },

      ]
    },


    {
      label: "C++ Functions",
      href: "cpp_functions.asp",
      isHeader: true,
      children: [
        { label: "Functions", href: "cpp_functions.asp" },
        { label: "Functions Parameters", href: "cpp_functions_parameters.asp" },
        { label: "Functions Overloading ", href: "cpp_functions_overloading.asp" },
        { label: "Scope ", href: "cpp_functions_scope.asp" },
        { label: "Recursion ", href: "cpp_functions_recursion.asp" },
        { label: "Lambda ", href: "cpp_functions_lambda.asp" },

      ]
    },
    {
      label: "C++ Classes",
      href: "cpp_oops.asp",
      isHeader: true,
      children: [
        { label: "C++ OOP", href: "cpp_oops.asp" },
        { label: "Classes / Object", href: "cpp_object.asp" },
        { label: "Class Methods", href: "cpp_class_methods.asp" },
        { label: "Constructor", href: "cpp_constructor.asp", },
        { label: "Access Specifiers", href: "cpp_access_specifiers.asp" },
        { label: "Encapsulation", href: "cpp_encapsulation.asp" },
        { label: "Inheritance", href: "cpp_inheritance.asp" },
        { label: "Polymorphism", href: "cpp_polymorphism.asp" },
      ],
    },
    {
      label: "C++ Data Structures",
      href: "cpp_data_structures.asp",
      isHeader: true,
      children: [
        { label: "C++ Data Structures & STL", href: "cpp_data_structures_stl.asp" },
        { label: "Vectors", href: "cpp_vectors.asp" },
        { label: "List ", href: "cpp_list.asp" },
        { label: "Stack", href: "cpp_stack.asp" },
        { label: "Queue", href: "cpp_queue.asp" },
        { label: "Dequeue", href: "cpp_dequeue.asp" },
        { label: "Sets", href: "cpp_sets.asp" },
        { label: "Maps", href: "cpp_maps.asp" },
        { label: "Iterators", href: "cpp_iterators.asp" },

      ]
    },

];

// --- TUTORIAL CONTENT DATA (Dark Mode Classes Applied to ALL Content Snippets) ---
export const tutorialContent: TutorialContentMap = {

  "cpp_home.asp": {
    title: "C++ Tutorial",
    subtitle: "Learn C++",
    content: (
      <>
        <h2 className="text-2xl font-extrabold text-black dark:text-white mb-4 border-b pb-2 border-purple-200 dark:border-purple-600">
          C++ Tutorial
        </h2>
        <p className="text-black dark:text-gray-200 leading-relaxed mb-4">
          <strong>C++</strong> is a popular programming language. It is widely used to create computer programs and is one of the most used languages in <strong>game development</strong>.
        </p>
        <p className="text-black dark:text-gray-200 leading-relaxed mb-4">
          C++ was developed as an extension of C, and both languages share almost the same syntax.
        </p>
        <h3 className="text-xl font-bold text-black dark:text-white mb-3">Example: Hello World</h3>
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-600 rounded whitespace-pre-wrap break-words text-black dark:text-gray-300">
#include &lt;iostream&gt;
using namespace std;

int main() {'{'}
    cout &lt;&lt; "Hello World!";
    return 0;
{'}'}
        </pre>
        </div>
      </>
    ),
  },
  "cpp_intro.asp": {
    title: "C++ Introduction",
    subtitle: "What is C++?",
    content: (
      <>
        <h2 className="text-2xl font-extrabold text-black dark:text-white mb-4 border-b pb-2 border-purple-200 dark:border-purple-600">
          What Is C++?
        </h2>
        <p className="text-black dark:text-gray-200 leading-relaxed mb-4">
          C++ is a cross-platform language that can be used to create high-performance applications.
        </p>
        <p className="text-black dark:text-gray-200 leading-relaxed mb-4">
          C++ was developed by Bjarne Stroustrup, as an extension to the <a href="#" className="text-purple-600 font-medium hover:underline">C language</a>.
        </p>
        <p className="text-black dark:text-gray-200 leading-relaxed mb-8">
          C++ gives programmers a high level of control over system resources and memory.
        </p>

        <h2 className="text-2xl font-extrabold text-black dark:text-white mb-4 border-b pb-2 border-purple-200 dark:border-purple-600">
          Why Use C++
        </h2>
        <ul className="list-disc list-inside space-y-2 text-black dark:text-gray-200 ml-4">
          <li>It is one of the world's most popular programming languages.</li>
          <li>It is used in operating systems, game development, and database systems.</li>
          <li>It is fast, powerful, and scalable.</li>
        </ul>
      </>
    ),
  },

  // --- Getting Started ---
  "cpp_get_started.asp": {
    title: "C++ Getting Started",
    subtitle: "Get Started With C++",
    content: (
      <>
        <h2 className="text-2xl font-extrabold text-black dark:text-white mb-4 border-b pb-2 border-purple-200 dark:border-purple-600">
          Get Started With C++
        </h2>

        <p className="text-black dark:text-gray-200 leading-relaxed mb-4">
          As you can try C++ without installing anything. Our Online C++ Editor runs directly in your browser, and shows both the code and the result:
        </p>

        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-600 rounded text-black dark:text-gray-300">
            <span className="text-blue-600">#include</span> <span className="text-green-600">&lt;iostream&gt;</span><br />
            <span className="text-blue-600">using namespace std;</span><br /><br />
            <span className="text-red-600">int</span> main() {'{'}<br />
            &nbsp;&nbsp;cout &lt;&lt; <span className="text-purple-600">"Hello World!"</span>;<br />
            &nbsp;&nbsp;<span className="text-red-600">return</span> 0;<br />
            {'}'}
          </p>
          <p className="mt-2 font-semibold text-black dark:text-white">Result: Hello World!</p>
        </div>

        <p className="text-black dark:text-gray-200 leading-relaxed mb-4">
          This editor will be used in the entire tutorial to demonstrate the different aspects of C++.
        </p>

        <h3 className="text-xl font-bold text-black dark:text-white mb-3">Install C++</h3>
        <p className="text-black dark:text-gray-200 leading-relaxed mb-4">
          If you want to run C++ on your own computer, you need two things:
        </p>
        <ul className="list-disc ml-6 mb-4 text-black dark:text-gray-200 leading-relaxed">
          <li>A text editor, like Notepad, to write C++ code</li>
          <li>A compiler, like GCC, to translate the C++ code into a language that the computer will understand</li>
        </ul>
        <p className="text-black dark:text-gray-200 leading-relaxed mb-4">
          There are many text editors and compilers to choose from. In the next steps, we will show you how to use an IDE that includes both.
        </p>

        <h3 className="text-xl font-bold text-black dark:text-white mb-3">Install C++ IDE</h3>
        <p className="text-black dark:text-gray-200 leading-relaxed mb-4">
          An <strong className="font-semibold">IDE (Integrated Development Environment)</strong> is used to edit AND compile the code. Popular IDEs include Code::Blocks, Eclipse, and Visual Studio. These are all free, and they can be used to both edit and debug C++ code.
        </p>
        <p className="text-black dark:text-gray-200 leading-relaxed mb-4">
          Note: Web-based IDEs can work as well, but functionality is limited.
        </p>
        <p className="text-black dark:text-gray-200 leading-relaxed mb-4">
          We will use Code::Blocks in our tutorial, which we believe is a good place to start.
        </p>
        <p className="text-black dark:text-gray-200 leading-relaxed mb-4">
          You can find the latest version of Code::Blocks at <a href="http://www.codeblocks.org/" className="text-blue-600 underline">http://www.codeblocks.org/</a>. Download the <strong className="font-semibold">mingw-setup.exe</strong> file, which will install the text editor with a compiler.
        </p>

        <h3 className="text-xl font-bold text-black dark:text-white mb-3">C++ Quickstart</h3>
        <p className="text-black dark:text-gray-200 leading-relaxed mb-4">
          Let's create our first C++ file. Open Code::Blocks and go to File &gt; New &gt; Empty File. Write the following C++ code and save the file as <code>myfirstprogram.cpp</code>:
        </p>

        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-600 rounded text-black dark:text-gray-300">
            <span className="text-blue-600">#include</span> <span className="text-green-600">&lt;iostream&gt;</span><br />
            <span className="text-blue-600">using namespace std;</span><br /><br />
            <span className="text-red-600">int</span> main() {'{'}<br />
            &nbsp;&nbsp;cout &lt;&lt; <span className="text-purple-600">"Hello World!"</span>;<br />
            &nbsp;&nbsp;<span className="text-red-600">return</span> 0;<br />
            {'}'}
          </p>
        </div>
      </>
    ),
  },


  // --- Syntax (Dark Mode Applied) ---
  "cpp_syntax.asp": {
    title: "C++ Syntax",
    subtitle: "C++ Syntax Explained",
    content: (
      <>
        <h2 className="text-2xl font-extrabold text-black dark:text-white mb-4 border-b pb-2 border-purple-200 dark:border-purple-600">
          C++ Syntax
        </h2>

        <p className="text-black dark:text-gray-200 leading-relaxed mb-4">
          Let's break up the following code to understand it better:
        </p>

        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-600 rounded text-black dark:text-gray-300">
            <span className="text-blue-600">#include</span> <span className="text-green-600">&lt;iostream&gt;</span><br />
            <span className="text-blue-600">using namespace std;</span><br /><br />
            <span className="text-red-600">int</span> main() {'{'}<br />
            &nbsp;&nbsp;cout &lt;&lt; <span className="text-purple-600">"Hello World!"</span>;<br />
            &nbsp;&nbsp;<span className="text-red-600">return</span> 0;<br />
            {'}'}
          </p>
        </div>

        <p className="text-black dark:text-gray-200 leading-relaxed mb-4">
          <strong className='font-semibold'>Line 1:</strong> <span className="font-mono">#include &lt;iostream&gt;</span> is a <strong className='font-semibold'>header file library</strong> that lets us work with input and output objects, such as <span className="font-mono">cout</span>. Header files add functionality to C++ programs.
        </p>

        <p className="text-black dark:text-gray-200 leading-relaxed mb-4">
          <strong className='font-semibold'>Line 2:</strong> <span className="font-mono">using namespace std</span> means that we can use names for objects and variables from the standard library. Don't worry if you don't understand it yet; it almost always appears in C++ programs.
        </p>
        {/* ... (rest of the content with dark mode classes) ... */}
      </>
    ),
  },


  // --- Statements (Dark Mode Applied) ---
  "cpp_statements.asp": {
    title: "C++ Syntax",
    subtitle: "C++ Statements",
    content: (
      <>
        <h2 className="text-2xl font-extrabold text-black dark:text-white mb-4 border-b pb-2 border-purple-200 dark:border-purple-600">
          C++ Statements
        </h2>

        <p className="text-black dark:text-gray-200 leading-relaxed mb-4">
          A <strong className='font-semibold'>computer program</strong> is a list of "instructions" to be "executed" by a computer. In a programming language, these programming instructions are called <strong className='font-semibold'>statements</strong>.
        </p>

        <p className="text-black dark:text-gray-200 leading-relaxed mb-4">
          The following statement "instructs" the compiler to print the text "Hello World" to the screen:
        </p>

        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-600 rounded text-black dark:text-gray-300">
            cout &lt;&lt; <span className="text-purple-600">"Hello World!"</span>; <span className="text-gray-500">// Must end with a semicolon (;)</span>
          </p>
        </div>
        {/* ... (rest of the content with dark mode classes) ... */}
      </>
    ),
  },

    // ... (All other content entries follow the same pattern) ...
    
  "cpp_output.asp": {
    title: "C++ Output",
    subtitle: "Print Text",
    content: (
      <>
        <h2 className="text-2xl font-extrabold text-black dark:text-white mb-4 border-b pb-2 border-purple-200 dark:border-purple-600">
          C++ Output (Print Text)
        </h2>

        <p className="text-black dark:text-gray-200 leading-relaxed mb-4">
          The <span className="font-mono">cout</span> object, together with the <span className="font-mono">&lt;&lt;</span> operator, is used to output values and print text. Just remember to surround the text with double quotes (<span className="font-mono">""</span>).
        </p>
        {/* ... (rest of the content with dark mode classes) ... */}
      </>
    ),
  },
  
  // ... (Include all remaining 50+ entries with dark mode classes applied to text, backgrounds, and tables) ...
};