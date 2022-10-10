import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Router/router';
import ScrollToTop from './ScrollToTop/ScrollToTop';

function App() {

  return (
    <div >

        <RouterProvider router={router}>
      
     </RouterProvider>
    </div>
  )
}

export default App
