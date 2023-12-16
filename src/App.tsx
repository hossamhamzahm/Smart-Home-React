import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css"
import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import RootLayout from './components/RootLayout'
import Home from "./components/UpperSection/Home/Home";
import RoomsPage from "./components/UpperSection/room/RoomsPage";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/rooms" element={<RoomsPage />}></Route>
    </Route>
  )
)

function App() {

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
