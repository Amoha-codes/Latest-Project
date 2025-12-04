import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Program to Detect Tokens ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Program to Detect Tokens in a C Code
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 27 Aug, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Lexical Analysis is the first phase of a compiler, also known as scanning. It converts 
      the input program into a sequence of <strong>tokens</strong>. A C program consists of 
      various tokens including keywords, identifiers, constants, string literals, operators, 
      and symbols.
    </p>

    {/* Token Categories */}
    <h2 className="text-3xl font-bold mt-8">Token Categories</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Keywords: <code>for</code>, <code>while</code>, <code>if</code>, etc.</li>
      <li>Identifiers: variable names, function names, etc.</li>
      <li>Operators: <code>+</code>, <code>++</code>, <code>-</code>, etc.</li>
      <li>Separators: <code>,</code>, <code>;</code>, etc.</li>
    </ul>
    <p className="leading-relaxed">
      Example: For input <code>int a = b + 1c;</code>, the analyzer identifies <code>int</code> 
      as a keyword, <code>a</code> as an identifier, <code>=</code> as an operator, etc.
    </p>

    {/* Approach Section */}
    <h2 className="text-3xl font-bold mt-8">Approach</h2>
    <p className="leading-relaxed">
      The idea is to break the input C code into tokens such as keywords, identifiers, operators, 
      integers, and real numbers. Each token is checked using helper functions like 
      <code>isKeyword</code>, <code>isInteger</code>, <code>validIdentifier</code>, etc., and 
      its category is printed.
    </p>

    {/* Example C Code */}
    <h2 className="text-3xl font-bold mt-8">Example Program</h2>
    <pre className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm overflow-x-auto">
{`#include <stdbool.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

// Function to check if a character is a delimiter
bool isDelimiter(char ch) {
    return (ch==' '||ch=='+'||ch=='-'||ch=='*'||ch=='/'||
            ch==','||ch==';'||ch=='>'||ch=='<'||ch=='='||
            ch=='('||ch==')'||ch=='['||ch==']'||ch=='{'||ch=='}');
}

// Function to check if a character is an operator
bool isOperator(char ch) {
    return (ch=='+'||ch=='-'||ch=='*'||ch=='/'||ch=='>'||ch=='<'||ch=='=');
}

// Function to check if a string is a valid identifier
bool validIdentifier(char* str) {
    if(isDelimiter(str[0]) || (str[0]>='0' && str[0]<='9'))
        return false;
    return true;
}

// Function to check if a string is a keyword
bool isKeyword(char* str) {
    return (!strcmp(str,"if") || !strcmp(str,"else") || !strcmp(str,"while") ||
            !strcmp(str,"do") || !strcmp(str,"break") || !strcmp(str,"continue") ||
            !strcmp(str,"int") || !strcmp(str,"double") || !strcmp(str,"float") ||
            !strcmp(str,"return") || !strcmp(str,"char") || !strcmp(str,"case") ||
            !strcmp(str,"sizeof") || !strcmp(str,"long") || !strcmp(str,"short") ||
            !strcmp(str,"typedef") || !strcmp(str,"switch") || !strcmp(str,"unsigned") ||
            !strcmp(str,"void") || !strcmp(str,"static") || !strcmp(str,"struct") || 
            !strcmp(str,"goto"));
}

// Function to check if a string is an integer
bool isInteger(char* str) {
    int i, len = strlen(str);
    if(len==0) return false;
    for(i=0;i<len;i++)
        if((str[i]<'0' || str[i]>'9') && !(str[i]=='-' && i==0)) return false;
    return true;
}

// Function to extract a substring
char* subString(char* str,int left,int right){
    char* subStr = (char*)malloc(sizeof(char)*(right-left+2));
    for(int i=left;i<=right;i++) subStr[i-left]=str[i];
    subStr[right-left+1]='\0';
    return subStr;
}

// Parser function to detect tokens
void parse(char* str) {
    int left=0,right=0,len=strlen(str);
    while(right<=len && left<=right) {
        if(!isDelimiter(str[right])) right++;
        if(isDelimiter(str[right]) && left==right) {
            if(isOperator(str[right])) printf("'%c' IS AN OPERATOR\\n",str[right]);
            right++;
            left=right;
        } else if((isDelimiter(str[right]) && left!=right) || (right==len && left!=right)) {
            char* subStr=subString(str,left,right-1);
            if(isKeyword(subStr)) printf("'%s' IS A KEYWORD\\n",subStr);
            else if(isInteger(subStr)) printf("'%s' IS AN INTEGER\\n",subStr);
            else if(validIdentifier(subStr)) printf("'%s' IS A VALID IDENTIFIER\\n",subStr);
            else printf("'%s' IS NOT A VALID IDENTIFIER\\n",subStr);
            left=right;
        }
    }
}

// Driver code
int main() {
    char str[100] = "int a = b + 1c;";
    parse(str);
    return 0;
}`}
    </pre>

    {/* Output */}
    <h2 className="text-3xl font-bold mt-8">Sample Output</h2>
    <pre className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm">
{`'int' IS A KEYWORD
'a' IS A VALID IDENTIFIER
'=' IS AN OPERATOR
'b' IS A VALID IDENTIFIER
'+' IS AN OPERATOR
'1c' IS NOT A VALID IDENTIFIER`}
    </pre>

  </div>
);

export default Home;
