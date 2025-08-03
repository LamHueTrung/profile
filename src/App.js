import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import React from 'react';

import Index from './pages/home';
import About from './pages/about';
import Portfolio from './pages/portfolio';
import Skill from './pages/skills';
import Contact from './pages/contact';

const router = createBrowserRouter([
  {
      path: '/about',
      element: <About />,
  },
  {
      path: '/portfolio',
      element: <Portfolio />,
  },
  {
    path: '/skills',
    element: <Skill />,
  },
  {
      path: '/contact',
      element: <Contact />,
  },
  {
      path: '/',
      element: <Index />,
  },
]);
function App() {
  return (
      <div className="App">
          <RouterProvider router={router} />
      </div>
  );
}

export default App;
