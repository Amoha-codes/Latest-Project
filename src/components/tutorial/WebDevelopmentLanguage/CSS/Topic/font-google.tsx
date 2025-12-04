import React from "react";

// Add this in your public/index.html <head> or dynamically load with Helmet:
// <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide|Sofia|Trirong&effect=fire|neon|outline|emboss|shadow-multiple">

const CssGoogleFonts: React.FC = () => {
  return (
    <div className="mt-20 space-y-8">
      {/* Section Title */}
      <h1 className="text-4xl font-bold border-b-2 pb-3">Google Fonts Examples</h1>

      {/* Single Google Font */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Sofia Font</h2>
        <p style={{ fontFamily: '"Sofia", sans-serif', fontSize: "30px" }}>
          Lorem ipsum dolor sit amet. 123456790
        </p>
      </section>

      {/* Multiple Google Fonts */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Multiple Google Fonts</h2>
        <h1 style={{ fontFamily: '"Audiowide", sans-serif' }}>Audiowide Font</h1>
        <h1 style={{ fontFamily: '"Sofia", sans-serif' }}>Sofia Font</h1>
        <h1 style={{ fontFamily: '"Trirong", serif' }}>Trirong Font</h1>
      </section>

      {/* Styling Google Fonts */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Styled Google Font</h2>
        <p
          style={{
            fontFamily: '"Sofia", sans-serif',
            fontSize: "30px",
            textShadow: "3px 3px 3px #ababab",
          }}
        >
          Sofia with Shadow
        </p>
      </section>

      {/* Google Font Effects */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Google Font Effects</h2>
        <h1 className="font-effect-fire" style={{ fontFamily: '"Sofia", sans-serif' }}>
          Sofia on Fire
        </h1>
        <h1 className="font-effect-neon" style={{ fontFamily: '"Sofia", sans-serif' }}>
          Neon Effect
        </h1>
        <h1 className="font-effect-outline" style={{ fontFamily: '"Sofia", sans-serif' }}>
          Outline Effect
        </h1>
        <h1 className="font-effect-emboss" style={{ fontFamily: '"Sofia", sans-serif' }}>
          Emboss Effect
        </h1>
        <h1 className="font-effect-shadow-multiple" style={{ fontFamily: '"Sofia", sans-serif' }}>
          Multiple Shadow Effect
        </h1>
      </section>
    </div>
  );
};

export default CssGoogleFonts;
