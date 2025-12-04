import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Operator Grammar and Precedence Parser ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Operator Grammar and Precedence Parser
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 11 May, 2023</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      A grammar that defines mathematical operators is called an <strong>operator grammar</strong>. 
      Such grammars have the restriction that no production has either an empty right-hand side 
      (<em>null productions</em>) or two adjacent non-terminals in its right-hand side.
    </p>

    {/* Example of Operator Grammar */}
    <h2 className="text-3xl font-bold mt-8">Example of Operator Grammar</h2>
    <p className="leading-relaxed">
      Valid operator grammar:
    </p>
    <p className="bg-gray-400 p-4 rounded-lg text-sm">
      E → E + E / E * E / id
    </p>

    <p className="leading-relaxed">
      Invalid operator grammar (two adjacent non-terminals):
    </p>
    <p className="bg-gray-400 p-4 rounded-lg text-sm">
      S → S A S / a<br/>
      A → b S b / b
    </p>

    <p className="leading-relaxed">
      This can be converted into a valid operator grammar:
    </p>
    <p className="bg-gray-400 p-4 rounded-lg text-sm">
      S → S b S b S / S b S / a<br/>
      A → b S b / b
    </p>

    {/* Operator Precedence Parser */}
    <h2 className="text-3xl font-bold mt-8">Operator Precedence Parser</h2>
    <p className="leading-relaxed">
      An <strong>operator precedence parser</strong> is a bottom-up parser that interprets an 
      operator grammar. It is only used for operator grammars. Ambiguous grammars are not allowed.
      Precedence relations between terminals are determined either by:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Conventional associativity and precedence of operators.</li>
      <li>Constructing an unambiguous grammar reflecting correct associativity and precedence.</li>
    </ul>

    <p className="leading-relaxed">
      This parser relies on three precedence relations: 
      <strong>⋖ (yields precedence), ≐ (same precedence), ⋗ (takes precedence)</strong>.
    </p>

    <h2 className="text-3xl font-bold mt-8">Operator Precedence Relation Table</h2>
    <p className="leading-relaxed">
      For example, for the grammar E → E + E / E * E / id, there is no relation between two ids 
      since they cannot appear side by side. One disadvantage of the table is that for n operators, 
      the table size is n × n with complexity O(n²). To reduce table size, <strong>operator function tables</strong> are used.
    </p>

    <h2 className="text-3xl font-bold mt-8">Operator Function Table</h2>
    <p className="leading-relaxed">
      Operator precedence parsers often implement relations using two functions f and g that map 
      terminals to integers:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>f(a) &lt; g(b) whenever a yields precedence to b</li>
      <li>f(a) = g(b) whenever a and b have the same precedence</li>
      <li>f(a) &gt; g(b) whenever a takes precedence over b</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Example</h2>
    <p className="leading-relaxed">
      Grammar:
    </p>
    <p className="bg-gray-400 p-4 rounded-lg text-sm">
      E → E + E / E * E / ( E ) / id
    </p>
    <p className="leading-relaxed">
      Function table can be represented as:
    </p>
    <p className="bg-gray-400 p-4 rounded-lg text-sm">
      f(id) → g(*) → f(+) → g(+) → f($)<br/>
      g(id) → f(*) → g(*) → f(+) → g(+) → f($)
    </p>

    <p className="leading-relaxed">
      Note: The function table has 2n entries, but blank entries (errors) can occur. Error detection is better in relation tables than function tables.
    </p>

    {/* Advantages and Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages of Operator Precedence Parsers</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Can be constructed by hand.</li>
      <li>Simple to implement.</li>
      <li>Efficient parsing in linear time.</li>
      <li>Improves readability of expressions.</li>
      <li>Error detection for syntax and precedence errors.</li>
      <li>Flexible and modular design.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Disadvantages</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Handling unary and binary operators like '-' is tricky.</li>
      <li>Applicable only to a small class of grammars.</li>
    </ul>

    {/* Features */}
    <h2 className="text-3xl font-bold mt-8">Features</h2>
    <p className="font-semibold">Operator Grammar:</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Operators with precedence and associativity.</li>
      <li>Defines priority and associativity for correct parsing.</li>
      <li>Easy to read and understand.</li>
      <li>Helps reduce ambiguity in expressions.</li>
    </ul>

    <p className="font-semibold mt-4">Precedence Parser:</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Efficient parsing without backtracking.</li>
      <li>Bottom-up parsing handling operator precedence.</li>
      <li>Error recovery for expressions.</li>
      <li>Flexible and extendable for new operators.</li>
    </ul>

    {/* Sample C Code */}
    <h2 className="text-3xl font-bold mt-8">Sample C Program</h2>
    <pre className="bg-gray-400 p-4 rounded-lg text-sm overflow-x-auto">
{`#include <stdlib.h>
#include <stdio.h>
#include <string.h>

void f() {
    printf("Not operator grammar");
    exit(0);
}

void main() {
    char grm[20][20], c;
    int i, n, j = 2, flag = 0;
    
    scanf("%d", &n);
    for(i = 0; i < n; i++)
        scanf("%s", grm[i]);

    for(i = 0; i < n; i++) {
        c = grm[i][2];
        while(c != '\\0') {
            if(grm[i][3]=='+' || grm[i][3]=='-' || grm[i][3]=='*' || grm[i][3]=='/')
                flag=1;
            else {
                flag=0;
                f();
            }
            if(c=='$') { flag=0; f(); }
            c = grm[i][++j];
        }
    }

    if(flag==1)
        printf("Operator grammar");
}`}
    </pre>

  </div>
);

export default Home;
