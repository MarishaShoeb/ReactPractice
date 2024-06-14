import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layout/MainLayout';
import JobsPage from './pages/JobsPage';
import JobPage, { jobLoader } from './pages/JobPage';
import ErrorPage from './pages/ErrorPage';
import AddJobPage from './pages/AddJobPage';



function App() {
  //Adding a new Job
  const addJob = async (newJob) => {

    const res = await fetch('http://localhost:8000/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    });
    return;
  }


  //Deleting an existing Job
  const deleteJob = async (id) => {
    console.log("delted", id)
    const res = await fetch(`http://localhost:8000/jobs/${id}`, {
      method: 'DELETE',

    });
    return;
  }



  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />}> </Route>
        <Route path="/jobs/:id" element={<JobPage deleteJob={deleteJob} />} loader={jobLoader}></Route>
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} > </Route>
        <Route path="*" element={<ErrorPage />}> </Route>
      </Route>
    ))

  return (
    <><RouterProvider router={router} />



    </>
  )
}

export default App
