import React from "react";

const CStrings: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        C - Strings
      </h1>

      <p className="leading-relaxed">
        Strings are used to store text or characters. In C, strings are arrays of <code>char</code>.
      </p>

      {/* String Example */}
      <h2 className="text-2xl font-bold">Creating a String</h2>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`char greetings[] = "Hello World!";
printf("%s", greetings);`}</pre>
      </div>

      {/* Access Character */}
      <h2 className="text-2xl font-bold">Access Characters in a String</h2>
      <p className="leading-relaxed">
        Access a single character by index:
      </p>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`char greetings[] = "Hello World!";
printf("%c", greetings[0]);  // Outputs H`}</pre>
      </div>

      {/* Modify String */}
      <h2 className="text-2xl font-bold">Modify a Character</h2>
      <p className="leading-relaxed">
        Change a character using its index (use single quotes for characters):
      </p>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`char greetings[] = "Hello World!";
greetings[0] = 'J';
printf("%s", greetings);  // Outputs Jello World!`}</pre>
      </div>

      {/* Loop Through String */}
      <h2 className="text-2xl font-bold">Loop Through a String</h2>
      <p className="leading-relaxed">
        Loop using a for loop. Use <code>sizeof</code> to automatically determine length:
      </p>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`char carName[] = "Volvo";
int length = sizeof(carName) / sizeof(carName[0]);
int i;

for (i = 0; i < length; ++i) {
    printf("%c\\n", carName[i]);
}`}</pre>
      </div>

      {/* Alternative String Creation */}
      <h2 className="text-2xl font-bold">Alternative Way to Create Strings</h2>
      <p className="leading-relaxed">
        You can also initialize a string using characters and the null terminator <code>\0</code>:
      </p>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`char greetings[] = {'H','e','l','l','o',' ','W','o','r','l','d','!','\\0'};
printf("%s", greetings);`}</pre>
      </div>

      {/* String Size */}
      <h2 className="text-2xl font-bold">String Size</h2>
      <p className="leading-relaxed">
        Both methods produce arrays of the same size:
      </p>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`char greetings[] = {'H','e','l','l','o',' ','W','o','r','l','d','!','\\0'};
char greetings2[] = "Hello World!";

printf("%zu\\n", sizeof(greetings));   // Outputs 13
printf("%zu\\n", sizeof(greetings2));  // Outputs 13`}</pre>
      </div>

      {/* Real-Life Example */}
      <h2 className="text-2xl font-bold">Real-Life Example</h2>
      <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
        <pre>{`char message[] = "Good to see you,";
char fname[] = "John";

printf("%s %s!", message, fname);  // Outputs: Good to see you, John!`}</pre>
      </div>
    </div>
  );
};

export default CStrings;
