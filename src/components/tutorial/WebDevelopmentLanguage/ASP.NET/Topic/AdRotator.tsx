import React from "react";

const AdRotator: React.FC = () => {
  const ads = [
    {
      imageUrl: "rose1.jpg",
      navigateUrl: "http://www.1800flowers.com",
      alternateText: "Order flowers, roses, gifts and more",
    },
    {
      imageUrl: "rose2.jpg",
      navigateUrl: "http://www.babybouquets.com.au",
      alternateText: "Order roses and flowers",
    },
    {
      imageUrl: "rose3.jpg",
      navigateUrl: "http://www.flowers2moscow.com",
      alternateText: "Send flowers to Russia",
    },
    {
      imageUrl: "rose4.jpg",
      navigateUrl: "http://www.edibleblooms.com",
      alternateText: "Edible Blooms",
    },
  ];

  // Pick a random ad
  const randomAd = ads[Math.floor(Math.random() * ads.length)];

  return (
    <div className="mt-20 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">
        ASP.NET AdRotator
      </h1>

      {/* Intro */}
      <p className="leading-relaxed">
        The <strong>AdRotator</strong> control randomly selects banner graphics 
        from an external XML schedule file. Each ad includes an image, 
        navigation link, alternate text, and display frequency.
      </p>

      {/* AdRotator Example */}
      <h2 className="text-2xl font-bold">Example: Display Random Advertisement</h2>

      <p className="leading-relaxed">
        Each time the page reloads, a random ad is displayed:
      </p>

      <div className="mt-4 border p-4 rounded-lg shadow-md flex justify-center items-center">
        <a href={randomAd.navigateUrl} target="_blank" rel="noopener noreferrer">
          <img
            src={randomAd.imageUrl}
            alt={randomAd.alternateText}
            className="max-w-full h-auto rounded-md"
          />
        </a>
      </div>

      <p className="leading-relaxed mt-2">
        <strong>Alternate Text:</strong> {randomAd.alternateText}
      </p>

      <h2 className="text-2xl font-bold mt-6">AdRotator XML File Structure</h2>

      <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`<Advertisements>
  <Ad>
    <ImageUrl>rose1.jpg</ImageUrl>
    <NavigateUrl>http://www.1800flowers.com</NavigateUrl>
    <AlternateText>Order flowers, roses, gifts and more</AlternateText>
    <Impressions>20</Impressions>
    <Keyword>flowers</Keyword>
  </Ad>
  <Ad>
    <ImageUrl>rose2.jpg</ImageUrl>
    <NavigateUrl>http://www.babybouquets.com.au</NavigateUrl>
    <AlternateText>Order roses and flowers</AlternateText>
    <Impressions>20</Impressions>
    <Keyword>gifts</Keyword>
  </Ad>
  <!-- More ads... -->
</Advertisements>`}
      </pre>

      <p className="leading-relaxed">
        The XML file contains details of each advertisement, including the 
        image URL, navigation URL, alternate text, impressions, and keywords. 
        ASP.NET AdRotator reads this file and randomly selects an ad to display.
      </p>
    </div>
  );
};

export default AdRotator;
