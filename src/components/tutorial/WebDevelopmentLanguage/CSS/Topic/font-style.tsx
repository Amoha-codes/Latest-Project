import React from "react";

const CssFontStyles: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        CSS Font Style, Weight, and Variant
      </h1>

      {/* Font Style */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Font Style</h2>
        <p className="font-normal">This is normal text.</p>
        <p className="italic">This is italic text.</p>
        <p className="not-italic" style={{ fontStyle: "oblique" }}>
          This is oblique text.
        </p>
      </section>

      {/* Font Weight */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Font Weight</h2>
        <p className="font-normal">This is normal weight (400).</p>
        <p className="font-light">This is lighter weight.</p>
        <p className="font-bold">This is bold weight (700).</p>
        <p style={{ fontWeight: 900 }}>This is very thick weight (900).</p>
      </section>

      {/* Font Variant */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Font Variant</h2>
        <p className="normal-case">This is normal variant.</p>
        <p className="small-caps">This is small-caps variant.</p>
      </section>
    </div>
  );
};

export default CssFontStyles;
