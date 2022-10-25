import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Main from './layout/Main';




function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App;
