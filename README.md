# Dynamic Dashboard Application

A flexible and interactive dashboard built with **React**, **Vite**, and **Tailwind CSS** that allows users to dynamically manage widgets across different categories.

---

## Features

- **Dynamic Widget Management:** Add, remove, and create custom widgets.  
- **Category Organization:** Organize widgets into categories like CSPM, CWPP, and Registry Scan.  
- **Search Functionality:** Quickly find widgets using the built-in search.  
- **Responsive Design:** Works seamlessly on desktop and mobile devices.  
- **State Management:** Efficient state handling with **Zustand**.  
- **Customizable UI:** Clean, modern interface powered by **Tailwind CSS**.  

---

## Technologies Used

- **React 18** – Frontend framework  
- **Vite** – Fast build tool and development server  
- **Tailwind CSS** – Utility-first CSS framework  
- **Zustand** – Lightweight state management  
- **Lucide React** – Icon library  
- **Recharts** – Data visualization library  

---

## Getting Started

### Prerequisites

- Node.js v14 or higher  
- npm or yarn  

### Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/dashboard-app.git
cd dashboard-app
```

Install dependencies:
```bash
npm install
```
Running the Application

Start the development server:
```bash
npm run dev
```

Open your browser and navigate to http://localhost:5173
 to view the application.

Building for Production

To create a production build:
```bash
npm run build
```

The optimized files will be in the dist directory.

Project Structure
```graph
dashboard-app/
├── src/
│   ├── components/
│   │   ├── AddWidgetModal.jsx
│   │   ├── Dashboard.jsx
│   │   ├── TopNav.jsx
│   │   ├── Widget.jsx
│   │   └── WidgetCard.jsx
│   ├── hooks/
│   │   └── useDashboardStore.js
│   ├── data/
│   │   └── initialData.js
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```
