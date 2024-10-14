import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routers/root.jsx';
import ErrorPage from './routers/error-page.jsx';
import LandingPage from './routers/landing-page.jsx';
import Contacts from './routers/contacts.jsx';
import ContactForm from './routers/contact-form.jsx';

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
      {
        path: "contacts/new",
        element: <ContactForm />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
