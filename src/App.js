import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/Routes/Route';
import Header from './Shared/Header/Header';

function App() {
  return (
    <div className='max-w-[1440] mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
