import React, { useState } from "react";
import { sidebarItems } from "./SidebarData";
import { ChevronDown, ChevronRight } from "lucide-react";

interface SidebarProps {
  selected: string;
  onSelect: (component: string) => void;
}

const CsharpSidebar: React.FC<SidebarProps> = ({ selected, onSelect }) => {
  const [openGroups, setOpenGroups] = useState<{ [key: string]: boolean }>({});

  const toggleGroup = (title: string) => {
    setOpenGroups((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <aside className="w-72 bg-gray-50 text-gray-900 border-r border-gray-200 shadow-sm min-h-screen overflow-y-auto">
      {/* Header */}
      <div className="p-5 border-b border-gray-300 bg-white">
        <h2 className="text-2xl font-bold text-blue-600">Interactive Tutorial</h2>
        <p className="text-sm text-gray-500">C# Programming</p>
      </div>

      {/* Sidebar Items */}
      <div className="p-4 space-y-3">
        {sidebarItems.map((item) => (
          <div key={item.component}>
            {/* Parent Button */}
            <button
              onClick={() =>
                item.hasArrow ? toggleGroup(item.title) : onSelect(item.component)
              }
              className={`flex items-center justify-between w-full text-left font-semibold py-2 rounded-md px-3 transition-all ${
                selected === item.component
                  ? "bg-blue-500 text-white"
                  : "text-gray-800 hover:bg-blue-100 hover:text-blue-700"
              }`}
            >
              <span>{item.title}</span>
              {item.hasArrow && (
                openGroups[item.title] ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )
              )}
            </button>

            {/* Subtopics */}
            {item.hasArrow && openGroups[item.title] && item.subtopics && (
              <ul className="ml-4 mt-1 space-y-1 border-l border-gray-300 pl-3">
                {item.subtopics.map((sub) => (
                  <li key={sub.component}>
                    <button
                      onClick={() => onSelect(sub.component)}
                      className={`block w-full text-left px-2 py-1 rounded-md text-sm ${
                        selected === sub.component
                          ? "bg-blue-200 text-blue-800 font-medium"
                          : "text-gray-600 hover:bg-blue-50 hover:text-blue-700"
                      }`}
                    >
                      {sub.title}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default CsharpSidebar;
