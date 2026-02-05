import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import ModeSelectionPage from './components/ModeSelectionPage';
import NoteNotationSelectionPage from './components/NoteNotationSelectionPage';
import NoteReadingPage from './components/NoteReadingPage';
import BlackKeysPage from './components/BlackKeysPage';
import NotFoundPage from './components/NotFoundPage';
import GreatOctavePage from './components/GreatOctavePage';
import SmallOctavePage from './components/SmallOctavePage';
import OneLineOctavePage from './components/OneLineOctavePage';
import TwoLineOctavePage from './components/TwoLineOctavePage';

const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/mode-selection',
    element: <ModeSelectionPage />,
  },
  {
    path: '/note-notation-selection',
    element: <NoteNotationSelectionPage />,
  },
  {
    path: '/mode-selection/note-reading',
    element: <NoteReadingPage />,
  },
  {
    path: '/mode-selection/note-reading/black-keys',
    element: <BlackKeysPage />,
  },
  {
    path: '/small-octave',
    element: <SmallOctavePage />,
  },
  {
    path: '/great-octave',
    element: <GreatOctavePage />,
  },
  {
    path: '/one-line-octave',
    element: <OneLineOctavePage />,
  },
  {
    path: '/two-line-octave',
    element: <TwoLineOctavePage />,
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
