import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Change from './component/Change';
import Form from './component/Form';
import AgentPage from './page/AgentPage';
import ShdPage from './page/ShdPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "change",
    element: <Change />,
  },
  {
    path: "form",
    element: <Form />,
  },
  {
    path: "agent",
    element: <AgentPage />,
  },
  {
    path: "shd",
    element: <ShdPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <RouterProvider router={router} />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
