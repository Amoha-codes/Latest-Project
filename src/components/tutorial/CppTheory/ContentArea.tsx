// src/components/tutorial/cpp/ContentArea.tsx (Next Button Fix & Dark Mode)

import React from 'react';
import type{ SidebarItem, TopicContent } from '../../../data/tutorial/Cpp/CppData';

interface ContentAreaProps {
  currentContent: TopicContent;
  prevTopic: SidebarItem | null;
  nextTopic: SidebarItem | null;
  onTopicClick: (href: string) => void;
  isDarkMode: boolean;
  onToggleSidebar: () => void; // Function to open/close mobile sidebar
}

const NavButton: React.FC<{
  topic: SidebarItem | null;
  isNext: boolean;
  onClick: (href: string) => void;
}> = ({ topic, isNext, onClick }) => {
  
  // FIX: This logic ensures that if 'topic' exists, the button is enabled and has the correct label.
  const buttonLabel = (() => {
    if (!topic) {
      return isNext ? 'Next Topic >' : '< Previous Topic';
    }
    // If topic exists, use its label. This fixes the issue.
    return isNext ? `Next: ${topic.label} >` : `< Previous: ${topic.label}`;
  })();

  return (
    <button
      onClick={() => topic && onClick(topic.href)}
      disabled={!topic}
      className={`font-semibold py-2 px-6 rounded-full shadow-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm flex items-center ${
        topic ? "bg-[rgb(99,52,185)] text-white hover:bg-purple-600" : "bg-gray-300 text-black"
      }`}
    >
      {buttonLabel}
    </button>
  );
};


export const ContentArea: React.FC<ContentAreaProps> = ({
  currentContent,
  prevTopic,
  nextTopic,
  onTopicClick,
  isDarkMode,
  onToggleSidebar
}) => {
  const cardBgColor = isDarkMode ? 'bg-gray-800' : 'bg-white';
  const titleColor = isDarkMode ? 'text-white' : 'text-black';
  const subtitleColor = isDarkMode ? 'text-purple-300' : 'text-[rgb(99,52,185)]';

  return (
    <main
      id="main-content-scroll"
      // ml-64 shifts content area over to the right on large screens
      // pt-16 adds padding for the fixed mobile header
      className={`flex-1 p-8 overflow-y-auto scrollbar-hidden lg:ml-64 w-full pt-16 lg:pt-8`} 
    >
      {/* Mobile Menu Button (Fixed at the top on small screens, part of the responsive design) */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-30 flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow-md">
          <h1 className={`text-xl font-bold ${titleColor}`}>{currentContent.title}</h1>
          <button
              onClick={onToggleSidebar}
              className={`p-2 rounded-lg ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'}`}
          >
              Menu
          </button>
      </div>

      <div className={`max-w-5xl mx-auto mt-0 lg:mt-14 p-8 rounded-xl shadow-lg ${cardBgColor}`}>
        {/* Title visible on large screens */}
        <h1 className={`text-4xl font-bold mb-2 ${titleColor} hidden lg:block`}>
          {currentContent.title}
        </h1>

        {currentContent.subtitle && (
          <p className={`text-xl font-medium mb-6 ${subtitleColor}`}>
            {currentContent.subtitle}
          </p>
        )}

        {/* Prev / Next Buttons */}
        <div className="flex justify-between mb-8 pb-4">
          <NavButton topic={prevTopic} isNext={false} onClick={onTopicClick} />
          <NavButton topic={nextTopic} isNext={true} onClick={onTopicClick} />
        </div>

        {/* Dynamic Content */}
        <div className="min-h-[400px]">{currentContent.content}</div>
      </div>
    </main>
  );
};