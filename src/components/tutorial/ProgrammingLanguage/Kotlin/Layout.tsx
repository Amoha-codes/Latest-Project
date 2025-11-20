import React from "react";
import KotlinSidebar from "./KotlinSidebar";



interface LayoutProps {
  children: React.ReactNode;
  selected: string;
  onSelect: (component: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, selected, onSelect }) => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <KotlinSidebar selected={selected} onSelect={onSelect} />

      {/* Main Content */}
      <main className="flex-1 p-8 bg-white overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;
