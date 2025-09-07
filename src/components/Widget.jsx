import React from 'react';
import { useWidgetStore } from '../hooks/useWidgets';

const Widget = ({ widget, categoryId }) => {
  const { removeWidgetFromCategory } = useWidgetStore();
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 relative">
      <button 
        onClick={() => removeWidgetFromCategory(categoryId, widget.id)}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      
      <h3 className="font-semibold text-gray-800 mb-3">{widget.name}</h3>
      
      {widget.type === 'chart' ? (
        <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Chart Placeholder</p>
        </div>
      ) : (
        <p className="text-gray-600">{widget.content}</p>
      )}
    </div>
  );
};

export default Widget;