
import './Global.css'
import { BrowserRouter as Router , Route ,Routes, useLocation, createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import Projects from './components/pages/projects/Projects';
import Contacts from './components/pages/contacts/contacts';

function App() {
  const router = createBrowserRouter(
    [
      {
        path:'/',
        element:<Layout/>,
        children:[
          {
            children:[
              {path:'/' , element:<Home/>},
              {path:'/about' , element:<About/>},
              {path:'/projects' , element:<Projects/>},
              {path:'/contacts' , element:<Contacts/>},
            ]
          }
        ]
      }
    ]
  )
  return (
    <RouterProvider router={router}></RouterProvider> 
    
  )
}

export default App
