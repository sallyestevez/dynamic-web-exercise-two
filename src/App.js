import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import './App.css';
import Article from "./pages/article";
import List from './pages/list';

const router = createBrowserRouter([ /* function takes in one argument - array containing objects */
  {
    path: "/",
    element: <List />,
  },
  {
    path: "/article",
    element: <Article />,
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
