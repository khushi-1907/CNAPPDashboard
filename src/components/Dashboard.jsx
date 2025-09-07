import React, { useEffect } from 'react';
import { useWidgetStore } from '../hooks/useWidgets';
import Category from './Category';
import AddWidgetModal from './AddWidgetModal';
import initialData from '../data/widgets.json';

const Dashboard = () => {
  const { categories, initialize, isModalOpen, toggleModal } = useWidgetStore();
  
  useEffect(() => {
    initialize(initialData);
  }, [initialize]);
  
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">CNAPP Dashboard</h1>
          <button 
            onClick={() => toggleModal()}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            Add Widget
          </button>
        </div>
        
        {/* Categories */}
        <div className="space-y-8">
          {categories.map((category) => (
            <Category 
              key={category.id} 
              category={category} 
            />
          ))}
        </div>
      </div>
      
      {/* Add Widget Modal */}
      {isModalOpen && <AddWidgetModal />}
    </div>
  );
};

export default Dashboard;