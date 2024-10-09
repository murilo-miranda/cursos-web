import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import IndexPage from './pages/courses/index';
import ShowPage from './pages/courses/show';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import CreateForm from './pages/courses/form/create';
import EditForm from './pages/courses/form/edit'

const router = createBrowserRouter([
  {
    path: "/", 
    element: <App />,
    children: [
      {
        path: "/", element: <IndexPage />
      },
      {
        path: "course/edit", element: <EditForm />
      },
      {
        path: "course/create", element: <CreateForm />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
