import React from "react";

const CssFontSize: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Font Size Examples
      </h1>

      {/* Font Size in Pixels */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Font Size with Pixels (px)</h2>
        <h1 style={{ fontSize: "40px" }}>Heading 1 - 40px</h1>
        <h2 style={{ fontSize: "30px" }}>Heading 2 - 30px</h2>
        <p style={{ fontSize: "16px" }}>Paragraph - 16px</p>
      </section>

      {/* Font Size in Em */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Font Size with em</h2>
        <div style={{ fontSize: "16px" }}>
          <h1 style={{ fontSize: "2.5em" }}>Heading 1 - 2.5em</h1>
          <h2 style={{ fontSize: "1.875em" }}>Heading 2 - 1.875em</h2>
          <p style={{ fontSize: "1em" }}>Paragraph - 1em</p>
        </div>
      </section>

      {/* Font Size in Rem */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Font Size with rem</h2>
        <div style={{ fontSize: "16px" }}>
          <h1 style={{ fontSize: "2.5rem" }}>Heading 1 - 2.5rem</h1>
          <h2 style={{ fontSize: "1.875rem" }}>Heading 2 - 1.875rem</h2>
          <p style={{ fontSize: "1rem" }}>Paragraph - 1rem</p>
        </div>
      </section>

      {/* Font Size in Viewport Width */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Font Size with vw (Viewport Width)</h2>
        <h1 style={{ fontSize: "10vw" }}>Heading 1 - 10vw</h1>
        <p style={{ fontSize: "5vw" }}>Paragraph - 5vw</p>
      </section>
    </div>
  );
};

export default CssFontSize;
