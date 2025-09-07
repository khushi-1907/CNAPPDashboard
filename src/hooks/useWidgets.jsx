import { create } from 'zustand';

export const useWidgetStore = create((set, get) => ({
  categories: [],
  availableWidgets: [],
  searchQuery: '',
  isModalOpen: false,
  selectedCategory: null,
  
  // Initialize the store with data
  initialize: (data) => {
    set({ 
      categories: data.categories,
      availableWidgets: data.availableWidgets 
    });
  },
  
  // Add a widget to a category
  addWidgetToCategory: (categoryId, widgetId) => {
    const { categories, availableWidgets } = get();
    const widgetToAdd = availableWidgets.find(w => w.id === widgetId);
    
    if (!widgetToAdd) return;
    
    const updatedCategories = categories.map(category => {
      if (category.id === categoryId) {
        // Check if widget already exists in the category
        const widgetExists = category.widgets.some(w => w.id === widgetId);
        if (!widgetExists) {
          return {
            ...category,
            widgets: [...category.widgets, widgetToAdd]
          };
        }
      }
      return category;
    });
    
    set({ categories: updatedCategories });
  },
  
  // Remove a widget from a category
  removeWidgetFromCategory: (categoryId, widgetId) => {
    const { categories } = get();
    
    const updatedCategories = categories.map(category => {
      if (category.id === categoryId) {
        return {
          ...category,
          widgets: category.widgets.filter(w => w.id !== widgetId)
        };
      }
      return category;
    });
    
    set({ categories: updatedCategories });
  },
  
  // Create a new widget
  createNewWidget: (name, content, category) => {
    const { availableWidgets } = get();
    const newWidget = {
      id: `widget-${Date.now()}`,
      name,
      content,
      category,
      type: 'text'
    };
    
    set({ availableWidgets: [...availableWidgets, newWidget] });
    return newWidget;
  },
  
  // Set search query
  setSearchQuery: (query) => set({ searchQuery: query }),
  
  // Toggle modal
  toggleModal: (categoryId = null) => set((state) => ({ 
    isModalOpen: !state.isModalOpen,
    selectedCategory: categoryId || state.selectedCategory
  })),
  
  // Get filtered widgets based on search query
  getFilteredWidgets: () => {
    const { availableWidgets, searchQuery, selectedCategory } = get();
    
    if (!searchQuery.trim()) {
      return selectedCategory 
        ? availableWidgets.filter(w => w.category === selectedCategory)
        : availableWidgets;
    }
    
    const filtered = availableWidgets.filter(widget => 
      widget.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      widget.content.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    return selectedCategory 
      ? filtered.filter(w => w.category === selectedCategory)
      : filtered;
  }
}));