import React, { useState } from 'react';
import Sidebar from './componenets/Sidebar';
import Artwork from './componenets/Artwork';
import ToggleButton from './componenets/ToggleButton';
import './App.css';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app">
      <ToggleButton toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Artwork />
    </div>
  );
};

export default App;