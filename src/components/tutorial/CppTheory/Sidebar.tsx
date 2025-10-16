// src/components/tutorial/cpp/Sidebar.tsx (Dark Mode & Responsive)

import React, { useState } from 'react';
import{ tutorialData, type SidebarItem } from '../../../data/tutorial/Cpp/CppData';

interface SidebarProps {
  activeTopicHref: string;
  onTopicClick: (href: string) => void;
  isDarkMode: boolean; 
  onToggleDarkMode: () => void; // Function to toggle dark mode
  isMobileOpen: boolean; // Controls mobile visibility
}

/**
 * Renders a single section/link in the sidebar.
 */
const SidebarSection: React.FC<{
  item: SidebarItem;
  activeTopicHref: string;
  onTopicClick: (href: string) => void;
  isDarkMode: boolean;
}> = ({ item, activeTopicHref, onTopicClick, isDarkMode }) => {

  const isCollapsibleHeader = item.children && item.children.length > 0 && item.isHeader;
  const [isOpen, setIsOpen] = useState(
    item.href === activeTopicHref ||
    (isCollapsibleHeader && item.children!.some(c => c.href === activeTopicHref))
  );

  // Dynamic Dark Mode styling
  const textColor = isDarkMode ? 'text-gray-300' : 'text-black';
  const headerIconColor = isDarkMode ? 'text-purple-300' : 'text-[rgb(99,52,185)]';

  const baseLinkClasses =
    `block py-2 px-2 text-sm ${textColor} hover:bg-[rgb(99,52,185)] hover:text-white transition-colors duration-150 rounded-sm whitespace-nowrap overflow-hidden text-ellipsis`;
  const activeLinkClasses = "bg-[rgb(99,52,185)] text-white font-semibold";
  const headerClasses = `py-2 px-2 text-sm font-bold cursor-pointer flex justify-between items-center ${textColor}`;

  const LinkComponent = (data: SidebarItem) => (
    <a
      href={`#${data.href}`}
      onClick={(e) => {
        e.preventDefault();
        onTopicClick(data.href);
      }}
      className={
        baseLinkClasses +
        (data.href === activeTopicHref ? ` ${activeLinkClasses}` : "")
      }
    >
      {data.label}
    </a>
  );

  if (isCollapsibleHeader) {
    return (
      <div className="w-full">
        <div className={headerClasses} onClick={() => setIsOpen(!isOpen)}>
          {item.label}
          <svg
            className={`w-4 h-4 ${headerIconColor} transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>

        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
          style={{ maxHeight: isOpen ? "500px" : "0px" }}
        >
          <div className="pl-4 py-1">
            {item.children!.map((child, index) => (
              <LinkComponent key={index} {...child} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return <LinkComponent {...item} />;
};

/**
 * Main Sidebar Component (CppSidebar)
 */
export const CppSidebar: React.FC<SidebarProps> = ({ activeTopicHref, onTopicClick, isDarkMode, onToggleDarkMode, isMobileOpen }) => {
  const bgColor = isDarkMode ? 'bg-gray-800 shadow-3xl' : 'bg-white shadow-2xl';
  const headerColor = isDarkMode ? 'text-white' : 'text-black';

  return (
    // Responsive classes: Sidebar is fixed and hidden on mobile unless toggled open.
    <div className={`fixed inset-y-0 left-0 z-40 h-full font-medium p-4 ${bgColor} overflow-y-auto flex-shrink-0 
        lg:w-64 md:w-56 w-full transform transition-transform duration-300 ease-in-out 
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
      
      <div className="flex justify-between items-center p-4">
        <h2 className={`text-2xl font-extrabold ${headerColor}`}>
          C++ Tutorial
        </h2>
        {/* Dark Mode Toggle Button (as requested, inside the sidebar) */}
        <button
          onClick={onToggleDarkMode}
          className={`p-2 rounded-full shadow-md transition-colors text-sm font-bold ${
            isDarkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-800'
          }`}
          title="Toggle Dark Mode"
        >
          {isDarkMode ? '🌞' : '🌙'}
        </button>
      </div>
      
      <nav className="p-2 space-y-1">
        {tutorialData.map((item, index) => (
          <SidebarSection
            key={index}
            item={item}
            activeTopicHref={activeTopicHref}
            onTopicClick={onTopicClick}
            isDarkMode={isDarkMode}
          />
        ))}
      </nav>
    </div>
  );
};