import React from 'react';
import { X } from 'lucide-react';
import { useDashboardStore } from '../hooks/useDashboardStore';

const WidgetCard = ({ widget, categoryId }) => {
  const { removeWidgetFromCategory } = useDashboardStore();
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 relative">
      <button 
        onClick={() => removeWidgetFromCategory(categoryId, widget.id)}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
      >
        <X className="h-5 w-5" />
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

export default WidgetCard;