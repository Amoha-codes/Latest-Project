import React from 'react';

const ProbabilitySampling: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Probability Sampling ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Probability Sampling
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 31 Oct, 2023</p>

    <p className="text-lg leading-relaxed">
      Probability sampling ensures every member of a population has an equal chance of being selected, producing unbiased and reliable samples for research and data analysis.
    </p>

    {/* Table of Content */}
    <h2 className="text-3xl font-bold mt-8">Table of Content</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>What is Probability Sampling?</li>
      <li>Different types of Probability Sampling</li>
      <li>Benefits of Probability Sampling</li>
      <li>Limitations of Probability Sampling</li>
      <li>How to Conduct Probability Sampling</li>
      <li>Applications of Probability Sampling</li>
      <li>When to Use Probability Sampling</li>
      <li>Difference between Probability and Non-Probability Sampling</li>
      <li>Characteristics of Probability Sampling</li>
      <li>FAQs</li>
    </ul>

    {/* What is Probability Sampling */}
    <h2 className="text-3xl font-bold mt-8">What is Probability Sampling?</h2>
    <p className="leading-relaxed">
      Probability sampling is a structured method of selecting a random sample from a larger population. Every individual has a known, non-zero chance of being selected, allowing predictions about the population from the sample.
    </p>

    {/* Types of Probability Sampling */}
    <h2 className="text-3xl font-bold mt-8">Different Types of Probability Sampling</h2>
    
    <h3 className="text-2xl font-semibold mt-4">1. Simple Random Sampling</h3>
    <p className="leading-relaxed">
      Each item has an equal chance of selection, typically using a random number generator. Example: Selecting 20 chocolate bars from a production line by assigning serial numbers and choosing randomly.
    </p>

    <h3 className="text-2xl font-semibold mt-4">2. Systematic Sampling</h3>
    <p className="leading-relaxed">
      Select every nth item from a population. Example: Choosing every 10th customer in a store for feedback.
    </p>

    <h3 className="text-2xl font-semibold mt-4">3. Stratified Sampling</h3>
    <p className="leading-relaxed">
      Divide the population into strata (e.g., age, gender) and randomly sample from each stratum. Example: Surveying smartphone preferences across age groups by randomly selecting within each group.
    </p>

    <h3 className="text-2xl font-semibold mt-4">4. Cluster Sampling</h3>
    <p className="leading-relaxed">
      Divide the population into clusters, randomly select clusters, and include all items within chosen clusters. Example: Surveying traffic congestion by selecting a few neighborhoods and surveying all streets within them.
    </p>

    {/* Benefits */}
    <h2 className="text-3xl font-bold mt-8">Benefits of Probability Sampling</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Reduces bias and ensures representative samples.</li>
      <li>Allows statistical inference about the population.</li>
      <li>Increases transparency and reliability of results.</li>
      <li>Enables calculation of sampling error.</li>
      <li>Provides higher confidence in generalizations.</li>
    </ul>

    {/* Limitations */}
    <h2 className="text-3xl font-bold mt-8">Limitations of Probability Sampling</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>More expensive and time-consuming than non-probability sampling.</li>
      <li>Undercoverage and sampling errors are possible.</li>
      <li>Requires a complete list of population members.</li>
      <li>Non-response bias may occur if participants refuse.</li>
    </ul>

    {/* How to Conduct */}
    <h2 className="text-3xl font-bold mt-8">How to Conduct Probability Sampling</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Define the population.</li>
      <li>Choose the appropriate probability sampling method.</li>
      <li>Identify a complete sampling frame.</li>
      <li>Select a random sample using random number generators.</li>
      <li>Collect data and analyze results.</li>
    </ul>

    {/* Applications */}
    <h2 className="text-3xl font-bold mt-8">Applications of Probability Sampling</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Market research to analyze consumer behavior.</li>
      <li>Academic research for reliable study results.</li>
      <li>Quality control to check product standards.</li>
      <li>Audit sampling for financial record accuracy.</li>
    </ul>

    {/* When to Use */}
    <h2 className="text-3xl font-bold mt-8">When to Use Probability Sampling</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>When generalizing findings to the whole population.</li>
      <li>For unbiased and representative results.</li>
      <li>In large-scale surveys and research projects.</li>
      <li>To calculate sampling error and confidence levels.</li>
    </ul>

    {/* Difference from Non-Probability Sampling */}
    <h2 className="text-3xl font-bold mt-8">Difference between Probability and Non-Probability Sampling</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Probability Sampling: Known, non-zero chance for each member. Non-Probability: Unequal or unknown chances.</li>
      <li>Randomness ensures unbiased selection in probability sampling.</li>
      <li>Probability sampling allows statistical generalization; non-probability may not.</li>
      <li>Precision and validity are higher in probability sampling.</li>
    </ul>

    {/* Characteristics */}
    <h2 className="text-3xl font-bold mt-8">Characteristics of Probability Sampling</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Known and non-zero chance of selection.</li>
      <li>Random selection reduces bias.</li>
      <li>Representative of the population.</li>
      <li>Allows statistical inference.</li>
      <li>Transparent selection process.</li>
    </ul>

    {/* Conclusion */}
    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      Probability sampling is essential for selecting representative samples from large populations, ensuring unbiased and reliable results.
    </p>

    {/* FAQs */}
    <h2 className="text-3xl font-bold mt-8">FAQs</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><b>Sampling Error:</b> Difference between sample and population. Probability sampling minimizes it through structured random selection.</li>
      <li><b>Advantages:</b> Reduces bias and allows generalization, unlike non-probability sampling.</li>
      <li><b>Sample Size Calculation:</b> Consider confidence level, margin of error, and population variability.</li>
      <li><b>Large Populations:</b> Can be used efficiently with stratified or cluster sampling.</li>
      <li><b>Pitfalls:</b> Avoid undercoverage, non-response bias, and incomplete sampling frames.</li>
    </ul>

  </div>
);

export default ProbabilitySampling;
