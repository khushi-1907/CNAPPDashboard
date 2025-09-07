import React, { useState } from 'react';
import { useWidgetStore } from '../hooks/useWidgets';

const AddWidgetModal = () => {
  const { 
    isModalOpen, 
    toggleModal, 
    selectedCategory,
    categories,
    addWidgetToCategory,
    createNewWidget,
    getFilteredWidgets,
    setSearchQuery,
    searchQuery
  } = useWidgetStore();
  
  const [activeTab, setActiveTab] = useState(selectedCategory || 'cspm');
  const [newWidgetName, setNewWidgetName] = useState('');
  const [newWidgetContent, setNewWidgetContent] = useState('');
  const [showCreateForm, setShowCreateForm] = useState(false);
  
  const filteredWidgets = getFilteredWidgets();
  
  const handleAddWidget = (widgetId) => {
    addWidgetToCategory(selectedCategory || activeTab, widgetId);
  };
  
  const handleCreateWidget = () => {
    if (newWidgetName.trim() && newWidgetContent.trim()) {
      const newWidget = createNewWidget(
        newWidgetName,
        newWidgetContent,
        selectedCategory || activeTab
      );
      addWidgetToCategory(selectedCategory || activeTab, newWidget.id);
      setNewWidgetName('');
      setNewWidgetContent('');
      setShowCreateForm(false);
    }
  };
  
  if (!isModalOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-blue-800 text-white p-4 rounded-t-xl flex justify-between items-center">
          <h2 className="text-xl font-semibold">Add Widget</h2>
          <button 
            onClick={() => {
              toggleModal();
              setShowCreateForm(false);
            }}
            className="text-white hover:text-gray-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Body */}
        <div className="p-6 flex-grow overflow-auto">
          <p className="text-gray-600 mb-4">Personalize your dashboard by adding the following widget</p>
          
          {/* Tabs */}
          <div className="flex border-b mb-4">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 font-medium ${
                  activeTab === category.id 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab(category.id)}
              >
                {category.name.split(' ')[0]}
              </button>
            ))}
          </div>
          
          {/* Search */}
          <div className="mb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search widgets..."
                className="w-full p-2 border border-gray-300 rounded-lg pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-2.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          
          {/* Create New Widget Button */}
          <button
            onClick={() => setShowCreateForm(!showCreateForm)}
            className="mb-4 text-blue-600 hover:text-blue-800 flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            Create New Widget
          </button>
          
          {/* Create New Widget Form */}
          {showCreateForm && (
            <div className="mb-4 p-4 bg-gray-50 rounded-lg">
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">Widget Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  value={newWidgetName}
                  onChange={(e) => setNewWidgetName(e.target.value)}
                  placeholder="Enter widget name"
                />
              </div>
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">Widget Content</label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  value={newWidgetContent}
                  onChange={(e) => setNewWidgetContent(e.target.value)}
                  placeholder="Enter widget content"
                  rows="3"
                />
              </div>
              <div className="flex justify-end">
                <button
                  onClick={() => setShowCreateForm(false)}
                  className="mr-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  onClick={handleCreateWidget}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Create Widget
                </button>
              </div>
            </div>
          )}
          
          {/* Widgets List */}
          <div className="space-y-2">
            {filteredWidgets.length === 0 ? (
              <p className="text-gray-500 text-center py-4">No widgets found</p>
            ) : (
              filteredWidgets.map((widget) => (
                <div 
                  key={widget.id} 
                  className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50"
                >
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 rounded"
                    onChange={() => handleAddWidget(widget.id)}
                    checked={categories
                      .find(c => c.id === (selectedCategory || activeTab))
                      ?.widgets.some(w => w.id === widget.id) || false}
                  />
                  <div className="ml-3">
                    <div className={`font-medium ${
                      widget.id === 'widget1' ? 'text-red-600' : 
                      widget.id === 'widget2' ? 'text-blue-600' : 
                      'text-gray-800'
                    }`}>
                      {widget.name}
                    </div>
                    <div className="text-sm text-gray-500">{widget.content}</div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        
        {/* Footer */}
        <div className="p-4 border-t flex justify-end space-x-3">
          <button
            onClick={() => {
              toggleModal();
              setShowCreateForm(false);
            }}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              toggleModal();
              setShowCreateForm(false);
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddWidgetModal;