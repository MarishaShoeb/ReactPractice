import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layout/MainLayout';
import Jobs from './pages/Jobs';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<Jobs />}> </Route>
      <Route path="*" element={<ErrorPage />}> </Route>
    </Route>
  ))

function App() {
  return (
    <><RouterProvider router={router} />

    </>
  )
}

export default App
