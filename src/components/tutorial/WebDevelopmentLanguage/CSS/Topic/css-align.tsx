import React from "react";

const CssAlign: React.FC = () => {
  return (
    <div className="space-y-16 p-4">

      {/* Horizontal Center - Block Element */}
      <section>
        <h2 className="text-xl font-bold mb-2">Horizontal Center - Block Element</h2>
        <div
          style={{
            margin: "auto",
            width: "50%",
            border: "3px solid green",
            padding: "10px",
            textAlign: "center",
          }}
        >
          I am centered horizontally
        </div>
      </section>

      {/* Center Text */}
      <section>
        <h2 className="text-xl font-bold mb-2">Center Text</h2>
        <p style={{ textAlign: "center" }}>This text is centered</p>
      </section>

      {/* Center Image */}
      <section>
        <h2 className="text-xl font-bold mb-2">Center Image</h2>
        <img
          src="https://via.placeholder.com/150"
          alt="Placeholder"
          style={{ display: "block", margin: "0 auto", width: "40%" }}
        />
      </section>

      {/* Center with Flexbox */}
      <section>
        <h2 className="text-xl font-bold mb-2">Center with Flexbox</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "200px",
            border: "3px solid green",
          }}
        >
          I am vertically and horizontally centered
        </div>
      </section>

      {/* Center with Grid */}
      <section>
        <h2 className="text-xl font-bold mb-2">Center with Grid</h2>
        <div
          style={{
            display: "grid",
            placeItems: "center",
            height: "200px",
            border: "3px solid green",
          }}
        >
          I am vertically and horizontally centered
        </div>
      </section>

      {/* Right Align - Absolute */}
      <section>
        <h2 className="text-xl font-bold mb-2">Right Align - Absolute</h2>
        <div
          style={{
            position: "relative",
            height: "100px",
            border: "1px dashed gray",
          }}
        >
          <div
            style={{
              position: "absolute",
              right: "0px",
              width: "300px",
              border: "3px solid green",
              padding: "10px",
            }}
          >
            Positioned Right
          </div>
        </div>
      </section>

      {/* Right Align - Float */}
      <section>
        <h2 className="text-xl font-bold mb-2">Right Align - Float</h2>
        <div
          style={{
            border: "1px dashed gray",
            height: "100px",
            padding: "10px",
          }}
        >
          <div
            style={{
              float: "right",
              width: "300px",
              border: "3px solid green",
              padding: "10px",
            }}
          >
            Floated Right
          </div>
        </div>
      </section>

      {/* Center with Position & Transform */}
      <section>
        <h2 className="text-xl font-bold mb-2">Center with Position & Transform</h2>
        <div
          style={{
            position: "relative",
            height: "200px",
            border: "3px solid green",
          }}
        >
          <p
            style={{
              margin: 0,
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            Vertically & Horizontally Centered
          </p>
        </div>
      </section>

    </div>
  );
};

export default CssAlign;
