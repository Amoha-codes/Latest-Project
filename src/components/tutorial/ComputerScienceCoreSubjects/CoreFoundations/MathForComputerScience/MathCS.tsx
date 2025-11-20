import React, { useState } from 'react';
// Import Layout
import Layout from './Layout.tsx';
// Import sidebar data
import { sidebarItems } from './SidebarData.ts';

// Import specific topic components
import Home from './Topic/Home.tsx';
import PropositionalIntro from '../EngineeringMathematics/Topic/PropositionalIntro.tsx';

// Map topic keys (from SidebarData) to actual components
const topicComponents: { [key: string]: React.FC } = {
  // 1. Propositional and First-Order Logic
  Home:Home,
  PropositionalIntro:PropositionalIntro,
     
};

const MathCS: React.FC = () => {
  // Initialize 'selected' with the first sidebar item's component key
  const [selectedTopic, setSelectedTopic] = useState<string>(
    sidebarItems[0]?.component || 'Overview'
  );

  const handleSelectTopic = (componentKey: string) => {
    setSelectedTopic(componentKey);
  };

  // Dynamically get the selected Component
  const CurrentComponent = topicComponents[selectedTopic];

  return (
    <div className="MainApplication">
      <Layout selected={selectedTopic} onSelect={handleSelectTopic}>
        {CurrentComponent ? (
          <CurrentComponent />
        ) : (
          <div className="text-center p-10 text-xl text-red-500">
            Topic content not found for "{selectedTopic}".
          </div>
        )}
      </Layout>
    </div>
  );
};

export default MathCS;
