import React from 'react';
import Widget from './Widget';
import { useWidgetStore } from '../hooks/useWidgets';

const Category = ({ category }) => {
  const { toggleModal } = useWidgetStore();
  
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-700">{category.name}</h2>
        <button 
          onClick={() => toggleModal(category.id)}
          className="text-blue-600 hover:text-blue-800 flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          Add Widget
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.widgets.map((widget) => (
          <Widget 
            key={widget.id} 
            widget={widget} 
            categoryId={category.id} 
          />
        ))}
        
        {/* Add Widget Card */}
        <div 
          className="bg-white rounded-xl shadow-sm border-2 border-dashed border-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={() => toggleModal(category.id)}
        >
          <div className="text-center p-8">
            <div className="mx-auto bg-gray-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <p className="text-gray-500 font-medium">Add Widget</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;